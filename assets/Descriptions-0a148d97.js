import{d as e,ao as l,au as t,ah as s,J as a,ab as r,a as n,o,c as i,f as c,F as d,B as p,i as u,e as m,am as f,aL as b,as as v,aj as y,x as g,n as h,al as x,A as w,t as k,Q as S,aw as $,ax as _,b as j,O as D,r as E,I as N,Z as z,b1 as O,P as A,bn as C,j as I,_ as W}from"./index-7477c05f.js";import{i as B,E as P}from"./el-popper-a621f9bb.js";import{E as q}from"./index-394fdc52.js";import{g as F,f as G}from"./vnode-abc17e97.js";import{u as J}from"./use-form-common-props-3de26c1f.js";const L=Symbol("elDescriptions");var M=e({name:"ElDescriptionsCell",props:{cell:{type:Object},tag:{type:String},type:{type:String}},setup:()=>({descriptions:l(L,{})}),render(){var e,l,r,n,o,i;const c=F(this.cell),{border:d,direction:p}=this.descriptions,u="vertical"===p,m=(null==(r=null==(l=null==(e=this.cell)?void 0:e.children)?void 0:l.label)?void 0:r.call(l))||c.label,f=null==(i=null==(o=null==(n=this.cell)?void 0:n.children)?void 0:o.default)?void 0:i.call(o),b=c.span,v=c.align?`is-${c.align}`:"",y=c.labelAlign?`is-${c.labelAlign}`:v,g=c.className,h=c.labelClassName,x={width:t(c.width),minWidth:t(c.minWidth)},w=s("descriptions");switch(this.type){case"label":return a(this.tag,{style:x,class:[w.e("cell"),w.e("label"),w.is("bordered-label",d),w.is("vertical-label",u),y,h],colSpan:u?b:1},m);case"content":return a(this.tag,{style:x,class:[w.e("cell"),w.e("content"),w.is("bordered-content",d),w.is("vertical-content",u),v,g],colSpan:u?b:2*b-1},f);default:return a("td",{style:x,class:[w.e("cell"),v],colSpan:b},[B(m)?void 0:a("span",{class:[w.e("label"),h]},m),a("span",{class:[w.e("content"),g]},f)])}}});const Q=r({row:{type:Array,default:()=>[]}}),R={key:1},Z=e({name:"ElDescriptionsRow"});var H=f(e({...Z,props:Q,setup(e){const t=l(L,{});return(e,l)=>"vertical"===n(t).direction?(o(),i(d,{key:0},[c("tr",null,[(o(!0),i(d,null,p(e.row,((e,l)=>(o(),u(n(M),{key:`tr1-${l}`,cell:e,tag:"th",type:"label"},null,8,["cell"])))),128))]),c("tr",null,[(o(!0),i(d,null,p(e.row,((e,l)=>(o(),u(n(M),{key:`tr2-${l}`,cell:e,tag:"td",type:"content"},null,8,["cell"])))),128))])],64)):(o(),i("tr",R,[(o(!0),i(d,null,p(e.row,((e,l)=>(o(),i(d,{key:`tr3-${l}`},[n(t).border?(o(),i(d,{key:0},[m(n(M),{cell:e,tag:"td",type:"label"},null,8,["cell"]),m(n(M),{cell:e,tag:"td",type:"content"},null,8,["cell"])],64)):(o(),u(n(M),{key:1,cell:e,tag:"td",type:"both"},null,8,["cell"]))],64)))),128))]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/descriptions-row.vue"]]);const K=r({border:{type:Boolean,default:!1},column:{type:Number,default:3},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},size:b,title:{type:String,default:""},extra:{type:String,default:""}}),T=e({name:"ElDescriptions"});var U=f(e({...T,props:K,setup(e){const l=e,t=s("descriptions"),a=J(),r=v();y(L,l);const m=g((()=>[t.b(),t.m(a.value)])),f=(e,l,t,s=!1)=>(e.props||(e.props={}),l>t&&(e.props.span=t),s&&(e.props.span=l),e),b=()=>{var e;const t=G(null==(e=r.default)?void 0:e.call(r)).filter((e=>{var l;return"ElDescriptionsItem"===(null==(l=null==e?void 0:e.type)?void 0:l.name)})),s=[];let a=[],n=l.column,o=0;return t.forEach(((e,r)=>{var i;const c=(null==(i=e.props)?void 0:i.span)||1;if(r<t.length-1&&(o+=c>n?n:c),r===t.length-1){const t=l.column-o%l.column;return a.push(f(e,t,n,!0)),void s.push(a)}c<n?(n-=c,a.push(e)):(a.push(f(e,c,n)),s.push(a),n=l.column,a=[])})),s};return(e,l)=>(o(),i("div",{class:h(n(m))},[e.title||e.extra||e.$slots.title||e.$slots.extra?(o(),i("div",{key:0,class:h(n(t).e("header"))},[c("div",{class:h(n(t).e("title"))},[x(e.$slots,"title",{},(()=>[w(k(e.title),1)]))],2),c("div",{class:h(n(t).e("extra"))},[x(e.$slots,"extra",{},(()=>[w(k(e.extra),1)]))],2)],2)):S("v-if",!0),c("div",{class:h(n(t).e("body"))},[c("table",{class:h([n(t).e("table"),n(t).is("bordered",e.border)])},[c("tbody",null,[(o(!0),i(d,null,p(b(),((e,l)=>(o(),u(H,{key:l,row:e},null,8,["row"])))),128))])],2)],2)],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/description.vue"]]),V=e({name:"ElDescriptionsItem",props:{label:{type:String,default:""},span:{type:Number,default:1},width:{type:[String,Number],default:""},minWidth:{type:[String,Number],default:""},align:{type:String,default:"left"},labelAlign:{type:String,default:""},className:{type:String,default:""},labelClassName:{type:String,default:""}}});const X=$(U,{DescriptionsItem:V}),Y=_(V),ee=j(),le=g((()=>ee.getMobile)),{getPrefixCls:te}=I(),se=te("descriptions"),ae=W(e({name:"Descriptions",props:{title:D.string.def(""),message:D.string.def(""),collapse:D.bool.def(!0),border:D.bool.def(!0),column:D.number.def(2),size:D.oneOf(["large","default","small"]).def("default"),direction:D.oneOf(["horizontal","vertical"]).def("horizontal"),extra:D.string.def(""),schema:{type:Array,default:()=>[]},data:{type:Object,default:()=>({})}},setup(e,{slots:l,attrs:t}){const s=g((()=>{const l=["title","message","collapse","schema","data","class"],s={...t,...e};for(const e in s)-1!==l.indexOf(e)&&delete s[e];return n(le)&&(s.direction="vertical"),s})),a=E(!0),r=()=>{e.collapse&&(a.value=!n(a))};return()=>m("div",{class:[se,"bg-[var(--el-color-white)] dark:bg-[var(--el-bg-color)] dark:border-[var(--el-border-color)] dark:border-1px"]},[e.title?m("div",{class:[`${se}-header`,"relative h-50px flex justify-between items-center layout-border__bottom px-10px cursor-pointer"],onClick:r},[m("div",{class:[`${se}-header__title`,"relative font-18px font-bold ml-10px"]},[m("div",{class:"flex items-center"},[e.title,e.message?m(P,{content:e.message,placement:"right"},{default:()=>[m(N,{icon:"bi:question-circle-fill",class:"ml-5px",size:14},null)]}):null])]),e.collapse?m(N,{icon:a.value?"ep:arrow-down":"ep:arrow-up"},null):null]):null,m(q,null,{default:()=>[z(m("div",{class:[`${se}-content`,"p-20px"]},[m(X,n(s),{extra:()=>l.extra?l.extra():e.extra,default:()=>e.schema.map((l=>m(Y,A({key:l.field},(e=>{const l=["field"],t={...e};for(const s in t)-1!==l.indexOf(s)&&delete t[s];return t})(l)),{label:()=>{var e,t;return(null==(e=l.slots)?void 0:e.label)?null==(t=l.slots)?void 0:t.label(l):l.label},default:()=>{var t,s;return(null==(t=l.slots)?void 0:t.default)?null==(s=l.slots)?void 0:s.default(e.data):C(e.data,l.field)}})))})]),[[O,n(a)]])]})])}}),[["__scopeId","data-v-74099e74"]]);export{ae as D};
