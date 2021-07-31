import React from 'react';
import styles from './assets/scss/GuestbookForm.scss'

export default function GuestbookForm({}) {
    return (
        <form className={ styles.Guestbook__Form } action="" method="post">
                <input type="text" id="input-name" placeholder="이름" />
                <input type="password" id="input-password" placeholder="비밀번호" />
                <textarea id="tx-content" placeholder="내용을 입력해 주세요."></textarea>
                <input type="submit" value="보내기" />
        </form>
    );
}