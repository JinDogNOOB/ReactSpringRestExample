package com.yck.wob.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PostDTO extends IndexDTO{
    private int postNo;
    private int boardNo;
    private String postName;
    private String postDesc;
    private int postOwner;

    
}