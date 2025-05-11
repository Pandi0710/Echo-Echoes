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
            modalBody.style.backgroundImage = "url('images/mountains/everest.jpg')";
            modalBody.innerHTML = `<h3>Mount Everest</h3>
        <p>
        Mount Everest is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas. 
        </p>`;
        });
    }

    if (image[1]) {
        image[1].addEventListener("click", () => {
            modal.style.display = "block";
            modalBody.style.backgroundImage = "url('images/mountains/elbrus.jpg')";
            modalBody.innerHTML = `<h3>Mount Elbrus</h3>
        <p>
        Mount Elbrus is the highest mountain in Russia and Europe. It is situated in the western part of the Caucasus and is the highest peak of the Caucasus Mountains. 
        </p>`;
        });
    }

    if (image[2]) {
        image[2].addEventListener("click", () => {
            modal.style.display = "block";
            modalBody.style.backgroundImage =
                "url('images/mountains/knuckles.png')";
            modalBody.innerHTML = `<h3>Knuckles Mountain Range</h3>
        <p>
        The Knuckles Mountain Range lies in central Sri Lanka, in the Districts of Matale and Kandy.
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
