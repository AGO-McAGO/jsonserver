"use strict";


const postId = new URLSearchParams(window.location.search).get("id");
const postDetails = document.querySelector(".details");

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
        <a href="#"> Delete </a>
      </nav>
    `;
  
    postDetails.innerHTML = detailsTemplate;

  } catch (error) {
    console.log(error);
  }

};

window.addEventListener("DOMContentLoaded", () => renderDetails() );