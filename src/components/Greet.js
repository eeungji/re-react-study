import React from "react";
import Card from "./UI/Card";

const Greet = (ccc) => {


return (
  <Card className='border-green'>
    <h1>
      Hello REACT;
      {ccc.children} //하위태그조작가능
    </h1>
  </Card>

);
};



//   return (
//     <Card className='border-green'>
//       <h1>
//         Hello REACT!
//         {ccc.children}
//       </h1>
//     </Card>
//   );
// };

export default Greet;