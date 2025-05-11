document.addEventListener("DOMContentLoaded", (e) => {
  const image = document.getElementsByClassName("image");
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");

  const fontSelector = document.getElementById("font-selector");
  const colorPicker = document.getElementById("color-picker");
  const checkBtn = document.getElementsByClassName("check-btn")[0];

  if (image[0]) {
    image[0].addEventListener("click", () => {
      modal.style.display = "block";
      modalBody.style.backgroundImage = "url('images/wildlife/Leopard.jpg')";
      modalBody.innerHTML = `<h3>Leopard</h3>
      <p>
        The Leopard was first described in 1758, Today, eight subspecies are
        recognised in its wide range in Africa and Asia.
      </p>`;
    });
  }

  if (image[1]) {
    image[1].addEventListener("click", () => {
      modal.style.display = "block";
      modalBody.style.backgroundImage = "url('images/wildlife/elephant.jpg')";
      modalBody.innerHTML = `<h3>Elephant</h3>
      <p>
        Elephants are the largest living land animals. Three living species
        are currently recognised.
      </p>`;
    });
  }

  if (image[2]) {
    image[2].addEventListener("click", () => {
      modal.style.display = "block";
      modalBody.style.backgroundImage =
        "url('images/wildlife/eagle.jpg')";
      modalBody.innerHTML = `<h3>Eagle</h3>
      <p>
        Eagles are large, powerfully-built birds of prey, with heavy heads
        and beaks.
      </p>`;
    });
  }

  if (image[3]) {
    image[3].addEventListener("click", () => {
      modal.style.display = "block";
      modalBody.style.backgroundImage =
        "url('images/wildlife/macaw.jpg')";
      modalBody.innerHTML = `<h3>Blue and Yellow Macaw</h3>
      <p>The blue-and-yellow macaw, also known as the blue-and-gold macaw</p>`;
    });
  }

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

  document.getElementsByClassName("close")[0].addEventListener("click", (e) => {
    document.getElementById("modal").style.display = "none";
  });
});
