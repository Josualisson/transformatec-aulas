package classes;

public class comparacaoarray {
    public static void main(String[] args) {

        
        int[] array01 = {1, 2, 3};
        int[] array02 = {1, 2, 3};

        //comparação de arrays

        if (array01 == array02) {
            System.out.println("Os arrays são iguais");
        } else {
            System.out.println("Os arrays são diferentes");
        }
    }
    //retorna diferente porque não é comparado o conteúdo do array mas a variável de referencia
}
