<script>
    export let IMC;
    </script>
    <main>
        <button class="button" on:click={IMC}>Mostrar IMC</button>
    </main>
    <style>
    .button{
        background-color: #fff;
        border-radius: 10px;
        border: 2px solid black;
        font-size: 2rem;
    
    }
    .button:hover{
        background-color: red;
        cursor: pointer;
    }
    </style>