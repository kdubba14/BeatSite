import BeatContent from './BeatContent';

const webVersion = {
    position: "relative", 
    width: "60%", 
    height: "90%", 
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
    top: "5%", 
    left: "10%", 
    padding: "2vh 5vw", 
    border: "0em solid black", 
    borderRadius: "1em", 
    boxShadow: "0px 6px 10px #555", 
    overflow: "scroll", 
    backgroundColor: "rgba(128,128,150,0.4)"
}

const whichVersion = (version) => {
    if (version === "web") {
        return webVersion
    }
    else {
        return mobileVersion
    }
}

const BeatsBackground = (props) => (

    <div style={{marginTop: `${props.padding}vh`, position: "static", zIndex: "-1"}}>
        
        <div style={{
                    backgroundImage: "url(../static/tearfence.jpeg)", 
                    opacity: "0.85",
                    backgroundPosition: "center", 
                    height: `${props.height}vh`, 
                    zIndex: "-1"}} />

        <div style={{
                position: "absolute", 
                color: "black", 
                textAlign: "center", 
                height: `${props.height}vh`, 
                width: "100%",  
                bottom: "0", 
                left: "0", 
                right: "0", 
                backgroundColor: "rgba(255,255,255,0.5)", 
                zIndex: "1"}}>

            <div style={whichVersion(props.version)}>

                <BeatContent playSong={props.playSong} addToCart={props.addToCart} />

            </div>

        </div>
        
    </div>

)

export default BeatsBackground;