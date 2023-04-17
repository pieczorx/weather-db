Hi, I'm **Jakub Pieczora** and I'm applying for a **Remote Senior JavaScript Developer**.

You can get in touch with my by writing an e-mail to [jakub@apkeo.pl](mailto:jakub@apkeo.pl).

# 🌦️ Weather Application `by pieczorx`

I've created 2 packages o**n top of my own boilerplate**, each one must be launched in order for app to work properly. In this document you will find a tiny description and instructions to run each one of them.

## See it in action
https://user-images.githubusercontent.com/14796199/232466922-af4bf7f3-9f10-494d-8d15-f52caa7e613d.mp4


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
1. Go to project root directory
2. Type in `yarn` command to install dependencies along all packages
3. Type in `yarn compose:up` command to run required Docker images
4. (Optional) Create and fill in `.env` file in every package folder if you wish with your key-value pairs. It will use `.env.defaults` environment variables otherwise
5. Launch backend part of the app with `cd packages/server` followed by `yarn dev`
6. Open another terminal session and do the same with frontend: `cd packages/client` and then `yarn dev`
7. Done! Client should be listening on port 3000 by default. To see it in action navigate to http://localhost:3000 (or other port if specified in step 4)

## Things that are missing or broken due to limited time amount
- Validation of entered cities
- Open Meteo provider strategy, so only OpenWeatherMap is available at this moment
- Scrolling the list of cities
- City suggestions & auto-completion
- Temperature unit conversion (only Fahrenheit is available at this moment)
- Some TS types are missing or broken (too much time needed to fix these)

Thanks for reading :)
