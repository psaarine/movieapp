import styled from "styled-components";
import { useEffect, useReducer, useState } from "react";
import {screenHandler, dataFetcher, wheelHandler, paginationReducer} from "./Scripts/utils";
import { generateToken, parseUrl, printStorage } from "./Scripts/adminScripts";
import { Preloader } from "./components/Preloader";
import { FavCarousel } from "./components/FavCarousel";
import { CarouselInfo } from "./components/CarouselInfo";
import { ImageContextProvider } from "./Contexts/ImageCardContext";
import { Jumbotron } from "./components/Jumbotron";
import "./appStyle.css";

const Sect = styled.section`
  background-color: ${props => props.color || "orange"};
  height: 100vh;
  display:flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

function App() {
  
  const pagination = 5;
  const [currentScreen, setScreen] = useState(0);
  const [apiData, setData] = useState([]);
  const [trendingData, setTrending] = useState([]);
  const [paginationChunk, setChunk] = useState([]);
  const [paginationIndex, setPaginationIndex] = useReducer(paginationReducer, 0);
  let currentPagination = pagination * paginationIndex;


  
  useEffect(() => {
    
    if (currentScreen > 0) {
      screenHandler(currentScreen);
    }
    
  }, [currentScreen]);


  useEffect(() => {
    dataFetcher(setData, setScreen, setTrending);
    window.onwheel = (e) => wheelHandler(e, setPaginationIndex);
  }, [])

  useEffect(() => {
      setChunk(trendingData.slice(currentPagination, currentPagination + pagination))
  }, [trendingData, paginationIndex, currentPagination])

  return (
    <div className="App">
      <Sect color="black">
        <Preloader>
        <button onClick={() => setScreen(1)}>Click</button>
        </Preloader>
      </Sect>
      <Sect color="black">
        <div className="carouselCont">
        <ImageContextProvider>
          <FavCarousel images={apiData}/>
          
            <CarouselInfo>
            </CarouselInfo>

        </ImageContextProvider>
          
        </div>
        <button id="carouselbutton" onClick={() => setScreen(2)}>Down</button>
      </Sect>
      <Sect color="black">
        <h1 id="trending-header">Trending</h1>
        <div className="jumbo-container" id="jumbo-cont">
          {paginationChunk.map((movie, index) => <Jumbotron movie={movie} index={index+ currentPagination} key={index}/>)}
        </div>
        <button onClick={() => setScreen(1)}>Up</button>
        <button onClick={() => setScreen(3)}>Down</button>
      </Sect>
      <Sect>
        <p>Signature</p>
        <button onClick={() => generateToken()}>Tokenize</button>
        <button onClick={() => parseUrl()}>Parser</button>
        <button onClick={() => printStorage()}>Printter</button>
      </Sect>

    </div>
   

  );
}


export default App;
