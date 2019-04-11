import e from"react";var t=function(t){var n=t.openIn,a=void 0===n?"self":n,c=t.href,o=t.id,i=t.className,r=t.children;return["external","_external"].includes(a)?e.createElement("a",{href:c,rel:"noopener noreferrer",target:"_blank",id:void 0!==o&&o,className:i},r):e.createElement("a",{href:c,target:["blank","_blank"].includes(a)?"_blank":"_self",id:void 0!==o&&o,className:i},r)},n=function(t){var n=t.fill,a=void 0===n?"flat":n,c=t.text,o=void 0===c?"normal":c,i=t.size,r=void 0===i?"normal":i,l=t.color,s=void 0===l?"plain":l,d=t.shape,m=void 0===d?"normal":d,u=t.type,v=void 0===u?"button":u,h=t.disabled,p=void 0!==h&&h,f=t.openIn,b=t.href,g=t.onClick,N=t.id,y=t.className,E=t.children,w=[];switch(w.push(a),"normal"!==o&&w.push(o),"normal"!==r&&w.push(r),"plain"!==s&&w.push(s),"normal"!==m&&w.push(m),v){case"link":return["external","_external"].includes(f)?e.createElement("a",{href:p?"":b,className:["button",y].concat(w).join(" ").trim(),rel:"noopener noreferrer",target:"_blank",disabled:p,onClick:g,id:void 0!==N&&N},E):e.createElement("a",{href:p?"":b,className:["button",y].concat(w).join(" ").trim(),target:["blank","_blank"].includes(f)?"_blank":"_self",disabled:p,onClick:g,id:void 0!==N&&N},E);case"submit":return e.createElement("button",{type:"submit",className:[y].concat(w).join(" ").trim(),disabled:p,onClick:g,id:void 0!==N&&N},E);case"reset":return e.createElement("button",{type:"reset",className:[y].concat(w).join(" ").trim(),disabled:p,onClick:g,id:void 0!==N&&N},E);default:return e.createElement("button",{className:[y].concat(w).join(" ").trim(),disabled:p,onClick:g,id:void 0!==N&&N},E)}},a=function(t){var n=t.width,a=void 0===n?"auto":n,c=t.height,o=void 0===c?"auto":c,i=t.id,r=t.className,l=t.src,s=t.alt,d=void 0===s?"An image":s,m=t.withCaption;return void 0!==m&&m?e.createElement("figure",null,e.createElement("img",{className:r,id:void 0!==i&&i,height:o,width:a,src:l,alt:d}),e.createElement("figcaption",null,d)):e.createElement("img",{className:r,id:void 0!==i&&i,height:o,width:a,src:l,alt:d})},c=function(t){var n=t.isOpen,a=void 0!==n&&n,c=t.text,o=t.reverse,i=void 0!==o&&o,r=t.id,l=t.className,s=t.children,d=["dropdown",i?"reverse":"",l];return e.createElement("details",{className:d.join(" ").trim(),id:void 0!==r&&r,open:a},e.createElement("summary",null,c,i?e.createElement("svg",{width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M18 15l-6-6M12 9l-6 6",stroke:"currentColor",strokeWidth:"2.5","stroke-Linecap":"round",strokeLinejoin:"round"})):e.createElement("svg",{width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M18 9l-6 6M12 15L6 9",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}))),e.createElement("div",{className:"dropdown-content"},s))},o=function(t){var n=t.isOpen,a=void 0!==n&&n,c=t.title,o=t.id,i=t.className,r=t.children,l=["collapse",i];return e.createElement("details",{className:l.join(" ").trim(),id:void 0!==o&&o,open:a},e.createElement("summary",null,c,e.createElement("svg",{width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M18 9l-6 6M12 15L6 9",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}))),e.createElement("div",{className:"collapse-content"},r))},i=function(e){return function(e){return void 0===e}(e)?[]:function(e){return Array.isArray(e)?e:[e]}(e)},r=function(t){var n=t.id,a=t.className,c=t.children;return e.createElement("li",{id:void 0!==n&&n,className:a},c)},l=function(t){var n=t.ordered,a=void 0!==n&&n,c=t.listStyle,o=void 0===c?"none":c,l=t.id,s=t.className,d=t.children,m=(d=i(d)).filter(function(e){return r.name==e.type.name}),u=[s,"none"!==o?o:""];return a?e.createElement("ol",{id:void 0!==l&&l,className:u.join(" ").trim()},m):e.createElement("ul",{id:void 0!==l&&l,className:u.join(" ").trim()},m)};function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,c=!1,o=void 0;try{for(var i,r=e[Symbol.iterator]();!(a=(i=r.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function d(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var m=function(t){var n=t.id,a=t.className,c=t.children;return e.createElement("main",{id:void 0!==n&&n,className:[a,"layout-content"].join(" ").trim()},c)},u=function(t){var n=t.id,a=t.className,c=t.outline,o=void 0===c?"none":c,i=t.children;return e.createElement("aside",{id:void 0!==n&&n,className:["none"!==o?o:"",a,"layout-sidebar"].join(" ").trim()},i)},v=function(t){var n=t.open,a=t.onClick;return n?e.createElement(e.Fragment,null,e.createElement("button",{className:"layout-sidebar-tab",onClick:a},e.createElement("svg",{width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}," ",e.createElement("path",{d:"M18 6L6 18M18 18L6 6",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}))),e.createElement("div",{class:"layout-sidebar-overlay"})):e.createElement("button",{className:"layout-sidebar-tab",onClick:a},e.createElement("svg",{width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M21 12H3M21 6H3M21 18H3",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokLinejoin:"round"})))},h=function(t){var n=t.id,a=t.className,c=t.outline,o=void 0===c?"none":c,i=t.children;return e.createElement("header",{id:void 0!==n&&n,className:["none"!==o?o:"",a,"layout-header"].join(" ").trim()},i)},p=function(t){var n=t.header,a=void 0===n?"top":n,c=t.sidebar,o=void 0===c?"left":c,r=t.contentSize,l=void 0===r?[1,1,.75,.8]:r,d=t.id,p=t.className,f=t.children,b=(f=i(f)).filter(function(e){return h.name===e.type.name})[0],g=f.filter(function(e){return u.name===e.type.name})[0],N=f.filter(function(e){return m.name===e.type.name})[0],y="layout-".concat(a,"-").concat(o,"-").concat(l.map(function(e){return"".concat(e).replace(".","")}).join("-")),E=s(e.useState(!1),2),w=E[0],j=E[1];return e.createElement(e.Fragment,null,e.createElement("style",null,function(e,t,n,a){var c="",o=["","","",""];"top"===t?"left"===n?(c='"header header"\n". content"',o[0]="".concat(100-100*a[0],"% ").concat(100*a[0],"%"),o[1]="".concat(100-100*a[1],"% ").concat(100*a[1],"%"),o[2]="".concat(100-100*a[2],"% ").concat(100*a[2],"%"),o[3]="".concat(100-100*a[3],"% ").concat(100*a[3],"%")):"right"===n?(c='"header header"\n"content ."',o[0]="".concat(100*a[0],"% ").concat(100-100*a[0],"%"),o[1]="".concat(100*a[1],"% ").concat(100-100*a[1],"%"),o[2]="".concat(100*a[2],"% ").concat(100-100*a[2],"%"),o[3]="".concat(100*a[3],"% ").concat(100-100*a[3],"%")):(c='"header"\n"content"',o[0]="100%",o[1]="100%",o[2]="100%",o[3]="100%"):"bottom"===t?"left"===n?(c='". content"\n"header header"',o[0]="".concat(100-100*a[0],"% ").concat(100*a[0],"%"),o[1]="".concat(100-100*a[1],"% ").concat(100*a[1],"%"),o[2]="".concat(100-100*a[2],"% ").concat(100*a[2],"%"),o[3]="".concat(100-100*a[3],"% ").concat(100*a[3],"%")):"right"===n?(c='"content ."\n"header header"',o[0]="".concat(100*a[0],"% ").concat(100-100*a[0],"%"),o[1]="".concat(100*a[1],"% ").concat(100-100*a[1],"%"),o[2]="".concat(100*a[2],"% ").concat(100-100*a[2],"%"),o[3]="".concat(100*a[3],"% ").concat(100-100*a[3],"%")):(c='"content"\n"header"',o[0]="100%",o[1]="100%",o[2]="100%",o[3]="100%"):"left"===n?(c='". content"',o[0]="".concat(100-100*a[0],"% ").concat(100*a[0],"%"),o[1]="".concat(100-100*a[1],"% ").concat(100*a[1],"%"),o[2]="".concat(100-100*a[2],"% ").concat(100*a[2],"%"),o[3]="".concat(100-100*a[3],"% ").concat(100*a[3],"%")):"right"===n?(c='"content ."',o[0]="".concat(100*a[0],"% ").concat(100-100*a[0],"%"),o[1]="".concat(100*a[1],"% ").concat(100-100*a[1],"%"),o[2]="".concat(100*a[2],"% ").concat(100-100*a[2],"%"),o[3]="".concat(100*a[3],"% ").concat(100-100*a[3],"%")):(c='"content"',o[0]="100%",o[1]="100%",o[2]="100%",o[3]="100%");var i=[0,0,0,0];return"none"!==n&&(i=[100-100*a[0],100-100*a[1],100-100*a[2],100-100*a[3]]),"\n  .".concat(e," {\n    grid-template-areas: ").concat(c,";\n    grid-template-columns: ").concat(o[0],";\n  }\n  ").concat("none"===t?"":".".concat(e," .layout-header {\n      ").concat("top"===t?"top: 0;":"bottom: 0;","\n    }"),"\n  ").concat("none"===n?"":".".concat(e," .layout-sidebar {\n      ").concat(0===i[0]?"".concat("left"===n?"left: -100%;":"right: -100%;","\n        width: calc(100% - var(--ls-250p));"):"".concat("left"===n?"left: 0;":"right: 0;","\n        width: ").concat(i[0],"%;"),"\n      ").concat("none"===t?"min-height: 100vh;":"","\n      ").concat("top"===t?"top: var(--ls-250p);":"bottom"===t?"bottom: var(--ls-250p);":"","\n    }"),"\n  ").concat("none"!==n&&0===i[0]?".".concat(e," .layout-sidebar-tab {\n      ").concat("top"===t?"top: var(--ls-250p);":"bottom"===t?"bottom: var(--ls-250p);":"","\n      ").concat("left"===n?"left: 0;":"right: 0;","\n    }"):".".concat(e," .layout-sidebar-tab, .").concat(e," .layout-sidebar-overlay {\n      display: none;\n    }\n    .").concat(e,".sidebar-visible .layout-sidebar {\n      --box-shadow: var(--shadow-0);\n    }\n    "),"\n  .").concat(e,".sidebar-visible .layout-sidebar {\n    ").concat("left"===n?"left: 0;":"right: 0;","\n  }\n  .").concat(e,".sidebar-visible .layout-sidebar-tab {\n    ").concat("left"===n?"left: calc(100% - var(--ls-250p));":"right: calc(100% - var(--ls-250p));","\n  }\n  @media screen and (min-width: 600px) {\n    .").concat(e," {\n      grid-template-columns: ").concat(o[1],";\n    }\n    ").concat("none"===n?"":".".concat(e," .layout-sidebar {\n      ").concat(0===i[1]?"".concat("left"===n?"left: -100%;":"right: -100%;","\n        width: calc(100% - var(--ls-250p));"):"".concat("left"===n?"left: 0;":"right: 0;","\n        width: ").concat(i[1],"%;"),"\n    }"),"\n    ").concat("none"!==n&&0===i[1]?".".concat(e," .layout-sidebar-tab {\n        ").concat("top"===t?"top: var(--ls-250p);":"bottom"===t?"bottom: var(--ls-250p);":"","\n        ").concat("left"===n?"left: 0;":"right: 0;","\n      }"):".".concat(e," .layout-sidebar-tab, .").concat(e," .layout-sidebar-overlay {\n        display: none;\n      }\n      .").concat(e,".sidebar-visible .layout-sidebar {\n        --box-shadow: var(--shadow-0);\n      }\n      "),"\n  }\n  @media screen and (min-width: 900px) {\n    .").concat(e," {\n      grid-template-columns: ").concat(o[2],";\n    }\n    ").concat("none"===n?"":".".concat(e," .layout-sidebar {\n      ").concat(0===i[2]?"".concat("left"===n?"left: -100%;":"right: -100%;","\n        width: calc(100% - var(--ls-250p))%;"):"".concat("left"===n?"left: 0;":"right: 0;","\n        width: ").concat(i[2],"%;"),"\n    }"),"\n    ").concat("none"!==n&&0===i[2]?".".concat(e," .layout-sidebar-tab {\n      ").concat("top"===t?"top: var(--ls-250p);":"bottom"===t?"bottom: var(--ls-250p);":"","\n      ").concat("left"===n?"left: 0;":"right: 0;","\n    }"):".".concat(e," .layout-sidebar-tab, .").concat(e," .layout-sidebar-overlay {\n      display: none;\n    }\n    .").concat(e,".sidebar-visible .layout-sidebar {\n      --box-shadow: var(--shadow-0);\n    }\n    "),"\n  }\n  @media screen and (min-width: 1200px) {\n    .").concat(e," {\n      grid-template-columns: ").concat(o[3],";\n    }\n    ").concat("none"===n?"":".".concat(e," .layout-sidebar {\n      ").concat(0===i[3]?"".concat("left"===n?"left: -100%;":"right: -100%;","\n        width: calc(100% - var(--ls-250p))%;"):"".concat("left"===n?"left: 0;":"right: 0;","\n        width: ").concat(i[3],"%;"),"\n    }"),"\n    ").concat("none"!==n&&0===i[3]?".".concat(e," .layout-sidebar-tab {\n      ").concat("top"===t?"top: var(--ls-250p);":"bottom"===t?"bottom: var(--ls-250p);":"","\n      ").concat("left"===n?"left: 0;":"right: 0;","\n    }"):".".concat(e," .layout-sidebar-tab, .").concat(e," .layout-sidebar-overlay {\n      display: none;\n    }\n    .").concat(e,".sidebar-visible .layout-sidebar {\n      --box-shadow: var(--shadow-0);\n    }\n    "),"\n  }\n  ")}(y,a,o,l)),e.createElement("div",{id:void 0!==d&&d,className:["layout-container",p,y,w?"sidebar-visible":"sidebar-hidden"].join(" ").trim()},b,g,N,e.createElement(v,{open:w,onClick:function(){return j(!w)}})))},f=["xs","sm","md","lg"],b=function(t){var n,a,c,o=t.size,i=void 0===o?"fluid":o,r=t.id,l=t.className,s=t.children;return c=(n=Array.isArray(i)?i:[i,i,i,i]).reduce(function(e,t,n){if(+t>=1&&+t<=12||"fluid"===t)return e;if(+t<1)switch(n){case 0:return e+".grid-col-xs-c".concat("".concat(t).replace(/\(|\)|\./g,"")," { --col-xs-size: ").concat(100*t,"%; } ");case 1:return e+".grid-col-sm-c".concat("".concat(t).replace(/\(|\)|\./g,"")," { --col-sm-size: ").concat(100*t,"%; } ");case 2:return e+".grid-col-md-c".concat("".concat(t).replace(/\(|\)|\./g,"")," { --col-md-size: ").concat(100*t,"%; } ");case 3:return e+".grid-col-lg-c".concat("".concat(t).replace(/\(|\)|\./g,"")," { --col-lg-size: ").concat(100*t,"%; } ");default:return e}else switch(n){case 0:return e+".grid-col-xs-p".concat("".concat(t).replace(/\(|\)|\./g,"")," { --col-xs-size: ").concat(t,"; } ");case 1:return e+".grid-col-sm-p".concat("".concat(t).replace(/\(|\)|\./g,"")," { --col-sm-size: ").concat(t,"; } ");case 2:return e+".grid-col-md-p".concat("".concat(t).replace(/\(|\)|\./g,"")," { --col-md-size: ").concat(t,"; } ");case 3:return e+".grid-col-lg-p".concat("".concat(t).replace(/\(|\)|\./g,"")," { --col-lg-size: ").concat(t,"; } ");default:return e}},""),a=n.map(function(e,t){return"grid-col-".concat(f[t],"-").concat(+e>=1&&+e<=12||"fluid"===e?"".concat(e):+e<1?"c".concat("".concat(e).replace(/\(|\)|\./g,"")):"p".concat("".concat(e).replace(/\(|\)|\./g,"")))}),c.length>0?e.createElement(e.Fragment,null,e.createElement("style",null,c),e.createElement("div",{className:[l].concat(d(a)).join(" ").trim(),id:void 0!==r&&r},s)):e.createElement("div",{className:[l].concat(d(a)).join(" ").trim(),id:void 0!==r&&r},s)},g=function(t){var n=t.id,a=t.className,c=t.children,o=(c=i(c)).filter(function(e){return b.name===e.type.name});return e.createElement("div",{id:void 0!==n&&n,className:[a,"grid-row"].join(" ").trim()},o)},N=function(t){var n=t.justify,a=void 0===n?"start":n,c=t.align,o=void 0===c?"start":c,r=t.id,l=t.className,s=t.children,d=(s=i(s)).filter(function(e){return g.name===e.type.name});return e.createElement("div",{id:void 0!==r&&r,className:["grid-container",l,"align-".concat(o),"justify-".concat(a)].join(" ").trim()},d)},y=function(t){var a=t.selected,o=void 0!==a&&a,r=t.disabled,l=void 0!==r&&r,s=t.openIn,d=t.href,m=t.onClick,u=t.id,v=t.className,h=t.children,p=[o?"selected":"",v,"menu-item",(h=i(h)).some(function(e){return e.type&&e.type.name&&c.name===e.type.name})?"with-dropdown":""];return e.createElement(n,{id:u,className:p.join(" ").trim(),fill:"",size:"normal",text:"normal",color:"",type:void 0!==d?"link":"button",disabled:l,openIn:s,onClick:m,href:d},h)},E=function(t){var n=t.type,a=void 0===n?"horizontal":n,c=t.highlight,o=void 0===c?"top":c,r=t.id,l=t.className,s=t.children,d=(s=i(s)).filter(function(e){return y.name===e.type.name}),m=[a,l,"".concat(o,"-highlight"),"menu"];return e.createElement("nav",{id:void 0!==r&&r,className:m.join(" ").trim()},d)},w=function(t){var n=t.height,a=void 0===n?"auto":n,c=t.media,o=void 0===c?"":c,i=t.id,r=t.className,l=t.children;return o.length?e.createElement("div",{className:[r,"card-media-section"].join(" ").trim(),id:void 0!==i&&i,style:{height:a,backgroundImage:"url(".concat(encodeURI(o),")")}}):e.createElement("div",{className:[r,"card-section"].join(" ").trim(),id:void 0!==i&&i},l)},j=function(t){var n=t.width,a=void 0===n?"auto":n,c=t.id,o=t.className,r=t.children,l=(r=i(r)).filter(function(e){return w.name===e.type.name});return e.createElement("div",{className:[o,"card"].join(" ").trim(),id:void 0!==c&&c,style:{width:a}},l)},k=function(t){var n=t.id,a=t.className,c=t.children;return e.createElement("caption",{id:void 0!==n&&n,className:a},c)},x=function(t){var n=t.heading,a=void 0!==n&&n,c=t.id,o=t.className,i=t.colSpan,r=void 0===i?1:i,l=t.rowSpan,s=void 0===l?1:l,d=t.children;return a?e.createElement("th",{id:void 0!==c&&c,className:o,colSpan:r,rowSpan:s},d):e.createElement("td",{id:void 0!==c&&c,className:o,colSpan:r,rowSpan:s},d)},C=function(t){var n=t.id,a=t.className,c=t.children;Array.isArray(c)||(c=[c]);var o=c.filter(function(e){return x.name==e.type.name});return e.createElement("tr",{id:void 0!==n&&n,className:a},o)},L=function(t){var n=t.id,a=t.className,c=t.children;Array.isArray(c)||(c=[c]);var o=c.filter(function(e){return C.name==e.type.name});return e.createElement("thead",{id:void 0!==n&&n,className:a},o)},A=function(t){var n=t.id,a=t.className,c=t.children;Array.isArray(c)||(c=[c]);var o=c.filter(function(e){return C.name==e.type.name});return e.createElement("tbody",{id:void 0!==n&&n,className:a},o)},S=function(t){var n=t.tableStyle,a=void 0===n?"none":n,c=t.id,o=t.className,r=t.children,l=(r=i(r)).filter(function(e){return L.name==e.type.name||A.name==e.type.name||k.name==e.type.name}),s=["none"!==a?a:"",o];return e.createElement("table",{className:s.join(" ").trim(),id:void 0!==c&&c},l)},z=function(t){var n=t.cite,a=t.id,c=t.className,o=t.children;return e.createElement("blockquote",{cite:n!==undefned&&n,id:void 0!==a&&a,className:[c].join(" ").trim()},o)},M=function(t){var n=t.id,a=t.className,c=t.children;return e.createElement("pre",{id:void 0!==n&&n,className:[a].join(" ").trim()},c)},_=function(t){var n=t.id,a=t.className,c=t.children;return e.createElement("p",{id:void 0!==n&&n,className:[a].join(" ").trim()},c)},I=function(t){var n=t.id,a=t.className,c=t.children;return e.createElement("code",{id:void 0!==n&&n,className:[a].join(" ").trim()},c)},q=function(t){var n=t.id,a=t.className,c=t.children;return e.createElement("kbd",{id:void 0!==n&&n,className:[a].join(" ").trim()},c)},W=function(t){var n=t.level,a=void 0===n?1:n,c=t.semantic,o=void 0===c||c,i=t.id,r=t.className,l=t.children;switch(a){case 1:return o?e.createElement("h1",{id:void 0!==i&&i,className:[r].join(" ").trim()},l):e.createElement("span",{id:void 0!==i&&i,className:["title1",r].join(" ").trim()},l);case 2:return o?e.createElement("h2",{id:void 0!==i&&i,className:[r].join(" ").trim()},l):e.createElement("span",{id:void 0!==i&&i,className:["title2",r].join(" ").trim()},l);case 3:return o?e.createElement("h3",{id:void 0!==i&&i,className:[r].join(" ").trim()},l):e.createElement("span",{id:void 0!==i&&i,className:["title3",r].join(" ").trim()},l);case 4:return o?e.createElement("h4",{id:void 0!==i&&i,className:[r].join(" ").trim()},l):e.createElement("span",{id:void 0!==i&&i,className:["title4",r].join(" ").trim()},l);case 5:return o?e.createElement("h5",{id:void 0!==i&&i,className:[r].join(" ").trim()},l):e.createElement("span",{id:void 0!==i&&i,className:["title5",r].join(" ").trim()},l);case 6:return o?e.createElement("h6",{id:void 0!==i&&i,className:[r].join(" ").trim()},l):e.createElement("span",{id:void 0!==i&&i,className:["title6",r].join(" ").trim()},l);default:return o?e.createElement("h1",{id:void 0!==i&&i,className:[r].join(" ").trim()},l):e.createElement("span",{id:void 0!==i&&i,className:["title1",r].join(" ").trim()},l)}},O=function(t){var n=t.textStyle,a=t.id,c=t.className,o=t.children;switch(n){case"small":return e.createElement("small",{id:void 0!==a&&a,className:[c].join(" ").trim()},o);case"bold":return e.createElement("strong",{id:void 0!==a&&a,className:[c].join(" ").trim()},o);case"italics":return e.createElement("em",{id:void 0!==a&&a,className:[c].join(" ").trim()},o);default:return e.createElement("span",{id:void 0!==a&&a,className:[n,c].join(" ").trim()},o)}},H=function(t){var n=t.href,a=t.id,c=t.className;return e.createElement("a",{id:void 0!==a&&a,href:n,className:[c,"anchor"].join(" ").trim()},"#")},F=function(t){var n=t.content,a=t.position,c=void 0===a?"top":a,o=(t.id,t.className),i=t.children,r=s(e.useState(!1),2),l=r[0],d=r[1];return e.createElement("span",{className:[o,"tooltip"].join(" ").trim(),onMouseLeave:function(){return d(!1)}},l&&e.createElement("div",{className:"tooltip-bubble tooltip-".concat(c)},e.createElement("div",{className:"tooltip-message"},n)),e.createElement("span",{className:"tooltip-trigger",onMouseOver:function(){return d(!0)}},i))},T=function(t){var n=t.content,a=t.position,c=void 0===a?"top":a,o=(t.id,t.className),i=t.children,r=s(e.useState(!1),2),l=r[0],d=r[1];return e.createElement("span",{className:[o,"popover"].join(" ").trim()},l&&e.createElement("div",{className:"popover-bubble popover-".concat(c)},e.createElement("div",{className:"popover-message"},n)),e.createElement("span",{className:"popover-trigger",onClick:function(){return d(!l)}},i))},B=function(t){var n=t.fill,a=void 0===n?"flat":n,c=t.text,o=void 0===c?"normal":c,i=t.size,r=void 0===i?"normal":i,l=t.color,s=void 0===l?"plain":l,d=t.shape,m=void 0===d?"normal":d,u=t.id,v=t.className,h=t.children,p=[];return p.push(a),"normal"!==o&&p.push(o),"normal"!==r&&p.push(r),"plain"!==s&&p.push(s),"normal"!==m&&p.push(m),e.createElement("span",{id:void 0!==u&&u,className:["badge",v].concat(p).join(" ").trim()},h)},R=function(t){var n=t.color,a=void 0===n?"plain":n,c=t.disabled,o=void 0!==c&&c,i=t.required,r=void 0!==i&&i,l=t.name,s=t.checked,d=t.onChange,m=t.id,u=t.className,v=t.children,h=[a,u];return e.createElement("label",{className:"checkbox"},e.createElement("input",{type:"checkbox",id:void 0!==m&&m,className:h.join(" ").trim(),disabled:o,required:r,checked:s,name:void 0!==l&&l,onChange:d}),v)},U=function(t){var n=t.color,a=void 0===n?"plain":n,c=t.disabled,o=void 0!==c&&c,i=t.required,r=void 0!==i&&i,l=t.name,s=t.checked,d=t.onChange,m=t.id,u=t.className,v=t.children,h=[a,u];return e.createElement("label",{className:"radio"},e.createElement("input",{type:"radio",id:void 0!==m&&m,className:h.join(" ").trim(),disabled:o,required:r,checked:s,name:void 0!==l&&l,onChange:d}),v)},D=require("feather-icons"),G=function(t){var n=t.name,a=t.width,c=void 0===a?24:a,o=t.height,i=void 0===o?24:o,r=t.viewBox,l=void 0===r?"0 0 24 24":r,s=t.fill,d=void 0===s?"none":s,m=t.stroke,u=void 0===m?"currentColor":m,v=t.strokeWidth,h=void 0===v?2:v,p=t.strokeLinecap,f=void 0===p?"round":p,b=t.strokeLinejoin,g=void 0===b?"round":b,N=t.id,y=t.className;return e.createElement("span",{id:void 0!==N&&N,className:[y,"icon"].join(" ").trim(),dangerouslySetInnerHTML:{__html:D.icons[n].toSvg({width:c,height:i,viewBox:l,fill:d,stroke:u,strokeWidth:h,strokeLinecap:f,strokeLinejoin:g})}})},J=function(t){var n=t.color,a=void 0===n?"plain":n,c=t.disabled,o=void 0!==c&&c,i=t.required,r=void 0!==i&&i,l=t.name,s=t.onChange,d=t.id,m=[a,t.className];return e.createElement("input",{type:"text",id:void 0!==d&&d,className:m.join(" ").trim(),disabled:o,required:r,name:void 0!==l&&l,onChange:s})};export{t as Hyperlink,n as Button,a as Image,l as List,r as ListItem,p as Layout,m as Content,u as Sidebar,h as Header,N as Grid,g as Row,b as Column,j as Card,w as CardSection,E as Menu,y as MenuItem,S as Table,k as TableCaption,L as TableHead,A as TableBody,C as TableRow,x as TableCell,c as Dropdown,o as Collapse,W as Title,O as Text,_ as Paragraph,z as Quote,I as Code,q as Kbd,M as Preformatted,H as Anchor,F as Tooltip,T as Popover,B as Badge,R as Checkbox,U as Radio,G as Icon,J as TextInput};
