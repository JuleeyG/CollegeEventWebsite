<div align="center" style="text-align: center;">
  <h1 style="border-bottom: none;">@reallyland/tsconfig</h1>

  <p>TypeScript configuration file for The Really Project</p>
</div>

<hr />

<a href="https://www.buymeacoffee.com/RLmMhgXFb" target="_blank" rel="noopener noreferrer"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 20px !important;width: auto !important;" ></a>
[![tippin.me][tippin-me-badge]][tippin-me-url]
[![Follow me][follow-me-badge]][follow-me-url]

[![Version][version-badge]][version-url]
[![Node version][node-version-badge]][node-version-url]
[![MIT License][mit-license-badge]][mit-license-url]

[![Downloads][downloads-badge]][downloads-url]
[![Total downloads][total-downloads-badge]][downloads-url]
[![Packagephobia][packagephobia-badge]][packagephobia-url]
[![Bundlephobia][bundlephobia-badge]][bundlephobia-url]

[![Code of Conduct][coc-badge]][coc-url]

> TypeScript configuration file for The Really Project, works for either browser or Node.js.

## Table of contents <!-- omit in toc -->

- [Pre-requisites](#pre-requisites)
- [Setup](#setup)
  - [Install](#install)
  - [Usage](#usage)
    - [Node.js](#nodejs)
    - [Browser](#browser)
- [License](#license)

## Pre-requisites

- [TypeScript] >= 4.1.3
- [Optional for browser] [Node.js][nodejs-url] >= 14.15.3
- [Optional for browser] [NPM][npm-url] >= 6.14.9 ([NPM][npm-url] comes with [Node.js][nodejs-url] so there is no need to install separately.)

## Setup

### Install

```sh
# Install via NPM
$ npm install --save @reallyland/tsconfig
```

### Usage

Note that the following fields are required after extending the sharable `tsconfig`:

* `compilerOptions.rootDir`
* `compilerOptions.outDir`
* `compilerOptions.declarationDir`
* `include`
* `exclude`

#### Node.js

**tsconfig.json**

```json
{
  "extends": "@reallyland/tsconfig",
  "compilerOptions": {
    "rootDir": "src",
    "outDir": "dist",
    "declarationDir": "dist"
  },
  "include": ["src/**/*.ts"],
  "exclude": ["dist"]
}
```

[Optional] **tsconfig.prod.json**

```json
{
  "extends": "@reallyland/tsconfig",
  "compilerOptions": {
    "rootDir": "src",
    "outDir": "dist",
    "declarationDir": "dist"
  },
  "include": ["src/*.ts"],
  "exclude": ["src/test/**/*.ts", "src/demo/**/*.ts"]
}
```

#### Browser

Main difference is that there are `dom` and `dom.iterable` are added in the `lib` field of `/browser/tsconfig.json` to provide typings for web platform APIs.

**tsconfig.json**

```json
{
  "extends": "@reallyland/tsconfig/browser",
  "compilerOptions": {
    "rootDir": "src",
    "outDir": "dist",
    "declarationDir": "dist"
  },
  "include": ["src/**/*.ts"],
  "exclude": ["dist"]
}
```

## License

[MIT License](https://motss.mit-license.org/) © Rong Sen Ng (motss)

<!-- References -->
[TypeScript]: https://github.com/Microsoft/TypeScript
[nodejs-url]: https://nodejs.org
[npm-url]: https://www.npmjs.com
[node-releases-url]: https://nodejs.org/en/download/releases

<!-- MDN -->
[array-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[boolean-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[function-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
[map-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[number-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[object-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[promise-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[regexp-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
[set-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[string-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

<!-- Badges -->
[tippin-me-badge]: https://badgen.net/badge/%E2%9A%A1%EF%B8%8Ftippin.me/@igarshmyb/F0918E
[follow-me-badge]: https://flat.badgen.net/twitter/follow/igarshmyb?icon=twitter

[version-badge]: https://flat.badgen.net/npm/v/@reallyland/tsconfig?icon=npm
[node-version-badge]: https://flat.badgen.net/npm/node/@reallyland/tsconfig
[mit-license-badge]: https://flat.badgen.net/npm/license/@reallyland/tsconfig

[downloads-badge]: https://flat.badgen.net/npm/dm/@reallyland/tsconfig
[total-downloads-badge]: https://flat.badgen.net/npm/dt/@reallyland/tsconfig?label=total%20downloads
[packagephobia-badge]: https://flat.badgen.net/packagephobia/install/@reallyland/tsconfig
[bundlephobia-badge]: https://flat.badgen.net/bundlephobia/minzip/@reallyland/tsconfig

[coc-badge]: https://flat.badgen.net/badge/code%20of/conduct/pink

<!-- Links -->
[tippin-me-url]: https://tippin.me/@igarshmyb
[follow-me-url]: https://twitter.com/igarshmyb?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=motss/app-datepicker

[version-url]: https://www.npmjs.com/package/@reallyland/tsconfig
[node-version-url]: https://nodejs.org/en/download
[mit-license-url]: https://github.com/reallyland/tsconfig/blob/master/LICENSE

[downloads-url]: https://www.npmtrends.com/@reallyland/tsconfig
[packagephobia-url]: https://packagephobia.now.sh/result?p=@reallyland/tsconfig
[bundlephobia-url]: https://bundlephobia.com/result?p=@reallyland/tsconfig

[coc-url]: https://github.com/reallyland/tsconfig/blob/master/CODE-OF-CONDUCT.md
