# Simple Serverless Template

Built by [@Rockooor](https://twitter.com/Rockooor), see also [this post on X](https://twitter.com/Rockooor/status/1691780012997792210)

This is a bare bones serverless template to instantly get up and running building a serverless backend. Contains the following features:

- Typescript support
- The API is deployed behind a cloudfront distribution
- AWS Secret Manager support for providing secrets to your Lambda functions

## How to get this working?

First, make sure you have a `~/.aws/credentials` file with access keys that has access to your AWS account. If you don't have this, create that file and add this into it:

```
[profilename]
aws_access_key_id=ACCESS_KEY
aws_secret_access_key=SECRET_KEY
```

Next:

0. Make sure you have serverless installed `npm install serverless -g`
1. Clone repo
2. Install dependencies `npm install`
3. Resolve all TODO in `serverless.yml`
4. Open terminal `cd api`, then `serverless deploy`

The first time this takes a few minutes because a Cloudfront distribution is created. When the command is done, you should see a message like this:

```
➜  api git:(main) ✗ serverless deploy
Running "serverless" from node_modules

Deploying some-service to stage dev (eu-west-1)
CloudFront domain name
  XXX.cloudfront.net (CNAME: -)

✔ Service deployed to stack some-service-dev (292s)

endpoint: POST - https://XXX.execute-api.eu-west-1.amazonaws.com/dev/someFunction
functions:
  someFunction: some-service-dev-someFunction (1.4 kB)

1 deprecation found: run 'serverless doctor' for more details

Monitor all your API routes with Serverless Console: run "serverless --console"
```

The cloudfront.net url is your api endpoint, when you do a POST request to `https://XXX.cloudfront.net/someFunction`, it returns your event.

Now you can start building your backend!
