package com.yck.wob.dto;

public class IndexDTO {
    protected int index;
    protected int listAmount;

    protected
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

    
    
    
}
