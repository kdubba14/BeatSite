import {connect} from 'react-redux';
import {
  removeFromCart, 
  purchaseCart
} from '../reduxCategories/cart/cartActions';
import {successPopup, closePopup} from '../reduxCategories/popups/popupActions';

import keys from '../config/keys';


const mapStateToProps = (state) => {
  return {
    cart: state.cartReducers.cart, 
    totalPrice: state.cartReducers.totalPrice, 
    loading: state.cartReducers.loading, 
    popupType: state.popupReducers.popupType, 
    pop: state.popupReducers.pop, 
    success: state.cartReducers.success
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    _purchaseCart: (token) => dispatch(purchaseCart(token)), 
    _removeItem: (index) => dispatch(removeFromCart(index)), 
    _successPopup: () => dispatch(successPopup())
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


      <h2 id="cart-content-header">Cart</h2>

      <div id="cart-content-list">
      
          {this.props.cart.map((item, index) => {
            return(
              
              <div key={index} className="cart-content-list-item">
                <div className="cart-content-list-grid">
                  
                  <span style={{gridArea: "title", borderBottom: ".01em solid #eee"}}>
                    <h3>
                      {item.song.title}
                    </h3>
                  </span>

                  <span style={{gridArea: "price"}}>
                      <h3>
                        {item.type.price}.00
                      </h3>
                  </span>
                  
                  <span 
                      onClick={() => {this.props._removeItem(index)}} 
                      className="cart-content-item-remove">
                    <span style={{margin: "auto"}}>X</span>
                  </span>
                </div>
              </div>
            )
          })}
      </div>

      <div id="cart-content-totals">
        <span>
          <h3>Total:</h3>
        </span>
        <span>
          <h3>
            {`$${this.props.totalPrice}.00`}
          </h3>
        </span>
      </div>

      <div id="cart-button-area" style={{width: `${this.props.width-10}`, height: "10vh", textAlign: "center"}}>
        <button onClick={this.onStripeUpdate} id="cart-buy-button">
          <h3>Pay ${this.props.totalPrice}.00</h3>
        </button>
      </div>

  </React.Fragment>

)
}
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);