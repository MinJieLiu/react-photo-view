var oo=Object.defineProperty,ao=Object.defineProperties;var io=Object.getOwnPropertyDescriptors;var fr=Object.getOwnPropertySymbols;var sn=Object.prototype.hasOwnProperty,cn=Object.prototype.propertyIsEnumerable;var ln=(e,t,r)=>t in e?oo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,de=(e,t)=>{for(var r in t||(t={}))sn.call(t,r)&&ln(e,r,t[r]);if(fr)for(var r of fr(t))cn.call(t,r)&&ln(e,r,t[r]);return e},ye=(e,t)=>ao(e,io(t));var un=(e,t)=>{var r={};for(var n in e)sn.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&fr)for(var n of fr(e))t.indexOf(n)<0&&cn.call(e,n)&&(r[n]=e[n]);return r};import{R as I,r as A,a as so,b as dn,j as m,d as bt,F as co,c as ee}from"./index.8160870c.js";function Ce(){return Ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ce.apply(this,arguments)}function Er(e,t){if(e==null)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(o[r]=e[r]);return o}function Ut(e){var t=A.exports.useRef({fn:e,curr:void 0}).current;if(t.fn=e,!t.curr){var r=Object.create(null);Object.keys(e).forEach(function(n){r[n]=function(){var o;return(o=t.fn[n]).call.apply(o,[t.fn].concat([].slice.call(arguments)))}}),t.curr=r}return t.curr}function hr(e){return A.exports.useReducer(function(t,r){return Ce({},t,typeof r=="function"?r(t):r)},e)}var fn=I.createContext(void 0),nt=typeof document!="undefined"&&"ontouchstart"in document.documentElement;function Ht(e,t,r){var n=A.exports.useRef(t);n.current=t,A.exports.useEffect(function(){function o(a){n.current(a)}return e&&window.addEventListener(e,o,r),function(){e&&window.removeEventListener(e,o)}},[e])}function hn(e){var t=A.exports.useRef({initial:!1,fn:void 0}).current;return t.initial||(t.initial=!0,t.fn=e()),t.fn}var lo=["className","children"],uo=function(e){var t=e.className,r=e.children,n=Er(e,lo),o=hn(function(){return document.createElement("section")});return I.useEffect(function(){return document.body.appendChild(o),function(){document.body.removeChild(o)}},[]),so.exports.createPortal(I.createElement("div",Ce({className:"PhotoView-SlidePortal"+(t?" "+t:""),role:"dialog",id:"PhotoView_Slider"},n),r),o)};function fo(e){return I.createElement("svg",Ce({width:"44",height:"44",viewBox:"0 0 768 768"},e),I.createElement("path",{fill:"#FFF",d:"M607.5 205.5l-178.5 178.5 178.5 178.5-45 45-178.5-178.5-178.5 178.5-45-45 178.5-178.5-178.5-178.5 45-45 178.5 178.5 178.5-178.5z"}))}function ho(e){return I.createElement("svg",Ce({width:"44",height:"44",viewBox:"0 0 768 768"},e),I.createElement("path",{d:"M640.5 352.5v63h-390l178.5 180-45 45-256.5-256.5 256.5-256.5 45 45-178.5 180h390z"}))}function mo(e){return I.createElement("svg",Ce({width:"44",height:"44",viewBox:"0 0 768 768"},e),I.createElement("path",{d:"M384 127.5l256.5 256.5-256.5 256.5-45-45 178.5-180h-390v-63h390l-178.5-180z"}))}function po(){return A.exports.useEffect(function(){var e=function(){var r=navigator.userAgent;if(r.includes("iPhone")&&r.includes("Safari")){var n=window.scrollY,o=document.documentElement,a=o.style,i=mn(o),c=a.height;return a.height=window.innerHeight+"px",function(){i(),a.height=c,window.scrollTo(0,n)}}}(),t=mn(document.body);return function(){t(),e==null||e()}},[]),null}function mn(e){var t=e.style,r=t.overflow;return t.overflow="hidden",function(){t.overflow=r}}function pn(e){var t=e.touches[0],r=t.clientX,n=t.clientY;if(e.touches.length>=2){var o=e.touches[1],a=o.clientX,i=o.clientY;return[(r+a)/2,(n+i)/2,Math.sqrt(Math.pow(a-r,2)+Math.pow(i-n,2))]}return[r,n,0]}function er(e,t,r,n){var o=r*t,a=(o-n)/2;return o<=n?"small":e>0&&a-e<=0?"before":e<0&&a+e<=0?"after":void 0}function mr(e,t,r,n){var o=er(e,t,r,n),a=(r*t-n)/2,i=e;return o==="small"?i=0:o==="before"?i=a:o==="after"&&(i=-a),[i,o]}function _r(e,t,r,n,o,a,i,c,l,h){l===void 0&&(l=0),h===void 0&&(h=0);var w=window,g=w.innerWidth,f=w.innerHeight,u=g/2,y=f/2;return{x:r-c/i*(r-(u+e))-u+(er(e,c,o,g)?l/2:l),y:n-c/i*(n-(y+t))-y+(er(t,c,a,f)?h/2:h),lastCX:r,lastCY:n}}function vo(e,t,r){if(e){var n=window;return(t-n.innerWidth)/2+e.clientX+"px "+((r-n.innerHeight)/2+e.clientY)+"px"}}function Dr(e,t,r){var n=t,o=r,a=e%180!=0;return a&&(n=r,o=t),[n,o,a]}function Or(e,t,r){var n,o,a=0,i=Dr(r,window.innerWidth,window.innerHeight),c=i[0],l=i[1],h=e/t*l,w=t/e*c;return e<c&&t<l?(n=e,o=t):e<c&&t>=l?(n=h,o=l):e>=c&&t<l||e/t>c/l?(n=c,o=w):t/e>=3&&!i[2]?(n=c,a=((o=w)-l)/2):(n=h,o=l),{width:Math.floor(n),height:Math.floor(o),x:0,y:a,easing:!0}}function pr(e,t){var r=t.leading,n=r!==void 0&&r,o=t.maxWait,a=t.wait,i=a===void 0?o||0:a,c=A.exports.useRef(e);c.current=e;var l=A.exports.useRef(0),h=A.exports.useRef(),w=function(){return h.current&&clearTimeout(h.current)},g=A.exports.useCallback(function(){var f=[].slice.call(arguments),u=Date.now();function y(){l.current=u,w(),c.current.apply(null,f)}var x=l.current,S=u-x;if(x===0&&(n&&y(),l.current=u),o!==void 0){if(S>o)return void y()}else S<i&&(l.current=u);w(),h.current=setTimeout(function(){y(),l.current=0},i)},[i,o,n]);return g.cancel=w,g}function Nt(e,t,r){var n=t-e;if(n!==0){var o=Date.now(),a=0,i=function(){var l,h=Math.min(1,(Date.now()-o)/400);r(e+((l=h)===1?1:1-Math.pow(2,-10*l))*n)&&h<1?c():cancelAnimationFrame(a)};c()}function c(){a=requestAnimationFrame(i)}}var vn=function(){var e=A.exports.useRef(!1);return A.exports.useEffect(function(){return e.current=!0,function(){e.current=!1}},[]),e};function go(){return I.createElement("div",{className:"PhotoView__Spinner"},I.createElement("svg",{viewBox:"0 0 32 32",width:"36",height:"36",fill:"white"},I.createElement("path",{opacity:".25",d:"M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"}),I.createElement("path",{d:"M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"})))}var yo=["src","loaded","broken","className","onPhotoLoad","loadingElement","brokenElement"];function wo(e){var t=e.src,r=e.loaded,n=e.broken,o=e.className,a=e.onPhotoLoad,i=e.loadingElement,c=e.brokenElement,l=Er(e,yo),h=vn();return t&&!n?I.createElement(I.Fragment,null,I.createElement("img",Ce({className:"PhotoView__Photo"+(o?" "+o:""),src:t,onLoad:function(w){var g=w.target;h.current&&a({loaded:!0,naturalWidth:g.naturalWidth,naturalHeight:g.naturalHeight})},onError:function(){h.current&&a({broken:!0})},alt:""},l)),!r&&(i||I.createElement(go,null))):c?typeof c=="function"?c({src:t}):c:null}var bo={naturalWidth:void 0,naturalHeight:void 0,width:0,height:0,loaded:void 0,broken:!1,x:0,y:0,touched:!1,maskTouched:!1,CX:0,CY:0,lastX:0,lastY:0,lastCX:0,lastCY:0,touchTime:0,touchLength:0,easing:!0,stopRaf:!0,currReach:void 0};function xo(e){var t,r,n,o,a,i,c,l,h=e.src,w=e.render,g=e.width,f=e.height,u=e.wrapClassName,y=e.className,x=e.style,S=e.loadingElement,K=e.brokenElement,re=e.rotate,B=re===void 0?0:re,Z=e.scale,q=Z===void 0?1:Z,Ne=e.onPhotoTap,Le=e.onMaskTap,Se=e.onReachMove,$t=e.onReachUp,St=e.onPhotoResize,fe=e.onWheel,ce=e.isActive,kt=e.activeAnimation,Zt=e.originRect,O=hr(bo),z=O[0],$=O[1],we=A.exports.useRef(),he=vn(),Me=z.naturalWidth,be=Me===void 0?g||1:Me,Fe=z.naturalHeight,at=Fe===void 0?f||1:Fe,xe=z.width,ve=z.height,Be=z.loaded,ke=Be===void 0?!h:Be,Y=z.broken,ae=z.x,me=z.y,ne=z.touched,$e=z.stopRaf,oe=z.maskTouched,Ie=z.CX,ge=z.CY,je=z.lastX,it=z.lastY,Ee=z.lastCX,Ge=z.lastCY,Ve=z.touchTime,De=z.touchLength,mt=z.easing,pt=z.currReach,Vt=pr(function(d,C,D){if(D===void 0&&(D=0),(ne||oe)&&ce){var Q=Dr(B,xe,ve),le=Q[0],v=Q[1];if(D===0&&we.current===void 0){var E=Math.abs(d-Ie)<=20,W=Math.abs(C-ge)<=20;if(E&&W)return void $({lastCX:d,lastCY:C});we.current=E?C>ge?"pull":"push":"x"}var L=d-Ee,j=C-Ge,X=void 0;if(D===0){var G=er(L+je,q,le,window.innerWidth),ie=er(j+it,q,v,window.innerHeight);X=function(Ke,Je,Lt,Dt){return Je&&Ke==="x"||Dt==="x"?"x":Lt&&(Ke==="pull"||Ke==="push")||Dt==="y"?"y":void 0}(we.current,G,ie,pt),X!==void 0&&Se(X,d,C,q)}if(X==="x"||oe)$({currReach:"x"});else{var ze=Math.max(Math.min(q+(D-De)/100/2*q,Math.max(6,be/xe)),.8);q!==ze&&fe(ze),$(Ce({touchLength:D,currReach:X},_r(ae,me,d,C,xe,ve,q,ze,L,j)))}}},{maxWait:8}),vt=(a=function(d){return!$e&&!ne&&(he.current&&$({x:d,easing:!1}),he.current)},i=function(d){return!$e&&!ne&&(he.current&&$({y:d,easing:!1}),he.current)},c=function(d){return he.current&&fe(d),!ne&&he.current},l=Ut({X:function(d){return a(d)},Y:function(d){return i(d)},S:function(d){return c(d)}}),function(d,C,D,Q,le,v,E,W,L){if(E<1)return Nt(d,0,l.X),Nt(C,0,l.Y),void Nt(E,1,l.S);var j=Date.now()-L,X=Dr(W,le,v),G=X[0],ie=X[1],ze=window,Ke=ze.innerWidth,Je=ze.innerHeight;if(j>=200){var Lt=mr(d,E,G,Ke);Lt[1]&&Nt(d,Lt[0],l.X);var Dt=mr(C,E,ie,Je);Dt[1]&&Nt(C,Dt[0],l.Y)}else{var ir=(d-D)/j,sr=(C-Q)/j,jt=Math.sqrt(Math.pow(ir,2)+Math.pow(sr,2)),Ue=!1,ct=!1;(function(Oe,et){var Ze=Oe,gt=0,tt=void 0,yt=0,lt=function(Rt){tt||(tt=Rt);var ut=Rt-tt,wt=Math.sign(Oe),k=-.002*wt,P=Math.sign(-Ze)*Math.pow(Ze,2)*2e-4,b=Ze*ut+(k+P)*Math.pow(ut,2)/2;gt+=b,tt=Rt,wt*(Ze+=(k+P)*ut)<=0?Qe():et(gt)?Ot():Qe()};function Ot(){yt=requestAnimationFrame(lt)}function Qe(){cancelAnimationFrame(yt)}Ot()})(jt,function(Oe){var et=d+Oe*(ir/jt),Ze=C+Oe*(sr/jt),gt=mr(et,E,G,Ke),tt=gt[0],yt=gt[1],lt=mr(Ze,E,ie,Je),Ot=lt[0],Qe=lt[1];if(yt&&!Ue&&(Ue=!0,Nt(et,tt,l.X)),Qe&&!ct&&(ct=!0,Nt(Ze,Ot,l.Y)),Ue&&ct)return!1;var Rt=Ue||l.X(tt),ut=ct||l.Y(Ot);return Rt&&ut})}}),It=(t=function(d,C){Ne==null||Ne(d,C)},r=function(d,C){if(pt===void 0){var D=q!==1?1:Math.max(2,be/xe),Q=_r(ae,me,d,C,xe,ve,q,D);fe(D),$(Ce({CX:Ie,CY:ge},Q,D<=1&&{x:0,y:0}))}},n=A.exports.useRef(0),o=pr(function(){n.current=0,t.apply(void 0,[].slice.call(arguments))},{wait:300}),function(){var d=[].slice.call(arguments);n.current+=1,o.apply(void 0,d),n.current>=2&&(o.cancel(),n.current=0,r.apply(void 0,d))});function st(d,C){if(we.current=void 0,(ne||oe)&&ce){var D=Ie!==d||ge!==C,Q=Math.max(Math.min(q,Math.max(6,be/xe)),1);Q!==q&&fe(Q),$({touched:!1,maskTouched:!1,easing:!0,stopRaf:!1,currReach:void 0}),vt(ae,me,je,it,xe,ve,q,B,Ve),$t==null||$t(d,C),D||(ne&&Ne?It(d,C):oe&&Le&&Le(d,C))}}function At(d,C,D){D===void 0&&(D=0),$({touched:!0,CX:d,CY:C,lastCX:d,lastCY:C,lastX:ae,lastY:me,touchLength:D,touchTime:Date.now()})}function Mt(d,C){$({maskTouched:!0,CX:d,CY:C,lastX:ae,lastY:me})}Ht(nt?void 0:"mousemove",function(d){d.preventDefault(),Vt(d.clientX,d.clientY)}),Ht(nt?void 0:"mouseup",function(d){st(d.clientX,d.clientY)}),Ht(nt?"touchmove":void 0,function(d){d.preventDefault();var C=pn(d);Vt.apply(void 0,C)},{passive:!1}),Ht(nt?"touchend":void 0,function(d){var C=d.changedTouches[0];st(C.clientX,C.clientY)},{passive:!1}),Ht("resize",pr(function(){ke&&($(Or(be,at,B)),St&&St())},{maxWait:8})),A.exports.useLayoutEffect(function(){$(Or(be,at,B))},[B]);var Et=function(d,C,D,Q){var le=A.exports.useRef(!1),v=hr({leading:!0,scale:D}),E=v[0],W=E.leading,L=E.scale,j=v[1],X=pr(function(G){try{return Q(!1),j({leading:!1,scale:G}),Promise.resolve()}catch(ie){return Promise.reject(ie)}},{wait:400});return A.exports.useLayoutEffect(function(){le.current?(Q(!0),j({leading:!0}),X(D)):le.current=!0},[D]),W?[d*L,C*L,D/L]:[d*D,C*D,1]}(xe,ve,q,function(d){return $({easing:d})}),zt=Et[2],_t={className:y,onMouseDown:nt?void 0:function(d){d.preventDefault(),At(d.clientX,d.clientY,0)},onTouchStart:nt?function(d){At.apply(void 0,pn(d))}:void 0,onWheel:function(d){if(pt===void 0){var C=Math.max(Math.min(q-d.deltaY/100/2,Math.max(6,be/xe)),1),D=_r(ae,me,d.clientX,d.clientY,xe,ve,q,C);$(Ce({CX:d.clientX,CY:d.clientY,stopRaf:!0},D,C<=1&&{x:0,y:0})),fe(C)}},style:{width:Et[0],height:Et[1],transform:"translate3d("+ae+"px, "+me+"px, 0) scale("+zt+") rotate("+B+"deg)",transition:ne||!mt?void 0:"transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",willChange:ce?"transform":void 0}};return I.createElement("div",{className:"PhotoView__PhotoWrap"+(u?" "+u:""),style:x},I.createElement("div",{className:"PhotoView__PhotoMask",onMouseDown:!nt&&ce?function(d){Mt(d.clientX,d.clientY)}:void 0,onTouchStart:nt&&ce?function(d){var C=d.touches[0];Mt(C.clientX,C.clientY)}:void 0}),I.createElement("div",{className:"PhotoView__PhotoBox"+(ke?kt==="enter"?" PhotoView__animateIn":kt==="leave"?" PhotoView__animateOut":"":""),style:{transformOrigin:ke?vo(Zt,xe,ve):void 0}},h?I.createElement(wo,Ce({src:h,loaded:ke,broken:Y},_t,{onPhotoLoad:function(d){$(Ce({},d,d.loaded&&Or(d.naturalWidth||0,d.naturalHeight||0,B)))},loadingElement:S,brokenElement:K})):w==null?void 0:w({attrs:_t,scale:zt,rotate:B})))}var gn={translateX:0,touched:!1,easing:!0,lastCX:void 0,lastCY:void 0,bgOpacity:void 0,lastBgOpacity:void 0,overlayVisible:!0,canPullClose:!0,photoMap:new Map};function yn(e){var t=e.loop,r=t===void 0?3:t,n=e.photoClosable,o=e.maskClosable,a=o===void 0||o,i=e.maskOpacity,c=i===void 0?1:i,l=e.pullClosable,h=l===void 0||l,w=e.bannerVisible,g=w===void 0||w,f=e.overlayRender,u=e.toolbarRender,y=e.className,x=e.maskClassName,S=e.photoClassName,K=e.photoWrapClassName,re=e.loadingElement,B=e.brokenElement,Z=e.images,q=e.index,Ne=q===void 0?0:q,Le=e.onIndexChange,Se=e.visible,$t=e.onClose,St=hr(gn),fe=St[0],ce=St[1],kt=A.exports.useState(0),Zt=kt[0],O=kt[1],z=fe.translateX,$=fe.touched,we=fe.easing,he=fe.lastCX,Me=fe.lastCY,be=fe.bgOpacity,Fe=be===void 0?c:be,at=fe.lastBgOpacity,xe=fe.overlayVisible,ve=fe.canPullClose,Be=fe.photoMap,ke=e.hasOwnProperty("index"),Y=ke?Ne:Zt,ae=ke?Le:O,me=A.exports.useRef(Y),ne=Z.length,$e=Z[Y],oe=r===!0||ne>r,Ie=function(v,E){var W=A.exports.useReducer(function(G){return!G},!1)[1],L=A.exports.useRef(),j=function(G,ie){var ze=A.exports.useRef(G);function Ke(Je){ze.current=Je}return A.exports.useMemo(function(){(function(Je){v?(Je(v),L.current="enter"):L.current="leave"})(Ke)},[G]),[ze.current,Ke]}(v),X=j[1];return{realVisible:j[0],activeAnimation:L.current,onAnimationEnd:function(){W(),L.current==="leave"&&X(!1),L.current=void 0}}}(Se),ge=Ie.realVisible,je=Ie.activeAnimation,it=Ie.onAnimationEnd,Ee=function(v,E){var W=A.exports.useState(),L=W[0],j=W[1];return A.exports.useEffect(function(){var X=E==null?void 0:E.current;if(X&&X.nodeType===1){var G=X.getBoundingClientRect();j({clientX:G.left+G.width/2,clientY:G.top+G.height/2})}else L&&!X&&j(void 0)},[v]),L}(Se,$e==null?void 0:$e.originRef);A.exports.useLayoutEffect(function(){if(ge)return ce({easing:!1,translateX:Y*-(window.innerWidth+20)}),void(me.current=Y);ce(gn)},[ge]);var Ge=Ut({close:function(v){$t(v),ce({overlayVisible:!0,lastBgOpacity:Fe})},changeIndex:function(v,E){E===void 0&&(E=!0);var W=oe?me.current+(v-Y):v,L=ne-1,j=Math.min(L,Math.max(W,0)),X=oe?W:j,G=window.innerWidth+20;ce({touched:!1,lastCX:void 0,lastCY:void 0,translateX:-G*X,easing:E}),me.current=X,ae==null||ae(oe?v<0?L:v>L?0:v:j)},onRotate:function(v){st({rotate:v})},onScale:function(v){st({scale:Math.max(1,Math.min(6,v))})}}),Ve=Ge.close,De=Ge.changeIndex,mt=Ge.onRotate,pt=Ge.onScale;function Vt(){n?Ve():ce({overlayVisible:!xe})}function vt(){a&&Ve()}function It(){var v=window;ce({translateX:-(v.innerWidth+20)*Y,lastCX:void 0,lastCY:void 0,easing:!1}),me.current=Y}function st(v){var E=new Map(Be);if($e){var W=$e.key;ce({photoMap:E.set(W,Ce({},E.get(W),v))})}}function At(v){st({scale:v})}function Mt(v,E,W,L){v==="x"?function(j){var X=window;if(he!==void 0){var G=j-he,ie=G;!oe&&(Y===0&&G>0||Y===Z.length-1&&G<0)&&(ie=G/2),ce({touched:!0,lastCX:he,translateX:-(X.innerWidth+20)*me.current+ie,easing:!0})}else ce({touched:!0,lastCX:j,translateX:z,easing:!0})}(E):v==="y"&&function(j,X){if(Me!==void 0){var G=Math.abs(j-Me),ie=Math.max(Math.min(c,c-G/100/4),0);ce({touched:!0,lastCY:Me,bgOpacity:X===1?ie:c,canPullClose:X===1})}else ce({touched:!0,lastCY:j,bgOpacity:Fe,canPullClose:!0})}(W,L)}function Et(v,E){var W=v-(he!=null?he:v),L=E-(Me!=null?Me:E),j=!1;if(W<-40)De(Y+1);else if(W>40)De(Y-1);else{var X=-(window.innerWidth+20)*me.current;Math.abs(L)>100&&ve&&h&&(j=!0,Ve()),ce({touched:!1,translateX:X,lastCX:void 0,lastCY:void 0,bgOpacity:c,overlayVisible:!!j||xe})}}Ht("keydown",function(v){if(Se)switch(v.key){case"ArrowLeft":De(Y-1,!1);break;case"ArrowRight":De(Y+1,!1);break;case"Escape":Ve()}});var zt="translate3d("+z+"px, 0px, 0)",_t=function(v,E,W){return A.exports.useMemo(function(){if(W){var L=v.length;return v.concat(v).concat(v).slice(L+E-1,L+E+2)}return v.slice(Math.max(E-1,0),Math.min(E+2,v.length+1))},[v,E,W])}(Z,Y,oe);if(!ge)return null;var d=window.innerWidth,C=xe&&!je,D=Se?Fe:at,Q=$e?Be.get($e.key):void 0,le={images:Z,index:Y,visible:Se,onClose:Ve,onIndexChange:De,overlayVisible:C,onRotate:mt,onScale:pt,scale:(Q==null?void 0:Q.scale)||1,rotate:(Q==null?void 0:Q.rotate)||0};return I.createElement(uo,{className:(C?"":"PhotoView-PhotoSlider__clean")+(Se?"":" PhotoView-PhotoSlider__willClose")+(y?" "+y:""),onClick:function(v){return v.stopPropagation()}},Se&&I.createElement(po,null),I.createElement("div",{className:"PhotoView-PhotoSlider__Backdrop"+(x?" "+x:"")+(je==="enter"?" PhotoView-PhotoSlider__fadeIn":je==="leave"?" PhotoView-PhotoSlider__fadeOut":""),style:{background:"rgba(0, 0, 0, "+D+")",transition:$?void 0:"background-color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)"},onAnimationEnd:it}),g&&I.createElement("div",{className:"PhotoView-PhotoSlider__BannerWrap"},I.createElement("div",{className:"PhotoView-PhotoSlider__Counter"},Y+1," / ",ne),I.createElement("div",{className:"PhotoView-PhotoSlider__BannerRight"},u&&u(le),I.createElement(fo,{className:"PhotoView-PhotoSlider__toolbarIcon",onClick:Ve}))),_t.map(function(v,E){var W=oe||Y!==0?me.current-1+E:Y+E;return I.createElement(xo,Ce({key:oe?v.key+"/"+v.src+"/"+W:v.key,src:v.src,render:v.render,width:v.width,height:v.height,onReachMove:Mt,onReachUp:Et,onPhotoTap:Vt,onMaskTap:vt,wrapClassName:K,className:S,style:{left:(d+20)*W+"px",transform:zt,transition:$||!we?void 0:"transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)"},loadingElement:re,brokenElement:B,onPhotoResize:It,isActive:($e==null?void 0:$e.key)===v.key,activeAnimation:je,originRect:Ee,onWheel:At},Be.get(v.key)))}),!nt&&g&&I.createElement(I.Fragment,null,(oe||Y!==0)&&I.createElement("div",{className:"PhotoView-PhotoSlider__ArrowLeft",onClick:function(){return De(Y-1,!1)}},I.createElement(ho,null)),(oe||Y+1<ne)&&I.createElement("div",{className:"PhotoView-PhotoSlider__ArrowRight",onClick:function(){return De(Y+1,!1)}},I.createElement(mo,null))),f&&I.createElement("div",{className:"PhotoView-PhotoSlider__Overlay"},f(le)))}var Po=["children","onIndexChange","onVisibleChange"],Co={images:[],visible:!1,index:0};function Ye(e){var t=e.children,r=e.onIndexChange,n=e.onVisibleChange,o=Er(e,Po),a=hr(Co),i=a[0],c=a[1],l=A.exports.useRef(0),h=i.images,w=i.visible,g=i.index,f=Ut({nextId:function(){return l.current+=1},update:function(x){var S=h.findIndex(function(re){return re.key===x.key});if(S>-1){var K=h.slice();return K.splice(S,1,x),void c({images:K})}c(function(re){return{images:re.images.concat(x)}})},remove:function(x){var S=h.filter(function(K){return K.key!==x});c({images:S,index:Math.min(S.length-1,g)})},show:function(x){var S=h.findIndex(function(K){return K.key===x});c({visible:!0,index:S}),typeof n=="function"&&n(!0,S,i)}}),u=Ut({close:function(){c({visible:!1}),typeof n=="function"&&n(!1,g,i)},changeIndex:function(x){c({index:x}),typeof r=="function"&&r(x,i)}}),y=A.exports.useMemo(function(){return Ce({},i,f)},[i,f]);return I.createElement(fn.Provider,{value:y},t,I.createElement(yn,Ce({images:h,visible:w,index:g,onIndexChange:u.changeIndex,onClose:u.close},o)))}var We=function(e){var t=e.src,r=e.render,n=e.width,o=e.height,a=e.children,i=A.exports.useContext(fn),c=hn(function(){return i.nextId()}),l=A.exports.useState({clientX:void 0,clientY:void 0}),h=l[0],w=l[1],g=A.exports.useRef(null);A.exports.useEffect(function(){return function(){i.remove(c)}},[]);var f=Ut({render:function(u){if(r)return r(u)},touchStart:function(u){var y=u.touches[0];if(w({clientX:y.clientX,clientY:y.clientY}),a){var x=a.props.onTouchStart;x&&x(u)}},touchEnd:function(u){var y=u.changedTouches[0];if(h.clientX===y.clientX&&h.clientY===y.clientY&&i.show(c),a){var x=a.props.onTouchEnd;x&&x(u)}},click:function(u){if(i.show(c),a){var y=a.props.onClick;y&&y(u)}}});return A.exports.useEffect(function(){i.update({key:c,src:t,originRef:g,render:f.render,width:n,height:o})},[t]),a?A.exports.Children.only(A.exports.cloneElement(a,nt?{onTouchStart:f.touchStart,onTouchEnd:f.touchEnd,ref:g}:{onClick:f.click,ref:g})):null};var wn={exports:{}};(function(e,t){(function(r){e.exports=r(null)})(function r(n){var o=/^\0+/g,a=/[\0\r\f]/g,i=/: */g,c=/zoo|gra/,l=/([,: ])(transform)/g,h=/,+\s*(?![^(]*[)])/g,w=/ +\s*(?![^(]*[)])/g,g=/ *[\0] */g,f=/,\r+?/g,u=/([\t\r\n ])*\f?&/g,y=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,x=/\W+/g,S=/@(k\w+)\s*(\S*)\s*/,K=/::(place)/g,re=/:(read-only)/g,B=/\s+(?=[{\];=:>])/g,Z=/([[}=:>])\s+/g,q=/(\{[^{]+?);(?=\})/g,Ne=/\s{2,}/g,Le=/([^\(])(:+) */g,Se=/[svh]\w+-[tblr]{2}/,$t=/\(\s*(.*)\s*\)/g,St=/([\s\S]*?);/g,fe=/-self|flex-/g,ce=/[^]*?(:[rp][el]a[\w-]+)[^]*/,kt=/stretch|:\s*\w+\-(?:conte|avail)/,Zt=/([^-])(image-set\()/,O="-webkit-",z="-moz-",$="-ms-",we=59,he=125,Me=123,be=40,Fe=41,at=91,xe=93,ve=10,Be=13,ke=9,Y=64,ae=32,me=38,ne=45,$e=95,oe=42,Ie=44,ge=58,je=39,it=34,Ee=47,Ge=62,Ve=43,De=126,mt=0,pt=12,Vt=11,vt=107,It=109,st=115,At=112,Mt=111,Et=105,zt=99,_t=100,d=112,C=1,D=1,Q=0,le=1,v=1,E=1,W=0,L=0,j=0,X=[],G=[],ie=0,ze=null,Ke=-2,Je=-1,Lt=0,Dt=1,ir=2,sr=3,jt=0,Ue=1,ct="",Oe="",et="";function Ze(k,P,b,_,p){for(var H,s,F=0,R=0,ue=0,T=0,pe=0,J=0,N=0,_e=0,Re=0,Xt=0,Te=0,dt=0,cr=0,rt=0,V=0,Xe=0,Yt=0,Qt=0,U=0,Tt=b.length,Jt=Tt-1,Ae="",M="",te="",se="",lr="",Ir="";V<Tt;){if(N=b.charCodeAt(V),V===Jt&&R+T+ue+F!==0&&(R!==0&&(N=R===Ee?ve:Ee),T=ue=F=0,Tt++,Jt++),R+T+ue+F===0){if(V===Jt&&(Xe>0&&(M=M.replace(a,"")),M.trim().length>0)){switch(N){case ae:case ke:case we:case Be:case ve:break;default:M+=b.charAt(V)}N=we}if(Yt===1)switch(N){case Me:case he:case we:case it:case je:case be:case Fe:case Ie:Yt=0;case ke:case Be:case ve:case ae:break;default:for(Yt=0,U=V,pe=N,V--,N=we;U<Tt;)switch(b.charCodeAt(U++)){case ve:case Be:case we:++V,N=pe,U=Tt;break;case ge:Xe>0&&(++V,N=pe);case Me:U=Tt}}switch(N){case Me:for(pe=(M=M.trim()).charCodeAt(0),Te=1,U=++V;V<Tt;){switch(N=b.charCodeAt(V)){case Me:Te++;break;case he:Te--;break;case Ee:switch(J=b.charCodeAt(V+1)){case oe:case Ee:V=Rt(J,V,Jt,b)}break;case at:N++;case be:N++;case it:case je:for(;V++<Jt&&b.charCodeAt(V)!==N;);}if(Te===0)break;V++}switch(te=b.substring(U,V),pe===mt&&(pe=(M=M.replace(o,"").trim()).charCodeAt(0)),pe){case Y:switch(Xe>0&&(M=M.replace(a,"")),J=M.charCodeAt(1)){case _t:case It:case st:case ne:H=P;break;default:H=X}if(U=(te=Ze(P,H,te,J,p+1)).length,j>0&&U===0&&(U=M.length),ie>0&&(H=gt(X,M,Qt),s=Qe(sr,te,H,P,D,C,U,J,p,_),M=H.join(""),s!==void 0&&(U=(te=s.trim()).length)===0&&(J=0,te="")),U>0)switch(J){case st:M=M.replace($t,Ot);case _t:case It:case ne:te=M+"{"+te+"}";break;case vt:te=(M=M.replace(S,"$1 $2"+(Ue>0?ct:"")))+"{"+te+"}",v===1||v===2&&lt("@"+te,3)?te="@"+O+te+"@"+te:te="@"+te;break;default:te=M+te,_===d&&(se+=te,te="")}else te="";break;default:te=Ze(P,gt(P,M,Qt),te,_,p+1)}lr+=te,dt=0,Yt=0,rt=0,Xe=0,Qt=0,cr=0,M="",te="",N=b.charCodeAt(++V);break;case he:case we:if((U=(M=(Xe>0?M.replace(a,""):M).trim()).length)>1)switch(rt===0&&((pe=M.charCodeAt(0))===ne||pe>96&&pe<123)&&(U=(M=M.replace(" ",":")).length),ie>0&&(s=Qe(Dt,M,P,k,D,C,se.length,_,p,_))!==void 0&&(U=(M=s.trim()).length)===0&&(M="\0\0"),pe=M.charCodeAt(0),J=M.charCodeAt(1),pe){case mt:break;case Y:if(J===Et||J===zt){Ir+=M+b.charAt(V);break}default:if(M.charCodeAt(U-1)===ge)break;se+=yt(M,pe,J,M.charCodeAt(2))}dt=0,Yt=0,rt=0,Xe=0,Qt=0,M="",N=b.charCodeAt(++V)}}switch(N){case Be:case ve:if(R+T+ue+F+L===0)switch(Xt){case Fe:case je:case it:case Y:case De:case Ge:case oe:case Ve:case Ee:case ne:case ge:case Ie:case we:case Me:case he:break;default:rt>0&&(Yt=1)}R===Ee?R=0:le+dt===0&&_!==vt&&M.length>0&&(Xe=1,M+="\0"),ie*jt>0&&Qe(Lt,M,P,k,D,C,se.length,_,p,_),C=1,D++;break;case we:case he:if(R+T+ue+F===0){C++;break}default:switch(C++,Ae=b.charAt(V),N){case ke:case ae:if(T+F+R===0)switch(_e){case Ie:case ge:case ke:case ae:Ae="";break;default:N!==ae&&(Ae=" ")}break;case mt:Ae="\\0";break;case pt:Ae="\\f";break;case Vt:Ae="\\v";break;case me:T+R+F===0&&le>0&&(Qt=1,Xe=1,Ae="\f"+Ae);break;case 108:if(T+R+F+Q===0&&rt>0)switch(V-rt){case 2:_e===At&&b.charCodeAt(V-3)===ge&&(Q=_e);case 8:Re===Mt&&(Q=Re)}break;case ge:T+R+F===0&&(rt=V);break;case Ie:R+ue+T+F===0&&(Xe=1,Ae+="\r");break;case it:case je:R===0&&(T=T===N?0:T===0?N:T);break;case at:T+R+ue===0&&F++;break;case xe:T+R+ue===0&&F--;break;case Fe:T+R+F===0&&ue--;break;case be:if(T+R+F===0){if(dt===0)switch(2*_e+3*Re){case 533:break;default:Te=0,dt=1}ue++}break;case Y:R+ue+T+F+rt+cr===0&&(cr=1);break;case oe:case Ee:if(T+F+ue>0)break;switch(R){case 0:switch(2*N+3*b.charCodeAt(V+1)){case 235:R=Ee;break;case 220:U=V,R=oe}break;case oe:N===Ee&&_e===oe&&U+2!==V&&(b.charCodeAt(U+2)===33&&(se+=b.substring(U,V+1)),Ae="",R=0)}}if(R===0){if(le+T+F+cr===0&&_!==vt&&N!==we)switch(N){case Ie:case De:case Ge:case Ve:case Fe:case be:if(dt===0){switch(_e){case ke:case ae:case ve:case Be:Ae+="\0";break;default:Ae="\0"+Ae+(N===Ie?"":"\0")}Xe=1}else switch(N){case be:rt+7===V&&_e===108&&(rt=0),dt=++Te;break;case Fe:(dt=--Te)==0&&(Xe=1,Ae+="\0")}break;case ke:case ae:switch(_e){case mt:case Me:case he:case we:case Ie:case pt:case ke:case ae:case ve:case Be:break;default:dt===0&&(Xe=1,Ae+="\0")}}M+=Ae,N!==ae&&N!==ke&&(Xt=N)}}Re=_e,_e=N,V++}if(U=se.length,j>0&&U===0&&lr.length===0&&P[0].length!==0&&(_!==It||P.length===1&&(le>0?Oe:et)===P[0])&&(U=P.join(",").length+2),U>0){if(H=le===0&&_!==vt?function(en){for(var ft,Pe,ur=0,tn=en.length,rn=Array(tn);ur<tn;++ur){for(var Ar=en[ur].split(g),dr="",Wt=0,Mr=0,nn=0,on=0,an=Ar.length;Wt<an;++Wt)if(!((Mr=(Pe=Ar[Wt]).length)===0&&an>1)){if(nn=dr.charCodeAt(dr.length-1),on=Pe.charCodeAt(0),ft="",Wt!==0)switch(nn){case oe:case De:case Ge:case Ve:case ae:case be:break;default:ft=" "}switch(on){case me:Pe=ft+Oe;case De:case Ge:case Ve:case ae:case Fe:case be:break;case at:Pe=ft+Pe+Oe;break;case ge:switch(2*Pe.charCodeAt(1)+3*Pe.charCodeAt(2)){case 530:if(E>0){Pe=ft+Pe.substring(8,Mr-1);break}default:(Wt<1||Ar[Wt-1].length<1)&&(Pe=ft+Oe+Pe)}break;case Ie:ft="";default:Mr>1&&Pe.indexOf(":")>0?Pe=ft+Pe.replace(Le,"$1"+Oe+"$2"):Pe=ft+Pe+Oe}dr+=Pe}rn[ur]=dr.replace(a,"").trim()}return rn}(P):P,ie>0&&(s=Qe(ir,se,H,k,D,C,U,_,p,_))!==void 0&&(se=s).length===0)return Ir+se+lr;if(se=H.join(",")+"{"+se+"}",v*Q!=0){switch(v===2&&!lt(se,2)&&(Q=0),Q){case Mt:se=se.replace(re,":"+z+"$1")+se;break;case At:se=se.replace(K,"::"+O+"input-$1")+se.replace(K,"::"+z+"$1")+se.replace(K,":"+$+"input-$1")+se}Q=0}}return Ir+se+lr}function gt(k,P,b){var _=P.trim().split(f),p=_,H=_.length,s=k.length;switch(s){case 0:case 1:for(var F=0,R=s===0?"":k[0]+" ";F<H;++F)p[F]=tt(R,p[F],b,s).trim();break;default:F=0;var ue=0;for(p=[];F<H;++F)for(var T=0;T<s;++T)p[ue++]=tt(k[T]+" ",_[F],b,s).trim()}return p}function tt(k,P,b,_){var p=P,H=p.charCodeAt(0);switch(H<33&&(H=(p=p.trim()).charCodeAt(0)),H){case me:switch(le+_){case 0:case 1:if(k.trim().length===0)break;default:return p.replace(u,"$1"+k.trim())}break;case ge:switch(p.charCodeAt(1)){case 103:if(E>0&&le>0)return p.replace(y,"$1").replace(u,"$1"+et);break;default:return k.trim()+p.replace(u,"$1"+k.trim())}default:if(b*le>0&&p.indexOf("\f")>0)return p.replace(u,(k.charCodeAt(0)===ge?"":"$1")+k.trim())}return k+p}function yt(k,P,b,_){var p,H=0,s=k+";",F=2*P+3*b+4*_;if(F===944)return function(R){var ue=R.length,T=R.indexOf(":",9)+1,pe=R.substring(0,T).trim(),J=R.substring(T,ue-1).trim();switch(R.charCodeAt(9)*Ue){case 0:break;case ne:if(R.charCodeAt(10)!==110)break;default:for(var N=J.split((J="",h)),_e=0,T=0,ue=N.length;_e<ue;T=0,++_e){for(var Re=N[_e],Xt=Re.split(w);Re=Xt[T];){var Te=Re.charCodeAt(0);if(Ue===1&&(Te>Y&&Te<90||Te>96&&Te<123||Te===$e||Te===ne&&Re.charCodeAt(1)!==ne))switch(isNaN(parseFloat(Re))+(Re.indexOf("(")!==-1)){case 1:switch(Re){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:Re+=ct}}Xt[T++]=Re}J+=(_e===0?"":",")+Xt.join(" ")}}return J=pe+J+";",v===1||v===2&&lt(J,1)?O+J+J:J}(s);if(v===0||v===2&&!lt(s,1))return s;switch(F){case 1015:return s.charCodeAt(10)===97?O+s+s:s;case 951:return s.charCodeAt(3)===116?O+s+s:s;case 963:return s.charCodeAt(5)===110?O+s+s:s;case 1009:if(s.charCodeAt(4)!==100)break;case 969:case 942:return O+s+s;case 978:return O+s+z+s+s;case 1019:case 983:return O+s+z+s+$+s+s;case 883:return s.charCodeAt(8)===ne?O+s+s:s.indexOf("image-set(",11)>0?s.replace(Zt,"$1"+O+"$2")+s:s;case 932:if(s.charCodeAt(4)===ne)switch(s.charCodeAt(5)){case 103:return O+"box-"+s.replace("-grow","")+O+s+$+s.replace("grow","positive")+s;case 115:return O+s+$+s.replace("shrink","negative")+s;case 98:return O+s+$+s.replace("basis","preferred-size")+s}return O+s+$+s+s;case 964:return O+s+$+"flex-"+s+s;case 1023:if(s.charCodeAt(8)!==99)break;return p=s.substring(s.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),O+"box-pack"+p+O+s+$+"flex-pack"+p+s;case 1005:return c.test(s)?s.replace(i,":"+O)+s.replace(i,":"+z)+s:s;case 1e3:switch(H=(p=s.substring(13).trim()).indexOf("-")+1,p.charCodeAt(0)+p.charCodeAt(H)){case 226:p=s.replace(Se,"tb");break;case 232:p=s.replace(Se,"tb-rl");break;case 220:p=s.replace(Se,"lr");break;default:return s}return O+s+$+p+s;case 1017:if(s.indexOf("sticky",9)===-1)return s;case 975:switch(H=(s=k).length-10,F=(p=(s.charCodeAt(H)===33?s.substring(0,H):s).substring(k.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|p.charCodeAt(7))){case 203:if(p.charCodeAt(8)<111)break;case 115:s=s.replace(p,O+p)+";"+s;break;case 207:case 102:s=s.replace(p,O+(F>102?"inline-":"")+"box")+";"+s.replace(p,O+p)+";"+s.replace(p,$+p+"box")+";"+s}return s+";";case 938:if(s.charCodeAt(5)===ne)switch(s.charCodeAt(6)){case 105:return p=s.replace("-items",""),O+s+O+"box-"+p+$+"flex-"+p+s;case 115:return O+s+$+"flex-item-"+s.replace(fe,"")+s;default:return O+s+$+"flex-line-pack"+s.replace("align-content","").replace(fe,"")+s}break;case 973:case 989:if(s.charCodeAt(3)!==ne||s.charCodeAt(4)===122)break;case 931:case 953:if(kt.test(k)===!0)return(p=k.substring(k.indexOf(":")+1)).charCodeAt(0)===115?yt(k.replace("stretch","fill-available"),P,b,_).replace(":fill-available",":stretch"):s.replace(p,O+p)+s.replace(p,z+p.replace("fill-",""))+s;break;case 962:if(s=O+s+(s.charCodeAt(5)===102?$+s:"")+s,b+_===211&&s.charCodeAt(13)===105&&s.indexOf("transform",10)>0)return s.substring(0,s.indexOf(";",27)+1).replace(l,"$1"+O+"$2")+s}return s}function lt(k,P){var b=k.indexOf(P===1?":":"{"),_=k.substring(0,P!==3?b:10),p=k.substring(b+1,k.length-1);return ze(P!==2?_:_.replace(ce,"$1"),p,P)}function Ot(k,P){var b=yt(P,P.charCodeAt(0),P.charCodeAt(1),P.charCodeAt(2));return b!==P+";"?b.replace(St," or ($1)").substring(4):"("+P+")"}function Qe(k,P,b,_,p,H,s,F,R,ue){for(var T,pe=0,J=P;pe<ie;++pe)switch(T=G[pe].call(wt,k,J,b,_,p,H,s,F,R,ue)){case void 0:case!1:case!0:case null:break;default:J=T}if(J!==P)return J}function Rt(k,P,b,_){for(var p=P+1;p<b;++p)switch(_.charCodeAt(p)){case Ee:if(k===oe&&_.charCodeAt(p-1)===oe&&P+2!==p)return p+1;break;case ve:if(k===Ee)return p+1}return p}function ut(k){for(var P in k){var b=k[P];switch(P){case"keyframe":Ue=0|b;break;case"global":E=0|b;break;case"cascade":le=0|b;break;case"compress":W=0|b;break;case"semicolon":L=0|b;break;case"preserve":j=0|b;break;case"prefix":ze=null,b?typeof b!="function"?v=1:(v=2,ze=b):v=0}}return ut}function wt(k,P){if(this!==void 0&&this.constructor===wt)return r(k);var b=k,_=b.charCodeAt(0);_<33&&(_=(b=b.trim()).charCodeAt(0)),Ue>0&&(ct=b.replace(x,_===at?"":"-")),_=1,le===1?et=b:Oe=b;var p,H=[et];ie>0&&(p=Qe(Je,P,H,H,D,C,0,0,0,0))!==void 0&&typeof p=="string"&&(P=p);var s=Ze(X,H,P,0,0);return ie>0&&(p=Qe(Ke,s,H,H,D,C,s.length,0,0,0))!==void 0&&typeof(s=p)!="string"&&(_=0),ct="",et="",Oe="",Q=0,D=1,C=1,W*_==0?s:s.replace(a,"").replace(B,"").replace(Z,"$1").replace(q,"$1").replace(Ne," ")}return wt.use=function k(P){switch(P){case void 0:case null:ie=G.length=0;break;default:if(typeof P=="function")G[ie++]=P;else if(typeof P=="object")for(var b=0,_=P.length;b<_;++b)k(P[b]);else jt=0|!!P}return k},wt.set=ut,n!==void 0&&ut(n),wt})})(wn);var bn=wn.exports,xn={exports:{}};(function(e,t){(function(r){e.exports=r()})(function(){return function(r){var n="/*|*/",o=n+"}";function a(i){if(i)try{r(i+"}")}catch{}}return function(c,l,h,w,g,f,u,y,x,S){switch(c){case 1:if(x===0&&l.charCodeAt(0)===64)return r(l+";"),"";break;case 2:if(y===0)return l+n;break;case 3:switch(y){case 102:case 112:return r(h[0]+l),"";default:return l+(S===0?n:"")}case-2:l.split(o).forEach(a)}}}})})(xn);var So=xn.exports,ko={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Pn=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Io(e,t){return!!(e===t||Pn(e)&&Pn(t))}function Ao(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!Io(e[r],t[r]))return!1;return!0}function Cn(e,t){t===void 0&&(t=Ao);var r,n=[],o,a=!1;function i(){for(var c=[],l=0;l<arguments.length;l++)c[l]=arguments[l];return a&&r===this&&t(c,n)||(o=e.apply(this,c),a=!0,r=this,n=c),o}return i}function Mo(e){var t={};return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var Eo=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,_o=Mo(function(e){return Eo.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function Rr(e){return Object.prototype.toString.call(e).slice(8,-1)}function tr(e){return Rr(e)!=="Object"?!1:e.constructor===Object&&Object.getPrototypeOf(e)===Object.prototype}function Sn(e){return Rr(e)==="Array"}function kn(e){return Rr(e)==="Symbol"}/*! *****************************************************************************
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
***************************************************************************** */function In(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),o=0,t=0;t<r;t++)for(var a=arguments[t],i=0,c=a.length;i<c;i++,o++)n[o]=a[i];return n}function An(e,t,r,n){var o=n.propertyIsEnumerable(t)?"enumerable":"nonenumerable";o==="enumerable"&&(e[t]=r),o==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function Mn(e,t,r){if(!tr(t))return r&&Sn(r)&&r.forEach(function(h){t=h(e,t)}),t;var n={};if(tr(e)){var o=Object.getOwnPropertyNames(e),a=Object.getOwnPropertySymbols(e);n=In(o,a).reduce(function(h,w){var g=e[w];return(!kn(w)&&!Object.getOwnPropertyNames(t).includes(w)||kn(w)&&!Object.getOwnPropertySymbols(t).includes(w))&&An(h,w,g,e),h},{})}var i=Object.getOwnPropertyNames(t),c=Object.getOwnPropertySymbols(t),l=In(i,c).reduce(function(h,w){var g=t[w],f=tr(e)?e[w]:void 0;return r&&Sn(r)&&r.forEach(function(u){g=u(f,g)}),f!==void 0&&tr(g)&&(g=Mn(f,g,r)),An(h,w,g,t),h},n);return l}function Do(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=null,o=e;return tr(e)&&e.extensions&&Object.keys(e).length===1&&(o={},n=e.extensions),t.reduce(function(a,i){return Mn(a,i,n)},o)}var En=function(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r},_n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ft=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Oo=function(){function e(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),ot=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},vr=function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},Ro=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||!Object.prototype.hasOwnProperty.call(e,n)||(r[n]=e[n]);return r},rr=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e},Tr=function(e){return(typeof e=="undefined"?"undefined":_n(e))==="object"&&e.constructor===Object},Nr=Object.freeze([]),nr=Object.freeze({});function ht(e){return typeof e=="function"}function Dn(e){return e.displayName||e.name||"Component"}function To(e){return typeof e=="function"&&!(e.prototype&&e.prototype.isReactComponent)}function gr(e){return e&&typeof e.styledComponentId=="string"}var or=typeof process!="undefined"&&{}.SC_ATTR||"data-styled",yr="data-styled-version",No="data-styled-streamed",qt=typeof window!="undefined"&&"HTMLElement"in window,On=typeof SC_DISABLE_SPEEDY=="boolean"&&SC_DISABLE_SPEEDY||typeof process!="undefined"&&{}.SC_DISABLE_SPEEDY||!1,xt=function(e){vr(t,e);function t(r){Ft(this,t);for(var n=arguments.length,o=Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];var i,i=rr(this,e.call(this,"An error occurred. See https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/errors.md#"+r+" for more information."+(o.length>0?" Additional arguments: "+o.join(", "):"")));return rr(i)}return t}(Error),Fo=/^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm,Bo=function(e){var t=""+(e||""),r=[];return t.replace(Fo,function(n,o,a){return r.push({componentId:o,matchIndex:a}),n}),r.map(function(n,o){var a=n.componentId,i=n.matchIndex,c=r[o+1],l=c?t.slice(i,c.matchIndex):t.slice(i);return{componentId:a,cssFromDOM:l}})},$o=/^\s*\/\/.*$/gm,Rn=new bn({global:!1,cascade:!0,keyframe:!1,prefix:!1,compress:!1,semicolon:!0}),Tn=new bn({global:!1,cascade:!0,keyframe:!1,prefix:!0,compress:!1,semicolon:!1}),Fr=[],Nn=function(t){if(t===-2){var r=Fr;return Fr=[],r}},Fn=So(function(e){Fr.push(e)}),Bn=void 0,Gt=void 0,$n=void 0,Vo=function(t,r,n){return r>0&&n.slice(0,r).indexOf(Gt)!==-1&&n.slice(r-Gt.length,r)!==Gt?"."+Bn:t},zo=function(t,r,n){t===2&&n.length&&n[0].lastIndexOf(Gt)>0&&(n[0]=n[0].replace($n,Vo))};Tn.use([zo,Fn,Nn]);Rn.use([Fn,Nn]);var Lo=function(t){return Rn("",t)};function jo(e,t,r){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"&",o=e.join("").replace($o,""),a=t&&r?r+" "+t+" { "+o+" }":o;return Bn=n,Gt=t,$n=new RegExp("\\"+Gt+"\\b","g"),Tn(r||!t?"":t,a)}var Br=function(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null},$r=function(t,r,n){if(n){var o=t[r]||(t[r]=Object.create(null));o[n]=!0}},wr=function(t,r){t[r]=Object.create(null)},Vr=function(t){return function(r,n){return t[r]!==void 0&&t[r][n]}},Vn=function(t){var r="";for(var n in t)r+=Object.keys(t[n]).join(" ")+" ";return r.trim()},Xo=function(t){var r=Object.create(null);for(var n in t)r[n]=ot({},t[n]);return r},zr=function(t){if(t.sheet)return t.sheet;for(var r=t.ownerDocument.styleSheets.length,n=0;n<r;n+=1){var o=t.ownerDocument.styleSheets[n];if(o.ownerNode===t)return o}throw new xt(10)},Yo=function(t,r,n){if(!r)return!1;var o=t.cssRules.length;try{t.insertRule(r,n<=o?n:o)}catch{return!1}return!0},Wo=function(t,r,n){for(var o=r-n,a=r;a>o;a-=1)t.deleteRule(a)},Lr=function(t){return`
/* sc-component-id: `+t+` */
`},jr=function(t,r){for(var n=0,o=0;o<=r;o+=1)n+=t[o];return n},Ho=function(t,r,n){var o=document;t?o=t.ownerDocument:r&&(o=r.ownerDocument);var a=o.createElement("style");a.setAttribute(or,""),a.setAttribute(yr,"4.4.1");var i=Br();if(i&&a.setAttribute("nonce",i),a.appendChild(o.createTextNode("")),t&&!r)t.appendChild(a);else{if(!r||!t||!r.parentNode)throw new xt(6);r.parentNode.insertBefore(a,n?r:r.nextSibling)}return a},Xr=function(t,r){return function(n){var o=Br(),a=[o&&'nonce="'+o+'"',or+'="'+Vn(r)+'"',yr+'="4.4.1"',n],i=a.filter(Boolean).join(" ");return"<style "+i+">"+t()+"</style>"}},Yr=function(t,r){return function(){var n,o=(n={},n[or]=Vn(r),n[yr]="4.4.1",n),a=Br();return a&&(o.nonce=a),m("style",ye(de({},o),{dangerouslySetInnerHTML:{__html:t()}}))}},Wr=function(t){return function(){return Object.keys(t)}},qo=function(t,r){var n=Object.create(null),o=Object.create(null),a=[],i=r!==void 0,c=!1,l=function(u){var y=o[u];return y!==void 0?y:(o[u]=a.length,a.push(0),wr(n,u),o[u])},h=function(u,y,x){for(var S=l(u),K=zr(t),re=jr(a,S),B=0,Z=[],q=y.length,Ne=0;Ne<q;Ne+=1){var Le=y[Ne],Se=i;Se&&Le.indexOf("@import")!==-1?Z.push(Le):Yo(K,Le,re+B)&&(Se=!1,B+=1)}i&&Z.length>0&&(c=!0,r().insertRules(u+"-import",Z)),a[S]+=B,$r(n,u,x)},w=function(u){var y=o[u];if(y!==void 0&&t.isConnected!==!1){var x=a[y],S=zr(t),K=jr(a,y)-1;Wo(S,K,x),a[y]=0,wr(n,u),i&&c&&r().removeRules(u+"-import")}},g=function(){var u=zr(t),y=u.cssRules,x="";for(var S in o){x+=Lr(S);for(var K=o[S],re=jr(a,K),B=a[K],Z=re-B;Z<re;Z+=1){var q=y[Z];q!==void 0&&(x+=q.cssText)}}return x};return{clone:function(){throw new xt(5)},css:g,getIds:Wr(o),hasNameForId:Vr(n),insertMarker:l,insertRules:h,removeRules:w,sealed:!1,styleTag:t,toElement:Yr(g,n),toHTML:Xr(g,n)}},zn=function(t,r){return t.createTextNode(Lr(r))},Go=function(t,r){var n=Object.create(null),o=Object.create(null),a=r!==void 0,i=!1,c=function(f){var u=o[f];return u!==void 0?u:(o[f]=zn(t.ownerDocument,f),t.appendChild(o[f]),n[f]=Object.create(null),o[f])},l=function(f,u,y){for(var x=c(f),S=[],K=u.length,re=0;re<K;re+=1){var B=u[re],Z=a;if(Z&&B.indexOf("@import")!==-1)S.push(B);else{Z=!1;var q=re===K-1?"":" ";x.appendData(""+B+q)}}$r(n,f,y),a&&S.length>0&&(i=!0,r().insertRules(f+"-import",S))},h=function(f){var u=o[f];if(u!==void 0){var y=zn(t.ownerDocument,f);t.replaceChild(y,u),o[f]=y,wr(n,f),a&&i&&r().removeRules(f+"-import")}},w=function(){var f="";for(var u in o)f+=o[u].data;return f};return{clone:function(){throw new xt(5)},css:w,getIds:Wr(o),hasNameForId:Vr(n),insertMarker:c,insertRules:l,removeRules:h,sealed:!1,styleTag:t,toElement:Yr(w,n),toHTML:Xr(w,n)}},Ko=function e(t,r){var n=t===void 0?Object.create(null):t,o=r===void 0?Object.create(null):r,a=function(f){var u=o[f];return u!==void 0?u:o[f]=[""]},i=function(f,u,y){var x=a(f);x[0]+=u.join(" "),$r(n,f,y)},c=function(f){var u=o[f];u!==void 0&&(u[0]="",wr(n,f))},l=function(){var f="";for(var u in o){var y=o[u][0];y&&(f+=Lr(u)+y)}return f},h=function(){var f=Xo(n),u=Object.create(null);for(var y in o)u[y]=[o[y][0]];return e(f,u)},w={clone:h,css:l,getIds:Wr(o),hasNameForId:Vr(n),insertMarker:a,insertRules:i,removeRules:c,sealed:!1,styleTag:null,toElement:Yr(l,n),toHTML:Xr(l,n)};return w},Ln=function(t,r,n,o,a){if(qt&&!n){var i=Ho(t,r,o);return On?Go(i,a):qo(i,a)}return Ko()},Zo=function(t,r,n){for(var o=0,a=n.length;o<a;o+=1){var i=n[o],c=i.componentId,l=i.cssFromDOM,h=Lo(l);t.insertRules(c,h)}for(var w=0,g=r.length;w<g;w+=1){var f=r[w];f.parentNode&&f.parentNode.removeChild(f)}},Qo=/\s+/,br=void 0;qt?br=On?40:1e3:br=-1;var jn=0,Hr=void 0,xr=function(){function e(){var t=this,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:qt?document.head:null,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;Ft(this,e),this.getImportRuleTag=function(){var o=t.importRuleTag;if(o!==void 0)return o;var a=t.tags[0],i=!0;return t.importRuleTag=Ln(t.target,a?a.styleTag:null,t.forceServer,i)},jn+=1,this.id=jn,this.forceServer=n,this.target=n?null:r,this.tagMap={},this.deferred={},this.rehydratedNames={},this.ignoreRehydratedNames={},this.tags=[],this.capacity=1,this.clones=[]}return e.prototype.rehydrate=function(){if(!qt||this.forceServer)return this;var r=[],n=[],o=!1,a=document.querySelectorAll("style["+or+"]["+yr+'="4.4.1"]'),i=a.length;if(!i)return this;for(var c=0;c<i;c+=1){var l=a[c];o||(o=!!l.getAttribute(No));for(var h=(l.getAttribute(or)||"").trim().split(Qo),w=h.length,g=0,f;g<w;g+=1)f=h[g],this.rehydratedNames[f]=!0;n.push.apply(n,Bo(l.textContent)),r.push(l)}var u=n.length;if(!u)return this;var y=this.makeTag(null);Zo(y,r,n),this.capacity=Math.max(1,br-u),this.tags.push(y);for(var x=0;x<u;x+=1)this.tagMap[n[x].componentId]=y;return this},e.reset=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;Hr=new e(void 0,r).rehydrate()},e.prototype.clone=function(){var r=new e(this.target,this.forceServer);return this.clones.push(r),r.tags=this.tags.map(function(n){for(var o=n.getIds(),a=n.clone(),i=0;i<o.length;i+=1)r.tagMap[o[i]]=a;return a}),r.rehydratedNames=ot({},this.rehydratedNames),r.deferred=ot({},this.deferred),r},e.prototype.sealAllTags=function(){this.capacity=1,this.tags.forEach(function(r){r.sealed=!0})},e.prototype.makeTag=function(r){var n=r?r.styleTag:null,o=!1;return Ln(this.target,n,this.forceServer,o,this.getImportRuleTag)},e.prototype.getTagForId=function(r){var n=this.tagMap[r];if(n!==void 0&&!n.sealed)return n;var o=this.tags[this.tags.length-1];return this.capacity-=1,this.capacity===0&&(this.capacity=br,o=this.makeTag(o),this.tags.push(o)),this.tagMap[r]=o},e.prototype.hasId=function(r){return this.tagMap[r]!==void 0},e.prototype.hasNameForId=function(r,n){if(this.ignoreRehydratedNames[r]===void 0&&this.rehydratedNames[n])return!0;var o=this.tagMap[r];return o!==void 0&&o.hasNameForId(r,n)},e.prototype.deferredInject=function(r,n){if(this.tagMap[r]===void 0){for(var o=this.clones,a=0;a<o.length;a+=1)o[a].deferredInject(r,n);this.getTagForId(r).insertMarker(r),this.deferred[r]=n}},e.prototype.inject=function(r,n,o){for(var a=this.clones,i=0;i<a.length;i+=1)a[i].inject(r,n,o);var c=this.getTagForId(r);if(this.deferred[r]!==void 0){var l=this.deferred[r].concat(n);c.insertRules(r,l,o),this.deferred[r]=void 0}else c.insertRules(r,n,o)},e.prototype.remove=function(r){var n=this.tagMap[r];if(n!==void 0){for(var o=this.clones,a=0;a<o.length;a+=1)o[a].remove(r);n.removeRules(r),this.ignoreRehydratedNames[r]=!0,this.deferred[r]=void 0}},e.prototype.toHTML=function(){return this.tags.map(function(r){return r.toHTML()}).join("")},e.prototype.toReactElements=function(){var r=this.id;return this.tags.map(function(n,o){var a="sc-"+r+"-"+o;return A.exports.cloneElement(n.toElement(),{key:a})})},Oo(e,null,[{key:"master",get:function(){return Hr||(Hr=new e().rehydrate())}},{key:"instance",get:function(){return e.master}}]),e}(),Jo=function(){function e(t,r){var n=this;Ft(this,e),this.inject=function(o){o.hasNameForId(n.id,n.name)||o.inject(n.id,n.rules,n.name)},this.toString=function(){throw new xt(12,String(n.name))},this.name=t,this.rules=r,this.id="sc-keyframes-"+t}return e.prototype.getName=function(){return this.name},e}(),Uo=/([A-Z])/g,ea=/^ms-/;function Xn(e){return e.replace(Uo,"-$1").toLowerCase().replace(ea,"-ms-")}function ta(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t=="number"&&t!==0&&!(e in ko)?t+"px":String(t).trim()}var Yn=function(t){return t==null||t===!1||t===""},ra=function e(t,r){var n=[],o=Object.keys(t);return o.forEach(function(a){if(!Yn(t[a])){if(Tr(t[a]))return n.push.apply(n,e(t[a],a)),n;if(ht(t[a]))return n.push(Xn(a)+":",t[a],";"),n;n.push(Xn(a)+": "+ta(a,t[a])+";")}return n}),r?[r+" {"].concat(n,["}"]):n};function ar(e,t,r){if(Array.isArray(e)){for(var n=[],o=0,a=e.length,i;o<a;o+=1)i=ar(e[o],t,r),i!==null&&(Array.isArray(i)?n.push.apply(n,i):n.push(i));return n}if(Yn(e))return null;if(gr(e))return"."+e.styledComponentId;if(ht(e))if(To(e)&&t){var c=e(t);return ar(c,t,r)}else return e;return e instanceof Jo?r?(e.inject(r),e.getName()):e:Tr(e)?ra(e):e.toString()}function Wn(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return ht(e)||Tr(e)?ar(En(Nr,[e].concat(r))):ar(En(e,r))}function qr(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:nr;if(!dn.exports.isValidElementType(t))throw new xt(1,String(t));var n=function(){return e(t,r,Wn.apply(void 0,arguments))};return n.withConfig=function(o){return qr(e,t,ot({},r,o))},n.attrs=function(o){return qr(e,t,ot({},r,{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n}function na(e){for(var t=e.length|0,r=t|0,n=0,o;t>=4;)o=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,o=1540483477*(o&65535)+((1540483477*(o>>>16)&65535)<<16),o^=o>>>24,o=1540483477*(o&65535)+((1540483477*(o>>>16)&65535)<<16),r=1540483477*(r&65535)+((1540483477*(r>>>16)&65535)<<16)^o,t-=4,++n;switch(t){case 3:r^=(e.charCodeAt(n+2)&255)<<16;case 2:r^=(e.charCodeAt(n+1)&255)<<8;case 1:r^=e.charCodeAt(n)&255,r=1540483477*(r&65535)+((1540483477*(r>>>16)&65535)<<16)}return r^=r>>>13,r=1540483477*(r&65535)+((1540483477*(r>>>16)&65535)<<16),(r^r>>>15)>>>0}var Pr=52,Hn=function(t){return String.fromCharCode(t+(t>25?39:97))};function oa(e){var t="",r=void 0;for(r=e;r>Pr;r=Math.floor(r/Pr))t=Hn(r%Pr)+t;return Hn(r%Pr)+t}function aa(e){for(var t in e)if(ht(e[t]))return!0;return!1}function qn(e,t){for(var r=0;r<e.length;r+=1){var n=e[r];if(Array.isArray(n)&&!qn(n,t))return!1;if(ht(n)&&!gr(n))return!1}return!t.some(function(o){return ht(o)||aa(o)})}var Gn=function(t){return oa(na(t))},Kn=function(){function e(t,r,n){Ft(this,e),this.rules=t,this.isStatic=qn(t,r),this.componentId=n,xr.master.hasId(n)||xr.master.deferredInject(n,[])}return e.prototype.generateAndInjectStyles=function(r,n){var o=this.isStatic,a=this.componentId,i=this.lastClassName;if(qt&&o&&typeof i=="string"&&n.hasNameForId(a,i))return i;var c=ar(this.rules,r,n),l=Gn(this.componentId+c.join(""));return n.hasNameForId(a,l)||n.inject(this.componentId,jo(c,"."+l,void 0,a),l),this.lastClassName=l,l},e.generateName=function(r){return Gn(r)},e}(),ia=function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:nr,n=r?e.theme===r.theme:!1,o=e.theme&&!n?e.theme:t||r.theme;return o},sa=/[[\].#*$><+~=|^:(),"'`-]+/g,ca=/(^-|-$)/g;function Gr(e){return e.replace(sa,"-").replace(ca,"")}function Cr(e){return typeof e=="string"&&!0}function la(e){return Cr(e)?"styled."+e:"Styled("+Dn(e)+")"}var Kr,Zn={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},ua={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Qn=(Kr={},Kr[dn.exports.ForwardRef]={$$typeof:!0,render:!0},Kr),da=Object.defineProperty,fa=Object.getOwnPropertyNames,Jn=Object.getOwnPropertySymbols,ha=Jn===void 0?function(){return[]}:Jn,ma=Object.getOwnPropertyDescriptor,pa=Object.getPrototypeOf,va=Object.prototype,ga=Array.prototype;function Un(e,t,r){if(typeof t!="string"){var n=pa(t);n&&n!==va&&Un(e,n,r);for(var o=ga.concat(fa(t),ha(t)),a=Qn[e.$$typeof]||Zn,i=Qn[t.$$typeof]||Zn,c=o.length,l=void 0,h=void 0;c--;)if(h=o[c],!ua[h]&&!(r&&r[h])&&!(i&&i[h])&&!(a&&a[h])&&(l=ma(t,h),l))try{da(e,h,l)}catch{}return e}return e}function ya(e){return!!(e&&e.prototype&&e.prototype.isReactComponent)}var Zr=A.exports.createContext(),wa=Zr.Consumer;(function(e){vr(t,e);function t(r){Ft(this,t);var n=rr(this,e.call(this,r));return n.getContext=Cn(n.getContext.bind(n)),n.renderInner=n.renderInner.bind(n),n}return t.prototype.render=function(){return this.props.children?m(Zr.Consumer,{children:this.renderInner}):null},t.prototype.renderInner=function(n){var o=this.getContext(this.props.theme,n);return m(Zr.Provider,{value:o,children:this.props.children})},t.prototype.getTheme=function(n,o){if(ht(n)){var a=n(o);return a}if(n===null||Array.isArray(n)||(typeof n=="undefined"?"undefined":_n(n))!=="object")throw new xt(8);return ot({},o,n)},t.prototype.getContext=function(n,o){return this.getTheme(n,o)},t})(A.exports.Component);var eo=A.exports.createContext(),ba=eo.Consumer;(function(e){vr(t,e);function t(r){Ft(this,t);var n=rr(this,e.call(this,r));return n.getContext=Cn(n.getContext),n}return t.prototype.getContext=function(n,o){if(n)return n;if(o)return new xr(o);throw new xt(4)},t.prototype.render=function(){var n=this.props,o=n.children,a=n.sheet,i=n.target;return m(eo.Provider,{value:this.getContext(a,i),children:o})},t})(A.exports.Component);var to={};function xa(e,t,r){var n=typeof t!="string"?"sc":Gr(t),o=(to[n]||0)+1;to[n]=o;var a=n+"-"+e.generateName(n+o);return r?r+"-"+a:a}var Pa=function(e){vr(t,e);function t(){Ft(this,t);var r=rr(this,e.call(this));return r.attrs={},r.renderOuter=r.renderOuter.bind(r),r.renderInner=r.renderInner.bind(r),r}return t.prototype.render=function(){return m(ba,{children:this.renderOuter})},t.prototype.renderOuter=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:xr.master;return this.styleSheet=n,this.props.forwardedComponent.componentStyle.isStatic?this.renderInner():m(wa,{children:this.renderInner})},t.prototype.renderInner=function(n){var o=this.props.forwardedComponent,a=o.componentStyle,i=o.defaultProps;o.displayName;var c=o.foldedComponentIds,l=o.styledComponentId,h=o.target,w=void 0;a.isStatic?w=this.generateAndInjectStyles(nr,this.props):w=this.generateAndInjectStyles(ia(this.props,n,i)||nr,this.props);var g=this.props.as||this.attrs.as||h,f=Cr(g),u={},y=ot({},this.props,this.attrs),x=void 0;for(x in y)x==="forwardedComponent"||x==="as"||(x==="forwardedRef"?u.ref=y[x]:x==="forwardedAs"?u.as=y[x]:(!f||_o(x))&&(u[x]=y[x]));return this.props.style&&this.attrs.style&&(u.style=ot({},this.attrs.style,this.props.style)),u.className=Array.prototype.concat(c,l,w!==l?w:null,this.props.className,this.attrs.className).filter(Boolean).join(" "),A.exports.createElement(g,u)},t.prototype.buildExecutionContext=function(n,o,a){var i=this,c=ot({},o,{theme:n});return a.length&&(this.attrs={},a.forEach(function(l){var h=l,w=!1,g=void 0,f=void 0;ht(h)&&(h=h(c),w=!0);for(f in h)g=h[f],w||ht(g)&&!ya(g)&&!gr(g)&&(g=g(c)),i.attrs[f]=g,c[f]=g})),c},t.prototype.generateAndInjectStyles=function(n,o){var a=o.forwardedComponent,i=a.attrs,c=a.componentStyle;if(a.warnTooManyClasses,c.isStatic&&!i.length)return c.generateAndInjectStyles(nr,this.styleSheet);var l=c.generateAndInjectStyles(this.buildExecutionContext(n,o,i),this.styleSheet);return l},t}(A.exports.Component);function ro(e,t,r){var n=gr(e),o=!Cr(e),a=t.displayName,i=a===void 0?la(e):a,c=t.componentId,l=c===void 0?xa(Kn,t.displayName,t.parentComponentId):c,h=t.ParentComponent,w=h===void 0?Pa:h,g=t.attrs,f=g===void 0?Nr:g,u=t.displayName&&t.componentId?Gr(t.displayName)+"-"+t.componentId:t.componentId||l,y=n&&e.attrs?Array.prototype.concat(e.attrs,f).filter(Boolean):f,x=new Kn(n?e.componentStyle.rules.concat(r):r,y,u),S=void 0,K=function(B,Z){return m(w,ye(de({},B),{forwardedComponent:S,forwardedRef:Z}))};return K.displayName=i,S=I.forwardRef(K),S.displayName=i,S.attrs=y,S.componentStyle=x,S.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Nr,S.styledComponentId=u,S.target=n?e.target:e,S.withComponent=function(B){var Z=t.componentId,q=Ro(t,["componentId"]),Ne=Z&&Z+"-"+(Cr(B)?B:Gr(Dn(B))),Le=ot({},q,{attrs:y,componentId:Ne,ParentComponent:w});return ro(B,Le,r)},Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(B){this._foldedDefaultProps=n?Do(e.defaultProps,B):B}}),S.toString=function(){return"."+S.styledComponentId},o&&Un(S,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,styledComponentId:!0,target:!0,withComponent:!0}),S}var Ca=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Qr=function(t){return qr(ro,t)};Ca.forEach(function(e){Qr[e]=Qr(e)});qt&&(window.scCGSHMRCache={});var Kt=Qr,Sa="/react-photo-view/assets/1.67fc9a95.jpg",Jr="/react-photo-view/assets/2.621f0666.jpg",ka="/react-photo-view/assets/3.42cec26f.jpg",Sr="/react-photo-view/assets/4.f42b5f2c.jpg",Ur="/react-photo-view/assets/5.bd775e52.jpg",Ia="/react-photo-view/assets/6.8fb761f7.jpg";const Bt=[Sa,Jr,ka,Sr,Ur,Ia],He=Kt.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`,Pt=Kt.div`
  margin-right: 20px;
  margin-bottom: 20px;
  width: 100px;
  height: 100px;
  cursor: pointer;
  background: url('${e=>e.viewImage}') no-repeat center;
  background-size: cover;
`,Ct=Kt.button`
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

  ${({primary:e})=>e&&Wn`
      color: white;
      border: 1px solid #1890ff;
      background: #1890ff;

      &:hover {
        color: white;
        background: #40a9ff;
        border-color: #40a9ff;
      }
    `}
`,Aa=Kt.div`
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
`,Ma=Kt.img`
  width: 100px;
  height: 100px;
`;function Ea(){return m(Ye,{children:m(He,{children:Bt.map((e,t)=>m(We,{src:e,children:m(Pt,{viewImage:e})},t))})})}const _a=`import React from 'react';
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
`,Da=void 0,Oa=void 0,Ra={code:_a,title:Da,desc:Oa},Ta=!0;var Na=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:Ra,isDemo:Ta,default:Ea}),Fa="/react-photo-view/assets/dog.6cccf4ed.png";const Ba=e=>{const[t,r]=I.useState(!1);return I.useEffect(()=>{document.onfullscreenchange=()=>{r(Boolean(document.fullscreenElement))}},[]),m("svg",ye(de({className:"PhotoView-PhotoSlider__toolbarIcon",fill:"white",width:"44",height:"44",viewBox:"0 0 768 768"},e),{children:t?m("path",{d:"M511.5 256.5h96v63h-159v-159h63v96zM448.5 607.5v-159h159v63h-96v96h-63zM256.5 256.5v-96h63v159h-159v-63h96zM160.5 511.5v-63h159v159h-63v-96h-96z"}):m("path",{d:"M448.5 160.5h159v159h-63v-96h-96v-63zM544.5 544.5v-96h63v159h-159v-63h96zM160.5 319.5v-159h159v63h-96v96h-63zM223.5 448.5v96h96v63h-159v-159h63z"})}))};function $a(){const[e,t]=I.useState(Bt);function r(){if(document.fullscreenElement)document.exitFullscreen();else{const n=document.getElementById("PhotoView_Slider");n&&n.requestFullscreen()}}return m(Ye,{toolbarRender:({rotate:n,onRotate:o,onScale:a,scale:i,index:c})=>bt(co,{children:[m("svg",{className:"PhotoView-PhotoSlider__toolbarIcon",width:"44",height:"44",viewBox:"0 0 768 768",fill:"white",onClick:()=>a(i+.2),children:m("path",{d:"M384 640.5q105 0 180.75-75.75t75.75-180.75-75.75-180.75-180.75-75.75-180.75 75.75-75.75 180.75 75.75 180.75 180.75 75.75zM384 64.5q132 0 225.75 93.75t93.75 225.75-93.75 225.75-225.75 93.75-225.75-93.75-93.75-225.75 93.75-225.75 225.75-93.75zM415.5 223.5v129h129v63h-129v129h-63v-129h-129v-63h129v-129h63z"})}),m("svg",{className:"PhotoView-PhotoSlider__toolbarIcon",width:"44",height:"44",viewBox:"0 0 768 768",fill:"white",onClick:()=>a(i-.2),children:m("path",{d:"M384 640.5q105 0 180.75-75.75t75.75-180.75-75.75-180.75-180.75-75.75-180.75 75.75-75.75 180.75 75.75 180.75 180.75 75.75zM384 64.5q132 0 225.75 93.75t93.75 225.75-93.75 225.75-225.75 93.75-225.75-93.75-93.75-225.75 93.75-225.75 225.75-93.75zM223.5 352.5h321v63h-321v-63z"})}),m("svg",{className:"PhotoView-PhotoSlider__toolbarIcon",onClick:()=>o(n+90),width:"44",height:"44",fill:"white",viewBox:"0 0 768 768",children:m("path",{d:"M565.5 202.5l75-75v225h-225l103.5-103.5c-34.5-34.5-82.5-57-135-57-106.5 0-192 85.5-192 192s85.5 192 192 192c84 0 156-52.5 181.5-127.5h66c-28.5 111-127.5 192-247.5 192-141 0-255-115.5-255-256.5s114-256.5 255-256.5c70.5 0 135 28.5 181.5 75z"})}),document.fullscreenEnabled&&m(Ba,{onClick:r}),m("svg",{className:"PhotoView-PhotoSlider__toolbarIcon",onClick:()=>{t(l=>{const h=[...l];return h.splice(c,1,Fa),h})},xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",fill:"white",viewBox:"0 0 768 768",children:m("path",{d:"M384 559.5c-75 0-138-45-163.5-111h327c-25.5 66-88.5 111-163.5 111zM271.5 352.5c-27 0-48-21-48-48s21-48 48-48 48 21 48 48-21 48-48 48zM496.5 352.5c-27 0-48-21-48-48s21-48 48-48 48 21 48 48-21 48-48 48zM384 640.5c141 0 256.5-115.5 256.5-256.5s-115.5-256.5-256.5-256.5-256.5 115.5-256.5 256.5 115.5 256.5 256.5 256.5zM384 64.5c177 0 319.5 142.5 319.5 319.5s-142.5 319.5-319.5 319.5-319.5-142.5-319.5-319.5 142.5-319.5 319.5-319.5z"})})]}),children:m(He,{children:e.map((n,o)=>m(We,{src:n,children:m(Pt,{viewImage:n})},o))})})}const Va=`import React from 'react';
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
`,za=void 0,La=void 0,ja={code:Va,title:za,desc:La},Xa=!0;var Ya=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:ja,isDemo:Xa,default:$a});function Wa(){return m(Ye,{children:m(He,{children:m(We,{src:Sr,children:m(Ct,{primary:!0,children:"\u70B9\u51FB\u9884\u89C8"})})})})}const Ha=`import React from 'react';
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
`,qa=void 0,Ga=void 0,Ka={code:Ha,title:qa,desc:Ga},Za=!0;var Qa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:Ka,isDemo:Za,default:Wa});function Ja(){return m(Ye,{loop:4,children:m(He,{children:Bt.slice(0,3).map((e,t)=>m(We,{src:e,children:m(Pt,{viewImage:e})},t))})})}const Ua=`import React from 'react';
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
`,ei=void 0,ti=void 0,ri={code:Ua,title:ei,desc:ti},ni=!0;var oi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:ri,isDemo:ni,default:Ja});function ai(){return m(Ye,{maskOpacity:.5,children:m(He,{children:m(We,{src:Jr,children:m(Pt,{viewImage:Jr})})})})}const ii=`import React from 'react';
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
`,si=void 0,ci=void 0,li={code:ii,title:si,desc:ci},ui=!0;var di=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:li,isDemo:ui,default:ai});function fi(){return m(Ye,{maskOpacity:.5,bannerVisible:!1,children:m(He,{children:m(We,{src:Ur,children:m(Pt,{viewImage:Ur})})})})}const hi=`import React from 'react';
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
`,mi=void 0,pi=void 0,vi={code:hi,title:mi,desc:pi},gi=!0;var yi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:vi,isDemo:gi,default:fi});function wi(){return m(Ye,{pullClosable:!1,maskClosable:!1,children:m(He,{children:m(We,{src:Sr,children:m(Pt,{viewImage:Sr})})})})}const bi=`import React from 'react';
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
`,xi=void 0,Pi=void 0,Ci={code:bi,title:xi,desc:Pi},Si=!0;var ki=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:Ci,isDemo:Si,default:wi}),Ii="/react-photo-view/assets/default-photo.136a6935.svg";function Ai(){return bt(He,{children:[m(Ye,{children:m(We,{src:"/error.png",children:m(Ct,{children:"\u65E0\u9ED8\u8BA4\u56FE"})})}),m(Ye,{brokenElement:m(Ma,{src:Ii}),children:m(We,{src:"/error.png",children:m(Ct,{children:"\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u56FE"})})})]})}const Mi=`import React from 'react';
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
`,Ei=void 0,_i=void 0,Di={code:Mi,title:Ei,desc:_i},Oi=!0;var Ri=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:Di,isDemo:Oi,default:Ai});function Ti(){const[e,t]=I.useState(!1),[r,n]=I.useState(0);function o(){t(!0)}function a(){t(!1)}return bt(He,{children:[m(Ct,{onClick:()=>n(2),children:"setPhotoIndex(2)"}),m(Ct,{onClick:()=>n(4),children:"setPhotoIndex(4)"}),m(Ct,{onClick:o,primary:!0,children:"\u6253\u5F00 PhotoSlider"}),m(yn,{images:Bt.map(i=>({src:i,key:i})),visible:e,onClose:a,index:r,onIndexChange:n})]})}const Ni=`import React from 'react';
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
`,Fi=void 0,Bi=void 0,$i={code:Ni,title:Fi,desc:Bi},Vi=!0;var zi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:$i,isDemo:Vi,default:Ti});function Li(){return m(Ye,{children:m(He,{children:Bt.map((e,t)=>m(We,{src:e,children:t<2?m(Pt,{viewImage:e}):void 0},t))})})}const ji=`import React from 'react';
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
`,Xi=void 0,Yi=void 0,Wi={code:ji,title:Xi,desc:Yi},Hi=!0;var qi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:Wi,isDemo:Hi,default:Li});function Gi(){return m(Ye,{overlayRender:({rotate:e,onRotate:t,scale:r,index:n})=>bt(Aa,{children:[bt("div",{children:[m("div",{children:m("a",{onClick:()=>t(e+90),children:"\u65CB\u8F6C"})}),"\u65CB\u8F6C\u89D2\u5EA6 ",e]}),bt("div",{children:["\u7F29\u653E\uFF1A",r]}),bt("div",{children:["\u63CF\u8FF0\uFF1A",Bt[n]]})]}),children:m(He,{children:Bt.map((e,t)=>m(We,{src:e,children:m(Pt,{viewImage:e})},t))})})}const Ki=`import React from 'react';
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
`,Zi=void 0,Qi=void 0,Ji={code:Ki,title:Zi,desc:Qi},Ui=!0;var es=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:Ji,isDemo:Ui,default:Gi});const ts=Kt.div`
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
`,kr=400;function rs(){return m(Ye,{maskOpacity:.5,loop:!1,children:m(He,{children:m(We,{width:kr,height:kr,render:({scale:e,attrs:t})=>{const n=(t.style.width-kr)/kr,o=e===1?e+n:1+n;return m(ts,ye(de({},t),{children:bt("div",{style:{transform:`scale(${o})`},children:[m("div",{children:"\u81EA\u5B9A\u4E49\u8282\u70B9"}),m(Ct,{children:"\u6309\u94AE"}),m("input",{onMouseDown:a=>a.stopPropagation()})]})}))},children:m(Ct,{primary:!0,children:"\u81EA\u5B9A\u4E49\u6E32\u67D3"})})})})}const ns=`import React from 'react';
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
`,os=void 0,as=void 0,is={code:ns,title:os,desc:as},ss=!0;var cs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:is,isDemo:ss,default:rs});const ls=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),ee("div",de({},r))},qe=ls("Demo"),us={},ds="wrapper";function no(r){var n=r,{components:e}=n,t=un(n,["components"]);return ee(ds,ye(de(de({},us),t),{components:e,mdxType:"MDXLayout"}),ee("h3",null,"\u57FA\u672C\u4F7F\u7528"),ee(qe,ye(de({},Na),{mdxType:"Demo"})),ee("h3",null,"\u81EA\u5B9A\u4E49\u5DE5\u5177\u680F"),ee(qe,ye(de({},Ya),{mdxType:"Demo"})),ee("h3",null,"\u901A\u8FC7\u6309\u94AE\u89E6\u53D1"),ee(qe,ye(de({},Qa),{mdxType:"Demo"})),ee("h3",null,"\u7981\u7528\u5FAA\u73AF\u9884\u89C8"),ee(qe,ye(de({},oi),{mdxType:"Demo"})),ee("h3",null,"\u81EA\u5B9A\u4E49\u8499\u5C42\u900F\u660E\u5EA6"),ee(qe,ye(de({},di),{mdxType:"Demo"})),ee("h3",null,"\u4E0D\u663E\u793A\u9876\u90E8\u6309\u94AE\u533A\u57DF"),ee(qe,ye(de({},yi),{mdxType:"Demo"})),ee("h3",null,"\u7981\u7528\u70B9\u51FB\u8499\u5C42\u5173\u95ED"),ee(qe,ye(de({},ki),{mdxType:"Demo"})),ee("h3",null,"\u81EA\u5B9A\u4E49\u52A0\u8F7D\u5931\u8D25\u6E32\u67D3"),ee(qe,ye(de({},Ri),{mdxType:"Demo"})),ee("h3",null,"\u76F4\u63A5\u4F7F\u7528 PhotoSlider"),ee(qe,ye(de({},zi),{mdxType:"Demo"})),ee("h3",null,"\u4E24\u5F20\u7F29\u7565\u56FE\u9884\u89C8\u66F4\u591A"),ee(qe,ye(de({},qi),{mdxType:"Demo"})),ee("h3",null,"\u81EA\u5B9A\u4E49\u63CF\u8FF0"),ee(qe,ye(de({},es),{mdxType:"Demo"})),ee("h3",null,"\u81EA\u5B9A\u4E49\u6E32\u67D3\u8282\u70B9"),ee(qe,ye(de({},cs),{mdxType:"Demo"})))}no.isMDXComponent=!0;var fs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:no});const hs={};hs.main=fs;export{hs as default};
