package com.backend.demo.controller;

class Solution {
    public boolean isPalindrome(String s) {
        String input = s.toLowerCase().replaceAll("[^A-Za-z0-9]", ""); --
        int start = 0;
        int end = input.length() - 1;
        while(start <= end){
            if(input.charAt(start) != input.charAt(end)){
                return false;
            }
            start++;
            end--;
        }
        return true;
    }
}