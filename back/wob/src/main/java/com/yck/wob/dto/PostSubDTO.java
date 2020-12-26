package com.yck.wob.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PostSubDTO {
    private int postSubNo;
    private int postSubParentNo;
    private int postNo;
    private int boardNo;
    private String postSubDesc;
    private int postSubOwner;


}