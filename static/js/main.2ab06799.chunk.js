(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports={messageWithAvatarContainer:"Message_messageWithAvatarContainer__1S4vH",triangle:"Message_triangle__11nNZ",avatar:"Message_avatar__3u-B8",messageFlexCont:"Message_messageFlexCont__2BrB6",userName:"Message_userName__1V9GF",time:"Message_time__1HrKD"}},,,,,function(e,t,n){e.exports={wrapper:"Affair_wrapper__egi1n",elemInSpan:"Affair_elemInSpan__2PIN3",button:"Affair_button__2yLMv"}},function(e,t,n){e.exports={minWidth:"Affairs_minWidth__1hNSd"}},function(e,t,n){e.exports={input:"SuperInputText_input__2YjJe",superInput:"SuperInputText_superInput__Fw1Nv",errorInput:"SuperInputText_errorInput__2b2fq",error:"SuperInputText_error__RX8yV"}},,,,function(e,t,n){e.exports={btn:"SuperButton_btn__1PIgo",default:"SuperButton_default__3rYXz",red:"SuperButton_red__2VeQU"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__2ucoD",spanClassName:"SuperCheckbox_spanClassName__1kDLP"}},function(e,t,n){e.exports={peopleWrapper:"HW8_peopleWrapper__1Q17S",btnBlock:"HW8_btnBlock__1wUly"}},,,function(e,t,n){e.exports={animation:"Header_animation__ymG3t",linksBlock:"Header_linksBlock__1TSZo"}},,function(e,t,n){e.exports={blue:"HW4_blue__1yMhy",column:"HW4_column__1HqoJ",testSpanError:"HW4_testSpanError__mxNWr"}},function(e,t,n){e.exports={flexContainer:"Error404_flexContainer__UywL_",modal:"Error404_modal__1X4ye"}},,,function(e,t,n){e.exports={App:"App_App__3PQ4O"}},,function(e,t,n){e.exports={editableSpan:"SuperEditableSpan_editableSpan__1gpW3"}},function(e,t,n){},,,,,,function(e,t,n){},,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(20),s=n.n(r),i=(n(43),n(34)),o=n.n(i),j=n(10),l=n(28),u=n.n(l),d=n(0);var b=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:u.a.animation}),Object(d.jsxs)("div",{className:u.a.linksBlock,children:[Object(d.jsx)(j.b,{to:"/pre-junior",children:"-junior"}),Object(d.jsx)(j.b,{to:"/junior",children:"junior"}),Object(d.jsx)(j.b,{to:"/junior-plus",children:"junior+"})]})]})},O=n(3),h=n(12),x=n.n(h);var p=function(e){return Object(d.jsxs)("div",{className:x.a.messageWithAvatarContainer,children:[Object(d.jsx)("img",{className:x.a.avatar,src:e.avatar,alt:"avatar"}),Object(d.jsx)("div",{className:x.a.triangle}),Object(d.jsxs)("div",{className:x.a.messageFlexCont,children:[Object(d.jsx)("div",{className:x.a.userName,children:e.name}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:e.message}),Object(d.jsx)("span",{className:x.a.time,children:e.time})]})]})]})},m="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",f="Nastya",v="\u0443\u0447\u0438 \u0420\u0435\u0430\u043a\u0442!",_="22:00";var g=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)(p,{avatar:m,name:f,message:v,time:_})]})},C=n(2),k=n(5),N=n(7),S=n(23),y=n.n(S),w=function(e){var t=e.red,n=e.className,a=Object(N.a)(e,["red","className"]),c="".concat(y.a.btn," ").concat(t?y.a.red:y.a.default," ").concat(n);return Object(d.jsx)("button",Object(k.a)({className:c},a))},A=n(17),I=n.n(A);var W=function(e){return Object(d.jsxs)("div",{className:I.a.wrapper,children:[Object(d.jsx)("span",{className:I.a.elemInSpan,children:e.affair.name}),Object(d.jsx)("span",{className:I.a.elemInSpan,children:e.affair.priority}),Object(d.jsx)(w,{className:I.a.button,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})},T=n(18),B=n.n(T);var F=function(e){var t=e.data.map((function(t){return Object(d.jsx)(W,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{children:[t,Object(d.jsx)(w,{className:B.a.minWidth,onClick:function(){e.setFilter("all")},children:"All"}),Object(d.jsx)(w,{className:B.a.minWidth,onClick:function(){e.setFilter("high")},children:"High"}),Object(d.jsx)(w,{className:B.a.minWidth,onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(d.jsx)(w,{className:B.a.minWidth,onClick:function(){e.setFilter("low")},children:"Low"})]})},E=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var H=function(){var e=Object(a.useState)(E),t=Object(C.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("all"),s=Object(C.a)(r,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(F,{data:j,setFilter:o,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}})]})},M=n(22),P=n(53),D=n(19),U=n.n(D),L=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,c=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,o=Object(N.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(U.a.error," ").concat(i||""),l="".concat(U.a.input," ").concat(r?U.a.errorInput:U.a.superInput," ").concat(s," ");return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(k.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:l},o)),r&&Object(d.jsx)("span",{className:j,children:r})]})},J=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,c=e.error,r=e.totalUsers;return Object(d.jsxs)("div",{children:[Object(d.jsx)(L,{value:t,onChange:n,error:c}),Object(d.jsx)(w,{onClick:a,children:"add"}),Object(d.jsx)("span",{children:r})]})},G=function(e){var t=e.users,n=e.addUserCallback,c=Object(a.useState)(""),r=Object(C.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(""),j=Object(C.a)(o,2),l=j[0],u=j[1],b=t.length;return Object(d.jsx)(J,{name:s,setNameCallback:function(e){u(""),i(e.currentTarget.value.trim())},addUser:function(){s.length>0?(alert("Hello ".concat(s,"!")),i(""),n(s)):u("add correct name")},error:l,totalUsers:b})};var X=function(){var e=Object(a.useState)([]),t=Object(C.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(G,{users:n,addUserCallback:function(e){c([].concat(Object(M.a)(n),[{_id:Object(P.a)(),name:e}]))}})]})},K=n(30),q=n.n(K),Q=n(24),V=n.n(Q),Y=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),r=Object(N.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(V.a.checkbox," ").concat(a||"");return Object(d.jsxs)("label",{className:V.a.labelForCheckBox,children:[Object(d.jsx)("input",Object(k.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),c&&Object(d.jsx)("span",{className:V.a.spanClassName,children:c})]})};var Z=function(){var e=Object(a.useState)(""),t=Object(C.a)(e,2),n=t[0],c=t[1],r=n?"":"error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(C.a)(i,2),j=o[0],l=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:q.a.column,children:[Object(d.jsx)(L,{value:n,onChangeText:c,onEnter:s,error:r}),Object(d.jsx)(L,{className:q.a.blue}),"----------------------------------------------------",Object(d.jsx)(w,{children:"default"}),Object(d.jsx)(w,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(w,{disabled:!0,children:"disabled"}),"----------------------------------------------------",Object(d.jsx)(Y,{checked:j,onChangeChecked:l,children:"some text "}),Object(d.jsx)(Y,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]})]})},z=n(36),R=n.n(z),$=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,r=Object(N.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(C.a)(s,2),o=i[0],j=i[1],l=c||{},u=l.children,b=l.onDoubleClick,O=l.className,h=Object(N.a)(l,["children","onDoubleClick","className"]),x="".concat(R.a.editableSpan," ").concat(O);return Object(d.jsx)(d.Fragment,{children:o?Object(d.jsx)(L,Object(k.a)({autoFocus:!0,onBlur:function(e){t&&t(e),j(!1)},onEnter:function(){n&&n(),j(!1)}},r)):Object(d.jsx)("span",Object(k.a)(Object(k.a)({onDoubleClick:function(e){b&&b(e),j(!0)},className:x},h),{},{children:u||r.value}))})};function ee(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function te(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}ee("test",{x:"A",y:1});te("test",{x:"",y:0});var ne=function(){var e=Object(a.useState)(""),t=Object(C.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 6",Object(d.jsx)("div",{children:Object(d.jsx)($,{value:n,onChangeText:c,spanProps:{children:n?void 0:"enter text..."}})}),Object(d.jsx)(w,{onClick:function(){ee("editable-span-value",n)},children:"save"}),Object(d.jsx)(w,{onClick:function(){var e=te("editable-span-value",n);c(e)},children:"restore"}),Object(d.jsx)("hr",{})]})};var ae=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(g,{}),Object(d.jsx)(H,{}),Object(d.jsx)(X,{}),Object(d.jsx)(Z,{}),Object(d.jsx)(ne,{})]})},ce=n(31),re=n.n(ce);var se=function(){return Object(d.jsx)("div",{className:re.a.flexContainer,children:Object(d.jsxs)("div",{className:re.a.modal,children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})})},ie=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,c=Object(N.a)(e,["options","onChange","onChangeOption"]),r=t?t.map((function(e){return Object(d.jsx)("option",{children:e},Math.random())})):[];return Object(d.jsx)("select",Object(k.a)(Object(k.a)({onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)}},c),{},{children:r}))},oe=n(37),je=n.n(oe),le=function(e){e.type;var t=e.name,n=e.options,a=e.value,c=e.onChange,r=e.onChangeOption,s=(Object(N.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){c&&c(e),r&&r(e.currentTarget.value)}),i=n?n.map((function(e,n){return Object(d.jsxs)("label",{className:je.a.radio,children:[Object(d.jsx)("input",{type:"radio",name:t,checked:a===e,value:e,onChange:s}),e]},t+"-"+n)})):[];return Object(d.jsx)(d.Fragment,{children:i})},ue=["x","y","z"];var de=function(){var e=Object(a.useState)(ue[1]),t=Object(C.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 7",Object(d.jsx)("div",{children:Object(d.jsx)(ie,{options:ue,value:n,onChangeOption:c})}),Object(d.jsx)("div",{children:Object(d.jsx)(le,{name:"radio",options:ue,value:n,onChangeOption:c})}),Object(d.jsx)("hr",{})]})},be=function(e,t){switch(t.type){case"sort":return Object(M.a)(e.map((function(e){return e}))).sort((function(e,n){return"up"===t.payload?e.name.localeCompare(n.name):n.name.localeCompare(e.name)}));case"check":return e.filter((function(e){return e.age>t.payload}));default:return e}},Oe=n(25),he=n.n(Oe),xe=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var pe=function(){var e=Object(a.useState)(xe),t=Object(C.a)(e,2),n=t[0],c=t[1],r=n.map((function(e){return Object(d.jsxs)("div",{className:he.a.peopleWrapper,children:[Object(d.jsx)("span",{children:e.name}),Object(d.jsxs)("span",{children:[" ",e.age]})]},e._id)}));return Object(d.jsxs)("div",{className:he.a.mainBlock,children:["homeworks 8",r,Object(d.jsxs)("div",{className:he.a.btnBlock,children:[Object(d.jsx)("div",{children:Object(d.jsx)(w,{onClick:function(){return c(be(xe,{type:"sort",payload:"up"}))},children:"sort up"})}),Object(d.jsx)("div",{children:Object(d.jsx)(w,{onClick:function(){return c(be(xe,{type:"sort",payload:"down"}))},children:"sort down"})}),Object(d.jsx)("div",{children:Object(d.jsx)(w,{onClick:function(){return c(be(xe,{type:"check",payload:18}))},children:"check 18"})})]}),Object(d.jsx)("hr",{})]})};var me=function(){var e=Object(a.useState)(0),t=Object(C.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(new Date),s=Object(C.a)(r,2),i=s[0],o=s[1],j=Object(a.useState)(!1),l=Object(C.a)(j,2),u=l[0],b=l[1],O=function(){clearInterval(n)},h=i.toLocaleTimeString(),x=i.toLocaleDateString();return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{onMouseEnter:function(){b(!0)},onMouseLeave:function(){b(!1)},children:h}),u&&Object(d.jsx)("div",{children:x}),Object(d.jsx)(w,{onClick:function(){O();var e=window.setInterval((function(){o(new Date)}),1e3);c(e)},children:"start"}),Object(d.jsx)(w,{onClick:O,children:"stop"})]})};var fe=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 9",Object(d.jsx)(me,{}),Object(d.jsx)("hr",{})]})},ve=n(16),_e={loadingStatus:!1},ge=function(e){return{type:"LOADING-STATUS",loadingStatus:e}},Ce=n.p+"static/media/oval.da97797b.svg";var ke=function(){var e=Object(ve.b)(),t=Object(ve.c)((function(e){return e.loading.loadingStatus}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 10",t?Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:Ce,alt:"wait.."})}):Object(d.jsx)("div",{children:Object(d.jsx)(w,{onClick:function(){e(ge(!0)),setTimeout((function(){return e(ge(!1))}),3e3),console.log("loading...")},children:"set loading..."})}),Object(d.jsx)("hr",{})]})};var Ne=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(de,{}),Object(d.jsx)(pe,{}),Object(d.jsx)(fe,{}),Object(d.jsx)(ke,{})]})};var Se=function(){return Object(d.jsx)("div",{})},ye="/pre-junior",we="/junior",Ae="/junior-plus";var Ie=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(O.d,{children:[Object(d.jsx)(O.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(O.a,{to:ye})}}),Object(d.jsx)(O.b,{path:ye,render:function(){return Object(d.jsx)(ae,{})}}),Object(d.jsx)(O.b,{path:we,render:function(){return Object(d.jsx)(Ne,{})}}),Object(d.jsx)(O.b,{path:Ae,render:function(){return Object(d.jsx)(Se,{})}}),Object(d.jsx)(O.b,{render:function(){return Object(d.jsx)(se,{})}})]})})};var We=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(b,{}),Object(d.jsx)(Ie,{})]})})};var Te=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(We,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Be=n(32),Fe=Object(Be.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING-STATUS":return Object(k.a)(Object(k.a)({},e),{},{loadingStatus:t.loadingStatus});default:return e}}}),Ee=Object(Be.b)(Fe),He=Ee;window.store=Ee,s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(ve.a,{store:He,children:Object(d.jsx)(Te,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[51,1,2]]]);
//# sourceMappingURL=main.2ab06799.chunk.js.map