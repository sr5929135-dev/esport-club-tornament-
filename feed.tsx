import { ArrowLeft, Heart, MessageCircle, Share, Trophy, Users } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BottomNav from "@/components/bottom-nav";

const WINNER_POSTS = [
  {
    id: 1,
    player: "ProGamer_X",
    avatar: "ߑ",
    match: "Daily Scrims #45",
    placement: "1st Place",
    kills: "12 Kills",
    prize: "₹150",
    time: "2 hours ago",
    image: "ߏ",
    likes: 342,
    comments: 28
  },
  {
    id: 2,
    player: "ShadowHunter",
    avatar: "⚔️",
    match: "Purgatory Solo King",
    placement: "1st Place",
    kills: "8 Kills",
    prize: "₹60",
    time: "4 hours ago",
    image: "ߑ",
    likes: 285,
    comments: 19
  },
  {
    id: 3,
    player: "SquadMaster99",
    avatar: "ߎ",
    match: "Kalahari Clash Squad",
    placement: "Winner",
    kills: "28 Kills (Team)",
    prize: "₹300",
    time: "6 hours ago",
    image: "⭐",
    likes: 512,
    comments: 45
  },
  {
    id: 4,
    player: "LegendaryDuo",
    avatar: "ߑ",
    match: "Late Night Duo",
    placement: "Winners",
    kills: "15 Kills",
    prize: "₹120",
    time: "8 hours ago",
    image: "ߒ",
    likes: 198,
    comments: 14
  }
];

export default function Feed() {
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
          <h1 className="text-lg font-bold text-white">Match Winners Feed</h1>
        </div>
      </div>

      <main className="px-4 max-w-md mx-auto mt-4 space-y-4">
        <div className="text-center text-xs text-gray-400 mb-4">
          ߔ Latest winners and highlights from Esport Club Tournament
        </div>

        {/* Winner Posts - Instagram Style */}
        {WINNER_POSTS.map((post, idx) => (
          <Card 
            key={post.id} 
            className="bg-card border-white/5 overflow-hidden hover:border-primary/30 transition-all"
            style={{
              animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s both`
            }}
          >
            {/* Post Header */}
            <div className="bg-black/20 p-3 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center text-lg">
                  {post.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{post.player}</p>
                  <p className="text-[10px] text-gray-400">{post.time}</p>
                </div>
              </div>
              <Trophy className="w-5 h-5 text-yellow-400" />
            </div>

            {/* Post Image/Highlight */}
            <div className="aspect-square bg-gradient-to-br from-purple-900/50 to-indigo-900/50 flex items-center justify-center text-6xl relative">
              {post.image}
              <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                {post.placement}
              </div>
            </div>

            {/* Post Body */}
            <div className="p-4 space-y-3">
              <div>
                <p className="text-sm text-gray-300 mb-2">{post.match}</p>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Users className="w-3 h-3" />
                    {post.kills}
                  </div>
                  <div className="flex items-center gap-2 text-yellow-400 font-bold">
                    <Trophy className="w-3 h-3" />
                    Prize: {post.prize}
                  </div>
                </div>
              </div>

              {/* Post Actions */}
              <div className="flex items-center justify-between text-gray-400 pt-2 border-t border-white/5">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                    <Heart className="w-4 h-4" />
                    <span className="text-xs">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-xs">{post.comments}</span>
                  </button>
                </div>
                <button className="hover:text-green-500 transition-colors">
                  <Share className="w-4 h-4" />
                </button>
              </div>
            </div>
          </Card>
        ))}
      </main>

      <BottomNav />
    </div>
  );
}

<style>{`
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`}</style>
