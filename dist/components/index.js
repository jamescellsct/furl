import t from"react";var n=function(n){var e=n.openIn,a=void 0===e?"self":e,c=n.href,o=n.id,r=n.className,i=n.children;return["external","_external"].includes(a)?t.createElement("a",{href:c,rel:"noopener noreferrer",target:"_blank",id:void 0!==o&&o,className:r},i):t.createElement("a",{href:c,target:["blank","_blank"].includes(a)?"_blank":"_self",id:void 0!==o&&o,className:r},i)},e=function(n){var e=n.fill,a=void 0===e?"flat":e,c=n.text,o=void 0===c?"normal":c,r=n.size,i=void 0===r?"normal":r,l=n.color,d=void 0===l?"plain":l,s=n.shape,m=void 0===s?"normal":s,u=n.type,v=void 0===u?"button":u,f=n.disabled,h=void 0!==f&&f,p=n.openIn,b=n.href,y=n.onClick,g=n.id,E=n.className,N=n.children,w=[];switch(w.push(a),"normal"!==o&&w.push(o),"normal"!==i&&w.push(i),"plain"!==d&&w.push(d),"normal"!==m&&w.push(m),v){case"link":return["external","_external"].includes(p)?t.createElement("a",{href:h?"":b,className:["button",E].concat(w).join(" ").trim(),rel:"noopener noreferrer",target:"_blank",disabled:h,onClick:y,id:void 0!==g&&g},N):t.createElement("a",{href:h?"":b,className:["button",E].concat(w).join(" ").trim(),target:["blank","_blank"].includes(p)?"_blank":"_self",disabled:h,onClick:y,id:void 0!==g&&g},N);case"submit":return t.createElement("button",{type:"submit",className:[E].concat(w).join(" ").trim(),disabled:h,onClick:y,id:void 0!==g&&g},N);case"reset":return t.createElement("button",{type:"reset",className:[E].concat(w).join(" ").trim(),disabled:h,onClick:y,id:void 0!==g&&g},N);default:return t.createElement("button",{className:[E].concat(w).join(" ").trim(),disabled:h,onClick:y,id:void 0!==g&&g},N)}},a=function(n){var e=n.data,a=n.id,c=n.className,o=n.render,r=void 0===o?function(n){return t.createElement("li",null,n)}:o;return t.createElement("ul",{id:void 0!==a&&a,className:c},e.map(r))};function c(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=[],a=!0,c=!1,o=void 0;try{for(var r,i=t[Symbol.iterator]();!(a=(r=i.next()).done)&&(e.push(r.value),!n||e.length!==n);a=!0);}catch(t){c=!0,o=t}finally{try{a||null==i.return||i.return()}finally{if(c)throw o}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var r=function(n){var e=n.id,a=n.className,c=n.children;return t.createElement("main",{id:void 0!==e&&e,className:[a,"layout-content"].join(" ")},c)},i=function(n){var e=n.id,a=n.className,c=n.children;return t.createElement("aside",{id:void 0!==e&&e,className:[a,"layout-sidebar"].join(" ").trim()},c)},l=function(n){var e=n.open,a=n.onClick;return e?t.createElement(t.Fragment,null,t.createElement("button",{className:"layout-sidebar-tab",onClick:a},t.createElement("svg",{width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}," ",t.createElement("path",{d:"M18 6L6 18M18 18L6 6",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}))),t.createElement("div",{class:"layout-sidebar-overlay"})):t.createElement("button",{className:"layout-sidebar-tab",onClick:a},t.createElement("svg",{width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.createElement("path",{d:"M21 12H3M21 6H3M21 18H3",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokLinejoin:"round"})))},d=function(n){var e=n.id,a=n.className,c=n.children;return t.createElement("header",{id:void 0!==e&&e,className:[a,"layout-header"].join(" ").trim()},c)},s=function(n){var e=n.header,a=void 0===e?"top":e,o=n.sidebar,s=void 0===o?"left":o,m=n.contentSize,u=void 0===m?[1,1,.75,.8]:m,v=n.id,f=n.className,h=n.children;Array.isArray(h)||(h=h);var p=h.filter(function(t){return d.name==t.type.name})[0],b=h.filter(function(t){return i.name==t.type.name})[0],y=h.filter(function(t){return r.name==t.type.name})[0],g="layout-".concat(a,"-").concat(s,"-").concat(u.map(function(t){return"".concat(t).replace(".","")}).join("-")),E=c(t.useState(!1),2),N=E[0],w=E[1];return t.createElement(t.Fragment,null,t.createElement("style",null,function(t,n,e,a){var c="",o=["","","",""];"top"==n?"left"==e?(c='"header header"\n". content"',o[0]="".concat(100-100*a[0],"% ").concat(100*a[0],"%"),o[1]="".concat(100-100*a[1],"% ").concat(100*a[1],"%"),o[2]="".concat(100-100*a[2],"% ").concat(100*a[2],"%"),o[3]="".concat(100-100*a[3],"% ").concat(100*a[3],"%")):"right"==e?(c='"header header"\n"content ."',o[0]="".concat(100*a[0],"% ").concat(100-100*a[0],"%"),o[1]="".concat(100*a[1],"% ").concat(100-100*a[1],"%"),o[2]="".concat(100*a[2],"% ").concat(100-100*a[2],"%"),o[3]="".concat(100*a[3],"% ").concat(100-100*a[3],"%")):(c='"header"\n"content"',o[0]="100%",o[1]="100%",o[2]="100%",o[3]="100%"):"bottom"==n?"left"==e?(c='". content"\n"header header"',o[0]="".concat(100-100*a[0],"% ").concat(100*a[0],"%"),o[1]="".concat(100-100*a[1],"% ").concat(100*a[1],"%"),o[2]="".concat(100-100*a[2],"% ").concat(100*a[2],"%"),o[3]="".concat(100-100*a[3],"% ").concat(100*a[3],"%")):"right"==e?(c='"content ."\n"header header"',o[0]="".concat(100*a[0],"% ").concat(100-100*a[0],"%"),o[1]="".concat(100*a[1],"% ").concat(100-100*a[1],"%"),o[2]="".concat(100*a[2],"% ").concat(100-100*a[2],"%"),o[3]="".concat(100*a[3],"% ").concat(100-100*a[3],"%")):(c='"content"\n"header"',o[0]="100%",o[1]="100%",o[2]="100%",o[3]="100%"):"left"==e?(c='". content"',o[0]="".concat(100-100*a[0],"% ").concat(100*a[0],"%"),o[1]="".concat(100-100*a[1],"% ").concat(100*a[1],"%"),o[2]="".concat(100-100*a[2],"% ").concat(100*a[2],"%"),o[3]="".concat(100-100*a[3],"% ").concat(100*a[3],"%")):"right"==e?(c='"content ."',o[0]="".concat(100*a[0],"% ").concat(100-100*a[0],"%"),o[1]="".concat(100*a[1],"% ").concat(100-100*a[1],"%"),o[2]="".concat(100*a[2],"% ").concat(100-100*a[2],"%"),o[3]="".concat(100*a[3],"% ").concat(100-100*a[3],"%")):(c='"content"',o[0]="100%",o[1]="100%",o[2]="100%",o[3]="100%");var r=[0,0,0,0];return"none"!==e&&(r=[100-100*a[0],100-100*a[1],100-100*a[2],100-100*a[3]]),"\n  .".concat(t," {\n    grid-template-areas: ").concat(c,";\n    grid-template-columns: ").concat(o[0],";\n  }\n  ").concat("none"==n?"":".".concat(t," .layout-header {\n      ").concat("top"==n?"top: 0;":"bottom: 0;","\n    }"),"\n  ").concat("none"==e?"":".".concat(t," .layout-sidebar {\n      ").concat(0==r[0]?"".concat("left"==e?"left: -100%;":"right: -100%;","\n        width: calc(100% - var(--ls-250p));"):"".concat("left"==e?"left: 0;":"right: 0;","\n        width: ").concat(r[0],"%;"),"\n      ").concat("none"==n?"min-height: 100vh;":"","\n      ").concat("top"==n?"top: var(--ls-300p);":"bottom"==n?"bottom: var(--ls-300p);":"","\n    }"),"\n  ").concat("none"!==e&&0==r[0]?".".concat(t," .layout-sidebar-tab {\n      ").concat("top"==n?"top: var(--ls-300p);":"bottom"==n?"bottom: var(--ls-300p);":"","\n      ").concat("left"==e?"left: 0;":"right: 0;","\n    }"):".".concat(t," .layout-sidebar-tab, .").concat(t," .layout-sidebar-overlay {\n      display: none;\n    }"),"\n  .").concat(t,".sidebar-visible .layout-sidebar {\n    ").concat("left"==e?"left: 0;":"right: 0;","\n  }\n  .").concat(t,".sidebar-visible .layout-sidebar-tab {\n    ").concat("left"==e?"left: calc(100% - var(--ls-250p));":"right: calc(100% - var(--ls-250p));","\n  }\n  @media screen and (min-width: 600px) {\n    .").concat(t," {\n      grid-template-columns: ").concat(o[1],";\n    }\n    ").concat("none"==e?"":".".concat(t," .layout-sidebar {\n      ").concat(0==r[1]?"".concat("left"==e?"left: -100%;":"right: -100%;","\n        width: calc(100% - var(--ls-250p));"):"".concat("left"==e?"left: 0;":"right: 0;","\n        width: ").concat(r[1],"%;"),"\n    }"),"\n    ").concat("none"!==e&&0==r[1]?".".concat(t," .layout-sidebar-tab {\n        ").concat("top"==n?"top: var(--ls-300p);":"bottom"==n?"bottom: var(--ls-300p);":"","\n        ").concat("left"==e?"left: 0;":"right: 0;","\n      }"):".".concat(t," .layout-sidebar-tab, .").concat(t," .layout-sidebar-overlay {\n        display: none;\n      }"),"\n  }\n  @media screen and (min-width: 900px) {\n    .").concat(t," {\n      grid-template-columns: ").concat(o[2],";\n    }\n    ").concat("none"==e?"":".".concat(t," .layout-sidebar {\n      ").concat(0==r[2]?"".concat("left"==e?"left: -100%;":"right: -100%;","\n        width: calc(100% - var(--ls-250p))%;"):"".concat("left"==e?"left: 0;":"right: 0;","\n        width: ").concat(r[2],"%;"),"\n    }"),"\n    ").concat("none"!==e&&0==r[2]?".".concat(t," .layout-sidebar-tab {\n      ").concat("top"==n?"top: var(--ls-300p);":"bottom"==n?"bottom: var(--ls-300p);":"","\n      ").concat("left"==e?"left: 0;":"right: 0;","\n    }"):".".concat(t," .layout-sidebar-tab, .").concat(t," .layout-sidebar-overlay {\n      display: none;\n    }"),"\n  }\n  @media screen and (min-width: 1200px) {\n    .").concat(t," {\n      grid-template-columns: ").concat(o[3],";\n    }\n    ").concat("none"==e?"":".".concat(t," .layout-sidebar {\n      ").concat(0==r[3]?"".concat("left"==e?"left: -100%;":"right: -100%;","\n        width: calc(100% - var(--ls-250p))%;"):"".concat("left"==e?"left: 0;":"right: 0;","\n        width: ").concat(r[3],"%;"),"\n    }"),"\n    ").concat("none"!==e&&0==r[3]?".".concat(t," .layout-sidebar-tab {\n      ").concat("top"==n?"top: var(--ls-300p);":"bottom"==n?"bottom: var(--ls-300p);":"","\n      ").concat("left"==e?"left: 0;":"right: 0;","\n    }"):".".concat(t," .layout-sidebar-tab, .").concat(t," .layout-sidebar-overlay {\n      display: none;\n    }"),"\n  }\n  ")}(g,a,s,u)),t.createElement("div",{id:void 0!==v&&v,className:["layout-container",f,g,N?"sidebar-visible":"sidebar-hidden"].join(" ").trim()},p,b,y,t.createElement(l,{open:N,onClick:function(){return w(!N)}})))},m=["xs","sm","md","lg"],u=function(n){var e,a,c,r=n.size,i=void 0===r?"fluid":r,l=n.id,d=n.className,s=n.children;return c=(e=Array.isArray(i)?i:[i,i,i,i]).reduce(function(t,n,e){if(+n>=1&&+n<=12||"fluid"==n)return t;if(+n<1)switch(e){case 0:return t+".grid-col-xs-c".concat("".concat(n).replace(".","")," { --col-xs-size: ").concat(100*n,"%; } ");case 1:return t+".grid-col-sm-c".concat("".concat(n).replace(".","")," { --col-sm-size: ").concat(100*n,"%; } ");case 2:return t+".grid-col-md-c".concat("".concat(n).replace(".","")," { --col-md-size: ").concat(100*n,"%; } ");case 3:return t+".grid-col-lg-c".concat("".concat(n).replace(".","")," { --col-lg-size: ").concat(100*n,"%; } ");default:return t}else switch(e){case 0:return t+".grid-col-xs-p".concat("".concat(n).replace(".","")," { --col-xs-size: ").concat(n,"; } ");case 1:return t+".grid-col-sm-p".concat("".concat(n).replace(".","")," { --col-sm-size: ").concat(n,"; } ");case 2:return t+".grid-col-md-p".concat("".concat(n).replace(".","")," { --col-md-size: ").concat(n,"; } ");case 3:return t+".grid-col-lg-p".concat("".concat(n).replace(".","")," { --col-lg-size: ").concat(n,"; } ");default:return t}},""),a=e.map(function(t,n){return"grid-col-".concat(m[n],"-").concat(+t>=1&&+t<=12||"fluid"==t?"".concat(t):+t<1?"c".concat("".concat(t).replace(".","")):"p".concat("".concat(t).replace(".","")))}),c.length>0?t.createElement(t.Fragment,null,t.createElement("style",null,c),t.createElement("div",{className:[d].concat(o(a)).join(" ").trim(),id:void 0!==l&&l},s)):t.createElement("div",{className:[d].concat(o(a)).join(" ").trim(),id:void 0!==l&&l},s)},v=function(n){var e=n.id,a=n.className,c=n.children;Array.isArray(c)||(c=[c]);var o=c.filter(function(t){return u.name==t.type.name});return t.createElement("div",{id:void 0!==e&&e,className:[a,"grid-row"].join(" ").trim()},o)},f=function(n){var e=n.justify,a=void 0===e?"start":e,c=n.align,o=void 0===c?"start":c,r=n.id,i=n.className,l=n.children;Array.isArray(l)||(l=[l]);var d=l.filter(function(t){return v.name==t.type.name});return t.createElement("div",{id:void 0!==r&&r,className:["grid-container",i,"align-".concat(o),"justify-".concat(a)].join(" ").trim()},d)},h=function(n){var e=n.selected,a=void 0!==e&&e,c=n.id,o=n.className,r=n.children,i=[a?"selected":"",o,"menu-item"];return t.createElement("div",{id:void 0!==c&&c,className:i.join(" ").trim()},r)},p=function(n){var e=n.type,a=n.id,c=n.className,o=n.children;Array.isArray(o)||(o=[o]);var r=o.filter(function(t){return h.name==t.type.name}),i=[e,c,"menu"];return t.createElement("div",{id:void 0!==a&&a,className:i.join(" ").trim()},r)},b=function(n){var e=n.height,a=void 0===e?"auto":e,c=n.media,o=void 0===c?"":c,r=n.id,i=n.className,l=n.children;return o.length?t.createElement("div",{className:[i,"card-media-section"].join(" ").trim(),id:void 0!==r&&r,style:{height:a,backgroundImage:"url(".concat(encodeURI(o),")")}}):t.createElement("div",{className:[i,"card-section"].join(" ").trim(),id:void 0!==r&&r},l)},y=function(n){var e=n.width,a=void 0===e?"auto":e,c=n.id,o=n.className,r=n.children;Array.isArray(r)||(r=[r]);var i=r.filter(function(t){return b.name==t.type.name});return t.createElement("div",{className:[o,"card"].join(" ").trim(),id:void 0!==c&&c,style:{width:a}},i)};export{n as Hyperlink,e as Button,a as List,s as Layout,r as Content,i as Sidebar,d as Header,f as Grid,v as Row,u as Column,y as Card,b as CardSection,p as Menu,h as MenuItem};
