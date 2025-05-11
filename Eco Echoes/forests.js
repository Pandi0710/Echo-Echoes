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
            modalBody.style.backgroundImage = "url('images/forests/amazon.jpeg')";
            modalBody.innerHTML = `<h3>Amazon Rainforest</h3>
        <p>
        The Amazon rainforest, also called Amazon jungle or Amazonia, is a moist broadleaf tropical rainforest in the Amazon biome that covers most of the Amazon basin of South America. 
        </p>`;
        });
    }

    if (image[1]) {
        image[1].addEventListener("click", () => {
            modal.style.display = "block";
            modalBody.style.backgroundImage = "url('images/forests/daintree.jpg')";
            modalBody.innerHTML = `<h3>Daintree Rainforest</h3>
        <p>
        The Daintree Rainforest, also known as the Daintree, is a region on the northeastern coast of Queensland, Australia, about 105 km (65 mi), by road, north of the city of Cairns.
        </p>`;
        });
    }

    if (image[2]) {
        image[2].addEventListener("click", () => {
            modal.style.display = "block";
            modalBody.style.backgroundImage =
                "url('images/forests/sinharaja.jpg')";
            modalBody.innerHTML = `<h3>Sinharaja Rainforest</h3>
        <p>
        Sinharaja Forest Reserve is a forest reserve and a biodiversity hotspot in Sri Lanka. It is of international significance and has been designated a Biosphere Reserve and World Heritage Site by UNESCO.
        </p>`;
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
