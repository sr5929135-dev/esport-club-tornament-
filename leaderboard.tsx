import { ArrowLeft, Trophy, Flame, Award, Crown } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BottomNav from "@/components/bottom-nav";

const LEADERBOARD_DATA = [
  {
    rank: 1,
    player: "ProGamer_X",
    matchesPlayed: 42,
    wins: 18,
    winRate: "42.8%",
    level: 5,
    avatar: "ߑ"
  },
  {
    rank: 2,
    player: "ShadowHunter",
    matchesPlayed: 38,
    wins: 15,
    winRate: "39.4%",
    level: 5,
    avatar: "⚔️"
  },
  {
    rank: 3,
    player: "SquadMaster99",
    matchesPlayed: 35,
    wins: 13,
    winRate: "37.1%",
    level: 4,
    avatar: "ߎ"
  },
  {
    rank: 4,
    player: "LegendaryDuo",
    matchesPlayed: 32,
    wins: 11,
    winRate: "34.3%",
    level: 4,
    avatar: "ߑ"
  },
  {
    rank: 5,
    player: "NeonKnight",
    matchesPlayed: 29,
    wins: 10,
    winRate: "34.4%",
    level: 3,
    avatar: "ߗ️"
  },
  {
    rank: 6,
    player: "VortexStrike",
    matchesPlayed: 26,
    wins: 8,
    winRate: "30.7%",
    level: 3,
    avatar: "⚡"
  },
  {
    rank: 7,
    player: "PhantomDash",
    matchesPlayed: 23,
    wins: 7,
    winRate: "30.4%",
    level: 2,
    avatar: "ߑ"
  },
  {
    rank: 8,
    player: "IceBreaker",
    matchesPlayed: 20,
    wins: 6,
    winRate: "30%",
    level: 2,
    avatar: "❄️"
  }
];

const LEVEL_5_ACHIEVERS = [
  { player: "ProGamer_X", date: "Nov 18, 2024", avatar: "ߑ" },
  { player: "ShadowHunter", date: "Nov 19, 2024", avatar: "⚔️" }
];

export default function Leaderboard() {
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
          <h1 className="text-lg font-bold text-white">Leaderboard</h1>
        </div>
      </div>

      <main className="px-4 max-w-md mx-auto mt-6 space-y-6">
        {/* Level 5 Achievers - Hall of Fame */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Crown className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-bold text-white">ߎ️ Level 5 Achievers</h3>
          </div>
          <Card className="bg-gradient-to-r from-yellow-900/50 to-orange-900/50 border border-yellow-500/30 p-4 space-y-3">
            {LEVEL_5_ACHIEVERS.length > 0 ? (
              <div className="space-y-2">
                {LEVEL_5_ACHIEVERS.map((achiever, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-black/30 p-3 rounded-lg border border-yellow-500/20">
                    <span className="text-2xl">{achiever.avatar}</span>
                    <div className="flex-1">
                      <p className="font-bold text-white">{achiever.player}</p>
                      <p className="text-xs text-gray-400">Achieved on {achiever.date}</p>
                    </div>
                    <Badge className="bg-yellow-500/30 text-yellow-300 border-yellow-500/30">⭐ ELITE</Badge>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-400">No achievers yet. Be the first to reach Level 5! ߏ</p>
            )}
          </Card>
        </section>

        {/* Main Leaderboard */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Flame className="w-5 h-5 text-orange-500 fill-orange-500 animate-pulse" />
            <h3 className="text-lg font-bold text-white">Top Players</h3>
          </div>

          <div className="space-y-2">
            {LEADERBOARD_DATA.map((player) => {
              const medalIcon = 
                player.rank === 1 ? "ߥ" :
                player.rank === 2 ? "ߥ" :
                player.rank === 3 ? "ߥ" :
                `#${player.rank}`;

              return (
                <Card 
                  key={player.rank}
                  className={`border transition-all ${
                    player.rank <= 3 
                      ? "border-yellow-500/30 bg-yellow-900/20" 
                      : "border-white/10 bg-card/40"
                  } p-3`}
                >
                  <div className="flex items-center gap-3">
                    {/* Rank */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      player.rank === 1 ? "bg-yellow-500/30 text-yellow-400" :
                      player.rank === 2 ? "bg-gray-500/30 text-gray-300" :
                      player.rank === 3 ? "bg-orange-500/30 text-orange-400" :
                      "bg-white/10 text-white"
                    }`}>
                      {medalIcon}
                    </div>

                    {/* Player Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{player.avatar}</span>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-white truncate">{player.player}</p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <Badge variant="outline" className="bg-blue-500/10 text-blue-300 border-blue-500/20 text-[10px] px-2 py-0.5">
                              Level {player.level}
                            </Badge>
                            {player.level === 5 && (
                              <Badge className="bg-yellow-500/30 text-yellow-300 border-yellow-500/30 text-[10px] px-2 py-0.5">
                                ⭐ ELITE
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="text-right">
                      <p className="text-xs text-gray-400">Matches</p>
                      <p className="font-bold text-white text-sm">{player.matchesPlayed}</p>
                      <p className="text-[10px] text-green-400 mt-1">W: {player.wins} ({player.winRate})</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Stats Info */}
        <Card className="bg-white/5 border-white/10 p-4">
          <div className="flex items-start gap-3">
            <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
            <div className="text-sm">
              <p className="font-bold text-white mb-1">How Rankings Work</p>
              <div className="text-gray-300 text-xs space-y-1">
                <div>ߓ Ranked by matches played</div>
                <div>ߏ Win rate determines position</div>
                <div>⭐ Level 5 players get elite status</div>
              </div>
            </div>
          </div>
        </Card>
      </main>

      <BottomNav />
    </div>
  );
}
