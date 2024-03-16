
const Recipe = ({ recipe, handleCook }) => {
  return (
    <div className="card card-compact p-4 border-2 border-gray-300">
      <img
        className="h-auto rounded-2xl w-full "
        src={recipe.recipe_image}
        alt="Shoes"
      />

      <div className=" space-y-4 mt-4">
        <div>
          <h2 className="text-xl font-semibold">{recipe.recipe_name}</h2>
          <p className="text-[#878787] font-normal text-base">
            {recipe.short_description}{" "}
          </p>
        </div>

        <hr />

        <h3 className="text-lg font-medium">Ingredients: {recipe.ingredients.length}</h3>

        <div className="py-2 px-8">
          <ul className="list-disc text-[#878787] text-lg font-normal">
            <li>{recipe.ingredients[0]}</li>
            <li>{recipe.ingredients[1]}</li>
            <li>{recipe.ingredients[2]}</li>
            <li>{recipe.ingredients[3]}</li>
          </ul>
        </div>

        <hr />

        <div className="flex gap-2 justify-around items-center justify-center ">

          <div className="flex gap-4 text-base font-normal text-[#878787]">
            <div className=" gap-4">
              <p>{recipe.preparing_time}</p>
            </div>

            <div className=" gap-2">
              <p>{recipe.calories}</p>
            </div>
          </div>

          <div>

          <button onClick={(e)=> handleCook(recipe)} className="btn text-lg font-medium rounded-full bg-[#0BE58A] "> Want to Cook</button>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
