"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8693],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9958:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var r=n(3117),a=(n(7294),n(3905));const o={},i="macOS support",l={unversionedId:"macos",id:"macos",title:"macOS support",description:"in your macos/runner/info.plist folder you must add",source:"@site/docs/macos.md",sourceDirName:".",slug:"/macos",permalink:"/docs/6.x.x/macos",draft:!1,editUrl:"https://github.com/darwin-morocho/flutter-facebook-auth/tree/master/website/docs/macos.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"web configuration",permalink:"/docs/6.x.x/web"},next:{title:"Make a Login request",permalink:"/docs/6.x.x/login"}},u={},c=[],p={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"macos-support"},"macOS support"),(0,a.kt)("p",null,"in your ",(0,a.kt)("inlineCode",{parentName:"p"},"macos/runner/info.plist")," folder you must add"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<key>com.apple.security.network.server</key>\n<true/>\n")),(0,a.kt)("p",null,"Now in ",(0,a.kt)("inlineCode",{parentName:"p"},"xcode")," select the ",(0,a.kt)("inlineCode",{parentName:"p"},"Runner")," target and go to ",(0,a.kt)("strong",{parentName:"p"},"Signing & Capabilities")," and enable\n",(0,a.kt)("inlineCode",{parentName:"p"},"Outgoing Connections")),(0,a.kt)("img",{width:"496",alt:"Captura de Pantalla 2022-05-08 a la(s) 17 17 23",src:"https://user-images.githubusercontent.com/15864336/167318086-b3812f19-0834-4291-acc8-694b890dfe7e.png"}),(0,a.kt)("p",null,"Unlinke ios, android and web for desktop apps the facebook session data is not stored by default. In that case this plugin uses ",(0,a.kt)("inlineCode",{parentName:"p"},"flutter_secure_storage")," to\nsecure store the session data."),(0,a.kt)("p",null,"To use ",(0,a.kt)("inlineCode",{parentName:"p"},"flutter_secure_storage")," on macOS you need to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"Keychain Sharing")," capability"),(0,a.kt)("img",{width:"574",alt:"image",src:"https://user-images.githubusercontent.com/15864336/167318216-4bdd7e07-3105-444a-8a23-dfbe24b6c511.png"}),(0,a.kt)("p",null,"Finally in your ",(0,a.kt)("inlineCode",{parentName:"p"},"main.dart")," you need to initialize this plugin to be available for macOS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},'import \'package:flutter/foundation.dart\' show defaultTargetPlatform;\n\nvoid main() async {\n  if (defaultTargetPlatform == TargetPlatform.macOS) {\n    await FacebookAuth.i.webAndDesktopInitialize(\n      appId: "1329834907365798",\n      cookie: true,\n      xfbml: true,\n      version: "v14.0",\n    );\n  }\n  runApp(MyApp());\n}\n')),(0,a.kt)("p",null,"If your app also support web you must use the next code instead of above code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},'import \'package:flutter/foundation.dart\' show defaultTargetPlatform, kIsWeb;\n\nvoid main() async {\n  if (kIsWeb || defaultTargetPlatform == TargetPlatform.macOS) {\n    await FacebookAuth.i.webAndDesktopInitialize(\n      appId: "YOUR_APP_ID",\n      cookie: true,\n      xfbml: true,\n      version: "v14.0",\n    );\n  }\n  runApp(MyApp());\n}\n')),(0,a.kt)("p",null,"Now in your facebook console > Facebook Login > Settings and make sure you have enabled ",(0,a.kt)("inlineCode",{parentName:"p"},"Login from Devices")," ,\n",(0,a.kt)("inlineCode",{parentName:"p"},"Login with the JavaScript SDK")," and finally check that ",(0,a.kt)("inlineCode",{parentName:"p"},"https://www.facebook.com/")," is added in your ",(0,a.kt)("inlineCode",{parentName:"p"},"Allowed Domains for the JavaScript SDK")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/15864336/200191538-435b722b-190a-4d30-b684-cf448e192366.png",alt:null})),(0,a.kt)("p",null,"Here one example of my configuration in the facebook console to be able to use the facebook login flow\nin macOS\n",(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/15864336/200200865-6adb18e7-dfc0-4a23-8e48-d29d58e4fefb.jpg",alt:null})),(0,a.kt)("p",null,":::\nNOTE (macOS): keep in mind that this plugin uses the oauth flow facebook login\nand in some cases if the graph api doesn't return a ",(0,a.kt)("inlineCode",{parentName:"p"},"long_lived_token"),"\nthe token stored in the keychain will have a sort live time (80 minutes or less).\n:::"))}s.isMDXComponent=!0}}]);