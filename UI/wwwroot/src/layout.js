/* empty css      */fetch("/GetSome").then(e=>e.json()).then(e=>{if(e){let i=document.querySelector("#people-container");if(i){let n="";e.forEach(t=>{n+=`
                    <div class="person-item">
                    
                    <div>
                        First Name: ${t.firstName}
                    </div>
                    <div>
                        Last Name: ${t.lastName}
                    </div>
                    <div>
                        Age: ${t.age}
                    </div>
                                        </div>
                `}),i.innerHTML=n}}}).catch(e=>console.log(e));
