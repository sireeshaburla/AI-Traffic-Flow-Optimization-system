const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", app: "AI Traffic Flow Optimization System" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Traffic dashboard running on port ${PORT}`);
});