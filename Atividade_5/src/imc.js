function calcIMC( peso, altura ){
    if (altura === 0) {
      return 'NaN'; // Retorna "NaN" se a altura for igual a zero
    }
  
    const alturaMetros = altura / 100; // Converte altura de centímetros para metros
    return (peso / (alturaMetros * alturaMetros)).toFixed(2); // Calcula o IMC com duas casas decimais
}

export default calcIMC; // Exporta a função calcularIMC