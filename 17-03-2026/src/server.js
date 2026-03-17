import express from "express"

const app = express()
const PORT = 3000
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello world!")
})

app.listen(PORT, () => {
    console.log(`A Aplicação está rodando em http://localhost:${PORT}`)
})