# **watcha - discover movies database**

![Mock up image]()

## **Goal for this project**

Want to watch a movie but can't decide what? Let watcha do the hard work for you.

Powered by TMDb, our movie search recommends the most popular and trending movies for you to kick back and chill. Not feeling inspired? You can always search by [actor/director/genre/TBC] to discover something new!

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
* As a frequent user, I want to be able to search for movies to watch based on different queries.

<a></a>

### **Business Goals**
* Inform the user about popular movies
* Provide the user with recommendations for movies to watch that fit their requirements

<a></a>

### **Design Choices**
#### *Fonts*
I selected all my fonts from [Google fonts](https://fonts.google.com/).

The website name on the nav bar has its own font in order to make it stand out. I used [Righteous](https://fonts.google.com/specimen/Righteous). I made the font colour white to make it stand out. However, I added a hover pseudo element to change the text to a complementary colour from my palette. Clicking the text refreshes the page.   

The overall content is written in [Poppins](https://fonts.google.com/specimen/Poppins), with sans serif as the secondary. 

#### *Favicon*
I created a favicon for the website using the logo generator at [Favicon](http//favicon.io). I selected colours from my Coolors palette when creating it.
        
#### *Colours*
I used [Coolors](https://coolors.co/) to put together a palette for my website. I used my hero image as the starting point, using a colour picker to draw out blues initially. 

<img src="assets/readme/coolors-palette.png" alt="coolors palette for watcha website">

#### *Structure*

I have used [Bootstrap v5.0.2](https://getbootstrap.com/) to create the overall structure of my website.

#### *Imagery*

My hero image was sourced from [Pexels](https://www.pexels.com/). I sought an image that has an almost retro feel to it to appeal to my target demographic of university students.

[Back to Top](#table-of-contents)

---

<a name="wireframes"></a>

## **Wireframes**

I used [Balsamiq](https://balsamiq.com/wireframes/) to create wireframes for my project:

<a></a>

* [Desktop](raw github user content link)

<a></a>

* [Tablet](https://raw.githubusercontent.com/bizlett/tbc)

<a></a>

* [Mobile](https://raw.githubusercontent.com/bizlett/tbc)

[Back to Top](#table-of-contents)

---

<a name="roadmap"></a>

## **Roadmap**

<a></a>

### **Existing Features**

#### Navigation

![screenshot of nav bar]()

Text

#### Hero Image

![screenshot of hero]()

I opted for a 100% width hero image and transparent nav bar for a minimalist feel. I added the search input in a container that was centered to draw the user directly to directions on using the website, though made the background colour slightly transparent so as not to interfere with the hero image. 

I also added a box shadow to the hero image to make the 'watcha' text on the nav bar stand out. It also helps to draw the eye to the centre. 

#### Results

![screenshot of results section]()

Text

#### Recommended 

![screenshot of recommended section]()

Text

#### Trending

![screenshot of trending section]()

Text

#### Footer

![screenshot of footer]()

Text

#### Scrollbar

![screenshot of custom scroll bar](assets/readme/scroll-bar.png)

I decided to style the scrollbar at a late stage in response to user feedback. I used -webkit- extensions to style it in order to cover as many different browsers in one go. I styled the scrollbar in line with my Coolors palette. 

<a></a>

### **Future Features**

User responses from testing have been very useful when thinking about future designs:

*"I signed up to the newsletter but got no confirmation to say it worked"*

In a future version, I would add custom error messages and confirmation that information has been submitted. 

*"Clicking on the photo didn't open it or give it the option to zoom in"*

In a future version, I would add an image modal to give functionality for images to be opened.

*"I was kind of expecting the Watch links would link to the film's page..."*

If this was a real film, once the film was released these images would link to the appropriate page on the streamer website. To manage this expectation, in a future version I would disable the links and edit the text to note that the film will be released on these platforms from December 2021.

Other features which could be added:

* Reviews section
* Blog page featuring content as part of the release plans. This would have a comments section for fans of the film and potential audiences to comment
* Mini-game page - an interactive viral campaign which allows the user to make choices for the character about what to do next. Based on challenges the protogonist faces in the film to enable a user to experience the world firsthand

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

getWatchList header created as div displaying inline with search results. Fixed by adding header div in html, display none which shows on search button click. 

getWatchList originally only diplaying 3 results - what actor or director was known for. Wanted to display whole movie credits. Solved with 2 api calls in the function. 

getWatchList search accesses cast property to pull movie credits which doesn't work when you search directors. Need to access different property for results when it comes to directors. Look at director object and see what property most relevant. Likely need an if statement to differentiate whether actor or director. May not have time to sort this.

getWatchList displays more than 20 results which makes the horizontal scroll bad (worse?!) ux. Would be better to limit to 20 results then add show more button as with popular and top rated movies

top rated and popular movies display only page 1 results as default everytime. Want different results (i.e. different pages) to display when you click 'see more' buttons. Would be nice for results to change on window.load too but may not have time for this. 

when top rated see more button is clicked - popular movies list disappears until popular see more button is clicked. Noted code hangover from getMorePopular function meant that the getMoreTopRated function was clearing popular list results and not top rated results. Removed clear results from both functions as unnecessary code due to the new page replacing the previous anyway. 
   
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
5. Use the "git clone" command and paste the url copied in the second step.

[Back to Top](#table-of-contents)

---

<a name="credits"></a>

## **Credits**

<a></a>

### **Code**

* [W3Schools Online](https://www.w3schools.com/)
* [Stackoverflow]()
* [CSS Tricks](https://css-tricks.com/)
* [Javascfript & Jquery by Jon Duckett]()

<a></a>

### **Media**

* [Lucas Pezeta](pexels link)

<a></a>

### **Acknowledgements**

* [Simen Dahlin](https://github.com/Eventyret) for his support in creating this website
* Stack Overflow community

[Back to Top](#table-of-contents)

---