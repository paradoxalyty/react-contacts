(this["webpackJsonpreact-contacts"]=this["webpackJsonpreact-contacts"]||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var n,c,i=a(4),r=a(0),l=a.n(r),s=a(11),j=a.n(s),o=(a(97),a(13)),b=a(60),d=a(19),O=a(145),u=a(170),h=a(163),x=a(164),f=a(165),m=a(157),g=a(166),p=a(74),v=a(69),C=a(152),w=a(156),y=a(155),N=a(150),F=a(153),S=a(154),k=a(151),I=a(171),E=a(169),L=a(68),A=a.n(L),B=a(177),M=a(147),D=Object(O.a)((function(e){return Object(u.a)({root:{cursor:"pointer"},icon:{marginRight:e.spacing(1)}})})),G="copy",R="copied",V=(n={},Object(o.a)(n,G,"Copy"),Object(o.a)(n,R,"Copied"),n),T=function(e){var t=e.text,a=D(),n=Object(E.a)(),c=Object(d.a)(n,2)[1],l=Object(r.useState)(G),s=Object(d.a)(l,2),j=s[0],o=s[1],b=Object(r.useCallback)((function(){c(t),o(R)}),[c,t]),O=Object(r.useCallback)((function(){o(G)}),[o]);return Object(i.jsx)(M.a,{onClickAway:O,children:Object(i.jsx)(B.a,{title:V[j],placement:"top",arrow:!0,children:Object(i.jsxs)(g.a,{className:a.root,onClick:b,children:[Object(i.jsx)(A.a,{fontSize:"small",className:a.icon}),t]})})})},P="AU",z="BR",J="CA",U="CH",W="DE",Z="DK",H="ES",K="FI",q="FR",Q="GB",X="IE",Y="IR",$="NO",_="NL",ee="NZ",te="TR",ae="US",ne=(c={},Object(o.a)(c,P,"Australian"),Object(o.a)(c,z,"Brazilian"),Object(o.a)(c,J,"Canadian"),Object(o.a)(c,U,"Chinese"),Object(o.a)(c,W,"German"),Object(o.a)(c,Z,"Danish"),Object(o.a)(c,H,"Spanish"),Object(o.a)(c,K,"Finnish"),Object(o.a)(c,q,"French"),Object(o.a)(c,Q,"British"),Object(o.a)(c,X,"Irish"),Object(o.a)(c,Y,"Iranian"),Object(o.a)(c,$,"Norwegian"),Object(o.a)(c,_,"Dutch"),Object(o.a)(c,ee,"New Zeland"),Object(o.a)(c,te,"Turkish"),Object(o.a)(c,ae,"American"),c),ce=Object(O.a)({table:{}}),ie=function(e){var t=e.data,a=ce();return Object(i.jsx)(N.a,{component:k.a,"data-testid":"contacts-table-container",children:Object(i.jsxs)(C.a,{className:a.table,"aria-label":"contacts table",children:[Object(i.jsx)(F.a,{children:Object(i.jsxs)(S.a,{children:[Object(i.jsx)(y.a,{children:"Avatar"}),Object(i.jsx)(y.a,{children:"Full name"}),Object(i.jsx)(y.a,{children:"Birthday"}),Object(i.jsx)(y.a,{children:"Email"}),Object(i.jsx)(y.a,{children:"Phone"}),Object(i.jsx)(y.a,{children:"Location"}),Object(i.jsx)(y.a,{children:"Nationality"})]})}),Object(i.jsx)(w.a,{children:t.map((function(e){return Object(i.jsxs)(S.a,{children:[Object(i.jsx)(y.a,{component:"th",scope:"row",children:Object(i.jsx)(I.a,{src:e.picture.thumbnail,alt:"Avatar"})}),Object(i.jsxs)(y.a,{children:[e.name.title,". ",e.name.first," ",e.name.last]}),Object(i.jsxs)(y.a,{children:[Object(i.jsx)(m.a,{children:Object(p.a)(Object(v.a)(e.dob.date),"iiii, Pp")}),Object(i.jsxs)(m.a,{children:[e.dob.age," years "]})]}),Object(i.jsx)(y.a,{children:Object(i.jsx)(T,{text:e.email})}),Object(i.jsx)(y.a,{children:Object(i.jsx)(T,{text:e.phone})}),Object(i.jsxs)(y.a,{children:[Object(i.jsx)(m.a,{children:e.location.country}),Object(i.jsxs)(m.a,{children:[e.location.city,", ",e.location.street.name," ",e.location.street.number]})]}),Object(i.jsx)(y.a,{children:ne[e.nat]})]},e.login.uuid)}))})]})})},re=a(71),le=a.n(re),se=a(70),je=a.n(se),oe=a(158),be=a(172),de="table",Oe="grid",ue=function(e){var t=e.dataViewMode,a=e.setDataViewMode,n=Object(r.useCallback)((function(e,t){a(t)}),[a]);return Object(i.jsxs)(be.a,{value:t,exclusive:!0,onChange:n,children:[Object(i.jsx)(oe.a,{value:Oe,"aria-label":Oe,"data-testid":"toggle-data-view-mode-grid",children:Object(i.jsx)(je.a,{})}),Object(i.jsx)(oe.a,{value:de,"aria-label":de,"data-testid":"toggle-data-view-mode-table",children:Object(i.jsx)(le.a,{})})]})},he=a(61),xe=a.n(he),fe=a(72),me=function(){return localStorage.getItem("dataViewMode")||de},ge=a(173),pe=a(174),ve=a(175),Ce=a(161),we=a(167),ye=a(162),Ne=a(73),Fe=a.n(Ne),Se=Object(O.a)((function(e){return Object(u.a)({fieldsContainer:{"& > *:not(:last-child)":{marginRight:e.spacing(2)}},fieldGender:{minWidth:120},fieldNationality:{minWidth:140}})})),ke=function(e){var t=e.filters,a=e.updateFilter,n=e.clearFilters,c=Se(),r=function(e){a(e.target.name,e.target.value)};return Object(i.jsxs)(g.a,{display:"flex",justifyContent:"space-between",children:[Object(i.jsxs)(g.a,{display:"flex",className:c.fieldsContainer,children:[Object(i.jsx)(ge.a,{name:"fullname",label:"Fullname",variant:"outlined",value:t.fullname,onChange:r}),Object(i.jsxs)(Ce.a,{variant:"outlined",className:c.fieldGender,children:[Object(i.jsx)(pe.a,{id:"gender",children:"Gender"}),Object(i.jsxs)(we.a,{lebelId:"gender",name:"gender",label:"Gender",value:t.gender,onChange:r,children:[Object(i.jsx)(ve.a,{value:"all",children:"All"}),Object(i.jsx)(ve.a,{value:"male",children:"Male"}),Object(i.jsx)(ve.a,{value:"female",children:"Female"})]})]}),Object(i.jsxs)(Ce.a,{variant:"outlined",className:c.fieldNationality,children:[Object(i.jsx)(pe.a,{id:"nationality",children:"Nationality"}),Object(i.jsxs)(we.a,{lebelId:"nationality",name:"nationality",label:"Nationality",value:t.nationality,onChange:r,children:[Object(i.jsx)(ve.a,{value:"all",children:"All"}),Object.entries(ne).map((function(e){var t=Object(d.a)(e,2),a=t[0],n=t[1];return Object(i.jsx)(ve.a,{value:a,children:n},a)}))]})]})]}),Object(i.jsx)(ye.a,{size:"small",startIcon:Object(i.jsx)(Fe.a,{}),onClick:n,children:"Clear"})]})},Ie=Object(O.a)((function(e){return Object(u.a)({root:{marginTop:e.spacing(4)},headContainer:{marginBottom:e.spacing(3)},filtersContainer:{marginBottom:e.spacing(3)}})})),Ee={fullname:"",gender:"all",nationality:"all"},Le=function(){var e=Ie(),t=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(!0),i=Object(d.a)(c,2),l=i[0],s=i[1],j=Object(r.useState)(!1),o=Object(d.a)(j,2),b=o[0],O=o[1];return Object(r.useEffect)((function(){!function(){var e=Object(fe.a)(xe.a.mark((function e(){var t,a,c,i;return xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),e.next=4,fetch("https://randomuser.me/api/?results=10");case 4:return t=e.sent,e.next=7,t.json();case 7:if(a=e.sent,c=a.results,!(i=a.error)){e.next=12;break}throw new Error(i);case 12:n(c),O(!1),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),O(!0);case 19:return e.prev=19,s(!1),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()()}),[]),{data:a,isLoading:l,isError:b}}(),a=function(){var e=Object(r.useState)(me),t=Object(d.a)(e,2),a=t[0],n=t[1];return Object(r.useEffect)((function(){localStorage.setItem("dataViewMode",a)}),[a]),[a,n]}(),n=Object(d.a)(a,2),c=n[0],l=n[1],s=Object(r.useState)(Ee),j=Object(d.a)(s,2),O=j[0],u=j[1],p=t.data.filter((function(e){return function(e,t){var a=e.first,n=void 0===a?"":a,c=e.last;return n.toLowerCase().includes(t.toLowerCase())||c.toLowerCase().includes(t.toLowerCase())}(e.name,O.fullname)})).filter((function(e){return t=e.gender,"all"===(a=O.gender)||t===a;var t,a})).filter((function(e){return t=e.nat,"all"===(a=O.nationality)||t===a;var t,a}));return Object(i.jsx)(h.a,{className:e.root,children:Object(i.jsxs)(x.a,{container:!0,children:[Object(i.jsx)(x.a,{item:!0,xs:12,className:e.headContainer,children:Object(i.jsxs)(g.a,{display:"flex",justifyContent:"space-between",children:[Object(i.jsx)(m.a,{variant:"h4",component:"h1",children:"Contacts"}),Object(i.jsx)(ue,{dataViewMode:c,setDataViewMode:l})]})}),Object(i.jsx)(x.a,{item:!0,xs:12,className:e.filtersContainer,children:Object(i.jsx)(ke,{filters:O,updateFilter:function(e,t){u((function(a){return Object(b.a)(Object(b.a)({},a),{},Object(o.a)({},e,t))}))},clearFilters:function(){u(Ee)}})}),Object(i.jsx)(x.a,{item:!0,xs:12,children:t.isLoading?Object(i.jsx)(f.a,{"data-testid":"contacts-loader"}):t.isError?Object(i.jsx)("div",{"data-testid":"contacts-error",children:"...error"}):c===de?Object(i.jsx)(ie,{data:p}):c===Oe?Object(i.jsx)("div",{"data-testid":"contacts-grid-container",children:"gird"}):null})]})})};function Ae(){return Object(i.jsx)("div",{children:Object(i.jsx)(Le,{})})}var Be=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,179)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))};j.a.render(Object(i.jsx)(l.a.StrictMode,{children:Object(i.jsx)(Ae,{})}),document.getElementById("root")),Be()},97:function(e,t,a){}},[[105,1,2]]]);
//# sourceMappingURL=main.2d6c1968.chunk.js.map