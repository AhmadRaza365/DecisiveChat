import React from "react";
import "./ScrollToTop.css";

export default function ScrollToTop() {
  var gototopButton = document.getElementById("GoToTopbtn");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      gototopButton.style.display = "block";
    } else {
      gototopButton.style.display = "none";
    }
  }


  return (
    <div>
      <a href="#top" id="GoToTopbtn">
      ⬆️
      </a>
    </div>
  );
}
