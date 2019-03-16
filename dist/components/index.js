import t from"react";var n=function(n){var e=n.openIn,a=void 0===e?"self":e,c=n.href,o=n.children;return["external","_external"].includes(a)?t.createElement("a",{href:c,rel:"noopener noreferrer",target:"_blank"},o):t.createElement("a",{href:c,target:["blank","_blank"].includes(a)?"_blank":"_self"},o)},e=function(n){var e=n.fill,a=void 0===e?"flat":e,c=n.text,o=void 0===c?"normal":c,r=n.size,l=void 0===r?"normal":r,i=n.color,s=void 0===i?"plain":i,d=n.shape,u=void 0===d?"normal":d,m=n.type,h=void 0===m?"button":m,f=n.disabled,p=void 0!==f&&f,b=n.openIn,v=n.href,y=n.onClick,g=n.children,k=[];switch(k.push(a),"normal"!==o&&k.push(o),"normal"!==l&&k.push(l),"plain"!==s&&k.push(s),"normal"!==u&&k.push(u),h){case"link":return["external","_external"].includes(b)?t.createElement("a",{href:p?"":v,className:["button"].concat(k).join(" "),rel:"noopener noreferrer",target:"_blank",disabled:p,onClick:y},g):t.createElement("a",{href:p?"":v,className:["button"].concat(k).join(" "),target:["blank","_blank"].includes(b)?"_blank":"_self",disabled:p,onClick:y},g);case"submit":return t.createElement("button",{type:"submit",className:k.join(" "),disabled:p,onClick:y},g);case"reset":return t.createElement("button",{type:"reset",className:k.join(" "),disabled:p,onClick:y},g);default:return t.createElement("button",{className:k.join(" "),disabled:p,onClick:y},g)}},a=function(n){var e=n.data,a=n.render,c=void 0===a?function(n){return t.createElement("li",null,n)}:a;return t.createElement("ul",null,e.map(c))};function c(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=[],a=!0,c=!1,o=void 0;try{for(var r,l=t[Symbol.iterator]();!(a=(r=l.next()).done)&&(e.push(r.value),!n||e.length!==n);a=!0);}catch(t){c=!0,o=t}finally{try{a||null==l.return||l.return()}finally{if(c)throw o}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var o=function(n){var e=n.children;return t.createElement("main",{className:"layout-content"},e)},r=function(n){var e=n.children;return t.createElement("aside",{className:"layout-sidebar"},e)},l=function(n){var e=n.open,a=n.onClick;return e?t.createElement(t.Fragment,null,t.createElement("button",{className:"layout-sidebar-tab",onClick:a},t.createElement("svg",{width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}," ",t.createElement("path",{d:"M18 6L6 18M18 18L6 6",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}))),t.createElement("div",{class:"layout-sidebar-overlay"})):t.createElement("button",{className:"layout-sidebar-tab",onClick:a},t.createElement("svg",{width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.createElement("path",{d:"M21 12H3M21 6H3M21 18H3",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokLinejoin:"round"})))},i=function(n){var e=n.children;return t.createElement("header",{className:"layout-header"},e)},s=function(n){var e=n.header,a=void 0===e?"top":e,s=n.sidebar,d=void 0===s?"left":s,u=n.contentSize,m=void 0===u?[1,1,.75,.8]:u,h=n.children,f=h.filter(function(t){return i.name==t.type.name})[0],p=h.filter(function(t){return r.name==t.type.name})[0],b=h.filter(function(t){return o.name==t.type.name})[0],v="layout-".concat(a,"-").concat(d,"-").concat(m.map(function(t){return"".concat(t).replace(".","")}).join("-")),y=c(t.useState(!1),2),g=y[0],k=y[1];return t.createElement(t.Fragment,null,t.createElement("style",null,function(t,n,e,a){var c="",o=["","","",""];"top"==n?"left"==e?(c='"header header"\n". content"',o[0]="".concat(100-100*a[0],"% ").concat(100*a[0],"%"),o[1]="".concat(100-100*a[1],"% ").concat(100*a[1],"%"),o[2]="".concat(100-100*a[2],"% ").concat(100*a[2],"%"),o[3]="".concat(100-100*a[3],"% ").concat(100*a[3],"%")):"right"==e?(c='"header header"\n"content ."',o[0]="".concat(100*a[0],"% ").concat(100-100*a[0],"%"),o[1]="".concat(100*a[1],"% ").concat(100-100*a[1],"%"),o[2]="".concat(100*a[2],"% ").concat(100-100*a[2],"%"),o[3]="".concat(100*a[3],"% ").concat(100-100*a[3],"%")):(c='"header"\n"content"',o[0]="100%",o[1]="100%",o[2]="100%",o[3]="100%"):"bottom"==n?"left"==e?(c='". content"\n"header header"',o[0]="".concat(100-100*a[0],"% ").concat(100*a[0],"%"),o[1]="".concat(100-100*a[1],"% ").concat(100*a[1],"%"),o[2]="".concat(100-100*a[2],"% ").concat(100*a[2],"%"),o[3]="".concat(100-100*a[3],"% ").concat(100*a[3],"%")):"right"==e?(c='"content ."\n"header header"',o[0]="".concat(100*a[0],"% ").concat(100-100*a[0],"%"),o[1]="".concat(100*a[1],"% ").concat(100-100*a[1],"%"),o[2]="".concat(100*a[2],"% ").concat(100-100*a[2],"%"),o[3]="".concat(100*a[3],"% ").concat(100-100*a[3],"%")):(c='"content"\n"header"',o[0]="100%",o[1]="100%",o[2]="100%",o[3]="100%"):"left"==e?(c='". content"',o[0]="".concat(100-100*a[0],"% ").concat(100*a[0],"%"),o[1]="".concat(100-100*a[1],"% ").concat(100*a[1],"%"),o[2]="".concat(100-100*a[2],"% ").concat(100*a[2],"%"),o[3]="".concat(100-100*a[3],"% ").concat(100*a[3],"%")):"right"==e?(c='"content ."',o[0]="".concat(100*a[0],"% ").concat(100-100*a[0],"%"),o[1]="".concat(100*a[1],"% ").concat(100-100*a[1],"%"),o[2]="".concat(100*a[2],"% ").concat(100-100*a[2],"%"),o[3]="".concat(100*a[3],"% ").concat(100-100*a[3],"%")):(c='"content"',o[0]="100%",o[1]="100%",o[2]="100%",o[3]="100%");var r=[0,0,0,0];return"none"!==e&&(r=[100-100*a[0],100-100*a[1],100-100*a[2],100-100*a[3]]),"\n  .".concat(t," {\n    grid-template-areas: ").concat(c,";\n    grid-template-columns: ").concat(o[0],";\n  }\n  ").concat("none"==n?"":".".concat(t," .layout-header {\n      ").concat("top"==n?"top: 0;":"bottom: 0;","\n    }"),"\n  ").concat("none"==e?"":".".concat(t," .layout-sidebar {\n      ").concat(0==r[0]?"".concat("left"==e?"left: -100%;":"right: -100%;","\n        width: calc(100% - var(--ls-250p));"):"".concat("left"==e?"left: 0;":"right: 0;","\n        width: ").concat(r[0],"%;"),"\n      ").concat("none"==n?"min-height: 100vh;":"","\n      ").concat("top"==n?"top: var(--ls-300p);":"bottom"==n?"bottom: var(--ls-300p);":"","\n    }"),"\n  ").concat("none"!==e&&0==r[0]?".".concat(t," .layout-sidebar-tab {\n      ").concat("top"==n?"top: var(--ls-300p);":"bottom"==n?"bottom: var(--ls-300p);":"","\n      ").concat("left"==e?"left: 0;":"right: 0;","\n    }"):".".concat(t," .layout-sidebar-tab {\n      display: none;\n    }"),"\n  .").concat(t,".sidebar-visible .layout-sidebar {\n    ").concat("left"==e?"left: 0;":"right: 0;","\n  }\n  .").concat(t,".sidebar-visible .layout-sidebar-tab {\n    ").concat("left"==e?"left: calc(100% - var(--ls-250p));":"right: calc(100% - var(--ls-250p));","\n  }\n  @media screen and (min-width: 600px) {\n    .").concat(t," {\n      grid-template-columns: ").concat(o[1],";\n    }\n    ").concat("none"==e?"":".".concat(t," .layout-sidebar {\n      ").concat(0==r[1]?"".concat("left"==e?"left: -100%;":"right: -100%;","\n        width: calc(100% - var(--ls-250p));"):"".concat("left"==e?"left: 0;":"right: 0;","\n        width: ").concat(r[1],"%;"),"\n    }"),"\n    ").concat("none"!==e&&0==r[1]?".".concat(t," .layout-sidebar-tab {\n        ").concat("top"==n?"top: var(--ls-300p);":"bottom"==n?"bottom: var(--ls-300p);":"","\n        ").concat("left"==e?"left: 0;":"right: 0;","\n      }"):".".concat(t," .layout-sidebar-tab {\n        display: none;\n      }"),"\n  }\n  @media screen and (min-width: 900px) {\n    .").concat(t," {\n      grid-template-columns: ").concat(o[2],";\n    }\n    ").concat("none"==e?"":".".concat(t," .layout-sidebar {\n      ").concat(0==r[2]?"".concat("left"==e?"left: -100%;":"right: -100%;","\n        width: calc(100% - var(--ls-250p))%;"):"".concat("left"==e?"left: 0;":"right: 0;","\n        width: ").concat(r[2],"%;"),"\n    }"),"\n    ").concat("none"!==e&&0==r[2]?".".concat(t," .layout-sidebar-tab {\n      ").concat("top"==n?"top: var(--ls-300p);":"bottom"==n?"bottom: var(--ls-300p);":"","\n      ").concat("left"==e?"left: 0;":"right: 0;","\n    }"):".".concat(t," .layout-sidebar-tab {\n      display: none;\n    }"),"\n  }\n  @media screen and (min-width: 1200px) {\n    .").concat(t," {\n      grid-template-columns: ").concat(o[3],";\n    }\n    ").concat("none"==e?"":".".concat(t," .layout-sidebar {\n      ").concat(0==r[3]?"".concat("left"==e?"left: -100%;":"right: -100%;","\n        width: calc(100% - var(--ls-250p))%;"):"".concat("left"==e?"left: 0;":"right: 0;","\n        width: ").concat(r[3],"%;"),"\n    }"),"\n    ").concat("none"!==e&&0==r[3]?".".concat(t," .layout-sidebar-tab {\n      ").concat("top"==n?"top: var(--ls-300p);":"bottom"==n?"bottom: var(--ls-300p);":"","\n      ").concat("left"==e?"left: 0;":"right: 0;","\n    }"):".".concat(t," .layout-sidebar-tab {\n      display: none;\n    }"),"\n  }\n  ")}(v,a,d,m)),t.createElement("div",{className:["layout-container",v,g?"sidebar-visible":"sidebar-hidden"].join(" ")},f,p,b,t.createElement(l,{open:g,onClick:function(){return k(!g)}})))},d=function(n){return t.createElement("div",{className:"card"},n.children)};export{n as Hyperlink,e as Button,a as List,s as Layout,o as Content,r as Sidebar,i as Header,d as Card};
