import React, { useState } from 'react';
import styles from './assets/scss/GuestbookListItem.scss';
import Modal from "react-modal";
import ReactModal from "react-modal";
import modalStyles from './assets/scss/modal.scss';

ReactModal.setAppElement('body');

export default function GuestbookItem({ no, name, message, regDate, notifyTask }) {
    const [deleteModal, setDeleteModal] = useState(false);
    const [password, setPassword] = useState('');

    const modalChange = function() {
        notifyTask.delete(no, password);
        setDeleteModal(false);
    }

    return (
        <li className={ styles.Guestbook__List__Item }>
            <strong>{ name }</strong>
            <p>
                { message && message.split('\n').map((line, index) => index > 0 ?
                    <span key={`${no}-${index}`}>
                        <br/>
                        { line }
                    </span> : line) }
            </p>
            <strong>{ regDate }</strong>
            <a href='#' onClick={ () => setDeleteModal(true) } >삭제</a>
            
            <Modal
                appElement={document.getElementById('root') || undefined}
                isOpen={deleteModal}
                onRequestClose={ () => setDeleteModal(false) }
                shouldCloseOnOverlayClick={ true }
                className={ modalStyles.Modal }
                overlayClassName={ modalStyles.Overlay }
                style={ {content: {width: 350}} }
                contentLabel="방명록 삭제">
                <h1>비밀번호입력</h1>
                <div>
                        <label>작성시 입력했던 비밀번호를 입력하세요.</label>
                        <br/><br/>
                        <input type='text' name='password' value={ password } onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div className={ modalStyles['modal-dialog-buttons'] }>
                    <button onClick={ modalChange }>확인</button>
                    <button onClick={ () => setDeleteModal(false) }>취소</button>
                </div>
            </Modal>
        </li>
    );
}