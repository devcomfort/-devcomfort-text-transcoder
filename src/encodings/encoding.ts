/**
 * ### List of text encodings supported by the `text-decoding` library
 *
 * This constant array includes various character encodings used world-wide for different languages and systems.
 */
const encodings = [
  // UTF-8: Universal character encoding, capable of encoding all possible characters in Unicode
  "unicode-1-1-utf-8",
  "utf-8",
  "utf8",
  "UTF-8",

  // IBM866: Cyrillic character encoding, also known as CP866 or OEM866
  "IBM866",
  "866",
  "cp866",
  "csibm866",
  "ibm866",

  // ISO-8859-2: Latin alphabet for Central European languages
  "ISO-8859-2",
  "csisolatin2",
  "iso-8859-2",
  "iso-ir-101",
  "iso8859-2",
  "iso88592",
  "iso_8859-2",
  "iso_8859-2:1987",
  "l2",
  "latin2",

  // ISO-8859-3: Latin alphabet for South European languages
  "ISO-8859-3",
  "csisolatin3",
  "iso-8859-3",
  "iso-ir-109",
  "iso8859-3",
  "iso88593",
  "iso_8859-3",
  "iso_8859-3:1988",
  "l3",
  "latin3",

  // ISO-8859-4: Latin alphabet for North European languages
  "ISO-8859-4",
  "csisolatin4",
  "iso-8859-4",
  "iso-ir-110",
  "iso8859-4",
  "iso88594",
  "iso_8859-4",
  "iso_8859-4:1988",
  "l4",
  "latin4",

  // ISO-8859-5: Cyrillic alphabet
  "ISO-8859-5",
  "csisolatincyrillic",
  "cyrillic",
  "iso-8859-5",
  "iso-ir-144",
  "iso8859-5",
  "iso88595",
  "iso_8859-5",
  "iso_8859-5:1988",

  // ISO-8859-6: Arabic alphabet
  "ISO-8859-6",
  "arabic",
  "asmo-708",
  "csiso88596e",
  "csiso88596i",
  "csisolatinarabic",
  "ecma-114",
  "iso-8859-6",
  "iso-8859-6-e",
  "iso-8859-6-i",
  "iso-ir-127",
  "iso8859-6",
  "iso88596",
  "iso_8859-6",
  "iso_8859-6:1987",

  // ISO-8859-7: Greek alphabet
  "ISO-8859-7",
  "csisolatingreek",
  "ecma-118",
  "elot_928",
  "greek",
  "greek8",
  "iso-8859-7",
  "iso-ir-126",
  "iso8859-7",
  "iso88597",
  "iso_8859-7",
  "iso_8859-7:1987",
  "sun_eu_greek",

  // ISO-8859-8: Hebrew alphabet
  "ISO-8859-8",
  "csiso88598e",
  "csisolatinhebrew",
  "hebrew",
  "iso-8859-8",
  "iso-8859-8-e",
  "iso-ir-138",
  "iso8859-8",
  "iso88598",
  "iso_8859-8",
  "iso_8859-8:1988",
  "visual",

  // ISO-8859-8-I: Hebrew alphabet with explicit directional formatting
  "ISO-8859-8-I",
  "csiso88598i",
  "iso-8859-8-i",
  "logical",

  // ISO-8859-10: Latin alphabet for Nordic languages
  "ISO-8859-10",
  "csisolatin6",
  "iso-8859-10",
  "iso-ir-157",
  "iso8859-10",
  "iso885910",
  "l6",
  "latin6",

  // ISO-8859-13: Latin alphabet for Baltic languages
  "ISO-8859-13",
  "iso-8859-13",
  "iso8859-13",
  "iso885913",

  // ISO-8859-14: Latin alphabet for Celtic languages
  "ISO-8859-14",
  "iso-8859-14",
  "iso8859-14",
  "iso885914",

  // ISO-8859-15: Latin alphabet with euro sign
  "ISO-8859-15",
  "csisolatin9",
  "iso-8859-15",
  "iso8859-15",
  "iso885915",
  "iso_8859-15",
  "l9",

  // ISO-8859-16: Latin alphabet for Southeast European languages
  "ISO-8859-16",
  "iso-8859-16",

  // KOI8-R: Russian character encoding
  "cskoi8r",
  "koi",
  "koi8",
  "koi8-r",
  "koi8_r",

  // KOI8-U: Ukrainian character encoding
  "KOI8-U",
  "koi8-ru",
  "koi8-u",

  // macintosh: Traditional Mac OS Roman character encoding
  "macintosh",
  "csmacintosh",
  "mac",
  "macintosh",
  "x-mac-roman",

  // windows-874: Thai character encoding
  "windows-874",
  "dos-874",
  "iso-8859-11",
  "iso8859-11",
  "iso885911",
  "tis-620",

  // windows-1250: Central European character encoding
  "windows-1250",
  "cp1250",
  "x-cp1250",

  // windows-1251: Cyrillic character encoding
  "windows-1251",
  "cp1251",
  "x-cp1251",

  // windows-1252: Western European character encoding
  "windows-1252",
  "ansi_x3.4-1968",
  "ascii",
  "cp1252",
  "cp819",
  "csisolatin1",
  "ibm819",
  "iso-8859-1",
  "iso-ir-100",
  "iso8859-1",
  "iso88591",
  "iso_8859-1",
  "iso_8859-1:1987",
  "l1",
  "latin1",
  "us-ascii",
  "x-cp1252",

  // windows-1253: Greek character encoding
  "cp1253",
  "windows-1253",
  "x-cp1253",

  // windows-1254: Turkish character encoding
  "cp1254",
  "csisolatin5",
  "iso-8859-9",
  "iso-ir-148",
  "iso8859-9",
  "iso88599",
  "iso_8859-9",
  "iso_8859-9:1989",
  "l5",
  "latin5",
  "windows-1254",
  "x-cp1254",

  // windows-1255: Hebrew character encoding
  "cp1255",
  "windows-1255",
  "x-cp1255",

  // windows-1256: Arabic character encoding
  "cp1256",
  "windows-1256",
  "x-cp1256",

  // windows-1257: Baltic character encoding
  "cp1257",
  "windows-1257",
  "x-cp1257",

  // windows-1258: Vietnamese character encoding
  "cp1258",
  "windows-1258",
  "x-cp1258",

  // x-mac-cyrillic: Cyrillic character encoding for Mac
  "x-mac-cyrillic",
  "x-mac-ukrainian",

  // GBK: Chinese character encoding (simplified)
  "chinese",
  "csgb2312",
  "csiso58gb231280",
  "gb2312",
  "gb_2312",
  "gb_2312-80",
  "gbk",
  "iso-ir-58",
  "x-gbk",

  // gb18030: Chinese character encoding (unified)
  "gb18030",

  // Big5: Chinese character encoding (traditional)
  "big5",
  "big5-hkscs",
  "cn-big5",
  "csbig5",
  "x-x-big5",

  // EUC-JP: Japanese character encoding
  "cseucpkdfmtjapanese",
  "euc-jp",
  "x-euc-jp",

  // ISO-2022-JP: Japanese character encoding
  "csiso2022jp",
  "iso-2022-jp",

  // Shift_JIS: Japanese character encoding
  "csshiftjis",
  "ms932",
  "ms_kanji",
  "shift-jis",
  "shift_jis",
  "sjis",
  "windows-31j",
  "x-sjis",

  // EUC-KR: Korean character encoding
  "cseuckr",
  "csksc56011987",
  "euc-kr",
  "iso-ir-149",
  "korean",
  "ks_c_5601-1987",
  "ks_c_5601-1989",
  "ksc5601",
  "ksc_5601",
  "windows-949",

  // replacement: Fallback encodings
  "csiso2022kr",
  "hz-gb-2312",
  "iso-2022-cn",
  "iso-2022-cn-ext",
  "iso-2022-kr",

  // UTF-16BE: 16-bit Unicode Transformation Format, big-endian
  "utf-16be",

  // UTF-16LE: 16-bit Unicode Transformation Format, little-endian
  "utf-16",
  "utf-16le",

  // x-user-defined: Encoding for arbitrary binary data
  "x-user-defined",
] as const;

export { encodings, encodings as default };
