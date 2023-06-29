/*jshint esversion: 6 */

var url = require('url');

/* set Veracode API credentials in api_id and api_key in environment*/
const id = pm.environment.get('api_id');
const key = pm.environment.get('api_key');

const authorizationScheme = 'VERACODE-HMAC-SHA-256';
const requestVersion = "vcode_request_version_1";
const nonceSize = 16;

function computeHashHex(message, key_hex) {
    return CryptoJS.HmacSHA256(message, CryptoJS.enc.Hex.parse(key_hex)).toString(CryptoJS.enc.Hex);
}

function calculateDataSignature(apikey, nonceBytes, dateStamp, data) {
    let kNonce = computeHashHex(nonceBytes, apikey);
    let kDate = computeHashHex(dateStamp, kNonce);
    let kSig = computeHashHex(requestVersion, kDate);
    return computeHashHex(data, kSig);
}

function newNonce() {
    return CryptoJS.lib.WordArray.random(nonceSize).toString().toUpperCase();
}

function toHexBinary(input) {
    return CryptoJS.enc.Hex.stringify(CryptoJS.enc.Utf8.parse(input));
}

function removePrefixFromApiCredential(input) {
    return input.split('-').at(-1);
}

function calculateVeracodeAuthHeader(httpMethod, requestUrl) {
    const formattedId = removePrefixFromApiCredential(id);
    const formattedKey = removePrefixFromApiCredential(key);

    let parsedUrl = url.parse(requestUrl);
    let data = `id=${formattedId}&host=${parsedUrl.hostname}&url=${parsedUrl.path}&method=${httpMethod}`;
    let dateStamp = Date.now().toString();
    let nonceBytes = newNonce();
    let dataSignature = calculateDataSignature(formattedKey, nonceBytes, dateStamp, data);
    let authorizationParam = `id=${formattedId},ts=${dateStamp},nonce=${toHexBinary(nonceBytes)},sig=${dataSignature}`;
    return authorizationScheme + " " + authorizationParam;
}

var {Property} = require('postman-collection');
const substitutedUrl = Property.replaceSubstitutions(request.url, pm.variables.toObject());

let hmac = calculateVeracodeAuthHeader(pm.request.method, substitutedUrl);
pm.request.headers.add({
  key: "Authorization",
  value: hmac 
});