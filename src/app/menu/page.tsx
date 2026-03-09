import type { Metadata } from "next";
import menuData from "../../../content/menu.json";

export const metadata: Metadata = {
  title: "Menu - Potato Shed BBQ",
  description: "Smoked brisket, pulled pork, sausage, and homemade sides. View our full BBQ menu.",
};

export default function MenuPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-stone-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <h1 className="text-4xl font-extrabold tracking-tight">Menu</h1>
          <p className="text-stone-400 mt-2">
            Smoked low and slow with post oak and pecan
          </p>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="space-y-12">
          {menuData.categories.map((category, ci) => (
            <section key={ci}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-stone-900">
                  {category.name}
                </h2>
                {category.description && (
                  <p className="text-stone-500 text-sm mt-1">
                    {category.description}
                  </p>
                )}
              </div>
              <div className="divide-y divide-stone-100">
                {category.items.map((item, ii) => (
                  <div
                    key={ii}
                    className="flex justify-between items-center py-4 group"
                  >
                    <span className="text-stone-800 font-medium group-hover:text-stone-950 transition-colors">
                      {item.name}
                    </span>
                    <span className="text-amber-700 font-bold text-lg ml-4 shrink-0">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
