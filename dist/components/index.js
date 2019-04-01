import e from"react";var n=function(n){var t=n.openIn,a=void 0===t?"self":t,c=n.href,o=n.id,r=n.className,i=n.children;return["external","_external"].includes(a)?e.createElement("a",{href:c,rel:"noopener noreferrer",target:"_blank",id:void 0!==o&&o,className:r},i):e.createElement("a",{href:c,target:["blank","_blank"].includes(a)?"_blank":"_self",id:void 0!==o&&o,className:r},i)},t=function(n){var t=n.fill,a=void 0===t?"flat":t,c=n.text,o=void 0===c?"normal":c,r=n.size,i=void 0===r?"normal":r,l=n.color,d=void 0===l?"plain":l,s=n.shape,m=void 0===s?"normal":s,u=n.type,v=void 0===u?"button":u,h=n.disabled,f=void 0!==h&&h,p=n.openIn,b=n.href,y=n.onClick,g=n.id,w=n.className,N=n.children,E=[];switch(E.push(a),"normal"!==o&&E.push(o),"normal"!==i&&E.push(i),"plain"!==d&&E.push(d),"normal"!==m&&E.push(m),v){case"link":return["external","_external"].includes(p)?e.createElement("a",{href:f?"":b,className:["button",w].concat(E).join(" ").trim(),rel:"noopener noreferrer",target:"_blank",disabled:f,onClick:y,id:void 0!==g&&g},N):e.createElement("a",{href:f?"":b,className:["button",w].concat(E).join(" ").trim(),target:["blank","_blank"].includes(p)?"_blank":"_self",disabled:f,onClick:y,id:void 0!==g&&g},N);case"submit":return e.createElement("button",{type:"submit",className:[w].concat(E).join(" ").trim(),disabled:f,onClick:y,id:void 0!==g&&g},N);case"reset":return e.createElement("button",{type:"reset",className:[w].concat(E).join(" ").trim(),disabled:f,onClick:y,id:void 0!==g&&g},N);default:return e.createElement("button",{className:[w].concat(E).join(" ").trim(),disabled:f,onClick:y,id:void 0!==g&&g},N)}},a=function(n){var t=n.width,a=void 0===t?"auto":t,c=n.height,o=void 0===c?"auto":c,r=n.id,i=n.className,l=n.src,d=n.alt,s=void 0===d?"an image":d;return e.createElement("img",{className:i,id:void 0!==r&&r,height:o,width:a,src:l,alt:s})},c=function(n){n.disabled;var t=n.id,a=n.isOpen,c=void 0!==a&&a,o=n.text,r=n.reverse,i=void 0!==r&&r,l=n.className,d=n.children,s=["dropdown",i?"reverse":"",l];return e.createElement("details",{className:s.join(" ").trim(),id:void 0!==t&&t,open:c},e.createElement("summary",null,o,i?e.createElement("svg",{width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M18 15l-6-6M12 9l-6 6",stroke:"currentColor",strokeWidth:"2.5","stroke-Linecap":"round",strokeLinejoin:"round"})):e.createElement("svg",{width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M18 9l-6 6M12 15L6 9",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}))),e.createElement("div",{className:"dropdown-content"},d))},o=function(e){return function(e){return void 0===e}(e)?[]:function(e){return Array.isArray(e)?e:[e]}(e)},r=function(n){var t=n.id,a=n.className,c=n.children;return e.createElement("li",{id:void 0!==t&&t,className:a},c)},i=function(n){var t=n.ordered,a=void 0!==t&&t,c=n.listStyle,i=void 0===c?"none":c,l=n.id,d=n.className,s=n.children,m=(s=o(s)).filter(function(e){return r.name==e.type.name}),u=[d,"none"!==i?i:""];return a?e.createElement("ol",{id:void 0!==l&&l,className:u.join(" ").trim()},m):e.createElement("ul",{id:void 0!==l&&l,className:u.join(" ").trim()},m)};function l(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],a=!0,c=!1,o=void 0;try{for(var r,i=e[Symbol.iterator]();!(a=(r=i.next()).done)&&(t.push(r.value),!n||t.length!==n);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==i.return||i.return()}finally{if(c)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function d(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var s=function(n){var t=n.id,a=n.className,c=n.children;return e.createElement("main",{id:void 0!==t&&t,className:[a,"layout-content"].join(" ")},c)},m=function(n){var t=n.id,a=n.className,c=n.outline,o=void 0===c?"none":c,r=n.children;return e.createElement("aside",{id:void 0!==t&&t,className:["none"!==o?o:"",a,"layout-sidebar"].join(" ").trim()},r)},u=function(n){var t=n.open,a=n.onClick;return t?e.createElement(e.Fragment,null,e.createElement("button",{className:"layout-sidebar-tab",onClick:a},e.createElement("svg",{width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}," ",e.createElement("path",{d:"M18 6L6 18M18 18L6 6",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}))),e.createElement("div",{class:"layout-sidebar-overlay"})):e.createElement("button",{className:"layout-sidebar-tab",onClick:a},e.createElement("svg",{width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M21 12H3M21 6H3M21 18H3",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokLinejoin:"round"})))},v=function(n){var t=n.id,a=n.className,c=n.outline,o=void 0===c?"none":c,r=n.children;return e.createElement("header",{id:void 0!==t&&t,className:["none"!==o?o:"",a,"layout-header"].join(" ").trim()},r)},h=function(n){var t=n.header,a=void 0===t?"top":t,c=n.sidebar,r=void 0===c?"left":c,i=n.contentSize,d=void 0===i?[1,1,.75,.8]:i,h=n.id,f=n.className,p=n.children,b=(p=o(p)).filter(function(e){return v.name===e.type.name})[0],y=p.filter(function(e){return m.name===e.type.name})[0],g=p.filter(function(e){return s.name===e.type.name})[0],w="layout-".concat(a,"-").concat(r,"-").concat(d.map(function(e){return"".concat(e).replace(".","")}).join("-")),N=l(e.useState(!1),2),E=N[0],k=N[1];return e.createElement(e.Fragment,null,e.createElement("style",null,function(e,n,t,a){var c="",o=["","","",""];"top"===n?"left"===t?(c='"header header"\n". content"',o[0]="".concat(100-100*a[0],"% ").concat(100*a[0],"%"),o[1]="".concat(100-100*a[1],"% ").concat(100*a[1],"%"),o[2]="".concat(100-100*a[2],"% ").concat(100*a[2],"%"),o[3]="".concat(100-100*a[3],"% ").concat(100*a[3],"%")):"right"===t?(c='"header header"\n"content ."',o[0]="".concat(100*a[0],"% ").concat(100-100*a[0],"%"),o[1]="".concat(100*a[1],"% ").concat(100-100*a[1],"%"),o[2]="".concat(100*a[2],"% ").concat(100-100*a[2],"%"),o[3]="".concat(100*a[3],"% ").concat(100-100*a[3],"%")):(c='"header"\n"content"',o[0]="100%",o[1]="100%",o[2]="100%",o[3]="100%"):"bottom"===n?"left"===t?(c='". content"\n"header header"',o[0]="".concat(100-100*a[0],"% ").concat(100*a[0],"%"),o[1]="".concat(100-100*a[1],"% ").concat(100*a[1],"%"),o[2]="".concat(100-100*a[2],"% ").concat(100*a[2],"%"),o[3]="".concat(100-100*a[3],"% ").concat(100*a[3],"%")):"right"===t?(c='"content ."\n"header header"',o[0]="".concat(100*a[0],"% ").concat(100-100*a[0],"%"),o[1]="".concat(100*a[1],"% ").concat(100-100*a[1],"%"),o[2]="".concat(100*a[2],"% ").concat(100-100*a[2],"%"),o[3]="".concat(100*a[3],"% ").concat(100-100*a[3],"%")):(c='"content"\n"header"',o[0]="100%",o[1]="100%",o[2]="100%",o[3]="100%"):"left"===t?(c='". content"',o[0]="".concat(100-100*a[0],"% ").concat(100*a[0],"%"),o[1]="".concat(100-100*a[1],"% ").concat(100*a[1],"%"),o[2]="".concat(100-100*a[2],"% ").concat(100*a[2],"%"),o[3]="".concat(100-100*a[3],"% ").concat(100*a[3],"%")):"right"===t?(c='"content ."',o[0]="".concat(100*a[0],"% ").concat(100-100*a[0],"%"),o[1]="".concat(100*a[1],"% ").concat(100-100*a[1],"%"),o[2]="".concat(100*a[2],"% ").concat(100-100*a[2],"%"),o[3]="".concat(100*a[3],"% ").concat(100-100*a[3],"%")):(c='"content"',o[0]="100%",o[1]="100%",o[2]="100%",o[3]="100%");var r=[0,0,0,0];return"none"!==t&&(r=[100-100*a[0],100-100*a[1],100-100*a[2],100-100*a[3]]),"\n  .".concat(e," {\n    grid-template-areas: ").concat(c,";\n    grid-template-columns: ").concat(o[0],";\n  }\n  ").concat("none"===n?"":".".concat(e," .layout-header {\n      ").concat("top"===n?"top: 0;":"bottom: 0;","\n    }"),"\n  ").concat("none"===t?"":".".concat(e," .layout-sidebar {\n      ").concat(0===r[0]?"".concat("left"===t?"left: -100%;":"right: -100%;","\n        width: calc(100% - var(--ls-250p));"):"".concat("left"===t?"left: 0;":"right: 0;","\n        width: ").concat(r[0],"%;"),"\n      ").concat("none"===n?"min-height: 100vh;":"","\n      ").concat("top"===n?"top: var(--ls-250p);":"bottom"===n?"bottom: var(--ls-250p);":"","\n    }"),"\n  ").concat("none"!==t&&0===r[0]?".".concat(e," .layout-sidebar-tab {\n      ").concat("top"===n?"top: var(--ls-250p);":"bottom"===n?"bottom: var(--ls-250p);":"","\n      ").concat("left"===t?"left: 0;":"right: 0;","\n    }"):".".concat(e," .layout-sidebar-tab, .").concat(e," .layout-sidebar-overlay {\n      display: none;\n    }\n    .").concat(e,".sidebar-visible .layout-sidebar {\n      --box-shadow: var(--shadow-0);\n    }\n    "),"\n  .").concat(e,".sidebar-visible .layout-sidebar {\n    ").concat("left"===t?"left: 0;":"right: 0;","\n  }\n  .").concat(e,".sidebar-visible .layout-sidebar-tab {\n    ").concat("left"===t?"left: calc(100% - var(--ls-250p));":"right: calc(100% - var(--ls-250p));","\n  }\n  @media screen and (min-width: 600px) {\n    .").concat(e," {\n      grid-template-columns: ").concat(o[1],";\n    }\n    ").concat("none"===t?"":".".concat(e," .layout-sidebar {\n      ").concat(0===r[1]?"".concat("left"===t?"left: -100%;":"right: -100%;","\n        width: calc(100% - var(--ls-250p));"):"".concat("left"===t?"left: 0;":"right: 0;","\n        width: ").concat(r[1],"%;"),"\n    }"),"\n    ").concat("none"!==t&&0===r[1]?".".concat(e," .layout-sidebar-tab {\n        ").concat("top"===n?"top: var(--ls-250p);":"bottom"===n?"bottom: var(--ls-250p);":"","\n        ").concat("left"===t?"left: 0;":"right: 0;","\n      }"):".".concat(e," .layout-sidebar-tab, .").concat(e," .layout-sidebar-overlay {\n        display: none;\n      }\n      .").concat(e,".sidebar-visible .layout-sidebar {\n        --box-shadow: var(--shadow-0);\n      }\n      "),"\n  }\n  @media screen and (min-width: 900px) {\n    .").concat(e," {\n      grid-template-columns: ").concat(o[2],";\n    }\n    ").concat("none"===t?"":".".concat(e," .layout-sidebar {\n      ").concat(0===r[2]?"".concat("left"===t?"left: -100%;":"right: -100%;","\n        width: calc(100% - var(--ls-250p))%;"):"".concat("left"===t?"left: 0;":"right: 0;","\n        width: ").concat(r[2],"%;"),"\n    }"),"\n    ").concat("none"!==t&&0===r[2]?".".concat(e," .layout-sidebar-tab {\n      ").concat("top"===n?"top: var(--ls-250p);":"bottom"===n?"bottom: var(--ls-250p);":"","\n      ").concat("left"===t?"left: 0;":"right: 0;","\n    }"):".".concat(e," .layout-sidebar-tab, .").concat(e," .layout-sidebar-overlay {\n      display: none;\n    }\n    .").concat(e,".sidebar-visible .layout-sidebar {\n      --box-shadow: var(--shadow-0);\n    }\n    "),"\n  }\n  @media screen and (min-width: 1200px) {\n    .").concat(e," {\n      grid-template-columns: ").concat(o[3],";\n    }\n    ").concat("none"===t?"":".".concat(e," .layout-sidebar {\n      ").concat(0===r[3]?"".concat("left"===t?"left: -100%;":"right: -100%;","\n        width: calc(100% - var(--ls-250p))%;"):"".concat("left"===t?"left: 0;":"right: 0;","\n        width: ").concat(r[3],"%;"),"\n    }"),"\n    ").concat("none"!==t&&0===r[3]?".".concat(e," .layout-sidebar-tab {\n      ").concat("top"===n?"top: var(--ls-250p);":"bottom"===n?"bottom: var(--ls-250p);":"","\n      ").concat("left"===t?"left: 0;":"right: 0;","\n    }"):".".concat(e," .layout-sidebar-tab, .").concat(e," .layout-sidebar-overlay {\n      display: none;\n    }\n    .").concat(e,".sidebar-visible .layout-sidebar {\n      --box-shadow: var(--shadow-0);\n    }\n    "),"\n  }\n  ")}(w,a,r,d)),e.createElement("div",{id:void 0!==h&&h,className:["layout-container",f,w,E?"sidebar-visible":"sidebar-hidden"].join(" ").trim()},b,y,g,e.createElement(u,{open:E,onClick:function(){return k(!E)}})))},f=["xs","sm","md","lg"],p=function(n){var t,a,c,o=n.size,r=void 0===o?"fluid":o,i=n.id,l=n.className,s=n.children;return c=(t=Array.isArray(r)?r:[r,r,r,r]).reduce(function(e,n,t){if(+n>=1&&+n<=12||"fluid"===n)return e;if(+n<1)switch(t){case 0:return e+".grid-col-xs-c".concat("".concat(n).replace(/\(|\)|\./g,"")," { --col-xs-size: ").concat(100*n,"%; } ");case 1:return e+".grid-col-sm-c".concat("".concat(n).replace(/\(|\)|\./g,"")," { --col-sm-size: ").concat(100*n,"%; } ");case 2:return e+".grid-col-md-c".concat("".concat(n).replace(/\(|\)|\./g,"")," { --col-md-size: ").concat(100*n,"%; } ");case 3:return e+".grid-col-lg-c".concat("".concat(n).replace(/\(|\)|\./g,"")," { --col-lg-size: ").concat(100*n,"%; } ");default:return e}else switch(t){case 0:return e+".grid-col-xs-p".concat("".concat(n).replace(/\(|\)|\./g,"")," { --col-xs-size: ").concat(n,"; } ");case 1:return e+".grid-col-sm-p".concat("".concat(n).replace(/\(|\)|\./g,"")," { --col-sm-size: ").concat(n,"; } ");case 2:return e+".grid-col-md-p".concat("".concat(n).replace(/\(|\)|\./g,"")," { --col-md-size: ").concat(n,"; } ");case 3:return e+".grid-col-lg-p".concat("".concat(n).replace(/\(|\)|\./g,"")," { --col-lg-size: ").concat(n,"; } ");default:return e}},""),a=t.map(function(e,n){return"grid-col-".concat(f[n],"-").concat(+e>=1&&+e<=12||"fluid"===e?"".concat(e):+e<1?"c".concat("".concat(e).replace(/\(|\)|\./g,"")):"p".concat("".concat(e).replace(/\(|\)|\./g,"")))}),c.length>0?e.createElement(e.Fragment,null,e.createElement("style",null,c),e.createElement("div",{className:[l].concat(d(a)).join(" ").trim(),id:void 0!==i&&i},s)):e.createElement("div",{className:[l].concat(d(a)).join(" ").trim(),id:void 0!==i&&i},s)},b=function(n){var t=n.id,a=n.className,c=n.children,r=(c=o(c)).filter(function(e){return p.name===e.type.name});return e.createElement("div",{id:void 0!==t&&t,className:[a,"grid-row"].join(" ").trim()},r)},y=function(n){var t=n.justify,a=void 0===t?"start":t,c=n.align,r=void 0===c?"start":c,i=n.id,l=n.className,d=n.children,s=(d=o(d)).filter(function(e){return b.name===e.type.name});return e.createElement("div",{id:void 0!==i&&i,className:["grid-container",l,"align-".concat(r),"justify-".concat(a)].join(" ").trim()},s)},g=function(n){var a=n.selected,r=void 0!==a&&a,i=n.disabled,l=void 0!==i&&i,d=n.openIn,s=n.href,m=n.onClick,u=n.id,v=n.className,h=n.children,f=[r?"selected":"",v,"menu-item",(h=o(h)).some(function(e){return e.type&&e.type.name&&c.name===e.type.name})?"with-dropdown":""];return e.createElement(t,{id:u,className:f.join(" ").trim(),fill:"",size:"normal",text:"normal",color:"",type:void 0!==s?"link":"button",disabled:l,openIn:d,onClick:m,href:s},h)},w=function(n){var t=n.type,a=n.id,c=n.className,r=n.highlight,i=n.children,l=(i=o(i)).filter(function(e){return g.name===e.type.name}),d=[t,c,"".concat(r,"-highlight"),"menu"];return e.createElement("nav",{id:void 0!==a&&a,className:d.join(" ").trim()},l)},N=function(n){var t=n.height,a=void 0===t?"auto":t,c=n.media,o=void 0===c?"":c,r=n.id,i=n.className,l=n.children;return o.length?e.createElement("div",{className:[i,"card-media-section"].join(" ").trim(),id:void 0!==r&&r,style:{height:a,backgroundImage:"url(".concat(encodeURI(o),")")}}):e.createElement("div",{className:[i,"card-section"].join(" ").trim(),id:void 0!==r&&r},l)},E=function(n){var t=n.width,a=void 0===t?"auto":t,c=n.id,r=n.className,i=n.children,l=(i=o(i)).filter(function(e){return N.name===e.type.name});return e.createElement("div",{className:[r,"card"].join(" ").trim(),id:void 0!==c&&c,style:{width:a}},l)},k=function(n){var t=n.id,a=n.className,c=n.children;return e.createElement("caption",{id:void 0!==t&&t,className:a},c)},j=function(n){var t=n.heading,a=void 0!==t&&t,c=n.id,o=n.className,r=n.colSpan,i=void 0===r?1:r,l=n.rowSpan,d=void 0===l?1:l,s=n.children;return a?e.createElement("th",{id:void 0!==c&&c,className:o,colSpan:i,rowSpan:d},s):e.createElement("td",{id:void 0!==c&&c,className:o,colSpan:i,rowSpan:d},s)},x=function(n){var t=n.id,a=n.className,c=n.children;Array.isArray(c)||(c=[c]);var o=c.filter(function(e){return j.name==e.type.name});return e.createElement("tr",{id:void 0!==t&&t,className:a},o)},A=function(n){var t=n.id,a=n.className,c=n.children;Array.isArray(c)||(c=[c]);var o=c.filter(function(e){return x.name==e.type.name});return e.createElement("thead",{id:void 0!==t&&t,className:a},o)},C=function(n){var t=n.id,a=n.className,c=n.children;Array.isArray(c)||(c=[c]);var o=c.filter(function(e){return x.name==e.type.name});return e.createElement("tbody",{id:void 0!==t&&t,className:a},o)},z=function(n){var t=n.id,a=n.className,c=n.children,r=(c=o(c)).filter(function(e){return A.name==e.type.name||C.name==e.type.name||k.name==e.type.name}),i=[a];return e.createElement("table",{className:i.join(" ").trim(),id:void 0!==t&&t},r)};export{n as Hyperlink,t as Button,a as Image,i as List,r as ListItem,h as Layout,s as Content,m as Sidebar,v as Header,y as Grid,b as Row,p as Column,E as Card,N as CardSection,w as Menu,g as MenuItem,z as Table,k as TableCaption,A as TableHead,C as TableBody,x as TableRow,j as TableCell,c as Dropdown};
