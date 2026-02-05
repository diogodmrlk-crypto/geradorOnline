import fs from "fs";

export default function handler(req, res) {
  const { type } = req.body;

  const data = JSON.parse(fs.readFileSync("data.json"));

  const key = "FERRAO-" + Math.random().toString(36).substring(2, 10).toUpperCase();

  data.keys.push({
    key,
    type,
    revoked: false,
    used: false,
    createdAt: new Date()
  });

  fs.writeFileSync("data.json", JSON.stringify(data, null, 2));

  res.json({ key });
}
