var no=Object.defineProperty,oo=Object.defineProperties;var ao=Object.getOwnPropertyDescriptors;var hr=Object.getOwnPropertySymbols;var an=Object.prototype.hasOwnProperty,sn=Object.prototype.propertyIsEnumerable;var cn=(e,t,r)=>t in e?no(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ce=(e,t)=>{for(var r in t||(t={}))an.call(t,r)&&cn(e,r,t[r]);if(hr)for(var r of hr(t))sn.call(t,r)&&cn(e,r,t[r]);return e},be=(e,t)=>oo(e,ao(t));var ln=(e,t)=>{var r={};for(var n in e)an.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&hr)for(var n of hr(e))t.indexOf(n)<0&&sn.call(e,n)&&(r[n]=e[n]);return r};import{R as E,r as A,a as io,b as un,j as m,d as yt,F as so,c as ee}from"./index.7ad59050.js";function Se(){return Se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Se.apply(this,arguments)}function Mr(e,t){if(e==null)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(o[r]=e[r]);return o}function tr(e){var t=A.exports.useRef({fn:e,curr:void 0}).current;if(t.fn=e,!t.curr){var r=Object.create(null);Object.keys(e).forEach(function(n){r[n]=function(){var o;return(o=t.fn[n]).call.apply(o,[t.fn].concat([].slice.call(arguments)))}}),t.curr=r}return t.curr}function mr(e){return A.exports.useReducer(function(t,r){return Se({},t,typeof r=="function"?r(t):r)},e)}var dn=E.createContext(void 0),rt=typeof document!="undefined"&&"ontouchstart"in document.documentElement;function Wt(e,t,r){var n=A.exports.useRef(t);n.current=t,A.exports.useEffect(function(){function o(a){n.current(a)}return e&&window.addEventListener(e,o,r),function(){e&&window.removeEventListener(e,o)}},[e])}function fn(e){var t=A.exports.useRef({initial:!1,fn:void 0}).current;return t.initial||(t.initial=!0,t.fn=e()),t.fn}var co=["className","children"],lo=function(e){var t=e.className,r=e.children,n=Mr(e,co),o=fn(function(){return document.createElement("section")});return E.useEffect(function(){return document.body.appendChild(o),function(){document.body.removeChild(o)}},[]),io.exports.createPortal(E.createElement("div",Se({className:"PhotoView-SlidePortal"+(t?" "+t:""),role:"dialog",id:"PhotoView_Slider"},n),r),o)};function uo(e){return E.createElement("svg",Se({width:"44",height:"44",viewBox:"0 0 768 768"},e),E.createElement("path",{fill:"#FFF",d:"M607.5 205.5l-178.5 178.5 178.5 178.5-45 45-178.5-178.5-178.5 178.5-45-45 178.5-178.5-178.5-178.5 45-45 178.5 178.5 178.5-178.5z"}))}function fo(e){return E.createElement("svg",Se({width:"44",height:"44",viewBox:"0 0 768 768"},e),E.createElement("path",{d:"M640.5 352.5v63h-390l178.5 180-45 45-256.5-256.5 256.5-256.5 45 45-178.5 180h390z"}))}function ho(e){return E.createElement("svg",Se({width:"44",height:"44",viewBox:"0 0 768 768"},e),E.createElement("path",{d:"M384 127.5l256.5 256.5-256.5 256.5-45-45 178.5-180h-390v-63h390l-178.5-180z"}))}function mo(){return A.exports.useEffect(function(){var e=function(){var r=navigator.userAgent;if(r.includes("iPhone")&&r.includes("Safari")){var n=window.scrollY,o=document.documentElement,a=o.style,i=hn(o),c=a.height;return a.height=window.innerHeight+"px",function(){i(),a.height=c,window.scrollTo(0,n)}}}(),t=hn(document.body);return function(){t(),e==null||e()}},[]),null}function hn(e){var t=e.style,r=t.overflow;return t.overflow="hidden",function(){t.overflow=r}}function mn(e){var t=e.touches[0],r=t.clientX,n=t.clientY;if(e.touches.length>=2){var o=e.touches[1],a=o.clientX,i=o.clientY;return[(r+a)/2,(n+i)/2,Math.sqrt(Math.pow(a-r,2)+Math.pow(i-n,2))]}return[r,n,0]}function rr(e,t,r,n){var o=r*t,a=(o-n)/2;return o<=n?"small":e>0&&a-e<=0?"before":e<0&&a+e<=0?"after":void 0}function pr(e,t,r,n){var o=rr(e,t,r,n),a=(r*t-n)/2,i=e;return o==="small"?i=0:o==="before"?i=a:o==="after"&&(i=-a),[i,o]}function Er(e,t,r,n,o,a,i,c,l,h){l===void 0&&(l=0),h===void 0&&(h=0);var w=window,g=w.innerWidth,d=w.innerHeight,u=g/2,y=d/2;return{x:r-c/i*(r-(u+e))-u+(rr(e,c,o,g)?l/2:l),y:n-c/i*(n-(y+t))-y+(rr(t,c,a,d)?h/2:h),lastCX:r,lastCY:n}}function po(e,t,r){if(e){var n=window;return(t-n.innerWidth)/2+e.clientX+"px "+((r-n.innerHeight)/2+e.clientY)+"px"}}function _r(e,t,r){var n=t,o=r,a=e%180!=0;return a&&(n=r,o=t),[n,o,a]}function Dr(e,t,r){var n,o,a=0,i=_r(r,window.innerWidth,window.innerHeight),c=i[0],l=i[1],h=e/t*l,w=t/e*c;return e<c&&t<l?(n=e,o=t):e<c&&t>=l?(n=h,o=l):e>=c&&t<l||e/t>c/l?(n=c,o=w):t/e>=3&&!i[2]?(n=c,a=((o=w)-l)/2):(n=h,o=l),{width:Math.floor(n),height:Math.floor(o),x:0,y:a,easing:!0}}function vr(e,t){var r=t.leading,n=r!==void 0&&r,o=t.maxWait,a=t.wait,i=a===void 0?o||0:a,c=A.exports.useRef(e);c.current=e;var l=A.exports.useRef(0),h=A.exports.useRef(),w=function(){return h.current&&clearTimeout(h.current)},g=A.exports.useCallback(function(){var d=[].slice.call(arguments),u=Date.now();function y(){l.current=u,w(),c.current.apply(null,d)}var b=l.current,S=u-b;if(b===0&&(n&&y(),l.current=u),o!==void 0){if(S>o)return void y()}else S<i&&(l.current=u);w(),h.current=setTimeout(function(){y(),l.current=0},i)},[i,o,n]);return g.cancel=w,g}function Rt(e,t,r){var n=t-e;if(n!==0){var o=Date.now(),a=0,i=function(){var l,h=Math.min(1,(Date.now()-o)/400);r(e+((l=h)===1?1:1-Math.pow(2,-10*l))*n)&&h<1?c():cancelAnimationFrame(a)};c()}function c(){a=requestAnimationFrame(i)}}var pn=function(){var e=A.exports.useRef(!1);return A.exports.useEffect(function(){return e.current=!0,function(){e.current=!1}},[]),e};function vo(){return E.createElement("div",{className:"PhotoView__Spinner"},E.createElement("svg",{viewBox:"0 0 32 32",width:"36",height:"36",fill:"white"},E.createElement("path",{opacity:".25",d:"M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"}),E.createElement("path",{d:"M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"})))}var go=["src","loaded","broken","className","onPhotoLoad","loadingElement","brokenElement"];function yo(e){var t=e.src,r=e.loaded,n=e.broken,o=e.className,a=e.onPhotoLoad,i=e.loadingElement,c=e.brokenElement,l=Mr(e,go),h=pn();function w(d){var u=d.target;h.current&&a({loaded:!0,naturalWidth:u.naturalWidth,naturalHeight:u.naturalHeight})}function g(){h.current&&a({broken:!0})}return A.exports.useEffect(function(){var d=new Image;d.onload=w,d.onerror=g,d.src=t},[]),t&&!n?r?E.createElement("img",Se({className:"PhotoView__Photo"+(o?" "+o:""),src:t,alt:""},l)):i||E.createElement(vo,null):c?typeof c=="function"?c({src:t}):c:null}var wo={naturalWidth:void 0,naturalHeight:void 0,width:1,height:1,loaded:void 0,broken:!1,x:0,y:0,touched:!1,maskTouched:!1,CX:0,CY:0,lastX:0,lastY:0,lastCX:0,lastCY:0,touchTime:0,touchLength:0,easing:!0,stopRaf:!0,currReach:void 0};function bo(e){var t,r,n,o,a,i,c,l,h=e.src,w=e.render,g=e.width,d=e.height,u=e.wrapClassName,y=e.className,b=e.style,S=e.loadingElement,K=e.brokenElement,re=e.rotate,V=re===void 0?0:re,Z=e.scale,q=Z===void 0?1:Z,Ne=e.onPhotoTap,ze=e.onMaskTap,ke=e.onReachMove,Nt=e.onReachUp,Pt=e.onPhotoResize,le=e.onWheel,ie=e.isActive,Ct=e.activeAnimation,Qt=e.originRect,O=mr(wo),j=O[0],B=O[1],xe=A.exports.useRef(),ue=pn(),_e=j.naturalWidth,Pe=_e===void 0?g||1:_e,Fe=j.naturalHeight,ot=Fe===void 0?d||1:Fe,ve=j.width,de=j.height,Be=j.loaded,Ie=Be===void 0?!h:Be,Y=j.broken,oe=j.x,fe=j.y,ne=j.touched,$e=j.stopRaf,ge=j.maskTouched,Ae=j.CX,he=j.CY,at=j.lastX,it=j.lastY,ye=j.lastCX,Ve=j.lastCY,Oe=j.touchTime,ft=j.touchLength,ht=j.easing,mt=j.currReach,Ft=vr(function(f,k,_){if(_===void 0&&(_=0),(ne||ge)&&ie){var Q=_r(V,ve,de),we=Q[0],v=Q[1];if(_===0&&xe.current===void 0){var C=Math.abs(f-Ae)<=20,L=Math.abs(k-he)<=20;if(C&&L)return void B({lastCX:f,lastCY:k});xe.current=C?k>he?"pull":"push":"x"}var z=f-ye,W=k-Ve,X=void 0;if(_===0){var G=rr(z+at,q,we,window.innerWidth),Me=rr(W+it,q,v,window.innerHeight);X=function(Xe,$t,Vt,Mt){return $t&&Xe==="x"||Mt==="x"?"x":Vt&&(Xe==="pull"||Xe==="push")||Mt==="y"?"y":void 0}(xe.current,G,Me,mt),X!==void 0&&ke(X,f,k,q)}if(X==="x"||ge)B({currReach:"x"});else{var me=Math.max(Math.min(q+(_-ft)/100/2*q,Math.max(6,Pe/ve)),.8);q!==me&&le(me);var Ze=Er(oe,fe,f,k,ve,de,q,me,z,W);B(Se({touchLength:_,currReach:X},Ze))}}},{maxWait:8}),pt=(a=function(f){return!$e&&!ne&&(ue.current&&B({x:f,easing:!1}),ue.current)},i=function(f){return!$e&&!ne&&(ue.current&&B({y:f,easing:!1}),ue.current)},c=function(f){return ue.current&&le(f),!ne&&ue.current},l=tr({X:function(f){return a(f)},Y:function(f){return i(f)},S:function(f){return c(f)}}),function(f,k,_,Q,we,v,C,L,z){if(C<1)return Rt(f,0,l.X),Rt(k,0,l.Y),void Rt(C,1,l.S);var W=Date.now()-z,X=_r(L,we,v),G=X[0],Me=X[1],me=window,Ze=me.innerWidth,Xe=me.innerHeight;if(W>=200){var $t=pr(f,C,G,Ze);$t[1]&&Rt(f,$t[0],l.X);var Vt=pr(k,C,Me,Xe);Vt[1]&&Rt(k,Vt[0],l.Y)}else{var Mt=(f-_)/W,cr=(k-Q)/W,Jt=Math.sqrt(Math.pow(Mt,2)+Math.pow(cr,2)),Et=!1,Qe=!1;(function(Je,je){var Le=Je,ct=0,Ue=void 0,_t=0,vt=function(Ye){Ue||(Ue=Ye);var Dt=Ye-Ue,Lt=Math.sign(Je),gt=-.002*Lt,I=Math.sign(-Le)*Math.pow(Le,2)*2e-4,P=Le*Dt+(gt+I)*Math.pow(Dt,2)/2;ct+=P,Ue=Ye,Lt*(Le+=(gt+I)*Dt)<=0?jt():je(ct)?et():jt()};function et(){_t=requestAnimationFrame(vt)}function jt(){cancelAnimationFrame(_t)}et()})(Jt,function(Je){var je=f+Je*(Mt/Jt),Le=k+Je*(cr/Jt),ct=pr(je,C,G,Ze),Ue=ct[0],_t=ct[1],vt=pr(Le,C,Me,Xe),et=vt[0],jt=vt[1];if(_t&&!Et&&(Et=!0,Rt(je,Ue,l.X)),jt&&!Qe&&(Qe=!0,Rt(Le,et,l.Y)),Et&&Qe)return!1;var Ye=Et||l.X(Ue),Dt=Qe||l.Y(et);return Ye&&Dt})}}),st=(t=function(f,k){Ne==null||Ne(f,k)},r=function(f,k){if(mt===void 0){var _=q!==1?1:Math.max(2,Pe/ve),Q=Er(oe,fe,f,k,ve,de,q,_);le(_),B(Se({CX:Ae,CY:he},Q,_<=1&&{x:0,y:0}))}},n=A.exports.useRef(0),o=vr(function(){n.current=0,t.apply(void 0,[].slice.call(arguments))},{wait:300}),function(){var f=[].slice.call(arguments);n.current+=1,o.apply(void 0,f),n.current>=2&&(o.cancel(),n.current=0,r.apply(void 0,f))});function St(f,k){if(xe.current=void 0,(ne||ge)&&ie){var _=Ae!==f||he!==k,Q=Math.max(Math.min(q,Math.max(6,Pe/ve)),1);Q!==q&&le(Q),B({touched:!1,maskTouched:!1,easing:!0,stopRaf:!1,currReach:void 0}),pt(oe,fe,at,it,ve,de,q,V,Oe),Nt==null||Nt(f,k),_||(ne&&Ne?st(f,k):ge&&ze&&ze(f,k))}}function kt(f,k,_){_===void 0&&(_=0),B({touched:!0,CX:f,CY:k,lastCX:f,lastCY:k,lastX:oe,lastY:fe,touchLength:_,touchTime:Date.now()})}function It(f,k){B({maskTouched:!0,CX:f,CY:k,lastX:oe,lastY:fe})}Wt(rt?void 0:"mousemove",function(f){f.preventDefault(),Ft(f.clientX,f.clientY)}),Wt(rt?void 0:"mouseup",function(f){St(f.clientX,f.clientY)}),Wt(rt?"touchmove":void 0,function(f){f.preventDefault();var k=mn(f);Ft.apply(void 0,k)},{passive:!1}),Wt(rt?"touchend":void 0,function(f){var k=f.changedTouches[0];St(k.clientX,k.clientY)},{passive:!1}),Wt("resize",vr(function(){Ie&&(B(Dr(Pe,ot,V)),Pt&&Pt())},{maxWait:8})),A.exports.useLayoutEffect(function(){B(Dr(Pe,ot,V))},[V]);var At=function(f,k,_,Q){var we=A.exports.useRef(!1),v=mr({leading:!0,scale:_}),C=v[0],L=C.leading,z=C.scale,W=v[1],X=vr(function(G){try{return Q(!1),W({leading:!1,scale:G}),Promise.resolve()}catch(Me){return Promise.reject(Me)}},{wait:400});return A.exports.useLayoutEffect(function(){we.current?(Q(!0),W({leading:!0}),X(_)):we.current=!0},[_]),L?[f*z,k*z,_/z]:[f*_,k*_,1]}(ve,de,q,function(f){return B({easing:f})}),Bt={className:y,onMouseDown:rt?void 0:function(f){f.preventDefault(),kt(f.clientX,f.clientY,0)},onTouchStart:rt?function(f){kt.apply(void 0,mn(f))}:void 0,onWheel:function(f){if(mt===void 0){var k=Math.max(Math.min(q-f.deltaY/100/2,Math.max(6,Pe/ve)),1),_=Er(oe,fe,f.clientX,f.clientY,ve,de,q,k);B(Se({CX:f.clientX,CY:f.clientY,stopRaf:!0},_,k<=1&&{x:0,y:0})),le(k)}},style:{width:At[0],height:At[1],transform:"translate3d("+oe+"px, "+fe+"px, 0) scale("+At[2]+") rotate("+V+"deg)",transition:ne||!ht?void 0:"transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",willChange:ie?"transform":void 0}};return E.createElement("div",{className:"PhotoView__PhotoWrap"+(u?" "+u:""),style:b},E.createElement("div",{className:"PhotoView__PhotoMask",onMouseDown:!rt&&ie?function(f){It(f.clientX,f.clientY)}:void 0,onTouchStart:rt&&ie?function(f){var k=f.touches[0];It(k.clientX,k.clientY)}:void 0}),E.createElement("div",{className:"PhotoView__PhotoBox"+(Ie?Ct==="enter"?" PhotoView__animateIn":Ct==="leave"?" PhotoView__animateOut":"":""),style:{transformOrigin:Ie?po(Qt,ve,de):void 0,width:ve,height:de}},h?E.createElement(yo,Se({src:h,loaded:Ie,broken:Y},Bt,{onPhotoLoad:function(f){B(Se({},f,f.loaded&&Dr(f.naturalWidth||0,f.naturalHeight||0,V)))},loadingElement:S,brokenElement:K})):w==null?void 0:w(Bt)))}var vn={translateX:0,touched:!1,easing:!0,lastCX:void 0,lastCY:void 0,bgOpacity:void 0,lastBgOpacity:void 0,overlayVisible:!0,canPullClose:!0,photoMap:new Map};function gn(e){var t=e.loop,r=t===void 0||t,n=e.photoClosable,o=e.maskClosable,a=o===void 0||o,i=e.maskOpacity,c=i===void 0?1:i,l=e.pullClosable,h=l===void 0||l,w=e.bannerVisible,g=w===void 0||w,d=e.overlayRender,u=e.toolbarRender,y=e.className,b=e.maskClassName,S=e.photoClassName,K=e.photoWrapClassName,re=e.loadingElement,V=e.brokenElement,Z=e.images,q=e.index,Ne=q===void 0?0:q,ze=e.onIndexChange,ke=e.visible,Nt=e.onClose,Pt=mr(vn),le=Pt[0],ie=Pt[1],Ct=A.exports.useState(0),Qt=Ct[0],O=Ct[1],j=le.translateX,B=le.touched,xe=le.easing,ue=le.lastCX,_e=le.lastCY,Pe=le.bgOpacity,Fe=Pe===void 0?c:Pe,ot=le.lastBgOpacity,ve=le.overlayVisible,de=le.canPullClose,Be=le.photoMap,Ie=e.hasOwnProperty("index"),Y=Ie?Ne:Qt,oe=Ie?ze:O,fe=A.exports.useRef(Y),ne=Z.length,$e=Z[Y],ge=function(v,C){var L=A.exports.useReducer(function(G){return!G},!1)[1],z=A.exports.useRef(),W=function(G,Me){var me=A.exports.useRef(G);function Ze(Xe){me.current=Xe}return A.exports.useMemo(function(){(function(Xe){v?(Xe(v),z.current="enter"):z.current="leave"})(Ze)},[G]),[me.current,Ze]}(v),X=W[1];return{realVisible:W[0],activeAnimation:z.current,onAnimationEnd:function(){L(),z.current==="leave"&&X(!1),z.current=void 0}}}(ke),Ae=ge.realVisible,he=ge.activeAnimation,at=ge.onAnimationEnd,it=function(v,C){var L=A.exports.useState(),z=L[0],W=L[1];return A.exports.useEffect(function(){var X=C==null?void 0:C.current;if(X&&X.nodeType===1){var G=X.getBoundingClientRect();W({clientX:G.left+G.width/2,clientY:G.top+G.height/2})}else z&&!X&&W(void 0)},[v]),z}(ke,$e==null?void 0:$e.originRef);A.exports.useLayoutEffect(function(){if(Ae)return ie({easing:!1,translateX:Y*-(window.innerWidth+20)}),void(fe.current=Y);ie(vn)},[Ae]);var ye=tr({close:function(v){Nt(v),ie({overlayVisible:!0,lastBgOpacity:Fe})},changeIndex:function(v,C){C===void 0&&(C=!0);var L=r?fe.current+(v-Y):v,z=ne-1,W=Math.min(z,Math.max(L,0)),X=r?L:W,G=window.innerWidth+20;ie({touched:!1,lastCX:void 0,lastCY:void 0,translateX:-G*X,easing:C}),fe.current=X,oe==null||oe(r?v<0?z:v>z?0:v:W)},onRotate:function(v){st({rotate:v})},onScale:function(v){st({scale:Math.max(1,Math.min(6,v))})}}),Ve=ye.close,Oe=ye.changeIndex,ft=ye.onRotate,ht=ye.onScale;function mt(){n?Ve():ie({overlayVisible:!ve})}function Ft(){a&&Ve()}function pt(){var v=window;ie({translateX:-(v.innerWidth+20)*Y,lastCX:void 0,lastCY:void 0,easing:!1}),fe.current=Y}function st(v){var C=new Map(Be);if($e){var L=$e.key;ie({photoMap:C.set(L,Se({},C.get(L),v))})}}function St(v){st({scale:v})}function kt(v,C,L,z){v==="x"?function(W){var X=window;if(ue!==void 0){var G=W-ue,Me=G;!r&&(Y===0&&G>0||Y===Z.length-1&&G<0)&&(Me=G/2),ie({touched:!0,lastCX:ue,translateX:-(X.innerWidth+20)*fe.current+Me,easing:!0})}else ie({touched:!0,lastCX:W,translateX:j,easing:!0})}(C):v==="y"&&function(W,X){if(_e!==void 0){var G=Math.abs(W-_e),Me=Math.max(Math.min(c,c-G/100/4),0);ie({touched:!0,lastCY:_e,bgOpacity:X===1?Me:c,canPullClose:X===1})}else ie({touched:!0,lastCY:W,bgOpacity:Fe,canPullClose:!0})}(L,z)}function It(v,C){var L=v-(ue!=null?ue:v),z=C-(_e!=null?_e:C),W=!1;if(L<-40)Oe(Y+1);else if(L>40)Oe(Y-1);else{var X=-(window.innerWidth+20)*fe.current;Math.abs(z)>100&&de&&h&&(W=!0,Ve()),ie({touched:!1,translateX:X,lastCX:void 0,lastCY:void 0,bgOpacity:c,overlayVisible:!!W||ve})}}Wt("keydown",function(v){if(ke)switch(v.key){case"ArrowLeft":Oe(Y-1,!1);break;case"ArrowRight":Oe(Y+1,!1);break;case"Escape":Ve()}});var At="translate3d("+j+"px, 0px, 0)",Bt=function(v,C,L){return A.exports.useMemo(function(){if(L){var z=v.length;return v.concat(v).concat(v).slice(z+C-1,z+C+2)}return v.slice(Math.max(C-1,0),Math.min(C+2,v.length+1))},[v,C,L])}(Z,Y,r);if(!Ae)return null;var f=window.innerWidth,k=ve&&!he,_=ke?Fe:ot,Q=$e?Be.get($e.key):void 0,we={images:Z,index:Y,visible:ke,onClose:Ve,onIndexChange:Oe,overlayVisible:k,onRotate:ft,onScale:ht,scale:(Q==null?void 0:Q.scale)||1,rotate:(Q==null?void 0:Q.rotate)||0};return E.createElement(lo,{className:(k?"":"PhotoView-PhotoSlider__clean")+(ke?"":" PhotoView-PhotoSlider__willClose")+(y?" "+y:""),onClick:function(v){return v.stopPropagation()}},ke&&E.createElement(mo,null),E.createElement("div",{className:"PhotoView-PhotoSlider__Backdrop"+(b?" "+b:"")+(he==="enter"?" PhotoView-PhotoSlider__fadeIn":he==="leave"?" PhotoView-PhotoSlider__fadeOut":""),style:{background:"rgba(0, 0, 0, "+_+")",transition:B?void 0:"background-color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)"},onAnimationEnd:at}),g&&E.createElement("div",{className:"PhotoView-PhotoSlider__BannerWrap"},E.createElement("div",{className:"PhotoView-PhotoSlider__Counter"},Y+1," / ",ne),E.createElement("div",{className:"PhotoView-PhotoSlider__BannerRight"},u&&u(we),E.createElement(uo,{className:"PhotoView-PhotoSlider__toolbarIcon",onClick:Ve}))),Bt.map(function(v,C){var L=r||Y!==0?fe.current-1+C:Y+C;return E.createElement(bo,Se({key:r?v.key+"/"+v.src+"/"+L:v.key,src:v.src,render:v.render,width:v.width,height:v.height,onReachMove:kt,onReachUp:It,onPhotoTap:mt,onMaskTap:Ft,wrapClassName:K,className:S,style:{left:(f+20)*L+"px",transform:At,transition:B||!xe?void 0:"transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)"},loadingElement:re,brokenElement:V,onPhotoResize:pt,isActive:($e==null?void 0:$e.key)===v.key,activeAnimation:he,originRect:it,onWheel:St},Be.get(v.key)))}),!rt&&g&&E.createElement(E.Fragment,null,(r||Y!==0)&&E.createElement("div",{className:"PhotoView-PhotoSlider__ArrowLeft",onClick:function(){return Oe(Y-1,!1)}},E.createElement(fo,null)),(r||Y+1<ne)&&E.createElement("div",{className:"PhotoView-PhotoSlider__ArrowRight",onClick:function(){return Oe(Y+1,!1)}},E.createElement(ho,null))),d&&E.createElement("div",{className:"PhotoView-PhotoSlider__Overlay"},d(we)))}var xo=["children","onIndexChange","onVisibleChange"],Po={images:[],visible:!1,index:0};function He(e){var t=e.children,r=e.onIndexChange,n=e.onVisibleChange,o=Mr(e,xo),a=mr(Po),i=a[0],c=a[1],l=A.exports.useRef(0),h=i.images,w=i.visible,g=i.index,d=tr({nextId:function(){return l.current+=1},update:function(b){var S=h.findIndex(function(re){return re.key===b.key});if(S>-1){var K=h.slice();return K.splice(S,1,b),void c({images:K})}c(function(re){return{images:re.images.concat(b)}})},remove:function(b){var S=h.filter(function(K){return K.key!==b});c({images:S,index:Math.min(S.length-1,g)})},show:function(b){var S=h.findIndex(function(K){return K.key===b});c({visible:!0,index:S}),typeof n=="function"&&n(!0,S,i)}}),u=tr({close:function(){c({visible:!1}),typeof n=="function"&&n(!1,g,i)},changeIndex:function(b){c({index:b}),typeof r=="function"&&r(b,i)}}),y=A.exports.useMemo(function(){return Se({},i,d)},[i,d]);return E.createElement(dn.Provider,{value:y},t,E.createElement(gn,Se({images:h,visible:w,index:g,onIndexChange:u.changeIndex,onClose:u.close},o)))}var qe=function(e){var t=e.src,r=e.render,n=e.width,o=e.height,a=e.children,i=A.exports.useContext(dn),c=fn(function(){return i.nextId()}),l=A.exports.useState({clientX:void 0,clientY:void 0}),h=l[0],w=l[1],g=A.exports.useRef(null);A.exports.useEffect(function(){return function(){i.remove(c)}},[]);var d=tr({render:function(u){if(r)return r(u)},touchStart:function(u){var y=u.touches[0];if(w({clientX:y.clientX,clientY:y.clientY}),a){var b=a.props.onTouchStart;b&&b(u)}},touchEnd:function(u){var y=u.changedTouches[0];if(h.clientX===y.clientX&&h.clientY===y.clientY&&i.show(c),a){var b=a.props.onTouchEnd;b&&b(u)}},click:function(u){if(i.show(c),a){var y=a.props.onClick;y&&y(u)}}});return A.exports.useEffect(function(){i.update({key:c,src:t,originRef:g,render:d.render,width:n,height:o})},[t]),a?A.exports.Children.only(A.exports.cloneElement(a,rt?{onTouchStart:d.touchStart,onTouchEnd:d.touchEnd,ref:g}:{onClick:d.click,ref:g})):null};var yn={exports:{}};(function(e,t){(function(r){e.exports=r(null)})(function r(n){var o=/^\0+/g,a=/[\0\r\f]/g,i=/: */g,c=/zoo|gra/,l=/([,: ])(transform)/g,h=/,+\s*(?![^(]*[)])/g,w=/ +\s*(?![^(]*[)])/g,g=/ *[\0] */g,d=/,\r+?/g,u=/([\t\r\n ])*\f?&/g,y=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,b=/\W+/g,S=/@(k\w+)\s*(\S*)\s*/,K=/::(place)/g,re=/:(read-only)/g,V=/\s+(?=[{\];=:>])/g,Z=/([[}=:>])\s+/g,q=/(\{[^{]+?);(?=\})/g,Ne=/\s{2,}/g,ze=/([^\(])(:+) */g,ke=/[svh]\w+-[tblr]{2}/,Nt=/\(\s*(.*)\s*\)/g,Pt=/([\s\S]*?);/g,le=/-self|flex-/g,ie=/[^]*?(:[rp][el]a[\w-]+)[^]*/,Ct=/stretch|:\s*\w+\-(?:conte|avail)/,Qt=/([^-])(image-set\()/,O="-webkit-",j="-moz-",B="-ms-",xe=59,ue=125,_e=123,Pe=40,Fe=41,ot=91,ve=93,de=10,Be=13,Ie=9,Y=64,oe=32,fe=38,ne=45,$e=95,ge=42,Ae=44,he=58,at=39,it=34,ye=47,Ve=62,Oe=43,ft=126,ht=0,mt=12,Ft=11,pt=107,st=109,St=115,kt=112,It=111,At=105,Bt=99,f=100,k=112,_=1,Q=1,we=0,v=1,C=1,L=1,z=0,W=0,X=0,G=[],Me=[],me=0,Ze=null,Xe=-2,$t=-1,Vt=0,Mt=1,cr=2,Jt=3,Et=0,Qe=1,Je="",je="",Le="";function ct(I,P,x,D,p){for(var H,s,F=0,R=0,se=0,T=0,pe=0,J=0,N=0,De=0,Re=0,zt=0,Te=0,lt=0,lr=0,tt=0,$=0,We=0,Xt=0,Ut=0,U=0,Ot=x.length,er=Ot-1,Ee="",M="",te="",ae="",ur="",kr="";$<Ot;){if(N=x.charCodeAt($),$===er&&R+T+se+F!==0&&(R!==0&&(N=R===ye?de:ye),T=se=F=0,Ot++,er++),R+T+se+F===0){if($===er&&(We>0&&(M=M.replace(a,"")),M.trim().length>0)){switch(N){case oe:case Ie:case xe:case Be:case de:break;default:M+=x.charAt($)}N=xe}if(Xt===1)switch(N){case _e:case ue:case xe:case it:case at:case Pe:case Fe:case Ae:Xt=0;case Ie:case Be:case de:case oe:break;default:for(Xt=0,U=$,pe=N,$--,N=xe;U<Ot;)switch(x.charCodeAt(U++)){case de:case Be:case xe:++$,N=pe,U=Ot;break;case he:We>0&&(++$,N=pe);case _e:U=Ot}}switch(N){case _e:for(pe=(M=M.trim()).charCodeAt(0),Te=1,U=++$;$<Ot;){switch(N=x.charCodeAt($)){case _e:Te++;break;case ue:Te--;break;case ye:switch(J=x.charCodeAt($+1)){case ge:case ye:$=Dt(J,$,er,x)}break;case ot:N++;case Pe:N++;case it:case at:for(;$++<er&&x.charCodeAt($)!==N;);}if(Te===0)break;$++}switch(te=x.substring(U,$),pe===ht&&(pe=(M=M.replace(o,"").trim()).charCodeAt(0)),pe){case Y:switch(We>0&&(M=M.replace(a,"")),J=M.charCodeAt(1)){case f:case st:case St:case ne:H=P;break;default:H=G}if(U=(te=ct(P,H,te,J,p+1)).length,X>0&&U===0&&(U=M.length),me>0&&(H=Ue(G,M,Ut),s=Ye(Jt,te,H,P,Q,_,U,J,p,D),M=H.join(""),s!==void 0&&(U=(te=s.trim()).length)===0&&(J=0,te="")),U>0)switch(J){case St:M=M.replace(Nt,jt);case f:case st:case ne:te=M+"{"+te+"}";break;case pt:te=(M=M.replace(S,"$1 $2"+(Qe>0?Je:"")))+"{"+te+"}",C===1||C===2&&et("@"+te,3)?te="@"+O+te+"@"+te:te="@"+te;break;default:te=M+te,D===k&&(ae+=te,te="")}else te="";break;default:te=ct(P,Ue(P,M,Ut),te,D,p+1)}ur+=te,lt=0,Xt=0,tt=0,We=0,Ut=0,lr=0,M="",te="",N=x.charCodeAt(++$);break;case ue:case xe:if((U=(M=(We>0?M.replace(a,""):M).trim()).length)>1)switch(tt===0&&((pe=M.charCodeAt(0))===ne||pe>96&&pe<123)&&(U=(M=M.replace(" ",":")).length),me>0&&(s=Ye(Mt,M,P,I,Q,_,ae.length,D,p,D))!==void 0&&(U=(M=s.trim()).length)===0&&(M="\0\0"),pe=M.charCodeAt(0),J=M.charCodeAt(1),pe){case ht:break;case Y:if(J===At||J===Bt){kr+=M+x.charAt($);break}default:if(M.charCodeAt(U-1)===he)break;ae+=vt(M,pe,J,M.charCodeAt(2))}lt=0,Xt=0,tt=0,We=0,Ut=0,M="",N=x.charCodeAt(++$)}}switch(N){case Be:case de:if(R+T+se+F+W===0)switch(zt){case Fe:case at:case it:case Y:case ft:case Ve:case ge:case Oe:case ye:case ne:case he:case Ae:case xe:case _e:case ue:break;default:tt>0&&(Xt=1)}R===ye?R=0:v+lt===0&&D!==pt&&M.length>0&&(We=1,M+="\0"),me*Et>0&&Ye(Vt,M,P,I,Q,_,ae.length,D,p,D),_=1,Q++;break;case xe:case ue:if(R+T+se+F===0){_++;break}default:switch(_++,Ee=x.charAt($),N){case Ie:case oe:if(T+F+R===0)switch(De){case Ae:case he:case Ie:case oe:Ee="";break;default:N!==oe&&(Ee=" ")}break;case ht:Ee="\\0";break;case mt:Ee="\\f";break;case Ft:Ee="\\v";break;case fe:T+R+F===0&&v>0&&(Ut=1,We=1,Ee="\f"+Ee);break;case 108:if(T+R+F+we===0&&tt>0)switch($-tt){case 2:De===kt&&x.charCodeAt($-3)===he&&(we=De);case 8:Re===It&&(we=Re)}break;case he:T+R+F===0&&(tt=$);break;case Ae:R+se+T+F===0&&(We=1,Ee+="\r");break;case it:case at:R===0&&(T=T===N?0:T===0?N:T);break;case ot:T+R+se===0&&F++;break;case ve:T+R+se===0&&F--;break;case Fe:T+R+F===0&&se--;break;case Pe:if(T+R+F===0){if(lt===0)switch(2*De+3*Re){case 533:break;default:Te=0,lt=1}se++}break;case Y:R+se+T+F+tt+lr===0&&(lr=1);break;case ge:case ye:if(T+F+se>0)break;switch(R){case 0:switch(2*N+3*x.charCodeAt($+1)){case 235:R=ye;break;case 220:U=$,R=ge}break;case ge:N===ye&&De===ge&&U+2!==$&&(x.charCodeAt(U+2)===33&&(ae+=x.substring(U,$+1)),Ee="",R=0)}}if(R===0){if(v+T+F+lr===0&&D!==pt&&N!==xe)switch(N){case Ae:case ft:case Ve:case Oe:case Fe:case Pe:if(lt===0){switch(De){case Ie:case oe:case de:case Be:Ee+="\0";break;default:Ee="\0"+Ee+(N===Ae?"":"\0")}We=1}else switch(N){case Pe:tt+7===$&&De===108&&(tt=0),lt=++Te;break;case Fe:(lt=--Te)==0&&(We=1,Ee+="\0")}break;case Ie:case oe:switch(De){case ht:case _e:case ue:case xe:case Ae:case mt:case Ie:case oe:case de:case Be:break;default:lt===0&&(We=1,Ee+="\0")}}M+=Ee,N!==oe&&N!==Ie&&(zt=N)}}Re=De,De=N,$++}if(U=ae.length,X>0&&U===0&&ur.length===0&&P[0].length!==0&&(D!==st||P.length===1&&(v>0?je:Le)===P[0])&&(U=P.join(",").length+2),U>0){if(H=v===0&&D!==pt?function(Ur){for(var ut,Ce,dr=0,en=Ur.length,tn=Array(en);dr<en;++dr){for(var Ir=Ur[dr].split(g),fr="",Yt=0,Ar=0,rn=0,nn=0,on=Ir.length;Yt<on;++Yt)if(!((Ar=(Ce=Ir[Yt]).length)===0&&on>1)){if(rn=fr.charCodeAt(fr.length-1),nn=Ce.charCodeAt(0),ut="",Yt!==0)switch(rn){case ge:case ft:case Ve:case Oe:case oe:case Pe:break;default:ut=" "}switch(nn){case fe:Ce=ut+je;case ft:case Ve:case Oe:case oe:case Fe:case Pe:break;case ot:Ce=ut+Ce+je;break;case he:switch(2*Ce.charCodeAt(1)+3*Ce.charCodeAt(2)){case 530:if(L>0){Ce=ut+Ce.substring(8,Ar-1);break}default:(Yt<1||Ir[Yt-1].length<1)&&(Ce=ut+je+Ce)}break;case Ae:ut="";default:Ar>1&&Ce.indexOf(":")>0?Ce=ut+Ce.replace(ze,"$1"+je+"$2"):Ce=ut+Ce+je}fr+=Ce}tn[dr]=fr.replace(a,"").trim()}return tn}(P):P,me>0&&(s=Ye(cr,ae,H,I,Q,_,U,D,p,D))!==void 0&&(ae=s).length===0)return kr+ae+ur;if(ae=H.join(",")+"{"+ae+"}",C*we!=0){switch(C===2&&!et(ae,2)&&(we=0),we){case It:ae=ae.replace(re,":"+j+"$1")+ae;break;case kt:ae=ae.replace(K,"::"+O+"input-$1")+ae.replace(K,"::"+j+"$1")+ae.replace(K,":"+B+"input-$1")+ae}we=0}}return kr+ae+ur}function Ue(I,P,x){var D=P.trim().split(d),p=D,H=D.length,s=I.length;switch(s){case 0:case 1:for(var F=0,R=s===0?"":I[0]+" ";F<H;++F)p[F]=_t(R,p[F],x,s).trim();break;default:F=0;var se=0;for(p=[];F<H;++F)for(var T=0;T<s;++T)p[se++]=_t(I[T]+" ",D[F],x,s).trim()}return p}function _t(I,P,x,D){var p=P,H=p.charCodeAt(0);switch(H<33&&(H=(p=p.trim()).charCodeAt(0)),H){case fe:switch(v+D){case 0:case 1:if(I.trim().length===0)break;default:return p.replace(u,"$1"+I.trim())}break;case he:switch(p.charCodeAt(1)){case 103:if(L>0&&v>0)return p.replace(y,"$1").replace(u,"$1"+Le);break;default:return I.trim()+p.replace(u,"$1"+I.trim())}default:if(x*v>0&&p.indexOf("\f")>0)return p.replace(u,(I.charCodeAt(0)===he?"":"$1")+I.trim())}return I+p}function vt(I,P,x,D){var p,H=0,s=I+";",F=2*P+3*x+4*D;if(F===944)return function(R){var se=R.length,T=R.indexOf(":",9)+1,pe=R.substring(0,T).trim(),J=R.substring(T,se-1).trim();switch(R.charCodeAt(9)*Qe){case 0:break;case ne:if(R.charCodeAt(10)!==110)break;default:for(var N=J.split((J="",h)),De=0,T=0,se=N.length;De<se;T=0,++De){for(var Re=N[De],zt=Re.split(w);Re=zt[T];){var Te=Re.charCodeAt(0);if(Qe===1&&(Te>Y&&Te<90||Te>96&&Te<123||Te===$e||Te===ne&&Re.charCodeAt(1)!==ne))switch(isNaN(parseFloat(Re))+(Re.indexOf("(")!==-1)){case 1:switch(Re){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:Re+=Je}}zt[T++]=Re}J+=(De===0?"":",")+zt.join(" ")}}return J=pe+J+";",C===1||C===2&&et(J,1)?O+J+J:J}(s);if(C===0||C===2&&!et(s,1))return s;switch(F){case 1015:return s.charCodeAt(10)===97?O+s+s:s;case 951:return s.charCodeAt(3)===116?O+s+s:s;case 963:return s.charCodeAt(5)===110?O+s+s:s;case 1009:if(s.charCodeAt(4)!==100)break;case 969:case 942:return O+s+s;case 978:return O+s+j+s+s;case 1019:case 983:return O+s+j+s+B+s+s;case 883:return s.charCodeAt(8)===ne?O+s+s:s.indexOf("image-set(",11)>0?s.replace(Qt,"$1"+O+"$2")+s:s;case 932:if(s.charCodeAt(4)===ne)switch(s.charCodeAt(5)){case 103:return O+"box-"+s.replace("-grow","")+O+s+B+s.replace("grow","positive")+s;case 115:return O+s+B+s.replace("shrink","negative")+s;case 98:return O+s+B+s.replace("basis","preferred-size")+s}return O+s+B+s+s;case 964:return O+s+B+"flex-"+s+s;case 1023:if(s.charCodeAt(8)!==99)break;return p=s.substring(s.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),O+"box-pack"+p+O+s+B+"flex-pack"+p+s;case 1005:return c.test(s)?s.replace(i,":"+O)+s.replace(i,":"+j)+s:s;case 1e3:switch(H=(p=s.substring(13).trim()).indexOf("-")+1,p.charCodeAt(0)+p.charCodeAt(H)){case 226:p=s.replace(ke,"tb");break;case 232:p=s.replace(ke,"tb-rl");break;case 220:p=s.replace(ke,"lr");break;default:return s}return O+s+B+p+s;case 1017:if(s.indexOf("sticky",9)===-1)return s;case 975:switch(H=(s=I).length-10,F=(p=(s.charCodeAt(H)===33?s.substring(0,H):s).substring(I.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|p.charCodeAt(7))){case 203:if(p.charCodeAt(8)<111)break;case 115:s=s.replace(p,O+p)+";"+s;break;case 207:case 102:s=s.replace(p,O+(F>102?"inline-":"")+"box")+";"+s.replace(p,O+p)+";"+s.replace(p,B+p+"box")+";"+s}return s+";";case 938:if(s.charCodeAt(5)===ne)switch(s.charCodeAt(6)){case 105:return p=s.replace("-items",""),O+s+O+"box-"+p+B+"flex-"+p+s;case 115:return O+s+B+"flex-item-"+s.replace(le,"")+s;default:return O+s+B+"flex-line-pack"+s.replace("align-content","").replace(le,"")+s}break;case 973:case 989:if(s.charCodeAt(3)!==ne||s.charCodeAt(4)===122)break;case 931:case 953:if(Ct.test(I)===!0)return(p=I.substring(I.indexOf(":")+1)).charCodeAt(0)===115?vt(I.replace("stretch","fill-available"),P,x,D).replace(":fill-available",":stretch"):s.replace(p,O+p)+s.replace(p,j+p.replace("fill-",""))+s;break;case 962:if(s=O+s+(s.charCodeAt(5)===102?B+s:"")+s,x+D===211&&s.charCodeAt(13)===105&&s.indexOf("transform",10)>0)return s.substring(0,s.indexOf(";",27)+1).replace(l,"$1"+O+"$2")+s}return s}function et(I,P){var x=I.indexOf(P===1?":":"{"),D=I.substring(0,P!==3?x:10),p=I.substring(x+1,I.length-1);return Ze(P!==2?D:D.replace(ie,"$1"),p,P)}function jt(I,P){var x=vt(P,P.charCodeAt(0),P.charCodeAt(1),P.charCodeAt(2));return x!==P+";"?x.replace(Pt," or ($1)").substring(4):"("+P+")"}function Ye(I,P,x,D,p,H,s,F,R,se){for(var T,pe=0,J=P;pe<me;++pe)switch(T=Me[pe].call(gt,I,J,x,D,p,H,s,F,R,se)){case void 0:case!1:case!0:case null:break;default:J=T}if(J!==P)return J}function Dt(I,P,x,D){for(var p=P+1;p<x;++p)switch(D.charCodeAt(p)){case ye:if(I===ge&&D.charCodeAt(p-1)===ge&&P+2!==p)return p+1;break;case de:if(I===ye)return p+1}return p}function Lt(I){for(var P in I){var x=I[P];switch(P){case"keyframe":Qe=0|x;break;case"global":L=0|x;break;case"cascade":v=0|x;break;case"compress":z=0|x;break;case"semicolon":W=0|x;break;case"preserve":X=0|x;break;case"prefix":Ze=null,x?typeof x!="function"?C=1:(C=2,Ze=x):C=0}}return Lt}function gt(I,P){if(this!==void 0&&this.constructor===gt)return r(I);var x=I,D=x.charCodeAt(0);D<33&&(D=(x=x.trim()).charCodeAt(0)),Qe>0&&(Je=x.replace(b,D===ot?"":"-")),D=1,v===1?Le=x:je=x;var p,H=[Le];me>0&&(p=Ye($t,P,H,H,Q,_,0,0,0,0))!==void 0&&typeof p=="string"&&(P=p);var s=ct(G,H,P,0,0);return me>0&&(p=Ye(Xe,s,H,H,Q,_,s.length,0,0,0))!==void 0&&typeof(s=p)!="string"&&(D=0),Je="",Le="",je="",we=0,Q=1,_=1,z*D==0?s:s.replace(a,"").replace(V,"").replace(Z,"$1").replace(q,"$1").replace(Ne," ")}return gt.use=function I(P){switch(P){case void 0:case null:me=Me.length=0;break;default:if(typeof P=="function")Me[me++]=P;else if(typeof P=="object")for(var x=0,D=P.length;x<D;++x)I(P[x]);else Et=0|!!P}return I},gt.set=Lt,n!==void 0&&Lt(n),gt})})(yn);var wn=yn.exports,bn={exports:{}};(function(e,t){(function(r){e.exports=r()})(function(){return function(r){var n="/*|*/",o=n+"}";function a(i){if(i)try{r(i+"}")}catch{}}return function(c,l,h,w,g,d,u,y,b,S){switch(c){case 1:if(b===0&&l.charCodeAt(0)===64)return r(l+";"),"";break;case 2:if(y===0)return l+n;break;case 3:switch(y){case 102:case 112:return r(h[0]+l),"";default:return l+(S===0?n:"")}case-2:l.split(o).forEach(a)}}}})})(bn);var Co=bn.exports,So={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xn=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function ko(e,t){return!!(e===t||xn(e)&&xn(t))}function Io(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!ko(e[r],t[r]))return!1;return!0}function Pn(e,t){t===void 0&&(t=Io);var r,n=[],o,a=!1;function i(){for(var c=[],l=0;l<arguments.length;l++)c[l]=arguments[l];return a&&r===this&&t(c,n)||(o=e.apply(this,c),a=!0,r=this,n=c),o}return i}function Ao(e){var t={};return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var Mo=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Eo=Ao(function(e){return Mo.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function Or(e){return Object.prototype.toString.call(e).slice(8,-1)}function nr(e){return Or(e)!=="Object"?!1:e.constructor===Object&&Object.getPrototypeOf(e)===Object.prototype}function Cn(e){return Or(e)==="Array"}function Sn(e){return Or(e)==="Symbol"}/*! *****************************************************************************
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
***************************************************************************** */function kn(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),o=0,t=0;t<r;t++)for(var a=arguments[t],i=0,c=a.length;i<c;i++,o++)n[o]=a[i];return n}function In(e,t,r,n){var o=n.propertyIsEnumerable(t)?"enumerable":"nonenumerable";o==="enumerable"&&(e[t]=r),o==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function An(e,t,r){if(!nr(t))return r&&Cn(r)&&r.forEach(function(h){t=h(e,t)}),t;var n={};if(nr(e)){var o=Object.getOwnPropertyNames(e),a=Object.getOwnPropertySymbols(e);n=kn(o,a).reduce(function(h,w){var g=e[w];return(!Sn(w)&&!Object.getOwnPropertyNames(t).includes(w)||Sn(w)&&!Object.getOwnPropertySymbols(t).includes(w))&&In(h,w,g,e),h},{})}var i=Object.getOwnPropertyNames(t),c=Object.getOwnPropertySymbols(t),l=kn(i,c).reduce(function(h,w){var g=t[w],d=nr(e)?e[w]:void 0;return r&&Cn(r)&&r.forEach(function(u){g=u(d,g)}),d!==void 0&&nr(g)&&(g=An(d,g,r)),In(h,w,g,t),h},n);return l}function _o(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=null,o=e;return nr(e)&&e.extensions&&Object.keys(e).length===1&&(o={},n=e.extensions),t.reduce(function(a,i){return An(a,i,n)},o)}var Mn=function(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r},En=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Tt=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Do=function(){function e(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),nt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},gr=function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},Oo=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||!Object.prototype.hasOwnProperty.call(e,n)||(r[n]=e[n]);return r},or=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e},Rr=function(e){return(typeof e=="undefined"?"undefined":En(e))==="object"&&e.constructor===Object},Tr=Object.freeze([]),ar=Object.freeze({});function dt(e){return typeof e=="function"}function _n(e){return e.displayName||e.name||"Component"}function Ro(e){return typeof e=="function"&&!(e.prototype&&e.prototype.isReactComponent)}function yr(e){return e&&typeof e.styledComponentId=="string"}var ir=typeof process!="undefined"&&{}.SC_ATTR||"data-styled",wr="data-styled-version",To="data-styled-streamed",Ht=typeof window!="undefined"&&"HTMLElement"in window,Dn=typeof SC_DISABLE_SPEEDY=="boolean"&&SC_DISABLE_SPEEDY||typeof process!="undefined"&&{}.SC_DISABLE_SPEEDY||!1,wt=function(e){gr(t,e);function t(r){Tt(this,t);for(var n=arguments.length,o=Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];var i,i=or(this,e.call(this,"An error occurred. See https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/errors.md#"+r+" for more information."+(o.length>0?" Additional arguments: "+o.join(", "):"")));return or(i)}return t}(Error),No=/^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm,Fo=function(e){var t=""+(e||""),r=[];return t.replace(No,function(n,o,a){return r.push({componentId:o,matchIndex:a}),n}),r.map(function(n,o){var a=n.componentId,i=n.matchIndex,c=r[o+1],l=c?t.slice(i,c.matchIndex):t.slice(i);return{componentId:a,cssFromDOM:l}})},Bo=/^\s*\/\/.*$/gm,On=new wn({global:!1,cascade:!0,keyframe:!1,prefix:!1,compress:!1,semicolon:!0}),Rn=new wn({global:!1,cascade:!0,keyframe:!1,prefix:!0,compress:!1,semicolon:!1}),Nr=[],Tn=function(t){if(t===-2){var r=Nr;return Nr=[],r}},Nn=Co(function(e){Nr.push(e)}),Fn=void 0,qt=void 0,Bn=void 0,$o=function(t,r,n){return r>0&&n.slice(0,r).indexOf(qt)!==-1&&n.slice(r-qt.length,r)!==qt?"."+Fn:t},Vo=function(t,r,n){t===2&&n.length&&n[0].lastIndexOf(qt)>0&&(n[0]=n[0].replace(Bn,$o))};Rn.use([Vo,Nn,Tn]);On.use([Nn,Tn]);var jo=function(t){return On("",t)};function Lo(e,t,r){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"&",o=e.join("").replace(Bo,""),a=t&&r?r+" "+t+" { "+o+" }":o;return Fn=n,qt=t,Bn=new RegExp("\\"+qt+"\\b","g"),Rn(r||!t?"":t,a)}var Fr=function(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null},Br=function(t,r,n){if(n){var o=t[r]||(t[r]=Object.create(null));o[n]=!0}},br=function(t,r){t[r]=Object.create(null)},$r=function(t){return function(r,n){return t[r]!==void 0&&t[r][n]}},$n=function(t){var r="";for(var n in t)r+=Object.keys(t[n]).join(" ")+" ";return r.trim()},zo=function(t){var r=Object.create(null);for(var n in t)r[n]=nt({},t[n]);return r},Vr=function(t){if(t.sheet)return t.sheet;for(var r=t.ownerDocument.styleSheets.length,n=0;n<r;n+=1){var o=t.ownerDocument.styleSheets[n];if(o.ownerNode===t)return o}throw new wt(10)},Xo=function(t,r,n){if(!r)return!1;var o=t.cssRules.length;try{t.insertRule(r,n<=o?n:o)}catch{return!1}return!0},Yo=function(t,r,n){for(var o=r-n,a=r;a>o;a-=1)t.deleteRule(a)},jr=function(t){return`
/* sc-component-id: `+t+` */
`},Lr=function(t,r){for(var n=0,o=0;o<=r;o+=1)n+=t[o];return n},Wo=function(t,r,n){var o=document;t?o=t.ownerDocument:r&&(o=r.ownerDocument);var a=o.createElement("style");a.setAttribute(ir,""),a.setAttribute(wr,"4.4.1");var i=Fr();if(i&&a.setAttribute("nonce",i),a.appendChild(o.createTextNode("")),t&&!r)t.appendChild(a);else{if(!r||!t||!r.parentNode)throw new wt(6);r.parentNode.insertBefore(a,n?r:r.nextSibling)}return a},zr=function(t,r){return function(n){var o=Fr(),a=[o&&'nonce="'+o+'"',ir+'="'+$n(r)+'"',wr+'="4.4.1"',n],i=a.filter(Boolean).join(" ");return"<style "+i+">"+t()+"</style>"}},Xr=function(t,r){return function(){var n,o=(n={},n[ir]=$n(r),n[wr]="4.4.1",n),a=Fr();return a&&(o.nonce=a),m("style",be(ce({},o),{dangerouslySetInnerHTML:{__html:t()}}))}},Yr=function(t){return function(){return Object.keys(t)}},Ho=function(t,r){var n=Object.create(null),o=Object.create(null),a=[],i=r!==void 0,c=!1,l=function(u){var y=o[u];return y!==void 0?y:(o[u]=a.length,a.push(0),br(n,u),o[u])},h=function(u,y,b){for(var S=l(u),K=Vr(t),re=Lr(a,S),V=0,Z=[],q=y.length,Ne=0;Ne<q;Ne+=1){var ze=y[Ne],ke=i;ke&&ze.indexOf("@import")!==-1?Z.push(ze):Xo(K,ze,re+V)&&(ke=!1,V+=1)}i&&Z.length>0&&(c=!0,r().insertRules(u+"-import",Z)),a[S]+=V,Br(n,u,b)},w=function(u){var y=o[u];if(y!==void 0&&t.isConnected!==!1){var b=a[y],S=Vr(t),K=Lr(a,y)-1;Yo(S,K,b),a[y]=0,br(n,u),i&&c&&r().removeRules(u+"-import")}},g=function(){var u=Vr(t),y=u.cssRules,b="";for(var S in o){b+=jr(S);for(var K=o[S],re=Lr(a,K),V=a[K],Z=re-V;Z<re;Z+=1){var q=y[Z];q!==void 0&&(b+=q.cssText)}}return b};return{clone:function(){throw new wt(5)},css:g,getIds:Yr(o),hasNameForId:$r(n),insertMarker:l,insertRules:h,removeRules:w,sealed:!1,styleTag:t,toElement:Xr(g,n),toHTML:zr(g,n)}},Vn=function(t,r){return t.createTextNode(jr(r))},qo=function(t,r){var n=Object.create(null),o=Object.create(null),a=r!==void 0,i=!1,c=function(d){var u=o[d];return u!==void 0?u:(o[d]=Vn(t.ownerDocument,d),t.appendChild(o[d]),n[d]=Object.create(null),o[d])},l=function(d,u,y){for(var b=c(d),S=[],K=u.length,re=0;re<K;re+=1){var V=u[re],Z=a;if(Z&&V.indexOf("@import")!==-1)S.push(V);else{Z=!1;var q=re===K-1?"":" ";b.appendData(""+V+q)}}Br(n,d,y),a&&S.length>0&&(i=!0,r().insertRules(d+"-import",S))},h=function(d){var u=o[d];if(u!==void 0){var y=Vn(t.ownerDocument,d);t.replaceChild(y,u),o[d]=y,br(n,d),a&&i&&r().removeRules(d+"-import")}},w=function(){var d="";for(var u in o)d+=o[u].data;return d};return{clone:function(){throw new wt(5)},css:w,getIds:Yr(o),hasNameForId:$r(n),insertMarker:c,insertRules:l,removeRules:h,sealed:!1,styleTag:t,toElement:Xr(w,n),toHTML:zr(w,n)}},Go=function e(t,r){var n=t===void 0?Object.create(null):t,o=r===void 0?Object.create(null):r,a=function(d){var u=o[d];return u!==void 0?u:o[d]=[""]},i=function(d,u,y){var b=a(d);b[0]+=u.join(" "),Br(n,d,y)},c=function(d){var u=o[d];u!==void 0&&(u[0]="",br(n,d))},l=function(){var d="";for(var u in o){var y=o[u][0];y&&(d+=jr(u)+y)}return d},h=function(){var d=zo(n),u=Object.create(null);for(var y in o)u[y]=[o[y][0]];return e(d,u)},w={clone:h,css:l,getIds:Yr(o),hasNameForId:$r(n),insertMarker:a,insertRules:i,removeRules:c,sealed:!1,styleTag:null,toElement:Xr(l,n),toHTML:zr(l,n)};return w},jn=function(t,r,n,o,a){if(Ht&&!n){var i=Wo(t,r,o);return Dn?qo(i,a):Ho(i,a)}return Go()},Ko=function(t,r,n){for(var o=0,a=n.length;o<a;o+=1){var i=n[o],c=i.componentId,l=i.cssFromDOM,h=jo(l);t.insertRules(c,h)}for(var w=0,g=r.length;w<g;w+=1){var d=r[w];d.parentNode&&d.parentNode.removeChild(d)}},Zo=/\s+/,xr=void 0;Ht?xr=Dn?40:1e3:xr=-1;var Ln=0,Wr=void 0,Pr=function(){function e(){var t=this,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ht?document.head:null,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;Tt(this,e),this.getImportRuleTag=function(){var o=t.importRuleTag;if(o!==void 0)return o;var a=t.tags[0],i=!0;return t.importRuleTag=jn(t.target,a?a.styleTag:null,t.forceServer,i)},Ln+=1,this.id=Ln,this.forceServer=n,this.target=n?null:r,this.tagMap={},this.deferred={},this.rehydratedNames={},this.ignoreRehydratedNames={},this.tags=[],this.capacity=1,this.clones=[]}return e.prototype.rehydrate=function(){if(!Ht||this.forceServer)return this;var r=[],n=[],o=!1,a=document.querySelectorAll("style["+ir+"]["+wr+'="4.4.1"]'),i=a.length;if(!i)return this;for(var c=0;c<i;c+=1){var l=a[c];o||(o=!!l.getAttribute(To));for(var h=(l.getAttribute(ir)||"").trim().split(Zo),w=h.length,g=0,d;g<w;g+=1)d=h[g],this.rehydratedNames[d]=!0;n.push.apply(n,Fo(l.textContent)),r.push(l)}var u=n.length;if(!u)return this;var y=this.makeTag(null);Ko(y,r,n),this.capacity=Math.max(1,xr-u),this.tags.push(y);for(var b=0;b<u;b+=1)this.tagMap[n[b].componentId]=y;return this},e.reset=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;Wr=new e(void 0,r).rehydrate()},e.prototype.clone=function(){var r=new e(this.target,this.forceServer);return this.clones.push(r),r.tags=this.tags.map(function(n){for(var o=n.getIds(),a=n.clone(),i=0;i<o.length;i+=1)r.tagMap[o[i]]=a;return a}),r.rehydratedNames=nt({},this.rehydratedNames),r.deferred=nt({},this.deferred),r},e.prototype.sealAllTags=function(){this.capacity=1,this.tags.forEach(function(r){r.sealed=!0})},e.prototype.makeTag=function(r){var n=r?r.styleTag:null,o=!1;return jn(this.target,n,this.forceServer,o,this.getImportRuleTag)},e.prototype.getTagForId=function(r){var n=this.tagMap[r];if(n!==void 0&&!n.sealed)return n;var o=this.tags[this.tags.length-1];return this.capacity-=1,this.capacity===0&&(this.capacity=xr,o=this.makeTag(o),this.tags.push(o)),this.tagMap[r]=o},e.prototype.hasId=function(r){return this.tagMap[r]!==void 0},e.prototype.hasNameForId=function(r,n){if(this.ignoreRehydratedNames[r]===void 0&&this.rehydratedNames[n])return!0;var o=this.tagMap[r];return o!==void 0&&o.hasNameForId(r,n)},e.prototype.deferredInject=function(r,n){if(this.tagMap[r]===void 0){for(var o=this.clones,a=0;a<o.length;a+=1)o[a].deferredInject(r,n);this.getTagForId(r).insertMarker(r),this.deferred[r]=n}},e.prototype.inject=function(r,n,o){for(var a=this.clones,i=0;i<a.length;i+=1)a[i].inject(r,n,o);var c=this.getTagForId(r);if(this.deferred[r]!==void 0){var l=this.deferred[r].concat(n);c.insertRules(r,l,o),this.deferred[r]=void 0}else c.insertRules(r,n,o)},e.prototype.remove=function(r){var n=this.tagMap[r];if(n!==void 0){for(var o=this.clones,a=0;a<o.length;a+=1)o[a].remove(r);n.removeRules(r),this.ignoreRehydratedNames[r]=!0,this.deferred[r]=void 0}},e.prototype.toHTML=function(){return this.tags.map(function(r){return r.toHTML()}).join("")},e.prototype.toReactElements=function(){var r=this.id;return this.tags.map(function(n,o){var a="sc-"+r+"-"+o;return A.exports.cloneElement(n.toElement(),{key:a})})},Do(e,null,[{key:"master",get:function(){return Wr||(Wr=new e().rehydrate())}},{key:"instance",get:function(){return e.master}}]),e}(),Qo=function(){function e(t,r){var n=this;Tt(this,e),this.inject=function(o){o.hasNameForId(n.id,n.name)||o.inject(n.id,n.rules,n.name)},this.toString=function(){throw new wt(12,String(n.name))},this.name=t,this.rules=r,this.id="sc-keyframes-"+t}return e.prototype.getName=function(){return this.name},e}(),Jo=/([A-Z])/g,Uo=/^ms-/;function zn(e){return e.replace(Jo,"-$1").toLowerCase().replace(Uo,"-ms-")}function ea(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t=="number"&&t!==0&&!(e in So)?t+"px":String(t).trim()}var Xn=function(t){return t==null||t===!1||t===""},ta=function e(t,r){var n=[],o=Object.keys(t);return o.forEach(function(a){if(!Xn(t[a])){if(Rr(t[a]))return n.push.apply(n,e(t[a],a)),n;if(dt(t[a]))return n.push(zn(a)+":",t[a],";"),n;n.push(zn(a)+": "+ea(a,t[a])+";")}return n}),r?[r+" {"].concat(n,["}"]):n};function sr(e,t,r){if(Array.isArray(e)){for(var n=[],o=0,a=e.length,i;o<a;o+=1)i=sr(e[o],t,r),i!==null&&(Array.isArray(i)?n.push.apply(n,i):n.push(i));return n}if(Xn(e))return null;if(yr(e))return"."+e.styledComponentId;if(dt(e))if(Ro(e)&&t){var c=e(t);return sr(c,t,r)}else return e;return e instanceof Qo?r?(e.inject(r),e.getName()):e:Rr(e)?ta(e):e.toString()}function Yn(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return dt(e)||Rr(e)?sr(Mn(Tr,[e].concat(r))):sr(Mn(e,r))}function Hr(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ar;if(!un.exports.isValidElementType(t))throw new wt(1,String(t));var n=function(){return e(t,r,Yn.apply(void 0,arguments))};return n.withConfig=function(o){return Hr(e,t,nt({},r,o))},n.attrs=function(o){return Hr(e,t,nt({},r,{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n}function ra(e){for(var t=e.length|0,r=t|0,n=0,o;t>=4;)o=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,o=1540483477*(o&65535)+((1540483477*(o>>>16)&65535)<<16),o^=o>>>24,o=1540483477*(o&65535)+((1540483477*(o>>>16)&65535)<<16),r=1540483477*(r&65535)+((1540483477*(r>>>16)&65535)<<16)^o,t-=4,++n;switch(t){case 3:r^=(e.charCodeAt(n+2)&255)<<16;case 2:r^=(e.charCodeAt(n+1)&255)<<8;case 1:r^=e.charCodeAt(n)&255,r=1540483477*(r&65535)+((1540483477*(r>>>16)&65535)<<16)}return r^=r>>>13,r=1540483477*(r&65535)+((1540483477*(r>>>16)&65535)<<16),(r^r>>>15)>>>0}var Cr=52,Wn=function(t){return String.fromCharCode(t+(t>25?39:97))};function na(e){var t="",r=void 0;for(r=e;r>Cr;r=Math.floor(r/Cr))t=Wn(r%Cr)+t;return Wn(r%Cr)+t}function oa(e){for(var t in e)if(dt(e[t]))return!0;return!1}function Hn(e,t){for(var r=0;r<e.length;r+=1){var n=e[r];if(Array.isArray(n)&&!Hn(n,t))return!1;if(dt(n)&&!yr(n))return!1}return!t.some(function(o){return dt(o)||oa(o)})}var qn=function(t){return na(ra(t))},Gn=function(){function e(t,r,n){Tt(this,e),this.rules=t,this.isStatic=Hn(t,r),this.componentId=n,Pr.master.hasId(n)||Pr.master.deferredInject(n,[])}return e.prototype.generateAndInjectStyles=function(r,n){var o=this.isStatic,a=this.componentId,i=this.lastClassName;if(Ht&&o&&typeof i=="string"&&n.hasNameForId(a,i))return i;var c=sr(this.rules,r,n),l=qn(this.componentId+c.join(""));return n.hasNameForId(a,l)||n.inject(this.componentId,Lo(c,"."+l,void 0,a),l),this.lastClassName=l,l},e.generateName=function(r){return qn(r)},e}(),aa=function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ar,n=r?e.theme===r.theme:!1,o=e.theme&&!n?e.theme:t||r.theme;return o},ia=/[[\].#*$><+~=|^:(),"'`-]+/g,sa=/(^-|-$)/g;function qr(e){return e.replace(ia,"-").replace(sa,"")}function Sr(e){return typeof e=="string"&&!0}function ca(e){return Sr(e)?"styled."+e:"Styled("+_n(e)+")"}var Gr,Kn={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},la={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Zn=(Gr={},Gr[un.exports.ForwardRef]={$$typeof:!0,render:!0},Gr),ua=Object.defineProperty,da=Object.getOwnPropertyNames,Qn=Object.getOwnPropertySymbols,fa=Qn===void 0?function(){return[]}:Qn,ha=Object.getOwnPropertyDescriptor,ma=Object.getPrototypeOf,pa=Object.prototype,va=Array.prototype;function Jn(e,t,r){if(typeof t!="string"){var n=ma(t);n&&n!==pa&&Jn(e,n,r);for(var o=va.concat(da(t),fa(t)),a=Zn[e.$$typeof]||Kn,i=Zn[t.$$typeof]||Kn,c=o.length,l=void 0,h=void 0;c--;)if(h=o[c],!la[h]&&!(r&&r[h])&&!(i&&i[h])&&!(a&&a[h])&&(l=ha(t,h),l))try{ua(e,h,l)}catch{}return e}return e}function ga(e){return!!(e&&e.prototype&&e.prototype.isReactComponent)}var Kr=A.exports.createContext(),ya=Kr.Consumer;(function(e){gr(t,e);function t(r){Tt(this,t);var n=or(this,e.call(this,r));return n.getContext=Pn(n.getContext.bind(n)),n.renderInner=n.renderInner.bind(n),n}return t.prototype.render=function(){return this.props.children?m(Kr.Consumer,{children:this.renderInner}):null},t.prototype.renderInner=function(n){var o=this.getContext(this.props.theme,n);return m(Kr.Provider,{value:o,children:this.props.children})},t.prototype.getTheme=function(n,o){if(dt(n)){var a=n(o);return a}if(n===null||Array.isArray(n)||(typeof n=="undefined"?"undefined":En(n))!=="object")throw new wt(8);return nt({},o,n)},t.prototype.getContext=function(n,o){return this.getTheme(n,o)},t})(A.exports.Component);var Un=A.exports.createContext(),wa=Un.Consumer;(function(e){gr(t,e);function t(r){Tt(this,t);var n=or(this,e.call(this,r));return n.getContext=Pn(n.getContext),n}return t.prototype.getContext=function(n,o){if(n)return n;if(o)return new Pr(o);throw new wt(4)},t.prototype.render=function(){var n=this.props,o=n.children,a=n.sheet,i=n.target;return m(Un.Provider,{value:this.getContext(a,i),children:o})},t})(A.exports.Component);var eo={};function ba(e,t,r){var n=typeof t!="string"?"sc":qr(t),o=(eo[n]||0)+1;eo[n]=o;var a=n+"-"+e.generateName(n+o);return r?r+"-"+a:a}var xa=function(e){gr(t,e);function t(){Tt(this,t);var r=or(this,e.call(this));return r.attrs={},r.renderOuter=r.renderOuter.bind(r),r.renderInner=r.renderInner.bind(r),r}return t.prototype.render=function(){return m(wa,{children:this.renderOuter})},t.prototype.renderOuter=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Pr.master;return this.styleSheet=n,this.props.forwardedComponent.componentStyle.isStatic?this.renderInner():m(ya,{children:this.renderInner})},t.prototype.renderInner=function(n){var o=this.props.forwardedComponent,a=o.componentStyle,i=o.defaultProps;o.displayName;var c=o.foldedComponentIds,l=o.styledComponentId,h=o.target,w=void 0;a.isStatic?w=this.generateAndInjectStyles(ar,this.props):w=this.generateAndInjectStyles(aa(this.props,n,i)||ar,this.props);var g=this.props.as||this.attrs.as||h,d=Sr(g),u={},y=nt({},this.props,this.attrs),b=void 0;for(b in y)b==="forwardedComponent"||b==="as"||(b==="forwardedRef"?u.ref=y[b]:b==="forwardedAs"?u.as=y[b]:(!d||Eo(b))&&(u[b]=y[b]));return this.props.style&&this.attrs.style&&(u.style=nt({},this.attrs.style,this.props.style)),u.className=Array.prototype.concat(c,l,w!==l?w:null,this.props.className,this.attrs.className).filter(Boolean).join(" "),A.exports.createElement(g,u)},t.prototype.buildExecutionContext=function(n,o,a){var i=this,c=nt({},o,{theme:n});return a.length&&(this.attrs={},a.forEach(function(l){var h=l,w=!1,g=void 0,d=void 0;dt(h)&&(h=h(c),w=!0);for(d in h)g=h[d],w||dt(g)&&!ga(g)&&!yr(g)&&(g=g(c)),i.attrs[d]=g,c[d]=g})),c},t.prototype.generateAndInjectStyles=function(n,o){var a=o.forwardedComponent,i=a.attrs,c=a.componentStyle;if(a.warnTooManyClasses,c.isStatic&&!i.length)return c.generateAndInjectStyles(ar,this.styleSheet);var l=c.generateAndInjectStyles(this.buildExecutionContext(n,o,i),this.styleSheet);return l},t}(A.exports.Component);function to(e,t,r){var n=yr(e),o=!Sr(e),a=t.displayName,i=a===void 0?ca(e):a,c=t.componentId,l=c===void 0?ba(Gn,t.displayName,t.parentComponentId):c,h=t.ParentComponent,w=h===void 0?xa:h,g=t.attrs,d=g===void 0?Tr:g,u=t.displayName&&t.componentId?qr(t.displayName)+"-"+t.componentId:t.componentId||l,y=n&&e.attrs?Array.prototype.concat(e.attrs,d).filter(Boolean):d,b=new Gn(n?e.componentStyle.rules.concat(r):r,y,u),S=void 0,K=function(V,Z){return m(w,be(ce({},V),{forwardedComponent:S,forwardedRef:Z}))};return K.displayName=i,S=E.forwardRef(K),S.displayName=i,S.attrs=y,S.componentStyle=b,S.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Tr,S.styledComponentId=u,S.target=n?e.target:e,S.withComponent=function(V){var Z=t.componentId,q=Oo(t,["componentId"]),Ne=Z&&Z+"-"+(Sr(V)?V:qr(_n(V))),ze=nt({},q,{attrs:y,componentId:Ne,ParentComponent:w});return to(V,ze,r)},Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(V){this._foldedDefaultProps=n?_o(e.defaultProps,V):V}}),S.toString=function(){return"."+S.styledComponentId},o&&Jn(S,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,styledComponentId:!0,target:!0,withComponent:!0}),S}var Pa=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Zr=function(t){return Hr(to,t)};Pa.forEach(function(e){Zr[e]=Zr(e)});Ht&&(window.scCGSHMRCache={});var Gt=Zr,Ca="/react-photo-view/assets/1.67fc9a95.jpg",Qr="/react-photo-view/assets/2.621f0666.jpg",Sa="/react-photo-view/assets/3.42cec26f.jpg",Kt="/react-photo-view/assets/4.f42b5f2c.jpg",Jr="/react-photo-view/assets/5.bd775e52.jpg",ka="/react-photo-view/assets/6.8fb761f7.jpg";const Zt=[Ca,Qr,Sa,Kt,Jr,ka],Ge=Gt.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`,bt=Gt.div`
  margin-right: 20px;
  margin-bottom: 20px;
  width: 100px;
  height: 100px;
  cursor: pointer;
  background: url('${e=>e.viewImage}') no-repeat center;
  background-size: cover;
`,xt=Gt.button`
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

  ${({primary:e})=>e&&Yn`
      color: white;
      border: 1px solid #1890ff;
      background: #1890ff;

      &:hover {
        color: white;
        background: #40a9ff;
        border-color: #40a9ff;
      }
    `}
`,Ia=Gt.div`
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
`,Aa=Gt.img`
  width: 100px;
  height: 100px;
`;function Ma(){return m(He,{children:m(Ge,{children:Zt.map((e,t)=>m(qe,{src:e,children:m(bt,{viewImage:e})},t))})})}const Ea=`import React from 'react';
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
`,_a=void 0,Da=void 0,Oa={code:Ea,title:_a,desc:Da},Ra=!0;var Ta=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:Oa,isDemo:Ra,default:Ma}),Na="/react-photo-view/assets/dog.6cccf4ed.png";const Fa=e=>{const[t,r]=E.useState(!1);return E.useEffect(()=>{document.onfullscreenchange=()=>{r(Boolean(document.fullscreenElement))}},[]),m("svg",be(ce({className:"PhotoView-PhotoSlider__toolbarIcon",fill:"white",width:"44",height:"44",viewBox:"0 0 768 768"},e),{children:t?m("path",{d:"M511.5 256.5h96v63h-159v-159h63v96zM448.5 607.5v-159h159v63h-96v96h-63zM256.5 256.5v-96h63v159h-159v-63h96zM160.5 511.5v-63h159v159h-63v-96h-96z"}):m("path",{d:"M448.5 160.5h159v159h-63v-96h-96v-63zM544.5 544.5v-96h63v159h-159v-63h96zM160.5 319.5v-159h159v63h-96v96h-63zM223.5 448.5v96h96v63h-159v-159h63z"})}))};function Ba(){const[e,t]=E.useState(Zt);function r(){if(document.fullscreenElement)document.exitFullscreen();else{const n=document.getElementById("PhotoView_Slider");n&&n.requestFullscreen()}}return m(He,{toolbarRender:({rotate:n,onRotate:o,onScale:a,scale:i,index:c})=>yt(so,{children:[m("svg",{className:"PhotoView-PhotoSlider__toolbarIcon",width:"44",height:"44",viewBox:"0 0 768 768",fill:"white",onClick:()=>a(i+.2),children:m("path",{d:"M384 640.5q105 0 180.75-75.75t75.75-180.75-75.75-180.75-180.75-75.75-180.75 75.75-75.75 180.75 75.75 180.75 180.75 75.75zM384 64.5q132 0 225.75 93.75t93.75 225.75-93.75 225.75-225.75 93.75-225.75-93.75-93.75-225.75 93.75-225.75 225.75-93.75zM415.5 223.5v129h129v63h-129v129h-63v-129h-129v-63h129v-129h63z"})}),m("svg",{className:"PhotoView-PhotoSlider__toolbarIcon",width:"44",height:"44",viewBox:"0 0 768 768",fill:"white",onClick:()=>a(i-.2),children:m("path",{d:"M384 640.5q105 0 180.75-75.75t75.75-180.75-75.75-180.75-180.75-75.75-180.75 75.75-75.75 180.75 75.75 180.75 180.75 75.75zM384 64.5q132 0 225.75 93.75t93.75 225.75-93.75 225.75-225.75 93.75-225.75-93.75-93.75-225.75 93.75-225.75 225.75-93.75zM223.5 352.5h321v63h-321v-63z"})}),m("svg",{className:"PhotoView-PhotoSlider__toolbarIcon",onClick:()=>o(n+90),width:"44",height:"44",fill:"white",viewBox:"0 0 768 768",children:m("path",{d:"M565.5 202.5l75-75v225h-225l103.5-103.5c-34.5-34.5-82.5-57-135-57-106.5 0-192 85.5-192 192s85.5 192 192 192c84 0 156-52.5 181.5-127.5h66c-28.5 111-127.5 192-247.5 192-141 0-255-115.5-255-256.5s114-256.5 255-256.5c70.5 0 135 28.5 181.5 75z"})}),document.fullscreenEnabled&&m(Fa,{onClick:r}),m("svg",{className:"PhotoView-PhotoSlider__toolbarIcon",onClick:()=>{t(l=>{const h=[...l];return h.splice(c,1,Na),h})},xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",fill:"white",viewBox:"0 0 768 768",children:m("path",{d:"M384 559.5c-75 0-138-45-163.5-111h327c-25.5 66-88.5 111-163.5 111zM271.5 352.5c-27 0-48-21-48-48s21-48 48-48 48 21 48 48-21 48-48 48zM496.5 352.5c-27 0-48-21-48-48s21-48 48-48 48 21 48 48-21 48-48 48zM384 640.5c141 0 256.5-115.5 256.5-256.5s-115.5-256.5-256.5-256.5-256.5 115.5-256.5 256.5 115.5 256.5 256.5 256.5zM384 64.5c177 0 319.5 142.5 319.5 319.5s-142.5 319.5-319.5 319.5-319.5-142.5-319.5-319.5 142.5-319.5 319.5-319.5z"})})]}),children:m(Ge,{children:e.map((n,o)=>m(qe,{src:n,children:m(bt,{viewImage:n})},o))})})}const $a=`import React from 'react';
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
`,Va=void 0,ja=void 0,La={code:$a,title:Va,desc:ja},za=!0;var Xa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:La,isDemo:za,default:Ba});function Ya(){return m(He,{children:m(Ge,{children:m(qe,{src:Kt,children:m(xt,{primary:!0,children:"\u70B9\u51FB\u9884\u89C8"})})})})}const Wa=`import React from 'react';
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
`,Ha=void 0,qa=void 0,Ga={code:Wa,title:Ha,desc:qa},Ka=!0;var Za=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:Ga,isDemo:Ka,default:Ya});function Qa(){return m(He,{loop:!1,children:m(Ge,{children:m(qe,{src:Kt,children:m(bt,{viewImage:Kt})})})})}const Ja=`import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { ImageList, ViewBox } from './doc-components';
import photo4 from '../images/4.jpg';

export default function DocDemo() {
  return (
    <PhotoProvider loop={false}>
      <ImageList>
        <PhotoView src={photo4}>
          <ViewBox viewImage={photo4} />
        </PhotoView>
      </ImageList>
    </PhotoProvider>
  );
}
`,Ua=void 0,ei=void 0,ti={code:Ja,title:Ua,desc:ei},ri=!0;var ni=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:ti,isDemo:ri,default:Qa});function oi(){return m(He,{maskOpacity:.5,children:m(Ge,{children:m(qe,{src:Qr,children:m(bt,{viewImage:Qr})})})})}const ai=`import React from 'react';
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
`,ii=void 0,si=void 0,ci={code:ai,title:ii,desc:si},li=!0;var ui=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:ci,isDemo:li,default:oi});function di(){return m(He,{maskOpacity:.5,bannerVisible:!1,loop:!1,children:m(Ge,{children:m(qe,{src:Jr,children:m(bt,{viewImage:Jr})})})})}const fi=`import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { ImageList, ViewBox } from './doc-components';
import photo5 from '../images/5.jpg';

export default function DocDemo() {
  return (
    <PhotoProvider maskOpacity={0.5} bannerVisible={false} loop={false}>
      <ImageList>
        <PhotoView src={photo5}>
          <ViewBox viewImage={photo5} />
        </PhotoView>
      </ImageList>
    </PhotoProvider>
  );
}
`,hi=void 0,mi=void 0,pi={code:fi,title:hi,desc:mi},vi=!0;var gi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:pi,isDemo:vi,default:di});function yi(){return m(He,{pullClosable:!1,maskClosable:!1,loop:!1,children:m(Ge,{children:m(qe,{src:Kt,children:m(bt,{viewImage:Kt})})})})}const wi=`import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { ImageList, ViewBox } from './doc-components';
import photo4 from '../images/4.jpg';

export default function DocDemo() {
  return (
    <PhotoProvider pullClosable={false} maskClosable={false} loop={false}>
      <ImageList>
        <PhotoView src={photo4}>
          <ViewBox viewImage={photo4} />
        </PhotoView>
      </ImageList>
    </PhotoProvider>
  );
}
`,bi=void 0,xi=void 0,Pi={code:wi,title:bi,desc:xi},Ci=!0;var Si=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:Pi,isDemo:Ci,default:yi}),ki="/react-photo-view/assets/default-photo.136a6935.svg";function Ii(){return yt(Ge,{children:[m(He,{children:m(qe,{src:"",children:m(xt,{children:"\u65E0\u9ED8\u8BA4\u56FE"})})}),m(He,{brokenElement:m(Aa,{src:ki}),children:m(qe,{src:"",children:m(xt,{children:"\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u56FE"})})})]})}const Ai=`import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Button, DefaultImage, ImageList } from './doc-components';
import defaultPhoto from '../images/default-photo.svg';

export default function DocDemo() {
  return (
    <ImageList>
      <PhotoProvider>
        <PhotoView src="">
          <Button>\u65E0\u9ED8\u8BA4\u56FE</Button>
        </PhotoView>
      </PhotoProvider>
      <PhotoProvider brokenElement={<DefaultImage src={defaultPhoto} />}>
        <PhotoView src="">
          <Button>\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u56FE</Button>
        </PhotoView>
      </PhotoProvider>
    </ImageList>
  );
}
`,Mi=void 0,Ei=void 0,_i={code:Ai,title:Mi,desc:Ei},Di=!0;var Oi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:_i,isDemo:Di,default:Ii});function Ri(){const[e,t]=E.useState(!1),[r,n]=E.useState(0);function o(){t(!0)}function a(){t(!1)}return yt(Ge,{children:[m(xt,{onClick:()=>n(2),children:"setPhotoIndex(2)"}),m(xt,{onClick:()=>n(4),children:"setPhotoIndex(4)"}),m(xt,{onClick:o,primary:!0,children:"\u6253\u5F00 PhotoSlider"}),m(gn,{images:Zt.map(i=>({src:i,key:i})),visible:e,onClose:a,index:r,onIndexChange:n})]})}const Ti=`import React from 'react';
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
`,Ni=void 0,Fi=void 0,Bi={code:Ti,title:Ni,desc:Fi},$i=!0;var Vi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:Bi,isDemo:$i,default:Ri});function ji(){return m(He,{children:m(Ge,{children:Zt.map((e,t)=>m(qe,{src:e,children:t<2?m(bt,{viewImage:e}):void 0},t))})})}const Li=`import React from 'react';
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
`,zi=void 0,Xi=void 0,Yi={code:Li,title:zi,desc:Xi},Wi=!0;var Hi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:Yi,isDemo:Wi,default:ji});function qi(){return m(He,{overlayRender:({rotate:e,onRotate:t,scale:r,index:n})=>yt(Ia,{children:[yt("div",{children:[m("div",{children:m("a",{onClick:()=>t(e+90),children:"\u65CB\u8F6C"})}),"\u65CB\u8F6C\u89D2\u5EA6 ",e]}),yt("div",{children:["\u7F29\u653E\uFF1A",r]}),yt("div",{children:["\u63CF\u8FF0\uFF1A",Zt[n]]})]}),children:m(Ge,{children:Zt.map((e,t)=>m(qe,{src:e,children:m(bt,{viewImage:e})},t))})})}const Gi=`import React from 'react';
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
`,Ki=void 0,Zi=void 0,Qi={code:Gi,title:Ki,desc:Zi},Ji=!0;var Ui=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:Qi,isDemo:Ji,default:qi});const es=Gt.div`
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
`;function ts(){return m(He,{maskOpacity:.5,loop:!1,children:m(Ge,{children:m(qe,{width:400,height:400,render:e=>yt(es,be(ce({},e),{onWheel:void 0,children:[m("div",{children:"\u81EA\u5B9A\u4E49\u8282\u70B9"}),m(xt,{children:"\u6309\u94AE"}),m("input",{onMouseDown:t=>t.stopPropagation()})]})),children:m(xt,{primary:!0,children:"\u81EA\u5B9A\u4E49\u6E32\u67D3"})})})})}const rs=`import React from 'react';
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

export default function DocDemo() {
  return (
    <PhotoProvider maskOpacity={0.5} loop={false}>
      <ImageList>
        <PhotoView
          width={400}
          height={400}
          render={(props) => (
            <PreviewElement {...props} onWheel={undefined}>
              <div>\u81EA\u5B9A\u4E49\u8282\u70B9</div>
              <Button>\u6309\u94AE</Button>
              <input onMouseDown={(e) => e.stopPropagation()} />
            </PreviewElement>
          )}
        >
          <Button primary>\u81EA\u5B9A\u4E49\u6E32\u67D3</Button>
        </PhotoView>
      </ImageList>
    </PhotoProvider>
  );
}
`,ns=void 0,os=void 0,as={code:rs,title:ns,desc:os},is=!0;var ss=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:as,isDemo:is,default:ts});const cs=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),ee("div",ce({},r))},Ke=cs("Demo"),ls={},us="wrapper";function ro(r){var n=r,{components:e}=n,t=ln(n,["components"]);return ee(us,be(ce(ce({},ls),t),{components:e,mdxType:"MDXLayout"}),ee("h3",null,"\u57FA\u672C\u4F7F\u7528"),ee(Ke,be(ce({},Ta),{mdxType:"Demo"})),ee("h3",null,"\u81EA\u5B9A\u4E49\u5DE5\u5177\u680F"),ee(Ke,be(ce({},Xa),{mdxType:"Demo"})),ee("h3",null,"\u901A\u8FC7\u6309\u94AE\u89E6\u53D1"),ee(Ke,be(ce({},Za),{mdxType:"Demo"})),ee("h3",null,"\u7981\u7528\u5FAA\u73AF\u9884\u89C8"),ee(Ke,be(ce({},ni),{mdxType:"Demo"})),ee("h3",null,"\u81EA\u5B9A\u4E49\u8499\u5C42\u900F\u660E\u5EA6"),ee(Ke,be(ce({},ui),{mdxType:"Demo"})),ee("h3",null,"\u4E0D\u663E\u793A\u9876\u90E8\u6309\u94AE\u533A\u57DF"),ee(Ke,be(ce({},gi),{mdxType:"Demo"})),ee("h3",null,"\u7981\u7528\u70B9\u51FB\u8499\u5C42\u5173\u95ED"),ee(Ke,be(ce({},Si),{mdxType:"Demo"})),ee("h3",null,"\u81EA\u5B9A\u4E49\u52A0\u8F7D\u5931\u8D25\u6E32\u67D3"),ee(Ke,be(ce({},Oi),{mdxType:"Demo"})),ee("h3",null,"\u76F4\u63A5\u4F7F\u7528 PhotoSlider"),ee(Ke,be(ce({},Vi),{mdxType:"Demo"})),ee("h3",null,"\u4E24\u5F20\u7F29\u7565\u56FE\u9884\u89C8\u66F4\u591A"),ee(Ke,be(ce({},Hi),{mdxType:"Demo"})),ee("h3",null,"\u81EA\u5B9A\u4E49\u63CF\u8FF0"),ee(Ke,be(ce({},Ui),{mdxType:"Demo"})),ee("h3",null,"\u81EA\u5B9A\u4E49\u6E32\u67D3\u8282\u70B9"),ee(Ke,be(ce({},ss),{mdxType:"Demo"})))}ro.isMDXComponent=!0;var ds=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ro});const fs={};fs.main=ds;export{fs as default};
