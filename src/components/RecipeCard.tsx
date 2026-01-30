import Link from "next/link";

type RecipeCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  recipeId: string;
  prepTime: number;
  tags?: string[];
  slug?: string;
};

export default function RecipeCard({
  title,
  description,
  imageUrl,
  recipeId,
  prepTime,
  tags,
  slug,
}: RecipeCardProps) {
  function formatPrepTime(minutes: number): string {
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hrs > 0 ? `${hrs}h ${mins}m` : `${mins}m`;
  }
  return (
    <Link href={`/recipes/${slug}`} className="block h-full">
      <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 text-secondary h-fullfont-primary">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-72 object-cover rounded-2xl"
        />
        <div className="p-4 bg-white gap-2 flex flex-col">
          <h2 className="text-2xl font-semibold text-secondary">{title}</h2>
          <p className="text-gray-600 text-md">{description}</p>
          <div className="flex flex-col gap-4 my-4 lg:flex-row lg:justify-between lg:items-center">
            <div>
              {tags &&
                tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-secondary/20 rounded-full px-3 py-2 text-xs font-medium text-secondary"
                  >
                    {tag}
                  </span>
                ))}
            </div>

            <p className="text-gray-600 text-sm">{formatPrepTime(prepTime)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
