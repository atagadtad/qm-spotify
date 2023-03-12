import { useEffect } from "react";

const Hello = () => {
  useEffect(() => {
    const fetchCocktail = async (cocktail) => {
      const result = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`
      );
      const data = await result.json();
      console.log({ data });
    };

    fetchCocktail("martini");
  }, []);

  return (
    <div className="flex">
      <div className="mx-auto">
        <h1 className="text-3xl font-bold underline">Cocktails</h1>
      </div>
    </div>
  );
};

export default Hello;
