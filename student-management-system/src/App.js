import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentList from "./StudentList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
