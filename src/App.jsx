import {BrowserRouter ,Routes,Route } from "react-router-dom";

import Display from "./Component/Display";
import Home from "./Component/Home";
import Insert from "./Component/Insert";
import Search from "./Component/Search";
import Layout from "./Layout";
import Update from "./Component/Update";
import EditData from "./Component/EditData";

const App=()=>{
  return(
    <>
  <BrowserRouter>
  <Routes>

    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path="insert" element={< Insert/>}/>
    <Route path="Search" element={< Search/>} />
    <Route path="display" element={<Display/>}/>
    <Route path="Update" element={<Update/>} />
    <Route path="myedit/:id" element={<EditData/>} />
    </Route>
  </Routes>

  </BrowserRouter>
    </>
  )
}
export default App;
