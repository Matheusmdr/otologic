import{j as e,Y as d,r as m,a as s}from"./app-BXuVAL_W.js";import{c as n,k as p,B as x}from"./react-icons.esm-C9lK-ZhB.js";import{M as f}from"./main-layout-CZ73ntVs.js";import{C as t}from"./chevron-right-Cj-h3P_X.js";import{C as h}from"./chevron-left-CkTFBZxd.js";import{f as u}from"./format-D9VrrLpI.js";import{p as j}from"./pt-BR-CpRlu0-m.js";import"./toaster-DUgzrF9U.js";function C({news:r}){var l,i;const{data:o}=r;return e.jsxs(f,{children:[e.jsx(d,{children:e.jsx("title",{children:"Notícias"})}),e.jsxs("main",{className:"space-y-10 bg-white py-10 md:space-y-20 md:py-20",children:[e.jsx("section",{className:"flex flex-col gap-10",children:e.jsxs("div",{className:"mx-auto flex w-11/12 max-w-5xl flex-col justify-center gap-2 md:gap-6",children:[e.jsx("div",{className:"mx-auto flex w-11/12 max-w-7xl flex-col justify-center gap-10",children:e.jsx("div",{"data-aos":"fade-up",className:n(p({variant:"default"}),"mx-auto w-fit rounded-full border !border-blue-primary !bg-transparent px-4 py-1"),children:e.jsx("h2",{className:"mx-auto w-fit px-2 py-1 text-center text-xl font-bold text-blue-primary",children:"Notícias"})})}),e.jsx("p",{"data-aos":"fade-up","data-aos-delay":"200",className:"mx-auto max-w-2xl text-center text-base font-medium text-[#757575]",children:"Fique por dentro de todas as notícias sobre cuidados com a sua saúde!"}),e.jsx("div",{children:o.map((a,c)=>e.jsxs(m.Fragment,{children:[e.jsxs("div",{"data-aos":"fade-up","data-aos-delay":100*c,className:"flex flex-row items-center gap-4 py-4",children:[e.jsx("img",{src:a.cover_image,alt:a.title,className:"w-1/2 rounded-xl object-cover md:max-h-[250px] md:w-full"}),e.jsxs("div",{className:"flex w-full flex-col gap-2",children:[e.jsx("span",{className:"text-[#757575]",children:u(new Date(a.created_at),"PPP",{locale:j})}),e.jsx("h1",{className:"text-base font-semibold text-[#757575]",children:a.title}),e.jsx(s,{href:`/noticias/${a.slug}`,children:e.jsxs(x,{className:"w-fit rounded-3xl border border-blue-primary bg-blue-primary px-2 py-1 text-base font-normal text-white hover:bg-white hover:text-blue-primary",children:[e.jsx(t,{}),"Saiba Mais"]})})]})]}),e.jsx("div",{className:"h-[1px] w-full bg-gray-300"})]},a.id))}),e.jsxs("div",{className:"flex justify-center gap-6",children:[((l=r.prev_page_url)==null?void 0:l.trim())&&e.jsxs(s,{href:r.prev_page_url,className:"flex self-center text-xs font-bold text-blue-primary",children:[e.jsx(h,{className:"mr-2 h-4 w-4"})," Página anterior"]}),((i=r.next_page_url)==null?void 0:i.trim())&&e.jsxs(s,{href:r.next_page_url,className:"flex self-center text-xs font-bold text-blue-primary",children:["Próxima página ",e.jsx(t,{className:"ml-2 h-4 w-4"})]})]})]})}),e.jsx("section",{className:"flex justify-center",children:e.jsx(s,{href:"/",className:"self-center",children:e.jsxs(x,{className:"w-fit rounded-3xl border border-blue-primary bg-blue-primary px-2 py-1 text-base font-normal text-white hover:bg-white hover:text-blue-primary",children:[e.jsx(t,{}),"Voltar para a home"]})})})]})]})}export{C as default};
