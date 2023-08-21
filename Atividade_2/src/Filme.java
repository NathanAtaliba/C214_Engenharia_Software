import java.util.Scanner;
public class Filme {
    public String titulo;
    public int ano;
    public String genero;
    public String duracao;
    public boolean assistido;
    public float avaliacao;

    public Filme(String titulo, int ano, String genero, String duracao, boolean assistido, float avaliacao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.assistido = assistido;
        this.avaliacao = avaliacao;
    }

    public void mostrarAtributos(){
        System.out.println("<======== Filme ========> ");
        System.out.println("Titulo: " + titulo);
        System.out.println("Ano: " + ano);
        System.out.println("Genero: " + genero);
        System.out.println("Duracao: "+ duracao);
        System.out.println("Assistido: " + assistido);
        System.out.println("Avaliacao: " + avaliacao);
        System.out.println(" ");
    }
    public void marcarAssistido(String nome){
        assistido = true;
    }

    public void avaliarFilme(float nota){
        if(nota <= 10) {
            avaliacao = nota;
            System.out.println("Filme avaliado com sucesso!");
        }
        else{
            System.out.println("Nota invalida!");
        }
    }
}
