import styled from "styled-components";
import { useEffect, useState } from "react";
import HookCounter from "./components/HookCounter";
import {screenHandler, dataFetcher} from "./Scripts/utils";

const Sect = styled.section`
  background-color: ${props => props.color || "orange"};
  height: 100vh;
`

function App() {
  
  const [currentScreen, setScreen] = useState(0);
  const [apiData, setData] = useState(null);


  
  useEffect(() => {
    if (currentScreen > 0) {
      screenHandler(currentScreen);
    } else {
      dataFetcher(setData, setScreen);
    }
    
  });
  return (
    <div className="App">
      <Sect>
        <p>Preloader</p>
        <button onClick={() => setScreen(1)}>Click</button>
      </Sect>
      <Sect>
        <p>Hottest</p>
        <button onClick={() => setScreen(2)}>Down</button>
      </Sect>
      <Sect>
        <p>Content</p>
        <button onClick={() => setScreen(1)}>Up</button>
        <button onClick={() => setScreen(3)}>Down</button>
      </Sect>
      <Sect>
        <p>Signature</p>
      </Sect>

    </div>
   

  );
}


export default App;
