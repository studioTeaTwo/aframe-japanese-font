# aframe-japanese-font
[![npm version](https://badge.fury.io/js/aframe-japanese-font.svg)](https://badge.fury.io/js/aframe-japanese-font)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Line up

### [Noto Sans CJK JP](https://www.google.com/get/noto/#sans-jpan)
- 常用漢字 + 人名用漢字

### [M+ FONTS](https://mplus-fonts.osdn.jp/about.html)
- 常用漢字 + 人名用漢字

### [ふい字](http://hp.vector.co.jp/authors/VA039499/#hui)
- 常用漢字 + 人名用漢字

## Install

Install with [npm](https://www.npmjs.com/):

    npm install aframe-japanese-font

CAUTION: **these files are very large**.
It is recommended that you do not import directly and treat them as static files.
For example, deploy them to public folders and retrieve them on demand.

## Usage

it needs `[font name]-msdf.json` and `[font name]-msdf.png`.

```html
<a-scene>
  <a-text
    value="こんにちは世界！"
    font="noto-sans-cjk-jp-msdf.json"
    font-image="noto-sans-cjk-jp-msdf.png"
    negate="false"
    scale="2 2 1"
    position="0 1 -4"
  >
  </a-text>
</a-scene>
```

## Publish

Update the source and increment the version in package.json.
And then:

    npm run prepare
    npm run release -- --release-as [version]
    git push --follow-tags origin main
    npm publish