(function(window){var svgSprite='<svg><symbol id="icon-hot" viewBox="0 0 1024 1024"><path d="M899.51232 691.2H255.6416a47.74912 47.74912 0 0 1-47.68768-47.77984v-65.73056L76.8 511.95904l131.15392-65.64864v-65.73056a47.74912 47.74912 0 0 1 47.68768-47.77984h643.87072c26.34752 0 47.68768 21.42208 47.68768 47.86176v262.7584a47.74912 47.74912 0 0 1-47.68768 47.77984z m-418.2016-267.55072h-38.9632v76.88192h-74.20928v-76.88192H328.9088v195.52256h39.22944v-84.55168h74.20928v84.55168h38.9632V423.64928z m126.0544-3.70688c-51.94752 0-87.73632 36.99712-87.73632 100.66944 0 63.41632 35.7888 102.25664 87.73632 102.25664 51.94752 0 87.72608-38.84032 87.72608-102.25664 0-63.40608-35.77856-100.66944-87.72608-100.66944z m259.8912 3.70688h-150.016v32.49152h55.13216v163.03104h39.22944V456.1408h55.6544v-32.49152z m-259.8912 165.40672c-29.15328 0-47.70816-26.69568-47.70816-68.44416 0-42.00448 18.55488-67.11296 47.70816-67.11296 29.15328 0 47.70816 25.10848 47.70816 67.11296 0 41.74848-18.55488 68.44416-47.70816 68.44416z" fill="#FF7919" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)