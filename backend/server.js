import express from "express"
import { DatabaseSync } from "node:sqlite"
import cors from "cors"
import multer from "multer"
import bcrypt from "bcrypt"

const upload = multer()
const database = new DatabaseSync("database.db")
const app = express()
const port = 3000
const saltRounds = 10

app.use(cors())

app.get("/", (req, res) => {
    res.send("Welcome");
    res.status(202);
})

app.get("/users", (req, res) => {
    const result = database.prepare("SELECT * FROM Users").all()
    res.send(result);
    res.status(202);
})

app.post("/users", upload.none(), async (req, res) => {
    const {Username, Email, Password} = req.body
    const hashedPassword = await bcrypt.hash(Password, saltRounds)
    let insert = database.prepare("INSERT INTO Users (Username, Email, PasswordHash) VALUES (?, ?, ?)");
    insert.run(Username, Email, hashedPassword);
    res.status(202);
})

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
})
