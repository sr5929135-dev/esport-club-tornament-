import { ArrowLeft, Copy, Share2, Gift } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BottomNav from "@/components/bottom-nav";

export default function Refer() {
  return (
    <div className="min-h-screen bg-background pb-24 font-sans">
       <div className="bg-card p-4 sticky top-0 z-10 border-b border-white/5">
        <div className="flex items-center gap-3 max-w-md mx-auto">
          <Link href="/">
            <Button variant="ghost" size="icon" className="text-white -ml-2">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-lg font-bold text-white">Refer & Earn</h1>
        </div>
      </div>

      <main className="max-w-md mx-auto">
        {/* Hero Banner */}
        <div className="bg-gradient-to-b from-indigo-900 to-background p-8 text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-[0_0_30px_rgba(255,165,0,0.4)] animate-bounce">
            <Gift className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-2xl font-heading font-bold text-white mb-2">Refer & Earn ₹100</h2>
          <p className="text-gray-300 text-sm mb-6">Invite your friends to play and earn real cash for every successful referral.</p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 flex items-center justify-between gap-4">
            <div className="text-left">
              <div className="text-xs text-gray-400 mb-1">Your Referral Code</div>
              <div className="text-lg font-mono font-bold text-white tracking-wider">ESPORT2024</div>
            </div>
            <Button variant="ghost" size="icon" className="text-primary hover:text-primary hover:bg-white/10">
              <Copy className="w-5 h-5" />
            </Button>
          </div>
          
          <Button className="w-full mt-6 bg-green-500 hover:bg-green-600 text-black font-bold h-12 rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.4)]">
            <Share2 className="w-4 h-4 mr-2" /> SHARE WITH FRIENDS
          </Button>

          <div className="flex items-center gap-3 mt-6 justify-center">
            <a 
              href="https://www.instagram.com/esportclubtourement?igsh=MW1kdDBpZ3p2ZjVxYQ==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-pink-600 to-rose-600 rounded-full hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all"
            >
              ߓ Instagram
            </a>
            <a 
              href="https://youtube.com/@esportclubtournament?si=6FKZrQuLtANOCAX6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-red-600 to-red-700 rounded-full hover:shadow-[0_0_15px_rgba(220,38,38,0.5)] transition-all"
            >
              ߎ YouTube
            </a>
          </div>
        </div>

        {/* Steps */}
        <div className="px-6 py-8 space-y-8">
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold text-white text-sm z-10">1</div>
              <div className="w-0.5 h-full bg-white/10 -mt-2 -mb-2" />
            </div>
            <div className="pb-8">
              <h3 className="font-bold text-white mb-1">Share your link</h3>
              <p className="text-sm text-muted-foreground">Send your unique referral link to friends via WhatsApp or SMS.</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold text-white text-sm z-10">2</div>
              <div className="w-0.5 h-full bg-white/10 -mt-2 -mb-2" />
            </div>
            <div className="pb-8">
              <h3 className="font-bold text-white mb-1">Friend installs app</h3>
              <p className="text-sm text-muted-foreground">Your friend downloads the app and signs up using your code.</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold text-white text-sm z-10">3</div>
            </div>
            <div>
              <h3 className="font-bold text-white mb-1">You both earn cash</h3>
              <p className="text-sm text-muted-foreground">You get ₹50 and your friend gets ₹50 bonus cash instantly.</p>
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
