// ==UserScript==
// @name          关闭队友检阅插件广告
// @namespace     http://1907503982.qzone.qq.com
// @description	  zzz
// @author        咖喱
// @homepage      http://1907503982.qzone.qq.com
// @include       http://loltmcheck.com/*
// @include       https://loltmcheck.com/*
// @include       http://*.loltmcheck.com/*
// @include       https://*.loltmcheck.com/*
// @include       http://loltmcheck.com/*
// @include       https://loltmcheck.com/*
// @include       http://*.loltmcheck.com/*
// @include       https://*.loltmcheck.com/*
// @run-at        document-start
// @version       666
// ==/UserScript==
(function() {var css = "";
if (false || (document.domain == "loltmcheck.com" || document.domain.substring(document.domain.indexOf(".loltmcheck.com") + 1) == "loltmcheck.com"))
	css += [
		"#toast-container {",
        "	display:none;",
		"}",
        "a > img {",
        "	display:none;",
		"}",
		
	].join("\n");

if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		document.documentElement.appendChild(node);
	}
}
})();
