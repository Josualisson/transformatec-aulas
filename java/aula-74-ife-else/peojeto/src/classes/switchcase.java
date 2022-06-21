package classes;
import java.util.Scanner;

public class switchcase {


     public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Escolha um número entre 1 e 3 ");

        int option = scanner.nextInt();

        switch (option) {
            case 1:
                System.out.println("Premio minimo");
                break;
            case 2:
                System.out.println("Premio medio");
                break;
            case 3:
                System.out.println("Premio máximo");
                break;

            default:
                System.out.println("Perdeu tudo!");
                break;    
        }

        scanner.close();
    }

    
}
