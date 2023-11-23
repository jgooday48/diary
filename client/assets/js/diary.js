function createPostElement(data) {
    const post = document.createElement("div");
    post.className = "post";

    const date = document.createElement("p");
    date.textContent = data["date"];
    post.appendChild(date);

    const header = document.createElement("h1");
    header.textContent = data["title"];
    post.appendChild(header);

    const category = document.createElement("h3");
    category.textContent = data["category"];
    post.appendChild(category);

    const content = document.createElement("p");
    content.textContent = data["content"];
    content.setAttribute("contenteditable", "true")

    post.appendChild(content);

    const removeBtn = document.createElement("button")
    removeBtn.className = "removeBtn";
    removeBtn.textContent = "remove"


    removeBtn.addEventListener('click', async () => {
        const options = {
            headers: {
                Authorization: localStorage.getItem('token')
            },
            method: 'DELETE'
        };

        const response = await fetch(
            `http://localhost:3000/posts/${data['id']}`,
            options
        );

        if (response.status === 204) {
            window.location.reload();
        } else {
            const respData = await response.json();
            alert(respData.error);
        }
    });



    post.appendChild(removeBtn)

    const editBtn = document.createElement("button")
    editBtn.className = "removeBtn";
    editBtn.textContent = "edit"

    editBtn.addEventListener('click', async () => {
        console.log(content.textContent)


        const options = {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: content.textContent
            })
        }

        const response = await fetch(
            `http://localhost:3000/posts/${data['id']}`,
            options
        );


    });



    post.appendChild(editBtn)
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

async function loadPosts() {

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
