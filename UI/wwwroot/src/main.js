/* empty css      */import{k as a}from"../swapy.js";fetch("/GetSome").then(e=>e.json()).then(e=>{if(e){let t=document.querySelector("#people-container");if(t){let o="";e.forEach(n=>{o+=`
                    <div class="person-item">
                    
                    <div>
                        First Name: ${n.firstName}
                    </div>
                    <div>
                        Last Name: ${n.lastName}
                    </div>
                    <div>
                        Age: ${n.age}
                    </div>
                                        </div>
                `}),t.innerHTML=o}}}).catch(e=>console.log(e));const s=document.querySelector("#clickable");s&&s.addEventListener("click",e=>{const t=e.target,o=t.classList.contains("expanded");console.log(o),o?t.classList.remove("expanded"):t.classList.add("expanded")});const c=document.querySelector("#swapit");if(c){const e=a(c,{});e.onBeforeSwap(t=>(console.log("beforeSwatp",t),!0)),e.onSwapStart(t=>{console.log("start",t)}),e.onSwapEnd(t=>{console.log("end",t)}),console.log(e)}
