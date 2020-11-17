import Styled from "styled-components";
import { useEffect, useReducer, useState, useContext } from "react";
import { ImageCardContext } from "../Contexts/ImageCardContext";

/* 



*/
let initialState = 0;

const reducer = (state, action) => {
    switch(action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "reset":
            return initialState;
        default:
            return state;
    }
}


const ImageCardStyle = Styled.div`
    height: auto;
    position: absolute;
    border: 1px solid black;
    transform: rotateY(${props => props.index * 45}deg) translateZ(500px);
    scale: ${props => props.scaled ? 1.2 : 1};
    transition: 1s;
`
const CardCarouselContainer = Styled.div`
    width: 300px;
    height: 450px;
    position: relative;
    transform-style: preserve-3d;
    transform: perspective(3000px) rotateY(${props => props.current * 45}deg);
    transition: linear 1s;
`

export const FavCarousel = (props) => {

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="carousel">
            <CardCarouselContainer current={count}>
                
                {props.images.map((image, index) => <ImageCard key={index} index={index} data={image} highlight={count}/>)}

            </CardCarouselContainer>
            <div className="scroll-hitbox" onWheel={e => handleWheel(e, dispatch)}>
            </div>
        {props.children}
        </div>
    )

    function handleWheel(e, handler){
        if (e.deltaY > 0) {
            handler("decrement");
        } else {
            handler("increment");
        }
    }
}

const ImageCard = (props) => {

    const [highlight, setHighlight] = useState(false);
    const highlightHelper = props.highlight % 8;
    const data = useContext(ImageCardContext);
    const handler = data[1];
    const infoObj = {
        title: props.data.title,
        rating: props.data.rating,
        description: props.data.overview
    }

    useEffect(() => {

        if (highlightHelper > 0) {
            if (highlightHelper == Math.abs(props.index - 8)) {
                setHighlight(true);
                handler(infoObj);
            }   else {
                setHighlight(false);
            }
        } else {
            if (Math.abs(highlightHelper) == props.index) {
                setHighlight(true);
                handler(infoObj);
            } else {
                setHighlight(false);
            }
        }
    }, [props.highlight]);
    
    return (

        <ImageCardStyle index={props.index} scaled={highlight}>
            <img className="carouselImage" src={props.data.url}/>
        </ImageCardStyle>

    );

}