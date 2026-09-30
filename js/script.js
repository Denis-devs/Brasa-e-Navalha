const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  const estaAberto = menu.classList.toggle("ativo");

  menuToggle.setAttribute("aria-expanded", estaAberto);

  menuToggle.setAttribute(
    "aria-label",
    estaAberto
      ? "Fechar menu de navegação"
      : "Abrir menu de navegação"
  );

  menuToggle.textContent = estaAberto ? "✕" : "☰";
});

const linksMenu = document.querySelectorAll(".menu a");

linksMenu.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("ativo");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

    menuToggle.setAttribute(
      "aria-label",
      "Abrir menu de navegação"
    );

    menuToggle.textContent = "☰";
  });
});

const formulario =
  document.getElementById("form-agendamento");

const feedback =
  document.getElementById("form-feedback");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome =
    document.getElementById("nome").value.trim();

  const telefone =
    document.getElementById("telefone").value.trim();

  const servico =
    document.getElementById("servico").value;

  if (!nome || !telefone || !servico) {
    feedback.textContent =
      "Preencha os campos obrigatórios.";
    return;
  }

  feedback.textContent =
    `Obrigado, ${nome}! Sua solicitação foi recebida.`;

  formulario.reset();
});

const ano = document.getElementById("ano");

ano.textContent = new Date().getFullYear();