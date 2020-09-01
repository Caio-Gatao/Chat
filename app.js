const express = require("express")
const app = express()


const db = require("quick.db")


// Utilize db.set("messages", []) antes de tudo para definir "messages" como um array. Logo após isso delete o que acabou de escrever, pois senão "messages" será definido como [] sempre q a aplicação reiniciar!



app.set("view engine", "ejs")


app.get("/", (req, res) => {
  
  if (req.query.send) db.push("messages", req.query.send.replace(/ \+/g, " "))
  
  res.render("index", {
    messages: db.get("messages")
  })
})


app.listen(3000, () => {
  console.log('[+Listener] > Ouvindo request\'s na porta 3000!')
})