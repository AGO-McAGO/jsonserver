"use strict";


const postForm = document.querySelector("form");

//! CREATE POST
const createPost = async (e) => {
  try {
    e.preventDefault(); // to prevent default action of page reloading when a form is submitted.

    const postDoc = {
      title: postForm.title.value,
      body: postForm.body.value,
      likes: 0
    };

    await fetch("http://localhost:3000/posts", {
      method: "POST",
      body: JSON.stringify(postDoc), // data converted to JSON format and sent.
      headers: { "Content-Type": "application/json" }
    } );

    window.location.replace("/"); // redirect/send user to homepage once the data is sent/saved.
  } catch (error) {
    console.log(error);
  }

};

postForm.addEventListener("submit", createPost); // create post on user "submit".