import { Compass, Cloud, Heart, Camera, Keyboard, Dice6, Headphones, Cat, Grid3x3, HandHeart, Hourglass, Accessibility } from "lucide-react";

export default function AboutInterests() {
  const interests = [
    {
      icon: Compass,
      title: "What I'm Exploring",
      items: [
        { icon: Camera, text: "Analog photography workflows" },
        { icon: Keyboard, text: "Mechanical keyboard builds" },
        { icon: Dice6, text: "The mathematics of shuffling" },
      ],
    },
    {
      icon: Cloud,
      title: "Outside of Work",
      items: [
        { icon: Headphones, text: "Audio enthusiast (Hi-Fi)" },
        { icon: Cat, text: "Cat dad to Udon & Ramen" },
        { icon: Grid3x3, text: "Occasional Mahjong strategist" },
      ],
    },
    {
      icon: Heart,
      title: "Values",
      items: [
        { icon: HandHeart, text: "Kindness over correctness" },
        { icon: Hourglass, text: "Sustainable pace" },
        { icon: Accessibility, text: "Accessibility is not optional" },
      ],
    },
  ];

  return (
    <section className="px-6 md:px-12 py-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {interests.map((interest, index) => {
          const TitleIcon = interest.icon;
          return (
            <div
              key={index}
              className="bg-surface-light rounded-lg p-8 border border-gray-100 hover:shadow-sm transition-shadow duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <TitleIcon className="w-5 h-5 text-muted-light group-hover:text-indigo-500 transition-colors" />
                <h3 className="font-mono text-sm font-bold uppercase tracking-widest">
                  {interest.title}
                </h3>
              </div>
              <ul className="space-y-4">
                {interest.items.map((item, itemIndex) => {
                  const ItemIcon = item.icon;
                  return (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 text-sm text-muted-light"
                    >
                      <ItemIcon className="w-[18px] h-[18px] text-indigo-400 mt-0.5 flex-shrink-0" />
                      <span>{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

