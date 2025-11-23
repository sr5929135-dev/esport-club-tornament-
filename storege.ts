import { db } from "./db";
import {
  players,
  matches,
  transactions,
  notifications,
  levelFiveAchievers,
  type Player,
  type InsertPlayer,
  type Match,
  type InsertMatch,
  type Transaction,
  type InsertTransaction,
  type Notification,
  type InsertNotification,
  type LevelFiveAchiever,
  type InsertLevelFiveAchiever,
} from "@shared/schema";
import { eq, desc, and } from "drizzle-orm";

export interface IStorage {
  // Players
  createPlayer(player: InsertPlayer): Promise<Player>;
  getPlayer(id: string): Promise<Player | undefined>;
  getPlayerByUsername(username: string): Promise<Player | undefined>;
  getPlayerByPhone(phone: string): Promise<Player | undefined>;
  updatePlayerLevel(playerId: string, level: number): Promise<void>;
  updatePlayerWallet(playerId: string, amount: string): Promise<void>;
  
  // Matches
  createMatch(match: InsertMatch): Promise<Match>;
  getPlayerMatches(playerId: string): Promise<Match[]>;
  getPlayerWins(playerId: string): Promise<number>;
  
  // Transactions
  createTransaction(transaction: InsertTransaction): Promise<Transaction>;
  getPlayerTransactions(playerId: string): Promise<Transaction[]>;
  getAllTransactions(): Promise<Transaction[]>;
  
  // Notifications
  createNotification(notification: InsertNotification): Promise<Notification>;
  getPlayerNotifications(playerId: string): Promise<Notification[]>;
  getAllNotifications(): Promise<Notification[]>;
  markNotificationRead(notificationId: string): Promise<void>;
  
  // Level 5 Achievers
  addLevelFiveAchiever(achiever: InsertLevelFiveAchiever): Promise<LevelFiveAchiever>;
  getLevelFiveAchievers(): Promise<LevelFiveAchiever[]>;
  
  // Leaderboard
  getLeaderboard(): Promise<(Player & { matchesPlayed: number; wins: number; winRate: string })[]>;
}

export class DatabaseStorage implements IStorage {
  async createPlayer(player: InsertPlayer): Promise<Player> {
    const [newPlayer] = await db.insert(players).values(player).returning();
    return newPlayer;
  }

  async getPlayer(id: string): Promise<Player | undefined> {
    const [player] = await db.select().from(players).where(eq(players.id, id));
    return player;
  }

  async getPlayerByUsername(username: string): Promise<Player | undefined> {
    const [player] = await db.select().from(players).where(eq(players.username, username));
    return player;
  }

  async getPlayerByPhone(phone: string): Promise<Player | undefined> {
    const [player] = await db.select().from(players).where(eq(players.phone, phone));
    return player;
  }

  async updatePlayerLevel(playerId: string, level: number): Promise<void> {
    await db.update(players).set({ currentLevel: level }).where(eq(players.id, playerId));
  }

  async updatePlayerWallet(playerId: string, amount: string): Promise<void> {
    const player = await this.getPlayer(playerId);
    if (player) {
      const currentWallet = parseFloat(player.wallet as unknown as string) || 0;
      const newWallet = (currentWallet + parseFloat(amount)).toFixed(2);
      await db.update(players).set({ wallet: newWallet }).where(eq(players.id, playerId));
    }
  }

  async createMatch(match: InsertMatch): Promise<Match> {
    const [newMatch] = await db.insert(matches).values(match).returning();
    return newMatch;
  }

  async getPlayerMatches(playerId: string): Promise<Match[]> {
    return await db.select().from(matches).where(eq(matches.playerId, playerId));
  }

  async getPlayerWins(playerId: string): Promise<number> {
    const playerMatches = await db.select().from(matches).where(eq(matches.playerId, playerId));
    return playerMatches.filter((m: typeof matches.$inferSelect) => m.position === 1).length;
  }

  async createTransaction(transaction: InsertTransaction): Promise<Transaction> {
    const [newTxn] = await db.insert(transactions).values(transaction).returning();
    return newTxn;
  }

  async getPlayerTransactions(playerId: string): Promise<Transaction[]> {
    return await db.select().from(transactions).where(eq(transactions.playerId, playerId)).orderBy(desc(transactions.createdAt));
  }

  async getAllTransactions(): Promise<Transaction[]> {
    return await db.select().from(transactions).orderBy(desc(transactions.createdAt));
  }

  async createNotification(notification: InsertNotification): Promise<Notification> {
    const [newNotif] = await db.insert(notifications).values(notification).returning();
    return newNotif;
  }

  async getPlayerNotifications(playerId: string): Promise<Notification[]> {
    return await db.select().from(notifications).where(eq(notifications.playerId, playerId)).orderBy(desc(notifications.createdAt));
  }

  async getAllNotifications(): Promise<Notification[]> {
    return await db.select().from(notifications).orderBy(desc(notifications.createdAt));
  }

  async markNotificationRead(notificationId: string): Promise<void> {
    await db.update(notifications).set({ read: true }).where(eq(notifications.id, notificationId));
  }

  async addLevelFiveAchiever(achiever: InsertLevelFiveAchiever): Promise<LevelFiveAchiever> {
    const [newAchiever] = await db.insert(levelFiveAchievers).values(achiever).returning();
    return newAchiever;
  }

  async getLevelFiveAchievers(): Promise<LevelFiveAchiever[]> {
    return await db.select().from(levelFiveAchievers).orderBy(desc(levelFiveAchievers.achievedAt));
  }

  async getLeaderboard() {
    const allPlayers = await db.select().from(players);
    const leaderboard = await Promise.all(
      allPlayers.map(async (player: typeof players.$inferSelect) => {
        const playerMatches = await this.getPlayerMatches(player.id);
        const wins = await this.getPlayerWins(player.id);
        const winRate = playerMatches.length > 0 ? ((wins / playerMatches.length) * 100).toFixed(1) : "0";
        return {
          ...player,
          matchesPlayed: playerMatches.length,
          wins,
          winRate: `${winRate}%`,
        };
      })
    );
    return leaderboard.sort((a: any, b: any) => b.matchesPlayed - a.matchesPlayed);
  }
}

export const storage = new DatabaseStorage();
