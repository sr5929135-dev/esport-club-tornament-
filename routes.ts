import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertPlayerSchema, insertMatchSchema, insertTransactionSchema, insertNotificationSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Players endpoints
  app.post("/api/players", async (req, res) => {
    try {
      const validated = insertPlayerSchema.parse(req.body);
      const player = await storage.createPlayer(validated);
      res.status(201).json(player);
    } catch (err) {
      res.status(400).json({ error: "Invalid player data" });
    }
  });

  app.get("/api/players/:id", async (req, res) => {
    const player = await storage.getPlayer(req.params.id);
    if (!player) return res.status(404).json({ error: "Player not found" });
    res.json(player);
  });

  app.get("/api/players/username/:username", async (req, res) => {
    const player = await storage.getPlayerByUsername(req.params.username);
    if (!player) return res.status(404).json({ error: "Player not found" });
    res.json(player);
  });

  // Matches endpoints
  app.post("/api/matches", async (req, res) => {
    try {
      const validated = insertMatchSchema.parse(req.body);
      const match = await storage.createMatch(validated);
      res.status(201).json(match);
    } catch (err) {
      res.status(400).json({ error: "Invalid match data" });
    }
  });

  app.get("/api/players/:id/matches", async (req, res) => {
    const matches = await storage.getPlayerMatches(req.params.id);
    res.json(matches);
  });

  // Transactions endpoints
  app.post("/api/transactions", async (req, res) => {
    try {
      const validated = insertTransactionSchema.parse(req.body);
      const transaction = await storage.createTransaction(validated);
      
      // Update wallet if payment
      if (validated.type === "entry_fee") {
        await storage.updatePlayerWallet(validated.playerId, (-validated.amount).toString());
      } else if (validated.type === "prize" || validated.type === "referral_bonus") {
        await storage.updatePlayerWallet(validated.playerId, validated.amount.toString());
      }
      
      res.status(201).json(transaction);
    } catch (err) {
      res.status(400).json({ error: "Invalid transaction data" });
    }
  });

  app.get("/api/transactions", async (req, res) => {
    const transactions = await storage.getAllTransactions();
    res.json(transactions);
  });

  app.get("/api/players/:id/transactions", async (req, res) => {
    const transactions = await storage.getPlayerTransactions(req.params.id);
    res.json(transactions);
  });

  // Notifications endpoints
  app.post("/api/notifications", async (req, res) => {
    try {
      const validated = insertNotificationSchema.parse(req.body);
      const notification = await storage.createNotification(validated);
      res.status(201).json(notification);
    } catch (err) {
      res.status(400).json({ error: "Invalid notification data" });
    }
  });

  app.get("/api/notifications", async (req, res) => {
    const notifications = await storage.getAllNotifications();
    res.json(notifications);
  });

  app.get("/api/players/:id/notifications", async (req, res) => {
    const notifications = await storage.getPlayerNotifications(req.params.id);
    res.json(notifications);
  });

  app.patch("/api/notifications/:id/read", async (req, res) => {
    await storage.markNotificationRead(req.params.id);
    res.json({ success: true });
  });

  // Level 5 Achievers
  app.post("/api/achievers", async (req, res) => {
    try {
      const achiever = await storage.addLevelFiveAchiever(req.body);
      res.status(201).json(achiever);
    } catch (err) {
      res.status(400).json({ error: "Invalid achiever data" });
    }
  });

  app.get("/api/achievers", async (req, res) => {
    const achievers = await storage.getLevelFiveAchievers();
    res.json(achievers);
  });

  // Leaderboard
  app.get("/api/leaderboard", async (req, res) => {
    const leaderboard = await storage.getLeaderboard();
    res.json(leaderboard);
  });

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  const httpServer = createServer(app);
  return httpServer;
}
