import express from "express";

const app = express();
const port = 3000;
let postSuccess = false;
let postDeleted = false;
var month = new Date().getMonth()+1;
var day = new Date().getDate();
var year = new Date().getFullYear()

app.use(express.static("public"))
app.use(express.urlencoded({extended: true})) 

class Post {
    constructor(title, author, text) {
        this.postId = posts[posts.length-1].postId + 1;
        this.postTitle = title;
        this.postAuthor = author;
        this.postDate = month + "/" + day + "/" + year;
        this.postText = text;
    }
}

var posts = [
    {
        "postId": 0,
        "postTitle": "First Post",
        "postAuthor": "Avestruz",
        "postDate": month + "/" + day + "/" + year,
        "postText": "Hello World! Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, vero? Ipsam unde et temporibus nostrum. Perspiciatis, assumenda unde? Aliquid, voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, vero? Ipsam unde et temporibus nostrum. Perspiciatis, assumenda unde? Aliquid, voluptas."
    },
    {
        "postId": 1,
        "postTitle": "Second Post",
        "postAuthor": "Sapato",
        "postDate": month + "/" + day + "/" + year,
        "postText": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, vero? Ipsam unde et temporibus nostrum. Perspiciatis, assumenda unde? Aliquid, voluptas."
    },
    {
        "postId": 2,
        "postTitle": "Third Post",
        "postAuthor": "Avestruz",
        "postDate": month + "/" + day + "/" + year,
        "postText": "Heyheyhey Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, vero? Ipsam unde et temporibus nostrum. Perspiciatis, assumenda unde? Aliquid, voluptas."
    },
    {
        "postId": 3,
        "postTitle": "Fourth Post",
        "postAuthor": "Sapato",
        "postDate": month + "/" + day + "/" + year,
        "postText": "Hello World again! Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, vero? Ipsam unde et temporibus nostrum. Perspiciatis, assumenda unde? Aliquid, voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, vero? Ipsam unde et temporibus nostrum. Perspiciatis, assumenda unde? Aliquid, voluptas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, vero? Ipsam unde et temporibus nostrum. Perspiciatis, assumenda unde? Aliquid, voluptas."
    },
]

app.get("/", (req,res) => {
    postSuccess = false;
    postDeleted = false;
    res.render("index.ejs", {year: year, postSuccess: postSuccess, postDeleted: postDeleted, posts: posts})  
})

app.post("/submit", (req,res) => {
    var post = new Post(req.body.postTitle, req.body.postAuthor, req.body.postText)
    posts.push(post)
    postSuccess = true;
    postDeleted = false;
    res.render("index.ejs", {year: year, postSuccess: postSuccess, postDeleted: postDeleted, posts: posts}) 
}) 

app.post("/delete/:postId", (req,res) => {
    postSuccess = false;
    postDeleted = true;
    var postToDelete = parseInt(req.params.postId)
    const indx = posts.findIndex(p => p.postId === postToDelete)
    posts.splice(indx,1)
    res.render("index.ejs", {year: year, postSuccess: postSuccess, postDeleted: postDeleted, posts: posts}) 
}) 

app.post("/edit", (req,res) => {
    postSuccess = true;
    postDeleted = false;
    posts[req.body.postIndex].postTitle = req.body.postTitle;
    posts[req.body.postIndex].postText = req.body.postText;
    res.render("index.ejs", {year: year, postSuccess: postSuccess, postDeleted: postDeleted, posts: posts})
})

app.get("/about", (req,res) => {
    postSuccess = false;
    postDeleted = false;
    res.render("about.ejs", {year: year, postSuccess: postSuccess, postDeleted: postDeleted, posts: posts})   
})

app.get("/contact", (req,res) => {
    postSuccess = false;
    postDeleted = false;
    res.render("contact.ejs", {year: year,  postSuccess: postSuccess, postDeleted: postDeleted, posts: posts}) 
})

app.listen(port, () => [
    console.log("Server running on port "+port)
])
