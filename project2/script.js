let url = "https://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
   let input = document.querySelector("input");
   let country = input.value;
   let collegeArr = await getColleges(country);
   show(collegeArr);
   input.value = "";
});


function show(collegeArr) {
   let list = document.querySelector("#list");
   list.innerText ="";
   for(clg of collegeArr){
      console.log(clg.name);
   let li = document.createElement("li");
   li.innerText = clg.name;
   list.appendChild(li);
   }
}
async function getColleges(country) {
   try{
     let res = await axios.get(url+country);
     return res.data;
   } catch(e){
      console.log("error: ",e);
      return [];
   }
}