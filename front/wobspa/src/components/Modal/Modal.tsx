import React from 'react';
import styled, {keyframes} from 'styled-components';

export interface ModalProps{
    onDismiss?: () => void
}

const Modal: React.FC = ({children}) => {
    return (
        <StyledResponsiveWrapper>
            <StyledModal>
                {children}
            </StyledModal>
        </StyledResponsiveWrapper>

    )
}

const mobileKeyframes = keyframes`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-100%);
  }
`

const StyledResponsiveWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  max-width: 512px;
`

const StyledModal = styled.div`
  padding: 0 20px;
  background: grey;
  border: 1px solid grey;
  border-radius: 12px;
  box-shadow: inset 1px 1px 0px grey;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-height: 0;
`

export default Modal;
