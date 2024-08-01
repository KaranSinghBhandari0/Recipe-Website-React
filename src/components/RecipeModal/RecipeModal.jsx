import React from 'react';
import styles from './RecipeModal.module.css';

const RecipeModal = ({ show, onClose, recipe }) => {
    if(!show) {
        return;
    }

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        if(recipe[`strIngredient${i}`]) {
            ingredients.push(`${recipe[`strMeasure${i}`]} ${recipe[`strIngredient${i}`]}`);
        }
    }

    return (
        <div className={styles.recipe_Div}>
            <button className={styles.close_btn} onClick={onClose}><i className="fa-solid fa-xmark"></i></button>
            <h2 className={styles.dish_name} >{recipe.strMeal}</h2>
            <h5>Ingredients:</h5>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h5>Instructions:</h5>
            <p>{recipe.strInstructions}</p>
        </div>
    );
}

export default RecipeModal;
