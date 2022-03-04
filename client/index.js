const form = document.querySelector('#formId')

function submitHandler(e) {
  e.preventDefault()

  let title = document.querySelector('#enterList')
  

  let bodyObj = {
      title: title.value,
    
  }

  createList(bodyObj)

  title.value = ''
}



document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };


//   let btn = document.createElement("Button");
// btn.innerHTML = "Fortune";
// btn.addEventListener("click", function () {
//   alert("Button is clicked");
// });
// document.body.appendChild(btn);


 document.getElementById('fortuneButton').onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
    .then(function (response) {
      const data = response.data;
      alert(data);
    });
}
form.addEventListener("submit", submitHandler)
const creatList = (bodyObject) => {
  let body = bodyObject
    axios.post("http://localhost:4000/api/list/", body)
    .then(function (response) {
      const data = response.data;
      const count = response.data.length -1
      alert(data[count].title);
      console.log("lol this is hard")
      console.log(data)

    });
}




// I get errors when the code below runs so i have it not running at the moment I know I am not doing it right or missing something but Im just pretty stuck on this 


// let deleteBtns = document.getElementById("delete")

// for (let i=0; i < deleteBtns.clientHeight; i++) {
//   deleteBtns[i].addEventListener("click", deleteList)
// }

document.getElementById('delete').onclick = function () {
    axios.delete(`http://localhost:4000/api/list/:id` )
    .then(function (response) {
      const data = response.data;
      alert(data);
    });
}

// test
// document.getElementById('updateId').onclick = function () {
//     axios.put("http://localhost:4000/api/list/", )
//     .then(function (response) {
//       const data = response.data;
//       alert(data);
//     });
// }




// let user = {
//     username: 'Dragon',
//     firstName: 'Joey',
//     lastName: 'Tribiani'
//   }
  
//   axios.post('/api/users', user).then()