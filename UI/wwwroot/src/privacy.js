import{k as c}from"../swapy.js";const t=document.querySelector("#clickable");t&&t.addEventListener("click",o=>{const e=o.target,n=e.classList.contains("expanded");console.log(n),n?e.classList.remove("expanded"):e.classList.add("expanded")});const s=document.querySelector("#swapit");if(s){const o=c(s,{});o.onBeforeSwap(e=>(console.log("beforeSwatp",e),!0)),o.onSwapStart(e=>{console.log("start",e)}),o.onSwapEnd(e=>{console.log("end",e)}),console.log(o)}
