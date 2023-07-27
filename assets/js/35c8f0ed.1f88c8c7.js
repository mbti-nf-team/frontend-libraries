"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[857],{876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var i=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||s;return n?i.createElement(d,a(a({ref:t},c),{},{components:n})):i.createElement(d,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,a[1]=o;for(var p=2;p<s;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var i=n(7896),r=(n(2784),n(876));const s={id:"index",title:"@nft-team/eslint-config",sidebar_label:"@nft-team/eslint-config",sidebar_position:0,custom_edit_url:null},a="@nft-team/eslint-config",o={unversionedId:"eslint-config/index",id:"eslint-config/index",title:"@nft-team/eslint-config",description:"\ud83d\ude80 Quick Overview",source:"@site/docs/eslint-config/index.md",sourceDirName:"eslint-config",slug:"/eslint-config/",permalink:"/frontend-libraries/docs/eslint-config/",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"@nft-team/eslint-config",sidebar_label:"@nft-team/eslint-config",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"hooks",permalink:"/frontend-libraries/docs/react/modules/hooks"}},l={},p=[{value:"\ud83d\ude80 Quick Overview",id:"-quick-overview",level:2},{value:"\ud83e\udd14 What eslint extensions does <code>@nft-team/eslint-config</code> have?",id:"-what-eslint-extensions-does-nft-teameslint-config-have",level:2},{value:"\ud83d\udc49 Sort default imports",id:"-sort-default-imports",level:3},{value:"\ud83d\udc1b Bug reporting",id:"-bug-reporting",level:2},{value:"\ud83d\udd12 LICENSE",id:"-license",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nft-teameslint-config"},"@nft-team/eslint-config"),(0,r.kt)("a",{href:"https://github.com/mbti-nf-team/frontend-libraries/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc"},(0,r.kt)("img",{src:"https://img.shields.io/github/issues/mbti-nf-team/frontend-libraries?style=flat-square"})),(0,r.kt)("a",{href:"https://github.com/mbti-nf-team/frontend-libraries/blob/main/LICENSE"},(0,r.kt)("img",{src:"https://img.shields.io/github/license/mbti-nf-team/frontend-libraries?style=flat-square"})),(0,r.kt)("h2",{id:"-quick-overview"},"\ud83d\ude80 Quick Overview"),(0,r.kt)("p",null,"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"@nft-team/eslint-config")," dependency"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @nft-team/eslint-config\n")),(0,r.kt)("p",null,"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"@nft-team/eslint-config")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"extends")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},".eslintrc")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  // ...\n  extends: ['@nft-team/eslint-config'],\n  rules: {\n    // ...\n  },\n};\n")),(0,r.kt)("h2",{id:"-what-eslint-extensions-does-nft-teameslint-config-have"},"\ud83e\udd14 What eslint extensions does ",(0,r.kt)("inlineCode",{parentName:"h2"},"@nft-team/eslint-config")," have?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/eslint-config-airbnb"},"eslint-config-airbnb")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/eslint-config-airbnb-typescript"},"eslint-config-airbnb-typescript")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/eslint-plugin-react"},"eslint-plugin-react")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/eslint-plugin-react-hooks"},"eslint-plugin-react-hooks")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/eslint-plugin-simple-import-sort"},"eslint-plugin-simple-import-sort")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/eslint-plugin-unused-imports"},"eslint-plugin-unused-imports"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mbti-nf-team/frontend-libraries/blob/main/packages/eslint/index.js"},"View more extensions..")),(0,r.kt)("h3",{id:"-sort-default-imports"},"\ud83d\udc49 Sort default imports"),(0,r.kt)("p",null,"This is the default value for the ",(0,r.kt)("inlineCode",{parentName:"p"},"groups")," option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"[\n  // Side effect imports.\n  ['^\\\\u0000'],\n  // Node.js builtins. You could also generate this regex if you use a `.js` config.\n  // For example: `^(${require(\"module\").builtinModules.join(\"|\")})(/|$)`\n  // OR Node.js builtins prefixed with `node:`.\n  ['^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)', '^node:'],\n  // Packages. `react` related packages\n  ['^react'],\n  // Packages. Things that start with a letter (or digit or underscore), or `@` followed by a letter.\n  ['^@?\\\\w'],\n  // Parent imports. Put `..` last.\n  ['^\\\\.\\\\.(?!/?$)', '^\\\\.\\\\./?$'],\n  // Other relative imports. Put same-folder imports and `.` last.\n  ['^\\\\./(?=.*/)(?!/?$)', '^\\\\.(?!/?$)', '^\\\\./?$'],\n  // Svg file imports.\n  ['^.+\\\\.svg$'],\n  // Style imports.\n  ['^.+\\\\.s?css$'],\n]\n")),(0,r.kt)("h2",{id:"-bug-reporting"},"\ud83d\udc1b Bug reporting"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mbti-nf-team/frontend-libraries/issues"},"Issues")),(0,r.kt)("h2",{id:"-license"},"\ud83d\udd12 LICENSE"),(0,r.kt)("p",null,"This Project is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mbti-nf-team/frontend-libraries/blob/main/LICENSE"},"MIT licensed"),"."))}m.isMDXComponent=!0}}]);