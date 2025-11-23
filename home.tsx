import { useState } from "react";
import { Link } from "wouter";
import { ChevronRight, Trophy, Flame, Zap, Crosshair, Shield, Settings } from "lucide-react";
import WalletHeader from "@/components/wallet-header";
import BottomNav from "@/components/bottom-nav";
import BannerCarousel from "@/components/banner-carousel";
import GameCard from "@/components/game-card";

// Import generated assets
import soloIcon from "@assets/generated_images/solo_soldier_icon.png";
import duoIcon from "@assets/generated_images/duo_team_icon.png";
import squadIcon from "@assets/generated_images/squad_team_icon.png";
import clashSquadIcon from "@assets/generated_images/clash_squad_icon.png";
import essportLogo from "@assets/generated_images/essport_club_official_logo.png"; // New Logo

const CATEGORIES = ["All Modes", "Battle Royale", "Clash Squad", "TDM", "Custom Rooms"];

const GAMES = [
  {
    id: "solo",
    title: "Solo Battle Royale",
    category: "Survival",
    players: "48/48",
    prize: "₹500 Per Kill",
    image: soloIcon,
    featured: true
  },
  {
    id: "squad",
    title: "Squad Tournament",
    category: "Team",
    players: "12/12 Squads",
    prize: "₹10,000 Pool",
    image: squadIcon,
    featured: true
  },
  {
    id: "duo",
    title: "Duo Showdown",
    category: "Duo",
    players: "24/24 Duos",
    prize: "₹5,000 Pool",
    image: duoIcon,
    featured: false
  },
  {
    id: "clash",
    title: "Clash Squad Ranked",
    category: "4v4",
    players: "Waiting...",
    prize: "₹2,000 Winner",
    image: clashSquadIcon,
    featured: false
  }
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All Modes");

  return (
    <div className="min-h-screen bg-background pb-24 pt-16 font-sans">
      <WalletHeader />

      <main className="px-4 max-w-md mx-auto space-y-6">
        {/* Branding Header */}
        <div className="flex items-center justify-between bg-card/50 p-3 rounded-xl border border-white/5 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary shadow-[0_0_10px_rgba(255,0,85,0.5)]">
              <img src={essportLogo} alt="Esport Club Tournament" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="font-bold text-white leading-none">Esport Club Tournament</h1>
              <p className="text-[10px] text-primary font-medium tracking-wider uppercase">Official App</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/admin">
              <button className="p-2 hover:bg-white/10 rounded-lg transition-all" title="Admin Controller" data-testid="button-admin-controller">
                <Settings className="w-5 h-5 text-gray-400 hover:text-primary" />
              </button>
            </Link>
            <div className="flex items-center gap-1 text-xs font-bold text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-full border border-yellow-400/20">
              <Shield className="w-3 h-3" />
              VERIFIED
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <BannerCarousel />

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2 -mx-4 px-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all duration-300
                ${activeCategory === cat 
                  ? "bg-primary text-white shadow-[0_0_15px_rgba(255,0,85,0.4)]" 
                  : "bg-card text-muted-foreground hover:bg-card/80 hover:text-white border border-white/5"}
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-500 fill-orange-500 animate-pulse" />
              <h2 className="text-lg font-bold text-white">Live Matches</h2>
            </div>
            <Link href="/matches">
              <span className="text-xs font-medium text-primary flex items-center cursor-pointer hover:underline">
                View all <ChevronRight className="w-3 h-3" />
              </span>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {GAMES.slice(0, 2).map((game) => (
              <GameCard 
                key={game.id}
                title={game.title}
                image={game.image}
                players={game.players}
                prizePool={game.prize}
                category={game.category}
              />
            ))}
          </div>
        </section>

        {/* Quick Play Horizontal Scroll */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Crosshair className="w-5 h-5 text-red-500" />
            <h2 className="text-lg font-bold text-white">Upcoming Rooms</h2>
          </div>
          
          <div className="flex gap-4 overflow-x-auto hide-scrollbar -mx-4 px-4 pb-4">
            {GAMES.map((game) => (
              <div key={game.id} className="min-w-[160px]">
                <GameCard 
                  title={game.title}
                  image={game.image}
                  players={game.players}
                  prizePool={game.prize}
                />
              </div>
            ))}
          </div>
        </section>
        
        {/* Tournaments Banner */}
        <section className="relative rounded-xl overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-red-900/90 z-0" />
          <div className="relative z-10 p-5 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Trophy className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400 text-xs font-bold uppercase tracking-wider">Elite Pass</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Monthly Championship</h3>
              <p className="text-sm text-gray-300">Win Elite Pass & Diamonds</p>
            </div>
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20">
              <ChevronRight className="w-6 h-6 text-white" />
            </div>
          </div>
        </section>

        {/* Community Links */}
        <div className="grid grid-cols-1 gap-3">
          {/* Instagram Community Banner */}
          <a 
            href="https://www.instagram.com/esportclubtourement?igsh=MW1kdDBpZ3p2ZjVxYQ==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block relative rounded-xl overflow-hidden border border-pink-500/20 group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-90 z-0 transition-opacity group-hover:opacity-100" />
            <div className="relative z-10 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-pink-600"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Join Instagram Community</h3>
                  <p className="text-xs text-pink-100">Get latest updates & giveaways</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-white" />
            </div>
          </a>

          {/* YouTube Channel Banner */}
          <a 
            href="https://youtube.com/@esportclubtournament?si=6FKZrQuLtANOCAX6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block relative rounded-xl overflow-hidden border border-red-500/20 group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-90 z-0 transition-opacity group-hover:opacity-100" />
            <div className="relative z-10 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-600"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Subscribe on YouTube</h3>
                  <p className="text-xs text-red-100">Watch tournament highlights & clips</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-white" />
            </div>
          </a>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
