import{c as m,j as a,t as l,a as t,v as y,w as k,x as F,y as x,h as C,z as g,A as d,r as u,B as L,C as h,u as v,D,E as S,P as _,F as P,G as A,H as $,I as q}from"./index-8ff20a24.js";import{L as N}from"./List-67ae48e3.js";const E=({product:e})=>{const s=m(),i=()=>s(y(e.id)),r=()=>s(k(e.id)),c=()=>s(F(e.id));return a("div",{className:l.favoriteProduct,id:e.id,children:[t("img",{src:e.img,alt:e.title}),t("p",{className:l.favoriteProduct__totalPrice,children:e.totalPrice}),t("p",{className:l.title,children:e.title}),a("div",{className:l.count,children:[t("button",{onClick:r,children:"-"}),t("p",{children:e.count}),t("button",{onClick:i,children:"+"})]}),t("button",{onClick:c,children:"-"})]})},j=({favoriteProducts:e})=>t(N,{className:x.list,items:e,renderList:s=>t(E,{product:s},s.id)}),w=({onSubmit:e,totalPrice:s})=>{const{register:i,handleSubmit:r,formState:{errors:c}}=C();return a("form",{className:g.form,onSubmit:r(e),children:[t("input",{placeholder:"Location",type:"text",...i("location",{required:!0})}),t("input",{placeholder:"Email",type:"email",...i("email",{required:!0})}),t("input",{type:"number",placeholder:"Card",...i("card",{required:!0,pattern:/\d+/})}),a("p",{className:g.price,children:["Total price ",s]}),t("button",{children:"Buy"}),c.email&&t("span",{children:"This field is required"})]})},I=({product:e})=>a("div",{className:d.favoriteProduct,id:e.id,children:[t("img",{src:e.img,alt:e.title}),t("p",{className:d.favoriteProduct__totalPrice,children:e.totalPrice}),t("p",{className:d.title,children:e.title}),t("p",{children:e.count}),a("p",{children:["Will come in ",e.date," date"]})]}),M=({boughtProducts:e})=>{const s=m();return u.useEffect(()=>{s(L())},[s]),a("div",{className:h.bought,children:[t("h2",{className:h.h2,children:"Bought"}),t(N,{className:h.list,items:e,renderList:i=>t(I,{product:i},i.id)})]})};const G=()=>{const e=v(n=>n.favoritesProducts.merchandises),s=v(n=>n.boughtProducts.boughtMerchandises),i=D(),r=m(),[c,p]=u.useState(!1),f=S(),b=u.useMemo(()=>e.reduce((n,o)=>n+o.totalPrice,0),[e]),B=n=>{f.isAuth?(p(!0),r(A(e.map(o=>({...o,date:$(new Date,new Date).getDate()})))),r(q())):i("/Interior/login")};return c?t(_,{visible:c,setIsVisible:p,children:t("div",{children:"Bought"})}):t("div",{className:"Basket",children:t("div",{className:"Basket__container container",children:(e.length||s.length)>0?a(P,{children:[e.length>0&&a(P,{children:[t(j,{favoriteProducts:e}),t(w,{totalPrice:b,onSubmit:B})]}),s.length>0&&t(M,{boughtProducts:s})]}):t("div",{className:"empty",children:t("h1",{className:"meduim-text",children:"No products yet"})})})})};export{G as Basket};
