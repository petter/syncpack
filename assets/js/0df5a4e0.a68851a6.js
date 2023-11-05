"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8332],{7359:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>g,contentTitle:()=>u,default:()=>f,frontMatter:()=>h,metadata:()=>l,toc:()=>p});var n=t(5893),r=t(1151),c=t(8984),a=t(2474),i=t(7463),d=t(3107),s=t(4086);const h={id:"format",title:"format"},u=void 0,l={id:"command/format",title:"format",description:'Organise package.json files according to a conventional format, where fields appear in a predictable order and nested fields are ordered alphabetically. Shorthand properties are used where available, such as the "repository" and "bugs" fields.',source:"@site/docs/command/format.mdx",sourceDirName:"command",slug:"/command/format",permalink:"/syncpack/command/format",draft:!1,unlisted:!1,editUrl:"https://github.com/JamieMason/syncpack/tree/main/site/docs/command/format.mdx",tags:[],version:"current",lastUpdatedBy:"Jamie Mason",lastUpdatedAt:1699206228,formattedLastUpdatedAt:"Nov 5, 2023",frontMatter:{id:"format",title:"format"},sidebar:"docs",previous:{title:"fix-mismatches",permalink:"/syncpack/command/fix-mismatches"},next:{title:"lint-semver-ranges",permalink:"/syncpack/command/lint-semver-ranges"}},g={},p=[{value:"CLI Options",id:"cli-options",level:2},{value:"source",id:"source",level:3},{value:"config",id:"config",level:3},{value:"indent",id:"indent",level:3},{value:"help",id:"help",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}];function m(e){const o={code:"code",h2:"h2",h3:"h3",p:"p",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:["Organise package.json files according to a conventional format, where fields appear in a predictable order and nested fields are ordered alphabetically. Shorthand properties are used where available, such as the ",(0,n.jsx)(o.code,{children:'"repository"'})," and ",(0,n.jsx)(o.code,{children:'"bugs"'})," fields."]}),"\n",(0,n.jsx)(o.h2,{id:"cli-options",children:"CLI Options"}),"\n",(0,n.jsx)(o.h3,{id:"source",children:"source"}),"\n",(0,n.jsx)(d.ZP,{command:"format"}),"\n",(0,n.jsx)(o.h3,{id:"config",children:"config"}),"\n",(0,n.jsx)(c.ZP,{command:"format"}),"\n",(0,n.jsx)(o.h3,{id:"indent",children:"indent"}),"\n",(0,n.jsx)(i.ZP,{command:"format"}),"\n",(0,n.jsx)(o.h3,{id:"help",children:"help"}),"\n",(0,n.jsx)(a.ZP,{command:"format"}),"\n",(0,n.jsx)(o.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,n.jsx)(s.ZP,{command:"format"})]})}function f(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},8984:(e,o,t)=>{t.d(o,{ZP:()=>u});var n=t(5893),r=t(1151),c=t(9794),a=t(9286),i=t(9960);const d={annotations:c.ds,Code:c.EK},s={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:void 0,showCopyButton:!0,themeName:"dracula"};function h(e){const o={p:"p",...(0,r.a)(),...e.components};return d||l("CH",!1),d.Code||l("CH.Code",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="dracula"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #F8F8F2;--ch-t-background: #282A36;--ch-t-lighter-inlineBackground: #282a36e6;--ch-t-editor-background: #282A36;--ch-t-editor-foreground: #F8F8F2;--ch-t-editor-rangeHighlightBackground: #BD93F915;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #44475A;--ch-t-focusBorder: #6272A4;--ch-t-tab-activeBackground: #282A36;--ch-t-tab-activeForeground: #F8F8F2;--ch-t-tab-inactiveBackground: #21222C;--ch-t-tab-inactiveForeground: #6272A4;--ch-t-tab-border: #191A21;--ch-t-tab-activeBorder: #282A36;--ch-t-editorGroup-border: #BD93F9;--ch-t-editorGroupHeader-tabsBackground: #191A21;--ch-t-editorLineNumber-foreground: #6272A4;--ch-t-input-background: #282A36;--ch-t-input-foreground: #F8F8F2;--ch-t-input-border: #191A21;--ch-t-icon-foreground: #C5C5C5;--ch-t-sideBar-background: #21222C;--ch-t-sideBar-foreground: #F8F8F2;--ch-t-sideBar-border: #21222C;--ch-t-list-activeSelectionBackground: #44475A;--ch-t-list-activeSelectionForeground: #F8F8F2;--ch-t-list-hoverBackground: #44475A75; }'}}),"\n","\n","\n",(0,n.jsx)(d.Code,{codeConfig:s,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"-c, --config <path>",props:{}}]}],lang:"text"},annotations:[]}]}),"\n",(0,n.jsxs)(o.p,{children:["Syncpack uses ",(0,n.jsx)(i.Z,{to:"https://github.com/cosmiconfig/cosmiconfig",children:"cosmiconfig"})," to discover your config file, but a custom location can be provided instead."]}),"\n",(0,n.jsx)(a.Z,{children:`syncpack ${e.command} --config ./config/.syncpackrc`})]})}function u(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}function l(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},2474:(e,o,t)=>{t.d(o,{ZP:()=>h});var n=t(5893),r=t(1151),c=t(9794),a=t(9286);t(9960);const i={annotations:c.ds,Code:c.EK},d={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:void 0,showCopyButton:!0,themeName:"dracula"};function s(e){const o={p:"p",...(0,r.a)(),...e.components};return i||u("CH",!1),i.Code||u("CH.Code",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="dracula"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #F8F8F2;--ch-t-background: #282A36;--ch-t-lighter-inlineBackground: #282a36e6;--ch-t-editor-background: #282A36;--ch-t-editor-foreground: #F8F8F2;--ch-t-editor-rangeHighlightBackground: #BD93F915;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #44475A;--ch-t-focusBorder: #6272A4;--ch-t-tab-activeBackground: #282A36;--ch-t-tab-activeForeground: #F8F8F2;--ch-t-tab-inactiveBackground: #21222C;--ch-t-tab-inactiveForeground: #6272A4;--ch-t-tab-border: #191A21;--ch-t-tab-activeBorder: #282A36;--ch-t-editorGroup-border: #BD93F9;--ch-t-editorGroupHeader-tabsBackground: #191A21;--ch-t-editorLineNumber-foreground: #6272A4;--ch-t-input-background: #282A36;--ch-t-input-foreground: #F8F8F2;--ch-t-input-border: #191A21;--ch-t-icon-foreground: #C5C5C5;--ch-t-sideBar-background: #21222C;--ch-t-sideBar-foreground: #F8F8F2;--ch-t-sideBar-border: #21222C;--ch-t-list-activeSelectionBackground: #44475A;--ch-t-list-activeSelectionForeground: #F8F8F2;--ch-t-list-hoverBackground: #44475A75; }'}}),"\n","\n","\n",(0,n.jsx)(i.Code,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"-h, --help",props:{}}]}],lang:"text"},annotations:[]}]}),"\n",(0,n.jsx)(o.p,{children:"Display a list of CLI options and other help information."}),"\n",(0,n.jsx)(a.Z,{language:"bash",children:`syncpack ${e.command} --help\n`.trim()})]})}function h(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}function u(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},7463:(e,o,t)=>{t.d(o,{ZP:()=>u});var n=t(5893),r=t(1151),c=t(9794),a=t(9286),i=t(9960);const d={annotations:c.ds,Code:c.EK},s={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:void 0,showCopyButton:!0,themeName:"dracula"};function h(e){const o={p:"p",...(0,r.a)(),...e.components};return d||l("CH",!1),d.Code||l("CH.Code",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="dracula"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #F8F8F2;--ch-t-background: #282A36;--ch-t-lighter-inlineBackground: #282a36e6;--ch-t-editor-background: #282A36;--ch-t-editor-foreground: #F8F8F2;--ch-t-editor-rangeHighlightBackground: #BD93F915;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #44475A;--ch-t-focusBorder: #6272A4;--ch-t-tab-activeBackground: #282A36;--ch-t-tab-activeForeground: #F8F8F2;--ch-t-tab-inactiveBackground: #21222C;--ch-t-tab-inactiveForeground: #6272A4;--ch-t-tab-border: #191A21;--ch-t-tab-activeBorder: #282A36;--ch-t-editorGroup-border: #BD93F9;--ch-t-editorGroupHeader-tabsBackground: #191A21;--ch-t-editorLineNumber-foreground: #6272A4;--ch-t-input-background: #282A36;--ch-t-input-foreground: #F8F8F2;--ch-t-input-border: #191A21;--ch-t-icon-foreground: #C5C5C5;--ch-t-sideBar-background: #21222C;--ch-t-sideBar-foreground: #F8F8F2;--ch-t-sideBar-border: #21222C;--ch-t-list-activeSelectionBackground: #44475A;--ch-t-list-activeSelectionForeground: #F8F8F2;--ch-t-list-hoverBackground: #44475A75; }'}}),"\n","\n","\n",(0,n.jsx)(d.Code,{codeConfig:s,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"-i, --indent [value]",props:{}}]}],lang:"text"},annotations:[]}]}),"\n",(0,n.jsxs)(o.p,{children:["Override your ",(0,n.jsx)(i.Z,{to:"/config/indent",children:"indent"})," configuration, which is 2 spaces by default."]}),"\n",(0,n.jsx)(a.Z,{language:"bash",children:`# four spaces\nsyncpack ${e.command} --indent "    "\n# one tab\nsyncpack ${e.command} --indent '\t'\n# \\t is converted into a tab\nsyncpack ${e.command} --indent '\\t'\n`.trim()})]})}function u(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}function l(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},4086:(e,o,t)=>{t.d(o,{ZP:()=>i});var n=t(5893),r=t(1151),c=t(9286);function a(e){const o={p:"p",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:"Verbose logging can be enabled by prefixing syncpack with the following environment variable:"}),"\n",(0,n.jsx)(c.Z,{language:"bash",children:`SYNCPACK_VERBOSE=true syncpack ${e.command}`})]})}function i(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},3107:(e,o,t)=>{t.d(o,{ZP:()=>u});var n=t(5893),r=t(1151),c=t(9794),a=t(9286),i=t(9960);const d={annotations:c.ds,Code:c.EK},s={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:void 0,showCopyButton:!0,themeName:"dracula"};function h(e){const o={admonition:"admonition",code:"code",p:"p",...(0,r.a)(),...e.components};return d||l("CH",!1),d.Code||l("CH.Code",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="dracula"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #F8F8F2;--ch-t-background: #282A36;--ch-t-lighter-inlineBackground: #282a36e6;--ch-t-editor-background: #282A36;--ch-t-editor-foreground: #F8F8F2;--ch-t-editor-rangeHighlightBackground: #BD93F915;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #44475A;--ch-t-focusBorder: #6272A4;--ch-t-tab-activeBackground: #282A36;--ch-t-tab-activeForeground: #F8F8F2;--ch-t-tab-inactiveBackground: #21222C;--ch-t-tab-inactiveForeground: #6272A4;--ch-t-tab-border: #191A21;--ch-t-tab-activeBorder: #282A36;--ch-t-editorGroup-border: #BD93F9;--ch-t-editorGroupHeader-tabsBackground: #191A21;--ch-t-editorLineNumber-foreground: #6272A4;--ch-t-input-background: #282A36;--ch-t-input-foreground: #F8F8F2;--ch-t-input-border: #191A21;--ch-t-icon-foreground: #C5C5C5;--ch-t-sideBar-background: #21222C;--ch-t-sideBar-foreground: #F8F8F2;--ch-t-sideBar-border: #21222C;--ch-t-list-activeSelectionBackground: #44475A;--ch-t-list-activeSelectionForeground: #F8F8F2;--ch-t-list-hoverBackground: #44475A75; }'}}),"\n","\n","\n","\n",(0,n.jsx)(d.Code,{codeConfig:s,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"-s, --source [pattern]",props:{}}]}],lang:"text"},annotations:[]}]}),"\n",(0,n.jsx)("p",{children:(0,n.jsxs)(o.p,{children:["Override your ",(0,n.jsx)(i.Z,{to:"/config/source",children:"source"})," configuration to run ",(0,n.jsxs)("code",{children:["syncpack ",e.command]})," on only some package.json files."]})}),"\n",(0,n.jsx)(a.Z,{language:"bash",children:`# only the root package\nsyncpack ${e.command} --source 'package.json'\n# only packages matching a glob\nsyncpack ${e.command} --source 'packages/beta-*'\n# multiple values can be provided\nsyncpack ${e.command} --source 'package.json' --source 'packages/beta-*'\n`.trim()}),"\n",(0,n.jsx)(o.admonition,{type:"tip",children:(0,n.jsxs)(o.p,{children:["Add quotes around your ",(0,n.jsx)(o.code,{children:"--source"})," patterns so your shell does not interpret them before they're received by syncpack."]})})]})}function u(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}function l(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);