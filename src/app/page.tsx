import Image from "next/image";
import RecipeCard from "../components/RecipeCard";

const categories = [
  { name: "Entradas" },
  { name: "Pratos Principais" },
  { name: "Sobremesas" },
  { name: "Bebidas" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-primary">
      <main className="flex min-h-screen w-full max-w-7xl flex-col items-center justify-between py-16 px-16 bg-primary sm:items-start">
        <div className="grid w-full grid-cols-1 gap-16 md:grid-cols-2">
          <div className="flex flex-col justify-center items-center text-secondary">
            <h1 className="text-3xl font-semibold font-primary text-center md:text-5xl lg:text-6xl">
              Vamos tentar uma receita nova?
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

          <div>
            <RecipeCard
              description="A sopa de tomate mais deliciosa que você já experimentou."
              title="A melhor sopa de tomate do mundo"
              imageUrl="/sopaDeTomate.JPG"
              recipeId="1"
              prepTime={60}
              tags={["Vegetariano", "Vegano"]}
            ></RecipeCard>
          </div>
        </div>
      </main>
    </div>
  );
}
