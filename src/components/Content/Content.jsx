import './Content.css'
import { useEffect, useRef, useState } from "react";
import Error from '../Error/Error.jsx'
import RecipeModal from '../RecipeModal/RecipeModal.jsx'

export default function Content({ dish }) {
    const [meals, setMeals] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const modalRef = useRef(null);

    const getDishes = async (dish) => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${dish}`;
        const data = await fetch(url).then(response => response.json());
        if (data.meals) {
            setMeals(data.meals);
        } else {
            setMeals([]);
        }
    }

    useEffect(() => {
        if (dish) {
            getDishes(dish);
        }
    }, [dish]);

    const handleRecipeClick = (meal) => {
        setSelectedRecipe(meal);
    }

    const handleCloseModal = () => {
        setSelectedRecipe(null);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                handleCloseModal();
            }
        };

        if (selectedRecipe) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [selectedRecipe]);

    return (
        <div className="container">
            {meals.length===0 && <Error dish={dish} /> }
            {meals.map((meal, index) => (
                <div key={index} className="card" style={{ width: "18rem" }}>
                    <img src={meal.strMealThumb} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{meal.strMeal}</h5>
                        <p>{meal.strArea}</p>
                        <button className="btn btn-primary" onClick={() => handleRecipeClick(meal)}>Recipe</button>
                    </div>
                </div>
            ))}
            {selectedRecipe && (
                <div ref={modalRef}>
                    <RecipeModal show={selectedRecipe !== null} onClose={handleCloseModal} recipe={selectedRecipe} />
                </div>
            )}
        </div>
    );
}
