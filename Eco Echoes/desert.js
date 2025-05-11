document.addEventListener("DOMContentLoaded", (e) => {
  const image = document.getElementsByClassName("image");
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");

  /****** Copy From Here *******/
  const fontSelector = document.getElementById("font-selector");
  const colorPicker = document.getElementById("color-picker");
  const checkBtn = document.getElementsByClassName("check-btn")[0];
  /****** Copy From Here *******/

  if (image[0]) {
    image[0].addEventListener("click", () => {
      modal.style.display = "block";
      modalBody.style.backgroundImage = "url('images/deserts/sahara.jpg')";
      modalBody.innerHTML = `<h3>Sahara Desert</h3>
        <p>
        The Sahara is a desert spanning across North Africa. With an area of 9,200,000 square kilometres, it is the largest hot desert in the world and the third-largest desert overall.
        </p>`;
    });
  }

  if (image[1]) {
    image[1].addEventListener("click", () => {
      modal.style.display = "block";
      modalBody.style.backgroundImage = "url('images/deserts/arabian.jpg')";
      modalBody.innerHTML = `<h3>Arabian Desert</h3>
        <p>
        The Arabian Desert is a vast desert wilderness in West Asia that occupies almost the entire Arabian Peninsula with an area of 2,330,000 square kilometers.
        </p>`;
    });
  }

  /****** Copy From Here *******/
  fontSelector.addEventListener("change", () => {
    // change the font family of the pop up
    modalBody.style.fontFamily =
      fontSelector.options[fontSelector.selectedIndex].text;

    // change the font family of the whole HTML page
    // document.body.style.fontFamily = fontSelector.options[fontSelector.selectedIndex].text;
  });

  checkBtn.addEventListener("click", (e) => {
    modalBody.style.color = colorPicker.value;
  });
  /****** Copy From Here *******/

  document.getElementsByClassName("close")[0].addEventListener("click", (e) => {
    document.getElementById("modal").style.display = "none";
  });
});
