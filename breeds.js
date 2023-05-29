$(document).ready(function(){
    const url = `https://api.thedogapi.com/v1/breeds`;
    const api_key = "DEMO_API_KEY"
    

    var storedBreeds = []

    fetch(url,{headers: {
       'x-api-key': api_key
    }})

    .then((response) => {
      return response.json();
    })

    .then((data) => {
    
       //filter to only include those with an `image` object
       data = data.filter(img=> img.image?.url!=null)
       data = data.filter(nm=> nm.name!=null)
       data = data.filter(bg=> bg.breed_group!=null)
       
       storedBreeds = data; /* receive all the cats data */

       const json = sessionStorage.getItem('sForm');
       var obj = JSON.parse(json);

       if(obj === null)
          obj = {'catname': ''};
       else{
          var aux = obj.catname;
       }


        if(obj.catname != ''){
            sValue(storedBreeds, aux); //call the function to create the gallery
        }else{
            displayElements(storedBreeds); //call the function to create the gallery
        }
           
    })
    .catch(function(error) {
       console.log(error);
    });

    
    
        
    function sValue(datas, value){
        const principal = $("#gallery");
        $(principal).html('');

        let filteredBreeds = [];

        for (let j = 0; j < datas.length; j++){
            if (datas[j].name.toLowerCase().includes(value)){
              filteredBreeds.push(j); //save the data accordingly with the search
            }
        }

        displaySearch(filteredBreeds); //call the function to display only the data related to the input
    }

    /* take the input and looking for some match in the data */
    function search(){
        const principal = $("#gallery");
        $(principal).html('') ;

        aux = $("#search").val();
        let filteredBreeds = [];
        for (let j = 0; j < storedBreeds.length; j++){
            if (storedBreeds[j].name.toLowerCase().includes(aux)){
              filteredBreeds.push(j); //save the data accordingly with the search
            }
        }
        displaySearch(filteredBreeds); //call the function to display only the data related to the input
    }

    //function to display the initial gallery
    function displayElements(data){
      for (let j = 0; j < data.length; j++){
        const principal = $("#gallery");

        //creating the elements to populate the gallery
        const div = $("<div />", {id: 'container'});

        const image = $("<img />", {id: 'breed_image', src: storedBreeds[j].image.url});

        const breedName = $("<h2 />", {id: 'breed_name', class: 'show', html: storedBreeds[j].name});

        const temperament = $("<p />", {id: 'temperament', class: 'show', html: storedBreeds[j].temperament});

        const description = $("<p />", {id: 'description', class: 'hidden', html: storedBreeds[j].origin});

        const breedGroupElement = $("<div />", {class: 'element'});
        const breedGroupName = $("<p />", {class: 'hidden', text: "Breed Group: "});
        const breedGroup = $("<p />", {id: 'description', class: 'hidden', html: storedBreeds[j].breed_group});
        breedGroupElement.append(breedGroupName);
        breedGroupElement.append(breedGroup);

        const lifeSpanElement = $("<div />", {class: 'element'});
        const lifeSpanName = $("<p />", {class: 'hidden', text: "Life Span: "});
        const lifeSpan = $("<p />", {id: 'description', class: 'hidden', html: storedBreeds[j].life_span});
        lifeSpanElement.append(lifeSpanName);
        lifeSpanElement.append(lifeSpan);
        

        //append the elements to container div
        $(div).append(image);
        $(div).append(breedName);
        $(div).append(temperament);
        $(div).append(description);
        $(div).append(breedGroupElement);
        $(div).append(lifeSpanElement);
       
        //append the container div to principal div
        $(principal).append(div);

       }
    }

    //function to display the data after the search
    function displaySearch(data){
      for (let j = 0; j < data.length; j++){
        const principal = $("#gallery");

        //creating the elements to populate the gallery
        const div = $("<div />", {id: 'container'});

        const image = $("<img />", {id: 'breed_image', src: storedBreeds[data[j]].image.url});

        const breedName = $("<h2 />", {id: 'breed_name', class: 'show', html: storedBreeds[data[j]].name});

        const temperament = $("<p />", {id: 'temperament', class: 'show', html: storedBreeds[data[j]].temperament});

        const description = $("<p />", {id: 'description', class: 'hidden', html: storedBreeds[data[j]].origin});
        
        const breedGroupElement = $("<div />", {class: 'element'});
        const breedGroupName = $("<p />", {class: 'hidden', text: "Breed Group: "});
        const breedGroup = $("<p />", {id: 'description', class: 'hidden', html: storedBreeds[j].breed_group});
        breedGroupElement.append(breedGroupName);
        breedGroupElement.append(breedGroup);

        const lifeSpanElement = $("<div />", {class: 'element'});
        const lifeSpanName = $("<p />", {class: 'hidden', text: "Life Span: "});
        const lifeSpan = $("<p />", {id: 'description', class: 'hidden', html: storedBreeds[j].life_span});
        lifeSpanElement.append(lifeSpanName);
        lifeSpanElement.append(lifeSpan);
        

        //append the elements to container div
        $(div).append(image);
        $(div).append(breedName);
        $(div).append(temperament);
        $(div).append(description);
        $(div).append(breedGroupElement);
        $(div).append(lifeSpanElement);
        
        //append the container div to principal div
        $(principal).append(div);
     }
    }
    
    $('#search').on('keyup', search)
})