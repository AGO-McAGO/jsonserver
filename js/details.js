"use strict";

const postId = new URLSearchParams(window.location.search).get("id"); // create a new uri params searched object and get the "id".
const postDetails = document.querySelector(".details");

const renderDetails = async () => {
  const response = await fetch("http://localhost:3000/posts/" + postId); // endpoint to get a single post.
  const posts = await response.json();

  // template for single post.
  let detailsTemplate = `
    <h1>${posts.title}</h1>
    <p>${posts.body}</p>
  `;
  
  postDetails.innerHTML = detailsTemplate; // display it on the page.

};

window.addEventListener("DOMContentLoaded", () => renderDetails() );