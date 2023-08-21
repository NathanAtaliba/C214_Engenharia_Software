import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Scanner;
import java.util.List;
public class Main {
    static int flag = 0;
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        List<Filme> filmeList = new ArrayList<Filme>();
        while (true) {
            System.out.println("Options:");
            System.out.println("1 - Adicionar Filme");
            System.out.println("2 - Marcar um filme como assistido");
            System.out.println("3 - Avaliar um filme");
            System.out.println("4 - Exibir a lista de filmes");
            System.out.println("5 - Sair do programa");
            System.out.print("Escolha: ");
            int condicao = input.nextInt();

            switch (condicao) {
                case 1:
                    System.out.print("Entre com o titulo do filme: ");
                    String titulo = input.next();
                    System.out.print("Entre com o ano do filme: ");
                    int ano = input.nextInt();
                    System.out.print("Entre com o genero do filme: ");
                    String genero = input.next();
                    System.out.print("Entre com o duracao do filme: ");
                    String duracao = input.next();
                    System.out.print("Ja assistiu (false-Nao, true-Sim): ");
                    boolean assistido = input.nextBoolean();
                    if(assistido == true){
                        System.out.println("Avalie esse filme: ");
                        float avaliacao = input.nextFloat();
                        filmeList.add(new Filme(titulo, ano, genero, duracao, assistido, avaliacao));
                    }else
                        filmeList.add(new Filme(titulo, ano, genero, duracao, assistido, 0));
                    break;
                case 2:
                    System.out.print("Escolha o nome do filme a ser marcado como assitido: ");
                    titulo = input.next();
                    for(Filme filme: filmeList){
                        if( titulo.equals(filme.titulo)) {
                            filme.marcarAssistido(titulo);
                            flag = 1;
                        }
                    }
                    if(flag == 1){
                        System.out.println("Filme marcado como assistido!");
                        flag = 0;
                    }else{
                        System.out.println("Filme nao encontrado!");
                    }
                    break;
                case 3:
                    System.out.print("Qual filme voce deseja avaliar: ");
                    titulo = input.next();
                    for(Filme filme: filmeList){
                        if(titulo.equals(filme.titulo)) {
                            System.out.print("Entre com a nota: ");
                            float nota = input.nextFloat();
                             filme.avaliarFilme(nota);
                            flag = 1;
                        }
                        }
                    if(flag == 1){
                        flag = 0;
                    }
                    else{
                        System.out.println("Filme nao encontrado!");
                    }

                    break;
                case 4:
                    for(Filme filme : filmeList){
                        filme.mostrarAtributos();
                }
                    break;
                case 5:
                    System.out.println("Até mais!");
                    input.close();
                    System.exit(0);
                    break;
                default:
                    System.out.println("Opção não existe!");
                    break;
            }
        }
    }
}

