"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8817],{3654:(o,t,e)=>{e.r(t),e.d(t,{CH:()=>d,assets:()=>i,chCodeConfig:()=>a,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>F,toc:()=>y});var n=e(5893),c=e(1151),r=e(9794),s=(e(292),e(8984),e(1700),e(9605),e(4284),e(9960));e(4383),e(7029);const l={id:"syncpackrc",title:".syncpackrc"},p=void 0,F={id:"config/syncpackrc",title:".syncpackrc",description:"Configuration File",source:"@site/docs/config/syncpackrc.mdx",sourceDirName:"config",slug:"/config/syncpackrc",permalink:"/syncpack/config/syncpackrc",draft:!1,unlisted:!1,editUrl:"https://github.com/JamieMason/syncpack/tree/main/site/docs/config/syncpackrc.mdx",tags:[],version:"current",lastUpdatedBy:"Jamie Mason",lastUpdatedAt:1699206228,formattedLastUpdatedAt:"Nov 5, 2023",frontMatter:{id:"syncpackrc",title:".syncpackrc"},sidebar:"docs",previous:{title:"update",permalink:"/syncpack/command/update"},next:{title:"customTypes",permalink:"/syncpack/config/custom-types"}},i={},d={annotations:r.ds,Code:r.EK},a={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:void 0,showCopyButton:!0,themeName:"dracula"},y=[{value:"Configuration File",id:"configuration-file",level:2},{value:"Defaults",id:"defaults",level:2}];function h(o){const t={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,c.a)(),...o.components};return d||g("CH",!1),d.Code||g("CH.Code",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="dracula"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #F8F8F2;--ch-t-background: #282A36;--ch-t-lighter-inlineBackground: #282a36e6;--ch-t-editor-background: #282A36;--ch-t-editor-foreground: #F8F8F2;--ch-t-editor-rangeHighlightBackground: #BD93F915;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #44475A;--ch-t-focusBorder: #6272A4;--ch-t-tab-activeBackground: #282A36;--ch-t-tab-activeForeground: #F8F8F2;--ch-t-tab-inactiveBackground: #21222C;--ch-t-tab-inactiveForeground: #6272A4;--ch-t-tab-border: #191A21;--ch-t-tab-activeBorder: #282A36;--ch-t-editorGroup-border: #BD93F9;--ch-t-editorGroupHeader-tabsBackground: #191A21;--ch-t-editorLineNumber-foreground: #6272A4;--ch-t-input-background: #282A36;--ch-t-input-foreground: #F8F8F2;--ch-t-input-border: #191A21;--ch-t-icon-foreground: #C5C5C5;--ch-t-sideBar-background: #21222C;--ch-t-sideBar-foreground: #F8F8F2;--ch-t-sideBar-border: #21222C;--ch-t-list-activeSelectionBackground: #44475A;--ch-t-list-activeSelectionForeground: #F8F8F2;--ch-t-list-hoverBackground: #44475A75; }'}}),"\n","\n","\n",(0,n.jsx)(t.h2,{id:"configuration-file",children:"Configuration File"}),"\n",(0,n.jsxs)(t.p,{children:["Syncpack uses ",(0,n.jsx)(s.Z,{to:"https://github.com/cosmiconfig/cosmiconfig",children:"cosmiconfig"})," to search the current and ancestor directories for a:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:".syncpackrc"})," file in JSON or YAML format."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:".syncpackrc.json"}),", ",(0,n.jsx)(t.code,{children:".syncpackrc.yaml"}),", ",(0,n.jsx)(t.code,{children:".syncpackrc.yml"}),", ",(0,n.jsx)(t.code,{children:".syncpackrc.js"}),", ",(0,n.jsx)(t.code,{children:".syncpackrc.cjs"}),", ",(0,n.jsx)(t.code,{children:"syncpack.config.js"}),", ",(0,n.jsx)(t.code,{children:"syncpack.config.cjs"})," file."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"config.syncpack"})," or ",(0,n.jsx)(t.code,{children:"syncpack"})," property in ",(0,n.jsx)(t.code,{children:"package.json"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"A custom name and location can be provided instead:"}),"\n",(0,n.jsx)(d.Code,{codeConfig:a,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"syncpack ",props:{style:{color:"#F8F8F2"}}},{content:"list ",props:{style:{color:"#F1FA8C"}}},{content:"--config ",props:{style:{color:"#BD93F9"}}},{content:"./config/syncpack.json",props:{style:{color:"#F1FA8C"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,n.jsx)(t.h2,{id:"defaults",children:"Defaults"}),"\n",(0,n.jsx)(t.p,{children:"Your config file only needs to define values for those you want to change from the defaults below."}),"\n",(0,n.jsx)(d.Code,{codeConfig:a,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",title:'".syncpackrc.js"',focus:"",code:{lines:[{tokens:[{content:"// @ts-check",props:{style:{color:"#6272A4"}}}]},{tokens:[{content:"",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"/** ",props:{style:{color:"#6272A4"}}},{content:"@type ",props:{style:{color:"#FF79C6"}}},{content:'{import("syncpack").RcFile}',props:{style:{color:"#8BE9FD",fontStyle:"italic"}}},{content:" */",props:{style:{color:"#6272A4"}}}]},{tokens:[{content:"const",props:{style:{color:"#FF79C6"}}},{content:" config ",props:{style:{color:"#F8F8F2"}}},{content:"=",props:{style:{color:"#FF79C6"}}},{content:" {",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"  customTypes",props:{style:{color:"#F8F8F2"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" [],",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"  dependencyTypes",props:{style:{color:"#F8F8F2"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" [",props:{style:{color:"#F8F8F2"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"dev",props:{style:{color:"#F1FA8C"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:", ",props:{style:{color:"#F8F8F2"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"local",props:{style:{color:"#F1FA8C"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:", ",props:{style:{color:"#F8F8F2"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"overrides",props:{style:{color:"#F1FA8C"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:", ",props:{style:{color:"#F8F8F2"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"peer",props:{style:{color:"#F1FA8C"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:", ",props:{style:{color:"#F8F8F2"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"pnpmOverrides",props:{style:{color:"#F1FA8C"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:", ",props:{style:{color:"#F8F8F2"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"prod",props:{style:{color:"#F1FA8C"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:", ",props:{style:{color:"#F8F8F2"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"resolutions",props:{style:{color:"#F1FA8C"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"],",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"  filter",props:{style:{color:"#F8F8F2"}}},{content:": ",props:{style:{color:"#FF79C6"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:".",props:{style:{color:"#F1FA8C"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:",",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"  indent",props:{style:{color:"#F8F8F2"}}},{content:": ",props:{style:{color:"#FF79C6"}}},{content:"'  '",props:{style:{color:"#E9F284"}}},{content:",",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"  semverGroups",props:{style:{color:"#F8F8F2"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" [],",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"  semverRange",props:{style:{color:"#F8F8F2"}}},{content:": ",props:{style:{color:"#FF79C6"}}},{content:"''",props:{style:{color:"#E9F284"}}},{content:",",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"  sortAz",props:{style:{color:"#F8F8F2"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" [",props:{style:{color:"#F8F8F2"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"contributors",props:{style:{color:"#F1FA8C"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:", ",props:{style:{color:"#F8F8F2"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"dependencies",props:{style:{color:"#F1FA8C"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:", ",props:{style:{color:"#F8F8F2"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"devDependencies",props:{style:{color:"#F1FA8C"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:", ",props:{style:{color:"#F8F8F2"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"keywords",props:{style:{color:"#F1FA8C"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:", ",props:{style:{color:"#F8F8F2"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"peerDependencies",props:{style:{color:"#F1FA8C"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:", ",props:{style:{color:"#F8F8F2"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"resolutions",props:{style:{color:"#F1FA8C"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:", ",props:{style:{color:"#F8F8F2"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"scripts",props:{style:{color:"#F1FA8C"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"],",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"  sortFirst",props:{style:{color:"#F8F8F2"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" [",props:{style:{color:"#F8F8F2"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"name",props:{style:{color:"#F1FA8C"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:", ",props:{style:{color:"#F8F8F2"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"description",props:{style:{color:"#F1FA8C"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:", ",props:{style:{color:"#F8F8F2"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"version",props:{style:{color:"#F1FA8C"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:", ",props:{style:{color:"#F8F8F2"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"author",props:{style:{color:"#F1FA8C"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"],",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"  source",props:{style:{color:"#F8F8F2"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" [",props:{style:{color:"#F8F8F2"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"package.json",props:{style:{color:"#F1FA8C"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:", ",props:{style:{color:"#F8F8F2"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"packages/*/package.json",props:{style:{color:"#F1FA8C"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"],",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"  versionGroups",props:{style:{color:"#F8F8F2"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" [],",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"};",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"module",props:{style:{color:"#8BE9FD",fontStyle:"italic"}}},{content:".",props:{style:{color:"#F8F8F2"}}},{content:"exports ",props:{style:{color:"#8BE9FD",fontStyle:"italic"}}},{content:"=",props:{style:{color:"#FF79C6"}}},{content:" config;",props:{style:{color:"#F8F8F2"}}}]}],lang:"js"},annotations:[]}]})]})}function u(o={}){const{wrapper:t}={...(0,c.a)(),...o.components};return t?(0,n.jsx)(t,{...o,children:(0,n.jsx)(h,{...o})}):h(o)}function g(o,t){throw new Error("Expected "+(t?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}},1700:(o,t,e)=>{e.d(t,{ZP:()=>s});var n=e(5893),c=e(1151);function r(o){const t={a:"a",code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...o.components};return(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Value"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Property in package.json"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"dev"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json#devDependencies",children:(0,n.jsx)(t.code,{children:"devDependencies"})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"local"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json#version",children:(0,n.jsx)(t.code,{children:"version"})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"overrides"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json#overrides",children:(0,n.jsx)(t.code,{children:"overrides"})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"peer"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json#peerDependencies",children:(0,n.jsx)(t.code,{children:"peerDependencies"})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"pnpmOverrides"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"https://pnpm.io/package_json#pnpmoverrides",children:(0,n.jsx)(t.code,{children:"pnpm.overrides"})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"prod"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json#dependencies",children:(0,n.jsx)(t.code,{children:"dependencies"})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"resolutions"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json#resolutions",children:(0,n.jsx)(t.code,{children:"resolutions"})})})]})]})]})}function s(o={}){const{wrapper:t}={...(0,c.a)(),...o.components};return t?(0,n.jsx)(t,{...o,children:(0,n.jsx)(r,{...o})}):r(o)}},9605:(o,t,e)=>{e.d(t,{ZP:()=>i});var n=e(5893),c=e(1151),r=e(9794),s=e(9960);const l={annotations:r.ds,Code:r.EK},p={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:void 0,showCopyButton:!0,themeName:"dracula"};function F(o){const t={a:"a",admonition:"admonition",code:"code",p:"p",strong:"strong",...(0,c.a)(),...o.components};return l||d("CH",!1),l.Code||d("CH.Code",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="dracula"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #F8F8F2;--ch-t-background: #282A36;--ch-t-lighter-inlineBackground: #282a36e6;--ch-t-editor-background: #282A36;--ch-t-editor-foreground: #F8F8F2;--ch-t-editor-rangeHighlightBackground: #BD93F915;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #44475A;--ch-t-focusBorder: #6272A4;--ch-t-tab-activeBackground: #282A36;--ch-t-tab-activeForeground: #F8F8F2;--ch-t-tab-inactiveBackground: #21222C;--ch-t-tab-inactiveForeground: #6272A4;--ch-t-tab-border: #191A21;--ch-t-tab-activeBorder: #282A36;--ch-t-editorGroup-border: #BD93F9;--ch-t-editorGroupHeader-tabsBackground: #191A21;--ch-t-editorLineNumber-foreground: #6272A4;--ch-t-input-background: #282A36;--ch-t-input-foreground: #F8F8F2;--ch-t-input-border: #191A21;--ch-t-icon-foreground: #C5C5C5;--ch-t-sideBar-background: #21222C;--ch-t-sideBar-foreground: #F8F8F2;--ch-t-sideBar-border: #21222C;--ch-t-list-activeSelectionBackground: #44475A;--ch-t-list-activeSelectionForeground: #F8F8F2;--ch-t-list-hoverBackground: #44475A75; }'}}),"\n","\n","\n",(0,n.jsxs)(t.p,{children:["To enable validation and autocompletion for your ",(0,n.jsx)(s.Z,{to:"/config/syncpackrc",children:"configuration file"}),", you must use a JavaScript config file and annotate in keeping with the below example:"]}),"\n",(0,n.jsx)(l.Code,{codeConfig:p,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",title:'".syncpackrc.js"',focus:"",code:{lines:[{tokens:[{content:"// @ts-check",props:{style:{color:"#6272A4"}}}]},{tokens:[{content:"",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"/** ",props:{style:{color:"#6272A4"}}},{content:"@type ",props:{style:{color:"#FF79C6"}}},{content:'{import("syncpack").RcFile}',props:{style:{color:"#8BE9FD",fontStyle:"italic"}}},{content:" */",props:{style:{color:"#6272A4"}}}]},{tokens:[{content:"const",props:{style:{color:"#FF79C6"}}},{content:" config ",props:{style:{color:"#F8F8F2"}}},{content:"=",props:{style:{color:"#FF79C6"}}},{content:" {",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"  versionGroups",props:{style:{color:"#F8F8F2"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" [",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"    {",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"      dependencies",props:{style:{color:"#F8F8F2"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" [",props:{style:{color:"#F8F8F2"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"@types/node",props:{style:{color:"#F1FA8C"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"],",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"      packages",props:{style:{color:"#F8F8F2"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" [",props:{style:{color:"#F8F8F2"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"**",props:{style:{color:"#F1FA8C"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"],",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"      pinVersion",props:{style:{color:"#F8F8F2"}}},{content:": ",props:{style:{color:"#FF79C6"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"14.18.36",props:{style:{color:"#F1FA8C"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:",",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"    },",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"    {",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"      dependencies",props:{style:{color:"#F8F8F2"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" [",props:{style:{color:"#F8F8F2"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"chalk",props:{style:{color:"#F1FA8C"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"],",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"      packages",props:{style:{color:"#F8F8F2"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" [",props:{style:{color:"#F8F8F2"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"**",props:{style:{color:"#F1FA8C"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"],",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"      pinVersion",props:{style:{color:"#F8F8F2"}}},{content:": ",props:{style:{color:"#FF79C6"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"4.1.2",props:{style:{color:"#F1FA8C"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:",",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"    },",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"  ],",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"};",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"module",props:{style:{color:"#8BE9FD",fontStyle:"italic"}}},{content:".",props:{style:{color:"#F8F8F2"}}},{content:"exports ",props:{style:{color:"#8BE9FD",fontStyle:"italic"}}},{content:"=",props:{style:{color:"#FF79C6"}}},{content:" config;",props:{style:{color:"#F8F8F2"}}}]}],lang:"js"},annotations:[]}]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Ensure that ",(0,n.jsx)(t.code,{children:'"javascript.validate.enable": false'})," is ",(0,n.jsx)(t.strong,{children:"not"})," set in ",(0,n.jsx)(t.a,{href:"https://code.visualstudio.com/docs/getstarted/settings",children:"VS Code"}),"."]})})]})}function i(o={}){const{wrapper:t}={...(0,c.a)(),...o.components};return t?(0,n.jsx)(t,{...o,children:(0,n.jsx)(F,{...o})}):F(o)}function d(o,t){throw new Error("Expected "+(t?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}},4284:(o,t,e)=>{e.d(t,{ZP:()=>F});var n=e(5893),c=e(1151),r=e(9794);const s={annotations:r.ds,Code:r.EK},l={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:void 0,showCopyButton:!0,themeName:"dracula"};function p(o){const t={p:"p",...(0,c.a)(),...o.components};return s||i("CH",!1),s.Code||i("CH.Code",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="dracula"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #F8F8F2;--ch-t-background: #282A36;--ch-t-lighter-inlineBackground: #282a36e6;--ch-t-editor-background: #282A36;--ch-t-editor-foreground: #F8F8F2;--ch-t-editor-rangeHighlightBackground: #BD93F915;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #44475A;--ch-t-focusBorder: #6272A4;--ch-t-tab-activeBackground: #282A36;--ch-t-tab-activeForeground: #F8F8F2;--ch-t-tab-inactiveBackground: #21222C;--ch-t-tab-inactiveForeground: #6272A4;--ch-t-tab-border: #191A21;--ch-t-tab-activeBorder: #282A36;--ch-t-editorGroup-border: #BD93F9;--ch-t-editorGroupHeader-tabsBackground: #191A21;--ch-t-editorLineNumber-foreground: #6272A4;--ch-t-input-background: #282A36;--ch-t-input-foreground: #F8F8F2;--ch-t-input-border: #191A21;--ch-t-icon-foreground: #C5C5C5;--ch-t-sideBar-background: #21222C;--ch-t-sideBar-foreground: #F8F8F2;--ch-t-sideBar-border: #21222C;--ch-t-list-activeSelectionBackground: #44475A;--ch-t-list-activeSelectionForeground: #F8F8F2;--ch-t-list-hoverBackground: #44475A75; }'}}),"\n",(0,n.jsx)(t.p,{children:"From syncpack 11.2.1 and up, a JSON Schema file is available. Ironically, you will need to manually ensure that the version number in the URL you reference matches the version of syncpack you have installed, at least for the time being."}),"\n",(0,n.jsx)(s.Code,{codeConfig:l,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",title:'".syncpackrc"',focus:"",code:{lines:[{tokens:[{content:"{",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:'  "',props:{style:{color:"#8BE9FE"}}},{content:"$schema",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:": ",props:{style:{color:"#FF79C6"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"https://unpkg.com/syncpack@11.2.1/dist/schema.json",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:",",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:'  "',props:{style:{color:"#8BE9FE"}}},{content:"versionGroups",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" [",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"    {",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:'      "',props:{style:{color:"#8BE9FE"}}},{content:"dependencies",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" [",props:{style:{color:"#F8F8F2"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"@types/node",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"],",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:'      "',props:{style:{color:"#8BE9FE"}}},{content:"packages",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" [",props:{style:{color:"#F8F8F2"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"**",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"],",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:'      "',props:{style:{color:"#8BE9FE"}}},{content:"pinVersion",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:": ",props:{style:{color:"#FF79C6"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"14.18.36",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}}]},{tokens:[{content:"    },",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"    {",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:'      "',props:{style:{color:"#8BE9FE"}}},{content:"dependencies",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" [",props:{style:{color:"#F8F8F2"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"chalk",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"],",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:'      "',props:{style:{color:"#8BE9FE"}}},{content:"packages",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" [",props:{style:{color:"#F8F8F2"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"**",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"],",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:'      "',props:{style:{color:"#8BE9FE"}}},{content:"pinVersion",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:": ",props:{style:{color:"#FF79C6"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"4.1.2",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}}]},{tokens:[{content:"    }",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"  ]",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"}",props:{style:{color:"#F8F8F2"}}}]}],lang:"json"},annotations:[]}]})]})}function F(o={}){const{wrapper:t}={...(0,c.a)(),...o.components};return t?(0,n.jsx)(t,{...o,children:(0,n.jsx)(p,{...o})}):p(o)}function i(o,t){throw new Error("Expected "+(t?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}},4383:(o,t,e)=>{e.d(t,{ZP:()=>a});var n=e(5893),c=e(1151),r=e(9794),s=e(9960),l=e(292),p=e(6217);const F={annotations:r.ds,Code:r.EK},i={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:void 0,showCopyButton:!0,themeName:"dracula"};function d(o){const t={code:"code",p:"p",...(0,c.a)(),...o.components};return F||y("CH",!1),F.Code||y("CH.Code",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="dracula"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #F8F8F2;--ch-t-background: #282A36;--ch-t-lighter-inlineBackground: #282a36e6;--ch-t-editor-background: #282A36;--ch-t-editor-foreground: #F8F8F2;--ch-t-editor-rangeHighlightBackground: #BD93F915;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #44475A;--ch-t-focusBorder: #6272A4;--ch-t-tab-activeBackground: #282A36;--ch-t-tab-activeForeground: #F8F8F2;--ch-t-tab-inactiveBackground: #21222C;--ch-t-tab-inactiveForeground: #6272A4;--ch-t-tab-border: #191A21;--ch-t-tab-activeBorder: #282A36;--ch-t-editorGroup-border: #BD93F9;--ch-t-editorGroupHeader-tabsBackground: #191A21;--ch-t-editorLineNumber-foreground: #6272A4;--ch-t-input-background: #282A36;--ch-t-input-foreground: #F8F8F2;--ch-t-input-border: #191A21;--ch-t-icon-foreground: #C5C5C5;--ch-t-sideBar-background: #21222C;--ch-t-sideBar-foreground: #F8F8F2;--ch-t-sideBar-border: #21222C;--ch-t-list-activeSelectionBackground: #44475A;--ch-t-list-activeSelectionForeground: #F8F8F2;--ch-t-list-hoverBackground: #44475A75; }'}}),"\n","\n","\n","\n",(0,n.jsxs)(t.p,{children:["Ensure ",(0,n.jsx)(s.Z,{to:l.K.engines,children:(0,n.jsx)(t.code,{children:"engines.node"})})," version is identical in every package."]}),"\n",(0,n.jsx)(p.Hx,{level:o.level,children:"1. Add a custom type"}),"\n",(0,n.jsxs)(t.p,{children:["I've chosen a name of ",(0,n.jsx)(t.code,{children:"nodeEngine"})," but it can be anything you like."]}),"\n",(0,n.jsx)(F.Code,{codeConfig:i,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",title:'".syncpackrc"',focus:"",code:{lines:[{tokens:[{content:"{",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:'  "',props:{style:{color:"#8BE9FE"}}},{content:"customTypes",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" {",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:'    "',props:{style:{color:"#8BE9FE"}}},{content:"nodeEngine",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" {",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:'      "',props:{style:{color:"#8BE9FE"}}},{content:"path",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:": ",props:{style:{color:"#FF79C6"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"engines.node",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:",",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:'      "',props:{style:{color:"#8BE9FE"}}},{content:"strategy",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:": ",props:{style:{color:"#FF79C6"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"version",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}}]},{tokens:[{content:"    }",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"  }",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"}",props:{style:{color:"#F8F8F2"}}}]}],lang:"json"},annotations:[]}]}),"\n",(0,n.jsx)(p.Hx,{level:o.level,children:"2. Look for mismatches"}),"\n",(0,n.jsxs)(t.p,{children:["Perform a one-off check for every usage of ",(0,n.jsx)(t.code,{children:"engines.node"})," in your monorepo."]}),"\n",(0,n.jsx)(F.Code,{codeConfig:i,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"syncpack ",props:{style:{color:"#F8F8F2"}}},{content:"list ",props:{style:{color:"#F1FA8C"}}},{content:"--types ",props:{style:{color:"#BD93F9"}}},{content:"nodeEngine",props:{style:{color:"#F1FA8C"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,n.jsx)(t.p,{children:"If the versions are not identical, they can be synchronised to all use the highest of the semver versions currently in use."}),"\n",(0,n.jsx)(F.Code,{codeConfig:i,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"syncpack ",props:{style:{color:"#F8F8F2"}}},{content:"fix-mismatches ",props:{style:{color:"#F1FA8C"}}},{content:"--types ",props:{style:{color:"#BD93F9"}}},{content:"nodeEngine",props:{style:{color:"#F1FA8C"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,n.jsx)(p.Hx,{level:o.level,children:"3. Track them in future"}),"\n",(0,n.jsxs)(t.p,{children:["Add your new custom type to your ",(0,n.jsx)(t.code,{children:"dependencyTypes"}),"."]}),"\n",(0,n.jsx)(F.Code,{codeConfig:i,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",title:'".syncpackrc"',focus:"",code:{lines:[{tokens:[{content:"{",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:'  "',props:{style:{color:"#8BE9FE"}}},{content:"dependencyTypes",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" [",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:'    "',props:{style:{color:"#E9F284"}}},{content:"dev",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}}]},{tokens:[{content:'    "',props:{style:{color:"#E9F284"}}},{content:"nodeEngine",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}}]},{tokens:[{content:'    "',props:{style:{color:"#E9F284"}}},{content:"peer",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}}]},{tokens:[{content:'    "',props:{style:{color:"#E9F284"}}},{content:"prod",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}}]},{tokens:[{content:"  ]",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"}",props:{style:{color:"#F8F8F2"}}}]}],lang:"json"},annotations:[]}]}),"\n",(0,n.jsxs)(t.p,{children:["Now when you run any syncpack command, ",(0,n.jsx)(t.code,{children:"engines.node"})," will also be checked."]}),"\n",(0,n.jsx)(F.Code,{codeConfig:i,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"syncpack ",props:{style:{color:"#F8F8F2"}}},{content:"list",props:{style:{color:"#F1FA8C"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,n.jsx)(p.Hx,{level:o.level,children:"4. Relax the rules (optional)"}),"\n",(0,n.jsxs)(t.p,{children:["If you don't want the Node.js version to be identical in every package but do want them all to be compatible with each other, you can use a ",(0,n.jsx)(s.Z,{to:"/config/version-groups/same-range",children:"Same Range"})," Version Group."]}),"\n",(0,n.jsx)(F.Code,{codeConfig:i,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",title:'".syncpackrc"',focus:"",code:{lines:[{tokens:[{content:"{",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:'  "',props:{style:{color:"#8BE9FE"}}},{content:"dependencyTypes",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" [",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:'    "',props:{style:{color:"#E9F284"}}},{content:"dev",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}}]},{tokens:[{content:'    "',props:{style:{color:"#E9F284"}}},{content:"nodeEngine",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}}]},{tokens:[{content:'    "',props:{style:{color:"#E9F284"}}},{content:"peer",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}}]},{tokens:[{content:'    "',props:{style:{color:"#E9F284"}}},{content:"prod",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}}]},{tokens:[{content:"  ],",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:'  "',props:{style:{color:"#8BE9FE"}}},{content:"versionGroups",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" [",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"    {",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:'      "',props:{style:{color:"#8BE9FE"}}},{content:"dependencyTypes",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" [",props:{style:{color:"#F8F8F2"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"nodeEngine",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"],",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:'      "',props:{style:{color:"#8BE9FE"}}},{content:"policy",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:": ",props:{style:{color:"#FF79C6"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"sameRange",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}}]},{tokens:[{content:"    }",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"  ]",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"}",props:{style:{color:"#F8F8F2"}}}]}],lang:"json"},annotations:[]}]})]})}function a(o={}){const{wrapper:t}={...(0,c.a)(),...o.components};return t?(0,n.jsx)(t,{...o,children:(0,n.jsx)(d,{...o})}):d(o)}function y(o,t){throw new Error("Expected "+(t?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}},8984:(o,t,e)=>{e.d(t,{ZP:()=>d});var n=e(5893),c=e(1151),r=e(9794),s=e(9286),l=e(9960);const p={annotations:r.ds,Code:r.EK},F={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:void 0,showCopyButton:!0,themeName:"dracula"};function i(o){const t={p:"p",...(0,c.a)(),...o.components};return p||a("CH",!1),p.Code||a("CH.Code",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="dracula"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #F8F8F2;--ch-t-background: #282A36;--ch-t-lighter-inlineBackground: #282a36e6;--ch-t-editor-background: #282A36;--ch-t-editor-foreground: #F8F8F2;--ch-t-editor-rangeHighlightBackground: #BD93F915;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #44475A;--ch-t-focusBorder: #6272A4;--ch-t-tab-activeBackground: #282A36;--ch-t-tab-activeForeground: #F8F8F2;--ch-t-tab-inactiveBackground: #21222C;--ch-t-tab-inactiveForeground: #6272A4;--ch-t-tab-border: #191A21;--ch-t-tab-activeBorder: #282A36;--ch-t-editorGroup-border: #BD93F9;--ch-t-editorGroupHeader-tabsBackground: #191A21;--ch-t-editorLineNumber-foreground: #6272A4;--ch-t-input-background: #282A36;--ch-t-input-foreground: #F8F8F2;--ch-t-input-border: #191A21;--ch-t-icon-foreground: #C5C5C5;--ch-t-sideBar-background: #21222C;--ch-t-sideBar-foreground: #F8F8F2;--ch-t-sideBar-border: #21222C;--ch-t-list-activeSelectionBackground: #44475A;--ch-t-list-activeSelectionForeground: #F8F8F2;--ch-t-list-hoverBackground: #44475A75; }'}}),"\n","\n","\n",(0,n.jsx)(p.Code,{codeConfig:F,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"-c, --config <path>",props:{}}]}],lang:"text"},annotations:[]}]}),"\n",(0,n.jsxs)(t.p,{children:["Syncpack uses ",(0,n.jsx)(l.Z,{to:"https://github.com/cosmiconfig/cosmiconfig",children:"cosmiconfig"})," to discover your config file, but a custom location can be provided instead."]}),"\n",(0,n.jsx)(s.Z,{children:`syncpack ${o.command} --config ./config/.syncpackrc`})]})}function d(o={}){const{wrapper:t}={...(0,c.a)(),...o.components};return t?(0,n.jsx)(t,{...o,children:(0,n.jsx)(i,{...o})}):i(o)}function a(o,t){throw new Error("Expected "+(t?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}},6217:(o,t,e)=>{e.d(t,{Hx:()=>c});e(7294);var n=e(5893);function c(o){let{children:t,level:e}=o;return(0,n.jsx)(e,{children:t})}},7029:(o,t,e)=>{e.d(t,{Z:()=>r});e(7294);const n={pill:"pill_lx6J",gray:"gray_oDNb",red:"red_TkSj",yellow:"yellow_uZjQ",green:"green_VuIk",blue:"blue_niGL",indigo:"indigo_t1co",purple:"purple_wWQZ",pink:"pink_hjd3"};var c=e(5893);function r(o){let{required:t,optional:e}=o;return(0,c.jsxs)("p",{children:[t&&(0,c.jsx)("span",{className:`${n.pill} ${n.red}`,children:"Required"}),e&&(0,c.jsx)("span",{className:`${n.pill} ${n.gray}`,children:"Optional"})]})}},292:(o,t,e)=>{e.d(t,{K:()=>n});const n={"@types":"https://github.com/DefinitelyTyped/DefinitelyTyped",awsSdk:"https://aws.amazon.com/sdk-for-javascript/",dependencies:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json#dependencies",devDependencies:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json#devDependencies",engines:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json#engines",packageManager:"https://nodejs.org/api/packages.html#packagemanager",version:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json#version",workspaceProtocol:"https://pnpm.io/workspaces#workspace-protocol-workspace"}}}]);