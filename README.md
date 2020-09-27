# PWA Studio Contentful

## Installation

1. Create an Empty PWA Studio Project by [Scaffolding](https://magento.github.io/pwa-studio/pwa-buildpack/scaffolding/)
2. `cd your_project`
3. `git clone git@github.com:larsroettig/contentful-pwa-studio-plugin.git`
4.  Edit config file https://github.com/larsroettig/contentful-pwa-studio-plugin/blob/master/src/util/contentfulClientConfig.js
5.  add `your_project/package.json`
    ```json
    "dependencies": {
    "@larsroettig/contentful": "link:./contentful-pwa-studio-plugin"
    }
    ```
6. run `yarn install`


**Watch stream recording:**

[![Lets build PWA Studio Blog Extension](https://img.youtube.com/vi/PB_uBFHR4to/0.jpg)](https://www.youtube.com/watch?v=PB_uBFHR4to)
