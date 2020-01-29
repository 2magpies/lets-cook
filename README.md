## Let's Cook!

_All the world loves a good cook_

### App Description

**_Let’s Cook!_** is for people that love to cook. The application updates daily with a random recipe. The recipes are crowd-sourced and come from all over the world via TheMealDB. Additionally, users have the option to request the app to suggest a different recipe.

![Let's Cook!](/images/lets-cook.png)

### Project Description

**Requirements**
Our second project in the _General Assembly Software Engineering Immersive_ program presented me with four key challenges:

1. Must only use React for DOM manipulation
2. Must contain at least one request to an API
3. Must use Flexbox or CSS Grid for layout
4. Must be deployed on Heroku

**Wireframes**
![Let's Cook!](/images/lets-cook-wireframes.png)

**The Search for an API**
With a tight timeline (1 week sprint) using technologies that are new to me, I followed my instructors advice to find an API source that was not overly complex.  
Guidelines for deciding on an API to use:

1. Authorization uses API keys (not 0Auth)
2. Uses https
3. Does not use POST
4. Easy-to-understand documentation (terms of use aren't scary)
5. Usage fees do not apply

I decided to use the MealDB API. They have a developer test API key that is very easy to use, but limits the APIs you can use. I decided to subscribe as a Patreon Supporter for \$2/month to have access to all of the APIs (which includes additional databases such as the CocktailDB). The Patreon API key also added some complexity that I wanted to force myself to understand and incorporate.
**Coding**
I decided to start with components I was confident I knew how to code. The _Site Info_ consists of hard-coded content presented in a sidebar.

Next, I added a search feature. User-defined searches are not a feature I included in the initial design, but the api supports search, and as I recently participated in a lab ("Giphy-Searcher") provided by Jennifer Meade where I learned to implement search using an api, I decided it would be wise to start with functionality with which I am familiar. Following the lab approach to start with hard-coded code, I added a variable using two images from the vendor site.

The Giphy-Searcher lab also provided CSS formatting for the search form and results that I decided to use temporarily. This approach helped me get my site with limited features up and running (and attractive!) very quickly. Early success is encouraging. This approach also puts me in "editing mode" which is less daunting than "white board mode."
