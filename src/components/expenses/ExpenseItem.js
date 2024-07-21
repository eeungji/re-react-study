import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { divide } from 'lodash';


const ExpenseItem = () => {

  // 변수 선언

  const expenseDate = new Date(2024, 6, 12);
  const expenseTitle = '점심식사';
  const expensePrice= 8000;


  // 함수 선언
  const makeFormattedDate = () => {

    const year = expenseDate.getFullYear();
    const month = expenseDate.getMonth();
    const date = expenseDate.getDate();
    
    return `${year}년 ${month}월 ${date}일`;
  };

  // 원화 표기법으로 변환
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(expensePrice);

  return (
    <div className='expense-item'>
      <div>{makeFormattedDate()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>{formattedPrice}</div>
      </div>
    </div>
  )
}

export default ExpenseItem


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

