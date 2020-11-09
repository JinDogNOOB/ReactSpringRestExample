package com.yck.wob.dto;

public class IndexDTO {
    protected int index;
    protected int listAmount;

    protected int start;

    /**
     * you must input index and listAmount before calculating(this function)
     * calculate starting point
     * start 0 1 2 3 4 5 6 7 8 9 10 11 12 ~ *  
     * 
     */
    public void calcStartingIndex(){
        start = this.index * this.listAmount;
    }
    public int getIndex() {
        return index;
    }

    public void setIndex(int index) {
        if(index > 0 && index < Integer.MAX_VALUE){
            this.index = index-1;
        }else{
            this.index = 0;
        }
    }

    public int getListAmount() {
        return listAmount;
    }

    public void setListAmount(int listAmount) {
        if(listAmount > 0 && listAmount <= 100){
            this.listAmount = listAmount;
        }else{
            this.listAmount = listAmount;
        }
    }

    public int getStart() {
        return start;
    }



    
    
    
    
}
