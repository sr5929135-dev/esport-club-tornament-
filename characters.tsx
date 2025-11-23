d } from "@/components/ui/card";
import BottomNav from "@/components/bottom-nav";

// Import generated assets
import djIcon from "@assets/generated_images/dj_battle_character.png";
import sprinterIcon from "@assets/generated_images/sprinter_girl_character.png";
import samuraiIcon from "@assets/generated_images/samurai_warrior_character.png";
import shieldIcon from "@assets/generated_images/futuristic_shield_character.png";
import monkeyIcon from "@assets/generated_images/monkey_king_tactical_character.png";

const CHARACTERS = [
  {
    id: "alok",
    name: "DJ Beat",
    role: "Support",
    ability: "Drop the Beat",
    desc: "Creates a 5m aura that increases moving speed and restores HP.",
    image: djIcon,
    color: "text-pink-500",
    icon: Music
  },
  {
    id: "kelly",
    name: "Sprinter K",
    role: "Rusher",
    ability: "Dash",
    desc: "Sprinting speed increased by 6%.",
    image: sprinterIcon,
    color: "text-yellow-400",
    icon: Wind
  },
  {
    id: "hayato",
    name: "Samurai H",
    role: "Tank/Rusher",
    ability: "Bushido",
    desc: "With every 10% decrease in max HP, armor penetration increases by 10%.",
    image: samuraiIcon,
    color: "text-red-500",
    icon: Sword
  },
  {
    id: "chrono",
    name: "Time Turner",
    role: "Defender",
    ability: "Time Turner",
    desc: "Creates a force field that blocks 600 damages from enemies.",
    image: shieldIcon,
    color: "text-blue-400",
    icon: Shield
  },
  {
    id: "wukong",
    name: "Monkey King",
    role: "Sneak",
    ability: "Camouflage",
    desc: "Turns into a bush with 20% speed reduction. CD reset on kill.",
    image: monkeyIcon,
    color: "text-green-500",
    icon: Zap
  }
];

export default function Characters() {
  return (
    <div className="min-h-screen bg-background pb-24 font-sans">
      {/* Header */}
      <div className="bg-card p-4 sticky top-0 z-10 border-b border-white/5">
        <div className="flex items-center gap-3 max-w-md mx-auto">
          <Link href="/">
            <Button variant="ghost" size="icon" className="text-white -ml-2">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-lg font-bold text-white">Characters</h1>
        </div>
      </div>

      <main className="px-4 max-w-md mx-auto mt-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {CHARACTERS.map((char) => (
            <Card key={char.id} className="bg-card border-white/5 overflow-hidden group relative">
              <div className="aspect-[3/4] relative">
                <img 
                  src={char.image} 
                  alt={char.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-white text-lg leading-none">{char.name}</h3>
                    <char.icon className={`w-5 h-5 ${char.color}`} />
                  </div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold mb-2">
                    {char.role}
                  </div>
                  <p className="text-[10px] text-gray-300 line-clamp-2 leading-tight">
                    {char.desc}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
