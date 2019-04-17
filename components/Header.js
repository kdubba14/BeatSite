
import { Container, Icon, Image} from 'semantic-ui-react';



const Header = (props) => (
    <React.Fragment>         
        {/* WEB HEADER */}        
        <div className="web-header" >
            <Container className="web-header-container">

                <a className="web-header-music" onClick={props.beatsView}>
                    <Icon   
                        fitted 
                        name="music" 
                        size="huge" 
                        className="web-header-music-icon" />
                </a>

                <a className="web-header-cart" onClick={props.cartPopup}>
                    <Icon 
                        fitted 
                        callName="cart"
                        name="cart" 
                        size="huge" 
                        className="web-header-cart-icon" />
                </a>

            </Container>
        </div>

        {/*the logo*/}
        <a className="web-header-logo" onClick={props.homeView}>   
            <Image 
                centered 
                src='../static/swagtemplogo.png' 
                size="medium" 
                style={{height: "100%"}} />
        </a>
        
        {/* MOBILE HEADER */}   

        <div className="mobile-header">
            <div className="mobile-header-container">              <a onClick={props.homeView} className="mobile-header-logo">
                        <Image  
                            centered 
                            src='../static/swagtemplogo.png' 
                            size="medium" 
                            style={{margin: "auto"}} />
                </a>
                
                <a onClick={props.beatsView} className="mobile-header-link">
                    
                        <Icon  
                            name="music" 
                            size="big" 
                            fitted 
                        />
                </a>
                
                <a onClick={props.cartPopup} className="mobile-header-link">
                    <Icon  
                        name="shopping cart" 
                        size="big" 
                        fitted 
                    />
                </a>
            </div>
        </div>        

    </React.Fragment>
)

export default Header;