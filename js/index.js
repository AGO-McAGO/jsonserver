"use strict";


const postsContainer = document.querySelector(".blogs");

const renderPosts = async () => {
    
    let postsUri = "http://localhost:3000/posts?_sort=likes&_order=desc";

    const response = await fetch(postsUri);
    const posts = await response.json();
    let postTemplate = "";
    
    posts.forEach( post => {
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