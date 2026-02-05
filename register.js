import fs from "fs";

export default function handler(req, res){
  const { username, password } = req.body;
  const data = JSON.parse(fs.readFileSync("data.json"));
  if(data.users.find(u => u.username===username)) return res.status(400).json({error:"Usuário já existe"});
  data.users.push({username, password, admin:false, plan:"free"});
  fs.writeFileSync("data.json", JSON.stringify(data,null,2));
  res.json({success:true});
}
