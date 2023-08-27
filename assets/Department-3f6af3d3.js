import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-9e93c95d.js";import{_ as a}from"./Search.vue_vue_type_script_setup_true_lang-043528c0.js";import{_ as t}from"./Dialog.vue_vue_type_style_index_0_lang-8294603f.js";import{d as l,r as o,q as s,e as r,F as i,a as n,o as m,c as u,w as p,f as d,A as c,t as f,L as _,i as v,Q as g,K as j,k as y}from"./index-7477c05f.js";import{E as b}from"./el-button-124be40d.js";import{E as h}from"./el-tag-1a2ededc.js";import{_ as D}from"./Table.vue_vue_type_script_lang-2ee8e79d.js";import{g as x,a as w,d as S,s as k}from"./index-2fdccfc4.js";import{u as P}from"./useTable-ffff88e6.js";import{_ as C}from"./Write.vue_vue_type_script_setup_true_lang-d04fa57d.js";import{_ as R}from"./Detail.vue_vue_type_script_setup_true_lang-3615858a.js";import{u as z}from"./useCrudSchemas-2605178a.js";import"./el-card-0fcbb5fa.js";import"./el-popper-a621f9bb.js";import"./constants-734cca61.js";import"./Form-b12ebed4.js";import"./el-col-391f73f2.js";import"./el-input-10c0bbfb.js";import"./use-form-item-5dfce446.js";import"./use-form-common-props-3de26c1f.js";import"./tsxHelper-16c14f77.js";import"./debounce-ed510409.js";import"./el-input-number-59433400.js";import"./el-divider-8c08a602.js";import"./InputPassword-23b379fe.js";import"./style.css_vue_type_style_index_0_src_true_lang-3200f5e6.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-ea7fc409.js";import"./aria-ecee1d93.js";import"./index-394fdc52.js";import"./useForm-882c078b.js";import"./useIcon-623a852a.js";import"./el-overlay-ea4574e8.js";import"./vnode-abc17e97.js";import"./refs-100ac577.js";import"./el-image-viewer-8d6ac280.js";import"./el-dropdown-item-bc721e0c.js";import"./index-7c8c370b.js";import"./el-message-box-e13147aa.js";import"./useValidator-08c6d7fe.js";import"./Descriptions-0a148d97.js";import"./tree-b59d36bb.js";const E={class:"mb-10px"};function T(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!j(e)}const L=l({__name:"Department",setup(l){const j=o([]),{tableRegister:L,tableState:N,tableMethods:Y}=P({fetchDataApi:async()=>{const{currentPage:e,pageSize:a}=N,t=await w({pageIndex:n(e),pageSize:n(a),...n(q)});return{list:t.data.list,total:t.data.total}},fetchDelApi:async()=>!!(await S(n(j)))}),{loading:A,dataList:F,total:H,currentPage:I,pageSize:M}=N,{getList:V,getElTableExpose:K,delList:U}=Y,q=o({}),J=e=>{q.value=e,V()},{t:O}=y(),Q=s([{field:"selection",search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0},table:{type:"selection"}},{field:"index",label:O("tableDemo.index"),type:"index",search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0}},{field:"id",label:O("userDemo.departmentName"),table:{slots:{default:e=>r(i,null,[e.row.departmentName])}},form:{component:"TreeSelect",componentProps:{nodeKey:"id",props:{label:"departmentName"}},optionApi:async()=>(await x()).data.list},detail:{slots:{default:e=>r(i,null,[e.departmentName])}}},{field:"status",label:O("userDemo.status"),search:{hidden:!0},table:{slots:{default:e=>{const a=e.row.status;return r(i,null,[r(h,{type:0===a?"danger":"success"},{default:()=>[O(1===a?"userDemo.enable":"userDemo.disable")]})])}}},form:{component:"Select",componentProps:{options:[{value:0,label:O("userDemo.disable")},{value:1,label:O("userDemo.enable")}]}},detail:{slots:{default:e=>r(i,null,[r(h,{type:0===e.status?"danger":"success"},{default:()=>[1===e.status?O("userDemo.enable"):O("userDemo.disable")]})])}}},{field:"createTime",label:O("tableDemo.displayTime"),search:{hidden:!0},form:{component:"DatePicker",componentProps:{type:"datetime",valueFormat:"YYYY-MM-DD HH:mm:ss"}}},{field:"remark",label:O("userDemo.remark"),search:{hidden:!0},form:{component:"Input",componentProps:{type:"textarea",rows:5},colProps:{span:24}},detail:{slots:{default:e=>r(i,null,[e.remark])}}},{field:"action",width:"260px",label:O("tableDemo.action"),search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0},table:{slots:{default:e=>{let a,t,l;return r(i,null,[r(b,{type:"primary",onClick:()=>te(e.row,"edit")},T(a=O("exampleDemo.edit"))?a:{default:()=>[a]}),r(b,{type:"success",onClick:()=>te(e.row,"detail")},T(t=O("exampleDemo.detail"))?t:{default:()=>[t]}),r(b,{type:"danger",onClick:()=>ae(e.row)},T(l=O("exampleDemo.del"))?l:{default:()=>[l]})])}}}}]),{allSchemas:W}=z(Q),G=o(!1),Z=o(""),B=o(null),X=o(""),$=()=>{Z.value=O("exampleDemo.add"),B.value=null,G.value=!0,X.value=""},ee=o(!1),ae=async e=>{const a=await K();j.value=e?[e.id]:(null==a?void 0:a.getSelectionRows().map((e=>e.id)))||[],ee.value=!0,await U(n(j).length).finally((()=>{ee.value=!1}))},te=(e,a)=>{Z.value=O("edit"===a?"exampleDemo.edit":"exampleDemo.detail"),X.value=a,B.value=e,G.value=!0},le=o(),oe=o(!1),se=async()=>{const e=n(le),a=await(null==e?void 0:e.submit());if(a){oe.value=!0;await k(a).catch((()=>{})).finally((()=>{oe.value=!1}))&&(G.value=!1,I.value=1,V())}};return(l,o)=>(m(),u(i,null,[r(n(e),null,{default:p((()=>[r(n(a),{schema:n(W).searchSchema,onSearch:J,onReset:J},null,8,["schema"]),d("div",E,[r(n(b),{type:"primary",onClick:$},{default:p((()=>[c(f(n(O)("exampleDemo.add")),1)])),_:1}),r(n(b),{loading:ee.value,type:"danger",onClick:o[0]||(o[0]=e=>ae(null))},{default:p((()=>[c(f(n(O)("exampleDemo.del")),1)])),_:1},8,["loading"])]),r(n(D),{pageSize:n(M),"onUpdate:pageSize":o[1]||(o[1]=e=>_(M)?M.value=e:null),currentPage:n(I),"onUpdate:currentPage":o[2]||(o[2]=e=>_(I)?I.value=e:null),columns:n(W).tableColumns,data:n(F),loading:n(A),pagination:{total:n(H)},onRegister:n(L)},null,8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1}),r(n(t),{modelValue:G.value,"onUpdate:modelValue":o[4]||(o[4]=e=>G.value=e),title:Z.value},{footer:p((()=>["detail"!==X.value?(m(),v(n(b),{key:0,type:"primary",loading:oe.value,onClick:se},{default:p((()=>[c(f(n(O)("exampleDemo.save")),1)])),_:1},8,["loading"])):g("",!0),r(n(b),{onClick:o[3]||(o[3]=e=>G.value=!1)},{default:p((()=>[c(f(n(O)("dialogDemo.close")),1)])),_:1})])),default:p((()=>["detail"!==X.value?(m(),v(C,{key:0,ref_key:"writeRef",ref:le,"form-schema":n(W).formSchema,"current-row":B.value},null,8,["form-schema","current-row"])):g("",!0),"detail"===X.value?(m(),v(R,{key:1,"detail-schema":n(W).detailSchema,"current-row":B.value},null,8,["detail-schema","current-row"])):g("",!0)])),_:1},8,["modelValue","title"])],64))}});export{L as default};
