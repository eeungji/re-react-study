import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { divide } from 'lodash';

//aaa App.js 에서 객체로 받아옴
const ExpenseItem = ({ date, title, price: exPrice}) => {

  // console.log('props: ', aaa);

  // 변수 선언
  // const expenseDate = date;
  // const expenseTitle = title;
  // const expensePrice= exPrice;


  // 함수 선언
  // const makeFormattedDate = () => {

  //   const year = date.getFullYear();
  //   const month = date.getMonth();
  //   const day = date.getDate();
    
  //   return `${year}년 ${month}월 ${day}일`;
  // };

  // 1자리 숫자를 2자리수로 변환하는 함수
  const make2digit = (text) => {
    return text.toString().padStart(2, '0');
  };

  // 원화 표기법으로 변환
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(exPrice);


  return (
      //<card>의 {children}
      <Card className='expense-item'>
        <ExpenseDate />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>{formattedPrice}</div>
        </div>
      </Card>

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

