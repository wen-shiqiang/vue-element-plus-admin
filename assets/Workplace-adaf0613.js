import{_ as a}from"./avatar-759faa6f.js";import{v as e,x as t,y as s,a as l,d as n,r,q as d,z as o,o as c,c as i,f as p,e as u,w as m,t as x,A as f,F as v,B as y,i as g,C as w,k as _,s as h}from"./index-bebdc56d.js";import{a as k,E as $}from"./el-col-32752380.js";import{E as j}from"./el-skeleton-item-86e93e0a.js";import{E as b}from"./el-card-a5a961c6.js";import{E}from"./el-divider-6abc6fd7.js";import{E as C}from"./el-link-6937f247.js";import{_ as O}from"./CountTo.vue_vue_type_script_setup_true_lang-ce6a82f9.js";import{r as z,_ as A}from"./Echart.vue_vue_type_script_setup_true_lang-7edf2bd0.js";import{_ as D}from"./Highlight.vue_vue_type_script_lang-4af776cc.js";import{r as M}from"./index-491867cb.js";import"./debounce-1682f882.js";const N={"zh-CN":{justNow:"刚刚",invalid:"无效时间",past:a=>a.match(/\d/)?`${a}前`:a,future:a=>a.match(/\d/)?`${a}后`:a,month:(a,e)=>1===a?e?"上个月":"下个月":`${a} 个月`,year:(a,e)=>1===a?e?"去年":"明年":`${a} 年`,day:(a,e)=>1===a?e?"昨天":"明天":`${a} 天`,week:(a,e)=>1===a?e?"上周":"下周":`${a} 周`,hour:a=>`${a} 小时`,minute:a=>`${a} 分钟`,second:a=>`${a} 秒`},en:{justNow:"刚刚",invalid:"Invalid Date",past:a=>a.match(/\d/)?`${a} ago`:a,future:a=>a.match(/\d/)?`in ${a}`:a,month:(a,e)=>1===a?e?"last month":"next month":`${a} month${a>1?"s":""}`,year:(a,e)=>1===a?e?"last year":"next year":`${a} year${a>1?"s":""}`,day:(a,e)=>1===a?e?"yesterday":"tomorrow":`${a} day${a>1?"s":""}`,week:(a,e)=>1===a?e?"last week":"next week":`${a} week${a>1?"s":""}`,hour:a=>`${a} hour${a>1?"s":""}`,minute:a=>`${a} minute${a>1?"s":""}`,second:a=>`${a} second${a>1?"s":""}`}},q=a=>{const n=e(),r=t((()=>n.getCurrentLocale));return s(a,{messages:N[l(r).lang]})},B={class:"flex items-center"},I=p("img",{src:a,alt:"",class:"w-70px h-70px rounded-[50%] mr-20px"},null,-1),F={class:"text-20px"},H={class:"mt-10px text-14px text-gray-500"},L={class:"flex h-70px items-center justify-end lt-sm:mt-20px"},P={class:"px-8px text-right"},T={class:"text-14px text-gray-400 mb-20px"},W={class:"px-8px text-right"},G={class:"text-14px text-gray-400 mb-20px"},J={class:"px-8px text-right"},K={class:"text-14px text-gray-400 mb-20px"},Q={class:"flex justify-between"},R={class:"flex items-center"},S={class:"text-16px"},U={class:"mt-15px text-14px text-gray-400"},V={class:"mt-20px text-12px text-gray-400 flex justify-between"},X={class:"flex justify-between"},Y={class:"flex items-center"},Z=p("img",{src:a,alt:"",class:"w-35px h-35px rounded-[50%] mr-20px"},null,-1),aa={class:"text-14px"},ea={class:"mt-15px text-12px text-gray-400"},ta={class:"flex items-center"},sa=n({__name:"Workplace",setup(a){const e=r(!0);let t=d({project:0,access:0,todo:0});const s=async()=>{const a=await M.get({url:"/workplace/total"}).catch((()=>{}));a&&(t=Object.assign(t,a.data))};let n=d([]);const N=async()=>{const a=await M.get({url:"/workplace/project"}).catch((()=>{}));a&&(n=Object.assign(n,a.data))};let sa=d([]);const la=async()=>{const a=await M.get({url:"/workplace/dynamic"}).catch((()=>{}));a&&(sa=Object.assign(sa,a.data))};let na=d([]);const ra=async()=>{const a=await M.get({url:"/workplace/team"}).catch((()=>{}));a&&(na=Object.assign(na,a.data))};let da=d(z);const oa=async()=>{const a=await M.get({url:"/workplace/radar"}).catch((()=>{}));a&&(h(da,"radar.indicator",a.data.map((a=>({name:ca(a.name),max:a.max})))),h(da,"series",[{name:`xxx${ca("workplace.index")}`,type:"radar",data:[{value:a.data.map((a=>a.personal)),name:ca("workplace.personal")},{value:a.data.map((a=>a.team)),name:ca("workplace.team")}]}]))};(async()=>{await Promise.all([s(),N(),la(),ra(),oa()]),e.value=!1})();const{t:ca}=_();return(a,s)=>{const r=o("Icon");return c(),i(v,null,[p("div",null,[u(l(b),{shadow:"never"},{default:m((()=>[u(l(j),{loading:e.value,animated:""},{default:m((()=>[u(l(k),{gutter:20,justify:"space-between"},{default:m((()=>[u(l($),{xl:12,lg:12,md:12,sm:24,xs:24},{default:m((()=>[p("div",B,[I,p("div",null,[p("div",F,x(l(ca)("workplace.goodMorning"))+"，Archer，"+x(l(ca)("workplace.happyDay")),1),p("div",H,x(l(ca)("workplace.toady"))+"，20℃ - 32℃！ ",1)])])])),_:1}),u(l($),{xl:12,lg:12,md:12,sm:24,xs:24},{default:m((()=>[p("div",L,[p("div",P,[p("div",T,x(l(ca)("workplace.project")),1),u(l(O),{class:"text-20px","start-val":0,"end-val":l(t).project,duration:2600},null,8,["end-val"])]),u(l(E),{direction:"vertical"}),p("div",W,[p("div",G,x(l(ca)("workplace.toDo")),1),u(l(O),{class:"text-20px","start-val":0,"end-val":l(t).todo,duration:2600},null,8,["end-val"])]),u(l(E),{direction:"vertical","border-style":"dashed"}),p("div",J,[p("div",K,x(l(ca)("workplace.access")),1),u(l(O),{class:"text-20px","start-val":0,"end-val":l(t).access,duration:2600},null,8,["end-val"])])])])),_:1})])),_:1})])),_:1},8,["loading"])])),_:1})]),u(l(k),{class:"mt-20px",gutter:20,justify:"space-between"},{default:m((()=>[u(l($),{xl:16,lg:16,md:24,sm:24,xs:24,class:"mb-20px"},{default:m((()=>[u(l(b),{shadow:"never"},{header:m((()=>[p("div",Q,[p("span",null,x(l(ca)("workplace.project")),1),u(l(C),{type:"primary",underline:!1},{default:m((()=>[f(x(l(ca)("workplace.more")),1)])),_:1})])])),default:m((()=>[u(l(j),{loading:e.value,animated:""},{default:m((()=>[u(l(k),null,{default:m((()=>[(c(!0),i(v,null,y(l(n),((a,e)=>(c(),g(l($),{key:`card-${e}`,xl:8,lg:8,md:12,sm:24,xs:24},{default:m((()=>[u(l(b),{shadow:"hover"},{default:m((()=>[p("div",R,[u(r,{icon:a.icon,size:25,class:"mr-10px"},null,8,["icon"]),p("span",S,x(a.name),1)]),p("div",U,x(l(ca)(a.message)),1),p("div",V,[p("span",null,x(a.personal),1),p("span",null,x(l(w)(a.time,"yyyy-MM-dd")),1)])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1},8,["loading"])])),_:1}),u(l(b),{shadow:"never",class:"mt-20px"},{header:m((()=>[p("div",X,[p("span",null,x(l(ca)("workplace.dynamic")),1),u(l(C),{type:"primary",underline:!1},{default:m((()=>[f(x(l(ca)("workplace.more")),1)])),_:1})])])),default:m((()=>[u(l(j),{loading:e.value,animated:""},{default:m((()=>[(c(!0),i(v,null,y(l(sa),((a,e)=>(c(),i("div",{key:`dynamics-${e}`},[p("div",Y,[Z,p("div",null,[p("div",aa,[u(l(D),{keys:a.keys.map((a=>l(ca)(a)))},{default:m((()=>[f(x(l(ca)("workplace.pushCode")),1)])),_:2},1032,["keys"])]),p("div",ea,x(l(q)(a.time)),1)])]),u(l(E))])))),128))])),_:1},8,["loading"])])),_:1})])),_:1}),u(l($),{xl:8,lg:8,md:24,sm:24,xs:24,class:"mb-20px"},{default:m((()=>[u(l(b),{shadow:"never"},{header:m((()=>[p("span",null,x(l(ca)("workplace.shortcutOperation")),1)])),default:m((()=>[u(l(j),{loading:e.value,animated:""},{default:m((()=>[u(l(k),null,{default:m((()=>[(c(),i(v,null,y(9,(a=>u(l($),{key:`card-${a}`,xl:12,lg:12,md:12,sm:24,xs:24,class:"mb-10px"},{default:m((()=>[u(l(C),{type:"default",underline:!1},{default:m((()=>[f(x(l(ca)("workplace.operation"))+x(a),1)])),_:2},1024)])),_:2},1024))),64))])),_:1})])),_:1},8,["loading"])])),_:1}),u(l(b),{shadow:"never",class:"mt-20px"},{header:m((()=>[p("span",null,"xx"+x(l(ca)("workplace.index")),1)])),default:m((()=>[u(l(j),{loading:e.value,animated:""},{default:m((()=>[u(l(A),{options:l(da),height:400},null,8,["options"])])),_:1},8,["loading"])])),_:1}),u(l(b),{shadow:"never",class:"mt-20px"},{header:m((()=>[p("span",null,x(l(ca)("workplace.team")),1)])),default:m((()=>[u(l(j),{loading:e.value,animated:""},{default:m((()=>[u(l(k),null,{default:m((()=>[(c(!0),i(v,null,y(l(na),(a=>(c(),g(l($),{key:`team-${a.name}`,span:12,class:"mb-20px"},{default:m((()=>[p("div",ta,[u(r,{icon:a.icon,class:"mr-10px"},null,8,["icon"]),u(l(C),{type:"default",underline:!1},{default:m((()=>[f(x(a.name),1)])),_:2},1024)])])),_:2},1024)))),128))])),_:1})])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})],64)}}});export{sa as default};
