import{h as o,j as l,O as m,a as e}from"./index-8ff20a24.js";const n=({text:s,onSubmit:t})=>{const{register:r,handleSubmit:a,formState:{errors:i}}=o();return l("form",{className:m.form,onSubmit:a(t),children:[e("input",{placeholder:"Email",type:"email",...r("email",{required:!0})}),e("input",{placeholder:"Password",type:"text",...r("password",{required:!0})}),e("button",{children:s}),i.email&&e("span",{children:"This field is required"})]})};export{n as F};
