import{j as s,S as n,B as m,T as t,P as i,W as d}from"./index-dab024fd.js";import{f as p,G as r}from"./format-number-d08502cd.js";import{C as h}from"./Card-4ed53fc4.js";import{C as j}from"./Container-7416f4d5.js";import"./isMuiElement-e5e95f95.js";function e({title:a,total:c,icon:o,color:u="primary",sx:l,...x}){return s.jsxs(h,{component:n,spacing:3,direction:"row",sx:{px:3,py:5,borderRadius:2,...l},...x,children:[o&&s.jsx(m,{sx:{width:64,height:64},children:o}),s.jsxs(n,{spacing:.5,children:[s.jsx(t,{variant:"h4",children:p(c)}),s.jsx(t,{variant:"subtitle2",sx:{color:"text.disabled"},children:a})]})]})}e.propTypes={color:i.string,icon:i.oneOfType([i.element,i.string]),sx:i.object,title:i.string,total:i.number};function g(){return s.jsxs(j,{maxWidth:"xl",children:[s.jsx(t,{variant:"h4",sx:{mb:5},children:"Hi, Welcome back 👋"}),s.jsxs(r,{container:!0,spacing:3,children:[s.jsx(r,{xs:12,sm:6,md:3,children:s.jsx(e,{title:"Total Income",total:714e3,color:"success",icon:s.jsx("img",{alt:"icon",src:"/assets/icons/Income_Icon.svg"})})}),s.jsx(r,{xs:12,sm:6,md:3,children:s.jsx(e,{title:"This Month",total:12e3,color:"info",icon:s.jsx("img",{alt:"icon",src:"/assets/icons/Income_Astronaut.svg"})})}),s.jsx(r,{xs:12,sm:6,md:3,children:s.jsx(e,{title:"Total Repairs",total:3e4,color:"warning",icon:s.jsx("img",{alt:"icon",src:"/assets/icons/Phone_Repair.svg"})})}),s.jsx(r,{xs:12,sm:6,md:3,children:s.jsx(e,{title:"This Week",total:234,color:"error",icon:s.jsx("img",{alt:"icon",src:"/assets/icons/Phone_Repair_2.svg"})})}),s.jsx(r,{xs:12,sm:12,md:12,children:s.jsx("img",{alt:"img",src:"/assets\\illustrations/Phone_Repair.jpg"})})]})]})}function P(){return s.jsxs(s.Fragment,{children:[s.jsx(d,{children:s.jsx("title",{children:" Dashboard | Store Management "})}),s.jsx(g,{})]})}export{P as default};