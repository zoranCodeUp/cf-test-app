import Image from "next/image";

const RecipeCard = ({ recipe }) => {
  const { recipeImage, recipeName } = recipe.fields;
  return (
    <div className="bg-yellow-50 pb-2 flex flex-col gap-6 shadow-md rounded-t-lg overflow-hidden  items-center">
      <Image
        src={`https:${recipeImage.fields.file.url}`}
        alt={recipeName}
        width={300}
        height={300}
        loading="lazy"
        placeholder="blur"
        blurDataURL="/Placeholder_view_vector.svg.png"
      />
      <h2 className="text-lg text-gray-600">{recipeName}</h2>
      <button className="bg-red-400 text-white font-bold px-4 py-2">
        Read more
      </button>
    </div>
  );
};

export default RecipeCard;
