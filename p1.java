// class p1{
//     public static void main(String args[]){
//         System.out.println("Hello world");
//     }
// }

// class p1{
//     public static void main(String args[]){
//         System.out.println("*");
//         System.out.println("**");
//         System.out.println("***");
//         System.out.println("****");
//         System.out.println("*****");
    
//     }
// }



// class p1{
    //     public static void main(String args[]){
        //         int a =10;
        //         int b=20;
        //         int r = (a*b)/(a+b);
        //         System.out.println(r);
        
     //     }
 // }

   
////scanner start 
// import java.util.*;
// class p1{
//     public static void main(String args[]){
//         Scanner sc = new Scanner(System.in);
//         String name = sc.next();
//         System.out.println(name);
        
//     }
// }

//// if else 

// import java.util.*;
// class p1{
//     public static void main(String args[]){
//         Scanner sc = new Scanner(System.in);
//         var no1 = sc.nextInt();
//         if(no1 > 18){
//             System.out.println("Adult");
//         }
//         else{
//             System.out.println("Not Adult");
//         }
//     }
// }


// import java.util.*;
// class p1{
//     public static void main(String args[]){
//         Scanner sc = new Scanner(System.in);
//         var no1 = sc.nextInt();
//         int i=no1%2;
//         if(i==0){
//             System.out.println("Even");
//         }
//         else{
//             System.out.println("Odd");
//         }
//     }
// }

//// Else if 
// import java.util.*;
// class p1{
//     public static void main(String args[]){
//         Scanner sc = new Scanner(System.in);
//         var no1 = sc.nextInt();
//         var no2 = sc.nextInt();
        
//         if(no1==no2){
//             System.out.println("qual");
//         }
//         else if(no1>no2){
//             System.out.println("Gretter");
//         }
//         else{
//             System.out.println("Lessthan");
//         }
//     }
// }

//// Switch case 
// import java.util.*;
// public class p1 {
//     public static void main(String args[]){
//         Scanner sc =new Scanner(System.in);
//         var no1 = sc.nextLine();
//         switch (no1) {
//             case "1":
//                 System.out.println("monday");
//                 break;
//             case "2":
//                 System.out.println("Tuesday");
//                 break;
//             case "3":
//                 System.out.println("wendsday");
//                 break;

//             case "4":
//                 System.out.println("Thrusday");
//                 break;

//             case "5":
//                 System.out.println("Friday");
//                 break;
//             case "6":
//                 System.out.println("Saturday");
//                 break;
//             case "7":
//                 System.out.println("sunday");
//                 break;
//             default:
//                 System.out.println("no Day found ");
//                 break;
//         }
//     }
// }

//// for loop 
// import java.util.*;
// public class p1 {
//     public static void main (String rrga[]){
//         // Scanner sc = new Scanner(System.in);
        
//         for(int a =10;a>0; a--){
//             System.out.println(a);
//         }
//     }
// }


////For loop 
// public class p1 {
//     public static void main (String rrga[]){
        
//         for(int a =0;a<11; a++){
//             System.out.println(a);
//         }
//     }
// }


//// while loop 
// public class p1 {
//     public static void main(String args[]){
//         int a =0;
//         while(a<11){
//             System.out.println(a);
//             a++;
//         }
//     }
    
// }

//// Do-while
// public class p1 {

//     public static void main(String[] args) {
//         int a=0;
//         do{
//             System.out.println(a);
//             a++;
//         }while(a<11);
//     }
// }

// import java.util.Scanner;
// public class p1 {
//     public static void main(String[] args) {
//         Scanner sc =new Scanner(System.in);
//         int n=sc.nextInt();
//         int sum = 0;
//         for(int i=1;i<=n;i++){
//             sum = sum + i;
//         }
//             System.out.println(sum);
//     }
// }

import java.util.Scanner;
public class p1 {
    public static void main(String[] args) {
        Scanner sc =new Scanner(System.in);
        int n=sc.nextInt();
        for(int i=1;i<11;i++){
            System.out.println(n*i);
        }   
    }
}





