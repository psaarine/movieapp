import { useContext } from 'react';
import { ImageCardContext } from "../Contexts/ImageCardContext"


export const CarouselInfo = (props) => {
    const data = useContext(ImageCardContext);

    return (
        <div className="carouselInfoCont">
            <div className="carousel-info-header-cont">
                <h1>{data[0].title}</h1>
            </div>
            <div className="carousel-info-body-cont">
                <div className="carousel-info-body-rating"><p>{data[0].rating}</p></div>
                <div id="text-field" onWheel={e => handleScroll(e)} className="carousel-info-body-text">{data[0].description}</div>
            </div>
            {props.children}
        </div>
    );

    function handleScroll(e){
        const field = document.getElementById("text-field");
        const currentScroll = field.scrollTop;
        if (e.deltaY > 0) {field.scrollTo(0, currentScroll + 10);}
        else  {
            field.scrollTo(0, currentScroll - 10);
        }

        console.log(currentScroll);

    }
}