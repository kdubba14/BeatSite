import { Divider, Button, Icon } from 'semantic-ui-react';


const Featured = (props) => (


    <div id="featured">

        <div style={{position: "relative", zIndex: "7"}}>
        
            <h1 style={{fontSize: "3em", marginTop: "10vh"}}>
                Featured
            </h1>

            <a onClick={() => props.playFeatured()}
                style={{color: "#000", cursor: "pointer"}}>
                <Icon name="play circle" size="massive" />
            </a>

            <h2>
                {props.song.title} | 135 BPM | 
                <a  onClick={() => (props.addToCartPopup(props.song))} style={{cursor: "pointer", color: "black"}} >  
                    <strong  style={{fontColor: "black", fontSize: "1.7rem",  textDecoration: "underline"}}>Add To Cart</strong>
                </a>  
            </h2>

            <Divider hidden padded="true" />

            <a onClick={props.beatsView} style={{cursor: "pointer"}}>
                <Button color="black" size="large" >
                    Browse all tracks
                </Button>
            </a>
        </div>
        

    </div>


)


export default Featured;