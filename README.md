# **watcha - discover movies database**

![Mock up image](assets/images/readme/mockup.png)

## **Goal for this project**

Want to watch a movie but can't decide what? Let watcha do the hard work for you.

Powered by TMDb, our movie search recommends the most popular and trending movies for you to kick back and chill. Not feeling inspired? You can always search by actor, writer or director to discover something new!

Thank you for visiting my project! If you have any feedback or questions, head over to my GitHub contact details and feel free to reach out to me. 

---
<a></a>

## Table of Contents
1. [UX](#ux)
    * [User Stories](#user-stories)
        * [First Time Visitor Goals](#first-time-visitor-goals)
        * [Returning Visitor Goals](#returning-visitor-goals)
        * [Frequent Visitor Goals](#frequent-visitor-goals)
    * [Business Goals](#business-goals)
    * [Design Choices](#design-choices)
        * [Fonts](#fonts)
        * [Favicon](#favicon)
        * [Colours](#colours)
        * [Structure](#structure)
        * [Imagery](#imagery)
2. [Wireframes](#wireframes)
3. [Roadmap](#roadmap)
    * [Existing Features](#existing-features)
    * [Future Features](#future-features)
4. [Technologies](#technologies)
5. [Testing](#testing)
    * [Approach and Tools](#approach-and-tools)
    * [Validator Testing](#validator-testing)
    * [Bugs and Solutions](#bugs-and-solutions)
6. [Deployment](#deployment)
7. [Credits](#credits)
    * [Code](#code)
    * [Media](#media)
    * [Acknowledgements](#acknowledgements)

<a name="ux"></a>

## **UX**

<a></a>

### **User Stories**
#### **First Time Visitor Goals**
* As a first time user, I want to easily understand the purpose of the site.
* As a first time user, I want to easily understand how to use the site.
* As a first time user, I want content and search results to load quickly.

#### **Returning Visitor Goals**
* As a returning user, I want to see different film recommendations to what I've seen before. 

#### **Frequent Visitor Goals**
* As a frequent user, I want to be able to search for movies to watch based on different search terms.

<a></a>

### **Business Goals**
* Inform the user about popular or trending movies.
* Provide the user with recommendations for movies to watch from their favourite writers, directors or actors.

<a></a>

### **Design Choices**
#### *Fonts*
I selected all my fonts from [Google fonts](https://fonts.google.com/).

The website name on the nav bar has its own font in order to make it stand out. I used [Righteous](https://fonts.google.com/specimen/Righteous). I made the font colour white to make it stand out. However, I added a hover pseudo element to change the text to a complementary colour from my palette. Clicking the 'watcha' text refreshes the page.   

The overall content is written in [Poppins](https://fonts.google.com/specimen/Poppins), with sans serif as the secondary. 

#### *Favicon*
I created a favicon for the website using the logo generator at [Favicon](http//favicon.io). I selected colours from my Coolors palette when creating it.
        
#### *Colours*
I used [Coolors](https://coolors.co/) to put together a palette for my website. I used my hero image as the starting point, using a colour picker to draw out blues initially. 

<img src="assets/images/readme/watcha-coolors.png" alt="coolors palette for watcha website">

#### *Structure*

I have used [Bootstrap v4.6](https://getbootstrap.com/) to create the overall structure of my website.

#### *Imagery*

My hero image was sourced from [Pexels](https://www.pexels.com/). Watcha has universal appeal, but I sought an image that has an almost retro feel to it to appeal to my target demographic of university students.

[Back to Top](#table-of-contents)

---

<a name="wireframes"></a>

## **Wireframes**

I used [Balsamiq](https://balsamiq.com/wireframes/) to create wireframes for my project:

<a></a>

* [Desktop](https://raw.githubusercontent.com/bizlett/watcha-movie-search/master/assets/wireframes/desktop.png)

<a></a>

* [Tablet](https://raw.githubusercontent.com/bizlett/watcha-movie-search/master/assets/wireframes/tablet.png)

<a></a>

* [Mobile](https://raw.githubusercontent.com/bizlett/watcha-movie-search/master/assets/wireframes/mobile.png)

[Back to Top](#table-of-contents)

---

<a name="roadmap"></a>

## **Roadmap**

<a></a>

### **Existing Features**

*Navigation*

![screenshot of nav bar](assets/images/readme/navbar.png)

I wanted to strip back the navbar so in this version I opted only for a navbar brand that refreshes the page when tapped or clicked. There is certainly scope to add to this however as noted in the Future Features section of this readme.

*Hero Image*

![screenshot of hero](assets/images/readme/hero.png)

I opted for a 100% width hero image and transparent nav bar for a minimalist feel. I added the search input in a container that was centered to draw the user directly to directions on using the website, though made the background colour slightly transparent so as not to interfere with the hero image. 

I also added a box shadow to the hero image to make the 'watcha' text on the nav bar stand out. It also helps to draw the eye to the centre. 

*Results*

![screenshot of results section](assets/images/readme/search-results.png)

Results from the search are displayed here. The header is hidden and is shown when the results are displayed. The container is on the page but isn't visible to the user because the background colour masks it until it is populated with results from the search. 

There are a few steps associated with getting to the endpoint of displaying the results in this container. First the user searches by the name of their chosen actor, writer or director. If the search is given the correct input, it will grab the person id associated with that person based on what they are known for - writing, directing or acting. 

A second call to the API is then made. This function uses the person id grabbed from the first function to get their full movie credits.

The movie credits are then displayed in this section and the header is revealed using a third function.

*Popular* 

![screenshot of recommended section](assets/images/readme/popular-section.png)

Popular movies makes a call to the TMDB API to get a list of the current popular movies on TMDB. This list updates daily.  

There are two functions associated to getting to the endpoint of displaying trending movies. The first is triggered by the event listener on window load. The second takes the data from the first call to the API and the list type (whether popular or trending), then displays them in the popular list container. 

There are approximately 500 pages of results for the popular movies call, each page is limited to 20 results. It is not possible to load more than 20 results at the same time, you need to change the page parameter in the URL to access the other results. To allow the user to see more results, I created a 'see more' button. The button triggers a function that constructs a new URL with a randomly generated page number between 1 and 500 every time its clicked. This means another 20 results from the popular movies on TMDB will be displayed.

*Trending*

![screenshot of trending section](assets/images/readme/trending-section.png)

Trending movies makes a call to the TMDb API to get the daily or weekly trending items. The daily trending list tracks items over the period of a day while items have a 24 hour half life. The weekly list tracks items over a 7 day period, with a 7 day half life. I have written the call to the API to be based on daily trending items to ensure returning users will get different results.

Again, there are two functions associated to getting to the endpoint of displaying trending movies. The first is triggered by the event listener on window load. The second takes the data from the first call to the API and the list type (whether popular or trending), then displays them in the trending list container. It uses the same function as popular movies, just with different parameters. 

The trending section 'see more' button also utilises the same function as the popular movies section to load further results.

*Footer*

![screenshot of footer](assets/images/readme/footer.png)

The footer for the page is very basic and features only the logo and attribution required, as part of the terms of use for the TMDB API.

*Scrollbar*

![screenshot of custom scroll bar](assets/images/readme/scrollbars.png)

As I am using both horizontal and vertical scrollbars, I wanted to ensure a uniform style for them which would work with the aesthetic and design of the website. I used -webkit- extensions to style the scrollbars in order to cover as many different browsers in one go. I styled them in line with my Coolors palette. 

*Modal*

![screenshot of modal](assets/images/readme/modal.png)

The modal displays information about the film including the movie genres, running time and synopsis. It provides a snapshot of information about the movie to pique the users interest.

<a></a>

### **Future Features**

Other features which could be added and/or further developed:

*Navbar*

In a future version, further nav links could be added such as 'How it works', 'Login' and/or 'My list'. 

The 'How it works' nav link could provide further information on the API and how the code uses the information that it grabs from the API, as well as information on creating and editing movie lists (a feature not in this version of the website).

The 'My List' nav link would be part of a bigger change to the website - the ability to select and save titles the user is interested in watching into their own personal list. This link would direct the user to a new html page where the list is stored.

The 'Login' nav link would direct the user to a dropdown email and password input to access their personal profile. A personal profile would give the user the ability to create and save different movie lists. 

*'My List' - local storage*

In a future version, 'My List' would be a personalised list where users can save movies they are interested in watching. The first iteration of this list could be local storage, allowing a user to return to their list even after navigating away from the website. It would be accessed through a simple nav link.

*User profile login*

In a future version, the user profile login would give the user the ability to create and save different movie lists. 

In both 'My List' and within a user profile where you could build customisable lists, the user would have the ability to add or remove items from the lists.

*'Add to my list' button*

In a future version, an additional button 'Add to my list' could be added to the movie information modal. Clicking this button would add the movie title to a personalised list.

*Movie trailer*

In a future version, the movie modal could be written to include an iframe in which to display a movie's trailer. This would offer the user more visually arresting information to aid their decision and better serve the business goals. 

User responses from testing have also been very useful when thinking about future designs:

*"Would you be able to add films into the search function too?"*

In a future version, the ability to search by movie name in addition to a person search would extend the business goals but better meet the user goals of a frequent user. It is a common and important piece of feedback. Movie databases generally enable a user to search by movie and so that is the users expectation. That watcha relies on person search as a discovery tool does set it apart from similar websites, but it is not necessarily to its benefit. The ability to search by movie could mitigate that issue.

[Back to Top](#table-of-contents)

---

<a name="technologies"></a>

## **Technologies**

### **Languages**
* [HTML](https://html.com/)
* [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
* [JavaScript](https://www.javascript.com/)

### **Libraries & Frameworks**
* [Favicon](https://favicon.io/)
* [Bootstrap](https://getbootstrap.com/)
* [Google Fonts](https://fonts.google.com/)

### **Tools**
* [Github](https://github.com/)
* [Gitpod](https://gitpod.io/workspaces)
* [Balsamiq](https://balsamiq.com/)
* [W3C HTML Validation Service](https://validator.w3.org/)
* [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)
* [JShint](https://jshint.com/)
* [Promo Image Resizer](https://promo.com/tools/image-resizer/)

[Back to Top](#table-of-contents)

---

<a name="testing"></a>

## **Testing**

<a></a>

### **Approach and Tools**

I deployed my website early which meant I was able to test as I go. I also used Chrome dev tools to test after each change to ensure expectations met reality / intended application.

Once I had the structure in place, I began testing across other devices. I checked features and formatting across an iPhone 7 and iPhone 10 as well as using dev tools and resizing the browser to check responsiveness. I also used a [free responsive test tool](http://responsivetesttool.com/). 

Finally, I asked friends and family to test the website on their devices. I asked them to make a note of anything they found unusual or that they thought was wrong. This proved particularly helpful for user stories and when considering future features.

<a></a>

### **Validator Testing**
* HTML
    * No errors were returned when passing through [W3C HTML Validation Service](https://validator.w3.org/)

* CSS
    * No errors were returned when passing through [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)

* JS
    * No errors were returned when passing through [JShint](https://jshint.com/)

<a></a>

### **Bugs and Solutions**

*Issue*

Search results heading was being created as a div as part of the function. However rather than displaying as block, as a dynamically created element it was displaying inline with search results. This was affecting how search results were displaying, pushing everything outside of the container.

*Solution*

I fixed the issue by adding the heading div in html and then applying display none in CSS. I then changed the function to display the heading div on search button click. 

*Issue*

displaySearchResults function was originally only diplaying 3 results. This is because I had specified that the API must show the credits that the person was known for. I wanted to display whole movie credits. 

*Solution*

I solved this issue with 2 API calls in the function - the first to get the person id and the second to get their full movie credits. Using the known for property was still essential to access the necessary credits based on whether the person was an actor, director or writer. I was then able to specify whether to access cast credits or crew credits to get the full information I needed. 

*Issue*

Trending and popular movies list display only page 1 results as default every time. I wanted different results (i.e. different pages) to display when you click 'see more' buttons.

*Solution*

In order to access different pages of results, the page parameter in the URL must be changed. To achieve this, I used random to select a number between 1-500 (the number of pages of results). Then I used concatenation to build a new URL every time the 'see more' buttons are clicked to return different results. I originally had two functions doing this but refactored the code to use only one function for both buttons. 

*Issue*

When a movie poster image was clicked, the modal containing the movie information would appear but wasn't displaying properly. The background wasn't present and the text was hard to read, appearing in the top left of the window. You would need to refresh the page to get rid of the modal.

*Solution*

The problem was two-fold. First, I was originally using Bootstrap 5. On further research into this it appeared that there was a potential bug there so I switched the links to Bootstrap 4.6. This got the modal working but it would only work for the first movie clicked. 

The next issue was that the inner html was overwriting a key part of the modal code. Dynamically, it was writing over itself, producing a modal which featured information from the same movie irrespective of what movie was clicked. I fixed the problem by adjusting how I'd written the innerHTML code in the showMovieDetails function. Student support helped me to work through this particular issue to find a solution. 

   
[Back to Top](#table-of-contents)

---

<a name="deployment"></a>

## **Deployment**

This project was deployed via GitHub by executing the following steps. After writing the code, committing and pushing it to GitHub:

1. Navigate to the repository on github and click Settings.
2. From there, go to the Source section within the Github Pages section.
3. Select master branch on the dropdown menu, and click save.
4. Now the website is live on https://bizlett.github.io/watcha-movie-search/
5. Any time commits and pushes are sent to Github, the Github Pages site should update shortly after.

To run the project locally:

1. Click the green Clone or Download button on the Github Repository
2. Using the Clone with HTTPS option, copy the link displayed.
3. Open your IDE, and ensure the Git Terminal is open.
4. Change the working directory to the location where the cloned directory is to go.
5. Use the "git clone" command and paste the URL copied in the second step.

[Back to Top](#table-of-contents)

---

<a name="credits"></a>

## **Credits**

<a></a>

### **Code**

* [Bootstrap Documentation](https://getbootstrap.com/docs/4.6/getting-started/introduction/) for modal code
* [Esterling Accime](https://www.youtube.com/channel/UC81OIFgbiCv9lE2ws07lsjA) for code on how to target the movie poster image to trigger the modal (specific video [Build the latest movie app with JavaScript](https://www.youtube.com/watch?v=mWg2udweauY))

<a></a>

### **Media**

* [Lucas Pezeta](https://www.pexels.com/@lucaspezeta)

<a></a>

### **Acknowledgements**

* [Simen Dahlin](https://github.com/Eventyret) for his support in creating this website
* Student support for being such superstars exploring issues with me, then supporting me to find solutions
* Code Institute Slack Community
* [JavaScript & JQuery by Jon Duckett](http://javascriptbook.com/) and [A Smarter Way to Learn Javascript by Mark Myers](https://www.asmarterwaytolearn.com/js/) were excellent additional learning materials
* [Web Dev Simplified](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw) for tutorials around using an API (specific video [Learn Fetch API In 6 Minutes](https://www.youtube.com/watch?v=cuEtnrL9-H0))
* [Florin Pop](https://www.youtube.com/channel/UCeU-1X402kT-JlLdAitxSMA) for giving me a foundational understanding of what I wanted to achieve and how to go about starting it (specific video [Movies App - React Project](https://www.youtube.com/watch?v=sZ0bZGfg_m4&t=303s))
* [Asish George Tech](https://www.youtube.com/channel/UC9v2BVgmJCQNN_RJKN6pZDw) for insight into using the TMDB API for a movie app/website (specific video [Movie app based on TMDB API | Day 17 | HTML CSS JS | 50Projects50Days](https://www.youtube.com/watch?v=9Bvt6BFf6_U&t=1360s))

[Back to Top](#table-of-contents)
