import React, { useState } from 'react';
import styles from './assets/scss/GuestbookForm.scss'

export default function GuestbookForm({}) {
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [content, setContent] = useState();

    return (
        <form className={ styles.Guestbook__Form } action='/api/add' method="post">
                <input type="text" name="name" id="name" placeholder="이름" value={ name } onChange={ () => setName() } />
                <input type="password" name="password" id="password" placeholder="비밀번호" value={ password } onChange={ () => setPassword() } />
                <textarea id="content" name="content" placeholder="내용을 입력해 주세요." value={ content } onChange={ () => setContent() }></textarea>
                <input type="submit" value="보내기" />
        </form>
    );
}