import express from "express";

const app = express();


app.post("/signup", (req, res) => {
    res.send("Hii there");
});

app.post("/signin", (req, res) => {
    res.send("Hii there");
});

app.get("/chat", (req, res) => {
    res.send("Hii there");
});


app.listen(3001);
