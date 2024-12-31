

import { useState } from "react";
/* import './css/style.scss' ; */
import './css/style.css' ;
import remove from './img/free-icon-x-657059.png';
import add from './img/free-icon-plus-circular-sign-20362.png';

const CheckList = () => {
    const [list, setList] = useState([
        {id: 1, text : '점심 메뉴 선택하기'},
        {id: 2, text : '내일 할일 정하기'},
        {id: 3, text : '집 가기'},
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(4);

    const buttonClick = (e) => {
        e.preventDefault();
        if(inputText === '') {
            return
        }

        const addText = list.concat({
            id : nextId,
            text : inputText
        });

        setNextId(nextId + 1);
        setList(addText);
        setInputText('');
    }

    //삭제 filter
    //filter 조건을 만족하는 요소만 새로 추가
    //기존 데이터(배열)은 변경하지 않고 생성

    const itemRemove = (idx) => {
        /* //id값과 idx값이 같지 않을 때 새로운 배열로 추가
        const idx = 2 //제거가 될 순서값 */
        const itemId = list.filter(name => name.id !== idx ) //i== 나, === 이런 것들 구분 잘하기
        setList(itemId);
        console.log(idx)
    }


    const valueChange = (e) => {
        setInputText(e.target.value)
    }


    //시간
    const date = new Date();
    const dateYear = date.getFullYear();
    const dateMonth = date.getMonth() + 1; //월 0 ~ 11
    const dateDate = date.getDate();

    const listWrap = list.map((item, index) => <li key ={index} className="item">
        <div className="group">
        <strong>{item.text}</strong>
        <ul>
            <li>{dateYear}</li>
            <li>{dateMonth}</li>
            <li>{dateDate}</li>
        </ul>
        </div>
        <button type="button" onClick={() => itemRemove(item.id)}>
        <img src={remove} alt="삭제하기" />
        </button>
    </li>)

    return (
        <div className="check">
            <form action="" onSubmit={buttonClick}>
                <input type="text" value={inputText} onChange={valueChange} placeholder="리스트 입력해주세요" />
                <button type="button" onClick={buttonClick}>
                <img src={add} alt="추가하기" />
                </button>
            </form>

            <div className="check_list">
                <ul>
                    {listWrap}

                    {/* <li className="item">
                        <strong>점심 메뉴 선택하기</strong>
                        <button type="button">삭제</button>
                    </li>
                    <li className="item">
                        <strong>내일 할일 정하기</strong>
                        <button type="button">삭제</button>
                    </li>
                    <li className="item">
                        <strong>집 가기</strong>
                        <button type="button">삭제</button>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}

export default CheckList;