### **Carpedia Modifications**

### For everyone

1. add page links to nav bars and footer

### VOTE PAGE

1. set body element vh = 100 to make footer attached to bottom
2. Responsive design for cat picture and font size
3. add hover or cursor:pointer to button to show that it is clicked

### BREEDS

1.CSS Design (done 12.07)

### INDEX

1. search bar jump to breeds (done 12.07)

# update 12.05:
add code in index.js to save the data from the search bar

```//save the data from the search bar
    document.querySelector('#searchButton').addEventListener('click', function(e){
      e.preventDefault(); 
      let valid = true;
      catName = document.querySelector('#catname');
      if(catName.value === ""){
        valid = false;
      }
      if(valid){
        const sForm = document.querySelector('#searchForm');
        const sFd = new FormData(sForm);
        const sObj = Object.fromEntries(sFd);
        sessionStorage.setItem('sForm', JSON.stringify(sObj));
        window.location.href = './breeds.html';
      }
    })
```

# upadate 12.02:
add feedback for contact, please add name attribute to the input(e.g.name="userName") so that we can get the form data.

```html
<div class="contact-form">
            <label for="userName" class="box-1">Name</label>
            <input
              type="text"
              id="userName"
              class="box-4"
              name="userName"
              required
            />

            <label for="userEmail" class="box-1">Email</label>
            <input
              type="email"
              id="userEmail"
              class="box-4"
              name="userEmail"
              required
            />
            <label for="question" class="box-1">Question</label>
            <textarea
              placeholder="Please leave your message here."
              id="message"
              class="box-4"
              name="message"
            ></textarea>
          </div>
```



# update 12.01:
Add anchor to logo and name in the navbar so that it links to home page.
```html
          <div class="title-logo col-1">
            <a href="index.html">
              <i id="logo" class="fa-solid fa-paw fa-2xl"></i
            ></a>
            <a href="index.html"> <h2 id="title">Catpedia</h2></a>
          </div>
```

```css
.title-logo a {
  text-decoration: none;
  color: #5a4d69;
}

.links a:hover {
  color: #5a4d69b1;
}

#mobile-nav {
  display: none;
  color: #5a4d69;
}
```




 

# Sitemap

## Landing Page(index.html)
  1. Add an attractive image to the header
  2. Search bar function: Search the cat you'd like to know (get input from user and return a result in Breeds page)
  3. Cat photo gallery(linked to Breeds as well): display 6-8 common cats and each one has its own link
  4. Simple introduction to Habits Page(image + paragraph)
  5. Simple introduction to Care For Cats Page(image + paragraph)
  6. Simple introduction to Cat Test Page: with button linked to Cat Test Page
  7. Subscribe to our newsletter: we can create an email account for that
## Breeds
  (1)Search Bar
  (2)Display Default Cats(name,images): when user clicks the picture or the name, jump to a detail page that shows the name,the original country,habits,personality and so on.(Something like[ this]( https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=gpN-ReBkp " this"))
## Habits
Maybe we could combine this with breeds, Habits Page could show the details of each cat
## Care For Cats
  Content: How to take care of cats
## Cat Test


## Attention:
1. Responsive layout with both a mobile and desktop mode dynamically available
2. Use browser cookies or the web storage API to customize the experience for returning visitors. The website should recognize and greet returning visitors.
3. Make sure any form data is validated and formatted for return to the back-end. To demonstrate you will send the data to another page rendering and simulate responding.  - **Subscribe Newsletter Part**
4. Dynamic interactive content that modifies the user experience in some way, e.g. dark mode.
5. Include the use of asynchronous data from a publicly accessible API. - **Breeds Page**


