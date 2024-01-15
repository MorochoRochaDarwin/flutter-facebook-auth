"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2177],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),g=u(n),m=i,f=g["".concat(s,".").concat(m)]||g[m]||l[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1406:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return l},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return u}});var r=n(3117),i=(n(7294),n(3905));const a={},o="iOS configuration",p={unversionedId:"ios",id:"version-3.x.x/ios",title:"iOS configuration",description:"For Objective-C projects this plugin won't work because this plugin was written in swift. So you need to use swift as a default language for your flutter project (Check how to change to swift here).",source:"@site/versioned_docs/version-3.x.x/ios.md",sourceDirName:".",slug:"/ios",permalink:"/docs/3.x.x/ios",draft:!1,editUrl:"https://github.com/darwin-morocho/flutter-facebook-auth/tree/master/website/versioned_docs/version-3.x.x/ios.md",tags:[],version:"3.x.x",frontMatter:{},sidebar:"version-3.x.x/tutorialSidebar",previous:{title:"Android configuration",permalink:"/docs/3.x.x/android"},next:{title:"web configuration",permalink:"/docs/3.x.x/web"}},s={},u=[],c={toc:u};function l(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ios-configuration"},"iOS configuration"),(0,i.kt)("admonition",{title:"IMPORTANT",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"For ",(0,i.kt)("inlineCode",{parentName:"p"},"Objective-C")," projects this plugin won't work because this plugin was written in swift. So you need to use swift as a default language for your flutter project (Check how to change to swift ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/darwin-morocho/flutter-facebook-auth/issues/41#issuecomment-761702248"},"here"),").")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In your Podfile uncomment the next line (You need set the minimum target to 10.0 or higher)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"platform :ios, '10.0'\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://developers.facebook.com/docs/facebook-login/ios"},"Facebook Login for iOS - Quickstart\n"))," and select or create your app."),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/15864336/98708293-0056a900-234f-11eb-9975-b75ca08b6470.png"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Skip")," the step 2 ",(0,i.kt)("strong",{parentName:"p"},"(Set up Your Development Environment)"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In the step 3 (Register and Configure Your App with Facebook) you need add your ",(0,i.kt)("inlineCode",{parentName:"p"},"Bundle Identifier")),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/15864336/98708485-38f68280-234f-11eb-9d1a-7c970d04642a.png"}),(0,i.kt)("p",{parentName:"li"},"You can find your ",(0,i.kt)("inlineCode",{parentName:"p"},"Bundle Identifier")," in Xcode (Runner - Target Runner - General)"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/15864336/98708171-e1581700-234e-11eb-8f94-23c0db55e8f0.png",alt:"image"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In the Step 4 you need configure your ",(0,i.kt)("inlineCode",{parentName:"p"},"Info.plist")," file inside ",(0,i.kt)("inlineCode",{parentName:"p"},"ios/Runner/Info.plist")),(0,i.kt)("p",{parentName:"li"},"From Xcode you can open your ",(0,i.kt)("inlineCode",{parentName:"p"},"Info.plist")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"Source Code")," now add the next code and replace ",(0,i.kt)("inlineCode",{parentName:"p"},"{your-app-id}")," with your facebook app Id."),(0,i.kt)("p",{parentName:"li"},"In the key ",(0,i.kt)("strong",{parentName:"p"},"FacebookClientToken"),", replace CLIENT-TOKEN with the value found under Settings > Advanced > Client Token in your App Dashboard."),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/15864336/98708650-66433080-234f-11eb-81c6-2297b9e6f7a7.png",width:"600"}),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<key>CFBundleURLTypes</key>\n<array>\n  <dict>\n    <key>CFBundleURLSchemes</key>\n    <array>\n      <string>fb{your-app-id}</string>\n    </array>\n  </dict>\n</array>\n<key>FacebookAppID</key>\n<string>{your-app-id}</string>\n<key>FacebookClientToken</key>\n<string>CLIENT-TOKEN</string>\n<key>FacebookDisplayName</key>\n<string>{your-app-name}</string>\n<key>LSApplicationQueriesSchemes</key>\n<array>\n  <string>fbapi</string>\n  <string>fb-messenger-share-api</string>\n  <string>fbauth2</string>\n  <string>fbshareextension</string>\n</array>\n")),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"If you have implement ",(0,i.kt)("inlineCode",{parentName:"p"},"another providers")," (Like Google) in your app you should merge values in Info.plist")),(0,i.kt)("p",{parentName:"li"},"  Check if you already have ",(0,i.kt)("inlineCode",{parentName:"p"},"CFBundleURLTypes")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"LSApplicationQueriesSchemes")," keys in your Info.plist. If you have, you should merge their values, instead of adding a duplicate key."),(0,i.kt)("p",{parentName:"li"},"  Example with Google and Facebook implemetation:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<key>CFBundleURLTypes</key>\n<array>\n  <dict>\n    <key>CFBundleTypeRole</key>\n    <string>Editor</string>\n    <key>CFBundleURLSchemes</key>\n    <array>\n      <string>fb{your-app-id}</string>\n      <string>com.googleusercontent.apps.{your-app-specific-url}</string>\n    </array>\n  </dict>\n</array>\n")),(0,i.kt)("p",{parentName:"li"},"  To use any of the Facebook dialogs (e.g., Login, Share, App Invites, etc.) that can perform an app switch to Facebook apps, your application's Info.plist also needs to include: ",(0,i.kt)("inlineCode",{parentName:"p"},"<dict>...</dict>"),")"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<key>LSApplicationQueriesSchemes</key>\n<array>\n  <string>fbapi</string>\n  <string>fbapi20130214</string>\n  <string>fbapi20130410</string>\n  <string>fbapi20130702</string>\n  <string>fbapi20131010</string>\n  <string>fbapi20131219</string>\n  <string>fbapi20140410</string>\n  <string>fbapi20140116</string>\n  <string>fbapi20150313</string>\n  <string>fbapi20150629</string>\n  <string>fbapi20160328</string>\n  <string>fbauth</string>\n  <string>fb-messenger-share-api</string>\n  <string>fbauth2</string>\n  <string>fbshareextension</string>\n</array>\n")))))}l.isMDXComponent=!0}}]);