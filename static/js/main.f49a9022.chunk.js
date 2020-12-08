(this.webpackJsonp24=this.webpackJsonp24||[]).push([[0],{44:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),i=n.n(s),r=n(14),o=n.n(r),a=n(9),u=n.n(a),l=n(20),d=n.n(l),j=n(4),b=n(5),E=n(21),p=n(22),h=n(43),O={SELECT_1:{keys:["1","a"],description:"Select card 1"},SELECT_2:{keys:["2","s"],description:"Select card 2"},SELECT_3:{keys:["3","d"],description:"Select card 3"},SELECT_4:{keys:["4","f"],description:"Select card 4"},SELECT_ADD:{keys:["shift+=","j"],description:"Select addition"},SELECT_SUB:{keys:["-","k"],description:"Select subtraction"},SELECT_MUL:{keys:["shift+8","l"],description:"Select multiplication"},SELECT_DIV:{keys:["/",";"],description:"Select division"},SELECT_BACK:{keys:["backspace","b"],description:"Go back one step"},SELECT_RESET:{keys:["r"],description:"Reset current problem"},SELECT_NEXT:{keys:["enter","right","space","]"],description:"Go to next problem"},SELECT_PREVIOUS:{keys:["'","left","p","["],description:"Go to previous problem"},TOGGLE_SHORTCUT:{keys:["shift+s"],description:"Toggle shortcut display"},CLOSE_SHORTCUT:{keys:["esc"],description:"Close shortcut display"}},f=function(e){switch(e){case"ADD":return"SELECT_ADD";case"SUB":return"SELECT_SUB";case"MUL":return"SELECT_MUL";case"DIV":return"SELECT_DIV";default:return"ERROR"}},S=function e(t){if(1===t.length)return t[0].equals(24);for(var n=0;n<t.length;n++)for(var c=0;c<t.length;c++)if(n!==c){var s,i=Object(p.a)(T);try{for(i.s();!(s=i.n()).done;){var r=s.value;if(v(r,t[n],t[c]))if(e([].concat(Object(j.a)(t.filter((function(e,t){return t!==n&&t!==c}))),[k(r,t[n],t[c])])))return!0}}catch(o){i.e(o)}finally{i.f()}}return!1},x=function(e){for(var t;;)if(t=Array.apply(null,Array(4)).map((function(){return h(Math.floor(12*Math.random())+1)})),S(t)&&0===e.filter((function(e){return e===t})).length)return t},C=function(e){switch(e){case"ADD":return"+";case"SUB":return"-";case"MUL":return"\xd7";case"DIV":return"\xf7";default:return"ERROR"}},T=["ADD","SUB","MUL","DIV"],v=function(e,t,n){return!("DIV"===e&&n.equals(0))},k=function(e,t,n){switch(e){case"ADD":return t.add(n);case"SUB":return t.sub(n);case"MUL":return t.mul(n);case"DIV":return t.div(n);default:return"ERROR"}},m=function(e,t,n,c){var s=c[t],i=c[n],r=k(e,s,i),o=Object(j.a)(c);return o[t]=null,o[n]=r,o},L=function(e){return 1===e.filter((function(e){return null!==e})).length},y=(n(44),n(3)),_=n(2),g=n.n(_),R=Object(y.a)(Object(y.b)({componentDidMount:function(){this.props.isHidden||g.a.bind(O["SELECT_"+(this.props.index+1).toString()].keys,this.props.select)},componentWillReceiveProps:function(e){g.a.unbind(O["SELECT_"+(this.props.index+1).toString()].keys),e.isHidden||g.a.bind(O["SELECT_"+(this.props.index+1).toString()].keys,e.select)},componentWillUnmount:function(){this.props.isHidden||g.a.unbind(O["SELECT_"+(this.props.index+1).toString()].keys)}}))((function(e){var t=e.isHidden,n=e.isSelected,s=e.isFinal,i=e.n,r=e.select;return t?Object(c.jsx)("div",{className:"number-card-hidden"}):Object(c.jsx)("div",{className:"number-card "+(s?i.equals(24)?"correct":"incorrect":n?"selected":""),onClick:r,children:Object(c.jsx)("div",{className:"number-card-number",children:i.toFraction()})})})),N=(n(47),function(e){var t=e.cards,n=e.selected,s=e.selectCard;return Object(c.jsx)("div",{className:"hand",children:t.map((function(e,i){return Object(c.jsx)(R,{index:i,n:e,isHidden:null===e,isSelected:i===n,isFinal:L(t),select:function(){return s(i)}},i)}))})}),U=(n(48),n(49),function(e){var t=e.text,n=e.onClick;return Object(c.jsx)("div",{className:"game-navigation-button",onClick:n,children:Object(c.jsx)("div",{className:"game-navigation-button-text",children:t})})}),D=Object(y.a)(Object(y.b)({componentDidMount:function(){g.a.bind(O.SELECT_BACK.keys,this.props.goBack),g.a.bind(O.SELECT_RESET.keys,this.props.reset)},componentWillReceiveProps:function(e){g.a.unbind(O.SELECT_BACK.keys),g.a.unbind(O.SELECT_RESET.keys),g.a.bind(O.SELECT_BACK.keys,e.goBack),g.a.bind(O.SELECT_RESET.keys,e.reset)},componentWillUnmount:function(){g.a.unbind(O.SELECT_BACK.keys),g.a.unbind(O.SELECT_RESET.keys)}}))((function(e){var t=e.goBack,n=e.reset;return Object(c.jsxs)("div",{className:"game-navigation",children:[Object(c.jsx)(U,{text:"Back",onClick:t}),Object(c.jsx)(U,{text:"Reset",onClick:n})]})})),B=(n(50),Object(y.a)(Object(y.b)({componentDidMount:function(){g.a.bind(O[f(this.props.operation)].keys,this.props.select)},componentWillReceiveProps:function(e){g.a.unbind(O[f(this.props.operation)].keys),g.a.bind(O[f(this.props.operation)].keys,e.select)},componentWillUnmount:function(){g.a.unbind(O[f(this.props.operation)].keys)}}))((function(e){var t=e.operation,n=e.isSelected,s=e.select;return Object(c.jsx)("div",{className:"operation "+(n?"selected":""),onClick:s,children:Object(c.jsx)("div",{className:"operation-text",children:C(t)})})}))),P=(n(51),function(e){var t=e.selected,n=e.selectOperation;return Object(c.jsx)("div",{className:"operations",children:T.map((function(e,s){return Object(c.jsx)(B,{operation:e,select:function(){return n(e)},isSelected:t===e},s)}))})}),I=function(e,t,n){return{hand:e,selected:t,operation:n}},A=function(e){var t=e.hand,n=Object(s.useState)([I(t,null,null)]),i=Object(b.a)(n,2),r=i[0],o=i[1],a=r[r.length-1],u=function(e){o([].concat(Object(j.a)(r.slice(0,r.length-1)),[I(a.hand,e,a.operation)]))},l=function(e){o([].concat(Object(j.a)(r.slice(0,r.length-1)),[I(a.hand,a.selected,e)]))};return Object(c.jsxs)("div",{className:"game",children:[Object(c.jsx)(D,{goBack:function(){r.length>1?o(r.slice(0,r.length-1)):o([I(t,null,null)])},reset:function(){o([I(t,null,null)])}}),Object(c.jsx)(N,{cards:a.hand,selected:a.selected,selectCard:function(e){e===a.selected||L(a.hand)?u(null):null===a.operation||null===a.selected?u(e):v(a.operation,t[a.selected],t[e])&&o([].concat(Object(j.a)(r),[I(m(a.operation,a.selected,e,a.hand),null,null)]))}}),Object(c.jsx)(P,{selected:a.operation,selectOperation:function(e){e===a.operation||L(a.hand)?l(null):l(e)}})]})},M=(n(52),function(e){var t=e.text,n=e.onClick,s=e.disabled,i=void 0!==s&&s;return Object(c.jsx)("div",{className:"navigation-button "+(i?"disabled":""),onClick:n,children:Object(c.jsx)("div",{className:"navigation-button-text",children:t})})}),G=(n(53),Object(y.a)(Object(y.b)({componentWillMount:function(){g.a.bind(O.SELECT_PREVIOUS.keys,this.props.onPrevious),g.a.bind(O.SELECT_NEXT.keys,this.props.onNext)},componentWillReceiveProps:function(e){g.a.unbind(O.SELECT_PREVIOUS.keys),g.a.bind(O.SELECT_PREVIOUS.keys,e.onPrevious),g.a.unbind(O.SELECT_NEXT.keys),g.a.bind(O.SELECT_NEXT.keys,e.onNext)},componentWillUnmount:function(){g.a.unbind(O.SELECT_PREVIOUS.keys),g.a.unbind(O.SELECT_NEXT.keys)}}))((function(e){var t=e.onPrevious,n=e.isPreviousDisabled,s=e.onNext;return Object(c.jsxs)("div",{className:"navigation",children:[Object(c.jsx)(M,{text:"Previous",onClick:t,disabled:n}),Object(c.jsx)(M,{text:"Next",onClick:s})]})}))),V=(n(54),n(55),function(e){var t=function(e){switch(e){case"left":return"\u2190";case"right":return"\u2192";default:return e.toUpperCase()}}(e.shortcut);return Object(c.jsx)("span",{className:"shortcut",children:t})}),H=(n(56),function(e){var t=e.shortcut.split("+");return Object(c.jsx)("div",{className:"shortcut-display",children:t.map((function(e,t){return Object(c.jsx)(V,{shortcut:e},t)}))})}),w=(n(57),n(58),function(){return Object(c.jsx)("hr",{className:"shortcut-divider"})}),F=function(e){var t=e.text;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{children:t}),Object(c.jsx)(w,{})]})},W=(n(59),function(e){var t=e.shortcut;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"shortcut-row",children:[Object(c.jsx)("span",{children:t.description}),Object(c.jsx)("div",{className:"shortcut-row-keys",children:t.keys.map((function(e,n){return Object(c.jsxs)(i.a.Fragment,{children:[Object(c.jsx)(H,{shortcut:e}),n!==t.keys.length-1?"/":null]},n)}))})]}),Object(c.jsx)(w,{})]})}),K={overlay:{display:"flex",justifyContent:"center",alignItems:"center"},content:{overflowY:"scroll",borderColor:"black",borderWidth:"1px",borderStyle:"solid",backgroundColor:"white",paddingTop:"10px"}},X=function(e){var t=e.isOpen,n=e.close;return Object(c.jsxs)(u.a,{isOpen:t,onRequestClose:n,style:K,children:[Object(c.jsx)("h2",{children:"Shortcuts"}),Object(c.jsxs)("div",{children:[Object(c.jsx)(W,{shortcut:O.TOGGLE_SHORTCUT}),Object(c.jsx)(F,{text:"Game"}),Object(c.jsx)(W,{shortcut:O.SELECT_1}),Object(c.jsx)(W,{shortcut:O.SELECT_2}),Object(c.jsx)(W,{shortcut:O.SELECT_3}),Object(c.jsx)(W,{shortcut:O.SELECT_4}),Object(c.jsx)(W,{shortcut:O.SELECT_ADD}),Object(c.jsx)(W,{shortcut:O.SELECT_SUB}),Object(c.jsx)(W,{shortcut:O.SELECT_MUL}),Object(c.jsx)(W,{shortcut:O.SELECT_DIV}),Object(c.jsx)(W,{shortcut:O.SELECT_BACK}),Object(c.jsx)(W,{shortcut:O.SELECT_RESET}),Object(c.jsx)(F,{text:"Navigation"}),Object(c.jsx)(W,{shortcut:O.SELECT_NEXT}),Object(c.jsx)(W,{shortcut:O.SELECT_PREVIOUS})]})]})},q=function(){var e=Object(s.useState)(!1),t=Object(b.a)(e,2),n=t[0],i=t[1];return Object(s.useEffect)((function(){return g.a.bind(O.TOGGLE_SHORTCUT.keys,(function(){return i(!n)})),g.a.bind(O.CLOSE_SHORTCUT.keys,(function(){return i(!1)})),function(){g.a.unbind(O.TOGGLE_SHORTCUT.keys),g.a.unbind(O.CLOSE_SHORTCUT.keys)}}),[n]),Object(c.jsxs)("div",{className:"shortcut-help",children:["Press ",Object(c.jsx)(H,{shortcut:O.TOGGLE_SHORTCUT.keys[0]})," to view all shortcuts",Object(c.jsx)(X,{isOpen:n,close:function(){return i(!1)}})]})},J=function(){var e=Object(s.useState)([x([])]),t=Object(b.a)(e,2),n=t[0],i=t[1],r=Object(s.useState)(0),o=Object(b.a)(r,2),a=o[0],u=o[1];return Object(c.jsxs)("div",{className:"game-page",children:[Object(c.jsx)(G,{onPrevious:function(){0!==a&&u(a-1)},isPreviousDisabled:0===a,onNext:function(){a===n.length-1&&function(){var e=x(n);i([].concat(Object(j.a)(n),[e]))}(),u(a+1)}}),Object(c.jsx)(A,{hand:n[a]},a),E.isMobile?null:Object(c.jsx)(q,{})]})},z=n(25);var Y=function(){return Object(c.jsxs)(z.a,{className:"app",children:[Object(c.jsx)(d.a,{href:"https://github.com/alexander-ding/24/",size:50}),Object(c.jsx)(J,{})]})},Q=(n(60),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),i(e),r(e)}))});u.a.setAppElement("#root"),o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(Y,{})}),document.getElementById("root")),Q()}},[[61,1,2]]]);
//# sourceMappingURL=main.f49a9022.chunk.js.map