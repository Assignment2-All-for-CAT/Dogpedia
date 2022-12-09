$(document).ready(function () {
    //receiving the data from the index page
    const json = localStorage.getItem('sForm');
    const obj = JSON.parse(json);

    if (obj.catname != '') {
        const url = `https://api.thecatapi.com/v1/breeds`;
        const api_key = "DEMO_API_KEY"

        var storedBreeds = []

        fetch(url, {
            headers: {
                'x-api-key': api_key
            }
        })

            .then((response) => {
                return response.json();
            })

            .then((data) => {

                //filter to only include those with an `image` object
                data = data.filter(img => img.image?.url != null)

                storedBreeds = data; /* receive all the cats data */

                sValue(storedBreeds); //call the function to create the gallery

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function sValue(datas) {
        console.log("executei funcao svalue")
        const principal = $("#gallery");
        $(principal).html('');

        console.log(datas)

        let filteredBreeds = [];
        console.log(datas.length)
        for (let j = 0; j < datas.length; j++) {
            if (datas[j].name.toLowerCase().includes(obj.catname)) {
                filteredBreeds.push(j); //save the data accordingly with the search
            }
        }

        displayValues(filteredBreeds); //call the function to display only the data related to the input
    }

    function displayValues(datas) {
        console.log("executei displayvalues")
        console.log(datas.length)
        for (let j = 0; j < datas.length; j++) {
            const principal = $("#gallery");
            console.log("entrei no for")
            //creating the elements to populate the gallery
            const div = $("<div />", { id: 'container' });

            const image = $("<img />", { id: 'breed_image', src: storedBreeds[datas[j]].image.url });

            const breedName = $("<h2 />", { id: 'breed_name', class: 'show', html: storedBreeds[datas[j]].name });

            const temperament = $("<p />", { id: 'temperament', class: 'show', html: storedBreeds[datas[j]].temperament });

            const description = $("<p />", { id: 'description', class: 'hidden', html: storedBreeds[datas[j]].description });

            const url = $("<a />", { id: 'url', class: 'hidden', target: '_blank', html: 'Learn More', href: storedBreeds[datas[j]].wikipedia_url });

            const affection = $("<p />", { id: 'affection', class: 'hidden', html: 'Affection Level: ' });

            const energy = $("<p />", { id: 'energy', class: 'hidden', html: 'Energy Level: ' });

            const dog = $("<p />", { id: 'dog', class: 'hidden', html: 'Dog Friendly: ' });

            const stranger = $("<p />", { id: 'stranger', class: 'hidden', html: 'Stranger Friendly: ' });

            const intelligence = $("<p />", { id: 'intelligence', class: 'hidden', html: 'Intelligence Level: ' });

            for (i = 1; i <= storedBreeds[datas[j]].affection_level; i++) {
                $(affection).append('⭐'); //add star accordingly with the data
            }

            for (i = 1; i <= storedBreeds[datas[j]].energy_level; i++) {
                $(energy).append('⭐');
            }

            for (i = 1; i <= storedBreeds[datas[j]].dog_friendly; i++) {
                $(dog).append('⭐');
            }

            for (i = 1; i <= storedBreeds[datas[j]].stranger_friendly; i++) {
                $(stranger).append('⭐');
            }

            for (i = 1; i <= storedBreeds[datas[j]].intelligence; i++) {
                $(intelligence).append('⭐');
            }

            //append the elements to container div
            $(div).append(image);
            $(div).append(breedName);
            $(div).append(temperament);
            $(div).append(description);
            $(div).append(affection);
            $(div).append(energy);
            $(div).append(dog);
            $(div).append(stranger);
            $(div).append(intelligence);
            $(div).append(url);

            //append the container div to principal div
            $(principal).append(div);
        }
    }
});