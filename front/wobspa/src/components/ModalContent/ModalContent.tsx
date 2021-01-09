import React from 'react';
import styled from 'styled-components'

const ModalContent: React.FC = ({children}) => {
    return (
        <StyledModalContent>
            {children}
        </StyledModalContent>
    )
}

const StyledModalContent = styled.div`
  padding: 4px;
`

export default ModalContent;