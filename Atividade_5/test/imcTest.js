import { expect } from 'chai';
import calcIMC from '../src/imc.js';

describe('Calculadora de IMC', () => {

  it('Calculadora deve rodar tranquilo', () => {
    const peso = 80; // 80 kg
    const altura = 180; // 180 cm

    const IMEsperado = (peso / Math.pow(altura / 100, 2)).toFixed(2);
    const IMCCalculado = calcIMC(peso, altura);

    expect(IMCCalculado).to.equal(IMEsperado);
  });



  it('altura = 0cm, entrada inadequada', () => {
    const peso = 70; // 70 kg
    const altura = 0; // 0 cm

    const IMCCalculado = calcIMC(peso, altura);

    expect(IMCCalculado).to.equal('NaN');
  });


  it('Altura >= 350cm, entrada inadequada',()=>{
    const peso = 70; //70 kg
    const altura = 350; //350 cm
    
    const IMCCalculado = calcIMC(peso, altura);

    expect(IMCCalculado).to.equal('5.71');
});

    it('Peso = 0Kg, entrada inadequada',()=>{
        const peso = 0; //0 kg
        const altura = 180; //180 cm
        
        const IMCCalculado = calcIMC(peso, altura);
    
        expect(IMCCalculado).to.equal('0.00');
    });
});


