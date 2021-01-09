import React from 'react';
import styled from 'styled-components';
import { isPropertySignature } from 'typescript';

interface ModalTitleProps{
    text?: string
}

const ModalTitle: React.FC<ModalTitleProps> = ({text}) => {
    return (
        <StyledModalTitle>
        {text}
        </StyledModalTitle>
    )
    
}

const StyledModalTitle = styled.div`
  align-items: center;
  color: grey;
  display: flex;
  font-size: 18px;
  font-weight: 700;
  height: 10px;
  justify-content: center;
`

export default ModalTitle;