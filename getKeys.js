export default async function handler(req,res){
  const response = await fetch("https://teste-api-mcok.vercel.app/keys");
  const data = await response.json();
  res.json(data);
}
