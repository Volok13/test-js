let usersContainer = document.getElementById('user-box');
let nextButton = document.getElementById('nextButton');
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) => {
            for (const user of users){
                let singleUserDiv = document.createElement('div');
                singleUserDiv.classList.add('user-box');
                singleUserDiv.innerHTML = `
<p>ID: ${user.id}</p>
<p>Name: ${user.name}</p>
<a href="user-details.html?id=${user.id}">Detailed information</a>
`;
                usersContainer.appendChild(singleUserDiv);
            }
        });


