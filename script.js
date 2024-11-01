document.getElementById("botao").addEventListener("click", function(){
       let palavras = document.getElementById("caixa").value;
       let total = palavras.trim().split(/\s+/).filter(function(word) {
              return word.length > 0;
       });
       document.getElementById("total").textContent = `Você digitou ${total.length} palavras!`
});