import { useState } from "react";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [isSingle, setIsSingle] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const [data, setData] = useState([
    {
      title: "title one",
      description: "lorem13kaajk slllls dddddd., ekddddddddd",
    },
    {
      title: "title two",
      description: "loremn axkss jaddd eiauddd lorem14 jaldhoe hdhuiie",
    },
    {
      title: "title three",
      description: "loerens ckkslk sgjhsgjd sfjssbkkk skaoajs",
    },
  ]);

  const handleStatus = () => {
    setIsSingle(false);
    console.log("status", isSingle);
  };
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      <h1>haii</h1>

      {isSingle ? <p>Saya Single </p> : <p>Saya Sudah Menikah</p>}
      <button onClick={handleStatus}>Change status</button>
      <button onClick={toggleSidebar}>
        {showSidebar ? "Hide Sidebar" : "Show Sidebar"}
      </button>
      {showSidebar && <Sidebar />}
      <div>
        {data.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;
