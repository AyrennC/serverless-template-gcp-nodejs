# Serverless Template - Google Cloud Function NodeJS

This is a template for kick-starting a Nodejs + Typescript project for Google Cloud Function. a bitbucket pipeline is included for CI/CD.

## <a name="quick-start"></a>Quick Start

1. **Install serverless via npm:**

```bash
npm install -g serverless
```

2. **Create a Service using the template:**

```bash
# Create a new Serverless Service/Project
serverless create --template-url https://github.com/CarneyC/serverless-template-gcp-nodejs --path my-service
# Change into the newly created directory
cd my-service
```

## <a name="bitbucket-configuration"></a>Bitbucket Configuration

The bucket pipeline requires the following variables for **BOTH** **Test** and **Production** deployment environments.

### Environments Variables

Variable | Usage
--------- | -----------
SLS_STAGE | Serverless Stage, valid parameters are ``dev`` and ``prod``.
GCP_PROJECT | Project ID to deploy to.
GCP_REGION | Region to deploy to.
GCP_KEY_FILE | base64 encoded contents of the GCP key file

## Prerequisites

* You will also need credentials for the cloud provider you will be deploying to.
* Check out the documentation for the cloud provider you are interested in the official serverless documentation.

_Google Cloud Platform:_

* Create a GCP project.
* Create an IAM member with at least a minimum set of roles: ``Deployment Manager Editor``, ``Storage Admin``, ``Logging Admin``, ``Cloud Functions Developer`` and other needed for your resources.
* Create service account for your project.
* Create, download and save private_key.json. You will use it as your credentials in the serverless.yml.
* Enable the Cloud Functions API.
* Enable the Cloud Deployment Manager V2 API.
* Enable the Cloud Storage.
* Enable the Stackdriver Logging

For base64 encoded contents required by GCP_KEY_FILE variable use command:

Linux

```bash
base64 -w 0 < GCP_key
```
