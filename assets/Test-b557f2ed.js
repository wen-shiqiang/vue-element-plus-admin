import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-9e93c95d.js";import{k as t,d8 as a,d as s,r,z as d,Y as l,o as u,i as p,w as i,e as n,A as o,a as m,Z as f,Q as _}from"./index-7477c05f.js";import{E as y}from"./el-button-124be40d.js";import{E as c}from"./el-divider-8c08a602.js";import{E as j,a as v}from"./el-col-391f73f2.js";import"./el-card-0fcbb5fa.js";import"./el-popper-a621f9bb.js";import"./constants-734cca61.js";import"./use-form-item-5dfce446.js";import"./use-form-common-props-3de26c1f.js";const w=e=>{const{t:s}=t(),r=a.currentRoute.value.meta.permission||[];if(!e)throw new Error(s("permission.hasPermission"));return!!r.includes(e)},g=s({__name:"Test",setup(t){const a=r("add");return setTimeout((()=>{a.value="view"}),3e3),(t,s)=>{const r=d("Permission"),g=l("hasPermi");return u(),p(m(e),null,{default:i((()=>[n(m(c),null,{default:i((()=>[o("组件方式判断（已经全局注册，支持动态修改）")])),_:1}),n(m(v),{gutter:20},{default:i((()=>[n(m(j),{span:8},{default:i((()=>[o(" 新增权限： "),n(r,{permission:"add"},{default:i((()=>[n(m(y),{type:"primary"},{default:i((()=>[o(" Add ")])),_:1})])),_:1})])),_:1}),n(m(j),{span:8},{default:i((()=>[o(" 删除权限： "),n(r,{permission:"delete"},{default:i((()=>[n(m(y),{type:"danger"},{default:i((()=>[o(" Delete ")])),_:1})])),_:1})])),_:1}),n(m(j),{span:8},{default:i((()=>[o(" 3秒后切换查看权限： "),n(r,{permission:a.value},{default:i((()=>[n(m(y),{type:"primary"},{default:i((()=>[o(" View ")])),_:1})])),_:1},8,["permission"])])),_:1})])),_:1}),n(m(c),null,{default:i((()=>[o("指令方式判断（已经全局注册，不支持动态修改）")])),_:1}),n(m(v),{gutter:20},{default:i((()=>[n(m(j),{span:8},{default:i((()=>[o(" 新增权限： "),f((u(),p(m(y),{type:"primary"},{default:i((()=>[o(" Add ")])),_:1})),[[g,"add"]])])),_:1}),n(m(j),{span:8},{default:i((()=>[o(" 删除权限： "),f((u(),p(m(y),{type:"danger"},{default:i((()=>[o(" Delete ")])),_:1})),[[g,"delete"]])])),_:1}),n(m(j),{span:8},{default:i((()=>[o(" 3秒后切换查看权限（无法动态修改）： "),f((u(),p(m(y),{type:"primary"},{default:i((()=>[o(" View ")])),_:1})),[[g,a.value]])])),_:1})])),_:1}),n(m(c),null,{default:i((()=>[o("函数方式判断")])),_:1}),n(m(v),{gutter:20},{default:i((()=>[n(m(j),{span:8},{default:i((()=>[o(" 新增权限： "),m(w)("add")?(u(),p(m(y),{key:0,type:"primary"},{default:i((()=>[o(" Add ")])),_:1})):_("",!0)])),_:1}),n(m(j),{span:8},{default:i((()=>[o(" 删除权限： "),m(w)("delete")?(u(),p(m(y),{key:0,type:"danger"},{default:i((()=>[o(" Delete ")])),_:1})):_("",!0)])),_:1}),n(m(j),{span:8},{default:i((()=>[o(" 3秒后切换查看权限： "),m(w)(m(a.value))?(u(),p(m(y),{key:0,type:"primary"},{default:i((()=>[o(" View ")])),_:1})):_("",!0)])),_:1})])),_:1})])),_:1})}}});export{g as default};
