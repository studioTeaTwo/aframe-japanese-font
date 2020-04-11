const msdfGenerator = require('msdf-generator').msdfGenerator;
const CHARSET_ALPHABET = require('msdf-generator').CHARSET_ALPHABET;
const CHARSET_HIRAGANA = require('msdf-generator').CHARSET_HIRAGANA;
const CHARSET_JINMEI_KANJI = require('msdf-generator').CHARSET_JINMEI_KANJI;
const CHARSET_JYOUYOU_KANJI = require('msdf-generator').CHARSET_JYOUYOU_KANJI;
const CHARSET_KATAKANA = require('msdf-generator').CHARSET_KATAKANA;

const NotoSansCJKjp = 'noto-sans-cjk-jp';
const mplus = 'mplus';
const hui = 'hui';

const fonts = [
  {
    fontID: NotoSansCJKjp,
    charset: `${CHARSET_ALPHABET}${CHARSET_HIRAGANA}${CHARSET_KATAKANA}${CHARSET_JYOUYOU_KANJI}${CHARSET_JINMEI_KANJI}`,
    textureSize: 2048 + 512,
    ttfFile: `./fonts/${NotoSansCJKjp}/ttf/NotoSansCJKjp-Regular.ttf`,
    output: `./fonts/${NotoSansCJKjp}`
  },
  {
    fontID: mplus,
    charset: `${CHARSET_ALPHABET}${CHARSET_HIRAGANA}${CHARSET_KATAKANA}${CHARSET_JYOUYOU_KANJI}${CHARSET_JINMEI_KANJI}`,
    textureSize: 2048 + 512,
    ttfFile: `./fonts/${mplus}/ttf/mplus-1c-regular.ttf`,
    output: `./fonts/${mplus}`
  },
  {
    fontID: hui,
    charset: `${CHARSET_ALPHABET}${CHARSET_HIRAGANA}${CHARSET_KATAKANA}${CHARSET_JYOUYOU_KANJI}${CHARSET_JINMEI_KANJI}`,
    textureSize: 2048 + 512,
    ttfFile: `./fonts/${hui}/ttf/HuiFontP29.ttf`,
    output: `./fonts/${hui}`
  },
];

fonts.forEach(font => {
  msdfGenerator(font);
});