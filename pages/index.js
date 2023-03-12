import { useEffect, useState } from "react";

const Hello = () => {
  const [cocktails, setCocktails] = useState([]);
  const [cocktail, setCocktail] = useState("");

  const fetchCocktail = async (cocktail) => {
    const result = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`
    );
    const data = await result.json();

    setCocktails(data?.drinks ?? []);
  };

  console.log(cocktails);

  return (
    <div className="flex">
      <div className="mx-auto">
        <h1 className="text-3xl font-bold underline">Cocktails</h1>

        <div class="flex m-4 gap-4">
          <input
            value={cocktail}
            onChange={(e) => setCocktail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cocktail"
            type="text"
            placeholder="Type a cocktail..."
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => fetchCocktail(cocktail)}
          >
            Submit
          </button>
        </div>

        {cocktails.map((cocktail) => {
          return (
            <div className="flex gap-2 my-4">
              <img
                className="h-48 object-contain"
                src={cocktail.strDrinkThumb}
              />

              <div className="grid col-2 gap-4">
                <div className="w-56">
                  <h1 className="underline font-bold text-xl">
                    {cocktail.strDrink}
                  </h1>
                  <h1>Ingredients:</h1>

                  <ul className="list-disc list-inside">
                    {ingredients(cocktail).map((recipe) => (
                      <li>
                        <strong>{recipe.measurement}</strong>{" "}
                        {recipe.ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-start-2 w-96">
                  <h1 className="underline font-bold text-xl">How to make:</h1>
                  <p>{cocktail.strInstructions}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hello;

const ingredients = (cocktail) => {
  const result = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail[`strIngredient${i}`];
    const measurement = cocktail[`strMeasure${i}`];
    if (ingredient) result.push({ ingredient, measurement });
  }
  console.log({ result });
  return result;
};
