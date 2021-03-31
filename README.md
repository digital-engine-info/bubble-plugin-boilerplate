 <div align="center">
 <img align="center" width="230" style="margin-bottom: 20px" src="https://i.imgur.com/ssD3mvO.png" />
  <h2>Javascript Library Boilerplate for Bubble.io plugin</h2>
  <blockquote>A Minimal Starter Kit for your Bubble.io project</blockquote>
 
 <a href="https://github.com/digital-engine-info/bubble-plugin-boilerplate/actions"><img alt="Build Status" src="https://github.com/digital-engine-info/bubble-plugin-boilerplate/workflows/Build/badge.svg?color=green" /></a> <a href="https://github.com/digital-engine-info/bubble-plugin-boilerplate/actions"> <img alt="Publish Status" src="https://github.com/digital-engine-info/bubble-plugin-boilerplate/workflows/Publish/badge.svg?color=green" /></a> <img src="https://img.shields.io/david/digital-engine-info/bubble-plugin-boilerplate.svg" /> <a href="https://david-dm.org/digital-engine-info/bubble-plugin-boilerplate?type=dev"><img src="https://img.shields.io/david/dev/digital-engine-info/bubble-plugin-boilerplate.svg" /></a> <img src="https://api.dependabot.com/badges/status?host=github&repo=digital-engine-info/bubble-plugin-boilerplate" />
</div>

## ⭐️ Features

- Webpack 5
- Babel 7
- Hot reloading (`npm start`)
- UMD exports, so your library works everywhere.
- Jest unit testing
- Daily [dependabot](https://dependabot.com) dependency updates

## 📦 Getting Started

```
git clone https://github.com/digital-engine-info/bubble-plugin-boilerplate.git myLibrary
npm install
```

## 💎 Customization

> Before shipping, make sure to:

1. Edit `LICENSE` file
2. Edit `package.json` information (These will be used to generate the headers for your built files)

## 🚀 Deployment

1. `npm publish`
2. Your users can include your library as usual

### npm

```
import MyLibrary from 'my-library';
const libraryInstance = new MyLibrary();
...
```

### self-host/cdn

```
<script src="build/index.js"></script>

const MyLibrary = window.MyLibrary.default;
const libraryInstance = new MyLibrary();
...
```

> **Note:** In this minimal version, any images and css files you import will be added to the js bundle. If you want them as separate files, you can use [js-library-boilerplate](https://github.com/hodgef/js-library-boilerplate) or edit the Webpack config accordingly.
