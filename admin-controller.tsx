import { ArrowLeft, Bell, DollarSign, User, Trophy, AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const MOCK_NOTIFICATIONS = [
  {
    id: 1,
    userId: "USER_001",
    playerName: "ProGamer_X",
    type: "level_completion",
    title: "Level Completed",
    message: "Player completed Level 5 - HIGH ROLLER",
    timestamp: "2 hours ago",
    read: false,
    icon: "ߏ"
  },
  {
    id: 2,
    userId: "USER_002",
    playerName: "ShadowHunter",
    type: "payment",
    title: "Payment Received",
    message: "Payment of ₹1200 received for Level 4 entry",
    timestamp: "4 hours ago",
    read: false,
    icon: "ߒ"
  },
  {
    id: 3,
    userId: "USER_003",
    playerName: "SquadMaster99",
    type: "achievement",
    title: "Win Recorded",
    message: "Won 3 matches in Level 3 tournament",
    timestamp: "6 hours ago",
    read: true,
    icon: "ߥ"
  },
  {
    id: 4,
    userId: "USER_001",
    playerName: "ProGamer_X",
    type: "referral",
    title: "Referral Bonus",
    message: "₹500 referral bonus added - Friend joined Level 2",
    timestamp: "1 day ago",
    read: true,
    icon: "ߑ"
  },
  {
    id: 5,
    userId: "USER_004",
    playerName: "LegendaryDuo",
    type: "payment",
    title: "Payment Failed",
    message: "Payment of ₹800 failed - Retry needed",
    timestamp: "2 days ago",
    read: true,
    icon: "❌"
  }
];

const MOCK_TRANSACTIONS = [
  {
    id: "TXN_001",
    userId: "USER_001",
    playerName: "ProGamer_X",
    type: "entry_fee",
    amount: 4000,
    level: 5,
    status: "completed",
    date: "Nov 23, 2024",
    timestamp: "2:30 PM",
    description: "Level 5 (HIGH ROLLER) Entry Fee"
  },
  {
    id: "TXN_002",
    userId: "USER_001",
    playerName: "ProGamer_X",
    type: "prize",
    amount: 10000,
    level: 5,
    status: "completed",
    date: "Nov 22, 2024",
    timestamp: "5:45 PM",
    description: "Level 5 Prize - 1st Position (HIGH ROLLER)"
  },
  {
    id: "TXN_003",
    userId: "USER_002",
    playerName: "ShadowHunter",
    type: "entry_fee",
    amount: 1200,
    level: 4,
    status: "completed",
    date: "Nov 23, 2024",
    timestamp: "1:15 PM",
    description: "Level 4 Entry Fee"
  },
  {
    id: "TXN_004",
    userId: "USER_002",
    playerName: "ShadowHunter",
    type: "prize",
    amount: 2800,
    level: 4,
    status: "completed",
    date: "Nov 21, 2024",
    timestamp: "4:20 PM",
    description: "Level 4 Prize - 1st Position"
  },
  {
    id: "TXN_005",
    userId: "USER_003",
    playerName: "SquadMaster99",
    type: "entry_fee",
    amount: 800,
    level: 3,
    status: "pending",
    date: "Nov 23, 2024",
    timestamp: "12:00 PM",
    description: "Level 3 Entry Fee - Pending"
  },
  {
    id: "TXN_006",
    userId: "USER_004",
    playerName: "LegendaryDuo",
    type: "entry_fee",
    amount: 600,
    level: 2,
    status: "failed",
    date: "Nov 23, 2024",
    timestamp: "11:30 AM",
    description: "Level 2 Entry Fee - Payment Failed"
  },
  {
    id: "TXN_007",
    userId: "USER_001",
    playerName: "ProGamer_X",
    type: "referral_bonus",
    amount: 500,
    level: null,
    status: "completed",
    date: "Nov 20, 2024",
    timestamp: "3:00 PM",
    description: "Referral Bonus - Friend Joined"
  },
  {
    id: "TXN_008",
    userId: "USER_005",
    playerName: "NeonKnight",
    type: "withdrawal",
    amount: 5000,
    level: null,
    status: "completed",
    date: "Nov 19, 2024",
    timestamp: "10:15 AM",
    description: "Wallet Withdrawal - Bank Transfer"
  }
];

export default function AdminController() {
  const [selectedNotification, setSelectedNotification] = useState<number | null>(null);
  const [selectedTransaction, setSelectedTransaction] = useState<string | null>(null);

  const totalRevenue = MOCK_TRANSACTIONS
    .filter(t => t.type === "entry_fee" && t.status === "completed")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalPrizesPaid = MOCK_TRANSACTIONS
    .filter(t => t.type === "prize" && t.status === "completed")
    .reduce((sum, t) => sum + t.amount, 0);

  const pendingTransactions = MOCK_TRANSACTIONS.filter(t => t.status === "pending").length;
  const failedTransactions = MOCK_TRANSACTIONS.filter(t => t.status === "failed").length;

  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-900/40 to-purple-900/40 border-b border-pink-500/30 p-4 sticky top-0 z-10">
        <div className="flex items-center gap-3 max-w-2xl mx-auto">
          <Link href="/">
            <Button variant="ghost" size="icon" className="text-white -ml-2">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-white">ID Controller</h1>
            <p className="text-xs text-gray-300">System Admin Dashboard</p>
          </div>
        </div>
      </div>

      <main className="px-4 max-w-2xl mx-auto mt-6 space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 gap-3">
          <Card className="bg-gradient-to-br from-green-900/30 to-emerald-900/20 border-green-500/30 p-4">
            <p className="text-xs text-gray-300 mb-1">Total Revenue</p>
            <p className="text-2xl font-bold text-green-400">₹{totalRevenue.toLocaleString()}</p>
            <p className="text-[10px] text-gray-400 mt-2">Entry Fees</p>
          </Card>

          <Card className="bg-gradient-to-br from-orange-900/30 to-amber-900/20 border-orange-500/30 p-4">
            <p className="text-xs text-gray-300 mb-1">Prizes Distributed</p>
            <p className="text-2xl font-bold text-orange-400">₹{totalPrizesPaid.toLocaleString()}</p>
            <p className="text-[10px] text-gray-400 mt-2">Winners Paid</p>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-900/30 to-yellow-900/20 border-yellow-500/30 p-4">
            <p className="text-xs text-gray-300 mb-1">Pending</p>
            <p className="text-2xl font-bold text-yellow-400">{pendingTransactions}</p>
            <p className="text-[10px] text-gray-400 mt-2">Transactions</p>
          </Card>

          <Card className="bg-gradient-to-br from-red-900/30 to-pink-900/20 border-red-500/30 p-4">
            <p className="text-xs text-gray-300 mb-1">Failed</p>
            <p className="text-2xl font-bold text-red-400">{failedTransactions}</p>
            <p className="text-[10px] text-gray-400 mt-2">Transactions</p>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="notifications" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-black/40 border border-white/10">
            <TabsTrigger value="notifications" className="data-[state=active]:bg-pink-500/30">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="transactions" className="data-[state=active]:bg-green-500/30">
              <DollarSign className="w-4 h-4 mr-2" />
              Transactions
            </TabsTrigger>
          </TabsList>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-3 mt-4">
            <div className="space-y-2">
              {MOCK_NOTIFICATIONS.map((notif) => (
                <Card
                  key={notif.id}
                  className={`p-3 cursor-pointer transition-all border ${
                    selectedNotification === notif.id
                      ? "border-pink-500/50 bg-pink-500/20"
                      : notif.read
                      ? "border-white/10 bg-white/5"
                      : "border-pink-500/30 bg-pink-900/20"
                  }`}
                  onClick={() => setSelectedNotification(selectedNotification === notif.id ? null : notif.id)}
                >
                  <div className="flex gap-3">
                    <span className="text-2xl">{notif.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-bold text-white">{notif.title}</p>
                        {!notif.read && (
                          <Badge className="bg-pink-500/40 text-pink-300 border-pink-500/50 text-[10px]">NEW</Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-300">{notif.message}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="outline" className="bg-blue-500/10 text-blue-300 border-blue-500/30 text-[10px]">
                          <User className="w-3 h-3 mr-1" />
                          {notif.playerName}
                        </Badge>
                        <span className="text-[10px] text-gray-400">{notif.timestamp}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Transactions Tab */}
          <TabsContent value="transactions" className="space-y-3 mt-4">
            <div className="space-y-2">
              {MOCK_TRANSACTIONS.map((txn) => {
                const statusColor = 
                  txn.status === "completed" ? "bg-green-500/20 border-green-500/30 text-green-300" :
                  txn.status === "pending" ? "bg-yellow-500/20 border-yellow-500/30 text-yellow-300" :
                  "bg-red-500/20 border-red-500/30 text-red-300";

                const typeIcon = 
                  txn.type === "entry_fee" ? "ߒ" :
                  txn.type === "prize" ? "ߏ" :
                  txn.type === "referral_bonus" ? "ߑ" :
                  txn.type === "withdrawal" ? "ߏ" :
                  "ߒ";

                return (
                  <Card
                    key={txn.id}
                    className={`p-3 cursor-pointer transition-all border ${
                      selectedTransaction === txn.id
                        ? "border-green-500/50 bg-green-500/20"
                        : "border-white/10 bg-white/5"
                    }`}
                    onClick={() => setSelectedTransaction(selectedTransaction === txn.id ? null : txn.id)}
                  >
                    <div className="flex gap-3">
                      <span className="text-2xl">{typeIcon}</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-bold text-white">{txn.description}</p>
                          <Badge className={statusColor + " border"}>
                            {txn.status.charAt(0).toUpperCase() + txn.status.slice(1)}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="bg-blue-500/10 text-blue-300 border-blue-500/30 text-[10px]">
                            <User className="w-3 h-3 mr-1" />
                            {txn.playerName}
                          </Badge>
                          {txn.level && (
                            <Badge variant="outline" className="bg-purple-500/10 text-purple-300 border-purple-500/30 text-[10px]">
                              <Trophy className="w-3 h-3 mr-1" />
                              Level {txn.level}
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-gray-400">{txn.date} at {txn.timestamp}</span>
                          <p className={`font-bold text-lg ${txn.type === "prize" || txn.type === "referral_bonus" || txn.type === "withdrawal" ? "text-green-400" : "text-orange-400"}`}>
                            {txn.type === "prize" || txn.type === "referral_bonus" || txn.type === "withdrawal" ? "+" : "-"}₹{txn.amount.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>

        {/* Info Box */}
        <Card className="bg-white/5 border-white/10 p-4">
          <div className="flex gap-3">
            <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
            <div className="text-sm">
              <p className="font-bold text-white mb-1">ID Controller Features</p>
              <ul className="text-gray-300 text-xs space-y-1">
                <li>✓ Monitor all player notifications in real-time</li>
                <li>✓ Track all money transactions (entries, prizes, referrals)</li>
                <li>✓ View transaction status (completed, pending, failed)</li>
                <li>✓ Revenue analytics and prize distribution tracking</li>
                <li>✓ Player-wise transaction history</li>
              </ul>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}
