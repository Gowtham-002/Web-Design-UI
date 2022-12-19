import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class BufferedReaderCSV {
    public static void main(String[] args) {
//        int[][] arr = new int[6][8];
//        try{
//            FileReader fr = new FileReader(new File("input.csv"));
//            BufferedReader br = new BufferedReader(fr);
//            String line;
//            int i = 0;
//            while((line = br.readLine()) != null){
//
//                String[] nums = line.split(",");
//                for(int j = 0; j < nums.length; j++){
//                    try{
//                        arr[i][j] = Integer.parseInt(nums[j].trim());
//                    }
//                    catch(NumberFormatException e){
//                        arr[i][j] = -1;
//                    }
//                }
//                i++;
//            }
//        }
//        catch(FileNotFoundException e){
//            System.out.println("File not found");
//        }
//        catch (IOException e){
//            System.out.println("IO Error");
//        }
//
//        for(int i=0; i < 5;i++){
//            for(int j=0; j < 7; j++){
//                System.out.print(arr[i][j]+ " ");
//            }
//            System.out.println();
//        }
        List<List<Integer>> arrList = new ArrayList<>();
        File file = new File("input.csv");
        try{
            FileReader fr = new FileReader(file);
            BufferedReader br = new BufferedReader(fr);
            String line;
            while((line = br.readLine()) != null){
                List<Integer> li = new ArrayList<>();
                String[] nums = line.split(",");
                for(int i=0; i < nums.length; i++){

                    try {
                        li.add(Integer.parseInt(nums[i].trim()));
                    }
                    catch(NumberFormatException e){
                        li.add(-1);
                    }
                }
                arrList.add(li);
            }
        }
        catch(FileNotFoundException e){
            System.out.println(e);
        }
        catch (IOException e){
            System.out.println(e);
        }

        for(List<Integer> li: arrList){
            for(int num: li){
                System.out.print(num + " ");
            }
            System.out.println();
        }
    }
}
