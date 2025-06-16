"use strict";


const postId = new URLSearchParams(window.location.search).get("id");
const postDetails = document.querySelector(".details");
const postDelete = document.querySelector(".deletebtn");

//! Display single post
const renderDetails = async () => {
  try {
    const response = await fetch(`http://localhost:3000/posts/${postId}`);
    const posts = await response.json();

    // template for single post.
    let detailsTemplate = `
      <h1>${posts.title}</h1>
      <p>${posts.body}</p>
      <nav>
        <a href="/edit.html?id=${posts.id}"> Update </a>
      </nav>
    `;
  
    postDetails.innerHTML = detailsTemplate;

  } catch (error) {
    console.log(error);
  }

};

//! Delete post
postDelete.addEventListener( "click", async () => {
  const response = await fetch(`http://localhost:3000/posts/${postId}`, {
    method: "DELETE"
  } );
  
  window.location.replace("/");

} );

window.addEventListener("DOMContentLoaded", () => renderDetails() );