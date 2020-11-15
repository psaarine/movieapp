

export const Preloader = (props) => {
    return (
    <div className="preloader-cont">
        <h1>I am preloader</h1>
        {props.children}
    </div>
    );
}