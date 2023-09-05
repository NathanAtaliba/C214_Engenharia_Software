<script>
	import IMC from "./IMC.svelte"
	
	// Variáveis de estado
	let disparo = 0;
	let peso = 0;      // Peso do usuário
	let altura = 0;    // Altura do usuário
	let imc = 0;       // Índice de Massa Corporal
	let classificacao = '';
	// Função para calcular o IMC
	function calcularIMC() {
	if(disparo == 1 ){
	  if (peso > 0 && altura > 0) {
		imc = (peso / Math.pow(altura, 2)).toFixed(2);
		if(imc < 18.5){
			classificacao = 'Abaixo do peso'
		}
		else if(imc >= 18.6 && imc <= 24.9){
			classificacao = 'Peso ideal(Parabens)'
		}
		else if(imc >= 25 && imc <= 29.9){
			classificacao = 'Levemente acima do peso'
		}
		else if(imc >= 30 && imc <= 34.9){
			classificacao = 'Obesidade grau 1'
		}
		else if(imc >= 35 && imc <= 39.9){
			classificacao = 'Obesidade grau 2 (severa)'
		}else{
			classificacao = 'Obesidade grau 3 (mórbida)'
		}
	  } else {
		imc = 0;
		classificacao = 'Não existe!'
	  }
	}
	}
	function mostrarIMC(){
		disparo=1;
		calcularIMC();
		disparo=0;
		
	}
  </script>
<main>
	<h1>Calculadora de IMC</h1>
	<label>
	  Peso (kg): <input type="number" bind:value={peso} on:input={calcularIMC} />
	</label>
	<label>
	  Altura (m): <input type="number" bind:value={altura} on:input={calcularIMC} />
	</label>
	<h1 class="classificacao">Aperte no botao para exibir: </h1>
	<IMC IMC ={mostrarIMC}/>
	{#if imc > 0}
	  <p>Seu IMC é : {imc}</p>
	  <p>Classificacao: {classificacao}</p>
	{:else}
		<p>Seu IMC é : {imc}</p>
		<p>Classificacao: {classificacao}</p>
	{/if}
  </main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		background: rgb(2,0,36);
		background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
		height: 100%;
	}

	h1 {
		color: white;
		text-transform: uppercase;
		font-size: 4rem;
		font-weight: 100;
	}
	label{
		color:white;
		font-size: 2rem;	
	}
	p{
		color:white;
		font-size: 2rem;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>