import React, {useEffect} from 'react';

import Modal, {ModalProps} from '../Modal';
import ModalTitle from '../ModalTitle';
import ModalContent from '../ModalContent';
import ModalActions from '../ModalActions';

const TestFunctionModal : React.FC<ModalProps> = ({onDismiss}) => {

    return (
        <Modal>
            <ModalTitle text="this is test modal" />

            <ModalContent>
                <div>
                    test1
                </div>
                <div>
                    test2
                </div>
                <div>
                    test3
                </div>
            </ModalContent>
            <ModalActions>
                <input type="button">test1</input>
                <input type="button">test2</input>
            </ModalActions>

        </Modal>
    )
}

export default TestFunctionModal;