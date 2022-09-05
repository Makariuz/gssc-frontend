

import { Outlet } from "react-router-dom";

import { Navbar, FileUpload } from "./components";
import {useState} from 'react'

function App() {
  // variable to store file url
  const [file, setFile] = useState()

  return (
    <div>
      <Navbar />
      <FileUpload setFile={setFile}/>
      <img src={file} />
      <Outlet />
      footer
    </div>
  );
}

export default App;