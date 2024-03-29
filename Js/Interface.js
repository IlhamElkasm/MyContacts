async function get() {
    const response = await fetch("https://randomuser.me/api/?results=10");
    const data = await response.json();
    console.log(data);

    const container = document.querySelector(".contct");

    data.results.forEach(result => {
        const div = document.createElement('div');
        const divI = document.createElement('div');
        const img = document.createElement('img');
        const divT = document.createElement('div'); // Correction ici
        const nomC = document.createElement('h5');
        const title = document.createElement('p');

        nomC.textContent = result.name.first + " " + result.name.last;
        img.src = result.picture.large;
        title.textContent = result.name.title;

        img.classList.add('circle-image');
        div.classList.add('divC');

        divI.appendChild(img);
        divT.appendChild(nomC);
        divT.appendChild(title);
        div.appendChild(divI);
        div.appendChild(divT);
        // Vous avez ajouté divT deux fois, je l'ai supprimé pour éviter la répétition
        container.appendChild(div);
    });
}

get();
