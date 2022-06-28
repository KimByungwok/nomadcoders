import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

public class MainClass {
    public static void main(String[] args) {

        // for (int i = 2; i <= 9; i++) {
        // System.out.println(i + "단-----------");
        // for (int j = 1; j <= 9; j++) {
        // System.out.println(i + " X " + j + " = " + i * j);
        // }
        // }

        // System.out.print("구구단 수 입력 : ");
        // Scanner sc = new Scanner(System.in);
        // int i = sc.nextInt();

        // for (int j = 1; j <= 9; j++) {
        // System.out.println(i * j);
        // }

        // Integer[] arr = { 1, 14, 7, 4, 26, 72, 46 };
        // Arrays.sort(arr, Comparator.reverseOrder());
        // System.out.println(Arrays.toString(arr));

        // Scanner sc = new Scanner(System.in);
        // System.out.print("숫자 3개 입력 : ");
        // int a = sc.nextInt();
        // int b = sc.nextInt();
        // int c = sc.nextInt();

        // Integer[] arr = {a,b,c};
        // Arrays.sort(arr);
        // System.out.println(Arrays.toString(arr));

        // Scanner sc = new Scanner(System.in);
        // int a = sc.nextInt();
        // int b = sc.nextInt();
        
        // if (a > b){
        //     System.out.println(">");
        // }
        // else if (a < b){
        //     System.out.println("<");
        // }else{
        //     System.out.println("==");
        // }

        // Scanner sc = new Scanner(System.in);
        // int a = sc.nextInt();
        // if(100 >= a && a >=90){
        //     System.out.println("A");
        // } else if(90 > a && a >=80){
        //     System.out.println("B");
        // }else if(80 > a && a >=70){
        //     System.out.println("C");
        // }else if(70 > a && a >=60){
        //     System.out.println("D");
        // }else{
        //     System.out.println("F");
        // }
        
        // Scanner sc = new Scanner(System.in);
        // int a = sc.nextInt();

        // if((a % 4 == 0 && a % 100 != 0) || (a % 400 == 0)){
        //     System.out.println("1");
        // }else{
        //     System.out.println("0");
        // }
        
        // System.out.print("x좌표와 y좌표를 입력하시오 : ");
        // Scanner sc = new Scanner(System.in);
        // int x = sc.nextInt();
        // int y = sc.nextInt();
        
        // if (x > 0 && y > 0 && x != 0 && y != 0){
        //     System.out.println("1");
        // }
        // else if (x < 0 && y > 0 && x != 0 && y != 0){
        //     System.out.println("2");
        // }
        // else if (x < 0 && y < 0 && x != 0 && y != 0){
        //     System.out.println("3");
        // }else if (x > 0 && y < 0 && x != 0 && y != 0){
        //     System.out.println("4");
        // }
        System.out.println("시간 입력: ");
        Scanner sc = new Scanner(System.in);
        int h = sc.nextInt();
        int m = sc.nextInt();
        
        if (h >= 0 && h <= 23 && m >= 0 && m <= 59){
            int c = m-45;
            if(m == 0){
                h = h-1;
                System.out.println(h+"시"+c+"분");
            }
        }
        else{
            System.out.println("시간을 바르게 입력하시오");
        }
    }
}