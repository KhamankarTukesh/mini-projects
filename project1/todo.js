let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click",()=>{
  let li = document.createElement("li");
  if(inp.value.trim() ===""){
    return alert("Please fill properly!!!");
  }
  li.innerText  = inp.value;
  li.classList.add("list");
  ul.appendChild(li);
  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.addEventListener("click",()=>{
    li.remove();
  })
  li.appendChild(delBtn);
  inp.value = "";
})