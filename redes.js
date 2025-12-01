// ==================== 1 - Exemplo HTTP ====================

function exemploHTTP() {
  fetch("http://localhost:3000/mensagem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ texto: "Olá Backend via HTTP!" })
  })
  .then(res => res.json())
  .then(data => {
      document.getElementById("resHTTP").innerHTML = 
          "Resposta do servidor: " + data.resposta;
  })
  .catch(() => {
      document.getElementById("resHTTP").innerHTML =
          "❌ Erro: o servidor HTTP não está rodando.";
  });
}

// ==================== 2 - Exemplo WebSocket ====================

let socket;

function exemploWS() {
  socket = new WebSocket("ws://localhost:8080");

  socket.onopen = () => {
    socket.send("Olá via WebSocket!");
    document.getElementById("resWS").innerHTML = "Conectado! Mensagem enviada...";
  };

  socket.onmessage = msg => {
    document.getElementById("resWS").innerHTML += "<br>Resposta: " + msg.data;
  };

  socket.onerror = () => {
    document.getElementById("resWS").innerHTML = "❌ Não foi possível conectar ao servidor WS.";
  };
}

// ==================== 3 - Exemplo TCP (simulado no front) ====================

function exemploTCP() {
  document.getElementById("resTCP").innerHTML =
    "O navegador não suporta conexão TCP direta.<br>" +
    "Você deve usar Node.js como cliente TCP.<br><br>" +
    "Exemplo de cliente TCP:<br>" +
    `<pre>
const net = require("net");
const client = net.createConnection(4000, () => {
  client.write("Olá servidor TCP!");
});
client.on("data", data => {
  console.log("Resposta:", data.toString());
});
</pre>`;
}
