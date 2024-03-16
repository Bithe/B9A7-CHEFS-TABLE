import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {

  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("./foodsData.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);


  return (
    <section>
      <div className="text-center">
        <h3 className="text-4xl font-bold">Latest Posts</h3>

        <p>bhshjvbshj</p>
      </div>

      <div className="container mx-auto lg:px-24 grid lg:grid-cols-3 gap-4">
        {
            recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>)
        }
      </div>
    </section>
  );
};

export default Recipes;
