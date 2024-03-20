// let h1 = document.querySelector("h1");

let btn = document.querySelector("button");

let ul = document.querySelector("ul");

// let lis = document.querySelectorAll("li");
let inp = document.querySelector("input");

btn.addEventListener("click",function(){
// console.log(inp.value);
let item = document.createElement("li");
item.innerText=inp.value;

let delBtn = document.createElement("button");
delBtn.innerText= "delete";
delBtn.classList.add("delete");

item.appendChild(delBtn);
ul.appendChild(item);



inp.value="";
});
// let delBtns = document.querySelectorAll(".delete");

// for (delBtn of delBtns) {
//     delBtn.addEventListener("click",function(){
     
// // for check paprent element
//         let par = delBtn.parentElement;
//         console.log(par);
//         par.remove();
//     });
    
// }
ul.addEventListener("click",function(event){
   console.dir(event.target.nodeName);//which think was pressed by eventlistener
   if(event.target.nodeName=="BUTTON"){
    let par = event.target.parentElement;

    par.remove();
    
   }
});






