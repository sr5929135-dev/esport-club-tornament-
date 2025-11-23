import { ArrowLeft, CreditCard, History, ShieldCheck, Wallet as WalletIcon, Trophy } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BottomNav from "@/components/bottom-nav";

export default function Wallet() {
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
          <h1 className="text-lg font-bold text-white">My Wallet</h1>
        </div>
      </div>

      <main className="px-4 max-w-md mx-auto space-y-6 mt-6">
        {/* Total Balance Card */}
        <div className="bg-gradient-to-br from-primary to-purple-600 rounded-2xl p-6 text-white shadow-[0_8px_30px_rgba(255,0,85,0.3)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full -ml-10 -mb-10 blur-xl" />
          
          <div className="relative z-10">
            <div className="text-sm font-medium text-white/80 mb-1">Total Balance</div>
            <div className="text-4xl font-heading font-bold mb-6">₹1,245.50</div>
            
            <Button className="w-full bg-white text-primary hover:bg-white/90 font-bold rounded-xl h-12 shadow-lg">
              ADD CASH
            </Button>
          </div>
        </div>

        {/* Balance Breakdown */}
        <div className="grid gap-4">
          <Card className="bg-card border-white/5 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                <WalletIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Winnings</div>
                <div className="font-bold text-white text-lg">₹850.00</div>
              </div>
            </div>
            <Button variant="outline" size="sm" className="border-white/10 text-white hover:bg-white/5">
              Withdraw
            </Button>
          </Card>

          <Card className="bg-card border-white/5 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Unplayed</div>
                <div className="font-bold text-white text-lg">₹200.00</div>
              </div>
            </div>
          </Card>
          
          <Card className="bg-card border-white/5 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                <Trophy className="w-5 h-5 text-yellow-500" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Cash Bonus</div>
                <div className="font-bold text-white text-lg">₹195.50</div>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Trust Badge */}
        <div className="flex items-center justify-center gap-2 text-green-500 bg-green-500/5 p-3 rounded-lg border border-green-500/10">
          <ShieldCheck className="w-5 h-5" />
          <span className="text-sm font-medium">100% Secure Payments</span>
        </div>

        {/* Recent Transactions Header */}
        <div className="flex items-center justify-between pt-4">
          <h3 className="font-bold text-white">Recent Transactions</h3>
          <Button variant="link" className="text-primary text-xs h-auto p-0">View All</Button>
        </div>
        
        {/* Transaction List */}
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <History className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">Withdrawal to UPI</div>
                  <div className="text-xs text-muted-foreground">Today, 2:30 PM</div>
                </div>
              </div>
              <div className="text-red-500 font-bold text-sm">- ₹500</div>
            </div>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
