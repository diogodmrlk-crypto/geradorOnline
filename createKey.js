export default async function handler(req,res){
  const type=req.body.type;
  const response = await fetch("https://teste-api-mcok.vercel.app/keys",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({type})
  });
  const data = await response.json();
  res.json(data);
}
