import fs from "fs";

export default function handler(req, res){
  const { username, password } = req.body;
  const data = JSON.parse(fs.readFileSync("data.json"));
  const user = data.users.find(u => u.username === username && u.password === password);
  if(!user) return res.status(401).json({error:"Login inválido"});
  res.json({success:true, admin:user.admin});
}
