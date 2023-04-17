Hi, I'm **Jakub Pieczora** and I'm applying for a **Remote Senior JavaScript Developer**.

You can get in touch with my by writing an e-mail to [jakub@apkeo.pl](mailto:jakub@apkeo.pl).

# 🌦️ Weather Application `by pieczorx`


I've created 2 packages, each one must be launched in order for app to work properly. In this document you will find a tiny description and instructions to run each one of them.

## Requirements for all packages
- Node 18.15+ [(Download)](https://nodejs.org/en/download/)
- Docker [(Download)](https://www.docker.com/products/docker-desktop/)
- Yarn [(Download)](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

## Packages
### Server 
Backend part of the application with API controllers, services & so on. However some files from backend part can be shared with client package.
### Client
Frontend part of the application with pages, components and server api layer.

## How to run it?
To launch API server follow these steps:
1. Go to project directory and navigate with `cd packages/server`
2. Run `yarn` to install dependencies
3. Fill in `.env` file if you wish with your own properties
4. Run `docker-compose up -d` or `yarn compose` (you need to install **Docker** first)
5. Run `yarn dev`
6. Done! Server should be listening on port 3000 by default, to see it in action navigate to http://localhost:3000 (or other port if specified)


To launch Vue 3 client follow these steps:
1. Go to project directory and navigate with `cd packages/client`
2. Run `yarn` to install dependencies
3. Fill in `.env` file if you wish with your own properties
4. Run `yarn dev`
5. Done! App should be listening on port 3200 by default, to see it in action navigate to http://localhost:3200 (or other port if specified)
