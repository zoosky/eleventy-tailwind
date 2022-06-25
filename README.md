# eleventy-tailwind

A demo project

To run

```bash
    npm install
    
    npx eleventy --serve
    # same as
    npx @11ty/eleventy --input=. --output=public
´´´


To run tailwind, in a separat shell, use

    npx tailwindcss -i ./tailwind.css -o ./public/css/styles.css --watch

Demo https://elegant-genie-4e7cd8.netlify.app/

Scripts:

    npm run start # start eleventry server and watch
    npm run build # build the site
    npm rund tailwind # run tailwind css compiler