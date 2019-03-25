import {connect} from 'react-redux';
import {
  removeFromCart, 
  purchaseCart
} from '../reduxCategories/cart/cartActions';

import keys from '../config/keys';

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducers.cart, 
    totalPrice: state.cartReducers.totalPrice, 
    loading: state.cartReducers.loading, 
    success: state.cartReducers.success
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    _purchaseCart: (token) => dispatch(purchaseCart(token)), 
    _removeItem: (index) => dispatch(removeFromCart(index))
  }
}

class Cart extends React.Component { 
  
  constructor(props) {
    super(props);
    this.state = {
        success: false
    };

    this.onStripeUpdate = this.onStripeUpdate.bind(this);
        
    this.loadStripe = this.loadStripe.bind(this);
  }


  loadStripe(onload) {
      if(! window.StripeCheckout) {
          const script = document.createElement('script');
          script.onload = function () {
              console.info("Stripe script loaded");
              onload();
          };
          script.src = 'https://checkout.stripe.com/checkout.js';
          document.head.appendChild(script);
      } else {
          onload();
      }
  }

  componentDidMount() {

      this.loadStripe(() => {
          this.stripeHandler = window.StripeCheckout.configure({
              key: keys.public,
              image: '../static/marketplace.png',
              locale: 'auto',
              token: (token) => (this.props._purchaseCart(token))
          });
      });
  }

  componentWillUnmount() {
      if(this.stripeHandler) {
          this.stripeHandler.close();
          this.setState({
            success: true
          })
      }
  }


  onStripeUpdate(e) {
      this.stripeHandler.open({
          name: 'Swaghetti',
          description: 'Beats',
          panelLabel: 'Pay Now',
          allowRememberMe: false,
      });
      e.preventDefault();
  }

  
  render(){
    
    return (

  <React.Fragment>


      <h2 style={{textAlign: "center", height: "5vh"}}>Cart</h2>

      <div style={{height: "35vh", width: `${this.props.width-10}vw`, overflow: "scroll"}}>
      
          {this.props.cart.map((item, index) => {
            return(
              
                <div key={index} style={{display: "block", width: "100%", height: "3vh", marginBottom: "4.5vh"}}>
                  <div style={{display: "block"}}>
                    
                    <span style={{float: "left"}}>
                      <h3>
                        {item.song.title}
                      </h3>
                    </span>
                    
                    <span 
                        onClick={() => {this.props._removeItem(index)}} 
                        style={{
                            float: "right", 
                            height: "100%", 
                            width: `${this.props.width/20}vw`, 
                            marginLeft: `${10-(this.props.width/20)}vw`, 
                            border: ".3vh solid rgba(204, 78, 0, 0.5)", 
                            cursor: "pointer", 
                            backgroundColor: "rgba(255,180,135,0.5)", 
                            color: "rgba(204, 78, 0, 0.5)"}}>
                      X
                    </span>

                    <span style={{float: "right"}}>
                        <h3>
                          {item.type.price}.00
                        </h3>
                    </span>
                    
                  </div>

                </div>
              
            )
          })}

      </div>

      <div style={{width: `${this.props.width-10}`, paddingRight: "10vw", height: "5vh", display: "block", borderTop: ".2vh solid black"}}>
      
          <span style={{float: "left"}}>
            <h3>Total:</h3>
          </span>

          <span style={{float: "right"}}>
            <h3>
              {`${this.props.totalPrice}.00`}
            </h3>
          </span>
      
      </div>

      <div style={{width: `${this.props.width-10}`, height: "10vh", textAlign: "center"}}>
          
      
      
      <button 
          onClick={this.onStripeUpdate}
          style={{
            height: "5vh", 
            width: "30vw", 
            marginTop: "5vh", 
            color: "#004", 
            backgroundColor: "rgba(193,225,238,.8)", 
            border: ".3vh solid rgb(49, 143, 180)"}}>
        
        <h3>Pay ${this.props.totalPrice}.00</h3>
      
      </button>
      
      

      </div>

  </React.Fragment>

)
}
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);