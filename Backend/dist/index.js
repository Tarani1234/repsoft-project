"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const routes_1 = __importDefault(require("./authRoutes/routes"));
const serverless_http_1 = __importDefault(require("serverless-http"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
(0, db_1.default)();
app.use('/api/auth', routes_1.default);
app.get("/", (req, res) => {
    res.send("API is running");
});
module.exports = app;
module.exports.handler = (0, serverless_http_1.default)(app);
