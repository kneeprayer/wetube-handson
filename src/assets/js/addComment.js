import axios from "axios";

const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");
const deleteCommentDOMS = document.querySelectorAll(".js-delete-comment");

const increaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};

const decreaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
};

const addComment = (comment, commentId) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteButton = document.createElement("span");
  deleteButton.innerHTML = "X";
  deleteButton.classList.add("video__comments-delete");
  deleteButton.classList.add("js-delete-comment");
  deleteButton.dataset.commentid = commentId;
  span.innerHTML = comment;
  li.appendChild(span);
  li.appendChild(deleteButton);
  // eslint-disable-next-line no-use-before-define
  deleteButton.addEventListener("click", handleDeleteComment);
  commentList.prepend(li);
  increaseNumber();
};

const deleteComment = comment => {
  comment.parentNode.removeChild(comment);
};

const sendComment = async comment => {
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: {
      comment
    }
  });
  if (response.status === 200) {
    addComment(comment, response.data.commentId);
  }
};

const handleSubmit = event => {
  event.preventDefault();
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

const handleDeleteComment = async e => {
  const videoId = window.location.href.split("/videos/")[1];
  const comment = e.target.parentNode;
  const commentId = e.target.dataset.commentid;

  comment.style.display = "none";
  decreaseNumber();

  const response = await axios({
    url: `/api/${videoId}/deleteComment`,
    method: "POST",
    data: {
      commentId
    }
  });
  if (response.status === 200) {
    deleteComment(comment);
  } else {
    console.log("error", response);
    comment.style.display = "list-item";
    increaseNumber();
  }
};

function init() {
  addCommentForm.addEventListener("submit", handleSubmit);
  Array.from(deleteCommentDOMS).forEach(currentComment => {
    currentComment.addEventListener("click", handleDeleteComment);
  });
}

if (addCommentForm) {
  init();
}
