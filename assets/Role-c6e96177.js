import{r as e}from"./index-491867cb.js";import{u as t}from"./useTable-014e51ef.js";import{d as a,q as l,e as o,F as s,r,o as i,c as m,w as u,a as p,f as n,A as d,t as _,i as c,Q as f,K as j,k as v}from"./index-bebdc56d.js";import{_ as y}from"./Table.vue_vue_type_script_lang-96b31b98.js";import{E as g}from"./el-button-342ce7eb.js";import{E as b}from"./el-tag-7c29a45c.js";import{_ as x}from"./Search.vue_vue_type_script_setup_true_lang-b47957f3.js";import{_ as D}from"./ContentWrap.vue_vue_type_script_setup_true_lang-062b6fda.js";import{_ as w}from"./Write.vue_vue_type_script_setup_true_lang-517e0207.js";import{_ as k}from"./Dialog.vue_vue_type_style_index_0_lang-18ec599d.js";import"./el-message-box-5036bc70.js";import"./el-input-15300def.js";import"./use-form-item-3356765c.js";import"./constants-b3c33fae.js";import"./use-form-common-props-6e612c52.js";import"./el-popper-3c4702ae.js";import"./el-overlay-ff3e506c.js";import"./tsxHelper-cadce9f8.js";import"./debounce-1682f882.js";import"./vnode-090fdf99.js";import"./aria-ecee1d93.js";import"./el-image-viewer-d6cc3009.js";import"./el-dropdown-item-f0f9fff1.js";import"./refs-9c99b8a7.js";import"./Form-319e0866.js";import"./el-col-32752380.js";import"./el-input-number-f40096fa.js";import"./el-divider-6abc6fd7.js";import"./InputPassword-ccc57411.js";import"./style.css_vue_type_style_index_0_src_true_lang-fa22cbe7.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-d9778793.js";import"./index-75aa1a46.js";import"./useForm-cb407544.js";import"./useIcon-7dd6be58.js";import"./el-card-a5a961c6.js";import"./useValidator-3ed03329.js";import"./index-64728802.js";import"./tree-b59d36bb.js";const h={class:"mb-10px"};function R(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!j(e)}const C=a({__name:"Role",setup(a){const{t:j}=v(),{tableRegister:C,tableState:N,tableMethods:T}=t({fetchDataApi:async()=>{const t=await e.get({url:"/role/table"});return{list:t.data.list||[],total:t.data.total}}}),{dataList:E,loading:S,total:V}=N,{getList:F}=T,I=l([{field:"index",label:j("userDemo.index"),type:"index"},{field:"roleName",label:j("role.roleName")},{field:"role",label:j("role.role")},{field:"status",label:j("menu.status"),slots:{default:e=>o(s,null,[o(b,{type:0===e.row.status?"danger":"success"},{default:()=>[1===e.row.status?j("userDemo.enable"):j("userDemo.disable")]})])}},{field:"createTime",label:j("tableDemo.displayTime")},{field:"remark",label:j("userDemo.remark")},{field:"action",label:j("userDemo.action"),width:240,slots:{default:e=>{let t,a;const l=e.row;return o(s,null,[o(g,{type:"primary",onClick:()=>M(l,"edit")},R(t=j("exampleDemo.edit"))?t:{default:()=>[t]}),o(g,{type:"danger"},R(a=j("exampleDemo.del"))?a:{default:()=>[a]})])}}}]),L=l([{field:"roleName",label:j("role.roleName"),component:"Input"}]),q=r({}),A=e=>{q.value=e,F()},H=r(!1),J=r(""),K=r(),O=r(""),W=r(),G=r(!1),M=(e,t)=>{J.value=j("edit"===t?"exampleDemo.edit":"exampleDemo.detail"),O.value=t,K.value=e,H.value=!0},P=()=>{J.value=j("exampleDemo.add"),K.value=void 0,H.value=!0,O.value=""},Q=async()=>{const e=p(W);await(null==e?void 0:e.submit())&&(G.value=!0,setTimeout((()=>{G.value=!1,H.value=!1}),1e3))};return(e,t)=>(i(),m(s,null,[o(p(D),null,{default:u((()=>[o(p(x),{schema:L,onReset:A,onSearch:A},null,8,["schema"]),n("div",h,[o(p(g),{type:"primary",onClick:P},{default:u((()=>[d(_(p(j)("exampleDemo.add")),1)])),_:1})]),o(p(y),{columns:I,"default-expand-all":"","node-key":"id",data:p(E),loading:p(S),pagination:{total:p(V)},onRegister:p(C)},null,8,["columns","data","loading","pagination","onRegister"])])),_:1}),o(p(k),{modelValue:H.value,"onUpdate:modelValue":t[1]||(t[1]=e=>H.value=e),title:J.value},{footer:u((()=>["detail"!==O.value?(i(),c(p(g),{key:0,type:"primary",loading:G.value,onClick:Q},{default:u((()=>[d(_(p(j)("exampleDemo.save")),1)])),_:1},8,["loading"])):f("",!0),o(p(g),{onClick:t[0]||(t[0]=e=>H.value=!1)},{default:u((()=>[d(_(p(j)("dialogDemo.close")),1)])),_:1})])),default:u((()=>["detail"!==O.value?(i(),c(w,{key:0,ref_key:"writeRef",ref:W,"current-row":K.value},null,8,["current-row"])):f("",!0)])),_:1},8,["modelValue","title"])],64))}});export{C as default};
