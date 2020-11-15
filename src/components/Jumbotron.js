import styled from "styled-components";

const JumboItem = styled.div`
    // This is achieved with styled component because of my original plans
    width: 20%;
    height: 100%;
    border: 1px solid black;
    box-sizing: border-box;
`

export const Jumbotron = (props) => {

    return (
        <JumboItem>
            <div className="jumbo-imagediv">
                <img className="jumbo-image" src={props.movie.image_path} alt={props.movie.title}/>
            </div>
            <div className="jumbo-infodiv">
                <p className="trendingDescription">{props.index + 1}.{props.movie.title}</p>
                <p>{props.movie.overview}</p>
            </div>
        </JumboItem>
    );
}