package com.yck.wob.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class BoardDTO extends IndexDTO{
    private int boardNo;
    private String boardName;
    private String boardDesc;
    private int boardProposer;
    private int boardStatus;

    
}