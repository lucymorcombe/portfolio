import header from "../assets/header.png"

function Header(props) {
    return (
        <div className="headerImage">
            <img src={header}/>
            <h1>{props.headerTitle}</h1>
        </div>        
    )
}

export default Header