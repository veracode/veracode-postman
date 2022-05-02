<img src="https://docs.veracode.com/internal/api/webapp/header/logo" width="200" /><br>

# Accessing Veracode APIs with Postman

## Overview

Using [Veracode APIs](https://docs.veracode.com/r/c_gettingstarted) with Postman requires initial configuration to accommodate HMAC signing. Below are instructions for getting up and running with Veracode APIs in Postman.

## Before You Begin

### Veracode environment

1. [Generate API credentials](https://docs.veracode.com/r/t_create_api_creds) for your Veracode user.
1. Save your API credentials to your [credentials file](https://docs.veracode.com/r/c_configure_api_cred_file).

### Postman environment

1. Install Postman on your machine. You can download from the [Postman web site](https://www.postman.com/downloads/).
1. Create a collection in Postman for your API calls, and edit the following settings:
    1. In the **Environments** section (left nav), add the following variables, selecting the `secret` type (for more information about secrets in environment variables, see the [Postman docs](https://blog.postman.com/introducing-secret-variable-type-in-postman/)):
        - `api_id`: (set to your Veracode API ID)
        - `api_key`: (set to your Veracode API Key)
    1. In the **Authorization** tab, select `Digest Auth`.
    1. In the **Pre-Request Scripts** tab, paste in the script found in [pre-request.js](https://github.com/veracode/veracode-postman/blob/main/pre-request.js).
    1. *Recommended*: In the Variables tab, define a variable called `base_url` and enter the base URL for your API calls. The base URL depends on your region and is documented in the **REST APIs** section in the [Region Domains for Veracode Services](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

## Usage

1. Go to the newly created collection and choose **Add Request** from the …. menu.
1. Give the request a name and click **Save to [Collection Name]**.
1. Click on the newly created request and enter the request information in the URL fields at the top.
    1. Choose the `HTTP` method.
    1. *Recommended*: Enter the URL in the format `{{base_url}}/url-string`. For instance, to get information about the currently signed in user, enter `{{base_url}}/api/authn/v2/users/self`. (Note that this requires you to define `base_url` in the **Variables** tab for your collection.)
1. Click on the **Authorization** tab and verify that it is set to `Inherit auth from parent`.
1. Click on the **Headers** tab and add a header called `Authorization` with value `{{hmacAuthHeader}}`.
1. Add any other information required by the request such as a body.
1. Click **Send**.

## Postman Example Collection

An [example Postman collection is provided here](https://github.com/veracode/veracode-postman/blob/main/Veracode%20Example.postman_collection.json). The Collection is a JSON package and includes a copy of the pre-request script. Upload it into your Postman application by selecting Import and dragging the file into the File window.

## License

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
See the [LICENSE](https://github.com/veracode/.github/blob/main/LICENSE) for details

## Acknowledgements

This work is indebted to [CTCampbell](https://github.com/ctcampbell)'s initial example for how to authenticate with Postman.
