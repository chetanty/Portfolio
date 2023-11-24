
        document.addEventListener('keydown', function (e) {
      if (e.ctrlKey && e.key === 'u' || e.key === 'U') {
        e.preventDefault();

      }
    });
    let buttonColor = 0; // 0 for initial colors, 1 for swapped colors
    let fontReversed = false;

    function toggleButtonColor() {
        const body = document.body;
        const button = document.getElementById("mapMasterButton");

        if (buttonColor === 0) {
            // Change to swapped colors and reverse the font
            body.style.backgroundColor = "#3e424b";
            body.style.color = "#FFC30B";
            menu.style.backgroundColor= "#6d6e71";
            button.style.backgroundColor = "#FFC30B";
            button.style.color = "#000000";
            fontReversed = true;
            buttonColor = 1;
        } else {
            // Change back to initial colors and restore the font
            body.style.backgroundColor = "#faf6ea";
            body.style.color = "#000000";
            menu.style.backgroundColor= "#dfdcd5";
            button.style.backgroundColor = "#FFC30B";
            button.style.color = "#000000";
            fontReversed = false;
            buttonColor = 0;
        }

        // Toggle the font style

    }

    let photoVisible = false; // Initialize a flag to track if the photo is visible

    function showRandomPhoto() {
        const randomPhotoContainer = document.getElementById("randomPhotoContainer");

        if (!photoVisible) {
            // If the photo is not visible, show a random image

            // Create a modal div to center the content
            const modal = document.createElement("div");
            modal.className = "modal";

            // Create a modal-box div for styling
            const modalBox = document.createElement("div");
            modalBox.className = "modal-box";

            // Create a flex container for the images and text
            const contentContainer = document.createElement("div");
            contentContainer.style.display = "flex";
            contentContainer.style.alignItems = "center";

            // Create the first (larger) image element
            const randomPhoto = document.createElement("img");
            randomPhoto.src = "assets/sask.jpg"; // Replace with your image source
            randomPhoto.alt = "Random Photo";
            randomPhoto.className = "image-border"; // Add a class for the image border

            // Make the first image smaller (adjust the width and height as needed)
            randomPhoto.style.width = "230px";
            randomPhoto.style.height = "300px";

            // Create a second flex container for the small image and text
            const secondContainer = document.createElement("div");
            secondContainer.style.display = "flex";
            secondContainer.style.flexDirection = "column";
            secondContainer.style.marginLeft = "40px"; // Adjust the margin as needed to move the small image to the right

            // Create the second (smaller) image element
            const smallPhoto = document.createElement("img");
            smallPhoto.src = "assets/edm.png"; // Replace with your second image source
            smallPhoto.alt = "Small Photo";
            smallPhoto.className = "image-border"; // Add a class for the image border

            // Make the second image smaller (adjust the width and height as needed)
            smallPhoto.style.width = "200px";
            smallPhoto.style.height = "140px";

            // Create a paragraph for the text
            const textParagraph = document.createElement("p");
            textParagraph.textContent = "Here's a photo of me near the North Saskatchewan River, close to the University Campus.";
            textParagraph.style.textAlign = "center";
            textParagraph.style.color = "#000"; // Set the text color to black

            // Add an event listener to close the modal when clicking the image
            randomPhoto.addEventListener("click", function () {
                modal.style.display = "none";
                photoVisible = false;
            });

            // Add the first image and text elements to the content container
            contentContainer.appendChild(randomPhoto);

            // Add the second image and text elements to the second container
            secondContainer.appendChild(smallPhoto);
            secondContainer.appendChild(textParagraph);

            // Add both containers to the content container
            contentContainer.appendChild(secondContainer);

            // Add the content container to the modal-box
            modalBox.appendChild(contentContainer);

            // Add the modal-box element as a child of the modal
            modal.appendChild(modalBox);

            // Add the modal to the randomPhotoContainer
            randomPhotoContainer.appendChild(modal);

            // Set the flag to indicate the photo is visible
            photoVisible = true;
        } else {
            // If the photo is already visible, hide it
            randomPhotoContainer.innerHTML = "";
            photoVisible = false;
        }
    }
