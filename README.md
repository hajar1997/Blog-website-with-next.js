# Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

# How to run project on your local host
1. npm install next
2. create an account on https://graphcms.com/
3. create .env file on your file directory 
4. copy Content API and Permanent Auth Token from graphcms.com and paste into inverted commas below:
       NEXT_PUBLIC_GRAPHCMS_ENDPOINT = '';
       GRAPHCMS_TOKEN = ''; 

These steps above connect your website with database.If you want to create posts,categories and etc. follow steps below :
1. Log into your graphcms account and click "Set up your schema"
2.Create models,like shown in the image below
![models](https://user-images.githubusercontent.com/49823262/160410629-49ec603e-3fbf-4e8d-ab8e-b78fa39511ee.png)
3.Follow steps in the image below for adding fields into those models :
   
   1.![author](https://user-images.githubusercontent.com/49823262/160412906-7a9a4d2a-debb-40cd-8231-d447dca82533.png)
   2.![category](https://user-images.githubusercontent.com/49823262/160412963-f228d7d0-87ea-43a6-ba60-061294cc416c.png)
   3.![comment](https://user-images.githubusercontent.com/49823262/160413011-821f0de9-ef6a-4013-b1db-eb43ff9e8d99.png)
   4.![Post](https://user-images.githubusercontent.com/49823262/160413057-7ae968f5-53db-4b32-bc49-14d467e13693.png)

IF YOU STILL DON'T UNDERSTAND HOW TO CREATE GRAPHCMS ACCOUNT YOU CAN READ DOCUMENTATION OR WATCH YOUTUBE TUTORIAL.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
# or
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).


*******
NEXT_PUBLIC_GRAPHCMS_ENDPOINT = '';
GRAPHCMS_TOKEN = ''; 
********

