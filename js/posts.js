async function fetchAllPosts() {
    try {
        const response = await fetch('https://blog-api-assignment.up.railway.app/posts');
        const posts = await response.json();

        let postListHTML = "";
        for (let post of posts) {
            let shortenedContent = post.content.split(' ').slice(0, 100).join(' '); 
            if(post.content.split(' ').length > 100){
                shortenedContent += '...'; 
            }
            
            postListHTML += `
                <li class="list-group-item">
                    ${post.title} <br>Tags: ${post.tags} <br><br>
                    ${post.author} <br>
                    <p>${shortenedContent}</p>
                    <span class="date">-- ${post.date}</span> <p>
                    <a href="post.html?id=${post._id}">Read more</a> <br>
                </li>
                <br>
                <br>`;
        }

        document.getElementById('post-list').innerHTML = postListHTML;

    } catch (error){
        console.log(error)
    }
}

fetchAllPosts();





















