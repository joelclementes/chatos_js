import view from '../views/productos.html';

const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
}

export default async () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = view;

    const postElement = divElement.querySelector("#productos");

    const posts = await getPosts();

    console.log(posts);

     posts.forEach(post => {
        postElement.innerHTML += `
            <li class ="list-group" >
                <h5>${post.title}</h5>
                <p>${post.body}</p>
            </li>
        `;
    });

    return divElement;
}