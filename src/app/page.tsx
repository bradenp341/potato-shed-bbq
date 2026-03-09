import Link from "next/link";
import menuData from "../../content/menu.json";
import eventsData from "../../content/events.json";

function getUpcomingEvents() {
  const now = new Date();
  return eventsData.events
    .filter((e) => new Date(e.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export default function Home() {
  const upcoming = getUpcomingEvents();
  const featuredCategory = menuData.categories[0];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-stone-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-900 to-red-800/30" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
          <p className="text-amber-500 font-semibold tracking-widest uppercase text-sm mb-4">
            The Midwest&apos;s Best
          </p>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6">
            Potato Shed
            <br />
            <span className="text-red-600">BBQ</span>
          </h1>
          <p className="text-stone-300 text-lg sm:text-xl max-w-lg mb-8 leading-relaxed">
            Authentic low-and-slow smoked barbecue in Randolph, Minnesota.
            Brisket, pulled pork, sausage, and homemade sides &mdash; all
            crafted with 30+ years of pit master experience.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/menu"
              className="inline-block bg-red-700 hover:bg-red-800 text-white font-semibold px-8 py-3 rounded transition-colors"
            >
              View Menu
            </Link>
            <Link
              href="/about"
              className="inline-block border border-stone-600 hover:border-stone-400 text-stone-300 hover:text-white font-semibold px-8 py-3 rounded transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-white border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">
            Upcoming Cooks
          </h2>
          {upcoming.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2">
              {upcoming.map((event, i) => (
                <div
                  key={i}
                  className="border border-stone-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="text-amber-600 font-semibold text-sm uppercase tracking-wide mb-1">
                    {new Date(event.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-1">
                    {event.title}
                  </h3>
                  {event.time && (
                    <p className="text-stone-500 text-sm mb-2">{event.time}</p>
                  )}
                  {event.description && (
                    <p className="text-stone-600 text-sm">{event.description}</p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-stone-50 rounded-lg p-8 text-center">
              <p className="text-stone-500 text-lg">
                No upcoming cooks scheduled right now.
              </p>
              <p className="text-stone-400 text-sm mt-2">
                Check back soon or follow us for updates!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Menu Preview */}
      <section className="bg-stone-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl font-bold text-stone-900">
              From the Pit
            </h2>
            <Link
              href="/menu"
              className="text-red-700 hover:text-red-800 font-semibold text-sm transition-colors"
            >
              Full Menu &rarr;
            </Link>
          </div>
          {featuredCategory && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featuredCategory.items.slice(0, 6).map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg p-5 border border-stone-200 flex justify-between items-center"
                >
                  <span className="font-medium text-stone-800">
                    {item.name}
                  </span>
                  <span className="text-amber-700 font-bold">{item.price}</span>
                </div>
              ))}
            </div>
          )}
          {featuredCategory?.description && (
            <p className="text-stone-400 text-sm mt-4 italic">
              {featuredCategory.description}
            </p>
          )}
        </div>
      </section>

      {/* Location CTA */}
      <section className="bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Find Us</h2>
          <p className="text-stone-300 text-lg mb-2">
            28229 Rochester Blvd, Randolph, MN 55065
          </p>
          <a
            href="mailto:info@potatoshedbbq.com"
            className="text-amber-500 hover:text-amber-400 font-medium transition-colors"
          >
            info@potatoshedbbq.com
          </a>
        </div>
      </section>
    </>
  );
}
