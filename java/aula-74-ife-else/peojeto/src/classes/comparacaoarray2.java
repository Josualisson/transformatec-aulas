package classes;
import java.util.Arrays;

public class comparacaoarray2 {
    public static void main(String[] args) {
        int array01[] = {1,2,3};
        int array02[] = {1,2,3};

        if (Arrays.equals(array01, array02)) { //equals = compara o conteúdo do array
            System.out.println("Os arrays são iguais");
        } else {
            System.out.println("Os arrays são diferentes");
        }
            
        }
    }
