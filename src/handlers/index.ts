import { Router } from "itty-router";
import { findMonsterById, listAllMonsters } from "./monsters";

const router = Router();
router.get("/api/monsters", listAllMonsters);
router.get("/api/monsters/:id", findMonsterById);
router.get("*", () => new Response("Not found", { status: 404 }));

export const handleRequest = (request: Request) => router.handle(request);
