import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const tasks = [];
const workTasks = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res)=>{
    res.render("index.ejs",  {tasks: tasks});
})

app.get("/work", (req, res)=>{
    res.render("work.ejs",  {tasks: workTasks});
})

app.post("/", (req, res) => {
    let task = req.body.addTask;
    tasks.push(task);
    console.log(task)
    res.render("index.ejs", {tasks: tasks});
})

app.post("/work", (req, res) => {
    let task = req.body.addTask;
    workTasks.push(task);
    console.log(task)
    res.render("work.ejs", {tasks: workTasks});
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });