"use strict";


const postId = new URLSearchParams(window.location.search).get("id");
const updateForm = document.querySelector(".updateform");
const update = document.querySelector("form");

//! GET AND RENDER THE POST TO BE UPDATED ON PAGE
const renderUpdate = async () => {
  try {
    const response = await fetch(`http://localhost:3000/posts/${postId}`);
    const post = await response.json();

    // update template.
    let updateTemplate = `
      <input type="text" name="title" value="${post.title}" required />
      <input type="hidden" name="likes" value="${post.likes}" required />
      <textarea name="body">${post.body}</textarea>
    `;
  
    updateForm.innerHTML = updateTemplate;

  } catch (error) {
    console.log(error);
  }

};

window.addEventListener("DOMContentLoaded", () => renderUpdate() );


//! POST/UPDATE THE EDITED POST
const updatePost = async (e) => {
  e.preventDefault();

  try {
    const updatePostDoc = {
      title: update.title.value,
      likes: update.likes.value,
      body: update.body.value
    };

    await fetch(`http://localhost:3000/posts/${postId}`, {
      method: "PUT",
      body: JSON.stringify(updatePostDoc),
      headers: { "Content-Type": "application/json", "Accept": "application/json" }
    } );

    window.location.replace(`/details.html?id=${postId}`); // redirect/send user to details page once the data is sent/saved.

  } catch (error) {
    console.log(error);
  }

};

update.addEventListener("submit", updatePost); // update post.