import RecipeCard from "@/src/components/RecipeCard";
import Image from "next/image";

const categories = [
  { name: "Entradas" },
  { name: "Pratos Principais" },
  { name: "Sobremesas" },
  { name: "Bebidas" },
];

const recipes = [
  {
    id: "1",
    title: "A melhor sopa de tomate do mundo",
    description: "A sopa de tomate mais deliciosa que você já experimentou.",
    imageUrl: "/sopaDeTomate.JPG",
    prepTime: 60,
    tags: ["Vegetariano", "Vegano"],
    slug: "a-melhor-sopa-de-tomate-do-mundo",
  },
  {
    id: "2",
    title: "Buffalo Wings",
    description:
      "Asas de frango crocantes e picantes, perfeitas para petiscar.",
    imageUrl: "/bufaloWings.JPG",
    prepTime: 45,
    tags: ["Carne", "Lanche"],
    slug: "buffalo-wings",
  },
  {
    id: "3",
    title: "Nhoque ao Pesto",
    description: "Nhoque caseiro servido com um molho pesto fresco e saboroso.",
    imageUrl: "/nhoquePesto.JPG",
    prepTime: 30,
    tags: ["Sem glúten", "Proteína"],
    slug: "nhoque-ao-pesto",
  },
  {
    id: "4",
    title: "Macarraão Arrabiata",
    description: "Massa ao molho de tomate picante com alho e pimenta.",
    imageUrl: "/arrabiata.JPG",
    prepTime: 20,
    tags: ["Vegetariano"],
    slug: "macarrao-arrabiata",
  },
  {
    id: "5",
    title: "Macarrão com parmegiana de porco",
    description: "Delicioso macarrão servido com parmegiana de porco crocante.",
    imageUrl: "/macarraoComParmegiana.JPG",
    prepTime: 40,
    tags: ["Carne", "Lanche"],
    slug: "macarrao-com-parmegiana-de-porco",
  },
  {
    id: "6",
    title: "Whisky Sour",
    description:
      "Um coquetel clássico feito com whisky, suco de limão e açúcar.",
    imageUrl: "/whiskySour.JPG",
    prepTime: 5,
    tags: ["Drink", "Alcoólico"],
    slug: "whisky-sour",
  },
];

export default function RecipesPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-primary">
      <main className="flex min-h-screen w-full max-w-7xl flex-col items-center justify-between py-16 px-16 bg-primary sm:items-start">
        <div className="grid w-full grid-cols-1 gap-16">
          <div className="flex flex-col justify-center items-center text-secondary">
            <h1 className="text-3xl font-semibold font-primary text-center md:text-5xl lg:text-6xl">
              Todas as Receitas
            </h1>

            <div className="mt-6 flex flex-wrap gap-2 items-center justify-center">
              {categories.map((category) => (
                <span
                  key={category.name}
                  className="inline-block mt-3 mr-1 rounded-full bg-secondary/20 px-10 py-3 text-sm font-medium hover:bg-secondary/30 transition-colors cursor-pointer"
                >
                  {category.name}
                </span>
              ))}
            </div>
          </div>

          <hr className="w-full border-t border-gray-300" />

          <div className="grid grid-cols-1 gap-8 w-full lg:grid-cols-3">
            {recipes.map((recipe) => (
              <div key={recipe.id} className="mb-8 col-span-1">
                <RecipeCard
                  title={recipe.title}
                  description={recipe.description}
                  imageUrl={recipe.imageUrl}
                  recipeId={recipe.id}
                  prepTime={recipe.prepTime}
                  tags={recipe.tags}
                  slug={recipe.slug}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
