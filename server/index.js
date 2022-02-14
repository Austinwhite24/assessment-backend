const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const ctrl = require('./controller')

app.get("/api/compliment", ctrl.compliments)

app.get("/api/fortune", ctrl.getFortune)

app.post("/api/list", ctrl.createList)

app.delete("/api/list/:id", ctrl.deleteList) 

// app.put("/api/list", ctrl.addList) 














app.listen(4000, () => console.log("Server running on 4000"));
