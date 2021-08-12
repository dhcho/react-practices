import React, { Fragment, useState, useRef } from 'react';
import Modal from "react-modal";
import styles from './assets/scss/modal.scss'
Modal.setAppElement('body');

export default function App() {
    const [modalIsOpen, setModalIsOpen] = useState(false);



    return (
        <Fragment>
            <button onClick={ () => setModalIsOpen(true) }>upload</button>
            <br/><br/>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={ () => setModalIsOpen(false) }
                shouldCloseOnOverlayClick={ true }
                className={ styles.Modal }
                overlayClassName={ styles.Overlay }
                style={ {content: {width: 350}} }
                contentLabel="modal05 example">
                <h1>비밀번호입력</h1>
                <div>
                    <form>
                        <label>코멘트</label>
                        <br/>
                        <input type='text'/>
                        <br/><br/>
                        <label>이미지</label>
                        <br/>
                        <input type='file' />
                    </form>
                </div>
                <div className={ styles['modal-dialog-buttons'] }>
                    <button>확인</button>
                    <button onClick={ () => setModalIsOpen(false) }>취소</button>
                </div>
            </Modal>


        </Fragment>
    );
}