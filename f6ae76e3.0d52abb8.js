(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),o=n(6),r=(n(0),n(152)),i={id:"database",title:"Database Structure",sidebar_label:"Database Structure"},c={id:"code_documentation/database",title:"Database Structure",description:"MongoDB is a NoSQL database. As such one of its features is that the entries in",source:"@site/docs\\code_documentation\\database.mdx",permalink:"/Coastal-Image-Labeler/docs/code_documentation/database",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/code_documentation/database.mdx",sidebar_label:"Database Structure",sidebar:"docs",previous:{title:"Auth0",permalink:"/Coastal-Image-Labeler/docs/code_documentation/auth0"},next:{title:"Add Images to Database",permalink:"/Coastal-Image-Labeler/docs/code_documentation/adding_images"}},l=[{value:"Terminaology",id:"terminaology",children:[]},{value:"Object Relation Models",id:"object-relation-models",children:[{value:"Catalog",id:"catalog",children:[]},{value:"Images",id:"images",children:[]},{value:"Question Set",id:"question-set",children:[]}]},{value:"Namespaces",id:"namespaces",children:[]}],s={rightToc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"MongoDB is a NoSQL database. As such one of its features is that the entries in\nthe database do ",Object(r.b)("strong",{parentName:"p"},"NOT")," have to follow a strict format (SQL entries must have\neach column filled in). Structure can still be made with things called Object\nRelation Models which is what Mongoose provides."),Object(r.b)("h2",{id:"terminaology"},"Terminaology"),Object(r.b)("p",null,"I will draw comparisions from MongoDB to SQL terms. Starting from the bottom,"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"Row")," in SQL is called a ",Object(r.b)("inlineCode",{parentName:"p"},"Document")," in MongoDB."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"For example we have a Document for image ",Object(r.b)("inlineCode",{parentName:"li"},"P25959661.jpg")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"Table")," in SQL is called a ",Object(r.b)("inlineCode",{parentName:"p"},"Collection")," in MongoDB."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"For example we have a Collection for all images"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"Schema")," in SQL is a ",Object(r.b)("inlineCode",{parentName:"p"},"Namespace")," in MongoDB."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"For example we have a Namespace called ",Object(r.b)("inlineCode",{parentName:"li"},"dev")," or one called ",Object(r.b)("inlineCode",{parentName:"li"},"production"),".")))),Object(r.b)("h2",{id:"object-relation-models"},"Object Relation Models"),Object(r.b)("p",null,"These Object Relation Models (ORMs) help provide for a structure to the data by\nallowing for type checking and having required/non required fields."),Object(r.b)("h3",{id:"catalog"},"Catalog"),Object(r.b)("p",null,"The Catalog object is the overarching model that contains the archives which in\nturn contains the images. It also contains the questions that are applied to all\nimages of archives that are part of this catalog. This is the types of the\nCatalog."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"export interface CatalogDocument extends Document {\n    archives: any,\n    catalogInfo?:any, //optional\n    dateAdded?:Date, //optional\n    name : string,\n    path : string,\n    taggable:Boolean,\n    questionSet:Types.ObjectId\n  }\n")),Object(r.b)("h4",{id:"archives"},"Archives"),Object(r.b)("p",null,"These are subfolders of the Catalogs and is originally in place due to how the\nNOAA images where downloaded. They serve no other purpose other then to group\nimages up and serve as a link between Catalogs and Images"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"export interface ArchiveDocument extends Document {\n  dateAdded?:Date,\n  name : string,\n  path : string,\n  role: [Types.ObjectId],\n  catalog:Types.ObjectId,\n  taggable: Boolean,\n  allImages?:any\n}\n")),Object(r.b)("h3",{id:"images"},"Images"),Object(r.b)("p",null,"The Image models most important fields are the ",Object(r.b)("inlineCode",{parentName:"p"},"tags"),", the ",Object(r.b)("inlineCode",{parentName:"p"},"tillComplete")," and\n",Object(r.b)("inlineCode",{parentName:"p"},"taggable")," fields."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"export interface ImageDocument extends Document {\n    archive:Types.ObjectId,\n    compressed?:boolean,\n    dateAdded?:Date,\n    finalTag?:Object,\n    finishedTagging: boolean,\n    location?:{\n        upperLeft:[number],\n        upperRight:[number],\n        lowerLeft:[number],\n        lowerRight:[number]\n    },\n    fileName :string,\n    path : string,\n    taggable:boolean,\n    taggedTimes?:[Date],\n    tags?:[Object],\n    tillComplete:number\n}\n")),Object(r.b)("h3",{id:"question-set"},"Question Set"),Object(r.b)("p",null,"Of the current models, the question set is the only one that is ",Object(r.b)("strong",{parentName:"p"},"NOT")," checked.\nIt serves simply as a guideline for admins to use. Due to this nature it is\n",Object(r.b)("strong",{parentName:"p"},"HIGHLY")," reccomended to make sure the documents for Question Sets are correct\nand is best to copy an existing one"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"export interface QuestionSetDocument extends Document {\n    name:string,\n    description:string,\n    questions:[any]\n}\n")),Object(r.b)("h2",{id:"namespaces"},"Namespaces"),Object(r.b)("p",null,"As mentioned before Namespaces are like Schemas in SQL. Generally there are 2, a\ndev namespace and a production namespace. For testing it is advised to create\nyour own namespace (Its the last part of the URI) as to not interfere with production data."))}b.isMDXComponent=!0},152:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||r;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);