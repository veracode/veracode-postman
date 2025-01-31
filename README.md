<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/veracode/veracode.github.io/aed0a49cd8b08056e6093232a29f49791bf21432/assets/images/veracode-white-hires.svg" height="200" width="200">
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/veracode/veracode.github.io/aed0a49cd8b08056e6093232a29f49791bf21432/assets/images/veracode-black-hires.svg" height="200" width="200">
    <img alt="Veracode Logo" src="https://raw.githubusercontent.com/veracode/veracode.github.io/aed0a49cd8b08056e6093232a29f49791bf21432/assets/images/veracode-black-hires.svg" height="200" width="200">
</picture>

# Accessing Veracode APIs with Postman

## Overview

Using [Veracode APIs](https://docs.veracode.com/r/c_gettingstarted) with Postman requires initial configuration to accommodate HMAC signing. Below are instructions for getting up and running with Veracode APIs in Postman.

## Before You Begin

### Generate Token Credentials

If you have not does so, please follow these steps to generate the necessary API Token Credential to use with Postman. This will be required for providing the variables of *api_id* and *api_key*.

1. [Generate API credentials](https://docs.veracode.com/r/t_create_api_creds) for your Veracode user.
2. Store the credential information is  a safe place or as a [credential file](https://docs.veracode.com/r/c_configure_api_cred_file) for use with Veracode products.

## Postman Example

These instructions will help you quickly setup the Postman example provided by Veracode. The example provides all the necessary scripts, environments, variables and collection request examples to start using Postman against Veracode APIs.

The content used for this example is located [here](https://github.com/veracode/veracode-postman/tree/main) The content consist of a Collection, Environment and pre-request script.

- [Environment](https://github.com/veracode/veracode-postman/blob/main/Veracode.postman_environment.json)
- [Example Collection](https://github.com/veracode/veracode-postman/blob/main/Veracode%20Example.postman_collection.json)
- [Pre-request script](https://github.com/veracode/veracode-postman/blob/main/pre-request.js)

### Setup Postman Example

1. Install Postman on your machine. You can download from the [Postman web site](https://www.postman.com/downloads/).
2. Create a Postman Workspace or use an existing one
3. In the Postman **Environments** section (left nav) select the *import* button.
4. Drag and drop or navigate to the the **Veracode.postman_environment.json**
5. Select the new **Veracode** environment that is listed
6. Update the following variables as type *secret*
   - *api_id* : (set to your Veracode API ID)
   - *api_key* : (set to your Veracode API Key)
7. Update both the initial value and current value or update initial value and persist to current value
8. Save changes to environment variables

> More information about secrets and environment variables, see the [Postman docs](https://blog.postman.com/introducing-secret-variable-type-in-postman/)

8. In the Postman **Collections** section (left nav) select the import button.
9. Drag and drop or navigate to the the ***Veracode Example.postman_collection.json**

10. In the upper right hand corner set the environment drop down to **Veracode**

Now you should be able to run any of the request without any additional configuration. Enjoy!

### Setup Postman Manually

1. In the **Authorization** tab, select `Digest Auth`.
2. In the **Pre-Request Scripts** tab, paste in the script found in [pre-request.js](https://github.com/veracode/veracode-postman/blob/main/pre-request.js).
3. Create an environment that contains the secret variables **api_id** and **api_key**
4. *Recommended*: In the Variables tab, define a variable called `base_url` and enter the base URL for your API calls. The base URL depends on your region and is documented in the **REST APIs** section in the [Region Domains for Veracode Services](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

## Usage

1. Go to the newly created collection and choose **Add Request** from the …. menu.
1. Give the request a name and click **Save to [Collection Name]**.
1. Click on the newly created request and enter the request information in the URL fields at the top.
    1. Choose the `HTTP` method.
    1. *Recommended*: Enter the URL in the format `{{base_url}}/url-string`. For instance, to get information about the currently signed in user, enter `{{base_url}}/api/authn/v2/users/self`. (Note that this requires you to define `base_url` in the **Variables** tab for your collection.)
1. Click on the **Authorization** tab and verify that it is set to `Inherit auth from parent`.
1. Add any other information required by the request such as a body.
1. Click **Send**.

## License

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
See the [LICENSE](https://github.com/veracode/.github/blob/main/LICENSE) for details

## Acknowledgements

This work is indebted to [CTCampbell](https://github.com/ctcampbell)'s initial example for how to authenticate with Postman.
