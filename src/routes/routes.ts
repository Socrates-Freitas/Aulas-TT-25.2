import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { VeicleController } from "../controllers/VeicleController";

const router = Router()


// UserRoutes

router.post("/user",UserController.createUser)
router.get("/user/:userId",UserController.readUser)
router.get("/users",UserController.readAllUsers)
router.put("/user/:userId",UserController.updateUser)
router.delete("/user/:userId",UserController.deleteUser)


// VeicleRoutes

router.post("/veicle/:userId",VeicleController.createVeicle)
router.get("/veicle/:placaVeicle",VeicleController.readVeicle)
router.get("/veicles",VeicleController.readAllVeicles)
router.put("/veicle/:userId",VeicleController.updateVeicle)
router.delete("/veicle",VeicleController.deleteVeicle)




export default router
