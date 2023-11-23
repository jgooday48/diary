function createPostElement (data) {
    const post = document.createElement("div");
    post.className = "post";

    const removeBtn = document.createElement("button")
    removeBtn.className = "removeBtn";
    removeBtn.textContent = "remove"
    post.appendChild(removeBtn)

    const editBtn = document.createElement("button")
    editBtn.className = "removeBtn";
    editBtn.textContent = "edit"
    post.appendChild(editBtn)

    const header = document.createElement("h2");
    header.textContent = data["title"];
    post.appendChild(header);

    const category = document.createElement("p");
    category.textContent = data["category"];
    post.appendChild(category);

    const content = document.createElement("p");
    content.textContent = data["content"];
    post.appendChild(content);

    return post;
}

document.getElementById("post-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: form.get("title"),
            content: form.get("content"),
            category: form.get("category")
        })
    }

    const result = await fetch("http://localhost:3000/posts", options);

    if (result.status == 201) {
        window.location.reload();
    }
})

async function loadPosts () {
    
    // client/assets/board.js
// loadPosts function
    const options = {
        headers: {
            'Authorization': localStorage.getItem("token")
        }
    }
    const response = await fetch("http://localhost:3000/posts", options);

    if (response.status == 200) {
        const posts = await response.json();
    
        const container = document.getElementById("posts");

        posts.forEach(p => {
            const elem = createPostElement(p);
            container.appendChild(elem);
        })
    } else {
        window.location.assign("./index.html");
    }

}

loadPosts();
