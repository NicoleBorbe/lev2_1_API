let list = document.getElementById("list");

fetch("https://picsum.photos/v2/list")
    .then(response => response.json())
    .then(data => {
        console.log(data);

        /* for (let i = 0; i < data.length; i++) {
                    // console.log(data[i].author);
                    let newImage = document.createElement("img");
                    let newText = document.createElement("figcaption");
                    let newFigure = document.createElement("figure");

                    newImage.src = data[i].download_url;
                    newText.textContent = data[i].author;

                    newFigure.appendChild(newImage);
                    newFigure.appendChild(newText);
                    list.appendChild(newFigure);
                } */

        data.forEach(e => {
            // console.log(e.author);
            let newImage = document.createElement("img");
            let newText = document.createElement("figcaption");
            let newFigure = document.createElement("figure");

            newImage.src = e.download_url;
            newText.textContent = e.author;

            newFigure.appendChild(newImage);
            newFigure.appendChild(newText);
            list.appendChild(newFigure);
            
        });
        
    });