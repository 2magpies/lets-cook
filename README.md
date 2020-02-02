## Let's Cook!

_All the world loves a good cook_

### App Description

**_Let’s Cook!_** is for people that love to cook. The application automatically features a recipe and provides users the option for the app to suggest a different recipe. The recipes are crowd-sourced and come from all over the world via TheMealDB.

![Let's Cook!](/public/images/lets-cook-v1.png)

### Project Description

#### Requirements

Our second project in the _General Assembly Software Engineering Immersive_ program presented me with four key challenges:

1. Must only use React for DOM manipulation
2. Must contain at least one request to an API
3. Must use Flexbox or CSS Grid for layout
4. Must be deployed on Heroku

#### Wireframes

![Let's Cook!](/public/images/lets-cook-wireframes.png)

#### The Search for an API

With a tight timeline (1 week sprint) using technologies that are new to me, I followed my instructors advice to find an API source that was not overly complex.  
Guidelines for deciding on an API to use:

1. Authorization uses API keys (not 0Auth)
2. Uses https
3. Does not use POST
4. Easy-to-understand documentation (terms of use aren't scary)
5. Usage fees do not apply

I decided to use the MealDB API. They have a developer test API key that is very easy to use, but limits the APIs you can use. I decided to subscribe as a Patreon Supporter for \$2/month to have access to all of the APIs (which includes additional databases such as the CocktailDB). The Patreon API key also added some complexity that I wanted to force myself to understand and incorporate.

#### Coding

I decided to start with components I was confident I knew how to code. The _Site Info_ consists of hard-coded content presented in a sidebar.

Next, I added a search feature. User-defined searches are not a feature I included in the initial design, but the api supports search, and as I recently participated in a lab ("Giphy-Searcher") provided by Jennifer Meade where I learned to implement search using an api, I decided it would be wise to start with functionality with which I am familiar. Following the lab approach to start with hard-coded code, I added a variable using two images from the vendor site.

The _Giphy-Searcher_ lab also provided CSS formatting for the search form and results that I decided to use temporarily. This approach helped me get my site with limited features up and running very quickly. Early success is encouraging. This approach also puts me in "editing mode" which is less daunting than "white board mode."

I created components to use the api call to find a random recipe and render it as the Featured Dish. To improve look-n-feel, I incorporated _react-router-dom_ and refactored the code to support two views, one for the Featured Dish, and one for Featured Drink.

#### CSS

Initially, I used _CSS Grid_ to manage the layout to the Featured Dish view. Not pleased with the results, I decided to use _CSS Flex_.

I created a color palette using _var(--primary | secondary | ...)_. This approach to managing color-scheme proved very helpful. When my buttons seemed "lost in the content," I was able to very easily set them to the "zinger" from the palette to draw user-focus.

### Technologies Used

React (using Hooks), CSS Flexbox, Heroku, API key, Github

### Getting Started

1. Go to https://lets-cookapp.herokuapp.com/
2. To see another recipe, click **Show me another Featured Dish!**
3. To see Featured Drink, click the **Let's Drink!** button.
4. To return to the _Featured Dish_ view, click **Let's Cook!** in the upper left corner of the page.

### Personal Acknowledgments

Collaboration is key and the SEIR 129 cohort (aka, instructors and classmates) are amazingly gracious with sharing time and knowledge. With heartfelt thanks, I'd like to acknowledge:
Jennifer Meade, Hou Chia, Esin Saribudak, Jared Morgan, Jerrica Bobadilla, Chris Wargo, Daisy Yau, Dan Fruth, Ghazal Mansour, Mindy Marmol, Myshawne Stallings, Qusai Fares, Sage Kearney, Tiffany Huddleston, Rixio Barrios

Thanks for the late night to early morning support and for the party spirit everyone brought to this challenging project.

### References

Hours of pouring through online documentation and video tutorials paid off in getting to MVP. Though not all of the references below made it into my code, they provided guidance on this particular coding journey:

#### Styling

https://css-tricks.com/
https://css-tricks.com/snippets/css/a-guide-to-flexbox/
https://www.hongkiat.com/blog/moving-css-grid-items/
https://fonts.google.com/

#### Functionality

https://www.themealdb.com/api.php
Giphy-Searcher application by Jennifer Meade  
https://reactjs.org/  
https://reactjs.org/docs/hooks-overview.html#state-hook  
https://www.w3schools.com/  
https://developer.mozilla.org/en-US/docs/Web/JavaScript  
https://stackoverflow.com/questions/54099593/ how-can-i-remove-null-elements-in-an-array

###Contribution Guidelines
Everyone is welcome to help me improve this project. Please, if you have a suggestion, find a bug, or just want to brainstorm, open an issue and share your ideas.
