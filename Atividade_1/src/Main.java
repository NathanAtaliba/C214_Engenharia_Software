public class Main {
    public static void main(String[] args) {
        Filme filme1 = new Filme("Titanic",1990,"Romance/Catastrofe","3h e 14min",true, 9.8f);
        filme1.mostrarAtributos();

        Filme filme2 = new Filme("2012",2012,"Catastrofe","2h e 38min",false,9.4f);
        filme2.mostrarAtributos();

        Filme filme3 = new Filme("Velozes e furiosos 6",2013,"Acao","2h e 10min",false,9.6f);
        filme3.mostrarAtributos();

        //PARA MARCAR O FILME COMO ASSISTIDO
        filme2.marcarAssistido();
        //PARA AVALIAR O FILME
        filme2.avaliarFilme(10f);

        //VERIFICANDO SE AS FUNCOES ESTAO FUNCIONANDO
        filme2.mostrarAtributos();
    }
}
