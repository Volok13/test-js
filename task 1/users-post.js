const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');


let detailsContainer = document.getElementById('user-details');
let postButton = document.getElementById('post-button');
let postsContainer = document.getElementById('posts-container');

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            let singleDetailsDiv = document.createElement('div');
            singleDetailsDiv.innerHTML = `
            <h2>${user.name}</h2>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <p>Website: ${user.website}</p>
            <p>Company: ${user.company.name}</p>
            <p>Address: ${user.address.street}, ${user.address.city}</p>
        `;
            detailsContainer.appendChild(singleDetailsDiv);
        })

    postButton.onclick = function () {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(response => response.json())
            .then(posts => {
                postsContainer.innerHTML = '';
                for (const post of posts) {
                    let postDiv = document.createElement('div');
                    postDiv.innerHTML = `
                    <h3>${post.title}</h3>
                    <a href="post-details.html?postId=${post.id}">View Post Details</a>
                `;
                    postsContainer.appendChild(postDiv);
                }
            })

    };
