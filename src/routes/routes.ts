import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router()


// User Routes
router.post("/user",UserController.createUser)
router.get("/user/:userId",UserController.readUser)
router.get("/users",UserController.readAllUsers)
router.put("/user/:userId", UserController.updateUser)
router.delete("/user/:userId", UserController.deleteUser)


export default router




