"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[767],{876:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>N});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),k=d(n),u=r,N=k["".concat(o,".").concat(u)]||k[u]||m[u]||l;return n?a.createElement(N,i(i({ref:t},s),{},{components:n})):a.createElement(N,i({ref:t},s))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[k]="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2182:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(7896),r=(n(2784),n(876));const l={id:"hooks",title:"Module: hooks",sidebar_label:"hooks",sidebar_position:0,custom_edit_url:null},i=void 0,p={unversionedId:"react/modules/hooks",id:"react/modules/hooks",title:"Module: hooks",description:"Functions",source:"@site/docs/react/modules/hooks.md",sourceDirName:"react/modules",slug:"/react/modules/hooks",permalink:"/frontend-libraries/docs/react/modules/hooks",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"hooks",title:"Module: hooks",sidebar_label:"hooks",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"components",permalink:"/frontend-libraries/docs/react/modules/components"},next:{title:"@nf-team/eslint-config",permalink:"/frontend-libraries/docs/eslint-config/"}},o={},d=[{value:"Functions",id:"functions",level:2},{value:"useActionKeyEvent",id:"useactionkeyevent",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"useBoolean",id:"useboolean",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"useDebounce",id:"usedebounce",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"useIsMounted",id:"useismounted",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"useIsomorphicLayoutEffect",id:"useisomorphiclayouteffect",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"useLessThenScrollY",id:"uselessthenscrolly",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"useResizeViewportHeight",id:"useresizeviewportheight",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"useThrottleCallback",id:"usethrottlecallback",level:3},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Parameters",id:"parameters-6",level:5},{value:"Returns",id:"returns-8",level:5},{value:"Defined in",id:"defined-in-7",level:4},{value:"useTimeout",id:"usetimeout",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-8",level:4}],s={toc:d},k="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"useactionkeyevent"},"useActionKeyEvent"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"useActionKeyEvent"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"U"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"targetKeys"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"callback?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"ActionKeyEvent"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"U"),">"),(0,r.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Element"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"U")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),"[] = []")))),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"targetKeys")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"callback?")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"event"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"KeyboardEvent"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"T"),">",", ...",(0,r.kt)("inlineCode",{parentName:"td"},"args"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"U"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ActionKeyEvent"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"U"),">"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mbti-nf-team/frontend-libraries/blob/5de12f2/packages/react/src/hooks/useActionKeyEvent.ts#L6"},"packages/react/src/hooks/useActionKeyEvent.ts:6")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"useboolean"},"useBoolean"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"useBoolean"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"initialValue?"),"): ","[",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", () => ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),", () => ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),", (",(0,r.kt)("inlineCode",{parentName:"p"},"nextValue?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),"]"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," \ud0c0\uc785\uc73c\ub85c\ub9cc \ubc18\ud658\ud558\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"useState"),"\ub97c \uc27d\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 hook \uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const [isOpen, openModal, closeModal, toggleModal] = useBoolean();\n")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"initialValue")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\ucd08\uae30\uac12\uc744 \uc138\ud305")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,"[",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", () => ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),", () => ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),", (",(0,r.kt)("inlineCode",{parentName:"p"},"nextValue?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),"]"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mbti-nf-team/frontend-libraries/blob/5de12f2/packages/react/src/hooks/useBoolean.ts#L13"},"packages/react/src/hooks/useBoolean.ts:13")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"usedebounce"},"useDebounce"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"useDebounce"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"value"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"delay?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"T")),(0,r.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T"))))),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"delay?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"T")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mbti-nf-team/frontend-libraries/blob/5de12f2/packages/react/src/hooks/useDebounce.ts#L3"},"packages/react/src/hooks/useDebounce.ts:3")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"useismounted"},"useIsMounted"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"useIsMounted"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,r.kt)("p",null,"Component\uc758 mount \uc5ec\ubd80\ub97c \ud655\uc778\ud558\ub294 hook \uc785\ub2c8\ub2e4. ",(0,r.kt)("br",null),"\nSSR \ud658\uacbd\uc5d0\uc11c \uc2e4\uc81c\ub85c \ucef4\ud3ec\ub10c\ud2b8\uac00 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c mount \ub41c \uc774\ud6c4\uc5d0 \uc5b4\ub5a4 \ub3d9\uc791\uc744 \uc2e4\ud589\ud558\uae30 \uc704\ud574\uc11c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const isMounted = useIsMounted();\n\nuseEffect(() => {\n  if (isMounted) {\n    return;\n  }\n}, [isMounted]);\n\n")),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mbti-nf-team/frontend-libraries/blob/5de12f2/packages/react/src/hooks/useIsMounted.ts#L18"},"packages/react/src/hooks/useIsMounted.ts:18")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"useisomorphiclayouteffect"},"useIsomorphicLayoutEffect"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"useIsomorphicLayoutEffect"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"effect"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"deps?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Accepts a function that contains imperative, possibly effectful code."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Version"))),(0,r.kt)("p",null,"16.8.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"See"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://react.dev/reference/react/useEffect"},"https://react.dev/reference/react/useEffect")),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"effect")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"EffectCallback")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Imperative function that can return a cleanup function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"deps?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"DependencyList")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If present, effect will only activate if the values in the list change.")))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,"node_modules/@types/react/ts5.0/index.d.ts:1064"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"uselessthenscrolly"},"useLessThenScrollY"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"useLessThenScrollY"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"targetScrollY?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"delay?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"targetScrollY")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"delay")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"200"))))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mbti-nf-team/frontend-libraries/blob/5de12f2/packages/react/src/hooks/useLessThenScrollY.ts#L5"},"packages/react/src/hooks/useLessThenScrollY.ts:5")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"useresizeviewportheight"},"useResizeViewportHeight"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"useResizeViewportHeight"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,r.kt)("p",null,"\uc2a4\ud06c\ub864\uc744 \ud3ec\ud568\ud55c window\uc758 \ub192\uc774\ub97c \uac00\uc838\uc640 window \ud06c\uae30\ub97c resize\ud574\uc90d\ub2c8\ub2e4. ",(0,r.kt)("br",null),"\n\ubaa8\ubc14\uc77c \ud658\uacbd\uc758 \uc6f9\ubdf0\uc5d0\uc11c \ub514\ubc14\uc774\uc2a4 \ubc0f \ube0c\ub77c\uc6b0\uc800 \ud658\uacbd\uc5d0 \ub530\ub77c \ud06c\uae30\uac00 \ub2ec\ub77c\uc838 \ubd88\ud544\uc694\ud55c \uc2a4\ud06c\ub864\uc774 \uc0dd\uae38 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub54c \uc774 hook\uc744 \uc0ac\uc6a9\ud558\uba74 \uc720\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function SampleComponent() {\n  useResizeViewportHeight();\n\n  return <div>sample text</div>\n}\n\n")),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mbti-nf-team/frontend-libraries/blob/5de12f2/packages/react/src/hooks/useResizeViewportHeight.ts#L17"},"packages/react/src/hooks/useResizeViewportHeight.ts:17")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"usethrottlecallback"},"useThrottleCallback"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"useThrottleCallback"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"U"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"callback"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"delay"),"): (...",(0,r.kt)("inlineCode",{parentName:"p"},"args"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"U"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"type-parameters-2"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"U")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"never"),"[]")))),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"callback")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(...",(0,r.kt)("inlineCode",{parentName:"td"},"args"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"U"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"delay")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fn")),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"...args"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h5",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"...args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"U"))))),(0,r.kt)("h5",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mbti-nf-team/frontend-libraries/blob/5de12f2/packages/react/src/hooks/useThrottleCallback.ts#L3"},"packages/react/src/hooks/useThrottleCallback.ts:3")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"usetimeout"},"useTimeout"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"useTimeout"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"callback"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"delay"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"callback")),(0,r.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"delay")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"number"))))),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mbti-nf-team/frontend-libraries/blob/5de12f2/packages/react/src/hooks/useTimeout.ts#L5"},"packages/react/src/hooks/useTimeout.ts:5")))}m.isMDXComponent=!0}}]);