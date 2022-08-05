
import Bootstrap from "./Bootstrap"
import Taildwind from "./Taildwind"
import Button from "./components/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from "./components/Tab";
import Test from "./components/Test";
import { useState } from "react";

import './taildwind.css'
//App.jsden aşagıdaki gibi self kapanısşı componentlerle veri gönderdik ama açılışı kapanışı olan şeylerle nasıl veri yollayacz onda da childeren devreye giriyor 
function App() {
   
  const [activeTab, setActiveTab] = useState(1)
  const [show, setShow] = useState(false)

  return (
    <>
      <div style={{padding:70}}>
        <button onClick={()=> setActiveTab(2)}>Aktif Tabı Değiştir</button>
            <Tab activeTab={activeTab}>
              <Tab.Panel title="Profil">1. Panel</Tab.Panel>
              <Tab.Panel title="Hakkında">2. Panel</Tab.Panel>
           
            </Tab>
        </div>

       <div style={{padding: 70}}>
            <Button text="Button Örnegi">Button Örnegi Childeren</Button>
            <Button text="Button Örnegi" varyant="primary"/>
            <Button text="Button Örnegi" varyant="danger"/>
       </div>   

       <div>
        <button onClick={()=> setShow(show => !show)}>
          {show ? 'Gizle' : 'Göster'}
        </button>

          {show && <Test/>}

       </div>
    </>
  ); 
}

export default App;
