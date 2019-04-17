import BeatContent from './BeatContent';

/*const webVersion = {
    position: "relative", 
    width: "60vh", 
    height: "90vh", 
    top: "5%", 
    left: "20%", 
    padding: "2vh 5vw", 
    border: "0em solid black", 
    borderRadius: "1em", 
    boxShadow: "0px 6px 10px #555", 
    overflow: "scroll", 
    backgroundColor: "rgba(128,128,150,0.4)"
}

const mobileVersion = {
    position: "relative", 
    width: "80%", 
    height: "90%", 
    top: "0%", 
    left: "10%", 
    padding: "2vh 5vw", 
    border: "0em solid black", 
    borderRadius: "1em", 
    boxShadow: "0px 6px 10px #555", 
    overflow: "scroll", 
    backgroundColor: "rgba(128,128,150,0.5)"
}*/

const whichVersion = (version) => {
    if (version === "web") {
        return "beats-card-web"
    }
    else {
        return "beats-card-mobile"
    }
}

const BeatsBackground = (props) => (

    <div id="beats">

        

            <div id={whichVersion(props.version)}>

                <BeatContent playSong={props.playSong} addToCartPopup={props.addToCartPopup} />

            </div>

        
        
    </div>

)

export default BeatsBackground;