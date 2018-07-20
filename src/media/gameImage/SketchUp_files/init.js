var ContextCreationResult;(function(a){a[a.Failed=0]="Failed";a[a.Created_WebGL1_Context=1]="Created_WebGL1_Context";a[a.Created_WebGL2_Context=2]="Created_WebGL2_Context"})(ContextCreationResult||(ContextCreationResult={}));
function createMainContext(){var a=ContextCreationResult.Failed,b=Module.canvas;if(b){var d=getMainContextAttributes(),e=null,c=0>window.location.href.indexOf("webgl1=true");c&&((e=b.getContext("webgl2",d))||(c=!1));c||(e=b.getContext("webgl",d)||b.getContext("experimental-webgl",d));(Module.preinitializedWebGLContext=e)&&(a=c?ContextCreationResult.Created_WebGL2_Context:ContextCreationResult.Created_WebGL1_Context)}return a}
function getMainContextAttributes(){return{alpha:!0,depth:!0,stencil:!0,antialias:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!0}}var Module={locateFile:function(a){return"/static/"+a}},JSBindings,JSBindingsAPI,WarehouseUtil,LogMetadata,DumpLog,MakeOutOfSyncData,currentUrl=window.location.href.toLowerCase(),isLocalDev=0<=currentUrl.indexOf("localdev"),isEdu=0<=currentUrl.indexOf("edu.sketchup.com");
if(isLocalDev)window.onerror=function(a,b,d,e,c){alert("Crash! Check the console for details.")};else{var sentryUrl=isEdu?"https://79e7a66878cd417db11e475df4d5ad4e@sentry.io/1173178":"https://fc7fb57f0fdf4f63b77440398c800cb0@sentry.io/1187539";Raven.config(sentryUrl).install()}
require.config({waitSeconds:60,paths:{knockout:"lib/knockout-3.4.0.js?noext","knockout.mapping":"lib/knockout.mapping.js?noext",jquery:"lib/jquery-2.1.3.min.js?noext",nouislider:"lib/nouislider.js?noext",colorpicker:"lib/spectrum.js?noext","@vimeo/player":"lib/vimeoplayer.js?noext"}});
requireQueue(["/static/l10n.js"],function(){var a=SketchUp.getLanguageFilePath("/static/l10n/");a?require([a],function(a){requireThirdPartyAndRemainingScripts()},function(a){SketchUp.forceEnglish();requireThirdPartyAndRemainingScripts()}):requireThirdPartyAndRemainingScripts()});
function requireThirdPartyAndRemainingScripts(){isBlockedBrowser()?showBlockedBrowserMessage():requireQueue([["jquery","knockout"],["knockout.mapping","nouislider","colorpicker","@vimeo/player"]],function(){requireRemainingScripts()})}function userAgentContains(a){return-1<window.navigator.userAgent.indexOf(a)}function isBlockedBrowser(){return userAgentContains("Trident")||userAgentContains("MSIE")}
function showBlockedBrowserMessage(){var a=document.body.querySelector(".su-logo");a.classList.remove("animation");a.classList.add("animation-end");document.body.querySelector(".loading-animation-message").innerHTML=$t("Sorry. Your web browser is not compatible with SketchUp.")}
function requireRemainingScripts(){var a=[];a.push("/static/sketchup-closure-lib.js");var b=SketchUp.getCurrentLanguage();a.push("/static/l10n/sketchup-templates-"+b+".js");isLocalDev?(a.push(["/static/lib/soyutils.js","/static/lib/warehouse-middleware.js"]),a.push("/static/sketchup-app.js")):a.push("/static/sketchup-compiled.js");a.push("Main");requireQueue(a,function(){WarehouseUtil=frontend.util;var a=createMainContext()==ContextCreationResult.Created_WebGL2_Context,e="object"===typeof WebAssembly;
e&&userAgentContains("Edge")&&(e=!1);e&&0<=window.location.href.indexOf("force_asm=true")&&(e=!1);fetchMainJsFile(isLocalDev,e,a)})}function fetchWithProgress(a,b,d,e,c){void 0===c&&(c="text");var g=e||function(a){console.error("Problem during xmlhttprequest "+a);throw a;},h=d||function(){},f=new XMLHttpRequest;f.open("GET",a,!0);f.responseType=c;f.onprogress=function(a){h(a)};f.onload=function(a){200==f.status?"text"===c?b(f.responseText):b(f.response):g(a)};f.send()}
function fetchMainJsFile(a,b,d){b&&(Module.TOTAL_MEMORY=100663296);a=makeBinaryName(".js",a,b,d);fetchWithProgress("/static/"+a,function(a){var c=document.createElement("script");c.type="text/javascript";c.innerHTML=a;document.body.appendChild(c)},function(a){})}function makeBinaryName(a,b,d,e){d=d?"webapp":"webapp_asm";e&&(d+="_gl2");d+=a;b||(d+=".jgz");return d}
function requireQueue(a,b){function d(a,c){if(0<a.length){var g=a.shift();Array.isArray(g)||(g=[g]);require(g,function(){for(var b=[],f=0;f<arguments.length;f++)b[f]=arguments[f];c.push.apply(c,b);d(a,c)})}else b.apply(void 0,c)}d(a,[])};