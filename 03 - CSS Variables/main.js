const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  suffix = this.dataset.sizing || "";
  // pega o root do documento e aplica o estilo
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
