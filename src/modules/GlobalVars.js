/* ==[ GlobalVars.js ]== */

const doc = deWindow.document;
const emptyFn = Function.prototype;
const aProto = Array.prototype;
const gitWiki = 'https://github.com/SthephanShinkufag/Dollchan-Extension-Tools/wiki/';
const gitRaw = 'https://raw.githubusercontent.com/SthephanShinkufag/Dollchan-Extension-Tools/master/';

let $each, aib, Cfg, docBody, dTime, dummy, isExpImg, isPreImg, lang, locStorage, nav, needScroll, pByEl,
	pByNum, pr, sesStorage, updater;
let quotetxt = '';
let canUseNativeXhr = true;
let visPosts = 2;
let topWinZ = 10;
