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
    window.addEventListener("wheel", function(e){e.preventDefault()}, {passive:false}); // I had to add this later since due to changes all handlers are passive by default
  }, [])

  useEffect(() => {
      setChunk(trendingData.slice(currentPagination, currentPagination + pagination))
  }, [trendingData, paginationIndex, currentPagination])

  return (
    <div className="App">
      <Sect color="black">
        <Preloader>
        {apiData != [] ? <div className="to-website-btn" onClick={() => setScreen(1)}>
          <h1>To Website</h1>
          </div> : <p>Loading</p>}
        </Preloader>
      </Sect>
      <Sect color="black">
        <h1 id="carousel-header">My favourites</h1>
          <div className="carousel-wrapper">
            <div className="carouselCont">
            <ImageContextProvider>
                <FavCarousel images={apiData}/>
                
                  <CarouselInfo>
                  </CarouselInfo>

            </ImageContextProvider>
              
            </div>
          </div>
          <div className="button" id="favs-to-trend" onClick={() => setScreen(2)}>To Trending</div>
          <h1 className="advice-text">Scroll to see 3d effect!</h1>
      </Sect>
      <Sect color="black">
        <h1 id="trending-header">Trending</h1>
        <div className="jumbo-container" id="jumbo-cont">
          {paginationChunk.map((movie, index) => <Jumbotron movie={movie} index={index+ currentPagination} key={index}/>)}
        </div>
        <div className="button" id="trend-to-favs" onClick={() => setScreen(1)}>To Favourites</div>
        <div className="button" id="trend-to-sign" onClick={() => setScreen(3)}>To Signature</div>
        <h1 className="advice-text">Scroll to watch more!</h1>
      </Sect>
      <Sect color="black">
        <div className="button" id="sign-to-trend" onClick={() => setScreen(2)}>To trending</div>
        <div className="signature-wrapper">
          <div className="signature-wrapper-text">
            <p>This website was done using purely react hooks. I mainly wanted to prove my understanding of fundamental react
            concepts. All data is taken from <a href="https://www.themoviedb.org/?language=fi">tmdb api</a></p>
          </div>
          <h1>Pyry Saarinen</h1>
          </div>
      </Sect>

    </div>
   

  );
}


export default App;
