import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { divide } from 'lodash';

// - 상태값이라는 개념

//aaa App.js 에서 객체로 받아옴
const ExpenseItem = ({ date, title, price: exPrice}) => {

  // let itemTitle = title;

  // useState는 컴포넌트의 상태값을 관리하며 이 상태값은 랜더링에 영향을 미침
  // 
  /*
   - useState훅의 리턴값은 배열이며
   - 첫번째 요소는 관리할 상태값의 초기값
   - 두번째 요소는 해당 상태값을 변경할 때 사용하는 setter함수
  */
  const [itemTitle, setItemTitle] = useState(title);
  // console.log('abc: ', abc);

  // 원화 표기법으로 변환
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(exPrice);

  // 이벤트 핸들러 선언
  const clickHandler = e => {

    /*
     useState가 관리하는 상태값은 반드시 setter로만 변경해야 합니다.
    */

     setItemTitle('짜장면');

  };

  console.log('렌더링 전');

  return (
      //<card>의 {children}
      <Card className='expense-item'>
        <ExpenseDate />
        <div className='expense-item__description'>
          <h2>{itemTitle}</h2>
          <div className='expense-item__price'>{formattedPrice}</div>
        </div>
        <button id='btn' onClick={clickHandler}>제목수정</button>
      </Card>
  )
}

export default ExpenseItem;


// const ExpenseItem = ({ date, title, price: exPrice }) => {
//   // let itemTitle = title;

//   // useState는 컴포넌트의 상태값을 관리하며 이 상태값은 렌더링에 영향을 미침
//   /*
//     - useState훅의 리턴값은 배열이며 
//     - 첫번째 요소는 관리할 상태값의 초기값
//     - 두번째 요소는 해당 상태값을 변경할 때 사용하는 setter함수
//   */
//   const [itemTitle, setItemTitle] = useState(title);
//   // console.log('abc: ',abc);

//   // 원화 표기법으로 변환
//   const formattedPrice = new Intl.NumberFormat('ko-KR').format(exPrice);

//   // 이벤트 핸들러 선언
//   const clickHandler = (e) => {
//     /*
//       useState가 관리하는 상태값은 반드시 setter로만 변경해야 합니다.
//     */
//     setItemTitle('짜장면');
//   };

//   // console.log('렌더링 전');
//   return (
//     <Card className="expense-item">
//       <ExpenseDate exDate={date} />
//       <div className="expense-item__description">
//         <h2>{itemTitle}</h2>
//         <div className="expense-item__price">{formattedPrice}원</div>
//       </div>
//     </Card>
//   );
// };

// export default ExpenseItem;

