"use strict";(self.webpackChunkdocusaurus_safira=self.webpackChunkdocusaurus_safira||[]).push([[5418],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),m=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=m(e.components);return r.createElement(i.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=m(t),d=o,f=p["".concat(i,".").concat(d)]||p[d]||l[d]||a;return t?r.createElement(f,c(c({ref:n},u),{},{components:t})):r.createElement(f,c({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=p;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var m=2;m<a;m++)c[m]=t[m];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6818:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return f}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),c=["components"],s={toc:[{value:"<code>safira-cli commands</code>",id:"safira-cli-commands",level:2}]};function i(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"safira-cli-commands"},(0,a.kt)("inlineCode",{parentName:"h2"},"safira-cli commands")),(0,a.kt)("p",null,"list all the commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"USAGE\n  $ safira-cli commands [--json] [-h] [--hidden] [--columns <value> | -x] [--sort <value>] [--filter <value>]\n    [--output csv|json|yaml |  | [--csv | --no-truncate]] [--no-header | ]\n\nFLAGS\n  -h, --help         Show CLI help.\n  -x, --extended     show extra columns\n  --columns=<value>  only show provided columns (comma-separated)\n  --csv              output is csv format [alias: --output=csv]\n  --filter=<value>   filter property by partial string matching, ex: name=foo\n  --hidden           show hidden commands\n  --no-header        hide table header from output\n  --no-truncate      do not truncate output to fit screen\n  --output=<option>  output in a more machine friendly format\n                     <options: csv|json|yaml>\n  --sort=<value>     property to sort by (prepend '-' for descending)\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  list all the commands\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"See code: ",(0,a.kt)("a",{parentName:"em",href:"https://github.com/oclif/plugin-commands/blob/v2.1.0/src/commands/commands.ts"},"@oclif/plugin-commands"))))}i.isMDXComponent=!0;var m=["components"],u={sidebar_position:4,sidebar_label:"commandss",title:"Command"},l=void 0,p={unversionedId:"commands/commands",id:"commands/commands",title:"Command",description:"",source:"@site/docs/commands/commands.mdx",sourceDirName:"commands",slug:"/commands/",permalink:"/safira-docs/docs/commands/",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/commands/commands.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"commandss",title:"Command"},sidebar:"tutorialSidebar",previous:{title:"Safira-cli",permalink:"/safira-docs/docs/installation/cli"},next:{title:"Project",permalink:"/safira-docs/docs/commands/project/"}},d={},f=[],y={toc:f};function v(e){var n=e.components,t=(0,o.Z)(e,m);return(0,a.kt)("wrapper",(0,r.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(i,{components:t.components,mdxType:"Commands"}))}v.isMDXComponent=!0}}]);