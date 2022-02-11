var oo=Object.defineProperty,ao=Object.defineProperties;var io=Object.getOwnPropertyDescriptors;var hr=Object.getOwnPropertySymbols;var sn=Object.prototype.hasOwnProperty,cn=Object.prototype.propertyIsEnumerable;var ln=(e,t,r)=>t in e?oo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ce=(e,t)=>{for(var r in t||(t={}))sn.call(t,r)&&ln(e,r,t[r]);if(hr)for(var r of hr(t))cn.call(t,r)&&ln(e,r,t[r]);return e},we=(e,t)=>ao(e,io(t));var un=(e,t)=>{var r={};for(var n in e)sn.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&hr)for(var n of hr(e))t.indexOf(n)<0&&cn.call(e,n)&&(r[n]=e[n]);return r};import{R as I,r as M,a as so,b as dn,j as m,d as wt,F as co,c as U}from"./index.bd121add.js";function Ce(){return Ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ce.apply(this,arguments)}function Er(e,t){if(e==null)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(o[r]=e[r]);return o}function er(e){var t=M.exports.useRef({fn:e,curr:void 0}).current;if(t.fn=e,!t.curr){var r=Object.create(null);Object.keys(e).forEach(function(n){r[n]=function(){var o;return(o=t.fn[n]).call.apply(o,[t.fn].concat([].slice.call(arguments)))}}),t.curr=r}return t.curr}function mr(e){return M.exports.useReducer(function(t,r){return Ce({},t,typeof r=="function"?r(t):r)},e)}var fn=I.createContext(void 0),et=typeof document!="undefined"&&"ontouchstart"in document.documentElement;function Wt(e,t,r){var n=M.exports.useRef(t);n.current=t,M.exports.useEffect(function(){function o(a){n.current(a)}return e&&window.addEventListener(e,o,r),function(){e&&window.removeEventListener(e,o)}},[e])}function hn(e){var t=M.exports.useRef({initial:!1,fn:void 0}).current;return t.initial||(t.initial=!0,t.fn=e()),t.fn}var lo=["className","children"],uo=function(e){var t=e.className,r=e.children,n=Er(e,lo),o=hn(function(){return document.createElement("section")});return I.useEffect(function(){return document.body.appendChild(o),function(){document.body.removeChild(o)}},[]),so.exports.createPortal(I.createElement("div",Ce({className:"PhotoView-SlidePortal"+(t?" "+t:""),role:"dialog",id:"PhotoView_Slider"},n),r),o)};function fo(e){return I.createElement("svg",Ce({width:"44",height:"44",viewBox:"0 0 768 768"},e),I.createElement("path",{fill:"#FFF",d:"M607.5 205.5l-178.5 178.5 178.5 178.5-45 45-178.5-178.5-178.5 178.5-45-45 178.5-178.5-178.5-178.5 45-45 178.5 178.5 178.5-178.5z"}))}function ho(e){return I.createElement("svg",Ce({width:"44",height:"44",viewBox:"0 0 768 768"},e),I.createElement("path",{d:"M640.5 352.5v63h-390l178.5 180-45 45-256.5-256.5 256.5-256.5 45 45-178.5 180h390z"}))}function mo(e){return I.createElement("svg",Ce({width:"44",height:"44",viewBox:"0 0 768 768"},e),I.createElement("path",{d:"M384 127.5l256.5 256.5-256.5 256.5-45-45 178.5-180h-390v-63h390l-178.5-180z"}))}function po(){return M.exports.useEffect(function(){var e=function(){var r=navigator.userAgent;if(r.includes("iPhone")&&r.includes("Safari")){var n=window.scrollY,o=document.documentElement,a=o.style,i=mn(o),c=a.height;return a.height=window.innerHeight+"px",function(){i(),a.height=c,window.scrollTo(0,n)}}}(),t=mn(document.body);return function(){t(),e==null||e()}},[]),null}function mn(e){var t=e.style,r=t.overflow;return t.overflow="hidden",function(){t.overflow=r}}function pn(e){var t=e.touches[0],r=t.clientX,n=t.clientY;if(e.touches.length>=2){var o=e.touches[1],a=o.clientX,i=o.clientY;return[(r+a)/2,(n+i)/2,Math.sqrt(Math.pow(a-r,2)+Math.pow(i-n,2))]}return[r,n,0]}function tr(e,t,r,n){var o=r*t,a=(o-n)/2;return o<=n?"small":e>0&&a-e<=0?"before":e<0&&a+e<=0?"after":void 0}function pr(e,t,r,n){var o=tr(e,t,r,n),a=(r*t-n)/2,i=e;return o==="small"?i=0:o==="before"?i=a:o==="after"&&(i=-a),[i,o]}function _r(e,t,r,n,o,a,i,c,l,h){l===void 0&&(l=0),h===void 0&&(h=0);var w=window,g=w.innerWidth,f=w.innerHeight,u=g/2,y=f/2;return{x:r-c/i*(r-(u+e))-u+(tr(e,c,o,g)?l/2:l),y:n-c/i*(n-(y+t))-y+(tr(t,c,a,f)?h/2:h),lastCX:r,lastCY:n}}function vo(e,t,r){if(e){var n=window;return(t-n.innerWidth)/2+e.clientX+"px "+((r-n.innerHeight)/2+e.clientY)+"px"}}function Dr(e,t,r){var n=t,o=r,a=e%180!=0;return a&&(n=r,o=t),[n,o,a]}function Or(e,t,r){var n,o,a=0,i=Dr(r,window.innerWidth,window.innerHeight),c=i[0],l=i[1],h=e/t*l,w=t/e*c;return e<c&&t<l?(n=e,o=t):e<c&&t>=l?(n=h,o=l):e>=c&&t<l||e/t>c/l?(n=c,o=w):t/e>=3&&!i[2]?(n=c,a=((o=w)-l)/2):(n=h,o=l),{width:Math.floor(n),height:Math.floor(o),x:0,y:a,easing:!0}}function vr(e,t){var r=t.leading,n=r!==void 0&&r,o=t.maxWait,a=t.wait,i=a===void 0?o||0:a,c=M.exports.useRef(e);c.current=e;var l=M.exports.useRef(0),h=M.exports.useRef(),w=function(){return h.current&&clearTimeout(h.current)},g=M.exports.useCallback(function(){var f=[].slice.call(arguments),u=Date.now();function y(){l.current=u,w(),c.current.apply(null,f)}var x=l.current,S=u-x;if(x===0&&(n&&y(),l.current=u),o!==void 0){if(S>o)return void y()}else S<i&&(l.current=u);w(),h.current=setTimeout(function(){y(),l.current=0},i)},[i,o,n]);return g.cancel=w,g}function Tt(e,t,r){var n=t-e;if(n!==0){var o=Date.now(),a=0,i=function(){var l,h=Math.min(1,(Date.now()-o)/400);r(e+((l=h)===1?1:1-Math.pow(2,-10*l))*n)&&h<1?c():cancelAnimationFrame(a)};c()}function c(){a=requestAnimationFrame(i)}}var vn=function(){var e=M.exports.useRef(!1);return M.exports.useEffect(function(){return e.current=!0,function(){e.current=!1}},[]),e};function go(){return I.createElement("div",{className:"PhotoView__Spinner"},I.createElement("svg",{viewBox:"0 0 32 32",width:"36",height:"36",fill:"white"},I.createElement("path",{opacity:".25",d:"M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"}),I.createElement("path",{d:"M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"})))}var yo=["src","loaded","broken","className","onPhotoLoad","loadingElement","brokenElement"];function wo(e){var t=e.src,r=e.loaded,n=e.broken,o=e.className,a=e.onPhotoLoad,i=e.loadingElement,c=e.brokenElement,l=Er(e,yo),h=vn();return t&&!n?I.createElement(I.Fragment,null,I.createElement("img",Ce({className:"PhotoView__Photo"+(o?" "+o:""),src:t,onLoad:function(w){var g=w.target;h.current&&a({loaded:!0,naturalWidth:g.naturalWidth,naturalHeight:g.naturalHeight})},onError:function(){h.current&&a({broken:!0})},alt:""},l)),!r&&(i||I.createElement(go,null))):c?typeof c=="function"?c({src:t}):c:null}var bo={naturalWidth:void 0,naturalHeight:void 0,width:1,height:1,loaded:void 0,broken:!1,x:0,y:0,touched:!1,maskTouched:!1,CX:0,CY:0,lastX:0,lastY:0,lastCX:0,lastCY:0,touchTime:0,touchLength:0,easing:!0,stopRaf:!0,currReach:void 0};function xo(e){var t,r,n,o,a,i,c,l,h=e.src,w=e.render,g=e.width,f=e.height,u=e.wrapClassName,y=e.className,x=e.style,S=e.loadingElement,K=e.brokenElement,te=e.rotate,V=te===void 0?0:te,Z=e.scale,H=Z===void 0?1:Z,Ne=e.onPhotoTap,Le=e.onMaskTap,Se=e.onReachMove,Ft=e.onReachUp,Ct=e.onPhotoResize,le=e.onWheel,ie=e.isActive,St=e.activeAnimation,Qt=e.originRect,R=mr(bo),j=R[0],z=R[1],be=M.exports.useRef(),ue=vn(),Ee=j.naturalWidth,xe=Ee===void 0?g||1:Ee,Fe=j.naturalHeight,rt=Fe===void 0?f||1:Fe,ve=j.width,de=j.height,Be=j.loaded,ke=Be===void 0?!h:Be,X=j.broken,oe=j.x,fe=j.y,ne=j.touched,$e=j.stopRaf,ge=j.maskTouched,Ie=j.CX,he=j.CY,nt=j.lastX,ot=j.lastY,ye=j.lastCX,Ve=j.lastCY,De=j.touchTime,ft=j.touchLength,ht=j.easing,mt=j.currReach,Bt=vr(function(d,C,_){if(_===void 0&&(_=0),(ne||ge)&&ie){var re=Dr(V,ve,de),v=re[0],A=re[1];if(_===0&&be.current===void 0){var O=Math.abs(d-Ie)<=20,G=Math.abs(C-he)<=20;if(O&&G)return void z({lastCX:d,lastCY:C});be.current=O?C>he?"pull":"push":"x"}var q=d-ye,Y=C-Ve,B=void 0;if(_===0){var Ae=tr(q+nt,H,v,window.innerWidth),me=tr(Y+ot,H,A,window.innerHeight);B=function(je,Vt,zt,_t){return Vt&&je==="x"||_t==="x"?"x":zt&&(je==="pull"||je==="push")||_t==="y"?"y":void 0}(be.current,Ae,me,mt),B!==void 0&&Se(B,d,C,H)}if(B==="x"||ge)z({currReach:"x"});else{var ze=Math.max(Math.min(H+(_-ft)/100/2*H,Math.max(6,xe/ve)),.8);H!==ze&&le(ze),z(Ce({touchLength:_,currReach:B},_r(oe,fe,d,C,ve,de,H,ze,q,Y)))}}},{maxWait:8}),pt=(a=function(d){return!$e&&!ne&&(ue.current&&z({x:d,easing:!1}),ue.current)},i=function(d){return!$e&&!ne&&(ue.current&&z({y:d,easing:!1}),ue.current)},c=function(d){return ue.current&&le(d),!ne&&ue.current},l=er({X:function(d){return a(d)},Y:function(d){return i(d)},S:function(d){return c(d)}}),function(d,C,_,re,v,A,O,G,q){if(O<1)return Tt(d,0,l.X),Tt(C,0,l.Y),void Tt(O,1,l.S);var Y=Date.now()-q,B=Dr(G,v,A),Ae=B[0],me=B[1],ze=window,je=ze.innerWidth,Vt=ze.innerHeight;if(Y>=200){var zt=pr(d,O,Ae,je);zt[1]&&Tt(d,zt[0],l.X);var _t=pr(C,O,me,Vt);_t[1]&&Tt(C,_t[0],l.Y)}else{var sr=(d-_)/Y,cr=(C-re)/Y,Lt=Math.sqrt(Math.pow(sr,2)+Math.pow(cr,2)),Ze=!1,it=!1;(function(Oe,Qe){var Ge=Oe,vt=0,Je=void 0,gt=0,st=function(Ot){Je||(Je=Ot);var ct=Ot-Je,yt=Math.sign(Oe),k=-.002*yt,P=Math.sign(-Ge)*Math.pow(Ge,2)*2e-4,b=Ge*ct+(k+P)*Math.pow(ct,2)/2;vt+=b,Je=Ot,yt*(Ge+=(k+P)*ct)<=0?Ke():Qe(vt)?Dt():Ke()};function Dt(){gt=requestAnimationFrame(st)}function Ke(){cancelAnimationFrame(gt)}Dt()})(Lt,function(Oe){var Qe=d+Oe*(sr/Lt),Ge=C+Oe*(cr/Lt),vt=pr(Qe,O,Ae,je),Je=vt[0],gt=vt[1],st=pr(Ge,O,me,Vt),Dt=st[0],Ke=st[1];if(gt&&!Ze&&(Ze=!0,Tt(Qe,Je,l.X)),Ke&&!it&&(it=!0,Tt(Ge,Dt,l.Y)),Ze&&it)return!1;var Ot=Ze||l.X(Je),ct=it||l.Y(Dt);return Ot&&ct})}}),at=(t=function(d,C){Ne==null||Ne(d,C)},r=function(d,C){if(mt===void 0){var _=H!==1?1:Math.max(2,xe/ve),re=_r(oe,fe,d,C,ve,de,H,_);le(_),z(Ce({CX:Ie,CY:he},re,_<=1&&{x:0,y:0}))}},n=M.exports.useRef(0),o=vr(function(){n.current=0,t.apply(void 0,[].slice.call(arguments))},{wait:300}),function(){var d=[].slice.call(arguments);n.current+=1,o.apply(void 0,d),n.current>=2&&(o.cancel(),n.current=0,r.apply(void 0,d))});function kt(d,C){if(be.current=void 0,(ne||ge)&&ie){var _=Ie!==d||he!==C,re=Math.max(Math.min(H,Math.max(6,xe/ve)),1);re!==H&&le(re),z({touched:!1,maskTouched:!1,easing:!0,stopRaf:!1,currReach:void 0}),pt(oe,fe,nt,ot,ve,de,H,V,De),Ft==null||Ft(d,C),_||(ne&&Ne?at(d,C):ge&&Le&&Le(d,C))}}function It(d,C,_){_===void 0&&(_=0),z({touched:!0,CX:d,CY:C,lastCX:d,lastCY:C,lastX:oe,lastY:fe,touchLength:_,touchTime:Date.now()})}function At(d,C){z({maskTouched:!0,CX:d,CY:C,lastX:oe,lastY:fe})}Wt(et?void 0:"mousemove",function(d){d.preventDefault(),Bt(d.clientX,d.clientY)}),Wt(et?void 0:"mouseup",function(d){kt(d.clientX,d.clientY)}),Wt(et?"touchmove":void 0,function(d){d.preventDefault();var C=pn(d);Bt.apply(void 0,C)},{passive:!1}),Wt(et?"touchend":void 0,function(d){var C=d.changedTouches[0];kt(C.clientX,C.clientY)},{passive:!1}),Wt("resize",vr(function(){ke&&(z(Or(xe,rt,V)),Ct&&Ct())},{maxWait:8})),M.exports.useLayoutEffect(function(){z(Or(xe,rt,V))},[V]);var Mt=function(d,C,_,re){var v=M.exports.useRef(!1),A=mr({leading:!0,scale:_}),O=A[0],G=O.leading,q=O.scale,Y=A[1],B=vr(function(Ae){try{return re(!1),Y({leading:!1,scale:Ae}),Promise.resolve()}catch(me){return Promise.reject(me)}},{wait:400});return M.exports.useLayoutEffect(function(){v.current?(re(!0),Y({leading:!0}),B(_)):v.current=!0},[_]),G?[d*q,C*q,_/q]:[d*_,C*_,1]}(ve,de,H,function(d){return z({easing:d})}),$t=Mt[2],Et={className:y,onMouseDown:et?void 0:function(d){d.preventDefault(),It(d.clientX,d.clientY,0)},onTouchStart:et?function(d){It.apply(void 0,pn(d))}:void 0,onWheel:function(d){if(mt===void 0){var C=Math.max(Math.min(H-d.deltaY/100/2,Math.max(6,xe/ve)),1),_=_r(oe,fe,d.clientX,d.clientY,ve,de,H,C);z(Ce({CX:d.clientX,CY:d.clientY,stopRaf:!0},_,C<=1&&{x:0,y:0})),le(C)}},style:{width:Mt[0],height:Mt[1],transform:"translate3d("+oe+"px, "+fe+"px, 0) scale("+$t+") rotate("+V+"deg)",transition:ne||!ht?void 0:"transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",willChange:ie?"transform":void 0}};return I.createElement("div",{className:"PhotoView__PhotoWrap"+(u?" "+u:""),style:x},I.createElement("div",{className:"PhotoView__PhotoMask",onMouseDown:!et&&ie?function(d){At(d.clientX,d.clientY)}:void 0,onTouchStart:et&&ie?function(d){var C=d.touches[0];At(C.clientX,C.clientY)}:void 0}),I.createElement("div",{className:"PhotoView__PhotoBox"+(ke?St==="enter"?" PhotoView__animateIn":St==="leave"?" PhotoView__animateOut":"":""),style:{transformOrigin:ke?vo(Qt,ve,de):void 0,width:ve,height:de}},h?I.createElement(wo,Ce({src:h,loaded:ke,broken:X},Et,{onPhotoLoad:function(d){z(Ce({},d,d.loaded&&Or(d.naturalWidth||0,d.naturalHeight||0,V)))},loadingElement:S,brokenElement:K})):w==null?void 0:w({attrs:Et,scale:$t,rotate:V})))}var gn={translateX:0,touched:!1,easing:!0,lastCX:void 0,lastCY:void 0,bgOpacity:void 0,lastBgOpacity:void 0,overlayVisible:!0,canPullClose:!0,photoMap:new Map};function yn(e){var t=e.loop,r=t===void 0||t,n=e.photoClosable,o=e.maskClosable,a=o===void 0||o,i=e.maskOpacity,c=i===void 0?1:i,l=e.pullClosable,h=l===void 0||l,w=e.bannerVisible,g=w===void 0||w,f=e.overlayRender,u=e.toolbarRender,y=e.className,x=e.maskClassName,S=e.photoClassName,K=e.photoWrapClassName,te=e.loadingElement,V=e.brokenElement,Z=e.images,H=e.index,Ne=H===void 0?0:H,Le=e.onIndexChange,Se=e.visible,Ft=e.onClose,Ct=mr(gn),le=Ct[0],ie=Ct[1],St=M.exports.useState(0),Qt=St[0],R=St[1],j=le.translateX,z=le.touched,be=le.easing,ue=le.lastCX,Ee=le.lastCY,xe=le.bgOpacity,Fe=xe===void 0?c:xe,rt=le.lastBgOpacity,ve=le.overlayVisible,de=le.canPullClose,Be=le.photoMap,ke=e.hasOwnProperty("index"),X=ke?Ne:Qt,oe=ke?Le:R,fe=M.exports.useRef(X),ne=Z.length,$e=Z[X],ge=function(v,A){var O=M.exports.useReducer(function(B){return!B},!1)[1],G=M.exports.useRef(),q=function(B,Ae){var me=M.exports.useRef(B);function ze(je){me.current=je}return M.exports.useMemo(function(){(function(je){v?(je(v),G.current="enter"):G.current="leave"})(ze)},[B]),[me.current,ze]}(v),Y=q[1];return{realVisible:q[0],activeAnimation:G.current,onAnimationEnd:function(){O(),G.current==="leave"&&Y(!1),G.current=void 0}}}(Se),Ie=ge.realVisible,he=ge.activeAnimation,nt=ge.onAnimationEnd,ot=function(v,A){var O=M.exports.useState(),G=O[0],q=O[1];return M.exports.useEffect(function(){var Y=A==null?void 0:A.current;if(Y&&Y.nodeType===1){var B=Y.getBoundingClientRect();q({clientX:B.left+B.width/2,clientY:B.top+B.height/2})}else G&&!Y&&q(void 0)},[v]),G}(Se,$e==null?void 0:$e.originRef);M.exports.useLayoutEffect(function(){if(Ie)return ie({easing:!1,translateX:X*-(window.innerWidth+20)}),void(fe.current=X);ie(gn)},[Ie]);var ye=er({close:function(v){Ft(v),ie({overlayVisible:!0,lastBgOpacity:Fe})},changeIndex:function(v,A){A===void 0&&(A=!0);var O=r?fe.current+(v-X):v,G=ne-1,q=Math.min(G,Math.max(O,0)),Y=r?O:q,B=window.innerWidth+20;ie({touched:!1,lastCX:void 0,lastCY:void 0,translateX:-B*Y,easing:A}),fe.current=Y,oe==null||oe(r?v<0?G:v>G?0:v:q)},onRotate:function(v){at({rotate:v})},onScale:function(v){at({scale:Math.max(1,Math.min(6,v))})}}),Ve=ye.close,De=ye.changeIndex,ft=ye.onRotate,ht=ye.onScale;function mt(){n?Ve():ie({overlayVisible:!ve})}function Bt(){a&&Ve()}function pt(){var v=window;ie({translateX:-(v.innerWidth+20)*X,lastCX:void 0,lastCY:void 0,easing:!1}),fe.current=X}function at(v){var A=new Map(Be);if($e){var O=$e.key;ie({photoMap:A.set(O,Ce({},A.get(O),v))})}}function kt(v){at({scale:v})}function It(v,A,O,G){v==="x"?function(q){var Y=window;if(ue!==void 0){var B=q-ue,Ae=B;!r&&(X===0&&B>0||X===Z.length-1&&B<0)&&(Ae=B/2),ie({touched:!0,lastCX:ue,translateX:-(Y.innerWidth+20)*fe.current+Ae,easing:!0})}else ie({touched:!0,lastCX:q,translateX:j,easing:!0})}(A):v==="y"&&function(q,Y){if(Ee!==void 0){var B=Math.abs(q-Ee),Ae=Math.max(Math.min(c,c-B/100/4),0);ie({touched:!0,lastCY:Ee,bgOpacity:Y===1?Ae:c,canPullClose:Y===1})}else ie({touched:!0,lastCY:q,bgOpacity:Fe,canPullClose:!0})}(O,G)}function At(v,A){var O=v-(ue!=null?ue:v),G=A-(Ee!=null?Ee:A),q=!1;if(O<-40)De(X+1);else if(O>40)De(X-1);else{var Y=-(window.innerWidth+20)*fe.current;Math.abs(G)>100&&de&&h&&(q=!0,Ve()),ie({touched:!1,translateX:Y,lastCX:void 0,lastCY:void 0,bgOpacity:c,overlayVisible:!!q||ve})}}Wt("keydown",function(v){if(Se)switch(v.key){case"ArrowLeft":De(X-1,!1);break;case"ArrowRight":De(X+1,!1);break;case"Escape":Ve()}});var Mt="translate3d("+j+"px, 0px, 0)",$t=function(v,A,O){return M.exports.useMemo(function(){if(O){var G=v.length;return v.concat(v).concat(v).slice(G+A-1,G+A+2)}return v.slice(Math.max(A-1,0),Math.min(A+2,v.length+1))},[v,A,O])}(Z,X,r);if(!Ie)return null;var Et=window.innerWidth,d=ve&&!he,C=Se?Fe:rt,_=$e?Be.get($e.key):void 0,re={images:Z,index:X,visible:Se,onClose:Ve,onIndexChange:De,overlayVisible:d,onRotate:ft,onScale:ht,scale:(_==null?void 0:_.scale)||1,rotate:(_==null?void 0:_.rotate)||0};return I.createElement(uo,{className:(d?"":"PhotoView-PhotoSlider__clean")+(Se?"":" PhotoView-PhotoSlider__willClose")+(y?" "+y:""),onClick:function(v){return v.stopPropagation()}},Se&&I.createElement(po,null),I.createElement("div",{className:"PhotoView-PhotoSlider__Backdrop"+(x?" "+x:"")+(he==="enter"?" PhotoView-PhotoSlider__fadeIn":he==="leave"?" PhotoView-PhotoSlider__fadeOut":""),style:{background:"rgba(0, 0, 0, "+C+")",transition:z?void 0:"background-color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)"},onAnimationEnd:nt}),g&&I.createElement("div",{className:"PhotoView-PhotoSlider__BannerWrap"},I.createElement("div",{className:"PhotoView-PhotoSlider__Counter"},X+1," / ",ne),I.createElement("div",{className:"PhotoView-PhotoSlider__BannerRight"},u&&u(re),I.createElement(fo,{className:"PhotoView-PhotoSlider__toolbarIcon",onClick:Ve}))),$t.map(function(v,A){var O=r||X!==0?fe.current-1+A:X+A;return I.createElement(xo,Ce({key:r?v.key+"/"+v.src+"/"+O:v.key,src:v.src,render:v.render,width:v.width,height:v.height,onReachMove:It,onReachUp:At,onPhotoTap:mt,onMaskTap:Bt,wrapClassName:K,className:S,style:{left:(Et+20)*O+"px",transform:Mt,transition:z||!be?void 0:"transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)"},loadingElement:te,brokenElement:V,onPhotoResize:pt,isActive:($e==null?void 0:$e.key)===v.key,activeAnimation:he,originRect:ot,onWheel:kt},Be.get(v.key)))}),!et&&g&&I.createElement(I.Fragment,null,(r||X!==0)&&I.createElement("div",{className:"PhotoView-PhotoSlider__ArrowLeft",onClick:function(){return De(X-1,!1)}},I.createElement(ho,null)),(r||X+1<ne)&&I.createElement("div",{className:"PhotoView-PhotoSlider__ArrowRight",onClick:function(){return De(X+1,!1)}},I.createElement(mo,null))),f&&I.createElement("div",{className:"PhotoView-PhotoSlider__Overlay"},f(re)))}var Po=["children","onIndexChange","onVisibleChange"],Co={images:[],visible:!1,index:0};function Ye(e){var t=e.children,r=e.onIndexChange,n=e.onVisibleChange,o=Er(e,Po),a=mr(Co),i=a[0],c=a[1],l=M.exports.useRef(0),h=i.images,w=i.visible,g=i.index,f=er({nextId:function(){return l.current+=1},update:function(x){var S=h.findIndex(function(te){return te.key===x.key});if(S>-1){var K=h.slice();return K.splice(S,1,x),void c({images:K})}c(function(te){return{images:te.images.concat(x)}})},remove:function(x){var S=h.filter(function(K){return K.key!==x});c({images:S,index:Math.min(S.length-1,g)})},show:function(x){var S=h.findIndex(function(K){return K.key===x});c({visible:!0,index:S}),typeof n=="function"&&n(!0,S,i)}}),u=er({close:function(){c({visible:!1}),typeof n=="function"&&n(!1,g,i)},changeIndex:function(x){c({index:x}),typeof r=="function"&&r(x,i)}}),y=M.exports.useMemo(function(){return Ce({},i,f)},[i,f]);return I.createElement(fn.Provider,{value:y},t,I.createElement(yn,Ce({images:h,visible:w,index:g,onIndexChange:u.changeIndex,onClose:u.close},o)))}var We=function(e){var t=e.src,r=e.render,n=e.width,o=e.height,a=e.children,i=M.exports.useContext(fn),c=hn(function(){return i.nextId()}),l=M.exports.useState({clientX:void 0,clientY:void 0}),h=l[0],w=l[1],g=M.exports.useRef(null);M.exports.useEffect(function(){return function(){i.remove(c)}},[]);var f=er({render:function(u){if(r)return r(u)},touchStart:function(u){var y=u.touches[0];if(w({clientX:y.clientX,clientY:y.clientY}),a){var x=a.props.onTouchStart;x&&x(u)}},touchEnd:function(u){var y=u.changedTouches[0];if(h.clientX===y.clientX&&h.clientY===y.clientY&&i.show(c),a){var x=a.props.onTouchEnd;x&&x(u)}},click:function(u){if(i.show(c),a){var y=a.props.onClick;y&&y(u)}}});return M.exports.useEffect(function(){i.update({key:c,src:t,originRef:g,render:f.render,width:n,height:o})},[t]),a?M.exports.Children.only(M.exports.cloneElement(a,et?{onTouchStart:f.touchStart,onTouchEnd:f.touchEnd,ref:g}:{onClick:f.click,ref:g})):null};var wn={exports:{}};(function(e,t){(function(r){e.exports=r(null)})(function r(n){var o=/^\0+/g,a=/[\0\r\f]/g,i=/: */g,c=/zoo|gra/,l=/([,: ])(transform)/g,h=/,+\s*(?![^(]*[)])/g,w=/ +\s*(?![^(]*[)])/g,g=/ *[\0] */g,f=/,\r+?/g,u=/([\t\r\n ])*\f?&/g,y=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,x=/\W+/g,S=/@(k\w+)\s*(\S*)\s*/,K=/::(place)/g,te=/:(read-only)/g,V=/\s+(?=[{\];=:>])/g,Z=/([[}=:>])\s+/g,H=/(\{[^{]+?);(?=\})/g,Ne=/\s{2,}/g,Le=/([^\(])(:+) */g,Se=/[svh]\w+-[tblr]{2}/,Ft=/\(\s*(.*)\s*\)/g,Ct=/([\s\S]*?);/g,le=/-self|flex-/g,ie=/[^]*?(:[rp][el]a[\w-]+)[^]*/,St=/stretch|:\s*\w+\-(?:conte|avail)/,Qt=/([^-])(image-set\()/,R="-webkit-",j="-moz-",z="-ms-",be=59,ue=125,Ee=123,xe=40,Fe=41,rt=91,ve=93,de=10,Be=13,ke=9,X=64,oe=32,fe=38,ne=45,$e=95,ge=42,Ie=44,he=58,nt=39,ot=34,ye=47,Ve=62,De=43,ft=126,ht=0,mt=12,Bt=11,pt=107,at=109,kt=115,It=112,At=111,Mt=105,$t=99,Et=100,d=112,C=1,_=1,re=0,v=1,A=1,O=1,G=0,q=0,Y=0,B=[],Ae=[],me=0,ze=null,je=-2,Vt=-1,zt=0,_t=1,sr=2,cr=3,Lt=0,Ze=1,it="",Oe="",Qe="";function Ge(k,P,b,D,p){for(var W,s,$=0,T=0,se=0,N=0,pe=0,Q=0,F=0,_e=0,Re=0,jt=0,Te=0,lt=0,lr=0,Ue=0,L=0,Xe=0,Xt=0,Jt=0,J=0,Rt=b.length,Ut=Rt-1,Me="",E="",ee="",ae="",ur="",Ir="";L<Rt;){if(F=b.charCodeAt(L),L===Ut&&T+N+se+$!==0&&(T!==0&&(F=T===ye?de:ye),N=se=$=0,Rt++,Ut++),T+N+se+$===0){if(L===Ut&&(Xe>0&&(E=E.replace(a,"")),E.trim().length>0)){switch(F){case oe:case ke:case be:case Be:case de:break;default:E+=b.charAt(L)}F=be}if(Xt===1)switch(F){case Ee:case ue:case be:case ot:case nt:case xe:case Fe:case Ie:Xt=0;case ke:case Be:case de:case oe:break;default:for(Xt=0,J=L,pe=F,L--,F=be;J<Rt;)switch(b.charCodeAt(J++)){case de:case Be:case be:++L,F=pe,J=Rt;break;case he:Xe>0&&(++L,F=pe);case Ee:J=Rt}}switch(F){case Ee:for(pe=(E=E.trim()).charCodeAt(0),Te=1,J=++L;L<Rt;){switch(F=b.charCodeAt(L)){case Ee:Te++;break;case ue:Te--;break;case ye:switch(Q=b.charCodeAt(L+1)){case ge:case ye:L=Ot(Q,L,Ut,b)}break;case rt:F++;case xe:F++;case ot:case nt:for(;L++<Ut&&b.charCodeAt(L)!==F;);}if(Te===0)break;L++}switch(ee=b.substring(J,L),pe===ht&&(pe=(E=E.replace(o,"").trim()).charCodeAt(0)),pe){case X:switch(Xe>0&&(E=E.replace(a,"")),Q=E.charCodeAt(1)){case Et:case at:case kt:case ne:W=P;break;default:W=B}if(J=(ee=Ge(P,W,ee,Q,p+1)).length,Y>0&&J===0&&(J=E.length),me>0&&(W=vt(B,E,Jt),s=Ke(cr,ee,W,P,_,C,J,Q,p,D),E=W.join(""),s!==void 0&&(J=(ee=s.trim()).length)===0&&(Q=0,ee="")),J>0)switch(Q){case kt:E=E.replace(Ft,Dt);case Et:case at:case ne:ee=E+"{"+ee+"}";break;case pt:ee=(E=E.replace(S,"$1 $2"+(Ze>0?it:"")))+"{"+ee+"}",A===1||A===2&&st("@"+ee,3)?ee="@"+R+ee+"@"+ee:ee="@"+ee;break;default:ee=E+ee,D===d&&(ae+=ee,ee="")}else ee="";break;default:ee=Ge(P,vt(P,E,Jt),ee,D,p+1)}ur+=ee,lt=0,Xt=0,Ue=0,Xe=0,Jt=0,lr=0,E="",ee="",F=b.charCodeAt(++L);break;case ue:case be:if((J=(E=(Xe>0?E.replace(a,""):E).trim()).length)>1)switch(Ue===0&&((pe=E.charCodeAt(0))===ne||pe>96&&pe<123)&&(J=(E=E.replace(" ",":")).length),me>0&&(s=Ke(_t,E,P,k,_,C,ae.length,D,p,D))!==void 0&&(J=(E=s.trim()).length)===0&&(E="\0\0"),pe=E.charCodeAt(0),Q=E.charCodeAt(1),pe){case ht:break;case X:if(Q===Mt||Q===$t){Ir+=E+b.charAt(L);break}default:if(E.charCodeAt(J-1)===he)break;ae+=gt(E,pe,Q,E.charCodeAt(2))}lt=0,Xt=0,Ue=0,Xe=0,Jt=0,E="",F=b.charCodeAt(++L)}}switch(F){case Be:case de:if(T+N+se+$+q===0)switch(jt){case Fe:case nt:case ot:case X:case ft:case Ve:case ge:case De:case ye:case ne:case he:case Ie:case be:case Ee:case ue:break;default:Ue>0&&(Xt=1)}T===ye?T=0:v+lt===0&&D!==pt&&E.length>0&&(Xe=1,E+="\0"),me*Lt>0&&Ke(zt,E,P,k,_,C,ae.length,D,p,D),C=1,_++;break;case be:case ue:if(T+N+se+$===0){C++;break}default:switch(C++,Me=b.charAt(L),F){case ke:case oe:if(N+$+T===0)switch(_e){case Ie:case he:case ke:case oe:Me="";break;default:F!==oe&&(Me=" ")}break;case ht:Me="\\0";break;case mt:Me="\\f";break;case Bt:Me="\\v";break;case fe:N+T+$===0&&v>0&&(Jt=1,Xe=1,Me="\f"+Me);break;case 108:if(N+T+$+re===0&&Ue>0)switch(L-Ue){case 2:_e===It&&b.charCodeAt(L-3)===he&&(re=_e);case 8:Re===At&&(re=Re)}break;case he:N+T+$===0&&(Ue=L);break;case Ie:T+se+N+$===0&&(Xe=1,Me+="\r");break;case ot:case nt:T===0&&(N=N===F?0:N===0?F:N);break;case rt:N+T+se===0&&$++;break;case ve:N+T+se===0&&$--;break;case Fe:N+T+$===0&&se--;break;case xe:if(N+T+$===0){if(lt===0)switch(2*_e+3*Re){case 533:break;default:Te=0,lt=1}se++}break;case X:T+se+N+$+Ue+lr===0&&(lr=1);break;case ge:case ye:if(N+$+se>0)break;switch(T){case 0:switch(2*F+3*b.charCodeAt(L+1)){case 235:T=ye;break;case 220:J=L,T=ge}break;case ge:F===ye&&_e===ge&&J+2!==L&&(b.charCodeAt(J+2)===33&&(ae+=b.substring(J,L+1)),Me="",T=0)}}if(T===0){if(v+N+$+lr===0&&D!==pt&&F!==be)switch(F){case Ie:case ft:case Ve:case De:case Fe:case xe:if(lt===0){switch(_e){case ke:case oe:case de:case Be:Me+="\0";break;default:Me="\0"+Me+(F===Ie?"":"\0")}Xe=1}else switch(F){case xe:Ue+7===L&&_e===108&&(Ue=0),lt=++Te;break;case Fe:(lt=--Te)==0&&(Xe=1,Me+="\0")}break;case ke:case oe:switch(_e){case ht:case Ee:case ue:case be:case Ie:case mt:case ke:case oe:case de:case Be:break;default:lt===0&&(Xe=1,Me+="\0")}}E+=Me,F!==oe&&F!==ke&&(jt=F)}}Re=_e,_e=F,L++}if(J=ae.length,Y>0&&J===0&&ur.length===0&&P[0].length!==0&&(D!==at||P.length===1&&(v>0?Oe:Qe)===P[0])&&(J=P.join(",").length+2),J>0){if(W=v===0&&D!==pt?function(en){for(var ut,Pe,dr=0,tn=en.length,rn=Array(tn);dr<tn;++dr){for(var Ar=en[dr].split(g),fr="",Yt=0,Mr=0,nn=0,on=0,an=Ar.length;Yt<an;++Yt)if(!((Mr=(Pe=Ar[Yt]).length)===0&&an>1)){if(nn=fr.charCodeAt(fr.length-1),on=Pe.charCodeAt(0),ut="",Yt!==0)switch(nn){case ge:case ft:case Ve:case De:case oe:case xe:break;default:ut=" "}switch(on){case fe:Pe=ut+Oe;case ft:case Ve:case De:case oe:case Fe:case xe:break;case rt:Pe=ut+Pe+Oe;break;case he:switch(2*Pe.charCodeAt(1)+3*Pe.charCodeAt(2)){case 530:if(O>0){Pe=ut+Pe.substring(8,Mr-1);break}default:(Yt<1||Ar[Yt-1].length<1)&&(Pe=ut+Oe+Pe)}break;case Ie:ut="";default:Mr>1&&Pe.indexOf(":")>0?Pe=ut+Pe.replace(Le,"$1"+Oe+"$2"):Pe=ut+Pe+Oe}fr+=Pe}rn[dr]=fr.replace(a,"").trim()}return rn}(P):P,me>0&&(s=Ke(sr,ae,W,k,_,C,J,D,p,D))!==void 0&&(ae=s).length===0)return Ir+ae+ur;if(ae=W.join(",")+"{"+ae+"}",A*re!=0){switch(A===2&&!st(ae,2)&&(re=0),re){case At:ae=ae.replace(te,":"+j+"$1")+ae;break;case It:ae=ae.replace(K,"::"+R+"input-$1")+ae.replace(K,"::"+j+"$1")+ae.replace(K,":"+z+"input-$1")+ae}re=0}}return Ir+ae+ur}function vt(k,P,b){var D=P.trim().split(f),p=D,W=D.length,s=k.length;switch(s){case 0:case 1:for(var $=0,T=s===0?"":k[0]+" ";$<W;++$)p[$]=Je(T,p[$],b,s).trim();break;default:$=0;var se=0;for(p=[];$<W;++$)for(var N=0;N<s;++N)p[se++]=Je(k[N]+" ",D[$],b,s).trim()}return p}function Je(k,P,b,D){var p=P,W=p.charCodeAt(0);switch(W<33&&(W=(p=p.trim()).charCodeAt(0)),W){case fe:switch(v+D){case 0:case 1:if(k.trim().length===0)break;default:return p.replace(u,"$1"+k.trim())}break;case he:switch(p.charCodeAt(1)){case 103:if(O>0&&v>0)return p.replace(y,"$1").replace(u,"$1"+Qe);break;default:return k.trim()+p.replace(u,"$1"+k.trim())}default:if(b*v>0&&p.indexOf("\f")>0)return p.replace(u,(k.charCodeAt(0)===he?"":"$1")+k.trim())}return k+p}function gt(k,P,b,D){var p,W=0,s=k+";",$=2*P+3*b+4*D;if($===944)return function(T){var se=T.length,N=T.indexOf(":",9)+1,pe=T.substring(0,N).trim(),Q=T.substring(N,se-1).trim();switch(T.charCodeAt(9)*Ze){case 0:break;case ne:if(T.charCodeAt(10)!==110)break;default:for(var F=Q.split((Q="",h)),_e=0,N=0,se=F.length;_e<se;N=0,++_e){for(var Re=F[_e],jt=Re.split(w);Re=jt[N];){var Te=Re.charCodeAt(0);if(Ze===1&&(Te>X&&Te<90||Te>96&&Te<123||Te===$e||Te===ne&&Re.charCodeAt(1)!==ne))switch(isNaN(parseFloat(Re))+(Re.indexOf("(")!==-1)){case 1:switch(Re){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:Re+=it}}jt[N++]=Re}Q+=(_e===0?"":",")+jt.join(" ")}}return Q=pe+Q+";",A===1||A===2&&st(Q,1)?R+Q+Q:Q}(s);if(A===0||A===2&&!st(s,1))return s;switch($){case 1015:return s.charCodeAt(10)===97?R+s+s:s;case 951:return s.charCodeAt(3)===116?R+s+s:s;case 963:return s.charCodeAt(5)===110?R+s+s:s;case 1009:if(s.charCodeAt(4)!==100)break;case 969:case 942:return R+s+s;case 978:return R+s+j+s+s;case 1019:case 983:return R+s+j+s+z+s+s;case 883:return s.charCodeAt(8)===ne?R+s+s:s.indexOf("image-set(",11)>0?s.replace(Qt,"$1"+R+"$2")+s:s;case 932:if(s.charCodeAt(4)===ne)switch(s.charCodeAt(5)){case 103:return R+"box-"+s.replace("-grow","")+R+s+z+s.replace("grow","positive")+s;case 115:return R+s+z+s.replace("shrink","negative")+s;case 98:return R+s+z+s.replace("basis","preferred-size")+s}return R+s+z+s+s;case 964:return R+s+z+"flex-"+s+s;case 1023:if(s.charCodeAt(8)!==99)break;return p=s.substring(s.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),R+"box-pack"+p+R+s+z+"flex-pack"+p+s;case 1005:return c.test(s)?s.replace(i,":"+R)+s.replace(i,":"+j)+s:s;case 1e3:switch(W=(p=s.substring(13).trim()).indexOf("-")+1,p.charCodeAt(0)+p.charCodeAt(W)){case 226:p=s.replace(Se,"tb");break;case 232:p=s.replace(Se,"tb-rl");break;case 220:p=s.replace(Se,"lr");break;default:return s}return R+s+z+p+s;case 1017:if(s.indexOf("sticky",9)===-1)return s;case 975:switch(W=(s=k).length-10,$=(p=(s.charCodeAt(W)===33?s.substring(0,W):s).substring(k.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|p.charCodeAt(7))){case 203:if(p.charCodeAt(8)<111)break;case 115:s=s.replace(p,R+p)+";"+s;break;case 207:case 102:s=s.replace(p,R+($>102?"inline-":"")+"box")+";"+s.replace(p,R+p)+";"+s.replace(p,z+p+"box")+";"+s}return s+";";case 938:if(s.charCodeAt(5)===ne)switch(s.charCodeAt(6)){case 105:return p=s.replace("-items",""),R+s+R+"box-"+p+z+"flex-"+p+s;case 115:return R+s+z+"flex-item-"+s.replace(le,"")+s;default:return R+s+z+"flex-line-pack"+s.replace("align-content","").replace(le,"")+s}break;case 973:case 989:if(s.charCodeAt(3)!==ne||s.charCodeAt(4)===122)break;case 931:case 953:if(St.test(k)===!0)return(p=k.substring(k.indexOf(":")+1)).charCodeAt(0)===115?gt(k.replace("stretch","fill-available"),P,b,D).replace(":fill-available",":stretch"):s.replace(p,R+p)+s.replace(p,j+p.replace("fill-",""))+s;break;case 962:if(s=R+s+(s.charCodeAt(5)===102?z+s:"")+s,b+D===211&&s.charCodeAt(13)===105&&s.indexOf("transform",10)>0)return s.substring(0,s.indexOf(";",27)+1).replace(l,"$1"+R+"$2")+s}return s}function st(k,P){var b=k.indexOf(P===1?":":"{"),D=k.substring(0,P!==3?b:10),p=k.substring(b+1,k.length-1);return ze(P!==2?D:D.replace(ie,"$1"),p,P)}function Dt(k,P){var b=gt(P,P.charCodeAt(0),P.charCodeAt(1),P.charCodeAt(2));return b!==P+";"?b.replace(Ct," or ($1)").substring(4):"("+P+")"}function Ke(k,P,b,D,p,W,s,$,T,se){for(var N,pe=0,Q=P;pe<me;++pe)switch(N=Ae[pe].call(yt,k,Q,b,D,p,W,s,$,T,se)){case void 0:case!1:case!0:case null:break;default:Q=N}if(Q!==P)return Q}function Ot(k,P,b,D){for(var p=P+1;p<b;++p)switch(D.charCodeAt(p)){case ye:if(k===ge&&D.charCodeAt(p-1)===ge&&P+2!==p)return p+1;break;case de:if(k===ye)return p+1}return p}function ct(k){for(var P in k){var b=k[P];switch(P){case"keyframe":Ze=0|b;break;case"global":O=0|b;break;case"cascade":v=0|b;break;case"compress":G=0|b;break;case"semicolon":q=0|b;break;case"preserve":Y=0|b;break;case"prefix":ze=null,b?typeof b!="function"?A=1:(A=2,ze=b):A=0}}return ct}function yt(k,P){if(this!==void 0&&this.constructor===yt)return r(k);var b=k,D=b.charCodeAt(0);D<33&&(D=(b=b.trim()).charCodeAt(0)),Ze>0&&(it=b.replace(x,D===rt?"":"-")),D=1,v===1?Qe=b:Oe=b;var p,W=[Qe];me>0&&(p=Ke(Vt,P,W,W,_,C,0,0,0,0))!==void 0&&typeof p=="string"&&(P=p);var s=Ge(B,W,P,0,0);return me>0&&(p=Ke(je,s,W,W,_,C,s.length,0,0,0))!==void 0&&typeof(s=p)!="string"&&(D=0),it="",Qe="",Oe="",re=0,_=1,C=1,G*D==0?s:s.replace(a,"").replace(V,"").replace(Z,"$1").replace(H,"$1").replace(Ne," ")}return yt.use=function k(P){switch(P){case void 0:case null:me=Ae.length=0;break;default:if(typeof P=="function")Ae[me++]=P;else if(typeof P=="object")for(var b=0,D=P.length;b<D;++b)k(P[b]);else Lt=0|!!P}return k},yt.set=ct,n!==void 0&&ct(n),yt})})(wn);var bn=wn.exports,xn={exports:{}};(function(e,t){(function(r){e.exports=r()})(function(){return function(r){var n="/*|*/",o=n+"}";function a(i){if(i)try{r(i+"}")}catch{}}return function(c,l,h,w,g,f,u,y,x,S){switch(c){case 1:if(x===0&&l.charCodeAt(0)===64)return r(l+";"),"";break;case 2:if(y===0)return l+n;break;case 3:switch(y){case 102:case 112:return r(h[0]+l),"";default:return l+(S===0?n:"")}case-2:l.split(o).forEach(a)}}}})})(xn);var So=xn.exports,ko={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Pn=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Io(e,t){return!!(e===t||Pn(e)&&Pn(t))}function Ao(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!Io(e[r],t[r]))return!1;return!0}function Cn(e,t){t===void 0&&(t=Ao);var r,n=[],o,a=!1;function i(){for(var c=[],l=0;l<arguments.length;l++)c[l]=arguments[l];return a&&r===this&&t(c,n)||(o=e.apply(this,c),a=!0,r=this,n=c),o}return i}function Mo(e){var t={};return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var Eo=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,_o=Mo(function(e){return Eo.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function Rr(e){return Object.prototype.toString.call(e).slice(8,-1)}function rr(e){return Rr(e)!=="Object"?!1:e.constructor===Object&&Object.getPrototypeOf(e)===Object.prototype}function Sn(e){return Rr(e)==="Array"}function kn(e){return Rr(e)==="Symbol"}/*! *****************************************************************************
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
***************************************************************************** */function In(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),o=0,t=0;t<r;t++)for(var a=arguments[t],i=0,c=a.length;i<c;i++,o++)n[o]=a[i];return n}function An(e,t,r,n){var o=n.propertyIsEnumerable(t)?"enumerable":"nonenumerable";o==="enumerable"&&(e[t]=r),o==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function Mn(e,t,r){if(!rr(t))return r&&Sn(r)&&r.forEach(function(h){t=h(e,t)}),t;var n={};if(rr(e)){var o=Object.getOwnPropertyNames(e),a=Object.getOwnPropertySymbols(e);n=In(o,a).reduce(function(h,w){var g=e[w];return(!kn(w)&&!Object.getOwnPropertyNames(t).includes(w)||kn(w)&&!Object.getOwnPropertySymbols(t).includes(w))&&An(h,w,g,e),h},{})}var i=Object.getOwnPropertyNames(t),c=Object.getOwnPropertySymbols(t),l=In(i,c).reduce(function(h,w){var g=t[w],f=rr(e)?e[w]:void 0;return r&&Sn(r)&&r.forEach(function(u){g=u(f,g)}),f!==void 0&&rr(g)&&(g=Mn(f,g,r)),An(h,w,g,t),h},n);return l}function Do(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=null,o=e;return rr(e)&&e.extensions&&Object.keys(e).length===1&&(o={},n=e.extensions),t.reduce(function(a,i){return Mn(a,i,n)},o)}var En=function(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r},_n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Nt=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Oo=function(){function e(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),tt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},gr=function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},Ro=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||!Object.prototype.hasOwnProperty.call(e,n)||(r[n]=e[n]);return r},nr=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e},Tr=function(e){return(typeof e=="undefined"?"undefined":_n(e))==="object"&&e.constructor===Object},Nr=Object.freeze([]),or=Object.freeze({});function dt(e){return typeof e=="function"}function Dn(e){return e.displayName||e.name||"Component"}function To(e){return typeof e=="function"&&!(e.prototype&&e.prototype.isReactComponent)}function yr(e){return e&&typeof e.styledComponentId=="string"}var ar=typeof process!="undefined"&&{}.SC_ATTR||"data-styled",wr="data-styled-version",No="data-styled-streamed",Ht=typeof window!="undefined"&&"HTMLElement"in window,On=typeof SC_DISABLE_SPEEDY=="boolean"&&SC_DISABLE_SPEEDY||typeof process!="undefined"&&{}.SC_DISABLE_SPEEDY||!1,bt=function(e){gr(t,e);function t(r){Nt(this,t);for(var n=arguments.length,o=Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];var i,i=nr(this,e.call(this,"An error occurred. See https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/errors.md#"+r+" for more information."+(o.length>0?" Additional arguments: "+o.join(", "):"")));return nr(i)}return t}(Error),Fo=/^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm,Bo=function(e){var t=""+(e||""),r=[];return t.replace(Fo,function(n,o,a){return r.push({componentId:o,matchIndex:a}),n}),r.map(function(n,o){var a=n.componentId,i=n.matchIndex,c=r[o+1],l=c?t.slice(i,c.matchIndex):t.slice(i);return{componentId:a,cssFromDOM:l}})},$o=/^\s*\/\/.*$/gm,Rn=new bn({global:!1,cascade:!0,keyframe:!1,prefix:!1,compress:!1,semicolon:!0}),Tn=new bn({global:!1,cascade:!0,keyframe:!1,prefix:!0,compress:!1,semicolon:!1}),Fr=[],Nn=function(t){if(t===-2){var r=Fr;return Fr=[],r}},Fn=So(function(e){Fr.push(e)}),Bn=void 0,qt=void 0,$n=void 0,Vo=function(t,r,n){return r>0&&n.slice(0,r).indexOf(qt)!==-1&&n.slice(r-qt.length,r)!==qt?"."+Bn:t},zo=function(t,r,n){t===2&&n.length&&n[0].lastIndexOf(qt)>0&&(n[0]=n[0].replace($n,Vo))};Tn.use([zo,Fn,Nn]);Rn.use([Fn,Nn]);var Lo=function(t){return Rn("",t)};function jo(e,t,r){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"&",o=e.join("").replace($o,""),a=t&&r?r+" "+t+" { "+o+" }":o;return Bn=n,qt=t,$n=new RegExp("\\"+qt+"\\b","g"),Tn(r||!t?"":t,a)}var Br=function(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null},$r=function(t,r,n){if(n){var o=t[r]||(t[r]=Object.create(null));o[n]=!0}},br=function(t,r){t[r]=Object.create(null)},Vr=function(t){return function(r,n){return t[r]!==void 0&&t[r][n]}},Vn=function(t){var r="";for(var n in t)r+=Object.keys(t[n]).join(" ")+" ";return r.trim()},Xo=function(t){var r=Object.create(null);for(var n in t)r[n]=tt({},t[n]);return r},zr=function(t){if(t.sheet)return t.sheet;for(var r=t.ownerDocument.styleSheets.length,n=0;n<r;n+=1){var o=t.ownerDocument.styleSheets[n];if(o.ownerNode===t)return o}throw new bt(10)},Yo=function(t,r,n){if(!r)return!1;var o=t.cssRules.length;try{t.insertRule(r,n<=o?n:o)}catch{return!1}return!0},Wo=function(t,r,n){for(var o=r-n,a=r;a>o;a-=1)t.deleteRule(a)},Lr=function(t){return`
/* sc-component-id: `+t+` */
`},jr=function(t,r){for(var n=0,o=0;o<=r;o+=1)n+=t[o];return n},Ho=function(t,r,n){var o=document;t?o=t.ownerDocument:r&&(o=r.ownerDocument);var a=o.createElement("style");a.setAttribute(ar,""),a.setAttribute(wr,"4.4.1");var i=Br();if(i&&a.setAttribute("nonce",i),a.appendChild(o.createTextNode("")),t&&!r)t.appendChild(a);else{if(!r||!t||!r.parentNode)throw new bt(6);r.parentNode.insertBefore(a,n?r:r.nextSibling)}return a},Xr=function(t,r){return function(n){var o=Br(),a=[o&&'nonce="'+o+'"',ar+'="'+Vn(r)+'"',wr+'="4.4.1"',n],i=a.filter(Boolean).join(" ");return"<style "+i+">"+t()+"</style>"}},Yr=function(t,r){return function(){var n,o=(n={},n[ar]=Vn(r),n[wr]="4.4.1",n),a=Br();return a&&(o.nonce=a),m("style",we(ce({},o),{dangerouslySetInnerHTML:{__html:t()}}))}},Wr=function(t){return function(){return Object.keys(t)}},qo=function(t,r){var n=Object.create(null),o=Object.create(null),a=[],i=r!==void 0,c=!1,l=function(u){var y=o[u];return y!==void 0?y:(o[u]=a.length,a.push(0),br(n,u),o[u])},h=function(u,y,x){for(var S=l(u),K=zr(t),te=jr(a,S),V=0,Z=[],H=y.length,Ne=0;Ne<H;Ne+=1){var Le=y[Ne],Se=i;Se&&Le.indexOf("@import")!==-1?Z.push(Le):Yo(K,Le,te+V)&&(Se=!1,V+=1)}i&&Z.length>0&&(c=!0,r().insertRules(u+"-import",Z)),a[S]+=V,$r(n,u,x)},w=function(u){var y=o[u];if(y!==void 0&&t.isConnected!==!1){var x=a[y],S=zr(t),K=jr(a,y)-1;Wo(S,K,x),a[y]=0,br(n,u),i&&c&&r().removeRules(u+"-import")}},g=function(){var u=zr(t),y=u.cssRules,x="";for(var S in o){x+=Lr(S);for(var K=o[S],te=jr(a,K),V=a[K],Z=te-V;Z<te;Z+=1){var H=y[Z];H!==void 0&&(x+=H.cssText)}}return x};return{clone:function(){throw new bt(5)},css:g,getIds:Wr(o),hasNameForId:Vr(n),insertMarker:l,insertRules:h,removeRules:w,sealed:!1,styleTag:t,toElement:Yr(g,n),toHTML:Xr(g,n)}},zn=function(t,r){return t.createTextNode(Lr(r))},Go=function(t,r){var n=Object.create(null),o=Object.create(null),a=r!==void 0,i=!1,c=function(f){var u=o[f];return u!==void 0?u:(o[f]=zn(t.ownerDocument,f),t.appendChild(o[f]),n[f]=Object.create(null),o[f])},l=function(f,u,y){for(var x=c(f),S=[],K=u.length,te=0;te<K;te+=1){var V=u[te],Z=a;if(Z&&V.indexOf("@import")!==-1)S.push(V);else{Z=!1;var H=te===K-1?"":" ";x.appendData(""+V+H)}}$r(n,f,y),a&&S.length>0&&(i=!0,r().insertRules(f+"-import",S))},h=function(f){var u=o[f];if(u!==void 0){var y=zn(t.ownerDocument,f);t.replaceChild(y,u),o[f]=y,br(n,f),a&&i&&r().removeRules(f+"-import")}},w=function(){var f="";for(var u in o)f+=o[u].data;return f};return{clone:function(){throw new bt(5)},css:w,getIds:Wr(o),hasNameForId:Vr(n),insertMarker:c,insertRules:l,removeRules:h,sealed:!1,styleTag:t,toElement:Yr(w,n),toHTML:Xr(w,n)}},Ko=function e(t,r){var n=t===void 0?Object.create(null):t,o=r===void 0?Object.create(null):r,a=function(f){var u=o[f];return u!==void 0?u:o[f]=[""]},i=function(f,u,y){var x=a(f);x[0]+=u.join(" "),$r(n,f,y)},c=function(f){var u=o[f];u!==void 0&&(u[0]="",br(n,f))},l=function(){var f="";for(var u in o){var y=o[u][0];y&&(f+=Lr(u)+y)}return f},h=function(){var f=Xo(n),u=Object.create(null);for(var y in o)u[y]=[o[y][0]];return e(f,u)},w={clone:h,css:l,getIds:Wr(o),hasNameForId:Vr(n),insertMarker:a,insertRules:i,removeRules:c,sealed:!1,styleTag:null,toElement:Yr(l,n),toHTML:Xr(l,n)};return w},Ln=function(t,r,n,o,a){if(Ht&&!n){var i=Ho(t,r,o);return On?Go(i,a):qo(i,a)}return Ko()},Zo=function(t,r,n){for(var o=0,a=n.length;o<a;o+=1){var i=n[o],c=i.componentId,l=i.cssFromDOM,h=Lo(l);t.insertRules(c,h)}for(var w=0,g=r.length;w<g;w+=1){var f=r[w];f.parentNode&&f.parentNode.removeChild(f)}},Qo=/\s+/,xr=void 0;Ht?xr=On?40:1e3:xr=-1;var jn=0,Hr=void 0,Pr=function(){function e(){var t=this,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ht?document.head:null,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;Nt(this,e),this.getImportRuleTag=function(){var o=t.importRuleTag;if(o!==void 0)return o;var a=t.tags[0],i=!0;return t.importRuleTag=Ln(t.target,a?a.styleTag:null,t.forceServer,i)},jn+=1,this.id=jn,this.forceServer=n,this.target=n?null:r,this.tagMap={},this.deferred={},this.rehydratedNames={},this.ignoreRehydratedNames={},this.tags=[],this.capacity=1,this.clones=[]}return e.prototype.rehydrate=function(){if(!Ht||this.forceServer)return this;var r=[],n=[],o=!1,a=document.querySelectorAll("style["+ar+"]["+wr+'="4.4.1"]'),i=a.length;if(!i)return this;for(var c=0;c<i;c+=1){var l=a[c];o||(o=!!l.getAttribute(No));for(var h=(l.getAttribute(ar)||"").trim().split(Qo),w=h.length,g=0,f;g<w;g+=1)f=h[g],this.rehydratedNames[f]=!0;n.push.apply(n,Bo(l.textContent)),r.push(l)}var u=n.length;if(!u)return this;var y=this.makeTag(null);Zo(y,r,n),this.capacity=Math.max(1,xr-u),this.tags.push(y);for(var x=0;x<u;x+=1)this.tagMap[n[x].componentId]=y;return this},e.reset=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;Hr=new e(void 0,r).rehydrate()},e.prototype.clone=function(){var r=new e(this.target,this.forceServer);return this.clones.push(r),r.tags=this.tags.map(function(n){for(var o=n.getIds(),a=n.clone(),i=0;i<o.length;i+=1)r.tagMap[o[i]]=a;return a}),r.rehydratedNames=tt({},this.rehydratedNames),r.deferred=tt({},this.deferred),r},e.prototype.sealAllTags=function(){this.capacity=1,this.tags.forEach(function(r){r.sealed=!0})},e.prototype.makeTag=function(r){var n=r?r.styleTag:null,o=!1;return Ln(this.target,n,this.forceServer,o,this.getImportRuleTag)},e.prototype.getTagForId=function(r){var n=this.tagMap[r];if(n!==void 0&&!n.sealed)return n;var o=this.tags[this.tags.length-1];return this.capacity-=1,this.capacity===0&&(this.capacity=xr,o=this.makeTag(o),this.tags.push(o)),this.tagMap[r]=o},e.prototype.hasId=function(r){return this.tagMap[r]!==void 0},e.prototype.hasNameForId=function(r,n){if(this.ignoreRehydratedNames[r]===void 0&&this.rehydratedNames[n])return!0;var o=this.tagMap[r];return o!==void 0&&o.hasNameForId(r,n)},e.prototype.deferredInject=function(r,n){if(this.tagMap[r]===void 0){for(var o=this.clones,a=0;a<o.length;a+=1)o[a].deferredInject(r,n);this.getTagForId(r).insertMarker(r),this.deferred[r]=n}},e.prototype.inject=function(r,n,o){for(var a=this.clones,i=0;i<a.length;i+=1)a[i].inject(r,n,o);var c=this.getTagForId(r);if(this.deferred[r]!==void 0){var l=this.deferred[r].concat(n);c.insertRules(r,l,o),this.deferred[r]=void 0}else c.insertRules(r,n,o)},e.prototype.remove=function(r){var n=this.tagMap[r];if(n!==void 0){for(var o=this.clones,a=0;a<o.length;a+=1)o[a].remove(r);n.removeRules(r),this.ignoreRehydratedNames[r]=!0,this.deferred[r]=void 0}},e.prototype.toHTML=function(){return this.tags.map(function(r){return r.toHTML()}).join("")},e.prototype.toReactElements=function(){var r=this.id;return this.tags.map(function(n,o){var a="sc-"+r+"-"+o;return M.exports.cloneElement(n.toElement(),{key:a})})},Oo(e,null,[{key:"master",get:function(){return Hr||(Hr=new e().rehydrate())}},{key:"instance",get:function(){return e.master}}]),e}(),Jo=function(){function e(t,r){var n=this;Nt(this,e),this.inject=function(o){o.hasNameForId(n.id,n.name)||o.inject(n.id,n.rules,n.name)},this.toString=function(){throw new bt(12,String(n.name))},this.name=t,this.rules=r,this.id="sc-keyframes-"+t}return e.prototype.getName=function(){return this.name},e}(),Uo=/([A-Z])/g,ea=/^ms-/;function Xn(e){return e.replace(Uo,"-$1").toLowerCase().replace(ea,"-ms-")}function ta(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t=="number"&&t!==0&&!(e in ko)?t+"px":String(t).trim()}var Yn=function(t){return t==null||t===!1||t===""},ra=function e(t,r){var n=[],o=Object.keys(t);return o.forEach(function(a){if(!Yn(t[a])){if(Tr(t[a]))return n.push.apply(n,e(t[a],a)),n;if(dt(t[a]))return n.push(Xn(a)+":",t[a],";"),n;n.push(Xn(a)+": "+ta(a,t[a])+";")}return n}),r?[r+" {"].concat(n,["}"]):n};function ir(e,t,r){if(Array.isArray(e)){for(var n=[],o=0,a=e.length,i;o<a;o+=1)i=ir(e[o],t,r),i!==null&&(Array.isArray(i)?n.push.apply(n,i):n.push(i));return n}if(Yn(e))return null;if(yr(e))return"."+e.styledComponentId;if(dt(e))if(To(e)&&t){var c=e(t);return ir(c,t,r)}else return e;return e instanceof Jo?r?(e.inject(r),e.getName()):e:Tr(e)?ra(e):e.toString()}function Wn(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return dt(e)||Tr(e)?ir(En(Nr,[e].concat(r))):ir(En(e,r))}function qr(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:or;if(!dn.exports.isValidElementType(t))throw new bt(1,String(t));var n=function(){return e(t,r,Wn.apply(void 0,arguments))};return n.withConfig=function(o){return qr(e,t,tt({},r,o))},n.attrs=function(o){return qr(e,t,tt({},r,{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n}function na(e){for(var t=e.length|0,r=t|0,n=0,o;t>=4;)o=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,o=1540483477*(o&65535)+((1540483477*(o>>>16)&65535)<<16),o^=o>>>24,o=1540483477*(o&65535)+((1540483477*(o>>>16)&65535)<<16),r=1540483477*(r&65535)+((1540483477*(r>>>16)&65535)<<16)^o,t-=4,++n;switch(t){case 3:r^=(e.charCodeAt(n+2)&255)<<16;case 2:r^=(e.charCodeAt(n+1)&255)<<8;case 1:r^=e.charCodeAt(n)&255,r=1540483477*(r&65535)+((1540483477*(r>>>16)&65535)<<16)}return r^=r>>>13,r=1540483477*(r&65535)+((1540483477*(r>>>16)&65535)<<16),(r^r>>>15)>>>0}var Cr=52,Hn=function(t){return String.fromCharCode(t+(t>25?39:97))};function oa(e){var t="",r=void 0;for(r=e;r>Cr;r=Math.floor(r/Cr))t=Hn(r%Cr)+t;return Hn(r%Cr)+t}function aa(e){for(var t in e)if(dt(e[t]))return!0;return!1}function qn(e,t){for(var r=0;r<e.length;r+=1){var n=e[r];if(Array.isArray(n)&&!qn(n,t))return!1;if(dt(n)&&!yr(n))return!1}return!t.some(function(o){return dt(o)||aa(o)})}var Gn=function(t){return oa(na(t))},Kn=function(){function e(t,r,n){Nt(this,e),this.rules=t,this.isStatic=qn(t,r),this.componentId=n,Pr.master.hasId(n)||Pr.master.deferredInject(n,[])}return e.prototype.generateAndInjectStyles=function(r,n){var o=this.isStatic,a=this.componentId,i=this.lastClassName;if(Ht&&o&&typeof i=="string"&&n.hasNameForId(a,i))return i;var c=ir(this.rules,r,n),l=Gn(this.componentId+c.join(""));return n.hasNameForId(a,l)||n.inject(this.componentId,jo(c,"."+l,void 0,a),l),this.lastClassName=l,l},e.generateName=function(r){return Gn(r)},e}(),ia=function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:or,n=r?e.theme===r.theme:!1,o=e.theme&&!n?e.theme:t||r.theme;return o},sa=/[[\].#*$><+~=|^:(),"'`-]+/g,ca=/(^-|-$)/g;function Gr(e){return e.replace(sa,"-").replace(ca,"")}function Sr(e){return typeof e=="string"&&!0}function la(e){return Sr(e)?"styled."+e:"Styled("+Dn(e)+")"}var Kr,Zn={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},ua={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Qn=(Kr={},Kr[dn.exports.ForwardRef]={$$typeof:!0,render:!0},Kr),da=Object.defineProperty,fa=Object.getOwnPropertyNames,Jn=Object.getOwnPropertySymbols,ha=Jn===void 0?function(){return[]}:Jn,ma=Object.getOwnPropertyDescriptor,pa=Object.getPrototypeOf,va=Object.prototype,ga=Array.prototype;function Un(e,t,r){if(typeof t!="string"){var n=pa(t);n&&n!==va&&Un(e,n,r);for(var o=ga.concat(fa(t),ha(t)),a=Qn[e.$$typeof]||Zn,i=Qn[t.$$typeof]||Zn,c=o.length,l=void 0,h=void 0;c--;)if(h=o[c],!ua[h]&&!(r&&r[h])&&!(i&&i[h])&&!(a&&a[h])&&(l=ma(t,h),l))try{da(e,h,l)}catch{}return e}return e}function ya(e){return!!(e&&e.prototype&&e.prototype.isReactComponent)}var Zr=M.exports.createContext(),wa=Zr.Consumer;(function(e){gr(t,e);function t(r){Nt(this,t);var n=nr(this,e.call(this,r));return n.getContext=Cn(n.getContext.bind(n)),n.renderInner=n.renderInner.bind(n),n}return t.prototype.render=function(){return this.props.children?m(Zr.Consumer,{children:this.renderInner}):null},t.prototype.renderInner=function(n){var o=this.getContext(this.props.theme,n);return m(Zr.Provider,{value:o,children:this.props.children})},t.prototype.getTheme=function(n,o){if(dt(n)){var a=n(o);return a}if(n===null||Array.isArray(n)||(typeof n=="undefined"?"undefined":_n(n))!=="object")throw new bt(8);return tt({},o,n)},t.prototype.getContext=function(n,o){return this.getTheme(n,o)},t})(M.exports.Component);var eo=M.exports.createContext(),ba=eo.Consumer;(function(e){gr(t,e);function t(r){Nt(this,t);var n=nr(this,e.call(this,r));return n.getContext=Cn(n.getContext),n}return t.prototype.getContext=function(n,o){if(n)return n;if(o)return new Pr(o);throw new bt(4)},t.prototype.render=function(){var n=this.props,o=n.children,a=n.sheet,i=n.target;return m(eo.Provider,{value:this.getContext(a,i),children:o})},t})(M.exports.Component);var to={};function xa(e,t,r){var n=typeof t!="string"?"sc":Gr(t),o=(to[n]||0)+1;to[n]=o;var a=n+"-"+e.generateName(n+o);return r?r+"-"+a:a}var Pa=function(e){gr(t,e);function t(){Nt(this,t);var r=nr(this,e.call(this));return r.attrs={},r.renderOuter=r.renderOuter.bind(r),r.renderInner=r.renderInner.bind(r),r}return t.prototype.render=function(){return m(ba,{children:this.renderOuter})},t.prototype.renderOuter=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Pr.master;return this.styleSheet=n,this.props.forwardedComponent.componentStyle.isStatic?this.renderInner():m(wa,{children:this.renderInner})},t.prototype.renderInner=function(n){var o=this.props.forwardedComponent,a=o.componentStyle,i=o.defaultProps;o.displayName;var c=o.foldedComponentIds,l=o.styledComponentId,h=o.target,w=void 0;a.isStatic?w=this.generateAndInjectStyles(or,this.props):w=this.generateAndInjectStyles(ia(this.props,n,i)||or,this.props);var g=this.props.as||this.attrs.as||h,f=Sr(g),u={},y=tt({},this.props,this.attrs),x=void 0;for(x in y)x==="forwardedComponent"||x==="as"||(x==="forwardedRef"?u.ref=y[x]:x==="forwardedAs"?u.as=y[x]:(!f||_o(x))&&(u[x]=y[x]));return this.props.style&&this.attrs.style&&(u.style=tt({},this.attrs.style,this.props.style)),u.className=Array.prototype.concat(c,l,w!==l?w:null,this.props.className,this.attrs.className).filter(Boolean).join(" "),M.exports.createElement(g,u)},t.prototype.buildExecutionContext=function(n,o,a){var i=this,c=tt({},o,{theme:n});return a.length&&(this.attrs={},a.forEach(function(l){var h=l,w=!1,g=void 0,f=void 0;dt(h)&&(h=h(c),w=!0);for(f in h)g=h[f],w||dt(g)&&!ya(g)&&!yr(g)&&(g=g(c)),i.attrs[f]=g,c[f]=g})),c},t.prototype.generateAndInjectStyles=function(n,o){var a=o.forwardedComponent,i=a.attrs,c=a.componentStyle;if(a.warnTooManyClasses,c.isStatic&&!i.length)return c.generateAndInjectStyles(or,this.styleSheet);var l=c.generateAndInjectStyles(this.buildExecutionContext(n,o,i),this.styleSheet);return l},t}(M.exports.Component);function ro(e,t,r){var n=yr(e),o=!Sr(e),a=t.displayName,i=a===void 0?la(e):a,c=t.componentId,l=c===void 0?xa(Kn,t.displayName,t.parentComponentId):c,h=t.ParentComponent,w=h===void 0?Pa:h,g=t.attrs,f=g===void 0?Nr:g,u=t.displayName&&t.componentId?Gr(t.displayName)+"-"+t.componentId:t.componentId||l,y=n&&e.attrs?Array.prototype.concat(e.attrs,f).filter(Boolean):f,x=new Kn(n?e.componentStyle.rules.concat(r):r,y,u),S=void 0,K=function(V,Z){return m(w,we(ce({},V),{forwardedComponent:S,forwardedRef:Z}))};return K.displayName=i,S=I.forwardRef(K),S.displayName=i,S.attrs=y,S.componentStyle=x,S.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Nr,S.styledComponentId=u,S.target=n?e.target:e,S.withComponent=function(V){var Z=t.componentId,H=Ro(t,["componentId"]),Ne=Z&&Z+"-"+(Sr(V)?V:Gr(Dn(V))),Le=tt({},H,{attrs:y,componentId:Ne,ParentComponent:w});return ro(V,Le,r)},Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(V){this._foldedDefaultProps=n?Do(e.defaultProps,V):V}}),S.toString=function(){return"."+S.styledComponentId},o&&Un(S,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,styledComponentId:!0,target:!0,withComponent:!0}),S}var Ca=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Qr=function(t){return qr(ro,t)};Ca.forEach(function(e){Qr[e]=Qr(e)});Ht&&(window.scCGSHMRCache={});var Gt=Qr,Sa="/react-photo-view/assets/1.67fc9a95.jpg",Jr="/react-photo-view/assets/2.621f0666.jpg",ka="/react-photo-view/assets/3.42cec26f.jpg",Kt="/react-photo-view/assets/4.f42b5f2c.jpg",Ur="/react-photo-view/assets/5.bd775e52.jpg",Ia="/react-photo-view/assets/6.8fb761f7.jpg";const Zt=[Sa,Jr,ka,Kt,Ur,Ia],He=Gt.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`,xt=Gt.div`
  margin-right: 20px;
  margin-bottom: 20px;
  width: 100px;
  height: 100px;
  cursor: pointer;
  background: url('${e=>e.viewImage}') no-repeat center;
  background-size: cover;
`,Pt=Gt.button`
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
`,Aa=Gt.div`
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
`,Ma=Gt.img`
  width: 100px;
  height: 100px;
`;function Ea(){return m(Ye,{children:m(He,{children:Zt.map((e,t)=>m(We,{src:e,children:m(xt,{viewImage:e})},t))})})}const _a=`import React from 'react';
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
`,Da=void 0,Oa=void 0,Ra={code:_a,title:Da,desc:Oa},Ta=!0;var Na=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:Ra,isDemo:Ta,default:Ea}),Fa="/react-photo-view/assets/dog.6cccf4ed.png";const Ba=e=>{const[t,r]=I.useState(!1);return I.useEffect(()=>{document.onfullscreenchange=()=>{r(Boolean(document.fullscreenElement))}},[]),m("svg",we(ce({className:"PhotoView-PhotoSlider__toolbarIcon",fill:"white",width:"44",height:"44",viewBox:"0 0 768 768"},e),{children:t?m("path",{d:"M511.5 256.5h96v63h-159v-159h63v96zM448.5 607.5v-159h159v63h-96v96h-63zM256.5 256.5v-96h63v159h-159v-63h96zM160.5 511.5v-63h159v159h-63v-96h-96z"}):m("path",{d:"M448.5 160.5h159v159h-63v-96h-96v-63zM544.5 544.5v-96h63v159h-159v-63h96zM160.5 319.5v-159h159v63h-96v96h-63zM223.5 448.5v96h96v63h-159v-159h63z"})}))};function $a(){const[e,t]=I.useState(Zt);function r(){if(document.fullscreenElement)document.exitFullscreen();else{const n=document.getElementById("PhotoView_Slider");n&&n.requestFullscreen()}}return m(Ye,{toolbarRender:({rotate:n,onRotate:o,onScale:a,scale:i,index:c})=>wt(co,{children:[m("svg",{className:"PhotoView-PhotoSlider__toolbarIcon",width:"44",height:"44",viewBox:"0 0 768 768",fill:"white",onClick:()=>a(i+.2),children:m("path",{d:"M384 640.5q105 0 180.75-75.75t75.75-180.75-75.75-180.75-180.75-75.75-180.75 75.75-75.75 180.75 75.75 180.75 180.75 75.75zM384 64.5q132 0 225.75 93.75t93.75 225.75-93.75 225.75-225.75 93.75-225.75-93.75-93.75-225.75 93.75-225.75 225.75-93.75zM415.5 223.5v129h129v63h-129v129h-63v-129h-129v-63h129v-129h63z"})}),m("svg",{className:"PhotoView-PhotoSlider__toolbarIcon",width:"44",height:"44",viewBox:"0 0 768 768",fill:"white",onClick:()=>a(i-.2),children:m("path",{d:"M384 640.5q105 0 180.75-75.75t75.75-180.75-75.75-180.75-180.75-75.75-180.75 75.75-75.75 180.75 75.75 180.75 180.75 75.75zM384 64.5q132 0 225.75 93.75t93.75 225.75-93.75 225.75-225.75 93.75-225.75-93.75-93.75-225.75 93.75-225.75 225.75-93.75zM223.5 352.5h321v63h-321v-63z"})}),m("svg",{className:"PhotoView-PhotoSlider__toolbarIcon",onClick:()=>o(n+90),width:"44",height:"44",fill:"white",viewBox:"0 0 768 768",children:m("path",{d:"M565.5 202.5l75-75v225h-225l103.5-103.5c-34.5-34.5-82.5-57-135-57-106.5 0-192 85.5-192 192s85.5 192 192 192c84 0 156-52.5 181.5-127.5h66c-28.5 111-127.5 192-247.5 192-141 0-255-115.5-255-256.5s114-256.5 255-256.5c70.5 0 135 28.5 181.5 75z"})}),document.fullscreenEnabled&&m(Ba,{onClick:r}),m("svg",{className:"PhotoView-PhotoSlider__toolbarIcon",onClick:()=>{t(l=>{const h=[...l];return h.splice(c,1,Fa),h})},xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",fill:"white",viewBox:"0 0 768 768",children:m("path",{d:"M384 559.5c-75 0-138-45-163.5-111h327c-25.5 66-88.5 111-163.5 111zM271.5 352.5c-27 0-48-21-48-48s21-48 48-48 48 21 48 48-21 48-48 48zM496.5 352.5c-27 0-48-21-48-48s21-48 48-48 48 21 48 48-21 48-48 48zM384 640.5c141 0 256.5-115.5 256.5-256.5s-115.5-256.5-256.5-256.5-256.5 115.5-256.5 256.5 115.5 256.5 256.5 256.5zM384 64.5c177 0 319.5 142.5 319.5 319.5s-142.5 319.5-319.5 319.5-319.5-142.5-319.5-319.5 142.5-319.5 319.5-319.5z"})})]}),children:m(He,{children:e.map((n,o)=>m(We,{src:n,children:m(xt,{viewImage:n})},o))})})}const Va=`import React from 'react';
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
`,za=void 0,La=void 0,ja={code:Va,title:za,desc:La},Xa=!0;var Ya=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:ja,isDemo:Xa,default:$a});function Wa(){return m(Ye,{children:m(He,{children:m(We,{src:Kt,children:m(Pt,{primary:!0,children:"\u70B9\u51FB\u9884\u89C8"})})})})}const Ha=`import React from 'react';
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
`,qa=void 0,Ga=void 0,Ka={code:Ha,title:qa,desc:Ga},Za=!0;var Qa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:Ka,isDemo:Za,default:Wa});function Ja(){return m(Ye,{loop:!1,children:m(He,{children:m(We,{src:Kt,children:m(xt,{viewImage:Kt})})})})}const Ua=`import React from 'react';
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
`,ei=void 0,ti=void 0,ri={code:Ua,title:ei,desc:ti},ni=!0;var oi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:ri,isDemo:ni,default:Ja});function ai(){return m(Ye,{maskOpacity:.5,children:m(He,{children:m(We,{src:Jr,children:m(xt,{viewImage:Jr})})})})}const ii=`import React from 'react';
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
`,si=void 0,ci=void 0,li={code:ii,title:si,desc:ci},ui=!0;var di=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:li,isDemo:ui,default:ai});function fi(){return m(Ye,{maskOpacity:.5,bannerVisible:!1,loop:!1,children:m(He,{children:m(We,{src:Ur,children:m(xt,{viewImage:Ur})})})})}const hi=`import React from 'react';
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
`,mi=void 0,pi=void 0,vi={code:hi,title:mi,desc:pi},gi=!0;var yi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:vi,isDemo:gi,default:fi});function wi(){return m(Ye,{pullClosable:!1,maskClosable:!1,loop:!1,children:m(He,{children:m(We,{src:Kt,children:m(xt,{viewImage:Kt})})})})}const bi=`import React from 'react';
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
`,xi=void 0,Pi=void 0,Ci={code:bi,title:xi,desc:Pi},Si=!0;var ki=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:Ci,isDemo:Si,default:wi}),Ii="/react-photo-view/assets/default-photo.136a6935.svg";function Ai(){return wt(He,{children:[m(Ye,{children:m(We,{src:"/error.png",children:m(Pt,{children:"\u65E0\u9ED8\u8BA4\u56FE"})})}),m(Ye,{brokenElement:m(Ma,{src:Ii}),children:m(We,{src:"/error.png",children:m(Pt,{children:"\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u56FE"})})})]})}const Mi=`import React from 'react';
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
`,Ei=void 0,_i=void 0,Di={code:Mi,title:Ei,desc:_i},Oi=!0;var Ri=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:Di,isDemo:Oi,default:Ai});function Ti(){const[e,t]=I.useState(!1),[r,n]=I.useState(0);function o(){t(!0)}function a(){t(!1)}return wt(He,{children:[m(Pt,{onClick:()=>n(2),children:"setPhotoIndex(2)"}),m(Pt,{onClick:()=>n(4),children:"setPhotoIndex(4)"}),m(Pt,{onClick:o,primary:!0,children:"\u6253\u5F00 PhotoSlider"}),m(yn,{images:Zt.map(i=>({src:i,key:i})),visible:e,onClose:a,index:r,onIndexChange:n})]})}const Ni=`import React from 'react';
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
`,Fi=void 0,Bi=void 0,$i={code:Ni,title:Fi,desc:Bi},Vi=!0;var zi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:$i,isDemo:Vi,default:Ti});function Li(){return m(Ye,{children:m(He,{children:Zt.map((e,t)=>m(We,{src:e,children:t<2?m(xt,{viewImage:e}):void 0},t))})})}const ji=`import React from 'react';
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
`,Xi=void 0,Yi=void 0,Wi={code:ji,title:Xi,desc:Yi},Hi=!0;var qi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:Wi,isDemo:Hi,default:Li});function Gi(){return m(Ye,{overlayRender:({rotate:e,onRotate:t,scale:r,index:n})=>wt(Aa,{children:[wt("div",{children:[m("div",{children:m("a",{onClick:()=>t(e+90),children:"\u65CB\u8F6C"})}),"\u65CB\u8F6C\u89D2\u5EA6 ",e]}),wt("div",{children:["\u7F29\u653E\uFF1A",r]}),wt("div",{children:["\u63CF\u8FF0\uFF1A",Zt[n]]})]}),children:m(He,{children:Zt.map((e,t)=>m(We,{src:e,children:m(xt,{viewImage:e})},t))})})}const Ki=`import React from 'react';
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
`,Zi=void 0,Qi=void 0,Ji={code:Ki,title:Zi,desc:Qi},Ui=!0;var es=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:Ji,isDemo:Ui,default:Gi});const ts=Gt.div`
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
`,kr=400;function rs(){return m(Ye,{maskOpacity:.5,loop:!1,children:m(He,{children:m(We,{width:kr,height:kr,render:({scale:e,attrs:t})=>{const n=(t.style.width-kr)/kr,o=e===1?e+n:1+n;return m(ts,we(ce({},t),{children:wt("div",{style:{transform:`scale(${o})`},children:[m("div",{children:"\u81EA\u5B9A\u4E49\u8282\u70B9"}),m(Pt,{children:"\u6309\u94AE"}),m("input",{onMouseDown:a=>a.stopPropagation()})]})}))},children:m(Pt,{primary:!0,children:"\u81EA\u5B9A\u4E49\u6E32\u67D3"})})})})}const ns=`import React from 'react';
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
`,os=void 0,as=void 0,is={code:ns,title:os,desc:as},ss=!0;var cs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",demoMeta:is,isDemo:ss,default:rs});const ls=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),U("div",ce({},r))},qe=ls("Demo"),us={},ds="wrapper";function no(r){var n=r,{components:e}=n,t=un(n,["components"]);return U(ds,we(ce(ce({},us),t),{components:e,mdxType:"MDXLayout"}),U("h3",null,"\u57FA\u672C\u4F7F\u7528"),U(qe,we(ce({},Na),{mdxType:"Demo"})),U("h3",null,"\u81EA\u5B9A\u4E49\u5DE5\u5177\u680F"),U(qe,we(ce({},Ya),{mdxType:"Demo"})),U("h3",null,"\u901A\u8FC7\u6309\u94AE\u89E6\u53D1"),U(qe,we(ce({},Qa),{mdxType:"Demo"})),U("h3",null,"\u7981\u7528\u5FAA\u73AF\u9884\u89C8"),U(qe,we(ce({},oi),{mdxType:"Demo"})),U("h3",null,"\u81EA\u5B9A\u4E49\u8499\u5C42\u900F\u660E\u5EA6"),U(qe,we(ce({},di),{mdxType:"Demo"})),U("h3",null,"\u4E0D\u663E\u793A\u9876\u90E8\u6309\u94AE\u533A\u57DF"),U(qe,we(ce({},yi),{mdxType:"Demo"})),U("h3",null,"\u7981\u7528\u70B9\u51FB\u8499\u5C42\u5173\u95ED"),U(qe,we(ce({},ki),{mdxType:"Demo"})),U("h3",null,"\u81EA\u5B9A\u4E49\u52A0\u8F7D\u5931\u8D25\u6E32\u67D3"),U(qe,we(ce({},Ri),{mdxType:"Demo"})),U("h3",null,"\u76F4\u63A5\u4F7F\u7528 PhotoSlider"),U(qe,we(ce({},zi),{mdxType:"Demo"})),U("h3",null,"\u4E24\u5F20\u7F29\u7565\u56FE\u9884\u89C8\u66F4\u591A"),U(qe,we(ce({},qi),{mdxType:"Demo"})),U("h3",null,"\u81EA\u5B9A\u4E49\u63CF\u8FF0"),U(qe,we(ce({},es),{mdxType:"Demo"})),U("h3",null,"\u81EA\u5B9A\u4E49\u6E32\u67D3\u8282\u70B9"),U(qe,we(ce({},cs),{mdxType:"Demo"})))}no.isMDXComponent=!0;var fs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:no});const hs={};hs.main=fs;export{hs as default};
