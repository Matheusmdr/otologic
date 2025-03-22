import{r as d,j as e,R as f,Y as be,a as he}from"./app-BXuVAL_W.js";import{a as z,b as T,P as N,d as F,l as ve,u as q,f as ge,c as w,k as Ce,B as Ae}from"./react-icons.esm-C9lK-ZhB.js";import{c as ye,a as Ne}from"./toaster-DUgzrF9U.js";import{u as U}from"./index-BE62VnPm.js";import{u as _e}from"./index-2ET_pmXX.js";import{M as je}from"./main-layout-CZ73ntVs.js";import{C as we}from"./chevron-right-Cj-h3P_X.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=ye("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);var k="Collapsible",[Re,Y]=z(k),[Pe,M]=Re(k),J=d.forwardRef((o,a)=>{const{__scopeCollapsible:t,open:n,defaultOpen:s,disabled:r,onOpenChange:i,...l}=o,[p=!1,u]=T({prop:n,defaultProp:s,onChange:i});return e.jsx(Pe,{scope:t,disabled:r,contentId:U(),open:p,onOpenToggle:d.useCallback(()=>u(m=>!m),[u]),children:e.jsx(N.div,{"data-state":V(p),"data-disabled":r?"":void 0,...l,ref:a})})});J.displayName=k;var Q="CollapsibleTrigger",W=d.forwardRef((o,a)=>{const{__scopeCollapsible:t,...n}=o,s=M(Q,t);return e.jsx(N.button,{type:"button","aria-controls":s.contentId,"aria-expanded":s.open||!1,"data-state":V(s.open),"data-disabled":s.disabled?"":void 0,disabled:s.disabled,...n,ref:a,onClick:F(o.onClick,s.onOpenToggle)})});W.displayName=Q;var L="CollapsibleContent",X=d.forwardRef((o,a)=>{const{forceMount:t,...n}=o,s=M(L,o.__scopeCollapsible);return e.jsx(ve,{present:t||s.open,children:({present:r})=>e.jsx(Ee,{...n,ref:a,present:r})})});X.displayName=L;var Ee=d.forwardRef((o,a)=>{const{__scopeCollapsible:t,present:n,children:s,...r}=o,i=M(L,t),[l,p]=d.useState(n),u=d.useRef(null),m=q(a,u),x=d.useRef(0),A=x.current,h=d.useRef(0),_=h.current,v=i.open||l,g=d.useRef(v),C=d.useRef();return d.useEffect(()=>{const c=requestAnimationFrame(()=>g.current=!1);return()=>cancelAnimationFrame(c)},[]),ge(()=>{const c=u.current;if(c){C.current=C.current||{transitionDuration:c.style.transitionDuration,animationName:c.style.animationName},c.style.transitionDuration="0s",c.style.animationName="none";const y=c.getBoundingClientRect();x.current=y.height,h.current=y.width,g.current||(c.style.transitionDuration=C.current.transitionDuration,c.style.animationName=C.current.animationName),p(n)}},[i.open,n]),e.jsx(N.div,{"data-state":V(i.open),"data-disabled":i.disabled?"":void 0,id:i.contentId,hidden:!v,...r,ref:m,style:{"--radix-collapsible-content-height":A?`${A}px`:void 0,"--radix-collapsible-content-width":_?`${_}px`:void 0,...o.style},children:v&&s})});function V(o){return o?"open":"closed"}var Oe=J,Se=W,De=X,b="Accordion",Te=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[$,ke,Me]=Ne(b),[I,eo]=z(b,[Me,Y]),H=Y(),Z=f.forwardRef((o,a)=>{const{type:t,...n}=o,s=n,r=n;return e.jsx($.Provider,{scope:o.__scopeAccordion,children:t==="multiple"?e.jsx(He,{...r,ref:a}):e.jsx($e,{...s,ref:a})})});Z.displayName=b;var[ee,Le]=I(b),[oe,Ve]=I(b,{collapsible:!1}),$e=f.forwardRef((o,a)=>{const{value:t,defaultValue:n,onValueChange:s=()=>{},collapsible:r=!1,...i}=o,[l,p]=T({prop:t,defaultProp:n,onChange:s});return e.jsx(ee,{scope:o.__scopeAccordion,value:l?[l]:[],onItemOpen:p,onItemClose:f.useCallback(()=>r&&p(""),[r,p]),children:e.jsx(oe,{scope:o.__scopeAccordion,collapsible:r,children:e.jsx(te,{...i,ref:a})})})}),He=f.forwardRef((o,a)=>{const{value:t,defaultValue:n,onValueChange:s=()=>{},...r}=o,[i=[],l]=T({prop:t,defaultProp:n,onChange:s}),p=f.useCallback(m=>l((x=[])=>[...x,m]),[l]),u=f.useCallback(m=>l((x=[])=>x.filter(A=>A!==m)),[l]);return e.jsx(ee,{scope:o.__scopeAccordion,value:i,onItemOpen:p,onItemClose:u,children:e.jsx(oe,{scope:o.__scopeAccordion,collapsible:!0,children:e.jsx(te,{...r,ref:a})})})}),[Be,R]=I(b),te=f.forwardRef((o,a)=>{const{__scopeAccordion:t,disabled:n,dir:s,orientation:r="vertical",...i}=o,l=f.useRef(null),p=q(l,a),u=ke(t),x=_e(s)==="ltr",A=F(o.onKeyDown,h=>{var G;if(!Te.includes(h.key))return;const _=h.target,v=u().filter(S=>{var K;return!((K=S.ref.current)!=null&&K.disabled)}),g=v.findIndex(S=>S.ref.current===_),C=v.length;if(g===-1)return;h.preventDefault();let c=g;const y=0,P=C-1,E=()=>{c=g+1,c>P&&(c=y)},O=()=>{c=g-1,c<y&&(c=P)};switch(h.key){case"Home":c=y;break;case"End":c=P;break;case"ArrowRight":r==="horizontal"&&(x?E():O());break;case"ArrowDown":r==="vertical"&&E();break;case"ArrowLeft":r==="horizontal"&&(x?O():E());break;case"ArrowUp":r==="vertical"&&O();break}const xe=c%C;(G=v[xe].ref.current)==null||G.focus()});return e.jsx(Be,{scope:t,disabled:n,direction:s,orientation:r,children:e.jsx($.Slot,{scope:t,children:e.jsx(N.div,{...i,"data-orientation":r,ref:p,onKeyDown:n?void 0:A})})})}),j="AccordionItem",[Ge,B]=I(j),ae=f.forwardRef((o,a)=>{const{__scopeAccordion:t,value:n,...s}=o,r=R(j,t),i=Le(j,t),l=H(t),p=U(),u=n&&i.value.includes(n)||!1,m=r.disabled||o.disabled;return e.jsx(Ge,{scope:t,open:u,disabled:m,triggerId:p,children:e.jsx(Oe,{"data-orientation":r.orientation,"data-state":le(u),...l,...s,ref:a,disabled:m,open:u,onOpenChange:x=>{x?i.onItemOpen(n):i.onItemClose(n)}})})});ae.displayName=j;var ne="AccordionHeader",re=f.forwardRef((o,a)=>{const{__scopeAccordion:t,...n}=o,s=R(b,t),r=B(ne,t);return e.jsx(N.h3,{"data-orientation":s.orientation,"data-state":le(r.open),"data-disabled":r.disabled?"":void 0,...n,ref:a})});re.displayName=ne;var D="AccordionTrigger",se=f.forwardRef((o,a)=>{const{__scopeAccordion:t,...n}=o,s=R(b,t),r=B(D,t),i=Ve(D,t),l=H(t);return e.jsx($.ItemSlot,{scope:t,children:e.jsx(Se,{"aria-disabled":r.open&&!i.collapsible||void 0,"data-orientation":s.orientation,id:r.triggerId,...l,...n,ref:a})})});se.displayName=D;var ie="AccordionContent",ce=f.forwardRef((o,a)=>{const{__scopeAccordion:t,...n}=o,s=R(b,t),r=B(ie,t),i=H(t);return e.jsx(De,{role:"region","aria-labelledby":r.triggerId,"data-orientation":s.orientation,...i,...n,ref:a,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...o.style}})});ce.displayName=ie;function le(o){return o?"open":"closed"}var Ke=Z,ze=ae,Fe=re,de=se,pe=ce;const qe=Ke,ue=d.forwardRef(({className:o,...a},t)=>e.jsx(ze,{ref:t,className:w("border-b",o),...a}));ue.displayName="AccordionItem";const fe=d.forwardRef(({className:o,children:a,...t},n)=>e.jsx(Fe,{className:"flex",children:e.jsxs(de,{ref:n,className:w("group flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>div>svg]:rotate-180",o),...t,children:[a,e.jsx("div",{className:"w-fit rounded-lg bg-blue-primary p-1",children:e.jsx(Ie,{className:"h-4 w-4 shrink-0 text-white transition-transform duration-200"})})]})}));fe.displayName=de.displayName;const me=d.forwardRef(({className:o,children:a,...t},n)=>e.jsx(pe,{ref:n,className:"overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...t,children:e.jsx("div",{className:w("pb-4 pt-0",o),children:a})}));me.displayName=pe.displayName;function oo({exams:o}){return e.jsxs(je,{children:[e.jsx(be,{title:"Nossos Exames"}),e.jsxs("main",{className:"space-y-10 bg-white py-10 md:space-y-20 md:py-20",children:[e.jsxs("section",{className:"flex flex-col gap-10",children:[e.jsx("div",{className:"mx-auto flex w-11/12 max-w-7xl flex-col justify-center gap-10",children:e.jsx("div",{"data-aos":"fade-up",className:w(Ce({variant:"default"}),"mx-auto w-fit rounded-full border !border-blue-primary !bg-transparent px-4 py-1"),children:e.jsx("h2",{className:"mx-auto w-fit px-2 py-1 text-center text-xl font-bold text-blue-primary",children:"Nossos Exames"})})}),e.jsx("p",{"data-aos":"fade-up","data-aos-delay":"200",className:"mx-auto max-w-2xl px-4 text-center text-base font-medium text-[#757575]",children:"Na Otologic, oferecemos uma ampla gama de exames especializados em Otorrinolaringologia e Audiologia, garantindo diagnósticos precisos e um atendimento de excelência."}),e.jsx("div",{"data-aos":"fade-up","data-aos-delay":"300",className:"mx-auto w-11/12 max-w-7xl",children:e.jsx(qe,{type:"single",collapsible:!0,children:o.map(a=>e.jsxs(ue,{value:a.title,children:[e.jsx(fe,{className:"text-left text-base font-bold text-blue-tertiary",children:a.title}),e.jsx(me,{children:e.jsx("div",{className:"text-base font-normal text-[#757575] [&_h1]:text-base [&_h1]:font-bold [&_h2]:text-base [&_h2]:font-bold [&_h3]:text-base [&_h3]:font-bold [&_h4]:text-base [&_h4]:font-bold [&_h5]:text-base [&_h5]:font-bold [&_h6]:text-base [&_h6]:font-bold [&_p]:mb-4 [&_ul]:list-disc [&_ul]:space-y-4 [&_ul]:pl-5",dangerouslySetInnerHTML:{__html:a.body??""}})})]},a.id))})})]}),e.jsx("section",{className:"flex justify-center",children:e.jsx(he,{href:"/",className:"self-center",children:e.jsxs(Ae,{className:"w-fit rounded-3xl border border-blue-primary bg-blue-primary px-2 py-1 text-base font-normal text-white hover:bg-white hover:text-blue-primary",children:[e.jsx(we,{}),"Voltar para a home"]})})})]})]})}export{oo as default};
