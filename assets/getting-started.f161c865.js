var ro=Object.defineProperty,no=Object.defineProperties;var oo=Object.getOwnPropertyDescriptors;var fr=Object.getOwnPropertySymbols;var an=Object.prototype.hasOwnProperty,sn=Object.prototype.propertyIsEnumerable;var cn=(e,t,r)=>t in e?ro(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,se=(e,t)=>{for(var r in t||(t={}))an.call(t,r)&&cn(e,r,t[r]);if(fr)for(var r of fr(t))sn.call(t,r)&&cn(e,r,t[r]);return e},he=(e,t)=>no(e,oo(t));var ln=(e,t)=>{var r={};for(var n in e)an.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&fr)for(var n of fr(e))t.indexOf(n)<0&&sn.call(e,n)&&(r[n]=e[n]);return r};import{R as I,r as A,a as ao,b as un,j as h,d as bt,F as io,c as J}from"./index.9cf6ad26.js";function me(){return me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},me.apply(this,arguments)}function Er(e,t){if(e==null)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(o[r]=e[r]);return o}function tr(e){var t=A.exports.useRef({fn:e,curr:void 0}).current;if(t.fn=e,!t.curr){var r=Object.create(null);Object.keys(e).forEach(function(n){r[n]=function(){var o;return(o=t.fn[n]).call.apply(o,[t.fn].concat([].slice.call(arguments)))}}),t.curr=r}return t.curr}function hr(e){return A.exports.useReducer(function(t,r){return me({},t,typeof r=="function"?r(t):r)},e)}var dn=I.createContext(void 0),it=typeof document!="undefined"&&"ontouchstart"in document.documentElement;function Gt(e,t,r){var n=A.exports.useRef(t);n.current=t,A.exports.useEffect(function(){function o(a){n.current(a)}return e&&window.addEventListener(e,o,r),function(){e&&window.removeEventListener(e,o)}},[e])}function fn(e){var t=A.exports.useRef({initial:!1,fn:void 0}).current;return t.initial||(t.initial=!0,t.fn=e()),t.fn}var so=["className","children"],co=function(e){var t=e.className,r=e.children,n=Er(e,so),o=fn(function(){return document.createElement("section")});return I.useEffect(function(){return document.body.appendChild(o),function(){document.body.removeChild(o)}},[]),ao.exports.createPortal(I.createElement("div",me({className:"PhotoView-SlidePortal"+(t?" "+t:""),role:"dialog",id:"PhotoView_Slider"},n),r),o)};function lo(e){return I.createElement("svg",me({width:"44",height:"44",viewBox:"0 0 768 768"},e),I.createElement("path",{fill:"#FFF",d:"M607.5 205.5l-178.5 178.5 178.5 178.5-45 45-178.5-178.5-178.5 178.5-45-45 178.5-178.5-178.5-178.5 45-45 178.5 178.5 178.5-178.5z"}))}function uo(e){return I.createElement("svg",me({width:"44",height:"44",viewBox:"0 0 768 768"},e),I.createElement("path",{d:"M640.5 352.5v63h-390l178.5 180-45 45-256.5-256.5 256.5-256.5 45 45-178.5 180h390z"}))}function fo(e){return I.createElement("svg",me({width:"44",height:"44",viewBox:"0 0 768 768"},e),I.createElement("path",{d:"M384 127.5l256.5 256.5-256.5 256.5-45-45 178.5-180h-390v-63h390l-178.5-180z"}))}function ho(){return A.exports.useEffect(function(){var e=document.body.style,t=e.overflow;return e.overflow="hidden",function(){e.overflow=t}},[]),null}function hn(e){var t=e.touches[0],r=t.clientX,n=t.clientY;if(e.touches.length>=2){var o=e.touches[1],a=o.clientX,s=o.clientY;return[(r+a)/2,(n+s)/2,Math.sqrt(Math.pow(a-r,2)+Math.pow(s-n,2))]}return[r,n,0]}function xt(e,t,r,n){var o=r*t,a=(o-n)/2,s=void 0,c=e;return o<=n?(s="S",c=0):e>0&&a-e<=0?(s="F",c=a):e<0&&a+e<=0&&(s="E",c=-a),[s,c]}function Mr(e,t,r,n,o,a,s,c,d,m){d===void 0&&(d=0),m===void 0&&(m=0);var w=window,p=w.innerWidth,f=w.innerHeight,l=p/2,y=f/2;return{x:r-c/s*(r-(l+e))-l+(xt(e,c,o,p)[0]?d/2:d),y:n-c/s*(n-(y+t))-y+(xt(t,c,a,f)[0]?m/2:m),lastCX:r,lastCY:n}}function mo(e,t,r){if(e){var n=window;return(t-n.innerWidth)/2+e.clientX+"px "+((r-n.innerHeight)/2+e.clientY)+"px"}}function _r(e,t,r){var n=t,o=r,a=e%180!=0;return a&&(n=r,o=t),[n,o,a]}function Dr(e,t,r){var n,o,a=0,s=_r(r,window.innerWidth,window.innerHeight),c=s[0],d=s[1],m=e/t*d,w=t/e*c;return e<c&&t<d?(n=e,o=t):e<c&&t>=d?(n=m,o=d):e>=c&&t<d||e/t>c/d?(n=c,o=w):t/e>=3&&!s[2]?(n=c,a=((o=w)-d)/2):(n=m,o=d),{width:Math.floor(n),height:Math.floor(o),x:0,y:a,easing:!0}}function mr(e,t){var r=t.leading,n=r!==void 0&&r,o=t.maxWait,a=t.wait,s=a===void 0?o||0:a,c=A.exports.useRef(e);c.current=e;var d=A.exports.useRef(0),m=A.exports.useRef(),w=function(){return m.current&&clearTimeout(m.current)},p=A.exports.useCallback(function(){var f=[].slice.call(arguments),l=Date.now();function y(){d.current=l,w(),c.current.apply(null,f)}var x=d.current,S=l-x;if(x===0&&(n&&y(),d.current=l),o!==void 0){if(S>o)return void y()}else S<s&&(d.current=l);w(),m.current=setTimeout(function(){y(),d.current=0},s)},[s,o,n]);return p.cancel=w,p}function Nt(e,t,r){var n=t-e;if(n!==0){var o=Date.now(),a=0,s=function(){var d,m=Math.min(1,(Date.now()-o)/400);r(e+((d=m)===1?1:1-Math.pow(2,-10*d))*n)&&m<1?c():cancelAnimationFrame(a)};c()}function c(){a=requestAnimationFrame(s)}}var mn=function(){var e=A.exports.useRef(!1);return A.exports.useEffect(function(){return e.current=!0,function(){e.current=!1}},[]),e};function po(){return I.createElement("div",{className:"PhotoView__Spinner"},I.createElement("svg",{viewBox:"0 0 32 32",width:"36",height:"36",fill:"white"},I.createElement("path",{opacity:".25",d:"M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"}),I.createElement("path",{d:"M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"})))}var vo=["src","loaded","broken","className","onPhotoLoad","loadingElement","brokenElement"];function go(e){var t=e.src,r=e.loaded,n=e.broken,o=e.className,a=e.onPhotoLoad,s=e.loadingElement,c=e.brokenElement,d=Er(e,vo),m=mn();return t&&!n?I.createElement(I.Fragment,null,I.createElement("img",me({className:"PhotoView__Photo"+(o?" "+o:""),src:t,onLoad:function(w){var p=w.target;m.current&&a({loaded:!0,naturalWidth:p.naturalWidth,naturalHeight:p.naturalHeight})},onError:function(){m.current&&a({broken:!0})},alt:""},d)),!r&&(s||I.createElement(po,null))):c?typeof c=="function"?c({src:t}):c:null}var yo={naturalWidth:void 0,naturalHeight:void 0,width:0,height:0,loaded:void 0,broken:!1,x:0,y:0,touched:!1,maskTouched:!1,CX:0,CY:0,lastX:0,lastY:0,lastCX:0,lastCY:0,touchTime:0,touchLength:0,easing:!0,stopRaf:!0,currReach:void 0};function wo(e){var t=e.src,r=e.render,n=e.width,o=e.height,a=e.wrapClassName,s=e.className,c=e.style,d=e.loadingElement,m=e.brokenElement,w=e.rotate,p=w===void 0?0:w,f=e.scale,l=f===void 0?1:f,y=e.onPhotoTap,x=e.onMaskTap,S=e.onReachMove,q=e.onReachUp,te=e.onPhotoResize,W=e.onWheel,H=e.isActive,Ce=e.activeAnimation,Ze=e.originRect,ze=hr(yo),O=ze[0],pe=ze[1],ct=A.exports.useRef(),le=mn(),ve=O.naturalWidth,Qe=ve===void 0?n||1:ve,$t=O.naturalHeight,R=$t===void 0?o||1:$t,ne=O.width,U=O.height,Ee=O.loaded,ge=Ee===void 0?!t:Ee,De=O.broken,ue=O.x,de=O.y,Oe=O.touched,kt=O.stopRaf,Me=O.maskTouched,Re=O.CX,Se=O.CY,L=O.lastX,ye=O.lastY,Be=O.lastCX,fe=O.lastCY,Le=O.touchTime,oe=O.touchLength,Te=O.easing,we=O.currReach,je=mr(function(u,C,_){if(_===void 0&&(_=0),(Oe||Me)&&H){var K=_r(p,ne,U),g=K[0],T=K[1];if(_===0&&ct.current===void 0){var D=Math.abs(u-Re)<=20,G=Math.abs(C-Se)<=20;if(D&&G)return void pe({lastCX:u,lastCY:C});ct.current=D?C>Se?"pull":"push":"x"}var j=u-Be,X=C-fe,$=void 0;if(_===0){var re=xt(j+L,l,g,window.innerWidth)[0],$e=xt(X+ye,l,T,window.innerHeight);$=function(Ye,jt,Xt,Ot){return jt&&Ye==="x"||Ot==="x"?"x":Xt&&(Ye==="pull"||Ye==="push")||Ot==="y"?"y":void 0}(ct.current,re,$e[0],we),$!==void 0&&S($,u,C,l)}if($==="x"||Me)pe({currReach:"x"});else{var Je=Math.max(Math.min(l+(_-oe)/100/2*l,Math.max(6,Qe/ne)),.8);l!==Je&&W(Je),pe(me({touchLength:_,currReach:$},Mr(ue,de,u,C,ne,U,l,Je,j,X)))}}},{maxWait:8});function lt(u){return!kt&&!Oe&&(le.current&&pe(me({},u,{easing:!1})),le.current)}var ke,Xe,be,Ie,ut,It,Vt,xe,At=(ut=function(u){return lt({x:u})},It=function(u){return lt({y:u})},Vt=function(u){return le.current&&W(u),!Oe&&le.current},xe=tr({X:function(u){return ut(u)},Y:function(u){return It(u)},S:function(u){return Vt(u)}}),function(u,C,_,K,g,T,D,G,j){if(D<1)return Nt(u,0,xe.X),Nt(C,0,xe.Y),void Nt(D,1,xe.S);var X=Date.now()-j,$=_r(G,g,T),re=$[0],$e=$[1],Je=window,Ye=Je.innerWidth,jt=Je.innerHeight;if(X>=200){var Xt=xt(u,D,re,Ye);Xt[0]&&Nt(u,Xt[1],xe.X);var Ot=xt(C,D,$e,jt);Ot[0]&&Nt(C,Ot[1],xe.Y)}else{var sr=(u-_)/X,Jt=(C-K)/X,dt=Math.sqrt(Math.pow(sr,2)+Math.pow(Jt,2)),ft=!1,Ve=!1;(function(Ue,yt){var rt=Ue,wt=0,nt=void 0,ot=0,Yt=function(ht){nt||(nt=ht);var tt=ht-nt,k=Math.sign(Ue),P=-.002*k,b=Math.sign(-rt)*Math.pow(rt,2)*2e-4,E=rt*tt+(P+b)*Math.pow(tt,2)/2;wt+=E,nt=ht,k*(rt+=(P+b)*tt)<=0?Rt():yt(wt)?et():Rt()};function et(){ot=requestAnimationFrame(Yt)}function Rt(){cancelAnimationFrame(ot)}et()})(dt,function(Ue){var yt=u+Ue*(sr/dt),rt=C+Ue*(Jt/dt),wt=xt(yt,D,re,Ye),nt=wt[0],ot=wt[1],Yt=xt(rt,D,$e,jt),et=Yt[0],Rt=Yt[1];if(nt&&!ft&&(ft=!0,Nt(yt,ot,xe.X)),et&&!Ve&&(Ve=!0,Nt(rt,Rt,xe.Y)),ft&&Ve)return!1;var ht=ft||xe.X(ot),tt=Ve||xe.Y(Rt);return ht&&tt})}}),gt=(ke=function(u,C){y==null||y(u,C)},Xe=function(u,C){if(we===void 0){var _=l!==1?1:Math.max(2,Qe/ne),K=Mr(ue,de,u,C,ne,U,l,_);W(_),pe(me({CX:Re,CY:Se},K,_<=1&&{x:0,y:0}))}},be=A.exports.useRef(0),Ie=mr(function(){be.current=0,ke.apply(void 0,[].slice.call(arguments))},{wait:300}),function(){var u=[].slice.call(arguments);be.current+=1,Ie.apply(void 0,u),be.current>=2&&(Ie.cancel(),be.current=0,Xe.apply(void 0,u))});function Et(u,C){if(ct.current=void 0,(Oe||Me)&&H){var _=Re!==u||Se!==C,K=Math.max(Math.min(l,Math.max(6,Qe/ne)),1);K!==l&&W(K),pe({touched:!1,maskTouched:!1,easing:!0,stopRaf:!1,currReach:void 0}),At(ue,de,L,ye,ne,U,l,p,Le),q==null||q(u,C),_||(Oe&&y?gt(u,C):Me&&x&&x(u,C))}}function Mt(u,C,_){_===void 0&&(_=0),pe({touched:!0,CX:u,CY:C,lastCX:u,lastCY:C,lastX:ue,lastY:de,touchLength:_,touchTime:Date.now()})}function zt(u,C){pe({maskTouched:!0,CX:u,CY:C,lastX:ue,lastY:de})}Gt(it?void 0:"mousemove",function(u){u.preventDefault(),je(u.clientX,u.clientY)}),Gt(it?void 0:"mouseup",function(u){Et(u.clientX,u.clientY)}),Gt(it?"touchmove":void 0,function(u){u.preventDefault();var C=hn(u);je.apply(void 0,C)},{passive:!1}),Gt(it?"touchend":void 0,function(u){var C=u.changedTouches[0];Et(C.clientX,C.clientY)},{passive:!1}),Gt("resize",mr(function(){ge&&!Oe&&(pe(Dr(Qe,R,p)),te&&te())},{maxWait:8})),A.exports.useLayoutEffect(function(){pe(Dr(Qe,R,p))},[p]);var _t=function(u,C,_,K){var g=A.exports.useRef(!1),T=hr({leading:!0,scale:_}),D=T[0],G=D.leading,j=D.scale,X=T[1],$=mr(function(re){try{return K(!1),X({leading:!1,scale:re}),Promise.resolve()}catch($e){return Promise.reject($e)}},{wait:400});return A.exports.useLayoutEffect(function(){g.current?(K(!0),X({leading:!0}),$(_)):g.current=!0},[_]),G?[u*j,C*j,_/j]:[u*_,C*_,1]}(ne,U,l,function(u){return pe({easing:u})}),Dt=_t[2],Lt={className:s,onMouseDown:it?void 0:function(u){u.preventDefault(),Mt(u.clientX,u.clientY,0)},onTouchStart:it?function(u){Mt.apply(void 0,hn(u))}:void 0,onWheel:function(u){if(we===void 0){var C=Math.max(Math.min(l-u.deltaY/100/2,Math.max(6,Qe/ne)),1),_=Mr(ue,de,u.clientX,u.clientY,ne,U,l,C);pe(me({CX:u.clientX,CY:u.clientY,stopRaf:!0},_,C<=1&&{x:0,y:0})),W(C)}},style:{width:_t[0],height:_t[1],transform:"translate3d("+ue+"px, "+de+"px, 0) scale("+Dt+") rotate("+p+"deg)",transition:Oe||!Te?void 0:"transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",willChange:H?"transform":void 0}};return I.createElement("div",{className:"PhotoView__PhotoWrap"+(a?" "+a:""),style:c},I.createElement("div",{className:"PhotoView__PhotoMask",onMouseDown:!it&&H?function(u){zt(u.clientX,u.clientY)}:void 0,onTouchStart:it&&H?function(u){var C=u.touches[0];zt(C.clientX,C.clientY)}:void 0}),I.createElement("div",{className:"PhotoView__PhotoBox"+(ge?Ce==="in"?" PhotoView__animateIn":Ce==="out"?" PhotoView__animateOut":"":""),style:{transformOrigin:ge?mo(Ze,ne,U):void 0}},t?I.createElement(go,me({src:t,loaded:ge,broken:De},Lt,{onPhotoLoad:function(u){pe(me({},u,u.loaded&&Dr(u.naturalWidth||0,u.naturalHeight||0,p)))},loadingElement:d,brokenElement:m})):r==null?void 0:r({attrs:Lt,scale:Dt,rotate:p})))}var pn={translateX:0,touched:!1,easing:!0,lastCX:void 0,lastCY:void 0,bgOpacity:void 0,lastBgOpacity:void 0,overlayVisible:!0,canPullClose:!0,photoMap:new Map};function vn(e){var t=e.loop,r=t===void 0?3:t,n=e.photoClosable,o=e.maskClosable,a=o===void 0||o,s=e.maskOpacity,c=s===void 0?1:s,d=e.pullClosable,m=d===void 0||d,w=e.bannerVisible,p=w===void 0||w,f=e.overlayRender,l=e.toolbarRender,y=e.className,x=e.maskClassName,S=e.photoClassName,q=e.photoWrapClassName,te=e.loadingElement,W=e.brokenElement,H=e.images,Ce=e.index,Ze=Ce===void 0?0:Ce,ze=e.onIndexChange,O=e.visible,pe=e.onClose,ct=hr(pn),le=ct[0],ve=ct[1],Qe=A.exports.useState(0),$t=Qe[0],R=Qe[1],ne=le.translateX,U=le.touched,Ee=le.easing,ge=le.lastCX,De=le.lastCY,ue=le.bgOpacity,de=ue===void 0?c:ue,Oe=le.lastBgOpacity,kt=le.overlayVisible,Me=le.canPullClose,Re=le.photoMap,Se=e.hasOwnProperty("index"),L=Se?Ze:$t,ye=Se?ze:R,Be=A.exports.useRef(L),fe=H.length,Le=H[L],oe=typeof r=="boolean"?r:fe>r,Te=function(g,T){var D=A.exports.useReducer(function($){return!$},!1)[1],G=A.exports.useRef(),j=function($,re){var $e=A.exports.useRef($);function Je(Ye){$e.current=Ye}return A.exports.useMemo(function(){(function(Ye){g?(Ye(g),G.current="in"):G.current="out"})(Je)},[$]),[$e.current,Je]}(g),X=j[1];return{realVisible:j[0],activeAnimation:G.current,onAnimationEnd:function(){D(),G.current==="out"&&X(!1),G.current=void 0}}}(O),we=Te.realVisible,je=Te.activeAnimation,lt=Te.onAnimationEnd,ke=function(g,T){var D=A.exports.useState(),G=D[0],j=D[1];return A.exports.useEffect(function(){var X=T==null?void 0:T.current;if(X&&X.nodeType===1){var $=X.getBoundingClientRect();j({clientX:$.left+$.width/2,clientY:$.top+$.height/2})}else G&&!X&&j(void 0)},[g]),G}(O,Le==null?void 0:Le.originRef);A.exports.useLayoutEffect(function(){if(we)return ve({easing:!1,translateX:L*-(window.innerWidth+20)}),void(Be.current=L);ve(pn)},[we]);var Xe=tr({close:function(g){pe(g),ve({overlayVisible:!0,lastBgOpacity:de})},changeIndex:function(g,T){T===void 0&&(T=!0);var D=oe?Be.current+(g-L):g,G=fe-1,j=Math.min(G,Math.max(D,0)),X=oe?D:j,$=window.innerWidth+20;ve({touched:!1,lastCX:void 0,lastCY:void 0,translateX:-$*X,easing:T}),Be.current=X,ye==null||ye(oe?g<0?G:g>G?0:g:j)},onRotate:function(g){gt({rotate:g})},onScale:function(g){gt({scale:Math.max(1,Math.min(6,g))})}}),be=Xe.close,Ie=Xe.changeIndex,ut=Xe.onRotate,It=Xe.onScale;function Vt(){n?be():ve({overlayVisible:!kt})}function xe(){a&&be()}function At(){var g=window;ve({translateX:-(g.innerWidth+20)*L,lastCX:void 0,lastCY:void 0,easing:!1}),Be.current=L}function gt(g){var T=new Map(Re);if(Le){var D=Le.key;ve({photoMap:T.set(D,me({},T.get(D),g))})}}function Et(g){gt({scale:g})}function Mt(g,T,D,G){g==="x"?function(j){var X=window;if(ge!==void 0){var $=j-ge,re=$;!oe&&(L===0&&$>0||L===H.length-1&&$<0)&&(re=$/2),ve({touched:!0,lastCX:ge,translateX:-(X.innerWidth+20)*Be.current+re,easing:!0})}else ve({touched:!0,lastCX:j,translateX:ne,easing:!0})}(T):g==="y"&&function(j,X){if(De!==void 0){var $=Math.abs(j-De),re=Math.max(Math.min(c,c-$/100/4),0);ve({touched:!0,lastCY:De,bgOpacity:X===1?re:c,canPullClose:X===1})}else ve({touched:!0,lastCY:j,bgOpacity:de,canPullClose:!0})}(D,G)}function zt(g,T){var D=g-(ge!=null?ge:g),G=T-(De!=null?De:T),j=!1;if(D<-40)Ie(L+1);else if(D>40)Ie(L-1);else{var X=-(window.innerWidth+20)*Be.current;Math.abs(G)>100&&Me&&m&&(j=!0,be()),ve({touched:!1,translateX:X,lastCX:void 0,lastCY:void 0,bgOpacity:c,overlayVisible:!!j||kt})}}Gt("keydown",function(g){if(O)switch(g.key){case"ArrowLeft":Ie(L-1,!1);break;case"ArrowRight":Ie(L+1,!1);break;case"Escape":be()}});var _t="translate3d("+ne+"px, 0px, 0)",Dt=function(g,T,D){return A.exports.useMemo(function(){if(D){var G=g.length;return g.concat(g).concat(g).slice(G+T-1,G+T+2)}return g.slice(Math.max(T-1,0),Math.min(T+2,g.length+1))},[g,T,D])}(H,L,oe);if(!we)return null;var Lt=window.innerWidth,u=kt&&!je,C=O?de:Oe,_=Le?Re.get(Le.key):void 0,K={images:H,index:L,visible:O,onClose:be,onIndexChange:Ie,overlayVisible:u,onRotate:ut,onScale:It,scale:(_==null?void 0:_.scale)||1,rotate:(_==null?void 0:_.rotate)||0};return I.createElement(co,{className:(u?"":"PhotoView-PhotoSlider__clean")+(O?"":" PhotoView-PhotoSlider__willClose")+(y?" "+y:""),onClick:function(g){return g.stopPropagation()}},O&&I.createElement(ho,null),I.createElement("div",{className:"PhotoView-PhotoSlider__Backdrop"+(x?" "+x:"")+(je==="in"?" PhotoView-PhotoSlider__fadeIn":je==="out"?" PhotoView-PhotoSlider__fadeOut":""),style:{background:"rgba(0, 0, 0, "+C+")",transition:U?void 0:"background-color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)"},onAnimationEnd:lt}),p&&I.createElement("div",{className:"PhotoView-PhotoSlider__BannerWrap"},I.createElement("div",{className:"PhotoView-PhotoSlider__Counter"},L+1," / ",fe),I.createElement("div",{className:"PhotoView-PhotoSlider__BannerRight"},l&&l(K),I.createElement(lo,{className:"PhotoView-PhotoSlider__toolbarIcon",onClick:be}))),Dt.map(function(g,T){var D=oe||L!==0?Be.current-1+T:L+T;return I.createElement(wo,me({key:oe?g.key+"/"+g.src+"/"+D:g.key,src:g.src,render:g.render,width:g.width,height:g.height,onReachMove:Mt,onReachUp:zt,onPhotoTap:Vt,onMaskTap:xe,wrapClassName:q,className:S,style:{left:(Lt+20)*D+"px",transform:_t,transition:U||!Ee?void 0:"transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)"},loadingElement:te,brokenElement:W,onPhotoResize:At,isActive:(Le==null?void 0:Le.key)===g.key,activeAnimation:je,originRect:ke,onWheel:Et},Re.get(g.key)))}),!it&&p&&I.createElement(I.Fragment,null,(oe||L!==0)&&I.createElement("div",{className:"PhotoView-PhotoSlider__ArrowLeft",onClick:function(){return Ie(L-1,!1)}},I.createElement(uo,null)),(oe||L+1<fe)&&I.createElement("div",{className:"PhotoView-PhotoSlider__ArrowRight",onClick:function(){return Ie(L+1,!1)}},I.createElement(fo,null))),f&&I.createElement("div",{className:"PhotoView-PhotoSlider__Overlay"},f(K)))}var bo=["children","onIndexChange","onVisibleChange"],xo={images:[],visible:!1,index:0};function He(e){var t=e.children,r=e.onIndexChange,n=e.onVisibleChange,o=Er(e,bo),a=hr(xo),s=a[0],c=a[1],d=A.exports.useRef(0),m=s.images,w=s.visible,p=s.index,f=tr({nextId:function(){return d.current+=1},update:function(x){var S=m.findIndex(function(te){return te.key===x.key});if(S>-1){var q=m.slice();return q.splice(S,1,x),void c({images:q})}c(function(te){return{images:te.images.concat(x)}})},remove:function(x){var S=m.filter(function(q){return q.key!==x});c({images:S,index:Math.min(S.length-1,p)})},show:function(x){var S=m.findIndex(function(q){return q.key===x});c({visible:!0,index:S}),typeof n=="function"&&n(!0,S,s)}}),l=tr({close:function(){c({visible:!1}),typeof n=="function"&&n(!1,p,s)},changeIndex:function(x){c({index:x}),typeof r=="function"&&r(x,s)}}),y=A.exports.useMemo(function(){return me({},s,f)},[s,f]);return I.createElement(dn.Provider,{value:y},t,I.createElement(vn,me({images:m,visible:w,index:p,onIndexChange:l.changeIndex,onClose:l.close},o)))}var qe=function(e){var t=e.src,r=e.render,n=e.width,o=e.height,a=e.children,s=A.exports.useContext(dn),c=fn(function(){return s.nextId()}),d=A.exports.useState({clientX:void 0,clientY:void 0}),m=d[0],w=d[1],p=A.exports.useRef(null);A.exports.useEffect(function(){return function(){s.remove(c)}},[]);var f=tr({render:function(l){if(r)return r(l)},touchStart:function(l){var y=l.touches[0];if(w({clientX:y.clientX,clientY:y.clientY}),a){var x=a.props.onTouchStart;x&&x(l)}},touchEnd:function(l){var y=l.changedTouches[0];if(m.clientX===y.clientX&&m.clientY===y.clientY&&s.show(c),a){var x=a.props.onTouchEnd;x&&x(l)}},click:function(l){if(s.show(c),a){var y=a.props.onClick;y&&y(l)}}});return A.exports.useEffect(function(){s.update({key:c,src:t,originRef:p,render:f.render,width:n,height:o})},[t]),a?A.exports.Children.only(A.exports.cloneElement(a,it?{onTouchStart:f.touchStart,onTouchEnd:f.touchEnd,ref:p}:{onClick:f.click,ref:p})):null};var gn={exports:{}};(function(e,t){(function(r){e.exports=r(null)})(function r(n){var o=/^\0+/g,a=/[\0\r\f]/g,s=/: */g,c=/zoo|gra/,d=/([,: ])(transform)/g,m=/,+\s*(?![^(]*[)])/g,w=/ +\s*(?![^(]*[)])/g,p=/ *[\0] */g,f=/,\r+?/g,l=/([\t\r\n ])*\f?&/g,y=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,x=/\W+/g,S=/@(k\w+)\s*(\S*)\s*/,q=/::(place)/g,te=/:(read-only)/g,W=/\s+(?=[{\];=:>])/g,H=/([[}=:>])\s+/g,Ce=/(\{[^{]+?);(?=\})/g,Ze=/\s{2,}/g,ze=/([^\(])(:+) */g,O=/[svh]\w+-[tblr]{2}/,pe=/\(\s*(.*)\s*\)/g,ct=/([\s\S]*?);/g,le=/-self|flex-/g,ve=/[^]*?(:[rp][el]a[\w-]+)[^]*/,Qe=/stretch|:\s*\w+\-(?:conte|avail)/,$t=/([^-])(image-set\()/,R="-webkit-",ne="-moz-",U="-ms-",Ee=59,ge=125,De=123,ue=40,de=41,Oe=91,kt=93,Me=10,Re=13,Se=9,L=64,ye=32,Be=38,fe=45,Le=95,oe=42,Te=44,we=58,je=39,lt=34,ke=47,Xe=62,be=43,Ie=126,ut=0,It=12,Vt=11,xe=107,At=109,gt=115,Et=112,Mt=111,zt=105,_t=99,Dt=100,Lt=112,u=1,C=1,_=0,K=1,g=1,T=1,D=0,G=0,j=0,X=[],$=[],re=0,$e=null,Je=-2,Ye=-1,jt=0,Xt=1,Ot=2,sr=3,Jt=0,dt=1,ft="",Ve="",Ue="";function yt(k,P,b,E,v){for(var Y,i,V=0,N=0,ie=0,F=0,ce=0,Z=0,B=0,_e=0,Ne=0,Wt=0,Fe=0,mt=0,cr=0,at=0,z=0,We=0,Ht=0,Ut=0,Q=0,Tt=b.length,er=Tt-1,Ae="",M="",ee="",ae="",lr="",kr="";z<Tt;){if(B=b.charCodeAt(z),z===er&&N+F+ie+V!==0&&(N!==0&&(B=N===ke?Me:ke),F=ie=V=0,Tt++,er++),N+F+ie+V===0){if(z===er&&(We>0&&(M=M.replace(a,"")),M.trim().length>0)){switch(B){case ye:case Se:case Ee:case Re:case Me:break;default:M+=b.charAt(z)}B=Ee}if(Ht===1)switch(B){case De:case ge:case Ee:case lt:case je:case ue:case de:case Te:Ht=0;case Se:case Re:case Me:case ye:break;default:for(Ht=0,Q=z,ce=B,z--,B=Ee;Q<Tt;)switch(b.charCodeAt(Q++)){case Me:case Re:case Ee:++z,B=ce,Q=Tt;break;case we:We>0&&(++z,B=ce);case De:Q=Tt}}switch(B){case De:for(ce=(M=M.trim()).charCodeAt(0),Fe=1,Q=++z;z<Tt;){switch(B=b.charCodeAt(z)){case De:Fe++;break;case ge:Fe--;break;case ke:switch(Z=b.charCodeAt(z+1)){case oe:case ke:z=Rt(Z,z,er,b)}break;case Oe:B++;case ue:B++;case lt:case je:for(;z++<er&&b.charCodeAt(z)!==B;);}if(Fe===0)break;z++}switch(ee=b.substring(Q,z),ce===ut&&(ce=(M=M.replace(o,"").trim()).charCodeAt(0)),ce){case L:switch(We>0&&(M=M.replace(a,"")),Z=M.charCodeAt(1)){case Dt:case At:case gt:case fe:Y=P;break;default:Y=X}if(Q=(ee=yt(P,Y,ee,Z,v+1)).length,j>0&&Q===0&&(Q=M.length),re>0&&(Y=rt(X,M,Ut),i=et(sr,ee,Y,P,C,u,Q,Z,v,E),M=Y.join(""),i!==void 0&&(Q=(ee=i.trim()).length)===0&&(Z=0,ee="")),Q>0)switch(Z){case gt:M=M.replace(pe,Yt);case Dt:case At:case fe:ee=M+"{"+ee+"}";break;case xe:ee=(M=M.replace(S,"$1 $2"+(dt>0?ft:"")))+"{"+ee+"}",g===1||g===2&&ot("@"+ee,3)?ee="@"+R+ee+"@"+ee:ee="@"+ee;break;default:ee=M+ee,E===Lt&&(ae+=ee,ee="")}else ee="";break;default:ee=yt(P,rt(P,M,Ut),ee,E,v+1)}lr+=ee,mt=0,Ht=0,at=0,We=0,Ut=0,cr=0,M="",ee="",B=b.charCodeAt(++z);break;case ge:case Ee:if((Q=(M=(We>0?M.replace(a,""):M).trim()).length)>1)switch(at===0&&((ce=M.charCodeAt(0))===fe||ce>96&&ce<123)&&(Q=(M=M.replace(" ",":")).length),re>0&&(i=et(Xt,M,P,k,C,u,ae.length,E,v,E))!==void 0&&(Q=(M=i.trim()).length)===0&&(M="\0\0"),ce=M.charCodeAt(0),Z=M.charCodeAt(1),ce){case ut:break;case L:if(Z===zt||Z===_t){kr+=M+b.charAt(z);break}default:if(M.charCodeAt(Q-1)===we)break;ae+=nt(M,ce,Z,M.charCodeAt(2))}mt=0,Ht=0,at=0,We=0,Ut=0,M="",B=b.charCodeAt(++z)}}switch(B){case Re:case Me:if(N+F+ie+V+G===0)switch(Wt){case de:case je:case lt:case L:case Ie:case Xe:case oe:case be:case ke:case fe:case we:case Te:case Ee:case De:case ge:break;default:at>0&&(Ht=1)}N===ke?N=0:K+mt===0&&E!==xe&&M.length>0&&(We=1,M+="\0"),re*Jt>0&&et(jt,M,P,k,C,u,ae.length,E,v,E),u=1,C++;break;case Ee:case ge:if(N+F+ie+V===0){u++;break}default:switch(u++,Ae=b.charAt(z),B){case Se:case ye:if(F+V+N===0)switch(_e){case Te:case we:case Se:case ye:Ae="";break;default:B!==ye&&(Ae=" ")}break;case ut:Ae="\\0";break;case It:Ae="\\f";break;case Vt:Ae="\\v";break;case Be:F+N+V===0&&K>0&&(Ut=1,We=1,Ae="\f"+Ae);break;case 108:if(F+N+V+_===0&&at>0)switch(z-at){case 2:_e===Et&&b.charCodeAt(z-3)===we&&(_=_e);case 8:Ne===Mt&&(_=Ne)}break;case we:F+N+V===0&&(at=z);break;case Te:N+ie+F+V===0&&(We=1,Ae+="\r");break;case lt:case je:N===0&&(F=F===B?0:F===0?B:F);break;case Oe:F+N+ie===0&&V++;break;case kt:F+N+ie===0&&V--;break;case de:F+N+V===0&&ie--;break;case ue:if(F+N+V===0){if(mt===0)switch(2*_e+3*Ne){case 533:break;default:Fe=0,mt=1}ie++}break;case L:N+ie+F+V+at+cr===0&&(cr=1);break;case oe:case ke:if(F+V+ie>0)break;switch(N){case 0:switch(2*B+3*b.charCodeAt(z+1)){case 235:N=ke;break;case 220:Q=z,N=oe}break;case oe:B===ke&&_e===oe&&Q+2!==z&&(b.charCodeAt(Q+2)===33&&(ae+=b.substring(Q,z+1)),Ae="",N=0)}}if(N===0){if(K+F+V+cr===0&&E!==xe&&B!==Ee)switch(B){case Te:case Ie:case Xe:case be:case de:case ue:if(mt===0){switch(_e){case Se:case ye:case Me:case Re:Ae+="\0";break;default:Ae="\0"+Ae+(B===Te?"":"\0")}We=1}else switch(B){case ue:at+7===z&&_e===108&&(at=0),mt=++Fe;break;case de:(mt=--Fe)==0&&(We=1,Ae+="\0")}break;case Se:case ye:switch(_e){case ut:case De:case ge:case Ee:case Te:case It:case Se:case ye:case Me:case Re:break;default:mt===0&&(We=1,Ae+="\0")}}M+=Ae,B!==ye&&B!==Se&&(Wt=B)}}Ne=_e,_e=B,z++}if(Q=ae.length,j>0&&Q===0&&lr.length===0&&P[0].length!==0&&(E!==At||P.length===1&&(K>0?Ve:Ue)===P[0])&&(Q=P.join(",").length+2),Q>0){if(Y=K===0&&E!==xe?function(Ur){for(var pt,Pe,ur=0,en=Ur.length,tn=Array(en);ur<en;++ur){for(var Ir=Ur[ur].split(p),dr="",qt=0,Ar=0,rn=0,nn=0,on=Ir.length;qt<on;++qt)if(!((Ar=(Pe=Ir[qt]).length)===0&&on>1)){if(rn=dr.charCodeAt(dr.length-1),nn=Pe.charCodeAt(0),pt="",qt!==0)switch(rn){case oe:case Ie:case Xe:case be:case ye:case ue:break;default:pt=" "}switch(nn){case Be:Pe=pt+Ve;case Ie:case Xe:case be:case ye:case de:case ue:break;case Oe:Pe=pt+Pe+Ve;break;case we:switch(2*Pe.charCodeAt(1)+3*Pe.charCodeAt(2)){case 530:if(T>0){Pe=pt+Pe.substring(8,Ar-1);break}default:(qt<1||Ir[qt-1].length<1)&&(Pe=pt+Ve+Pe)}break;case Te:pt="";default:Ar>1&&Pe.indexOf(":")>0?Pe=pt+Pe.replace(ze,"$1"+Ve+"$2"):Pe=pt+Pe+Ve}dr+=Pe}tn[ur]=dr.replace(a,"").trim()}return tn}(P):P,re>0&&(i=et(Ot,ae,Y,k,C,u,Q,E,v,E))!==void 0&&(ae=i).length===0)return kr+ae+lr;if(ae=Y.join(",")+"{"+ae+"}",g*_!=0){switch(g===2&&!ot(ae,2)&&(_=0),_){case Mt:ae=ae.replace(te,":"+ne+"$1")+ae;break;case Et:ae=ae.replace(q,"::"+R+"input-$1")+ae.replace(q,"::"+ne+"$1")+ae.replace(q,":"+U+"input-$1")+ae}_=0}}return kr+ae+lr}function rt(k,P,b){var E=P.trim().split(f),v=E,Y=E.length,i=k.length;switch(i){case 0:case 1:for(var V=0,N=i===0?"":k[0]+" ";V<Y;++V)v[V]=wt(N,v[V],b,i).trim();break;default:V=0;var ie=0;for(v=[];V<Y;++V)for(var F=0;F<i;++F)v[ie++]=wt(k[F]+" ",E[V],b,i).trim()}return v}function wt(k,P,b,E){var v=P,Y=v.charCodeAt(0);switch(Y<33&&(Y=(v=v.trim()).charCodeAt(0)),Y){case Be:switch(K+E){case 0:case 1:if(k.trim().length===0)break;default:return v.replace(l,"$1"+k.trim())}break;case we:switch(v.charCodeAt(1)){case 103:if(T>0&&K>0)return v.replace(y,"$1").replace(l,"$1"+Ue);break;default:return k.trim()+v.replace(l,"$1"+k.trim())}default:if(b*K>0&&v.indexOf("\f")>0)return v.replace(l,(k.charCodeAt(0)===we?"":"$1")+k.trim())}return k+v}function nt(k,P,b,E){var v,Y=0,i=k+";",V=2*P+3*b+4*E;if(V===944)return function(N){var ie=N.length,F=N.indexOf(":",9)+1,ce=N.substring(0,F).trim(),Z=N.substring(F,ie-1).trim();switch(N.charCodeAt(9)*dt){case 0:break;case fe:if(N.charCodeAt(10)!==110)break;default:for(var B=Z.split((Z="",m)),_e=0,F=0,ie=B.length;_e<ie;F=0,++_e){for(var Ne=B[_e],Wt=Ne.split(w);Ne=Wt[F];){var Fe=Ne.charCodeAt(0);if(dt===1&&(Fe>L&&Fe<90||Fe>96&&Fe<123||Fe===Le||Fe===fe&&Ne.charCodeAt(1)!==fe))switch(isNaN(parseFloat(Ne))+(Ne.indexOf("(")!==-1)){case 1:switch(Ne){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:Ne+=ft}}Wt[F++]=Ne}Z+=(_e===0?"":",")+Wt.join(" ")}}return Z=ce+Z+";",g===1||g===2&&ot(Z,1)?R+Z+Z:Z}(i);if(g===0||g===2&&!ot(i,1))return i;switch(V){case 1015:return i.charCodeAt(10)===97?R+i+i:i;case 951:return i.charCodeAt(3)===116?R+i+i:i;case 963:return i.charCodeAt(5)===110?R+i+i:i;case 1009:if(i.charCodeAt(4)!==100)break;case 969:case 942:return R+i+i;case 978:return R+i+ne+i+i;case 1019:case 983:return R+i+ne+i+U+i+i;case 883:return i.charCodeAt(8)===fe?R+i+i:i.indexOf("image-set(",11)>0?i.replace($t,"$1"+R+"$2")+i:i;case 932:if(i.charCodeAt(4)===fe)switch(i.charCodeAt(5)){case 103:return R+"box-"+i.replace("-grow","")+R+i+U+i.replace("grow","positive")+i;case 115:return R+i+U+i.replace("shrink","negative")+i;case 98:return R+i+U+i.replace("basis","preferred-size")+i}return R+i+U+i+i;case 964:return R+i+U+"flex-"+i+i;case 1023:if(i.charCodeAt(8)!==99)break;return v=i.substring(i.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),R+"box-pack"+v+R+i+U+"flex-pack"+v+i;case 1005:return c.test(i)?i.replace(s,":"+R)+i.replace(s,":"+ne)+i:i;case 1e3:switch(Y=(v=i.substring(13).trim()).indexOf("-")+1,v.charCodeAt(0)+v.charCodeAt(Y)){case 226:v=i.replace(O,"tb");break;case 232:v=i.replace(O,"tb-rl");break;case 220:v=i.replace(O,"lr");break;default:return i}return R+i+U+v+i;case 1017:if(i.indexOf("sticky",9)===-1)return i;case 975:switch(Y=(i=k).length-10,V=(v=(i.charCodeAt(Y)===33?i.substring(0,Y):i).substring(k.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|v.charCodeAt(7))){case 203:if(v.charCodeAt(8)<111)break;case 115:i=i.replace(v,R+v)+";"+i;break;case 207:case 102:i=i.replace(v,R+(V>102?"inline-":"")+"box")+";"+i.replace(v,R+v)+";"+i.replace(v,U+v+"box")+";"+i}return i+";";case 938:if(i.charCodeAt(5)===fe)switch(i.charCodeAt(6)){case 105:return v=i.replace("-items",""),R+i+R+"box-"+v+U+"flex-"+v+i;case 115:return R+i+U+"flex-item-"+i.replace(le,"")+i;default:return R+i+U+"flex-line-pack"+i.replace("align-content","").replace(le,"")+i}break;case 973:case 989:if(i.charCodeAt(3)!==fe||i.charCodeAt(4)===122)break;case 931:case 953:if(Qe.test(k)===!0)return(v=k.substring(k.indexOf(":")+1)).charCodeAt(0)===115?nt(k.replace("stretch","fill-available"),P,b,E).replace(":fill-available",":stretch"):i.replace(v,R+v)+i.replace(v,ne+v.replace("fill-",""))+i;break;case 962:if(i=R+i+(i.charCodeAt(5)===102?U+i:"")+i,b+E===211&&i.charCodeAt(13)===105&&i.indexOf("transform",10)>0)return i.substring(0,i.indexOf(";",27)+1).replace(d,"$1"+R+"$2")+i}return i}function ot(k,P){var b=k.indexOf(P===1?":":"{"),E=k.substring(0,P!==3?b:10),v=k.substring(b+1,k.length-1);return $e(P!==2?E:E.replace(ve,"$1"),v,P)}function Yt(k,P){var b=nt(P,P.charCodeAt(0),P.charCodeAt(1),P.charCodeAt(2));return b!==P+";"?b.replace(ct," or ($1)").substring(4):"("+P+")"}function et(k,P,b,E,v,Y,i,V,N,ie){for(var F,ce=0,Z=P;ce<re;++ce)switch(F=$[ce].call(tt,k,Z,b,E,v,Y,i,V,N,ie)){case void 0:case!1:case!0:case null:break;default:Z=F}if(Z!==P)return Z}function Rt(k,P,b,E){for(var v=P+1;v<b;++v)switch(E.charCodeAt(v)){case ke:if(k===oe&&E.charCodeAt(v-1)===oe&&P+2!==v)return v+1;break;case Me:if(k===ke)return v+1}return v}function ht(k){for(var P in k){var b=k[P];switch(P){case"keyframe":dt=0|b;break;case"global":T=0|b;break;case"cascade":K=0|b;break;case"compress":D=0|b;break;case"semicolon":G=0|b;break;case"preserve":j=0|b;break;case"prefix":$e=null,b?typeof b!="function"?g=1:(g=2,$e=b):g=0}}return ht}function tt(k,P){if(this!==void 0&&this.constructor===tt)return r(k);var b=k,E=b.charCodeAt(0);E<33&&(E=(b=b.trim()).charCodeAt(0)),dt>0&&(ft=b.replace(x,E===Oe?"":"-")),E=1,K===1?Ue=b:Ve=b;var v,Y=[Ue];re>0&&(v=et(Ye,P,Y,Y,C,u,0,0,0,0))!==void 0&&typeof v=="string"&&(P=v);var i=yt(X,Y,P,0,0);return re>0&&(v=et(Je,i,Y,Y,C,u,i.length,0,0,0))!==void 0&&typeof(i=v)!="string"&&(E=0),ft="",Ue="",Ve="",_=0,C=1,u=1,D*E==0?i:i.replace(a,"").replace(W,"").replace(H,"$1").replace(Ce,"$1").replace(Ze," ")}return tt.use=function k(P){switch(P){case void 0:case null:re=$.length=0;break;default:if(typeof P=="function")$[re++]=P;else if(typeof P=="object")for(var b=0,E=P.length;b<E;++b)k(P[b]);else Jt=0|!!P}return k},tt.set=ht,n!==void 0&&ht(n),tt})})(gn);var yn=gn.exports,wn={exports:{}};(function(e,t){(function(r){e.exports=r()})(function(){return function(r){var n="/*|*/",o=n+"}";function a(s){if(s)try{r(s+"}")}catch{}}return function(c,d,m,w,p,f,l,y,x,S){switch(c){case 1:if(x===0&&d.charCodeAt(0)===64)return r(d+";"),"";break;case 2:if(y===0)return d+n;break;case 3:switch(y){case 102:case 112:return r(m[0]+d),"";default:return d+(S===0?n:"")}case-2:d.split(o).forEach(a)}}}})})(wn);var Po=wn.exports,Co={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},bn=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function So(e,t){return!!(e===t||bn(e)&&bn(t))}function ko(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!So(e[r],t[r]))return!1;return!0}function xn(e,t){t===void 0&&(t=ko);var r,n=[],o,a=!1;function s(){for(var c=[],d=0;d<arguments.length;d++)c[d]=arguments[d];return a&&r===this&&t(c,n)||(o=e.apply(this,c),a=!0,r=this,n=c),o}return s}function Io(e){var t={};return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var Ao=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Eo=Io(function(e){return Ao.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function Or(e){return Object.prototype.toString.call(e).slice(8,-1)}function rr(e){return Or(e)!=="Object"?!1:e.constructor===Object&&Object.getPrototypeOf(e)===Object.prototype}function Pn(e){return Or(e)==="Array"}function Cn(e){return Or(e)==="Symbol"}/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function Sn(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),o=0,t=0;t<r;t++)for(var a=arguments[t],s=0,c=a.length;s<c;s++,o++)n[o]=a[s];return n}function kn(e,t,r,n){var o=n.propertyIsEnumerable(t)?"enumerable":"nonenumerable";o==="enumerable"&&(e[t]=r),o==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function In(e,t,r){if(!rr(t))return r&&Pn(r)&&r.forEach(function(m){t=m(e,t)}),t;var n={};if(rr(e)){var o=Object.getOwnPropertyNames(e),a=Object.getOwnPropertySymbols(e);n=Sn(o,a).reduce(function(m,w){var p=e[w];return(!Cn(w)&&!Object.getOwnPropertyNames(t).includes(w)||Cn(w)&&!Object.getOwnPropertySymbols(t).includes(w))&&kn(m,w,p,e),m},{})}var s=Object.getOwnPropertyNames(t),c=Object.getOwnPropertySymbols(t),d=Sn(s,c).reduce(function(m,w){var p=t[w],f=rr(e)?e[w]:void 0;return r&&Pn(r)&&r.forEach(function(l){p=l(f,p)}),f!==void 0&&rr(p)&&(p=In(f,p,r)),kn(m,w,p,t),m},n);return d}function Mo(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=null,o=e;return rr(e)&&e.extensions&&Object.keys(e).length===1&&(o={},n=e.extensions),t.reduce(function(a,s){return In(a,s,n)},o)}var An=function(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r},En=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ft=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},_o=function(){function e(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),st=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},pr=function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},Do=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||!Object.prototype.hasOwnProperty.call(e,n)||(r[n]=e[n]);return r},nr=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e},Rr=function(e){return(typeof e=="undefined"?"undefined":En(e))==="object"&&e.constructor===Object},Tr=Object.freeze([]),or=Object.freeze({});function vt(e){return typeof e=="function"}function Mn(e){return e.displayName||e.name||"Component"}function Oo(e){return typeof e=="function"&&!(e.prototype&&e.prototype.isReactComponent)}function vr(e){return e&&typeof e.styledComponentId=="string"}var ar=typeof process!="undefined"&&{}.SC_ATTR||"data-styled",gr="data-styled-version",Ro="data-styled-streamed",Kt=typeof window!="undefined"&&"HTMLElement"in window,_n=typeof SC_DISABLE_SPEEDY=="boolean"&&SC_DISABLE_SPEEDY||typeof process!="undefined"&&{}.SC_DISABLE_SPEEDY||!1,Pt=function(e){pr(t,e);function t(r){Ft(this,t);for(var n=arguments.length,o=Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];var s,s=nr(this,e.call(this,"An error occurred. See https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/errors.md#"+r+" for more information."+(o.length>0?" Additional arguments: "+o.join(", "):"")));return nr(s)}return t}(Error),To=/^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm,No=function(e){var t=""+(e||""),r=[];return t.replace(To,function(n,o,a){return r.push({componentId:o,matchIndex:a}),n}),r.map(function(n,o){var a=n.componentId,s=n.matchIndex,c=r[o+1],d=c?t.slice(s,c.matchIndex):t.slice(s);return{componentId:a,cssFromDOM:d}})},Fo=/^\s*\/\/.*$/gm,Dn=new yn({global:!1,cascade:!0,keyframe:!1,prefix:!1,compress:!1,semicolon:!0}),On=new yn({global:!1,cascade:!0,keyframe:!1,prefix:!0,compress:!1,semicolon:!1}),Nr=[],Rn=function(t){if(t===-2){var r=Nr;return Nr=[],r}},Tn=Po(function(e){Nr.push(e)}),Nn=void 0,Zt=void 0,Fn=void 0,Bo=function(t,r,n){return r>0&&n.slice(0,r).indexOf(Zt)!==-1&&n.slice(r-Zt.length,r)!==Zt?"."+Nn:t},$o=function(t,r,n){t===2&&n.length&&n[0].lastIndexOf(Zt)>0&&(n[0]=n[0].replace(Fn,Bo))};On.use([$o,Tn,Rn]);Dn.use([Tn,Rn]);var Vo=function(t){return Dn("",t)};function zo(e,t,r){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"&",o=e.join("").replace(Fo,""),a=t&&r?r+" "+t+" { "+o+" }":o;return Nn=n,Zt=t,Fn=new RegExp("\\"+Zt+"\\b","g"),On(r||!t?"":t,a)}var Fr=function(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null},Br=function(t,r,n){if(n){var o=t[r]||(t[r]=Object.create(null));o[n]=!0}},yr=function(t,r){t[r]=Object.create(null)},$r=function(t){return function(r,n){return t[r]!==void 0&&t[r][n]}},Bn=function(t){var r="";for(var n in t)r+=Object.keys(t[n]).join(" ")+" ";return r.trim()},Lo=function(t){var r=Object.create(null);for(var n in t)r[n]=st({},t[n]);return r},Vr=function(t){if(t.sheet)return t.sheet;for(var r=t.ownerDocument.styleSheets.length,n=0;n<r;n+=1){var o=t.ownerDocument.styleSheets[n];if(o.ownerNode===t)return o}throw new Pt(10)},jo=function(t,r,n){if(!r)return!1;var o=t.cssRules.length;try{t.insertRule(r,n<=o?n:o)}catch{return!1}return!0},Xo=function(t,r,n){for(var o=r-n,a=r;a>o;a-=1)t.deleteRule(a)},zr=function(t){return`
/* sc-component-id: `+t+` */
`},Lr=function(t,r){for(var n=0,o=0;o<=r;o+=1)n+=t[o];return n},Yo=function(t,r,n){var o=document;t?o=t.ownerDocument:r&&(o=r.ownerDocument);var a=o.createElement("style");a.setAttribute(ar,""),a.setAttribute(gr,"4.4.1");var s=Fr();if(s&&a.setAttribute("nonce",s),a.appendChild(o.createTextNode("")),t&&!r)t.appendChild(a);else{if(!r||!t||!r.parentNode)throw new Pt(6);r.parentNode.insertBefore(a,n?r:r.nextSibling)}return a},jr=function(t,r){return function(n){var o=Fr(),a=[o&&'nonce="'+o+'"',ar+'="'+Bn(r)+'"',gr+'="4.4.1"',n],s=a.filter(Boolean).join(" ");return"<style "+s+">"+t()+"</style>"}},Xr=function(t,r){return function(){var n,o=(n={},n[ar]=Bn(r),n[gr]="4.4.1",n),a=Fr();return a&&(o.nonce=a),h("style",he(se({},o),{dangerouslySetInnerHTML:{__html:t()}}))}},Yr=function(t){return function(){return Object.keys(t)}},Wo=function(t,r){var n=Object.create(null),o=Object.create(null),a=[],s=r!==void 0,c=!1,d=function(l){var y=o[l];return y!==void 0?y:(o[l]=a.length,a.push(0),yr(n,l),o[l])},m=function(l,y,x){for(var S=d(l),q=Vr(t),te=Lr(a,S),W=0,H=[],Ce=y.length,Ze=0;Ze<Ce;Ze+=1){var ze=y[Ze],O=s;O&&ze.indexOf("@import")!==-1?H.push(ze):jo(q,ze,te+W)&&(O=!1,W+=1)}s&&H.length>0&&(c=!0,r().insertRules(l+"-import",H)),a[S]+=W,Br(n,l,x)},w=function(l){var y=o[l];if(y!==void 0&&t.isConnected!==!1){var x=a[y],S=Vr(t),q=Lr(a,y)-1;Xo(S,q,x),a[y]=0,yr(n,l),s&&c&&r().removeRules(l+"-import")}},p=function(){var l=Vr(t),y=l.cssRules,x="";for(var S in o){x+=zr(S);for(var q=o[S],te=Lr(a,q),W=a[q],H=te-W;H<te;H+=1){var Ce=y[H];Ce!==void 0&&(x+=Ce.cssText)}}return x};return{clone:function(){throw new Pt(5)},css:p,getIds:Yr(o),hasNameForId:$r(n),insertMarker:d,insertRules:m,removeRules:w,sealed:!1,styleTag:t,toElement:Xr(p,n),toHTML:jr(p,n)}},$n=function(t,r){return t.createTextNode(zr(r))},Ho=function(t,r){var n=Object.create(null),o=Object.create(null),a=r!==void 0,s=!1,c=function(f){var l=o[f];return l!==void 0?l:(o[f]=$n(t.ownerDocument,f),t.appendChild(o[f]),n[f]=Object.create(null),o[f])},d=function(f,l,y){for(var x=c(f),S=[],q=l.length,te=0;te<q;te+=1){var W=l[te],H=a;if(H&&W.indexOf("@import")!==-1)S.push(W);else{H=!1;var Ce=te===q-1?"":" ";x.appendData(""+W+Ce)}}Br(n,f,y),a&&S.length>0&&(s=!0,r().insertRules(f+"-import",S))},m=function(f){var l=o[f];if(l!==void 0){var y=$n(t.ownerDocument,f);t.replaceChild(y,l),o[f]=y,yr(n,f),a&&s&&r().removeRules(f+"-import")}},w=function(){var f="";for(var l in o)f+=o[l].data;return f};return{clone:function(){throw new Pt(5)},css:w,getIds:Yr(o),hasNameForId:$r(n),insertMarker:c,insertRules:d,removeRules:m,sealed:!1,styleTag:t,toElement:Xr(w,n),toHTML:jr(w,n)}},qo=function e(t,r){var n=t===void 0?Object.create(null):t,o=r===void 0?Object.create(null):r,a=function(f){var l=o[f];return l!==void 0?l:o[f]=[""]},s=function(f,l,y){var x=a(f);x[0]+=l.join(" "),Br(n,f,y)},c=function(f){var l=o[f];l!==void 0&&(l[0]="",yr(n,f))},d=function(){var f="";for(var l in o){var y=o[l][0];y&&(f+=zr(l)+y)}return f},m=function(){var f=Lo(n),l=Object.create(null);for(var y in o)l[y]=[o[y][0]];return e(f,l)},w={clone:m,css:d,getIds:Yr(o),hasNameForId:$r(n),insertMarker:a,insertRules:s,removeRules:c,sealed:!1,styleTag:null,toElement:Xr(d,n),toHTML:jr(d,n)};return w},Vn=function(t,r,n,o,a){if(Kt&&!n){var s=Yo(t,r,o);return _n?Ho(s,a):Wo(s,a)}return qo()},Go=function(t,r,n){for(var o=0,a=n.length;o<a;o+=1){var s=n[o],c=s.componentId,d=s.cssFromDOM,m=Vo(d);t.insertRules(c,m)}for(var w=0,p=r.length;w<p;w+=1){var f=r[w];f.parentNode&&f.parentNode.removeChild(f)}},Ko=/\s+/,wr=void 0;Kt?wr=_n?40:1e3:wr=-1;var zn=0,Wr=void 0,br=function(){function e(){var t=this,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Kt?document.head:null,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;Ft(this,e),this.getImportRuleTag=function(){var o=t.importRuleTag;if(o!==void 0)return o;var a=t.tags[0],s=!0;return t.importRuleTag=Vn(t.target,a?a.styleTag:null,t.forceServer,s)},zn+=1,this.id=zn,this.forceServer=n,this.target=n?null:r,this.tagMap={},this.deferred={},this.rehydratedNames={},this.ignoreRehydratedNames={},this.tags=[],this.capacity=1,this.clones=[]}return e.prototype.rehydrate=function(){if(!Kt||this.forceServer)return this;var r=[],n=[],o=!1,a=document.querySelectorAll("style["+ar+"]["+gr+'="4.4.1"]'),s=a.length;if(!s)return this;for(var c=0;c<s;c+=1){var d=a[c];o||(o=!!d.getAttribute(Ro));for(var m=(d.getAttribute(ar)||"").trim().split(Ko),w=m.length,p=0,f;p<w;p+=1)f=m[p],this.rehydratedNames[f]=!0;n.push.apply(n,No(d.textContent)),r.push(d)}var l=n.length;if(!l)return this;var y=this.makeTag(null);Go(y,r,n),this.capacity=Math.max(1,wr-l),this.tags.push(y);for(var x=0;x<l;x+=1)this.tagMap[n[x].componentId]=y;return this},e.reset=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;Wr=new e(void 0,r).rehydrate()},e.prototype.clone=function(){var r=new e(this.target,this.forceServer);return this.clones.push(r),r.tags=this.tags.map(function(n){for(var o=n.getIds(),a=n.clone(),s=0;s<o.length;s+=1)r.tagMap[o[s]]=a;return a}),r.rehydratedNames=st({},this.rehydratedNames),r.deferred=st({},this.deferred),r},e.prototype.sealAllTags=function(){this.capacity=1,this.tags.forEach(function(r){r.sealed=!0})},e.prototype.makeTag=function(r){var n=r?r.styleTag:null,o=!1;return Vn(this.target,n,this.forceServer,o,this.getImportRuleTag)},e.prototype.getTagForId=function(r){var n=this.tagMap[r];if(n!==void 0&&!n.sealed)return n;var o=this.tags[this.tags.length-1];return this.capacity-=1,this.capacity===0&&(this.capacity=wr,o=this.makeTag(o),this.tags.push(o)),this.tagMap[r]=o},e.prototype.hasId=function(r){return this.tagMap[r]!==void 0},e.prototype.hasNameForId=function(r,n){if(this.ignoreRehydratedNames[r]===void 0&&this.rehydratedNames[n])return!0;var o=this.tagMap[r];return o!==void 0&&o.hasNameForId(r,n)},e.prototype.deferredInject=function(r,n){if(this.tagMap[r]===void 0){for(var o=this.clones,a=0;a<o.length;a+=1)o[a].deferredInject(r,n);this.getTagForId(r).insertMarker(r),this.deferred[r]=n}},e.prototype.inject=function(r,n,o){for(var a=this.clones,s=0;s<a.length;s+=1)a[s].inject(r,n,o);var c=this.getTagForId(r);if(this.deferred[r]!==void 0){var d=this.deferred[r].concat(n);c.insertRules(r,d,o),this.deferred[r]=void 0}else c.insertRules(r,n,o)},e.prototype.remove=function(r){var n=this.tagMap[r];if(n!==void 0){for(var o=this.clones,a=0;a<o.length;a+=1)o[a].remove(r);n.removeRules(r),this.ignoreRehydratedNames[r]=!0,this.deferred[r]=void 0}},e.prototype.toHTML=function(){return this.tags.map(function(r){return r.toHTML()}).join("")},e.prototype.toReactElements=function(){var r=this.id;return this.tags.map(function(n,o){var a="sc-"+r+"-"+o;return A.exports.cloneElement(n.toElement(),{key:a})})},_o(e,null,[{key:"master",get:function(){return Wr||(Wr=new e().rehydrate())}},{key:"instance",get:function(){return e.master}}]),e}(),Zo=function(){function e(t,r){var n=this;Ft(this,e),this.inject=function(o){o.hasNameForId(n.id,n.name)||o.inject(n.id,n.rules,n.name)},this.toString=function(){throw new Pt(12,String(n.name))},this.name=t,this.rules=r,this.id="sc-keyframes-"+t}return e.prototype.getName=function(){return this.name},e}(),Qo=/([A-Z])/g,Jo=/^ms-/;function Ln(e){return e.replace(Qo,"-$1").toLowerCase().replace(Jo,"-ms-")}function Uo(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t=="number"&&t!==0&&!(e in Co)?t+"px":String(t).trim()}var jn=function(t){return t==null||t===!1||t===""},ea=function e(t,r){var n=[],o=Object.keys(t);return o.forEach(function(a){if(!jn(t[a])){if(Rr(t[a]))return n.push.apply(n,e(t[a],a)),n;if(vt(t[a]))return n.push(Ln(a)+":",t[a],";"),n;n.push(Ln(a)+": "+Uo(a,t[a])+";")}return n}),r?[r+" {"].concat(n,["}"]):n};function ir(e,t,r){if(Array.isArray(e)){for(var n=[],o=0,a=e.length,s;o<a;o+=1)s=ir(e[o],t,r),s!==null&&(Array.isArray(s)?n.push.apply(n,s):n.push(s));return n}if(jn(e))return null;if(vr(e))return"."+e.styledComponentId;if(vt(e))if(Oo(e)&&t){var c=e(t);return ir(c,t,r)}else return e;return e instanceof Zo?r?(e.inject(r),e.getName()):e:Rr(e)?ea(e):e.toString()}function Xn(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return vt(e)||Rr(e)?ir(An(Tr,[e].concat(r))):ir(An(e,r))}function Hr(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:or;if(!un.exports.isValidElementType(t))throw new Pt(1,String(t));var n=function(){return e(t,r,Xn.apply(void 0,arguments))};return n.withConfig=function(o){return Hr(e,t,st({},r,o))},n.attrs=function(o){return Hr(e,t,st({},r,{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n}function ta(e){for(var t=e.length|0,r=t|0,n=0,o;t>=4;)o=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,o=1540483477*(o&65535)+((1540483477*(o>>>16)&65535)<<16),o^=o>>>24,o=1540483477*(o&65535)+((1540483477*(o>>>16)&65535)<<16),r=1540483477*(r&65535)+((1540483477*(r>>>16)&65535)<<16)^o,t-=4,++n;switch(t){case 3:r^=(e.charCodeAt(n+2)&255)<<16;case 2:r^=(e.charCodeAt(n+1)&255)<<8;case 1:r^=e.charCodeAt(n)&255,r=1540483477*(r&65535)+((1540483477*(r>>>16)&65535)<<16)}return r^=r>>>13,r=1540483477*(r&65535)+((1540483477*(r>>>16)&65535)<<16),(r^r>>>15)>>>0}var xr=52,Yn=function(t){return String.fromCharCode(t+(t>25?39:97))};function ra(e){var t="",r=void 0;for(r=e;r>xr;r=Math.floor(r/xr))t=Yn(r%xr)+t;return Yn(r%xr)+t}function na(e){for(var t in e)if(vt(e[t]))return!0;return!1}function Wn(e,t){for(var r=0;r<e.length;r+=1){var n=e[r];if(Array.isArray(n)&&!Wn(n,t))return!1;if(vt(n)&&!vr(n))return!1}return!t.some(function(o){return vt(o)||na(o)})}var Hn=function(t){return ra(ta(t))},qn=function(){function e(t,r,n){Ft(this,e),this.rules=t,this.isStatic=Wn(t,r),this.componentId=n,br.master.hasId(n)||br.master.deferredInject(n,[])}return e.prototype.generateAndInjectStyles=function(r,n){var o=this.isStatic,a=this.componentId,s=this.lastClassName;if(Kt&&o&&typeof s=="string"&&n.hasNameForId(a,s))return s;var c=ir(this.rules,r,n),d=Hn(this.componentId+c.join(""));return n.hasNameForId(a,d)||n.inject(this.componentId,zo(c,"."+d,void 0,a),d),this.lastClassName=d,d},e.generateName=function(r){return Hn(r)},e}(),oa=function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:or,n=r?e.theme===r.theme:!1,o=e.theme&&!n?e.theme:t||r.theme;return o},aa=/[[\].#*$><+~=|^:(),"'`-]+/g,ia=/(^-|-$)/g;function qr(e){return e.replace(aa,"-").replace(ia,"")}function Pr(e){return typeof e=="string"&&!0}function sa(e){return Pr(e)?"styled."+e:"Styled("+Mn(e)+")"}var Gr,Gn={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},ca={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Kn=(Gr={},Gr[un.exports.ForwardRef]={$$typeof:!0,render:!0},Gr),la=Object.defineProperty,ua=Object.getOwnPropertyNames,Zn=Object.getOwnPropertySymbols,da=Zn===void 0?function(){return[]}:Zn,fa=Object.getOwnPropertyDescriptor,ha=Object.getPrototypeOf,ma=Object.prototype,pa=Array.prototype;function Qn(e,t,r){if(typeof t!="string"){var n=ha(t);n&&n!==ma&&Qn(e,n,r);for(var o=pa.concat(ua(t),da(t)),a=Kn[e.$$typeof]||Gn,s=Kn[t.$$typeof]||Gn,c=o.length,d=void 0,m=void 0;c--;)if(m=o[c],!ca[m]&&!(r&&r[m])&&!(s&&s[m])&&!(a&&a[m])&&(d=fa(t,m),d))try{la(e,m,d)}catch{}return e}return e}function va(e){return!!(e&&e.prototype&&e.prototype.isReactComponent)}var Kr=A.exports.createContext(),ga=Kr.Consumer;(function(e){pr(t,e);function t(r){Ft(this,t);var n=nr(this,e.call(this,r));return n.getContext=xn(n.getContext.bind(n)),n.renderInner=n.renderInner.bind(n),n}return t.prototype.render=function(){return this.props.children?h(Kr.Consumer,{children:this.renderInner}):null},t.prototype.renderInner=function(n){var o=this.getContext(this.props.theme,n);return h(Kr.Provider,{value:o,children:this.props.children})},t.prototype.getTheme=function(n,o){if(vt(n)){var a=n(o);return a}if(n===null||Array.isArray(n)||(typeof n=="undefined"?"undefined":En(n))!=="object")throw new Pt(8);return st({},o,n)},t.prototype.getContext=function(n,o){return this.getTheme(n,o)},t})(A.exports.Component);var Jn=A.exports.createContext(),ya=Jn.Consumer;(function(e){pr(t,e);function t(r){Ft(this,t);var n=nr(this,e.call(this,r));return n.getContext=xn(n.getContext),n}return t.prototype.getContext=function(n,o){if(n)return n;if(o)return new br(o);throw new Pt(4)},t.prototype.render=function(){var n=this.props,o=n.children,a=n.sheet,s=n.target;return h(Jn.Provider,{value:this.getContext(a,s),children:o})},t})(A.exports.Component);var Un={};function wa(e,t,r){var n=typeof t!="string"?"sc":qr(t),o=(Un[n]||0)+1;Un[n]=o;var a=n+"-"+e.generateName(n+o);return r?r+"-"+a:a}var ba=function(e){pr(t,e);function t(){Ft(this,t);var r=nr(this,e.call(this));return r.attrs={},r.renderOuter=r.renderOuter.bind(r),r.renderInner=r.renderInner.bind(r),r}return t.prototype.render=function(){return h(ya,{children:this.renderOuter})},t.prototype.renderOuter=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:br.master;return this.styleSheet=n,this.props.forwardedComponent.componentStyle.isStatic?this.renderInner():h(ga,{children:this.renderInner})},t.prototype.renderInner=function(n){var o=this.props.forwardedComponent,a=o.componentStyle,s=o.defaultProps;o.displayName;var c=o.foldedComponentIds,d=o.styledComponentId,m=o.target,w=void 0;a.isStatic?w=this.generateAndInjectStyles(or,this.props):w=this.generateAndInjectStyles(oa(this.props,n,s)||or,this.props);var p=this.props.as||this.attrs.as||m,f=Pr(p),l={},y=st({},this.props,this.attrs),x=void 0;for(x in y)x==="forwardedComponent"||x==="as"||(x==="forwardedRef"?l.ref=y[x]:x==="forwardedAs"?l.as=y[x]:(!f||Eo(x))&&(l[x]=y[x]));return this.props.style&&this.attrs.style&&(l.style=st({},this.attrs.style,this.props.style)),l.className=Array.prototype.concat(c,d,w!==d?w:null,this.props.className,this.attrs.className).filter(Boolean).join(" "),A.exports.createElement(p,l)},t.prototype.buildExecutionContext=function(n,o,a){var s=this,c=st({},o,{theme:n});return a.length&&(this.attrs={},a.forEach(function(d){var m=d,w=!1,p=void 0,f=void 0;vt(m)&&(m=m(c),w=!0);for(f in m)p=m[f],w||vt(p)&&!va(p)&&!vr(p)&&(p=p(c)),s.attrs[f]=p,c[f]=p})),c},t.prototype.generateAndInjectStyles=function(n,o){var a=o.forwardedComponent,s=a.attrs,c=a.componentStyle;if(a.warnTooManyClasses,c.isStatic&&!s.length)return c.generateAndInjectStyles(or,this.styleSheet);var d=c.generateAndInjectStyles(this.buildExecutionContext(n,o,s),this.styleSheet);return d},t}(A.exports.Component);function eo(e,t,r){var n=vr(e),o=!Pr(e),a=t.displayName,s=a===void 0?sa(e):a,c=t.componentId,d=c===void 0?wa(qn,t.displayName,t.parentComponentId):c,m=t.ParentComponent,w=m===void 0?ba:m,p=t.attrs,f=p===void 0?Tr:p,l=t.displayName&&t.componentId?qr(t.displayName)+"-"+t.componentId:t.componentId||d,y=n&&e.attrs?Array.prototype.concat(e.attrs,f).filter(Boolean):f,x=new qn(n?e.componentStyle.rules.concat(r):r,y,l),S=void 0,q=function(W,H){return h(w,he(se({},W),{forwardedComponent:S,forwardedRef:H}))};return q.displayName=s,S=I.forwardRef(q),S.displayName=s,S.attrs=y,S.componentStyle=x,S.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Tr,S.styledComponentId=l,S.target=n?e.target:e,S.withComponent=function(W){var H=t.componentId,Ce=Do(t,["componentId"]),Ze=H&&H+"-"+(Pr(W)?W:qr(Mn(W))),ze=st({},Ce,{attrs:y,componentId:Ze,ParentComponent:w});return eo(W,ze,r)},Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(W){this._foldedDefaultProps=n?Mo(e.defaultProps,W):W}}),S.toString=function(){return"."+S.styledComponentId},o&&Qn(S,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,styledComponentId:!0,target:!0,withComponent:!0}),S}var xa=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Zr=function(t){return Hr(eo,t)};xa.forEach(function(e){Zr[e]=Zr(e)});Kt&&(window.scCGSHMRCache={});var Qt=Zr,Pa="/react-photo-view/assets/1.67fc9a95.jpg",Qr="/react-photo-view/assets/2.621f0666.jpg",Ca="/react-photo-view/assets/3.42cec26f.jpg",Cr="/react-photo-view/assets/4.f42b5f2c.jpg",Jr="/react-photo-view/assets/5.bd775e52.jpg",Sa="/react-photo-view/assets/6.8fb761f7.jpg";const Bt=[Pa,Qr,Ca,Cr,Jr,Sa],Ge=Qt.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`,Ct=Qt.div`
  margin-right: 20px;
  margin-bottom: 20px;
  width: 100px;
  height: 100px;
  cursor: pointer;
  background: url('${e=>e.viewImage}') no-repeat center;
  background-size: cover;
`,St=Qt.button`
  margin: 4px;
  padding: 4px 10px;
  border: 1px solid #d9d9d9;
  background: #fff;
  border-radius: 2px;
  font-size: 14px;
  transition: all 0.2s linear;
  cursor: pointer;

  &:hover {
    color: #1890ff;
    border-color: #1890ff;
  }

  ${({primary:e})=>e&&Xn`
      color: white;
      border: 1px solid #1890ff;
      background: #1890ff;

      &:hover {
        color: white;
        background: #40a9ff;
        border-color: #40a9ff;
      }
    `}
`,ka=Qt.div`
  box-sizing: border-box;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 10px;
  width: 100%;
  min-height: 44px;
  line-height: 1.5;
  font-size: 14px;
  color: #ccc;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: justify;
  z-index: 1000;
`,Ia=Qt.img`
  width: 100px;
  height: 100px;
`;function Aa(){return h(He,{children:h(Ge,{children:Bt.map((e,t)=>h(qe,{src:e,children:h(Ct,{viewImage:e})},t))})})}const Ea=`import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { ImageList, photoImages, ViewBox } from './doc-components';

export default function DocDemo() {
  return (
    <PhotoProvider>
      <ImageList>
        {photoImages.map((item, index) => (
          <PhotoView key={index} src={item}>
            <ViewBox viewImage={item} />
          </PhotoView>
        ))}
      </ImageList>
    </PhotoProvider>
  );
}
`,Ma=void 0,_a=void 0,Da={code:Ea,title:Ma,desc:_a},Oa=!0;var Ra=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:Da,isDemo:Oa,default:Aa}),Ta="/react-photo-view/assets/dog.6cccf4ed.png";const Na=e=>{const[t,r]=I.useState(!1);return I.useEffect(()=>{document.onfullscreenchange=()=>{r(Boolean(document.fullscreenElement))}},[]),h("svg",he(se({className:"PhotoView-PhotoSlider__toolbarIcon",fill:"white",width:"44",height:"44",viewBox:"0 0 768 768"},e),{children:t?h("path",{d:"M511.5 256.5h96v63h-159v-159h63v96zM448.5 607.5v-159h159v63h-96v96h-63zM256.5 256.5v-96h63v159h-159v-63h96zM160.5 511.5v-63h159v159h-63v-96h-96z"}):h("path",{d:"M448.5 160.5h159v159h-63v-96h-96v-63zM544.5 544.5v-96h63v159h-159v-63h96zM160.5 319.5v-159h159v63h-96v96h-63zM223.5 448.5v96h96v63h-159v-159h63z"})}))};function Fa(){const[e,t]=I.useState(Bt);function r(){if(document.fullscreenElement)document.exitFullscreen();else{const n=document.getElementById("PhotoView_Slider");n&&n.requestFullscreen()}}return h(He,{toolbarRender:({rotate:n,onRotate:o,onScale:a,scale:s,index:c})=>bt(io,{children:[h("svg",{className:"PhotoView-PhotoSlider__toolbarIcon",width:"44",height:"44",viewBox:"0 0 768 768",fill:"white",onClick:()=>a(s+.2),children:h("path",{d:"M384 640.5q105 0 180.75-75.75t75.75-180.75-75.75-180.75-180.75-75.75-180.75 75.75-75.75 180.75 75.75 180.75 180.75 75.75zM384 64.5q132 0 225.75 93.75t93.75 225.75-93.75 225.75-225.75 93.75-225.75-93.75-93.75-225.75 93.75-225.75 225.75-93.75zM415.5 223.5v129h129v63h-129v129h-63v-129h-129v-63h129v-129h63z"})}),h("svg",{className:"PhotoView-PhotoSlider__toolbarIcon",width:"44",height:"44",viewBox:"0 0 768 768",fill:"white",onClick:()=>a(s-.2),children:h("path",{d:"M384 640.5q105 0 180.75-75.75t75.75-180.75-75.75-180.75-180.75-75.75-180.75 75.75-75.75 180.75 75.75 180.75 180.75 75.75zM384 64.5q132 0 225.75 93.75t93.75 225.75-93.75 225.75-225.75 93.75-225.75-93.75-93.75-225.75 93.75-225.75 225.75-93.75zM223.5 352.5h321v63h-321v-63z"})}),h("svg",{className:"PhotoView-PhotoSlider__toolbarIcon",onClick:()=>o(n+90),width:"44",height:"44",fill:"white",viewBox:"0 0 768 768",children:h("path",{d:"M565.5 202.5l75-75v225h-225l103.5-103.5c-34.5-34.5-82.5-57-135-57-106.5 0-192 85.5-192 192s85.5 192 192 192c84 0 156-52.5 181.5-127.5h66c-28.5 111-127.5 192-247.5 192-141 0-255-115.5-255-256.5s114-256.5 255-256.5c70.5 0 135 28.5 181.5 75z"})}),document.fullscreenEnabled&&h(Na,{onClick:r}),h("svg",{className:"PhotoView-PhotoSlider__toolbarIcon",onClick:()=>{t(d=>{const m=[...d];return m.splice(c,1,Ta),m})},xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",fill:"white",viewBox:"0 0 768 768",children:h("path",{d:"M384 559.5c-75 0-138-45-163.5-111h327c-25.5 66-88.5 111-163.5 111zM271.5 352.5c-27 0-48-21-48-48s21-48 48-48 48 21 48 48-21 48-48 48zM496.5 352.5c-27 0-48-21-48-48s21-48 48-48 48 21 48 48-21 48-48 48zM384 640.5c141 0 256.5-115.5 256.5-256.5s-115.5-256.5-256.5-256.5-256.5 115.5-256.5 256.5 115.5 256.5 256.5 256.5zM384 64.5c177 0 319.5 142.5 319.5 319.5s-142.5 319.5-319.5 319.5-319.5-142.5-319.5-319.5 142.5-319.5 319.5-319.5z"})})]}),children:h(Ge,{children:e.map((n,o)=>h(qe,{src:n,children:h(Ct,{viewImage:n})},o))})})}const Ba=`import React from 'react';
import { PhotoView, PhotoProvider } from 'react-photo-view';
import { ImageList, photoImages, ViewBox } from './doc-components';
import dog from '../images/dog.png';

const FullScreenIcon = (props: React.HTMLAttributes<any>) => {
  const [fullscreen, setFullscreen] = React.useState<boolean>(false);
  React.useEffect(() => {
    document.onfullscreenchange = () => {
      setFullscreen(Boolean(document.fullscreenElement));
    };
  }, []);
  return (
    <svg
      className="PhotoView-PhotoSlider__toolbarIcon"
      fill="white"
      width="44"
      height="44"
      viewBox="0 0 768 768"
      {...props}
    >
      {fullscreen ? (
        <path d="M511.5 256.5h96v63h-159v-159h63v96zM448.5 607.5v-159h159v63h-96v96h-63zM256.5 256.5v-96h63v159h-159v-63h96zM160.5 511.5v-63h159v159h-63v-96h-96z" />
      ) : (
        <path d="M448.5 160.5h159v159h-63v-96h-96v-63zM544.5 544.5v-96h63v159h-159v-63h96zM160.5 319.5v-159h159v63h-96v96h-63zM223.5 448.5v96h96v63h-159v-159h63z" />
      )}
    </svg>
  );
};

export default function DocDemo() {
  const [images, setImages] = React.useState(photoImages);

  function toggleFullScreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      const element = document.getElementById('PhotoView_Slider');
      if (element) {
        element.requestFullscreen();
      }
    }
  }
  return (
    <PhotoProvider
      toolbarRender={({ rotate, onRotate, onScale, scale, index }) => {
        return (
          <>
            <svg
              className="PhotoView-PhotoSlider__toolbarIcon"
              width="44"
              height="44"
              viewBox="0 0 768 768"
              fill="white"
              onClick={() => onScale(scale + 0.2)}
            >
              <path d="M384 640.5q105 0 180.75-75.75t75.75-180.75-75.75-180.75-180.75-75.75-180.75 75.75-75.75 180.75 75.75 180.75 180.75 75.75zM384 64.5q132 0 225.75 93.75t93.75 225.75-93.75 225.75-225.75 93.75-225.75-93.75-93.75-225.75 93.75-225.75 225.75-93.75zM415.5 223.5v129h129v63h-129v129h-63v-129h-129v-63h129v-129h63z" />
            </svg>
            <svg
              className="PhotoView-PhotoSlider__toolbarIcon"
              width="44"
              height="44"
              viewBox="0 0 768 768"
              fill="white"
              onClick={() => onScale(scale - 0.2)}
            >
              <path d="M384 640.5q105 0 180.75-75.75t75.75-180.75-75.75-180.75-180.75-75.75-180.75 75.75-75.75 180.75 75.75 180.75 180.75 75.75zM384 64.5q132 0 225.75 93.75t93.75 225.75-93.75 225.75-225.75 93.75-225.75-93.75-93.75-225.75 93.75-225.75 225.75-93.75zM223.5 352.5h321v63h-321v-63z" />
            </svg>
            <svg
              className="PhotoView-PhotoSlider__toolbarIcon"
              onClick={() => onRotate(rotate + 90)}
              width="44"
              height="44"
              fill="white"
              viewBox="0 0 768 768"
            >
              <path d="M565.5 202.5l75-75v225h-225l103.5-103.5c-34.5-34.5-82.5-57-135-57-106.5 0-192 85.5-192 192s85.5 192 192 192c84 0 156-52.5 181.5-127.5h66c-28.5 111-127.5 192-247.5 192-141 0-255-115.5-255-256.5s114-256.5 255-256.5c70.5 0 135 28.5 181.5 75z" />
            </svg>
            {document.fullscreenEnabled && <FullScreenIcon onClick={toggleFullScreen} />}
            <svg
              className="PhotoView-PhotoSlider__toolbarIcon"
              onClick={() => {
                setImages((prev) => {
                  const result = [...prev];
                  result.splice(index, 1, dog);
                  return result;
                });
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              fill="white"
              viewBox="0 0 768 768"
            >
              <path d="M384 559.5c-75 0-138-45-163.5-111h327c-25.5 66-88.5 111-163.5 111zM271.5 352.5c-27 0-48-21-48-48s21-48 48-48 48 21 48 48-21 48-48 48zM496.5 352.5c-27 0-48-21-48-48s21-48 48-48 48 21 48 48-21 48-48 48zM384 640.5c141 0 256.5-115.5 256.5-256.5s-115.5-256.5-256.5-256.5-256.5 115.5-256.5 256.5 115.5 256.5 256.5 256.5zM384 64.5c177 0 319.5 142.5 319.5 319.5s-142.5 319.5-319.5 319.5-319.5-142.5-319.5-319.5 142.5-319.5 319.5-319.5z" />
            </svg>
          </>
        );
      }}
    >
      <ImageList>
        {images.map((item, index) => (
          <PhotoView key={index} src={item}>
            <ViewBox viewImage={item} />
          </PhotoView>
        ))}
      </ImageList>
    </PhotoProvider>
  );
}
`,$a=void 0,Va=void 0,za={code:Ba,title:$a,desc:Va},La=!0;var ja=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:za,isDemo:La,default:Fa});function Xa(){return h(He,{children:h(Ge,{children:h(qe,{src:Cr,children:h(St,{primary:!0,children:"\u70B9\u51FB\u9884\u89C8"})})})})}const Ya=`import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Button, ImageList } from './doc-components';
import photo4 from '../images/4.jpg';

export default function DocDemo() {
  return (
    <PhotoProvider>
      <ImageList>
        <PhotoView src={photo4}>
          <Button primary>\u70B9\u51FB\u9884\u89C8</Button>
        </PhotoView>
      </ImageList>
    </PhotoProvider>
  );
}
`,Wa=void 0,Ha=void 0,qa={code:Ya,title:Wa,desc:Ha},Ga=!0;var Ka=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:qa,isDemo:Ga,default:Xa});function Za(){return h(He,{loop:4,children:h(Ge,{children:Bt.slice(0,3).map((e,t)=>h(qe,{src:e,children:h(Ct,{viewImage:e})},t))})})}const Qa=`import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { ImageList, ViewBox, photoImages } from './doc-components';

export default function DocDemo() {
  return (
    <PhotoProvider loop={4}>
      <ImageList>
        {photoImages.slice(0, 3).map((item, index) => (
          <PhotoView key={index} src={item}>
            <ViewBox viewImage={item} />
          </PhotoView>
        ))}
      </ImageList>
    </PhotoProvider>
  );
}
`,Ja=void 0,Ua=void 0,ei={code:Qa,title:Ja,desc:Ua},ti=!0;var ri=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:ei,isDemo:ti,default:Za});function ni(){return h(He,{maskOpacity:.5,children:h(Ge,{children:h(qe,{src:Qr,children:h(Ct,{viewImage:Qr})})})})}const oi=`import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { ImageList, ViewBox } from './doc-components';
import photo2 from '../images/2.jpg';

export default function DocDemo() {
  return (
    <PhotoProvider maskOpacity={0.5}>
      <ImageList>
        <PhotoView src={photo2}>
          <ViewBox viewImage={photo2} />
        </PhotoView>
      </ImageList>
    </PhotoProvider>
  );
}
`,ai=void 0,ii=void 0,si={code:oi,title:ai,desc:ii},ci=!0;var li=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:si,isDemo:ci,default:ni});function ui(){return h(He,{maskOpacity:.5,bannerVisible:!1,children:h(Ge,{children:h(qe,{src:Jr,children:h(Ct,{viewImage:Jr})})})})}const di=`import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { ImageList, ViewBox } from './doc-components';
import photo5 from '../images/5.jpg';

export default function DocDemo() {
  return (
    <PhotoProvider maskOpacity={0.5} bannerVisible={false}>
      <ImageList>
        <PhotoView src={photo5}>
          <ViewBox viewImage={photo5} />
        </PhotoView>
      </ImageList>
    </PhotoProvider>
  );
}
`,fi=void 0,hi=void 0,mi={code:di,title:fi,desc:hi},pi=!0;var vi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:mi,isDemo:pi,default:ui});function gi(){return h(He,{pullClosable:!1,maskClosable:!1,children:h(Ge,{children:h(qe,{src:Cr,children:h(Ct,{viewImage:Cr})})})})}const yi=`import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { ImageList, ViewBox } from './doc-components';
import photo4 from '../images/4.jpg';

export default function DocDemo() {
  return (
    <PhotoProvider pullClosable={false} maskClosable={false}>
      <ImageList>
        <PhotoView src={photo4}>
          <ViewBox viewImage={photo4} />
        </PhotoView>
      </ImageList>
    </PhotoProvider>
  );
}
`,wi=void 0,bi=void 0,xi={code:yi,title:wi,desc:bi},Pi=!0;var Ci=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:xi,isDemo:Pi,default:gi}),Si="/react-photo-view/assets/default-photo.136a6935.svg";function ki(){return bt(Ge,{children:[h(He,{children:h(qe,{src:"/error.png",children:h(St,{children:"\u65E0\u9ED8\u8BA4\u56FE"})})}),h(He,{brokenElement:h(Ia,{src:Si}),children:h(qe,{src:"/error.png",children:h(St,{children:"\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u56FE"})})})]})}const Ii=`import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Button, DefaultImage, ImageList } from './doc-components';
import defaultPhoto from '../images/default-photo.svg';

export default function DocDemo() {
  return (
    <ImageList>
      <PhotoProvider>
        <PhotoView src="/error.png">
          <Button>\u65E0\u9ED8\u8BA4\u56FE</Button>
        </PhotoView>
      </PhotoProvider>
      <PhotoProvider brokenElement={<DefaultImage src={defaultPhoto} />}>
        <PhotoView src="/error.png">
          <Button>\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u56FE</Button>
        </PhotoView>
      </PhotoProvider>
    </ImageList>
  );
}
`,Ai=void 0,Ei=void 0,Mi={code:Ii,title:Ai,desc:Ei},_i=!0;var Di=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:Mi,isDemo:_i,default:ki});function Oi(){const[e,t]=I.useState(!1),[r,n]=I.useState(0);function o(){t(!0)}function a(){t(!1)}return bt(Ge,{children:[h(St,{onClick:()=>n(2),children:"setPhotoIndex(2)"}),h(St,{onClick:()=>n(4),children:"setPhotoIndex(4)"}),h(St,{onClick:o,primary:!0,children:"\u6253\u5F00 PhotoSlider"}),h(vn,{images:Bt.map(s=>({src:s,key:s})),visible:e,onClose:a,index:r,onIndexChange:n})]})}const Ri=`import React from 'react';
import { PhotoSlider } from 'react-photo-view';
import { Button, ImageList, photoImages } from './doc-components';

export default function DocDemo() {
  const [visible, setVisible] = React.useState(false);
  const [photoIndex, setPhotoIndex] = React.useState(0);

  function handleShowSlider() {
    setVisible(true);
  }
  function handleCloseSlider() {
    setVisible(false);
  }
  return (
    <ImageList>
      <Button onClick={() => setPhotoIndex(2)}>setPhotoIndex(2)</Button>
      <Button onClick={() => setPhotoIndex(4)}>setPhotoIndex(4)</Button>
      <Button onClick={handleShowSlider} primary>
        \u6253\u5F00 PhotoSlider
      </Button>

      <PhotoSlider
        images={photoImages.map((item: string) => ({ src: item, key: item }))}
        visible={visible}
        onClose={handleCloseSlider}
        index={photoIndex}
        onIndexChange={setPhotoIndex}
      />
    </ImageList>
  );
}
`,Ti=void 0,Ni=void 0,Fi={code:Ri,title:Ti,desc:Ni},Bi=!0;var $i=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:Fi,isDemo:Bi,default:Oi});function Vi(){return h(He,{children:h(Ge,{children:Bt.map((e,t)=>h(qe,{src:e,children:t<2?h(Ct,{viewImage:e}):void 0},t))})})}const zi=`import React from 'react';
import { PhotoView, PhotoProvider } from 'react-photo-view';
import { ImageList, photoImages, ViewBox } from './doc-components';

export default function DocDemo() {
  return (
    <PhotoProvider>
      <ImageList>
        {photoImages.map((item, index) => (
          <PhotoView key={index} src={item}>
            {index < 2 ? <ViewBox viewImage={item} /> : undefined}
          </PhotoView>
        ))}
      </ImageList>
    </PhotoProvider>
  );
}
`,Li=void 0,ji=void 0,Xi={code:zi,title:Li,desc:ji},Yi=!0;var Wi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:Xi,isDemo:Yi,default:Vi});function Hi(){return h(He,{overlayRender:({rotate:e,onRotate:t,scale:r,index:n})=>bt(ka,{children:[bt("div",{children:[h("div",{children:h("a",{onClick:()=>t(e+90),children:"\u65CB\u8F6C"})}),"\u65CB\u8F6C\u89D2\u5EA6 ",e]}),bt("div",{children:["\u7F29\u653E\uFF1A",r]}),bt("div",{children:["\u63CF\u8FF0\uFF1A",Bt[n]]})]}),children:h(Ge,{children:Bt.map((e,t)=>h(qe,{src:e,children:h(Ct,{viewImage:e})},t))})})}const qi=`import React from 'react';
import { PhotoView, PhotoProvider } from 'react-photo-view';
import { ImageList, Overlay, photoImages, ViewBox } from './doc-components';

export default function DocDemo() {
  return (
    <PhotoProvider
      overlayRender={({ rotate, onRotate, scale, index }) => {
        return (
          <Overlay>
            <div>
              <div>
                <a onClick={() => onRotate(rotate + 90)}>\u65CB\u8F6C</a>
              </div>
              \u65CB\u8F6C\u89D2\u5EA6 {rotate}
            </div>
            <div>\u7F29\u653E\uFF1A{scale}</div>
            <div>\u63CF\u8FF0\uFF1A{photoImages[index]}</div>
          </Overlay>
        );
      }}
    >
      <ImageList>
        {photoImages.map((item, index) => (
          <PhotoView key={index} src={item}>
            <ViewBox viewImage={item} />
          </PhotoView>
        ))}
      </ImageList>
    </PhotoProvider>
  );
}
`,Gi=void 0,Ki=void 0,Zi={code:qi,title:Gi,desc:Ki},Qi=!0;var Ji=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:Zi,isDemo:Qi,default:Hi});const Ui=Qt.div`
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
`,Sr=400;function es(){return h(He,{maskOpacity:.5,loop:!1,children:h(Ge,{children:h(qe,{width:Sr,height:Sr,render:({scale:e,attrs:t})=>{const n=(t.style.width-Sr)/Sr,o=e===1?e+n:1+n;return h(Ui,he(se({},t),{children:bt("div",{style:{transform:`scale(${o})`},children:[h("div",{children:"\u81EA\u5B9A\u4E49\u8282\u70B9"}),h(St,{children:"\u6309\u94AE"}),h("input",{onMouseDown:a=>a.stopPropagation()})]})}))},children:h(St,{primary:!0,children:"\u81EA\u5B9A\u4E49\u6E32\u67D3"})})})})}const ts=`import React from 'react';
import styled from 'styled-components';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Button, ImageList } from './doc-components';

const PreviewElement = styled.div\`
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
\`;

const customSize = 400;

export default function DocDemo() {
  return (
    <PhotoProvider maskOpacity={0.5} loop={false}>
      <ImageList>
        <PhotoView
          width={customSize}
          height={customSize}
          render={({ scale, attrs }) => {
            const width = attrs.style!.width as number;
            const offset = (width - customSize) / customSize;
            // \u4FDD\u6301\u5B50\u8282\u70B9\u7684 scale \u7684\u7A33\u5B9A
            const childScale = scale === 1 ? scale + offset : 1 + offset;

            return (
              <PreviewElement {...attrs}>
                <div style={{ transform: \`scale(\${childScale})\` }}>
                  <div>\u81EA\u5B9A\u4E49\u8282\u70B9</div>
                  <Button>\u6309\u94AE</Button>
                  <input onMouseDown={(e) => e.stopPropagation()} />
                </div>
              </PreviewElement>
            );
          }}
        >
          <Button primary>\u81EA\u5B9A\u4E49\u6E32\u67D3</Button>
        </PhotoView>
      </ImageList>
    </PhotoProvider>
  );
}
`,rs=void 0,ns=void 0,os={code:ts,title:rs,desc:ns},as=!0;var is=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:os,isDemo:as,default:es});const ss=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),J("div",se({},r))},Ke=ss("Demo"),cs={},ls="wrapper";function to(r){var n=r,{components:e}=n,t=ln(n,["components"]);return J(ls,he(se(se({},cs),t),{components:e,mdxType:"MDXLayout"}),J("h3",null,"\u57FA\u672C\u4F7F\u7528"),J(Ke,he(se({},Ra),{mdxType:"Demo"})),J("h3",null,"\u81EA\u5B9A\u4E49\u5DE5\u5177\u680F"),J(Ke,he(se({},ja),{mdxType:"Demo"})),J("h3",null,"\u901A\u8FC7\u6309\u94AE\u89E6\u53D1"),J(Ke,he(se({},Ka),{mdxType:"Demo"})),J("h3",null,"\u7981\u7528\u5FAA\u73AF\u9884\u89C8"),J(Ke,he(se({},ri),{mdxType:"Demo"})),J("h3",null,"\u81EA\u5B9A\u4E49\u8499\u5C42\u900F\u660E\u5EA6"),J(Ke,he(se({},li),{mdxType:"Demo"})),J("h3",null,"\u4E0D\u663E\u793A\u9876\u90E8\u6309\u94AE\u533A\u57DF"),J(Ke,he(se({},vi),{mdxType:"Demo"})),J("h3",null,"\u7981\u7528\u70B9\u51FB\u8499\u5C42\u5173\u95ED"),J(Ke,he(se({},Ci),{mdxType:"Demo"})),J("h3",null,"\u81EA\u5B9A\u4E49\u52A0\u8F7D\u5931\u8D25\u6E32\u67D3"),J(Ke,he(se({},Di),{mdxType:"Demo"})),J("h3",null,"\u76F4\u63A5\u4F7F\u7528 PhotoSlider"),J(Ke,he(se({},$i),{mdxType:"Demo"})),J("h3",null,"\u4E24\u5F20\u7F29\u7565\u56FE\u9884\u89C8\u66F4\u591A"),J(Ke,he(se({},Wi),{mdxType:"Demo"})),J("h3",null,"\u81EA\u5B9A\u4E49\u63CF\u8FF0"),J(Ke,he(se({},Ji),{mdxType:"Demo"})),J("h3",null,"\u81EA\u5B9A\u4E49\u6E32\u67D3\u8282\u70B9"),J(Ke,he(se({},is),{mdxType:"Demo"})))}to.isMDXComponent=!0;var us=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:to});const ds={};ds.main=us;export{ds as default};
