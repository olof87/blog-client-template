console.log('Query string:', location.search);
const urlParams = new URLSearchParams(location.search);
const postId = urlParams.get('id');

if (postId) {
    fetchPost(postId);
} else {
    console.log('Post ID not found in URL.');
}

async function fetchPost(id) {
    try {
        const response = await fetch('https://blog-api-assignment.up.railway.app/posts/' + id);
        if (!response.ok) {
            throw new Error('Failed to fetch post');
        }
        const post = await response.json();
        console.log(post);

        
        const postContainer = document.getElementById('post-container');

        
        postContainer.innerHTML = `
            <h1>${post.title}</h1>
            <p>Author: ${post.author}</p>
            <p>Date: ${post.date}</p>
            <p>Tags: ${post.tags.join(', ')}</p>
            <div>${post.content}</div>
        `;
    } catch (error) {
        console.error(error);
    }
}