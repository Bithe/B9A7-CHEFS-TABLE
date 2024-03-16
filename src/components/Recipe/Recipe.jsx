import clockIcon from "../../images/clock.png";

const Recipe = ({ recipe }) => {
  return (
    <div>
      <div className="card card-compact p-6 border-2 border-gray-300 m-3">
        <figure>
          <img className="" src={recipe.recipe_name} alt="Shoes" />
        </figure>

        <div className="card-body space-y-2">
          <h2 className="text-xl font-semibold">{recipe.recipe_name}</h2>
          <p className="text-[#878787] font-normal text-base">{recipe.short_description} </p>
          <hr />

          <h3 className="text-lg font-medium">Ingredients: 6</h3>

          <ul className="list-disc px-8 text-[#878787] text-lg font-normal">
            <li>{recipe.ingredients[0]}</li>
            <li>{recipe.ingredients[1]}</li>
            <li>{recipe.ingredients[2]}</li>
            <li>{recipe.ingredients[3]}</li>
           
          </ul>

          <hr />

          <div className="flex gap-4 ">
            <div className="flex gap-4">
              <img src={clockIcon} alt="" />
              <p>30 minutes</p>
            </div>

            <div className="flex gap-4">
              <img src={clockIcon} alt="" />
              <p>30 minutes</p>
            </div>
          </div>

          <div className="card-actions rounded-full ">
            <button className="btn rounded-full text-black bg-[#0BE58A] text-lg font-medium">
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
