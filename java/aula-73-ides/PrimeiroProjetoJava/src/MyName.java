import java.util.Scanner;

public class MyName {
    public static void main(String[] args) {

        Scanner scann = new Scanner(System.in);
        System.out.println("Qual o seu nome meu parsa?");

        String name = scann.nextLine(); //nextFloat() nextInt()

        System.out.println("Qual a sua idade meu parsa?");

        int age = scann.nextInt(); // 

        System.out.println("Salve parsa, meu nome é " + name + " e a minha idade é: " + age + " anos");

        scann.close();

    }
}
