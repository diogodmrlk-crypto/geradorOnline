import fs from "fs";

export default function handler(req, res) {
  const { key } = req.body;

  const data = JSON.parse(fs.readFileSync("data.json"));

  const k = data.keys.find(k => k.key === key);

  if (k) k.revoked = true;

  fs.writeFileSync("data.json", JSON.stringify(data, null, 2));

  res.json({ success: true });
}
