"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);
userRouter.post("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: "true",
        message: "user is created succesfully",
        data: user,
    });
});
courseRouter.post("/create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: "true",
        message: "course is created succesfully",
        data: course,
    });
});
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
// respond with "hello world" when a GET request is made to the homepage
app.get("/:userId/:subId", logger, (req, res) => {
    console.log(req.params);
    res.send("hello developer Rayhan");
});
app.get("/", logger, (req, res, next) => {
    console.log(req.query);
    try {
        res.send(something);
    }
    catch (error) {
        // console.log(error);
        next(error);
    }
});
app.post("/", (req, res) => {
    console.log(req.body);
    res.json({
        message: "succesfully recived data",
    });
});
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: 'route not found'
    });
});
//global error handling middleware
app.use((error, req, res, next) => {
    if (error) {
        if (error) {
            res.status(400).json({
                success: false,
                message: 'something went wrong'
            });
        }
    }
});
exports.default = app;
