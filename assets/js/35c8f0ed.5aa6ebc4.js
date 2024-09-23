"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[857],{9994:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=i(2322),t=i(5392);const r={id:"index",title:"@nf-team/eslint-config",sidebar_label:"@nf-team/eslint-config",sidebar_position:0,custom_edit_url:null},l="@nf-team/eslint-config",o={id:"eslint-config/index",title:"@nf-team/eslint-config",description:"\ud83d\ude80 Quick Overview",source:"@site/docs/eslint-config/index.md",sourceDirName:"eslint-config",slug:"/eslint-config/",permalink:"/frontend-libraries/docs/eslint-config/",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"@nf-team/eslint-config",sidebar_label:"@nf-team/eslint-config",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"hooks",permalink:"/frontend-libraries/docs/react/modules/hooks"},next:{title:"Readme",permalink:"/frontend-libraries/docs/storage/"}},a={},c=[{value:"\ud83d\ude80 Quick Overview",id:"-quick-overview",level:2},{value:"\ud83e\udd14 What eslint extensions does <code>@nf-team/eslint-config</code> have?",id:"-what-eslint-extensions-does-nf-teameslint-config-have",level:2},{value:"\ud83d\udc49 Sort default imports",id:"-sort-default-imports",level:3},{value:"\ud83d\udc1b Bug reporting",id:"-bug-reporting",level:2},{value:"\ud83d\udd12 LICENSE",id:"-license",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"nf-teameslint-config",children:"@nf-team/eslint-config"})}),"\n",(0,s.jsx)("a",{href:"https://github.com/mbti-nf-team/frontend-libraries/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc",children:(0,s.jsx)("img",{src:"https://img.shields.io/github/issues/mbti-nf-team/frontend-libraries?style=flat-square"})}),"\n",(0,s.jsx)("a",{href:"https://github.com/mbti-nf-team/frontend-libraries/blob/main/LICENSE",children:(0,s.jsx)("img",{src:"https://img.shields.io/github/license/mbti-nf-team/frontend-libraries?style=flat-square"})}),"\n",(0,s.jsx)(n.h2,{id:"-quick-overview",children:"\ud83d\ude80 Quick Overview"}),"\n",(0,s.jsxs)(n.p,{children:["Install ",(0,s.jsx)(n.code,{children:"@nf-team/eslint-config"})," dependency"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev @nf-team/eslint-config\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Add ",(0,s.jsx)(n.code,{children:"@nf-team/eslint-config"})," to ",(0,s.jsx)(n.code,{children:"extends"})," in your ",(0,s.jsx)(n.code,{children:".eslintrc"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  // ...\n  extends: ['@nf-team/eslint-config'],\n  rules: {\n    // ...\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"-what-eslint-extensions-does-nf-teameslint-config-have",children:["\ud83e\udd14 What eslint extensions does ",(0,s.jsx)(n.code,{children:"@nf-team/eslint-config"})," have?"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/eslint-config-airbnb",children:"eslint-config-airbnb"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/eslint-config-airbnb-typescript",children:"eslint-config-airbnb-typescript"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/eslint-plugin-react",children:"eslint-plugin-react"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/eslint-plugin-react-hooks",children:"eslint-plugin-react-hooks"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/eslint-plugin-simple-import-sort",children:"eslint-plugin-simple-import-sort"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/eslint-plugin-unused-imports",children:"eslint-plugin-unused-imports"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/mbti-nf-team/frontend-libraries/blob/main/packages/eslint/index.js",children:"View more extensions.."})}),"\n",(0,s.jsx)(n.h3,{id:"-sort-default-imports",children:"\ud83d\udc49 Sort default imports"}),"\n",(0,s.jsxs)(n.p,{children:["This is the default value for the ",(0,s.jsx)(n.code,{children:"groups"})," option:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"[\n  // Side effect imports.\n  ['^\\\\u0000'],\n  // Node.js builtins. You could also generate this regex if you use a `.js` config.\n  // For example: `^(${require(\"module\").builtinModules.join(\"|\")})(/|$)`\n  // OR Node.js builtins prefixed with `node:`.\n  ['^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)', '^node:'],\n  // Packages. `react` related packages\n  ['^react'],\n  // Packages. Things that start with a letter (or digit or underscore), or `@` followed by a letter.\n  ['^@?\\\\w'],\n  // Parent imports. Put `..` last.\n  ['^\\\\.\\\\.(?!/?$)', '^\\\\.\\\\./?$'],\n  // Other relative imports. Put same-folder imports and `.` last.\n  ['^\\\\./(?=.*/)(?!/?$)', '^\\\\.(?!/?$)', '^\\\\./?$'],\n  // Svg file imports.\n  ['^.+\\\\.svg$'],\n  // Style imports.\n  ['^.+\\\\.s?css$'],\n]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"-bug-reporting",children:"\ud83d\udc1b Bug reporting"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/mbti-nf-team/frontend-libraries/issues",children:"Issues"})}),"\n",(0,s.jsx)(n.h2,{id:"-license",children:"\ud83d\udd12 LICENSE"}),"\n",(0,s.jsxs)(n.p,{children:["This Project is ",(0,s.jsx)(n.a,{href:"https://github.com/mbti-nf-team/frontend-libraries/blob/main/LICENSE",children:"MIT licensed"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5392:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>l});var s=i(2784);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);