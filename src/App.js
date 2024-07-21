import React from "react";
import Home from "./components/RouteExample/pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RouteExample/layout/RootLayout";
import ErrorPage from "./components/RouteExample/pages/ErrorPage";
import Events, {
  loader as eventListLoader,
} from "./components/RouteExample/pages/Events";
import EventDetail, {
  loader as eventDetailLoader,
  action as deleteAction,
} from "./components/RouteExample/pages/EventDetail";
import EventLayout from "./components/RouteExample/layout/EventLayout";
import NewEvent from "./components/RouteExample/pages/NewEvent";
import EditPage from "./components/RouteExample/pages/EditPage";
import { action as manipulateAction } from "./components/RouteExample/components/EventForm";

const App = () => {

  // 서버에서 지출항목 JSON 배열을 응답받음
  const expenses = [
  {
    title: '치킨먹음',
    price: 30000,
    date: new Date(2024, 6 - 1, 3)
  },
  {
    title: '족발먹음',
    price: 40000,
    date: new Date(2024, 6 - 1, 7)
  },
  {
    title: '헬스장등록',
    price: 300000,
    date: new Date(2024, 6 - 1, 12)
  },
];

  return (
    <>
      <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      />
      <ExpenseItem 
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date}
      />
    </>
  );
};

export default App;

// // 라우터 설정
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <RootLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       { index: true, element: <Home /> },
//       {
//         path: 'events',
//         element: <EventLayout />,
//         children: [
//           {
//             index: true,
//             element: <Events />,
//             // loader: eventListLoader,
//           },
//           {
//             path: ':eventId',
//             loader: eventDetailLoader,
//             // element: <EventDetail />,
//             // loader가 children에게 직접적으로 연결되지 않아
//             // EventDetail에서 loader를 사용하지 못하고 있음.
//             id: 'event-detail', // loader에게 ID 부여
//             children: [
//               {
//                 index: true,
//                 element: <EventDetail />,
//                 action: deleteAction
//                },
//               {
//                 path: 'edit',
//                 element: <EditPage />,
//                 action: manipulateAction
//               },
//             ]
//           },
//           {
//             path: 'new',
//             element: <NewEvent />,
//             // 서버에 갱신데이터요청을 보낼 때 트리거
//             action: manipulateAction
//           },
//         ]
//       },
//     ]
//   },
// ]);

// const App = () => {

//   return (
//     <RouterProvider router={router} />
//   );
// };

// export default App;
