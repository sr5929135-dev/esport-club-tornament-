import { ArrowLeft, Clock, Trophy, Users, Filter, AlertCircle, Map, Crown } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BottomNav from "@/components/bottom-nav";

const MATCHES = [
  {
    id: 1,
    title: "Daily Scrims #45",
    map: "Bermuda",
    type: "Squad",
    fee: "₹20",
    prize: "₹300",
    time: "4:00 PM",
    slots: "11/12",
    status: "Filling Fast",
    color: "from-green-900/80 to-emerald-900/80",
    accent: "text-green-400",
    prizes: [
      { rank: "1st", amount: "₹150" },
      { rank: "2nd", amount: "₹100" },
      { rank: "3rd", amount: "₹50" }
    ]
  },
  {
    id: 2,
    title: "Purgatory Solo King",
    map: "Purgatory",
    type: "Solo",
    fee: "₹10",
    prize: "₹100",
    time: "6:30 PM",
    slots: "42/48",
    status: "Filling Fast",
    color: "from-orange-900/80 to-red-900/80",
    accent: "text-orange-400",
    prizes: [
      { rank: "1st", amount: "₹60" },
      { rank: "2nd", amount: "₹40" }
    ]
  },
  {
    id: 3,
    title: "Kalahari Clash Squad",
    map: "Kalahari",
    type: "CS Ranked",
    fee: "₹30",
    prize: "₹500",
    time: "8:00 PM",
    slots: "6/8",
    status: "Open",
    color: "from-yellow-900/80 to-amber-900/80",
    accent: "text-yellow-400",
    prizes: [
      { rank: "1st", amount: "₹300" },
      { rank: "2nd", amount: "₹150" },
      { rank: "MVP", amount: "₹50" }
    ]
  },
  {
    id: 4,
    title: "Late Night Duo",
    map: "Alpine",
    type: "Duo",
    fee: "₹15",
    prize: "₹200",
    time: "10:00 PM",
    slots: "20/24",
    status: "Open",
    color: "from-blue-900/80 to-indigo-900/80",
    accent: "text-blue-400",
    prizes: [
      { rank: "1st", amount: "₹120" },
      { rank: "2nd", amount: "₹80" }
    ]
  }
];

export default function Matches() {
  return (
    <div className="min-h-screen bg-background pb-24 font-sans">
      {/* Header */}
      <div className="bg-card p-4 sticky top-0 z-10 border-b border-white/5">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Button variant="ghost" size="icon" className="text-white -ml-2">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <h1 className="text-lg font-bold text-white">Upcoming Matches</h1>
          </div>
          <Button variant="outline" size="icon" className="h-8 w-8 border-white/10 bg-white/5">
            <Filter className="w-4 h-4 text-muted-foreground" />
          </Button>
        </div>
      </div>

      <main className="px-4 max-w-md mx-auto mt-6 space-y-4">
        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
          {["All", "Solo", "Duo", "Squad", "CS"].map((filter) => (
            <Badge 
              key={filter}
              variant={filter === "All" ? "default" : "outline"}
              className={`
                px-4 py-1.5 rounded-full cursor-pointer transition-all
                ${filter === "All" ? "bg-primary text-white border-primary" : "border-white/10 hover:bg-white/5 text-muted-foreground"}
              `}
            >
              {filter}
            </Badge>
          ))}
        </div>

        {/* Match List */}
        {MATCHES.map((match) => (
          <Card key={match.id} className="bg-card border-white/5 overflow-hidden group relative">
            {/* Map Themed Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${match.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
            
            <div className="relative z-10 p-4">
              {/* Top Row: Badge & Time */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className={`bg-black/30 border-white/10 ${match.accent}`}>
                    <Map className="w-3 h-3 mr-1" />
                    {match.map}
                  </Badge>
                  <Badge variant="outline" className="bg-black/30 border-white/10 text-gray-300">
                    {match.type}
                  </Badge>
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded animate-pulse">
                  <Clock className="w-3 h-3" /> {match.time}
                </div>
              </div>

              {/* Title & ID */}
              <div className="mb-4">
                <h3 className="font-heading font-bold text-xl text-white mb-1 group-hover:text-primary transition-colors">
                  {match.title}
                </h3>
                <div className="text-[10px] text-muted-foreground flex items-center gap-1">
                  ID: {Math.floor(Math.random() * 9000) + 1000} • <span className={match.status === "Filling Fast" ? "text-orange-500" : "text-green-500"}>{match.status}</span>
                </div>
              </div>

              {/* Stats Container */}
              <div className="bg-black/20 rounded-xl p-3 border border-white/5 flex items-center justify-between mb-4">
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 uppercase font-bold">Prize Pool</span>
                  <span className="text-xl font-bold text-yellow-400 flex items-center gap-1">
                    <Trophy className="w-4 h-4" /> {match.prize}
                  </span>
                </div>
                <div className="h-8 w-[1px] bg-white/10" />
                <div className="flex flex-col text-right">
                  <span className="text-[10px] text-gray-400 uppercase font-bold">Entry Fee</span>
                  <span className="text-xl font-bold text-white">
                    {match.fee}
                  </span>
                </div>
              </div>

              {/* Prize Distribution Mini View */}
              <div className="flex gap-2 mb-4 overflow-x-auto pb-1 hide-scrollbar">
                {match.prizes.map((prize, idx) => (
                  <div key={idx} className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded text-[10px] whitespace-nowrap border border-white/5">
                    <Crown className="w-3 h-3 text-yellow-500" />
                    <span className="text-gray-300">{prize.rank}:</span>
                    <span className="text-white font-bold">{prize.amount}</span>
                  </div>
                ))}
              </div>

              {/* Footer: Slots & Button */}
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <div className="flex justify-between text-[10px] mb-1.5">
                    <span className="text-gray-400">Players Joined</span>
                    <span className="text-white font-bold">{match.slots}</span>
                  </div>
                  <div className="h-2 w-full bg-black/40 rounded-full overflow-hidden border border-white/5">
                    <div 
                      className={`h-full rounded-full ${match.status === "Filling Fast" ? "bg-orange-500" : "bg-primary"}`}
                      style={{ width: `${(parseInt(match.slots.split('/')[0]) / parseInt(match.slots.split('/')[1])) * 100}%` }}
                    />
                  </div>
                </div>
                <Button className="px-6 font-bold bg-white text-black hover:bg-gray-200 rounded-lg shadow-lg transition-transform active:scale-95">
                  JOIN
                </Button>
              </div>
            </div>
          </Card>
        ))}
        
        <p className="text-center text-xs text-muted-foreground mt-6 pb-4 flex items-center justify-center gap-2">
          <AlertCircle className="w-4 h-4" />
          Room details shared 15 mins before match start
        </p>
      </main>

      <BottomNav />
    </div>
  );
}
