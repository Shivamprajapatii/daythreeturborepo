import express from "express";

const app = express();


app.post("/signup", (req, res) => {
    res.send("Hii there");
});

app.post("/signin", (req, res) => {
    res.send("Hii there");
});

app.get("/chat", (req, res) => {
    res.send("Hii there Welcome to Chat!");
});


app.listen(3004, ()=>{
    console.log("server is listing on port 3004");
});
