import React from 'react';
import styled from 'styled-components';

const ModalActions: React.FC = ({children}) => {
    // const childrenLen = React.Children.toArray(children).length;
    return(
        <StyledModalActions>
            {React.Children.map(children, (child, i) => (
                <StyledModalAction>
                    {child}
                </StyledModalAction>
            ))}
        </StyledModalActions>
    );
}

const StyledModalActions = styled.div`
  align-items: center;
  background-color: grey;
  display: flex;
  margin: 0;
  padding: 4px;
`

const StyledModalAction = styled.div`
  flex: 1;
`

export default ModalActions;