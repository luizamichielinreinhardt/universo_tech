function calcularPotencia() {
    const tensao = parseFloat(document.getElementById("tensao").value);
    const corrente = parseFloat(document.getElementById("corrente").value);
    const resistencia = parseFloat(document.getElementById("resistencia").value);

    let potencia = null;

    // Prioridade das fórmulas: V e I → mais direta
    if (!isNaN(tensao) && !isNaN(corrente)) {
        potencia = tensao * corrente;
    }
    // Se não tiver corrente, mas tiver tensão e resistência
    else if (!isNaN(tensao) && !isNaN(resistencia)) {
        potencia = (tensao * tensao) / resistencia;
    }
    // Se não tiver tensão, mas tiver corrente e resistência
    else if (!isNaN(corrente) && !isNaN(resistencia)) {
        potencia = corrente * corrente * resistencia;
    } 

    // Exibe o resultado
    if (potencia !== null) {
        document.getElementById("resultado").innerHTML =
            `Potência calculada: <strong>${potencia.toFixed(2)} W</strong>`;
    } else {
        document.getElementById("resultado").innerHTML =
            "Preencha pelo menos duas grandezas para calcular a potência.";
    }
}
