function toggleMenu() {
  const dd = document.getElementById("dropdown");
  dd.style.display = dd.style.display === "block" ? "none" : "block";
}

async function login() {
  const username = prompt("Usuário");
  const password = prompt("Senha");

  const res = await fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();

  if (!data.success) return alert("Erro no login");

  if (data.admin) window.location = "admin.html";
  else window.location = "dashboard.html";
}

async function register() {
  const username = prompt("Usuário");
  const password = prompt("Senha");

  const res = await fetch("/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();
  if (data.success) alert("Cadastro realizado");
}

async function generateKey() {
  const type = prompt("Tipo (hour/day/month/year)");
  const res = await fetch("/createKey", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type })
  });
  const data = await res.json();
  document.getElementById("result") ? document.getElementById("result").innerText = "Key: " + data.key : console.log(data.key);

  // Atualizar lista no admin
  const keys = await fetch("/getKeys");
  const list = await keys.json();
  const kDiv = document.getElementById("keys");
  if (kDiv) kDiv.innerHTML = list.map(k => `${k.key} - ${k.type} - Revoked: ${k.revoked}`).join("<br>");
}
