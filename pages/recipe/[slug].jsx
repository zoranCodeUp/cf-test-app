import { client } from "@/config";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useRouter } from "next/router";
const RecipeDetails = ({ recipe }) => {
  console.log(recipe);
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col gap-4 my-10">
      <h1 className="text-4xl font-extrabold">{recipe.fields.recipeName}</h1>
      <p className="font-bold">{recipe.fields.cookingTime} min</p>
      <div className="max-w-[800px] m-auto">
        <img
          src={`https:${recipe.fields.recipeImage.fields.file.url}`}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <span className="font-bold"> Ingredients:</span>
      <ul className="flex items-center gap-2">
        {recipe.fields.ingredients.map((ingredient) => (
          <li className="bg-white text-gray-500 p-2" key={ingredient}>
            {ingredient}
          </li>
        ))}
      </ul>
      <div>
        <span className="font-bold"> Prepare method:</span>
        {documentToReactComponents(recipe.fields.recipeMethod)}
      </div>
    </div>
  );
};

export default RecipeDetails;

export const getStaticPaths = async () => {
  const recipes = await client.getEntries({
    content_type: "recipe",
  });

  const paths = recipes.items.map((recipe) => ({
    params: {
      slug: recipe.fields.slug,
    },
  }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const recipe = await client.getEntries({
    content_type: "recipe",
    "fields.slug": params.slug,
  });
  return {
    props: {
      recipe: recipe.items[0],
    },
    revalidate: 30,
  };
};
