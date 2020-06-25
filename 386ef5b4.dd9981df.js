(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),o=(n(0),n(155)),i={id:"auth0",title:"Auth0",sidebar_label:"Auth0"},c={id:"code_documentation/auth0",title:"Auth0",description:"Auth0, found here, is the provider for session",source:"@site/docs\\code_documentation\\auth0.md",permalink:"/Coastal-Image-Labeler/docs/code_documentation/auth0",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/code_documentation/auth0.md",sidebar_label:"Auth0",sidebar:"docs",previous:{title:"Project Structure",permalink:"/Coastal-Image-Labeler/docs/code_documentation/project_structure"},next:{title:"Database Structure",permalink:"/Coastal-Image-Labeler/docs/code_documentation/database"}},s=[{value:"Setup",id:"setup",children:[]},{value:"config.env",id:"configenv",children:[]},{value:"Finding values on Auth0",id:"finding-values-on-auth0",children:[]}],u={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Auth0, found ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://auth0.com/"}),"here"),", is the provider for session\nmanagement. Auth0 permits users to signin using Gmail, GitHub,\nLinkedIn and Microsoft accounts, or just make a new username/password. Auth0\nhandles  all the security features (e.g., session management, user storing in\nthe database or other risky aspects related to sessions)."),Object(o.b)("h2",{id:"setup"},"Setup"),Object(o.b)("p",null,"As mentioned in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/code_documentation/packages"}),"Packages"),", the ",Object(o.b)("inlineCode",{parentName:"p"},"dotenv")," package\nallows the use of a file called ",Object(o.b)("inlineCode",{parentName:"p"},"config.env")," that contains the environment\nvariables. Of these environment variables some of them are secrets such as the\npassword to connect to the database. In this same ",Object(o.b)("inlineCode",{parentName:"p"},"config.env")," is the\ninformation to interact with Auth0."),Object(o.b)("h2",{id:"configenv"},"config.env"),Object(o.b)("p",null,"This is the contents of the ",Object(o.b)("inlineCode",{parentName:"p"},"config.env")," file"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'NODE_ENV="development"\nPORT=6969\n\n//Both below can be found from MongoDb.\nMONGO_URI_DEV = "The information for development database. "\nMONGO_URI_PRODUCTION = "The information for production database."\n\n//Auth0 related\nAUTH0_DOMAIN= "String, found on Auth0"\nAUTH0_TOKEN_URL = "AUTH0_DOMAIN/oauth/token" // Replace AUTH0_DOMAIN with the value above\nAUTH0_CLIENT_ID= "String, found on Auth0, very important that this is kept secret"\nAUTH0_CLIENT_SECRET= "String, found on Auth0, very important that this is kept secret"\n\n//make sure the port above and below are same\nAUTH0_CALLBACK_URL= "https://coastalimagelabeler.science/callback"\nBASE_URL= "https://coastalimagelabeler.science"\n\n//Where compressed images are saved\n//Inside the file structure is the same as\n//where the image is saved.\nCOMPRESS_FOLDER = "/datadrive2/compressed/archives"\n')),Object(o.b)("h2",{id:"finding-values-on-auth0"},"Finding values on Auth0"),Object(o.b)("p",null,"After logging into Auth0, you can find values:"),Object(o.b)("p",null,"Go to my ",Object(o.b)("inlineCode",{parentName:"p"},"Applications")," and select the correct one.\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/code_documentation/my_applications.png",alt:"app6",title:"Applications6"}))),Object(o.b)("p",null,"The secret values can be found here.\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/code_documentation/secret_values.png",alt:"app5",title:"Applications5"}))),Object(o.b)("p",null,"And then set the callback URLS. Here they are localhost because of testing but for production they would be the machines IP.\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/code_documentation/callback_urls.png",alt:"app7",title:"Applications7"}))))}l.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),b=a,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?r.a.createElement(m,c(c({ref:t},u),{},{components:n})):r.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);