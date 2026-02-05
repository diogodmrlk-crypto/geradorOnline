export default async function handler(req,res){
  const key = req.body.key;
  await fetch(`https://teste-api-mcok.vercel.app/keys/${key}`,{method:"PATCH"});
  res.json({success:true});
}
