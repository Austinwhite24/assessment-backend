const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

const getFortune = app.get("/api/fortune", (req, res) => {
  const fortunes = ['Believe it can be done!', 
  'Courtesy is contagious!',
  'At the touch of love everyone becomes a poet!',
   'Disbelief destroys magic!',
  ];

  let randomIndexFortune = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndexFortune];

  res.status(200).send(randomFortune)

  
})


const createList = app.post("/api/list", (req, res) => {
const list = [
  ' stand up ',
  ' take a walk ', 
  ' get a drink of water ',
  ' take a break from the screens ',
  ' take a deep breath '
  
];
res.status(200).send(list)
console.log('list')
})


// I get errors when the code below runs so i have it not running at the moment I know I am not doing it right or missing something but Im just pretty stuck on this 

// const deleteList = app.delete("/api/list/") (req,res => {
  
//   let index = list.findIndex(elem => elem.id === +req.params.id)
//   list.splice(index,1)
//   res.status(200).send(list)
//   console.log(deleteList)
// })

// const addList = app.put("/api/list") (req, res => {
//   let index = list.findIndex(elem => elem.id === +req.params.id)
//   if(list[index]){
//     res.status(200).send('uh oh you lost your a step')
//   }
  
// })







app.listen(4000, () => console.log("Server running on 4000"));
