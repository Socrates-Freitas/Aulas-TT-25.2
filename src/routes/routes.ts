import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { BookController } from "../controllers/BookController";
import { BookRentController } from "../controllers/BookRentController";
import { ro } from "@faker-js/faker/.";

const router = Router()


// User Routes
router.post("/user",UserController.createUser)
router.get("/user/:userId",UserController.readUser)
router.get("/users",UserController.readAllUsers)
router.put("/user/:userId", UserController.updateUser)
router.delete("/user/:userId", UserController.deleteUser)


// Book Routes
router.post("/book",BookController.createBook)
router.get("/book/:bookId",BookController.readBook)
router.get("/books",BookController.readAllBooks)
router.put("/book/:bookId",BookController.updateBook)
router.delete("/book/:bookId",BookController.deleteBook)


// BookRent Routes
router.post("/bookrent",BookRentController.createBookRent)
router.get("/bookrent",BookRentController.readBookRent)
router.get("/bookrents",BookRentController.readAllBookRents)
router.put("/bookrent",BookRentController.updateBookRent)
router.delete("/bookrent",BookRentController.deleteBookRent)







export default router




