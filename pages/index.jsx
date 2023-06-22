import Image from "next/image";
import { Inter } from "next/font/google";
import { client } from "@/config";
import Link from "next/link";
import RecipeCard from "@/components/RecipeCard";

export default function Home({ recipes }) {
  console.log(recipes);
  return (
    <div className="flex flex-wrap gap-2">
      {recipes.map((recipe) => (
        <Link href={`/recipe/${recipe.fields.slug}`} key={recipe.sys.id}>
          <RecipeCard recipe={recipe} />
        </Link>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const recipes = await client.getEntries({
    content_type: "recipe",
  });
  return {
    props: { recipes: recipes.items },
  };
};
