// window.addEventListener("load", () => {
//     const loader = document.querySelector(".loader");

//     loader.classList.add("loader--hidden");

//     loader.addEventListener("transitionend", () => {
//         document.body.removeChild(loader);
//     });

// });

document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector(".loader").style.visibility = "visible";

    //delete the loader from html code
    document.querySelector(".loader").addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  } else {
    document.querySelector(".loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};
