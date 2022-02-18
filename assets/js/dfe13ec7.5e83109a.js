"use strict";(self.webpackChunkdocusaurus_safira=self.webpackChunkdocusaurus_safira||[]).push([[549],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(t),d=a,b=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return t?n.createElement(b,o(o({ref:r},u),{},{components:t})):n.createElement(b,o({ref:r},u))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3833:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var n=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],c={sidebar_position:8},s=void 0,l={unversionedId:"safira-cli/Comandos Safira-CLI/Project Publish Safira-CLI",id:"safira-cli/Comandos Safira-CLI/Project Publish Safira-CLI",title:"Project Publish Safira-CLI",description:"``",source:"@site/docs/safira-cli/Comandos Safira-CLI/Project Publish Safira-CLI.md",sourceDirName:"safira-cli/Comandos Safira-CLI",slug:"/safira-cli/Comandos Safira-CLI/Project Publish Safira-CLI",permalink:"/safira-docs/docs/safira-cli/Comandos Safira-CLI/Project Publish Safira-CLI",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/safira-cli/Comandos Safira-CLI/Project Publish Safira-CLI.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Openapi Safira-CLI",permalink:"/safira-docs/docs/safira-cli/Comandos Safira-CLI/Openapi Safira-CLI"},next:{title:"Help-Safira-CLI",permalink:"/safira-docs/docs/safira-cli/Comandos Safira-CLI/Help-Safira-CLI"}},u=[{value:"project:build-publish",id:"projectbuild-publish",children:[],level:2}],p={toc:u};function f(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"``"),(0,i.kt)("h2",{id:"projectbuild-publish"},"project:build-publish"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"safira-cli project:build-publish \n")),(0,i.kt)("p",null,"Formas de utiliza\xe7\xe3o:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"USAGE\n  $ safira-cli project:build-publish\n\nOPTIONS\n  -h, --help                 show CLI help\n  -v, --version=version      App Version\n  --docker-file=docker-file  Dockerfile path\n  --skip-test=yes|no         [default: no] Skip test\n\nEXAMPLES\n  safira-cli project:build\n  safira-cli project:build --version 1.0.0 --skip-test true\n  safira-cli project:build --docker-file ./src/main/docker/Dockerfile\n\n")))}f.isMDXComponent=!0}}]);