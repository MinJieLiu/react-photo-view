var F=Object.defineProperty,E=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var n=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var h=(e,t,a)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,r=(e,t)=>{for(var a in t||(t={}))n.call(t,a)&&h(e,a,t[a]);if(i)for(var a of i(t))m.call(t,a)&&h(e,a,t[a]);return e},p=(e,t)=>E(e,N(t));var l=(e,t)=>{var a={};for(var o in e)n.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&i)for(var o of i(e))t.indexOf(o)<0&&m.call(e,o)&&(a[o]=e[o]);return a};import{c as u}from"./index.7ad59050.js";const d={},g="wrapper";function s(a){var o=a,{components:e}=o,t=l(o,["components"]);return u(g,p(r(r({},d),t),{components:e,mdxType:"MDXLayout"}),u("h1",null,"react-photo-view"),u("p",null,u("strong",{parentName:"p"},"\u4E00\u6B3E\u8D85\u7CBE\u81F4\u7684\u56FE\u7247\u9884\u89C8\u65B9\u6848")),u("p",null,u("a",{parentName:"p",href:"https://www.npmjs.com/package/react-photo-view"},u("img",{parentName:"a",src:"https://img.shields.io/npm/v/react-photo-view.svg?style=flat-square",alt:"npm"})),`
`,u("a",{parentName:"p",href:"https://github.com/MinJieLiu/react-photo-view"},u("img",{parentName:"a",src:"https://badgen.net/bundlephobia/minzip/react-photo-view",alt:"react-photo-view"})),`
`,u("a",{parentName:"p",href:"https://github.com/MinJieLiu/react-photo-view"},u("img",{parentName:"a",src:"https://badgen.net/npm/dt/react-photo-view",alt:"react-photo-view"}))),u("p",null,"\u6587\u6863: ",u("a",{parentName:"p",href:"https://minjieliu.github.io/react-photo-view"},"https://minjieliu.github.io/react-photo-view")),u("h2",null,"\u7279\u6027"),u("ol",null,u("li",{parentName:"ol"},"\u6ED1\u52A8\u5DE6\u53F3\u5207\u6362"),u("li",{parentName:"ol"},"\u62D6\u52A8\u9884\u89C8"),u("li",{parentName:"ol"},"\u7269\u7406\u51CF\u901F"),u("li",{parentName:"ol"},"\u53CC\u51FB\u653E\u5927/\u7F29\u5C0F"),u("li",{parentName:"ol"},"\u53CC\u6307\u653E\u5927/\u7F29\u5C0F/\u5E73\u79FB"),u("li",{parentName:"ol"},"\u5DE6\u53F3\u5207\u6362\u5BFC\u822A"),u("li",{parentName:"ol"},"\u4E0A/\u4E0B\u6ED1\u5173\u95ED"),u("li",{parentName:"ol"},"\u952E\u76D8\u5BFC\u822A"),u("li",{parentName:"ol"},"\u65CB\u8F6C API"),u("li",{parentName:"ol"},"\u70B9\u51FB\u5207\u6362\u63A7\u4EF6"),u("li",{parentName:"ol"},"\u7F29\u653E\u52A8\u753B"),u("li",{parentName:"ol"},"\u81EA\u9002\u5E94\u56FE\u50CF\u9002\u5E94"),u("li",{parentName:"ol"},"\u957F\u56FE\u6A21\u5F0F"),u("li",{parentName:"ol"},"\u81EA\u5B9A\u4E49\u5143\u7D20\u9884\u89C8"),u("li",{parentName:"ol"},"\u652F\u6301\u684C\u9762\u7AEF\uFF08\u517C\u5BB9 IE10+\uFF09/\u79FB\u52A8\u7AEF"),u("li",{parentName:"ol"},"\u57FA\u4E8E ",u("inlineCode",{parentName:"li"},"typescript")),u("li",{parentName:"ol"},"6KB"),u("li",{parentName:"ol"},"\u65E0\u4F9D\u8D56"),u("li",{parentName:"ol"},"\u652F\u6301\u670D\u52A1\u7AEF\u6E32\u67D3"),u("li",{parentName:"ol"},"\u9AD8\u6269\u5C55\u6027")),u("h2",null,"\u5B89\u88C5"),u("pre",null,u("code",{parentName:"pre",className:"language-bash"},`yarn add react-photo-view
`)),u("h2",null,"\u57FA\u672C\u4F7F\u7528:"),u("pre",null,u("code",{parentName:"pre",className:"language-js"},`import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

function ImageView() {
  return (
    <PhotoProvider>
      <div>
        <PhotoView src="/1.jpg">
          <img src="/1-thumbnail.jpg" alt="" />
        </PhotoView>
      </div>

      <div>
        <PhotoView src="/2.jpg">
          <img src="/2-thumbnail.jpg" alt="" />
        </PhotoView>
      </div>
    </PhotoProvider>
  );
}
`)))}s.isMDXComponent=!0;const w={},C="wrapper";function c(a){var o=a,{components:e}=o,t=l(o,["components"]);return u(C,p(r(r({},w),t),{components:e,mdxType:"MDXLayout"}),u(s,{mdxType:"README"}))}c.isMDXComponent=!0;var v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:c});const D={};D.main=v;export{D as default};
