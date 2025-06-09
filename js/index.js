"use strict";


const postContainer = document.querySelector(".blogs");

const renderPosts = async () => {
  
    let postUri = "http://localhost:3000/posts"; // store the post uri (this will normally be hidden in a database connection string).
  
    const response = await fetch(postUri); // fetched data.
    const posts = await response.json(); // to convert the json format to a javascript object, and store it inside the "posts" variable.
    let template = ""; // declare a template variable to hold all the posts from the database.
  
    posts.forEach( post => { // loop through the posts.

        // then append to the "template"
        // in the "body" P tag/paragraph, to show only a part (like a preview) of the whole body, the slice method is used.
        template += `
            <div class="post">
                <h2>${post.title}</h2>
                <p><small>${post.likes} likes</small></p>
                <p>${post.body.slice(0, 200)}...</p>
                <a href="/details.html?id=${post.id}">Read more</a>
            </div>
        `
    } );
  
    postContainer.innerHTML = template;

};

window.addEventListener("DOMContentLoaded", () => renderPosts()); //! wait for DOM contents/webpage to finish loading/displaying before calling the function/action