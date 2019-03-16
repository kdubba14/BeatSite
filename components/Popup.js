import { Dimmer } from 'semantic-ui-react';
import Lease from './Lease';
import Exclusive from './Exclusive';
import Cart from './Cart';
import AddToCart from './AddToCart';
import Success from './Success'


const popupType = (props) => {

  const normalScrollStyle = {
    color: "black", 
    backgroundColor: "white", 
    height: "70vh", 
    width: `${props.width}vw`, 
    borderRadius: ".2em", 
    margin: `15vh ${(100-props.width)/2}vw`, 
    padding: "5vh 5vw", 
    overflow: "scroll"
  }

  const cartScrollStyle = {
    color: "black", 
    backgroundColor: "white", 
    height: "70vh", 
    width: `${props.width}vw`, 
    borderRadius: ".2em", 
    margin: `15vh ${(100-props.width)/2}vw`,  
    padding: "5vh 5vw"
  } 
    
    if (props.type === "lease") {
      return (
        <div style={normalScrollStyle}>
          <Lease date={props.date} />
        </div>
      )
    }
    if (props.type === "exclusive") {
      return (
        <div style={normalScrollStyle}>
          <Exclusive date={props.date} />
        </div>
      )
    }
    if (props.type === "cart") {
      return (
        <div style={cartScrollStyle}>
          <Cart cart={props.cart} totalPrice={props.totalPrice} removeItem={props.removeItem} width={props.width} purchase={props.purchase} success={props.success} />
        </div>
      )
    }
    if (props.type === "addToCart") {
      return (
        <div style={normalScrollStyle}>
          <AddToCart adding={props.adding} select={props.select} choose={props.choose} song={props.song} width={props.width} />
        </div>
      )
    }
    if (props.type === "success") {
      return (
        <Success />
      )
    }

}

const Popup = (props) => (

  <Dimmer active={props.pop} page>
      <div className="close" onClick={props.hidePopup} >
      
      
          {popupType(props)}
      
      
      </div>
  </Dimmer>

)

export default Popup;