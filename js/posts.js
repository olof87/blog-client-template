async function fetchAllPosts() {
    try {
        const response = await fetch('https://blog-api-assignment.up.railway.app/posts');
        const posts = await response.json();

        let postListHTML = "";
        for (let post of posts) {
            postListHTML += `
                <li class="list-group-item">
                    ${post.title} <br>Tags: ${post.tags} <br><br>
                    ${post.author} <br>
                    <p> ${post.content} <br> <span class="date">-- ${post.date} </span> <p>

                    
                    <a href="post.html">Read more</a> <br>
                    </li>
                    <br>
                    <br>

            `
        }

        document.getElementById('post-list').innerHTML = postListHTML;

    } catch (error){
        console.log(error)
    }
}

fetchAllPosts();


/*
postListHTML += `
                <li class="list-group-item">
                    ${post.title} <br>Tags: ${post.tags} <br><br>
                    ${post.author} <br>
                    <p> ${post.content} <br> <span class="date">-- ${post.date} </span> <p>

                    
                    <a href="#">Read more</a> <br>
                    </li>
                    <br>
                    <br>

            `



*/