const sidebarToggle = document.querySelector("#sidebar-toggle");
sidebarToggle.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
});

function executarTarefaPorTamanhoTela() {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
  
    function verificarTamanhoTela(e) {
      if (e.matches) {
        document.querySelector("#sidebar").classList.toggle("collapsed");
        console.log("A largura da tela é menor ou igual a 768px. Executando tarefa...");
      } else {
        console.log("A largura da tela é maior que 768px.");
      }
    }
  
    // Verifica o tamanho da tela inicialmente
    verificarTamanhoTela(mediaQuery);
}
  
executarTarefaPorTamanhoTela();
  