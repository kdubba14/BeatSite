
import { Container, Icon, Image} from 'semantic-ui-react';



const Header = (props) => (
    
    
    <React.Fragment>
                
                
        <div 
            className="web-header" 
            style={{
                position: "absolute", 
                backgroundColor: "rgba(193,225,238,.8)", 
                boxShadow: "0vw .5vw 2em", 
                width: "100vw", 
                height: "15vh", 
                top: "0vh", 
                zIndex: "3"
            }} >
        
            <Container 
                minWidth={767} 
                style={{width: "100vw", 
                        height: "15vh", 
                        padding: "0 10vw", 
                        textAlign: "center", 
                        position: "fixed", 
                        top: "0", 
                        bottom: "0", 
                        left: "0", 
                        right: "0", 
                        zIndex: "5"}}>

                <a 
                    className="link" 
                    minWidth={767} 
                    onClick={props.beatsView} 
                    style={{
                        display: "inline-block", 
                        float: "left", 
                        position: "relative", 
                        zIndex: "9", 
                        color: "#000", 
                        padding: "0", 
                        margin: "0", 
                        width: "10vw", 
                        height: "100%", 
                        textAlign: "center", 
                        border: ".2em solid rgba(250,250,255,0.0)", 
                        borderRadius: "12px", 
                        cursor: "pointer"}}>
                    <Icon   
                        fitted 
                        name="music" 
                        size="huge" 
                        style={{height: "100%", 
                                textAlign: "left", 
                                position: "relative", 
                                top: "2vh"}} />
                </a>
                <a  
                    className="link" 
                    minWidth={767} 
                    onClick={props.showPopup} 
                    style={{display: "inline-block", 
                        float: "right", 
                        position: "relative", 
                        zIndex: "9",  
                        color: "#000", 
                        padding: "0", 
                        margin: "0", 
                        width: "10vw", 
                        height: "100%", 
                        textAlign: "center", 
                        border: ".2em solid rgba(250,250,255,0.0)", 
                        borderRadius: "12px", 
                        cursor: "pointer"}}>
                    <Icon 
                        fitted 
                        callName="cart"
                        name="cart" 
                        size="huge" 
                        style={{height: "100%", 
                                textAlign: "right", 
                                position: "relative", 
                                top: "2vh"}} />
                </a>

            </Container>
        </div>

        {/*the logo*/}
        <a 
                    className="web-header"
                    onClick={props.homeView} 
                    style={{
                        width: "28vw", 
                        height: "16vh", 
                        textAlign: "center",  
                        position: "absolute", 
                        top: "0vh", 
                        left: "36vw", 
                        zIndex: "4", 
                        cursor: "pointer"}} 
                    onClick={props.homeView}>       
                    
                    <Image 
                        centered 
                        src='../static/swagtemplogo.png' 
                        size="medium" 
                        style={{
                            height: "100%"
                            }} />
            
                </a>
        
                

        <div 
            id="mobile-header" 
            style={{
                position: "absolute",
                top: "0",
                bottom: "0", 
                left: "0", 
                right: "0", 
                backgroundColor: "rgba(193,225,238,.8)", 
                boxShadow: "0vw .5vw 1em 0em black", 
                width: "100%", 
                height: "10vh", 
                zIndex: "9"}} >
        
            <Container  
                style={{padding: "0 5vw", 
                        height: "100%", 
                        width: "100%", 
                        textAlign: "center", 
                        position: "relative"}}>            
                
                <a onClick={props.homeView} style={{cursor: "pointer"}}>
                        <Image  
                            centered 
                            src='../static/swagtemplogo.png' 
                            size="medium" 
                            style={{
                                float: "left", 
                                height: "10vh", 
                                width: "36vw", 
                                bottom: "0vh"}} />
                </a>
                
                <a 
                    onClick={props.beatsView}  
                    style={{
                        color: "#000", 
                        height: "5vh", 
                        width: "5vw", 
                        cursor: "pointer"}}>
                    
                        <Icon  
                            name="music" 
                            size="big" 
                            fitted
                            style={{
                                float: "right", 
                                position: "relative", 
                                top: "2.5vh", 
                                right: "18vw"}} 
                        />
                </a>
                
                <a  onClick={props.cartPopup}  style={{color: "#000", cursor: "pointer"}}>
                    <Icon  
                        name="shopping cart" 
                        size="big" 
                        fitted
                        style={{
                            float: "right", 
                            position: "relative", 
                            top: "2.5vh", 
                            left: "2vw"}} 
                    />
                </a>
            </Container>
        
        </div>        

    </React.Fragment>
        
    
        
    
)



export default Header;