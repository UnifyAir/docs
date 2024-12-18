import lunr from "/Users/pranavkumar/Desktop/blocknet/docs-website/node_modules/lunr/lunr.js";
require("/Users/pranavkumar/Desktop/blocknet/docs-website/node_modules/lunr-languages/lunr.stemmer.support.js")(lunr);
require("/Users/pranavkumar/Desktop/blocknet/docs-website/node_modules/@easyops-cn/docusaurus-search-local/dist/client/shared/lunrLanguageZh.js").lunrLanguageZh(lunr);
require("/Users/pranavkumar/Desktop/blocknet/docs-website/node_modules/lunr-languages/lunr.multi.js")(lunr);
export const removeDefaultStopWordFilter = false;
export const language = ["en","zh"];
export const searchIndexUrl = "search-index{dir}.json?_=3533446c";
export const searchResultLimits = 8;