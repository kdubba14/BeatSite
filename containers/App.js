import {connect} from 'react-redux';
import {
  removeFromCart, 
  chooseLicense, 
  purchaseCart, 
  addToCart
} from '../reduxCategories/cart/cartActions';
import {
  leasePopup, 
  exclusivePopup, 
  cartPopup, 
  addToCartPopup, 
  successPopup, 
  closePopup} from '../reduxCategories/popups/popupActions';
import {playFeatured, playSelected} from '../reduxCategories/playSong/playSongActions';


import Layout from '../components/Layout';
import BeatsBackground from '../components/BeatsBackground';
import Popup from '../components/Popup';
import Licenses from '../components/Licenses';
import Featured from '../components/Featured';


const mapStateToProps = (state) => {
  
  return {
    cart: state.cartReducers.cart, 
    
    totalPrice: state.cartReducers.totalPrice, 
    
    loading: state.cartReducers.loading, 
    
    success: state.cartReducers.success, 
    
    code: state.playSongReducers.code,
    
    color: state.playSongReducers.color, 
    
    autoplay: state.playSongReducers.autoplay,
    
    featuredBeat: state.playSongReducers.featuredBeat, 
    
    pop: state.popupReducers.pop, 
    
    popupType: state.popupReducers.popupType, 
    
    song: state.cartReducers.song, 
    
    select: state.cartReducers.select
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    _addToCart: (song, type) => dispatch(addToCart(song, type)), 
    
    _removeItem: (index) => dispatch(removeFromCart(index)), 
    
    _purchase: () => dispatch(purchaseCart()), 
    
    _playFeatured: () => dispatch(playFeatured()), 
    
    _handlePlaySong: (song) => dispatch(playSelected(song)), 
    
    _leasePopup: () => dispatch(leasePopup()), 
    
    _exclusivePopup: () => dispatch(exclusivePopup()), 
    
    _cartPopup: () => dispatch(cartPopup()), 
    
    _addToCartPopup: () => dispatch(addToCartPopup()), 
    
    _chooseLicense: (key) => dispatch(chooseLicense(key)), 
    
    _successPopup: () => dispatch(successPopup()), 
    
    _closePopup: (e) => dispatch(closePopup(e))
  }
}


class App extends React.Component {
    constructor(props){
        super(props);

        this.state={
          view: "home" 
        }
    }
    

    _beatsView = () => {
        this.setState({
            view: "beats"
        })
    }

    _homeView = () => {
        this.setState({
            view: "home"
        })
    }

    
    render(){

        const playSong = () => {
            if (this.props.autoplay === "true") {
                return (
                    <div style={{height: "15vh", width: "100%", position: "fixed", bottom: "0vh", zIndex: "3"}}>
                    
                      <iframe width="100%" height="100%" scrolling="no" frameborder="no" allow="autoplay" src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${this.props.code}&color=${this.props.color}&auto_play=${this.props.autoplay}&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false`}></iframe>

                    </div>
                )
            }
            else {
                return
            }
        }

        const showView = (height) => {
            if (this.state.view === "beats") {
                return(
                    <BeatsBackground 
                      id="beats" 
                      height={height} 
                      padding={100-height} 
                      state={this.state} 
                      playSong={this.props._handlePlaySong} 
                      version="mobile" 
                      addToCart={this.props._addToCart} 
                    /> 
                )
            }else{
                return(
                    <React.Fragment>
                        
                        <Featured 
                          id="featured" 
                          playFeatured={this.props._playFeatured} 
                          beatsView={this._beatsView} 
                          addToCart={this.props._addToCart} 
                          addToCartPopup={this.props._addToCartPopup} 
                          song={this.props.song} 
                          height={height} 
                          padding={100-height} 
                        />
                        
                    </React.Fragment>
                )
            }
        }
        
        return (

            
            <Layout 
              beatsView={this._beatsView} 
              homeView={this._homeView} 
              cart={this.props.cart} 
              showCart={this.props._showCart} 
              cartPopup={this.props._cartPopup}>

                <div id="full" style={{position: "relative", zIndex: "1"}}> 
                                
                    <Popup 
                        pop={this.props.pop} 
                        popupType={this.props.popupType} 
                        closePopup={this.props._closePopup}
                        leasePopup={this.props._leasePopup}
                        exclusivePopup={this.props._exclusivePopup}
                        cartPopup={this.props._cartPopup}
                        date={Date()} 
                        adding={this.props._addToCart} 
                        select={this.props.select} 
                        choose={this.props._chooseLicense} 
                        song={this.props.song} 
                        cart={this.props.cart} 
                        totalPrice={this.props._totalPrice} 
                        removeItem={this.props._removeItem} 
                        width={60} 
                        purchase={this.props._purchase} 
                        success={this._success}/>   
                    
                    {showView(85)}
                    
                    <Licenses 
                        license="web-licenses"
                            leasePopup={this.props._leasePopup} 
                            exclusivePopup={this.props._exclusivePopup} 
                            row="3" 
                            width="0"  
                            topmarg="22.5vh" />

                    <Licenses 
                        license="mobile-licenses"
                            leasePopup={this.props._leasePopup} 
                            exclusivePopup={this.props._exclusivePopup} 
                            row="1" 
                            width="0 10vw" 
                            topmarg="5vh" /> 
                        
                </div>

                {playSong()}
                
            </Layout>
        
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);