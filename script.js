// Contador para o próximo Processo Seletivo
const dataProcessoSeletivo = new Date('2024-12-10');
const contadorEl = document.getElementById('contador');

function atualizarContador() {
    const hoje = new Date();
    const diferenca = dataProcessoSeletivo - hoje;
    const diasRestantes = Math.ceil(diferenca / (1000 * 60 * 60 * 24));
    contadorEl.innerText = `Faltam ${diasRestantes} dias para o próximo Processo Seletivo`;
}
setInterval(atualizarContador, 1000);

// Alternar depoimentos
let depoimentos = document.querySelectorAll('.depoimento');
let indexDepoimento = 0;

function alternarDepoimentos() {
    depoimentos.forEach((dep, index) => {
        dep.style.display = index === indexDepoimento ? 'block' : 'none';
    });
    indexDepoimento = (indexDepoimento + 1) % depoimentos.length;
}
setInterval(alternarDepoimentos, 5000);
