"use strict";


const postId = new URLSearchParams(window.location.search).get("id");
const postDetails = document.querySelector(".details");

const renderDetails = async () => {
  const response = await fetch("http://localhost:3000/posts/" + postId);
  const posts = await response.json();

  // template for single post.
  let detailsTemplate = `
    <h1>${posts.title}</h1>
    <p>${posts.body}</p>
  `;
  
  postDetails.innerHTML = detailsTemplate;

};

window.addEventListener("DOMContentLoaded", () => renderDetails() );