import fireIcon from "../../images/fire.png";
import clockIcon from "../../images/clock.png";

const Recipe = ({ recipe, handleCook }) => {
  return (
    <div>
    
      <div className="card shadow-xl border-2 border-[#28282833]">
        <figure className="px-10 pt-10">
          <img
            src={recipe.recipe_image}
            alt="Shoes"
            className="h-auto rounded-2xl w-full "
          />
        </figure>

        <div className="card-body px-10 ">
          <h2 className="text-xl font-semibold">{recipe.recipe_name}</h2>

          <p className="text-[#878787] font-normal text-base">
              {recipe.short_description}{" "}
            </p>

            <hr />

            <h3 className="text-lg font-medium">
            Ingredients: {recipe.ingredients.length}
          </h3>

        
          <div className="py-2 px-8">
            <ul className="list-disc text-[#878787] text-lg font-normal">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <hr />


          <div className="flex items-center justify-center justify-between">
            <div className="flex text-base font-normal text-[#878787] gap-3 ">
              <div className=" flex gap-1 ">
                <img src={clockIcon} alt="" />
                <p>{recipe.preparing_time}</p>
              </div>

              <div className="flex justify-center items-center gap-1">
                <img src={fireIcon} alt="" className=""/>
                <p>{recipe.calories}</p>
              </div>
            </div>

            <div className="text-lg">
              <button
                onClick={(e) => handleCook(recipe)}
                className="btn font-medium rounded-full bg-[#0BE58A] text-base "
              >
                {" "}
                Want to Cook
              </button>
            </div>
          </div>




        </div>
      </div>
    </div>
  );
};

export default Recipe;
