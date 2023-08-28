  
  import {BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Main01 from "./component/Main01";
import Main02 from "./component/Main02";
import Day from "./component/Day";
import DayList from "./component/DayList";
import EmptyPage from "./component/EmptyPage";
import Main05 from "./component/Main05";
import Main06 from "./component/Main06";
import Main04 from "./component/Main04";

// 1. App을 BrowserRouter로 감싼다.
function App() {

  return (
    <BrowserRouter>
    <div className="App">
        <h1> React 연습하기 </h1>
        <hr />
        <button style={{marginLeft:"20px"}}><Link to="/Main01"> Main01 </Link></button>
        <button style={{marginLeft:"20px"}}><Link to="/Main02"> Main02 </Link></button>
        <button style={{marginLeft:"20px"}}><Link to="/Main04"> Main04 </Link></button>
        <button style={{marginLeft:"10px"}}><Link to="/Main05"> Redux </Link></button>
        <button style={{marginLeft:"10px"}}><Link to="/Main06"> ReduxToolkit </Link></button>
        </div>
        <Routes>
          <Route path="/" />
          <Route path="/Main01" element={<Main01 />} />
          <Route path="/Main02" element={<Main02 />} />
          
          <Route path="/day/:day" element={<Day />} />
          <Route path="/DayList" element={<DayList />} />
          <Route path="/Main02" element={<Main04 />} />
          <Route path="/Main05" element={<Main05 />} />
          <Route path="/Main06" element={<Main06 />} />
          {/* 이외에 url이 들어오면 받아들이는 페이지 */}
          
          <Route path="/*" element={<EmptyPage />} />

        </Routes>
    </BrowserRouter>  
  );
}

export default App;
