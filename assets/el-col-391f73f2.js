import{ab as e,d as t,ah as s,x as a,aj as u,o as l,i as r,w as n,al as p,n as o,a as c,W as f,$ as d,am as m,aw as g,ad as i,bf as b,ao as y,aU as $,az as h}from"./index-7477c05f.js";const j=Symbol("rowContextKey"),v=e({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:["start","center","end","space-around","space-between","space-evenly"],default:"start"},align:{type:String,values:["top","middle","bottom"]}}),w=t({name:"ElRow"});const x=g(m(t({...w,props:v,setup(e){const t=e,m=s("row"),g=a((()=>t.gutter));u(j,{gutter:g});const i=a((()=>{const e={};return t.gutter?(e.marginRight=e.marginLeft=`-${t.gutter/2}px`,e):e})),b=a((()=>[m.b(),m.is(`justify-${t.justify}`,"start"!==t.justify),m.is(`align-${t.align}`,!!t.align)]));return(e,t)=>(l(),r(d(e.tag),{class:o(c(b)),style:f(c(i))},{default:n((()=>[p(e.$slots,"default")])),_:3},8,["class","style"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]])),N=e({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:i([Number,Object]),default:()=>b({})},sm:{type:i([Number,Object]),default:()=>b({})},md:{type:i([Number,Object]),default:()=>b({})},lg:{type:i([Number,Object]),default:()=>b({})},xl:{type:i([Number,Object]),default:()=>b({})}}),E=t({name:"ElCol"});const O=g(m(t({...E,props:N,setup(e){const t=e,{gutter:u}=y(j,{gutter:a((()=>0))}),m=s("col"),g=a((()=>{const e={};return u.value&&(e.paddingLeft=e.paddingRight=u.value/2+"px"),e})),i=a((()=>{const e=[];["span","offset","pull","push"].forEach((s=>{const a=t[s];$(a)&&("span"===s?e.push(m.b(`${t[s]}`)):a>0&&e.push(m.b(`${s}-${t[s]}`)))}));return["xs","sm","md","lg","xl"].forEach((s=>{$(t[s])?e.push(m.b(`${s}-${t[s]}`)):h(t[s])&&Object.entries(t[s]).forEach((([t,a])=>{e.push("span"!==t?m.b(`${s}-${t}-${a}`):m.b(`${s}-${a}`))}))})),u.value&&e.push(m.is("guttered")),[m.b(),e]}));return(e,t)=>(l(),r(d(e.tag),{class:o(c(i)),style:f(c(g))},{default:n((()=>[p(e.$slots,"default")])),_:3},8,["class","style"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]));export{O as E,x as a};
