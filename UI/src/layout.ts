
import './style.css'
import BeeeHive from "./NewStuff";

type Person= {
    firstName:string;
    lastName:string;
    age:number;
}

fetch("/GetSome")
.then(res=>{
    
    return res.json();
})
.then(data=>{
    
    if (data) {
        let peopleContainer = document.querySelector("#people-container");
        if (peopleContainer) {
            let html_string = "";
            (data as Person[]).forEach(person => {
                html_string += `
                    <div class="person-item">
                    
                    <div>
                        First Name: ${person.firstName}
                    </div>
                    <div>
                        Last Name: ${person.lastName}
                    </div>
                    <div>
                        Age: ${person.age}
                    </div>
                                        </div>
                `; 
            });

            peopleContainer.innerHTML = html_string;
        }
    }
})
.catch(err=>console.log(err))
BeeeHive();