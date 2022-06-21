package classes;
import java.util.Scanner; //declaração de classe para leitura de dados

public class ifelsedirigir {
    
    

    public static void main(String[] args) {

        Scanner scann = new Scanner(System.in); // leitura de dados no terminal

        System.out.println("Informe a sua idade:");

        int age = scann.nextInt();

        String name = scann.nextLine();

        if(age < 18){

            System.out.println("Não pode dirigir!");
            
        }else if(age > 18 && age < 21){

            System.out.println("Carteria provisória");

        }else{

            System.out.println("Pode dirigir!");

        }
        scann.close();
    }

}
