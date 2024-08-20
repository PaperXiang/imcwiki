import{d as m,a9 as k,J as c,h as d,o as n,c as l,m as e,r as h,Q as g,n as v,_,w as p,p as E,aa as w,ab as f,a as u}from"./chunks/framework.CP2k8lQB.js";const b=m({name:"CodePreview",props:{code:{type:String,required:!0},lang:{type:String,required:!0},meta:{type:String,required:!0}},setup(t){const i=d(),s=d(0),a=d(!1);return{codeEl:i,height:s,copied:a,toggleCode:()=>{const o=i.value?i.value.offsetHeight:0;s.value=s.value===0?o:0},copyCode:()=>{if(!a.value){try{navigator.clipboard.writeText(t.code)}catch(o){console.log(o)}a.value=!0,setTimeout(()=>{a.value=!1},1e3)}}}}}),y=(t,i)=>{const s=t.__vccOpts||t;for(const[a,o]of i)s[a]=o;return s},C={class:"mdp-demo__preview"},x={class:"mdp-demo__toolbar"},B={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",height:"20",width:"20",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24"},S=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4"},null,-1),q=[S],A={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",height:"20",width:"20",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24"},P=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2"},null,-1),M=[P],T=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"ionicon",viewBox:"0 0 512 512"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"46",d:"M160 368L32 256l128-112M352 368l128-112-128-112M304 96l-96 320"})],-1),V=[T],D={ref:"codeEl"};function F(t,i,s,a,o,J){return n(),l("div",{class:v(["mdp-demo",t.height>0&&"is-expanded"])},[e("div",C,[h(t.$slots,"default")]),e("div",x,[e("div",{class:"mdp-demo__btn mdp-demo__btn-copy",onClick:i[0]||(i[0]=(...r)=>t.copyCode&&t.copyCode(...r))},[t.copied?(n(),l("svg",B,q)):(n(),l("svg",A,M))]),e("div",{class:"mdp-demo__btn mdp-demo__btn-code",onClick:i[1]||(i[1]=(...r)=>t.toggleCode&&t.toggleCode(...r))},V)]),e("div",{class:"mdp-demo__code",style:g({height:t.height+"px",visibility:t.height>0?"visible":"hidden"})},[e("div",D,[h(t.$slots,"code")],512)],4)],2)}const z=y(b,[["render",F]]),I=m({name:"CodePreviewWrapper",props:{code:{type:String,required:!0},lang:{type:String,required:!0},meta:{type:String,default:""},component:{type:String,default:"CodePreview"}},setup(t,i){const s=k().appContext.app.component(t.component),a=s||z;return()=>c(a,{code:decodeURIComponent(t.code),lang:decodeURIComponent(t.lang),meta:decodeURIComponent(t.meta)},{default:i.slots.default,code:i.slots.code})}}),N={},$={class:"flex-row-center rounded-lg w-full h-40 bg-blue-500"};function j(t,i){return n(),l("div",$,"vue 组件预览测试")}const H=_(N,[["render",j]]),R=w('<h1 id="功能测试页" tabindex="-1">功能测试页 <a class="header-anchor" href="#功能测试页" aria-label="Permalink to &quot;功能测试页&quot;">​</a></h1><h2 id="medium-zoom" tabindex="-1">medium-zoom <a class="header-anchor" href="#medium-zoom" aria-label="Permalink to &quot;medium-zoom&quot;">​</a></h2><p><img src="'+f+'" alt="medium-zoom"></p><h2 id="vite-plugin-markdown-preview" tabindex="-1">vite-plugin-markdown-preview <a class="header-anchor" href="#vite-plugin-markdown-preview" aria-label="Permalink to &quot;vite-plugin-markdown-preview&quot;">​</a></h2>',4),U=e("div",{class:"language-vue vp-adaptive-theme line-numbers-mode"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"vue"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),e("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),u(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),e("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," class"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"flex-row-center rounded-lg w-full h-40 bg-blue-500"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">vue 组件预览测试</"),e("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),u(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),e("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])]),e("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br")])],-1),Q=JSON.parse('{"title":"功能测试页","description":"","frontmatter":{},"headers":[],"relativePath":"test.md","filePath":"test.md","lastUpdated":1724155322000}'),O={name:"test.md"},W=Object.assign(O,{setup(t){return(i,s)=>(n(),l("div",null,[R,c(E(I),{lang:"vue",meta:"preview",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22flex-row-center%20rounded-lg%20w-full%20h-40%20bg-blue-500%22%3Evue%20%E7%BB%84%E4%BB%B6%E9%A2%84%E8%A7%88%E6%B5%8B%E8%AF%95%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E",component:"CodePreview"},{code:p(()=>[U]),default:p(()=>[c(H)]),_:1})]))}});export{Q as __pageData,W as default};
