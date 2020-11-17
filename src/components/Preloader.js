import logo from "../images/tmdb_logo.svg"

export const Preloader = (props) => {
    return (
    <div className="preloader-cont">
        <img src={logo} id="logo-image"style={{"width": 600}} alt="logo"/>
        <div className="preloader-text"><p>All the images and data here belong to awesome
              <a href="https://www.themoviedb.org/?language=fi">TMDb-website.</a><br></br><br></br>
            
             I only created the layout of the page, animations and visuals. Please support them since they allow
             for people to make awesome stuff like this. Most elements on the page have somekind of scroll effect,
             so make sure you dont miss it!</p></div>
            <div className="preloader-button-cont">

        {props.children}
            </div>
    </div>
    );
}