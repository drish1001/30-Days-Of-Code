(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"R5/Y":function(t,e,n){!function(t){function e(t){this._targetElement=t,this._introItems=[],this._options={nextLabel:"Next &rarr;",prevLabel:"&larr; Back",skipLabel:"Skip",doneLabel:"Done",hidePrev:!1,hideNext:!1,tooltipPosition:"bottom",tooltipClass:"",highlightClass:"",exitOnEsc:!0,exitOnOverlayClick:!0,showStepNumbers:!0,keyboardNavigation:!0,showButtons:!0,showBullets:!0,showProgress:!1,scrollToElement:!0,overlayOpacity:.8,scrollPadding:30,positionPrecedence:["bottom","top","right","left"],disableInteraction:!1,hintPosition:"top-middle",hintButtonLabel:"Got it",hintAnimation:!0}}function n(t){if(null==t||"object"!=typeof t||void 0!==t.nodeType)return t;var e={};for(var i in t)"undefined"!=typeof jQuery&&t[i]instanceof jQuery?e[i]=t[i]:e[i]=n(t[i]);return e}function i(){if(this._direction="forward",void 0!==this._currentStepNumber)for(var t=0,e=this._introItems.length;t<e;t++){var n=this._introItems[t];n.step===this._currentStepNumber&&(this._currentStep=t-1,this._currentStepNumber=void 0)}if(void 0===this._currentStep?this._currentStep=0:++this._currentStep,this._introItems.length<=this._currentStep)return"function"==typeof this._introCompleteCallback&&this._introCompleteCallback.call(this),void r.call(this,this._targetElement);var i=this._introItems[this._currentStep];void 0!==this._introBeforeChangeCallback&&this._introBeforeChangeCallback.call(this,i.element),u.call(this,i)}function o(){if(this._direction="backward",0===this._currentStep)return!1;var t=this._introItems[--this._currentStep];void 0!==this._introBeforeChangeCallback&&this._introBeforeChangeCallback.call(this,t.element),u.call(this,t)}function r(t){var e=t.querySelectorAll(".introjs-overlay");if(e&&e.length>0)for(var n=e.length-1;n>=0;n--){var i=e[n];i.style.opacity=0,setTimeout(function(){this.parentNode&&this.parentNode.removeChild(this)}.bind(i),500)}var o=t.querySelector(".introjs-helperLayer");o&&o.parentNode.removeChild(o);var r=t.querySelector(".introjs-tooltipReferenceLayer");r&&r.parentNode.removeChild(r);var s=t.querySelector(".introjs-disableInteraction");s&&s.parentNode.removeChild(s);var l=document.querySelector(".introjsFloatingElement");l&&l.parentNode.removeChild(l),d();var a=document.querySelectorAll(".introjs-fixParent");if(a&&a.length>0)for(var n=a.length-1;n>=0;n--)a[n].className=a[n].className.replace(/introjs-fixParent/g,"").replace(/^\s+|\s+$/g,"");window.removeEventListener?window.removeEventListener("keydown",this._onKeyDown,!0):document.detachEvent&&document.detachEvent("onkeydown",this._onKeyDown),void 0!=this._introExitCallback&&this._introExitCallback.call(self),this._currentStep=void 0}function s(t,e,n,i,o){var r,s,h,p,u,d="";if(o=o||!1,e.style.top=null,e.style.right=null,e.style.bottom=null,e.style.left=null,e.style.marginLeft=null,e.style.marginTop=null,n.style.display="inherit",void 0!==i&&null!=i&&(i.style.top=null,i.style.left=null),this._introItems[this._currentStep])switch(r=this._introItems[this._currentStep],d="string"==typeof r.tooltipClass?r.tooltipClass:this._options.tooltipClass,e.className=("introjs-tooltip "+d).replace(/^\s+|\s+$/g,""),"auto"!=(u=this._introItems[this._currentStep].position)&&"auto"!=this._options.tooltipPosition||"floating"!=u&&(u=function(t,e,n){var i=this._options.positionPrecedence.slice(),o=v(),r=S(e).height+10,s=S(e).width+20,l=S(t),a="floating";return l.left+s>o.width||l.left+l.width/2-s<0?(c(i,"bottom"),c(i,"top")):(l.height+l.top+r>o.height&&c(i,"bottom"),l.top-r<0&&c(i,"top")),l.width+l.left+s>o.width&&c(i,"right"),l.left-s<0&&c(i,"left"),i.length>0&&(a=i[0]),n&&"auto"!=n&&i.indexOf(n)>-1&&(a=n),a}.call(this,t,e,u)),h=S(t),s=S(e),p=v(),u){case"top":if(n.className="introjs-arrow bottom",o)var m=0;else var m=15;l(h,m,s,p,e),e.style.bottom=h.height+20+"px";break;case"right":e.style.left=h.width+20+"px",h.top+s.height>p.height?(n.className="introjs-arrow left-bottom",e.style.top="-"+(s.height-h.height-20)+"px"):n.className="introjs-arrow left";break;case"left":o||1!=this._options.showStepNumbers||(e.style.top="15px"),h.top+s.height>p.height?(e.style.top="-"+(s.height-h.height-20)+"px",n.className="introjs-arrow right-bottom"):n.className="introjs-arrow right",e.style.right=h.width+20+"px";break;case"floating":n.style.display="none",e.style.left="50%",e.style.top="50%",e.style.marginLeft="-"+s.width/2+"px",e.style.marginTop="-"+s.height/2+"px",void 0!==i&&null!=i&&(i.style.left="-"+(s.width/2+18)+"px",i.style.top="-"+(s.height/2+18)+"px");break;case"bottom-right-aligned":n.className="introjs-arrow top-right",a(h,0,s,e),e.style.top=h.height+20+"px";break;case"bottom-middle-aligned":n.className="introjs-arrow top-middle";var f=h.width/2-s.width/2;o&&(f+=5),a(h,f,s,e)&&(e.style.right=null,l(h,f,s,p,e)),e.style.top=h.height+20+"px";break;case"bottom-left-aligned":case"bottom":default:n.className="introjs-arrow top";var m=0;l(h,m,s,p,e),e.style.top=h.height+20+"px"}}function l(t,e,n,i,o){return t.left+e+n.width>i.width?(o.style.left=i.width-n.width-t.left+"px",!1):(o.style.left=e+"px",!0)}function a(t,e,n,i){return t.left+t.width-e-n.width<0?(i.style.left=-t.left+"px",!1):(i.style.right=e+"px",!0)}function c(t,e){t.indexOf(e)>-1&&t.splice(t.indexOf(e),1)}function h(t){if(t){if(!this._introItems[this._currentStep])return;var e=this._introItems[this._currentStep],n=S(e.element),i=10;b(e.element)?t.className+=" introjs-fixedTooltip":t.className=t.className.replace(" introjs-fixedTooltip",""),"floating"==e.position&&(i=0),t.setAttribute("style","width: "+(n.width+i)+"px; height:"+(n.height+i)+"px; top:"+(n.top-5)+"px;left: "+(n.left-5)+"px;")}}function p(t){t.setAttribute("role","button"),t.tabIndex=0}function u(t){void 0!==this._introChangeCallback&&this._introChangeCallback.call(this,t.element);var e=this,n=document.querySelector(".introjs-helperLayer"),l=document.querySelector(".introjs-tooltipReferenceLayer"),a="introjs-helperLayer";if(S(t.element),"string"==typeof t.highlightClass&&(a+=" "+t.highlightClass),"string"==typeof this._options.highlightClass&&(a+=" "+this._options.highlightClass),null!=n){var c=l.querySelector(".introjs-helperNumberLayer"),u=l.querySelector(".introjs-tooltiptext"),f=l.querySelector(".introjs-arrow"),b=l.querySelector(".introjs-tooltip"),y=l.querySelector(".introjs-skipbutton"),_=l.querySelector(".introjs-prevbutton"),w=l.querySelector(".introjs-nextbutton");if(n.className=a,b.style.opacity=0,b.style.display="none",null!=c){var C=this._introItems[t.step-2>=0?t.step-2:0];(null!=C&&"forward"==this._direction&&"floating"==C.position||"backward"==this._direction&&"floating"==t.position)&&(c.style.opacity=0)}h.call(e,n),h.call(e,l);var j=document.querySelectorAll(".introjs-fixParent");if(j&&j.length>0)for(var N=j.length-1;N>=0;N--)j[N].className=j[N].className.replace(/introjs-fixParent/g,"").replace(/^\s+|\s+$/g,"");d(),e._lastShowElementTimer&&clearTimeout(e._lastShowElementTimer),e._lastShowElementTimer=setTimeout(function(){null!=c&&(c.innerHTML=t.step),u.innerHTML=t.intro,b.style.display="block",s.call(e,t.element,b,f,c),e._options.showBullets&&(l.querySelector(".introjs-bullets li > a.active").className="",l.querySelector('.introjs-bullets li > a[data-stepnumber="'+t.step+'"]').className="active"),l.querySelector(".introjs-progress .introjs-progressbar").setAttribute("style","width:"+x.call(e)+"%;"),b.style.opacity=1,c&&(c.style.opacity=1),-1===w.tabIndex?y.focus():w.focus()},350)}else{var k=document.createElement("div"),E=document.createElement("div"),A=document.createElement("div"),L=document.createElement("div"),I=document.createElement("div"),P=document.createElement("div"),q=document.createElement("div"),T=document.createElement("div");k.className=a,E.className="introjs-tooltipReferenceLayer",h.call(e,k),h.call(e,E),this._targetElement.appendChild(k),this._targetElement.appendChild(E),A.className="introjs-arrow",I.className="introjs-tooltiptext",I.innerHTML=t.intro,P.className="introjs-bullets",!1===this._options.showBullets&&(P.style.display="none");for(var H=document.createElement("ul"),N=0,B=this._introItems.length;N<B;N++){var O=document.createElement("li"),R=document.createElement("a");R.onclick=function(){e.goToStep(this.getAttribute("data-stepnumber"))},N===t.step-1&&(R.className="active"),p(R),R.innerHTML="&nbsp;",R.setAttribute("data-stepnumber",this._introItems[N].step),O.appendChild(R),H.appendChild(O)}P.appendChild(H),q.className="introjs-progress",!1===this._options.showProgress&&(q.style.display="none");var M=document.createElement("div");if(M.className="introjs-progressbar",M.setAttribute("style","width:"+x.call(this)+"%;"),q.appendChild(M),T.className="introjs-tooltipbuttons",!1===this._options.showButtons&&(T.style.display="none"),L.className="introjs-tooltip",L.appendChild(I),L.appendChild(P),L.appendChild(q),1==this._options.showStepNumbers){var z=document.createElement("span");z.className="introjs-helperNumberLayer",z.innerHTML=t.step,E.appendChild(z)}L.appendChild(A),E.appendChild(L);var w=document.createElement("a");w.onclick=function(){e._introItems.length-1!=e._currentStep&&i.call(e)},p(w),w.innerHTML=this._options.nextLabel;var _=document.createElement("a");_.onclick=function(){0!=e._currentStep&&o.call(e)},p(_),_.innerHTML=this._options.prevLabel;var y=document.createElement("a");y.className="introjs-button introjs-skipbutton",p(y),y.innerHTML=this._options.skipLabel,y.onclick=function(){e._introItems.length-1==e._currentStep&&"function"==typeof e._introCompleteCallback&&e._introCompleteCallback.call(e),r.call(e,e._targetElement)},T.appendChild(y),this._introItems.length>1&&(T.appendChild(_),T.appendChild(w)),L.appendChild(T),s.call(e,t.element,L,A,z)}if(!0===this._options.disableInteraction&&function(){var t=document.querySelector(".introjs-disableInteraction");null===t&&((t=document.createElement("div")).className="introjs-disableInteraction",this._targetElement.appendChild(t)),h.call(this,t)}.call(e),_.removeAttribute("tabIndex"),w.removeAttribute("tabIndex"),0==this._currentStep&&this._introItems.length>1?(y.className="introjs-button introjs-skipbutton",w.className="introjs-button introjs-nextbutton",1==this._options.hidePrev?(_.className="introjs-button introjs-prevbutton introjs-hidden",w.className+=" introjs-fullbutton"):_.className="introjs-button introjs-prevbutton introjs-disabled",_.tabIndex="-1",y.innerHTML=this._options.skipLabel):this._introItems.length-1==this._currentStep||1==this._introItems.length?(y.innerHTML=this._options.doneLabel,y.className+=" introjs-donebutton",_.className="introjs-button introjs-prevbutton",1==this._options.hideNext?(w.className="introjs-button introjs-nextbutton introjs-hidden",_.className+=" introjs-fullbutton"):w.className="introjs-button introjs-nextbutton introjs-disabled",w.tabIndex="-1"):(y.className="introjs-button introjs-skipbutton",_.className="introjs-button introjs-prevbutton",w.className="introjs-button introjs-nextbutton",y.innerHTML=this._options.skipLabel),w.focus(),function(t){if(t.element instanceof SVGElement)for(var e=t.element.parentNode;null!=t.element.parentNode&&e.tagName&&"body"!==e.tagName.toLowerCase();)"svg"===e.tagName.toLowerCase()&&m(e,"introjs-showElement introjs-relativePosition"),e=e.parentNode;m(t.element,"introjs-showElement");var n=g(t.element,"position");"absolute"!==n&&"relative"!==n&&"fixed"!==n&&m(t.element,"introjs-relativePosition");for(var e=t.element.parentNode;null!=e&&e.tagName&&"body"!==e.tagName.toLowerCase();){var i=g(e,"z-index"),o=parseFloat(g(e,"opacity")),r=g(e,"transform")||g(e,"-webkit-transform")||g(e,"-moz-transform")||g(e,"-ms-transform")||g(e,"-o-transform");(/[0-9]+/.test(i)||o<1||"none"!==r&&void 0!==r)&&(e.className+=" introjs-fixParent"),e=e.parentNode}}(t),!function(t){var e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom+80<=window.innerHeight&&e.right<=window.innerWidth}(t.element)&&!0===this._options.scrollToElement){var V=t.element.getBoundingClientRect(),D=v().height,G=V.bottom-(V.bottom-V.top),K=V.bottom-D;G<0||t.element.clientHeight>D?window.scrollBy(0,G-this._options.scrollPadding):window.scrollBy(0,K+70+this._options.scrollPadding)}void 0!==this._introAfterChangeCallback&&this._introAfterChangeCallback.call(this,t.element)}function d(){for(var t=document.querySelectorAll(".introjs-showElement"),e=0,n=t.length;e<n;e++){var i=t[e];f(i,/introjs-[a-zA-Z]+/g)}}function m(t,e){if(t instanceof SVGElement){var n=t.getAttribute("class")||"";t.setAttribute("class",n+" "+e)}else t.className+=" "+e}function f(t,e){if(t instanceof SVGElement){var n=t.getAttribute("class")||"";t.setAttribute("class",n.replace(e,"").replace(/^\s+|\s+$/g,""))}else t.className=t.className.replace(e,"").replace(/^\s+|\s+$/g,"")}function g(t,e){var n="";return t.currentStyle?n=t.currentStyle[e]:document.defaultView&&document.defaultView.getComputedStyle&&(n=document.defaultView.getComputedStyle(t,null).getPropertyValue(e)),n&&n.toLowerCase?n.toLowerCase():n}function b(t){var e=t.parentNode;return!(!e||"HTML"===e.nodeName)&&("fixed"==g(t,"position")||b(e))}function v(){if(void 0!=window.innerWidth)return{width:window.innerWidth,height:window.innerHeight};var t=document.documentElement;return{width:t.clientWidth,height:t.clientHeight}}function y(){var t=this._targetElement.querySelector(".introjs-hintReference");if(t){var e=t.getAttribute("data-step");return t.parentNode.removeChild(t),e}}function _(t){if(this._introItems=[],this._options.hints)for(var e=0,i=this._options.hints.length;e<i;e++){var o=n(this._options.hints[e]);"string"==typeof o.element&&(o.element=document.querySelector(o.element)),o.hintPosition=o.hintPosition||this._options.hintPosition,o.hintAnimation=o.hintAnimation||this._options.hintAnimation,null!=o.element&&this._introItems.push(o)}else{var r=t.querySelectorAll("*[data-hint]");if(r.length<1)return!1;for(var e=0,i=r.length;e<i;e++){var s=r[e],l=s.getAttribute("data-hintAnimation");l=l?"true"==l:this._options.hintAnimation,this._introItems.push({element:s,hint:s.getAttribute("data-hint"),hintPosition:s.getAttribute("data-hintPosition")||this._options.hintPosition,hintAnimation:l,tooltipClass:s.getAttribute("data-tooltipClass"),position:s.getAttribute("data-position")||this._options.tooltipPosition})}}(function(){var t=this,e=document.querySelector(".introjs-hints");if(null!=e)n=e;else{var n=document.createElement("div");n.className="introjs-hints"}for(var i=0,o=this._introItems.length;i<o;i++){var r=this._introItems[i];if(!document.querySelector('.introjs-hint[data-step="'+i+'"]')){var s=document.createElement("a");p(s),function(e,n,i){e.onclick=function(o){var r=o||window.event;r.stopPropagation&&r.stopPropagation(),null!=r.cancelBubble&&(r.cancelBubble=!0),E.call(t,e,n,i)}}(s,r,i),s.className="introjs-hint",r.hintAnimation||(s.className+=" introjs-hint-no-anim"),b(r.element)&&(s.className+=" introjs-fixedhint");var l=document.createElement("div");l.className="introjs-hint-dot";var a=document.createElement("div");a.className="introjs-hint-pulse",s.appendChild(l),s.appendChild(a),s.setAttribute("data-step",i),r.targetElement=r.element,r.element=s,k.call(this,r.hintPosition,s,r.targetElement),n.appendChild(s)}}document.body.appendChild(n),void 0!==this._hintsAddedCallback&&this._hintsAddedCallback.call(this)}).call(this),document.addEventListener?(document.addEventListener("click",y.bind(this),!1),window.addEventListener("resize",w.bind(this),!0)):document.attachEvent&&(document.attachEvent("onclick",y.bind(this)),document.attachEvent("onresize",w.bind(this)))}function w(){for(var t=0,e=this._introItems.length;t<e;t++){var n=this._introItems[t];void 0!==n.targetElement&&k.call(this,n.hintPosition,n.element,n.targetElement)}}function C(t){y.call(this);var e=this._targetElement.querySelector('.introjs-hint[data-step="'+t+'"]');e&&(e.className+=" introjs-hidehint"),void 0!==this._hintCloseCallback&&this._hintCloseCallback.call(this,t)}function j(t){var e=this._targetElement.querySelector('.introjs-hint[data-step="'+t+'"]');e&&(e.className=e.className.replace(/introjs\-hidehint/g,""))}function N(t){var e=this._targetElement.querySelector('.introjs-hint[data-step="'+t+'"]');e&&e.parentNode.removeChild(e)}function k(t,e,n){var i=S.call(this,n);switch(t){default:case"top-left":e.style.left=i.left+"px",e.style.top=i.top+"px";break;case"top-right":e.style.left=i.left+i.width-20+"px",e.style.top=i.top+"px";break;case"bottom-left":e.style.left=i.left+"px",e.style.top=i.top+i.height-20+"px";break;case"bottom-right":e.style.left=i.left+i.width-20+"px",e.style.top=i.top+i.height-20+"px";break;case"middle-left":e.style.left=i.left+"px",e.style.top=i.top+(i.height-20)/2+"px";break;case"middle-right":e.style.left=i.left+i.width-20+"px",e.style.top=i.top+(i.height-20)/2+"px";break;case"middle-middle":e.style.left=i.left+(i.width-20)/2+"px",e.style.top=i.top+(i.height-20)/2+"px";break;case"bottom-middle":e.style.left=i.left+(i.width-20)/2+"px",e.style.top=i.top+i.height-20+"px";break;case"top-middle":e.style.left=i.left+(i.width-20)/2+"px",e.style.top=i.top+"px"}}function E(t,e,n){void 0!==this._hintClickCallback&&this._hintClickCallback.call(this,t,e,n);var i=y.call(this);if(parseInt(i,10)!=n){var o=document.createElement("div"),r=document.createElement("div"),l=document.createElement("div"),a=document.createElement("div");o.className="introjs-tooltip",o.onclick=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0},r.className="introjs-tooltiptext";var c=document.createElement("p");c.innerHTML=e.hint;var p=document.createElement("a");p.className="introjs-button",p.innerHTML=this._options.hintButtonLabel,p.onclick=C.bind(this,n),r.appendChild(c),r.appendChild(p),l.className="introjs-arrow",o.appendChild(l),o.appendChild(r),this._currentStep=t.getAttribute("data-step"),a.className="introjs-tooltipReferenceLayer introjs-hintReference",a.setAttribute("data-step",t.getAttribute("data-step")),h.call(this,a),a.appendChild(o),document.body.appendChild(a),s.call(this,t,o,l,null,!0)}}function S(t){var e={},n=document.body,i=document.documentElement,o=window.pageYOffset||i.scrollTop||n.scrollTop,r=window.pageXOffset||i.scrollLeft||n.scrollLeft;if(t instanceof SVGElement){var s=t.getBoundingClientRect();e.top=s.top+o,e.width=s.width,e.height=s.height,e.left=s.left+r}else{e.width=t.offsetWidth,e.height=t.offsetHeight;for(var l=0,a=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)l+=t.offsetLeft,a+=t.offsetTop,t=t.offsetParent;e.top=a,e.left=l}return e}function x(){var t=parseInt(this._currentStep+1,10);return t/this._introItems.length*100}var A=function(t){if("object"==typeof t)return new e(t);if("string"==typeof t){var n=document.querySelector(t);if(n)return new e(n);throw new Error("There is no element with given selector.")}return new e(document.body)};A.version="2.5.0",A.fn=e.prototype={clone:function(){return new e(this)},setOption:function(t,e){return this._options[t]=e,this},setOptions:function(t){return this._options=function(t,e){var n={};for(var i in t)n[i]=t[i];for(var i in e)n[i]=e[i];return n}(this._options,t),this},start:function(){return function(t){var e=[],s=this;if(this._options.steps)for(var l=0,a=this._options.steps.length;l<a;l++){var c=n(this._options.steps[l]);if(c.step=e.length+1,"string"==typeof c.element&&(c.element=document.querySelector(c.element)),void 0===c.element||null==c.element){var p=document.querySelector(".introjsFloatingElement");null==p&&((p=document.createElement("div")).className="introjsFloatingElement",document.body.appendChild(p)),c.element=p,c.position="floating"}null!=c.element&&e.push(c)}else{var u=t.querySelectorAll("*[data-intro]");if(u.length<1)return!1;for(var l=0,d=u.length;l<d;l++){var m=u[l];if("none"!=m.style.display){var f=parseInt(m.getAttribute("data-step"),10);f>0&&(e[f-1]={element:m,intro:m.getAttribute("data-intro"),step:parseInt(m.getAttribute("data-step"),10),tooltipClass:m.getAttribute("data-tooltipClass"),highlightClass:m.getAttribute("data-highlightClass"),position:m.getAttribute("data-position")||this._options.tooltipPosition})}}for(var g=0,l=0,d=u.length;l<d;l++){var m=u[l];if(null==m.getAttribute("data-step")){for(;void 0!==e[g];)g++;e[g]={element:m,intro:m.getAttribute("data-intro"),step:g+1,tooltipClass:m.getAttribute("data-tooltipClass"),highlightClass:m.getAttribute("data-highlightClass"),position:m.getAttribute("data-position")||this._options.tooltipPosition}}}}for(var b=[],v=0;v<e.length;v++)e[v]&&b.push(e[v]);return(e=b).sort(function(t,e){return t.step-e.step}),s._introItems=e,function(t){var e=document.createElement("div"),n="",i=this;if(e.className="introjs-overlay",t.tagName&&"body"!==t.tagName.toLowerCase()){var o=S(t);o&&(n+="width: "+o.width+"px; height:"+o.height+"px; top:"+o.top+"px;left: "+o.left+"px;",e.setAttribute("style",n))}else n+="top: 0;bottom: 0; left: 0;right: 0;position: fixed;",e.setAttribute("style",n);return t.appendChild(e),e.onclick=function(){1==i._options.exitOnOverlayClick&&r.call(i,t)},setTimeout(function(){n+="opacity: "+i._options.overlayOpacity.toString()+";",e.setAttribute("style",n)},10),!0}.call(s,t)&&(i.call(s),t.querySelector(".introjs-skipbutton"),t.querySelector(".introjs-nextbutton"),s._onKeyDown=function(e){if(27===e.keyCode&&1==s._options.exitOnEsc)r.call(s,t);else if(37===e.keyCode)o.call(s);else if(39===e.keyCode)i.call(s);else if(13===e.keyCode){var n=e.target||e.srcElement;n&&n.className.indexOf("introjs-prevbutton")>0?o.call(s):n&&n.className.indexOf("introjs-skipbutton")>0?(s._introItems.length-1==s._currentStep&&"function"==typeof s._introCompleteCallback&&s._introCompleteCallback.call(s),r.call(s,t)):i.call(s),e.preventDefault?e.preventDefault():e.returnValue=!1}},s._onResize=function(t){h.call(s,document.querySelector(".introjs-helperLayer")),h.call(s,document.querySelector(".introjs-tooltipReferenceLayer"))},window.addEventListener?(this._options.keyboardNavigation&&window.addEventListener("keydown",s._onKeyDown,!0),window.addEventListener("resize",s._onResize,!0)):document.attachEvent&&(this._options.keyboardNavigation&&document.attachEvent("onkeydown",s._onKeyDown),document.attachEvent("onresize",s._onResize))),!1}.call(this,this._targetElement),this},goToStep:function(t){return function(t){this._currentStep=t-2,void 0!==this._introItems&&i.call(this)}.call(this,t),this},addStep:function(t){return this._options.steps||(this._options.steps=[]),this._options.steps.push(t),this},addSteps:function(t){if(t.length){for(var e=0;e<t.length;e++)this.addStep(t[e]);return this}},goToStepNumber:function(t){return function(t){this._currentStepNumber=t,void 0!==this._introItems&&i.call(this)}.call(this,t),this},nextStep:function(){return i.call(this),this},previousStep:function(){return o.call(this),this},exit:function(){return r.call(this,this._targetElement),this},refresh:function(){return h.call(this,document.querySelector(".introjs-helperLayer")),h.call(this,document.querySelector(".introjs-tooltipReferenceLayer")),w.call(this),this},onbeforechange:function(t){if("function"!=typeof t)throw new Error("Provided callback for onbeforechange was not a function");return this._introBeforeChangeCallback=t,this},onchange:function(t){if("function"!=typeof t)throw new Error("Provided callback for onchange was not a function.");return this._introChangeCallback=t,this},onafterchange:function(t){if("function"!=typeof t)throw new Error("Provided callback for onafterchange was not a function");return this._introAfterChangeCallback=t,this},oncomplete:function(t){if("function"!=typeof t)throw new Error("Provided callback for oncomplete was not a function.");return this._introCompleteCallback=t,this},onhintsadded:function(t){if("function"!=typeof t)throw new Error("Provided callback for onhintsadded was not a function.");return this._hintsAddedCallback=t,this},onhintclick:function(t){if("function"!=typeof t)throw new Error("Provided callback for onhintclick was not a function.");return this._hintClickCallback=t,this},onhintclose:function(t){if("function"!=typeof t)throw new Error("Provided callback for onhintclose was not a function.");return this._hintCloseCallback=t,this},onexit:function(t){if("function"!=typeof t)throw new Error("Provided callback for onexit was not a function.");return this._introExitCallback=t,this},addHints:function(){return _.call(this,this._targetElement),this},hideHint:function(t){return C.call(this,t),this},hideHints:function(){return function(){var t=this._targetElement.querySelectorAll(".introjs-hint");if(t&&t.length>0)for(var e=0;e<t.length;e++)C.call(this,t[e].getAttribute("data-step"))}.call(this),this},showHint:function(t){return j.call(this,t),this},showHints:function(){return function(){var t=this._targetElement.querySelectorAll(".introjs-hint");if(t&&t.length>0)for(var e=0;e<t.length;e++)j.call(this,t[e].getAttribute("data-step"));else _.call(this,this._targetElement)}.call(this),this},removeHints:function(){return function(){var t=this._targetElement.querySelectorAll(".introjs-hint");if(t&&t.length>0)for(var e=0;e<t.length;e++)N.call(this,t[e].getAttribute("data-step"))}.call(this),this},removeHint:function(t){return N.call(this,t),this}},t.introJs=A}(e)}}]);
//# sourceMappingURL=https://staging.hackerrank.net/assets/sourcemaps/vendors~hackerrank_r_dashboardv2~hackerrank_r_work-98ea07986139b92e6a87.js.map