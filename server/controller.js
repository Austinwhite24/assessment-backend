const list = require('./db.json')
let globalId = 6


module.exports = {
     compliments: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!",
                           "Cool shirt!",
                           "Your Javascript skills are stellar.",
        ];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
        
      },
      getFortune: (req, res) => {
        const fortunes = ['Believe it can be done!', 
        'Courtesy is contagious!',
        'At the touch of love everyone becomes a poet!',
         'Disbelief destroys magic!',
        ];
      
        let randomIndexFortune = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndexFortune];
      
        res.status(200).send(randomFortune)
      
        
      },
      createList: (req, res) => {
        let {title} = req.body
        let newList = {
          id: globalId,
          title
        }
        list.push(newList)
        // const list = [
        //   ' stand up ',
        //   ' take a walk ', 
        //   ' get a drink of water ',
        //   ' take a break from the screens ',
        //   ' take a deep breath '
          
        // ];
        res.status(200).send(list)
        globalId++
        console.log('list')
        },
        deleteList: (req,res) => {
  
          let index = list.findIndex(elem => elem.id === +req.params.id)
          list.splice(index,1)
          res.status(200).send(list)
          // console.log(deleteList)
        // },
        // addList: (req, res => {
        //   let index = list.findIndex(elem => elem.id === +req.params.id)
        //   if(list[index]){
        //     res.status(200).send('uh oh you lost your a step')
        //   }
          
        // })

    }
}




// const houses = require('./db.json')
// let globalId = 4

// module.exports ={
//     getHouses: (req, res) => {
//         res.status(200).send(houses)
//     },
//     deleteHouse: (req, res) => {
//         let index = houses.findIndex(elem => elem.id === +req.params.id)
//         houses.splice(index, 1)
//         res.status(200).send(houses)
//     },
//     createHouse: (req, res) => {
//         let {address, price, imageURL} = req.body
//         let newHouse = {
//             id: globalId,
//             address,
//             price: +price,
//             imageURL
//         }
//         houses.push(newHouse)
//         res.status(200).send(houses)
//         globalId++
//     },
//     updateHouse: (req, res) => {
//         let {id} = req.params
//         let {type} =req.body
//         let index = houses.findIndex(elem => elem.id === +id)

//         if(type === 'plus' ){
//             houses[index].price += 10000
//             res.status(200).send(houses)
//         } else if (type === "minus"){
//             houses[index].price -= 10000
//             res.status(200).send(houses)
//         }else {
//             res.status(400).send('You broke something')
//         }
//     }
      