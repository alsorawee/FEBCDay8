const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click",addContent);
function addContent(){
    console.log("It's work")
    const text = document.getElementById("textInput").value
    const result = document.getElementById("result")
    result.innerHTML += `<h1>${text}</h1>`

//     const newDiv = document.createElement("div");

//     // and give it some content
//     const newContent = document.createTextNode(text);
  
//     // add the text node to the newly created div
//     newDiv.appendChild(newContent);
  
//     // add the newly created element and its content into the DOM
//     const currentDiv = document.getElementById("div1");
//     document.body.insertBefore(newDiv, currentDiv);


 }

 async function fetchData(){
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const json = await data.json()
    const titleList = document.getElementById("titleList")
    console.log(json.length)

    
    for(let i =0; i<json.length; i++){
        titleList.innerHTML += `<h3>${json[i].title}</h3>`
    }
 }
 fetchData()