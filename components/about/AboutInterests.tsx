import { Compass, Cloud, Heart, Camera, UtensilsCrossed, ScanEye, Headphones, Cat, Network, Target, AlignLeft, BadgeCheck } from "lucide-react";

export default function AboutInterests() {
  const interests = [
    {
      icon: Compass,
      title: "What I'm Exploring",
      items: [
        { icon: Camera, text: "Fujifilm film simulations and visual storytelling" },
        { icon: ScanEye, text: "Real-time object detection and applied computer vision (YOLO)" },
        { icon: Network, text: "Computer network architectures and protocols"}
      ],
    },
    {
      icon: Cloud,
      title: "Outside of Work",
      items: [
        { icon: Cat, text: "Cat dad to Udon & Ramen" },
        { icon: Headphones, text: "Kpop enthusiast: aespa, NewJeans, and Hearts2Heart" },
        { icon: UtensilsCrossed, text: "Culinary competitions and cooking shows like “Culinary Class Wars”" },
        // { icon: Grid3x3, text: "Occasional Mahjong strategist" },
      ],
    },
    {
      icon: Heart,
      title: "Values",
      items: [
        { icon: Target, text: "Be intentional with decisions, both technical and personal" },
        { icon: AlignLeft, text: "Clarity over cleverness in code, design, and communication" },
        { icon: BadgeCheck, text: "Lead by action and follow through on commitments" },
      ],
    },
  ];

  return (
    <section className="px-6 md:px-12 py-12 max-w-7xl mx-auto">
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

