package com.yck.wob.util;

// 페이징이 필요한 DTO 클래스는 이것을 상속받자 
// 페이지네이션을 인터페이스로 할수는있으나.. 일단은 다 똑같이 작동할것같아서 구현해버리고 상속하자

/*
한쪽당 x개의 글
1 2 3 4 5 6 7 8 9 10

글이 x*10 이하일경우 목차 안나오게하는기능,,
저 목차 1~10까지 다 나올필요가 없긴하지만 그것을 구현하려면 글 갯수구하는게 필요할것같기때문에 버린다
앗,,, 차피 내림차순이고 반환값에 있는 가장 첫번째 userNo 또는 postNo의 값으로 전체글갯수를 알수있다.
가능하니 spa프론트짤때 신경쓰자


db에서의 쓰임새
mybatis 에 #{} 안에다가 연산자넣어서 하려고했는데,, 
limit 구문에는 안된다고하네
으아아아아아악
*/

/**
 * 페이징을 사용하고싶으면 이것을 상속받고 
 * page값과 
 * 필요하다면 amount(default 10)을 넣고
 * amount값을 넣어야할때는 setPage보다 먼저 작업을 하시기바랍니다.. 
 * db에서는 다음과 같이 쿼리하면 됩니다.
 * 
 * select * from 테이블 where 조건 order by 키 desc Limit #{startNo}, #{endNo}
 */
public class Pagination {
    private int page;
    private int amount = 10; // 기본값 10

    private int startNo;
    private int endNo;



    public void setPage(int page) {
        if(page < 1){
            this.page = 1;
        }else{
            this.page = page;
        }
        // startNo과 endNo 작업
        this.startNo = ((page-1)*amount);
        this.endNo = (page * amount);
    }

    public void setAmount(int amount) {
        this.amount = amount;
        // 코딩상 amount를 먼저 처리를 안하고 나중에 했을때 재연산해줘야한다 밑에 그부분
        this.startNo = ((page-1)*amount);
        this.endNo = (page * amount);
    }


    public int getPage() {
        return page;
    }
    public int getAmount() {
        return amount;
    }



    public int getStartNo() {
        return startNo;
    }

    public void setStartNo(int startNo) {
        this.startNo = startNo;
    }

    public int getEndNo() {
        return endNo;
    }

    public void setEndNo(int endNo) {
        this.endNo = endNo;
    }

    




    
}