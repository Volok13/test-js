const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('postId');

let postContainer = document.getElementById('post-container');
let commentsContainer = document.getElementById('comments-container');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        postContainer.innerHTML = '';
    let postDetailsDiv = document.createElement('div');
    postDetailsDiv.innerHTML = `
    <p>User ID: ${post.userId}</p>
    <p>Post ID: ${post.id}</p>
    <h4>${post.title}</h4>
    <p>${post.body}</p>
     `;
    postContainer.appendChild(postDetailsDiv);
    })


fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
.then(response => response.json())
.then(comments => {
    commentsContainer.innerHTML = '';
    for(comment of comments) {
        let commentContainerDiv = document.createElement('div');
        commentContainerDiv.innerHTML = `
        <h4>${comment.name}</h4>
        <p>Email: ${comment.email}</p>
        <p>${comment.body}</p>
`;
        commentsContainer.appendChild(commentContainerDiv);
    }
});