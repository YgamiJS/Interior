import{j as l,L as b,e as a,a as e,R as I,S as V,f as x,g as c,h as B,u as C,r as g,F as f,i as r}from"./index-8ff20a24.js";import{N as y,A as E}from"./autoplay-7d53dfcd.js";import{L as P}from"./List-67ae48e3.js";const p=({product:s,...i})=>l(b,{to:`/Interior/shop/${s.id}`,className:a.productItem,...i,children:[e("img",{src:s.img,alt:s.title}),e("p",{className:a.title,children:s.title}),e(I,{initialValue:s.rating,size:24}),l("p",{className:a.price+" small-text",children:[s.old&&e("span",{className:a.line,children:s.old})," ",s.price]})]}),D=({products:s})=>e(V,{className:matchMedia("(max-width: 475px)").matches?"mobile__container":"container",modules:[y,E],slidesPerView:3,spaceBetween:20,breakpoints:{310:{slidesPerView:1},640:{slidesPerView:2},768:{slidesPerView:2},1240:{slidesPerView:3},1650:{slidesPerView:4}},autoplay:{delay:4e3},navigation:!0,loop:!0,children:s.map(i=>e(x,{children:e(p,{product:i})},i.id))}),F=({visible:s,setIsVisible:i,children:n})=>e("div",{className:c.modal,onClick:()=>i(!1),children:e("div",{className:c.modal__container,children:e("div",{className:c.modal__content,onClick:o=>o.stopPropagation(),children:n})})}),j=({text:s,...i})=>{const{register:n,handleSubmit:o,watch:u,formState:{errors:L}}=B(),h=C(t=>t.products.merchandises),[A,m]=g.useState(!1),[d,w]=g.useState([]),N=()=>{const t=new RegExp(u("input"),"gi");m(!0),w(h.filter(S=>t.test(S.title)))};return l(f,{children:[l("form",{className:r.form,onSubmit:o(N),children:[e("input",{className:r.input,...i,...n("input",{required:!0})}),e("button",{className:r.button,children:s})]}),A&&e(F,{visible:A,setIsVisible:m,children:d.length>0?e(P,{className:r.list,items:d,renderList:t=>e(p,{product:t})}):e("h1",{children:"No products"})})]})},M="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEjSURBVHgBrVULEcIwDM1QMAmRgIRJwAE4QMKQgAPmAAlIGCgAB8NBaI7uyLJ0bbi9u9669eW99JOuggyICMMDxad7VVVv+BdBsA6tDW0gG7fQ9uBFCDouiFomWCrcGgJs1Eeh3hh/Zg1ixjqoMXgY2tng1ilhVOQuSf7FbGm6fJcUsZNZQCF4ZioptEgygwYciHsx4rTkXpy1iN+J+Jsc28C0QB7gx130UYtLDOBEqNZXqbgbfGrE60uLy2ntwI+k+OguT4vrzogFlI7lIyRPDBXeFzS/LtAi1SqDrIEhfFoi62rjpbrIDYtJNKpwRrSQyeZAaTwpj6wBFgoxeK86l4GYxZXmP44+itaC6zcQwbzWmOFogy2sCWWAsDboe0s23P8AzejgtKLVzEgAAAAASUVORK5CYII=";export{j as C,D as S,M as i};
