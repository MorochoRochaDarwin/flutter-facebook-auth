"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6605],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(g,o(o({ref:t},l),{},{components:n})):r.createElement(g,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2399:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],p={},s="iOS configuration",c={unversionedId:"ios",id:"ios",isDocsHomePage:!1,title:"iOS configuration",description:"For Objective-C projects this plugin won't work because this plugin was written in swift. So you need to use swift as a default language for your flutter project (Check how to change to swift here).",source:"@site/docs/ios.md",sourceDirName:".",slug:"/ios",permalink:"/docs/4.x.x/ios",editUrl:"https://github.com/darwin-morocho/flutter-facebook-auth/tree/master/website/docs/ios.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Android configuration",permalink:"/docs/4.x.x/android"},next:{title:"web configuration",permalink:"/docs/4.x.x/web"}},l=[],u={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ios-configuration"},"iOS configuration"),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"IMPORTANT")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For ",(0,i.kt)("inlineCode",{parentName:"p"},"Objective-C")," projects this plugin won't work because this plugin was written in swift. So you need to use swift as a default language for your flutter project (Check how to change to swift ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/darwin-morocho/flutter-facebook-auth/issues/41#issuecomment-761702248"},"here"),")."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In your Podfile uncomment the next line (You need set the minimum target to 12.0 or higher)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"platform :ios, '12.0'\n")),(0,i.kt)("p",null,"And in xcode you must set your ",(0,i.kt)("strong",{parentName:"p"},"deployment Info")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"12.0")),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/15864336/172642786-560536ac-a104-4f7c-94fa-49ab29a81d64.png"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://developers.facebook.com/docs/facebook-login/ios"},"Facebook Login for iOS - Quickstart\n"))," and select or create your app."),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/15864336/98708293-0056a900-234f-11eb-9975-b75ca08b6470.png"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Skip")," the step 2 ",(0,i.kt)("strong",{parentName:"p"},"(Set up Your Development Environment)"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In the step 3 (Register and Configure Your App with Facebook) you need add your ",(0,i.kt)("inlineCode",{parentName:"p"},"Bundle Identifier")),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/15864336/98708485-38f68280-234f-11eb-9d1a-7c970d04642a.png"}),(0,i.kt)("p",{parentName:"li"},"You can find your ",(0,i.kt)("inlineCode",{parentName:"p"},"Bundle Identifier")," in Xcode (Runner - Target Runner - General)"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/15864336/98708171-e1581700-234e-11eb-8f94-23c0db55e8f0.png",alt:"image"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In the Step 4 you need configure your ",(0,i.kt)("inlineCode",{parentName:"p"},"Info.plist")," file inside ",(0,i.kt)("inlineCode",{parentName:"p"},"ios/Runner/Info.plist")),(0,i.kt)("p",{parentName:"li"},"From Xcode you can open your ",(0,i.kt)("inlineCode",{parentName:"p"},"Info.plist")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"Source Code")," now add the next code and replace ",(0,i.kt)("inlineCode",{parentName:"p"},"{your-app-id}")," with your facebook app Id."),(0,i.kt)("p",{parentName:"li"},"In the key ",(0,i.kt)("strong",{parentName:"p"},"FacebookClientToken"),", replace CLIENT-TOKEN with the value found under Settings > Advanced > Client Token in your App Dashboard."),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/15864336/98708650-66433080-234f-11eb-81c6-2297b9e6f7a7.png",width:"600"}),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<key>CFBundleURLTypes</key>\n<array>\n  <dict>\n    <key>CFBundleURLSchemes</key>\n    <array>\n      <string>fb{your-app-id}</string>\n    </array>\n  </dict>\n</array>\n<key>FacebookAppID</key>\n<string>{your-app-id}</string>\n<key>FacebookClientToken</key>\n<string>CLIENT-TOKEN</string>\n<key>FacebookDisplayName</key>\n<string>{your-app-name}</string>\n<key>LSApplicationQueriesSchemes</key>\n<array>\n  <string>fbapi</string>\n  <string>fb-messenger-share-api</string>\n  <string>fbauth2</string>\n  <string>fbshareextension</string>\n</array>\n")),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"If you have implement ",(0,i.kt)("inlineCode",{parentName:"p"},"another providers")," (Like Google) in your app you should merge values in Info.plist")),(0,i.kt)("p",{parentName:"li"},"  Check if you already have ",(0,i.kt)("inlineCode",{parentName:"p"},"CFBundleURLTypes")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"LSApplicationQueriesSchemes")," keys in your Info.plist. If you have, you should merge their values, instead of adding a duplicate key."),(0,i.kt)("p",{parentName:"li"},"  Example with Google and Facebook implemetation:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<key>CFBundleURLTypes</key>\n<array>\n  <dict>\n    <key>CFBundleTypeRole</key>\n    <string>Editor</string>\n    <key>CFBundleURLSchemes</key>\n    <array>\n      <string>fb{your-app-id}</string>\n      <string>com.googleusercontent.apps.{your-app-specific-url}</string>\n    </array>\n  </dict>\n</array>\n")),(0,i.kt)("p",{parentName:"li"},"  To use any of the Facebook dialogs (e.g., Login, Share, App Invites, etc.) that can perform an app switch to Facebook apps, your application's Info.plist also needs to include: ",(0,i.kt)("inlineCode",{parentName:"p"},"<dict>...</dict>"),")"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<key>LSApplicationQueriesSchemes</key>\n<array>\n  <string>fbapi</string>\n  <string>fbapi20130214</string>\n  <string>fbapi20130410</string>\n  <string>fbapi20130702</string>\n  <string>fbapi20131010</string>\n  <string>fbapi20131219</string>\n  <string>fbapi20140410</string>\n  <string>fbapi20140116</string>\n  <string>fbapi20150313</string>\n  <string>fbapi20150629</string>\n  <string>fbapi20160328</string>\n  <string>fbauth</string>\n  <string>fb-messenger-share-api</string>\n  <string>fbauth2</string>\n  <string>fbshareextension</string>\n</array>\n")))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"check one example of the info.plist ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/darwin-morocho/flutter-facebook-auth/blob/master/examples/with_provider/ios/Runner/Info.plist"},"here")))))}m.isMDXComponent=!0}}]);