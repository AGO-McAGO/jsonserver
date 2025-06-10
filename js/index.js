"use strict";


const postsContainer = document.querySelector(".blogs");

const renderPosts = async () => {
    /*
    parameters passed into the uri can be used to sort the data, by any of the properties (likes, title, body); the default is by id.

    And the default sorting order is from the lowest to the highest, meaning post with id of 1 will be at the top of the page, or
    post with the lowest likes will be at the top of the page.

    to reverse the default and make it so post with higher likes be top of the page, "&_order=desc" is used; meaning sort in
    descending order, "&" is used to join/add another parameter.
    */
    let postsUri = "http://localhost:3000/posts?_sort=likes&_order=desc";

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