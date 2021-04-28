const express = require("express")
const path = require("path")

const App = express()

App.use(express.static(path.resolve(__dirname + "/public")))

App.get("/", (_, res) => { 
  res.sendFile(path.resolve(__dirname + "/public/index.html"))
})

const PORT = process.env.PORT || 5000
App.listen(PORT, () => console.log(`Server Started at PORT ${PORT}`))
