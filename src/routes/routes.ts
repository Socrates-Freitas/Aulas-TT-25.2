import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { BookController } from "../controllers/BookController";
import { BookRentController } from "../controllers/BookRentController";
import { ro } from "@faker-js/faker/.";
import { premiumOnly } from "../middlewares/PremiumOnly";
import { validateBody, validateParams } from "../middlewares/ValidateMiddeware";
import UserValidator from "../config/UserValidator";
import BookValidator from "../config/BookValidator";
import BookRentValidator from "../config/BookRentValidator";

const router = Router();

// User Routes
router.post(
  "/user",
  UserController.createUser,
);
router.get(
  "/user/:userId",
  validateParams(UserValidator.userParam),
  UserController.readUser,
);
router.get("/users", UserController.readAllUsers);
router.put(
  "/user/:userId",
  validateBody(UserValidator.updateUser),
  validateParams(UserValidator.userParam),
  UserController.updateUser,
);
router.delete(
  "/user/:userId",
  validateParams(UserValidator.userParam),
  UserController.deleteUser,
);

// Book Routes
router.post(
  "/book",
  validateBody(BookValidator.createBook),
  BookController.createBook,
);
router.get(
  "/book/:bookId",
  validateParams(BookValidator.bookParams),
  BookController.readBook,
);
router.get("/books", BookController.readAllBooks);
router.put(
  "/book/:bookId",
  validateBody(BookValidator.updateBook),
  validateParams(BookValidator.bookParams),
  BookController.updateBook,
);
router.delete(
  "/book/:bookId",
  validateParams(BookValidator.bookParams),
  BookController.deleteBook,
);

// BookRent Routes
router.post(
  "/bookrent",
  validateBody(BookRentValidator.createBookRent),
  BookRentController.createBookRent,
);
router.get(
  "/bookrent",
  validateBody(BookRentValidator.readBookRent),
  BookRentController.readBookRent,
);
router.get("/bookrents", BookRentController.readAllBookRents);
router.put(
  "/bookrent",
  validateBody(BookRentValidator.createBookRent),
  BookRentController.updateBookRent,
);
router.delete(
  "/bookrent",
  validateBody(BookRentValidator.readBookRent),
  BookRentController.deleteBookRent,
);

export default router;
