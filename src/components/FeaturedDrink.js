import React, { useState, useEffect } from 'react';
// import NextFeature from './NextFeature';
// import { Link } from 'react-router-dom';
// import FindFavorite from './FindFavorite';

function FeaturedDrink() {
    const [randomDrink, setRandomDrink] = useState(null);

    useEffect(() => {
        getRandomDrink();
    }, []);

    function getRandomDrink() {
        /* Build a URL from the url object */
        const randomDrinkUrl = `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_MEALDB_API_KEY}/random.php`;
        fetch(randomDrinkUrl)
            .then(response => response.json())
            .then(response => {
                // 1. create an empty array to hold all of the ingredients so that you can use map to display them easily.
                const ingredientList = [];

                // 2. create a counter (an index value to use in a while loop) and start it at 1
                const drink = response.drinks[0];
                let i = 1;

                // 3. create a while loop, the condition will be "so long as there is a value in meal['strIngredient' + i ]

                // 3a. store the name of the ingredient

                while (drink['strIngredient' + i]) {
                    const name = drink['strIngredient' + i];
                    const quantity = drink['strMeasure' + i];
                    ingredientList.push(quantity + ' ' + name);

                    i++;
                }
                drink.ingredients = ingredientList;
                return drink;
            })
            .then(drink => {
                setRandomDrink(drink);
            })
            .catch(console.error);
    }

    // function handleNextDrink(event) {
    //     event.preventDefault();
    //     getRandomDrink();
    // }
    return (
        <div className="grid">
            <section>
                <section className="featured">
                    {randomDrink && (
                        <div>
                            <h2>Featured Drink</h2>
                            <img src={randomDrink.strDrinkThumb} alt={getRandomDrink.strDrink} width="300" />
                            <h3>{randomDrink.strDrink}</h3>
                            <p>Glass: {randomDrink.strGlass}</p>
                            <p>Category: {randomDrink.strCategory}</p>
                        </div>
                    )}
                </section>
                {/* <section className="user-feature">
                    <NextFeature handleNext={handleNext} />
                </section>
                <section className="favorite-form">
                    <FindFavorite /> */}
                {/* </section> */}
            </section>

            <section className="instructions">
                {randomDrink && (
                    <div>
                        <h3>{randomDrink.strDrink}</h3>
                        <h4>Ingredients</h4>
                        <ul>
                            {randomDrink.ingredients.map(item => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>

                        <h4>Instructions</h4>
                        <p>{randomDrink.strInstructions}</p>
                    </div>
                )}
            </section>
        </div>
    );
}
export default FeaturedDrink;