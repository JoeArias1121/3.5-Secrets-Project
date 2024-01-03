//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import {dirname} from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

let port = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req,res) => {
    console.log(`we are in`)
    req.body["password"] === "ILoveProgramming" ? res.sendFile(__dirname + "/public/secret.html") :
    res.sendFile(__dirname + "/public/index.html");
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});