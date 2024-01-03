"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[862],{5026:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var l=t(2322),r=t(5392);const s={id:"components",title:"Module: components",sidebar_label:"components",sidebar_position:0,custom_edit_url:null},d=void 0,i={id:"react/modules/components",title:"Module: components",description:"Functions",source:"@site/docs/react/modules/components.md",sourceDirName:"react/modules",slug:"/react/modules/components",permalink:"/frontend-libraries/docs/react/modules/components",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"components",title:"Module: components",sidebar_label:"components",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"Exports",permalink:"/frontend-libraries/docs/react/modules"},next:{title:"hooks",permalink:"/frontend-libraries/docs/react/modules/hooks"}},c={},o=[{value:"Functions",id:"functions",level:2},{value:"ClientOnly",id:"clientonly",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"DelayRenderComponent",id:"delayrendercomponent",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"GlobalPortal",id:"globalportal",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,l.jsx)(n.h3,{id:"clientonly",children:"ClientOnly"}),"\n",(0,l.jsxs)(n.p,{children:["\u25b8 ",(0,l.jsx)(n.strong,{children:"ClientOnly"}),"(",(0,l.jsx)(n.code,{children:"\xabdestructured\xbb"}),"): ",(0,l.jsx)(n.code,{children:"ReactElement"})," | ",(0,l.jsx)(n.code,{children:"null"})]}),"\n",(0,l.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"\xabdestructured\xbb"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"Object"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:["\u203a\xa0",(0,l.jsx)(n.code,{children:"children?"})]}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"ReactNode"})})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"ReactElement"})," | ",(0,l.jsx)(n.code,{children:"null"})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"Description"})})}),"\n",(0,l.jsxs)(n.p,{children:["Component\uc758 mount \uc5ec\ubd80\ub97c \ud655\uc778\ud558\uc5ec mount\uac00 \ub41c \uacbd\uc6b0, Component\ub97c render\ud574\uc90d\ub2c8\ub2e4.\nmount\ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0\uc5d0\ub294 Component\ub97c render\ud574\uc8fc\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. ",(0,l.jsx)("br",{}),"\nSSR \ud658\uacbd\uc5d0\uc11c \uc2e4\uc81c\ub85c \ucef4\ud3ec\ub10c\ud2b8\uac00 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c mount \ub41c \uc774\ud6c4\uc5d0\ub9cc \ud574\ub2f9 Component\ub97c \ubcf4\uc5ec\uc8fc\uace0 \uc2f6\uc744\ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.\n(SSR \ud658\uacbd\uc5d0\uc11c Hydration \uc624\ub958\ub85c \uc778\ud574\uc11c \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud558\ub294 \ubb38\uc81c\ub97c \ud574\uacb0\ud569\ub2c8\ub2e4.)"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"Example"})})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:"function ClintOnlyComponent() {\n return (\n   <ClientOnly>\n     <div>Render only client environment</div>\n   </ClientOnly>\n );\n}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/mbti-nf-team/frontend-libraries/blob/4d5a48a/packages/react/src/components/ClientOnly.tsx#L22",children:"packages/react/src/components/ClientOnly.tsx:22"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"delayrendercomponent",children:"DelayRenderComponent"}),"\n",(0,l.jsxs)(n.p,{children:["\u25b8 ",(0,l.jsx)(n.strong,{children:"DelayRenderComponent"}),"(",(0,l.jsx)(n.code,{children:"\xabdestructured\xbb"}),"): ",(0,l.jsx)(n.code,{children:"null"})," | ",(0,l.jsx)(n.code,{children:"Element"})]}),"\n",(0,l.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"\xabdestructured\xbb"})}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,l.jsx)(n.code,{children:"PropsWithChildren"}),"<",(0,l.jsx)(n.code,{children:"Props"}),">"]})]})})]}),"\n",(0,l.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"null"})," | ",(0,l.jsx)(n.code,{children:"Element"})]}),"\n",(0,l.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/mbti-nf-team/frontend-libraries/blob/4d5a48a/packages/react/src/components/DelayRenderComponent.tsx#L12",children:"packages/react/src/components/DelayRenderComponent.tsx:12"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"globalportal",children:"GlobalPortal"}),"\n",(0,l.jsxs)(n.p,{children:["\u25b8 ",(0,l.jsx)(n.strong,{children:"GlobalPortal"}),"(",(0,l.jsx)(n.code,{children:"elementId"}),"): ",(0,l.jsx)(n.code,{children:"null"})," | ",(0,l.jsx)(n.code,{children:"ReactPortal"})]}),"\n",(0,l.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"elementId"})}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,l.jsx)(n.code,{children:"PropsWithChildren"}),"<",(0,l.jsx)(n.code,{children:"Props"}),">"]}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\ubd80\ubaa8 \uc5d8\ub9ac\uba3c\ud2b8\uac00 \uc544\ub2cc \ub2e4\ub978 DOM \ud2b8\ub9ac\uc758 elementId\uac12"})]})})]}),"\n",(0,l.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"null"})," | ",(0,l.jsx)(n.code,{children:"ReactPortal"})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"Description"})})}),"\n",(0,l.jsxs)(n.p,{children:["\ubd80\ubaa8 \ucef4\ud3ec\ub10c\ud2b8\uc758 DOM \uc678\ubd80\uc5d0 \uc874\uc7ac\ud558\ub294 DOM \ub178\ub4dc\uc5d0 \ub80c\ub354\ub9c1 \ud560 \uc218 \uc788\uac8c \ud574\uc8fc\ub294\n",(0,l.jsx)(n.code,{children:"ReactDOM.createPortal"}),"\ub97c \uc774\uc6a9\ud574 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub80c\ub354\ub9c1\ud574\uc90d\ub2c8\ub2e4. ",(0,l.jsx)("br",{}),"\n\uacf5\ud1b5\uc801\uc778 UI(\ubaa8\ub2ec, \ud31d\uc5c5, \uc54c\ub9bc \ub4f1)\ub098 \ubd80\ubaa8 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\n",(0,l.jsx)(n.code,{children:"overflow: hidden"}),", ",(0,l.jsx)(n.code,{children:"z-index"}),"\uc640 \uac19\uc740 \uc2a4\ud0c0\uc77c\uc774 \uc788\uc744 \ub54c \ubd80\ubaa8 \uc5d8\ub9ac\uba3c\ud2b8\uc5d0 \uc758\uc874\uc801\uc774\uc9c0 \uc54a\uc544\uc57c\ud558\ub294 \uacbd\uc6b0 \uc720\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"Example"})})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",metastring:'title="html"',children:'<div id="portal-container" />\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",metastring:'title="tsx"',children:'function SampleComponent() {\n\n return (\n   <GlobalPortal elementId="portal-container">\n     <div>Render component</div>\n   </GlobalPortal>\n );\n}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/mbti-nf-team/frontend-libraries/blob/4d5a48a/packages/react/src/components/GlobalPortal.tsx#L34",children:"packages/react/src/components/GlobalPortal.tsx:34"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},5392:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>d});var l=t(2784);const r={},s=l.createContext(r);function d(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);