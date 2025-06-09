"use strict";


const postsContainer = document.querySelector(".blogs");

const renderPosts = async () => {
  
    let postsUri = "http://localhost:3000/posts"; // store the post uri (this will normally be hidden in a database connection string).

    const response = await fetch(postsUri);
    const posts = await response.json();
    let postTemplate = "";

    // query parameter of "id" passed into the link tag, inorder to fetch a single post via its Id.
    posts.forEach( post => { // loop through the posts.
        postTemplate += `
            <div class="post">
                <h2>${post.title}</h2>
                <p><small>${post.likes} likes</small></p>
                <p>${post.body.slice(0, 200)}...</p>
                <a href="/details.html?id=${post.id}">Read more</a>
            </div>
        `
    } );
  
    postsContainer.innerHTML = postTemplate;

};

window.addEventListener("DOMContentLoaded", () => renderPosts() );