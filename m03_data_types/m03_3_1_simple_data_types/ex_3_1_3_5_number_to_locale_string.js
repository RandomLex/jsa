let nr = 123456.789;
console.log(nr.toLocaleString());               // -> 123 456,789
console.log(nr.toLocaleString("en-GB")); // -> 123,456.789
console.log(nr.toLocaleString("fr-FR")); // -> 123 456,789
console.log(nr.toLocaleString("de-DE")); // -> 123.456,789
console.log(nr.toLocaleString("ar-EG")); // -> ١٢٣٬٤٥٦٫٧٨٩
console.log(nr.toLocaleString("zh-Hans-CN-u-nu-hanidec")); // -> 一二三,四五六.七八九
console.log(nr.toLocaleString("es-ES")); // -> 123.456,789