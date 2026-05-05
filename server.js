const fs = require("fs");
const path = require("path");
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

// --------------------
// EXPRESS + SERVER SETUP
// --------------------
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// --------------------
// LOGGING SETUP
// --------------------
const logDir = path.join(__dirname, "logs");
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

function logEvent(type, message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${type}] ${message}\n`;
    fs.appendFileSync(path.join(logDir, "app.log"), logMessage);
}

logEvent("INFO", "Server file loaded");

// --------------------
// MIDDLEWARE (REQUEST LOGGING)
// --------------------
app.use((req, res, next) => {
    logEvent("REQUEST", `${req.method} ${req.url}`);
    next();
});

// --------------------
// ROUTE
// --------------------
app.get("/", (req, res) => {
    res.send("Server is running");
});

// --------------------
// SOCKET.IO
// --------------------
io.on("connection", (socket) => {
    logEvent("INFO", "User connected: " + socket.id);

    socket.on("disconnect", () => {
        logEvent("INFO", "User disconnected: " + socket.id);
    });
});

// --------------------
// START SERVER
// --------------------
server.listen(3000, () => {
    console.log("Server running on port 3000");
    logEvent("INFO", "Server started on port 3000");
});