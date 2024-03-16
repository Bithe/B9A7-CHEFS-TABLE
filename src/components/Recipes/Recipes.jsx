import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [cook, setCook] = useState([]);

  const [currentlyCooking, setCurrentlyCooking] = useState([]);

  useEffect(() => {
    fetch("./foodsData.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  // want to cook handle
  const handleCook = (addToCook) => {
    const isExit = cook.find(
      (cookItem) => addToCook.recipe_id == cookItem.recipe_id
    );

    if (!isExit) {
      setCook([...cook, addToCook]);
      
    } else {
      toast("Recipe already exists", { type: "error" });
    }
  };

  // handle preparing

  const handlePreparing = (preparingItems) => {
    const newCooking = cook.filter(
      (preparingItem) => preparingItems.recipe_id !== preparingItem.recipe_id
    );
    setCook(newCooking);
    setCurrentlyCooking([...currentlyCooking, preparingItems]);
  };


  return (
    <section className="container mx-auto px-1 lg:px-24">
      <div className="text-center">
        <h3 className="text-4xl font-bold">Latest Posts</h3>

        <p className="space-y-8 m-8">
          Italian cuisine is renowned for its rich flavors and comforting
          dishes, and pasta is undoubtedly one of its most beloved creations.{" "}
          <br /> Whether it is a hearty bowl of spaghetti Bolognese or delicate
          filled with creamy ricotta, Italian pasta dishes never fail to
          tantalize the taste buds.{" "}
        </p>
      </div>

      <div className="lg:flex gap-4">
        {/* LEFT SIDE STARTS */}

        <div className="grid lg:grid-cols-2 gap-4 flex-1">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe_id}
              recipe={recipe}
              handleCook={handleCook}
            ></Recipe>
          ))}
        </div>
        {/* LEFT SIDE ENDS */}

        {/* RIGHT SIDE STARTS */}
        <div className="p-4 border-2 border-gray-300 rounded-2xl lg:w-[35%]">
          {
            <h1 className=" text-2xl font-semibold text-center p-4">
              Want to cook:{" "}
              {cook.map((item, index) => (
                <p key={index}>{index}</p>
              ))}
            </h1>
          }
          <hr />

          {/* TABLE 1*/}
          <div className="overflow-x-auto py-8 ">
            <table className="table table-xs">
              <thead className="">
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>

              <tbody className="bg-base-200 text-base font-semibold text-[#878787]">
                {cook.map((item, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{item.recipe_name}</td>
                    <td>{item.preparing_time}</td>
                    <td>{item.calories}</td>

                    <td>
                      <button
                        onClick={(e) => {
                          handlePreparing(item);
                        }}
                        className="btn text-base bg-[#0BE58A] rounded-full font-medium"
                      >
                        Preparing
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* TABLE ENDS 1 */}

          <h1 className=" text-2xl font-semibold text-center p-4">
            Want to cook: 01
          </h1>
          <hr />

          {/* TABLE 2 */}
          <div className="overflow-x-auto py-8 ">
            <table className="table table-xs">
              <thead className="">
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody className="bg-base-200 text-base font-semibold text-[#878787]">
                {currentlyCooking.map((item, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{item.recipe_name}</td>
                    <td>{item.preparing_time}</td>
                    <td>{item.calories}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* TABLE ENDS 2 */}
        </div>
      </div>
    </section>
  );
};

export default Recipes;
