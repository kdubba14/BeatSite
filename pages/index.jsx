import Layout from '../components/Layout';
import {Responsive} from 'semantic-ui-react';
import Background from '../components/Background';
import BeatsBackground from '../components/BeatsBackground';
import Popup from '../components/Popup';
import Licenses from '../components/Licenses';
import Featured from '../components/Featured';
import BeatList from '../components/BeatList';
import axios from 'axios';

const initialBeat = BeatList.filter((beat) => {
    return(
        beat.featured
    )
})

class index extends React.Component {
    
    state={
        code: initialBeat[0].code,
        color: initialBeat[0].color,  
        autoplay: "false", 
        pop: false, 
        popupType: "lease", 
        view: "home", 
        select: "wav", 
        song: initialBeat[0], 
        featuredBeat: initialBeat[0], 
        cart: []
    }

    _playFeatured = () => {
        this.setState({
            code: "568128120",
            color: "%2300aabb",
            autoplay: "true"
        })
    }

    _handlePlaySong = (song) => {
        this.setState({
            code: song.code,
            color: song.color,
            autoplay: "true"
        })
    }

    _showLeaseLicense = () => {
        this.setState({
            pop: true, 
            popupType: "lease"
        })
    }

    _showExclusiveLicense = () => {
        this.setState({
            pop: true, 
            popupType: "exclusive"
        })
    }

    _hidePopup = (e) => {
        if (e.target.className === "close"){
            this.setState({
                pop: false
            })
        }
        else {
            return;
        }
    }

    _addToCart = (song) => {
        const newState = {...this.state};
        newState.song = song;
        newState.pop = true;
        newState.popupType = "addToCart";
        this.setState(newState,() => console.log(JSON.stringify(this.state.cart)));
    }

    _adding = (song, type) => {
        const newState={...this.state};
        newState.cart=[...this.state.cart,{song,type}];
        newState.select="wav"
        
        this.setState(newState);

        setTimeout(this.setState({pop: false}),2000);

    }

    _showCart = () => {
        this.setState({
            pop: true, 
            popupType: "cart"
        })
    }

    _totalPrice = () => {
        let sum = 0;
        
        for(let i = 0;i < this.state.cart.length; i++){
          sum += this.state.cart[i].type.numPrice;
        }
      
        return sum;
    }
    
    _removeItem = (index) => {
        let newCart = [...this.state.cart];
        newCart.splice(index,1);
        this.setState({
            cart: newCart
        })
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

    _choose = (key) => {
        this.setState({
            select: key
        })
    }

    _purchase = () => {
        axios.post('http://localhost:7000/api/order', {
            title: this.state.cart[0].song.title,
            license: this.state.cart[0].type.name, 
            price: this.state.cart[0].type.price
        })
    }

    _success = () => {
        this.setState({
            pop: true, 
            popupType: "success", 
            view: "home", 
            cart: []
        })
    }
    
    
    render(){

        const playSong = () => {
            if (this.state.autoplay === "true") {
                return (
                    <div style={{height: "15vh", width: "100%", position: "fixed", bottom: "0vh", zIndex: "3"}}>
                    
                    <iframe width="100%" height="100%" scrolling="no" frameborder="no" allow="autoplay" src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${this.state.code}&color=${this.state.color}&auto_play=${this.state.autoplay}&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false`}></iframe>

                    </div>
                )
            }
            else {
                return
            }
        }

        const showView = (height) => {
            if (this.state.view === "home") {
                return(
                    <React.Fragment>
                        <Featured id="featured" playFeatured={this._playFeatured} beatsView={this._beatsView} addToCart={this._addToCart} song={this.state.featuredBeat} height={height} padding={100-height} />
                        
                    </React.Fragment>
                )
            }
            if (this.state.view === "beats") {
                return(
                    <BeatsBackground id="beats" height={height} padding={100-height} state={this.state} playSong={this._handlePlaySong} version="mobile" addToCart={this._addToCart} /> 
                )
            }
        }
        
        return (

            
            <Layout beatsView={this._beatsView} homeView={this._homeView} showCart={this._showCart}>

                <div id="full" style={{position: "relative", zIndex: "1"}}> 
                                
                    <Popup 
                        pop={this.state.pop} 
                        hidePopup={this._hidePopup} 
                        date={Date()} 
                        type={this.state.popupType} 
                        adding={this._adding} 
                        select={this.state.select} 
                        choose={this._choose} 
                        song={this.state.song} 
                        cart={this.state.cart} 
                        totalPrice={this._totalPrice} 
                        removeItem={this._removeItem} 
                        width={60} 
                        purchase={this._purchase} 
                        success={this._success}/>   
                    
                    {showView(85)}
                    
                    <Licenses 
                        license="web-licenses"
                            showLeaseLicense={this._showLeaseLicense} 
                            showExclusiveLicense={this._showExclusiveLicense} 
                            row="3" 
                            width="0"  
                            topmarg="22.5vh" />

                    <Licenses 
                        license="mobile-licenses"
                            showLeaseLicense={this._showLeaseLicense} 
                            showExclusiveLicense={this._showExclusiveLicense} 
                            row="1" 
                            width="0 10vw" 
                            topmarg="5vh" /> 
                        
                </div>

                

                
                {playSong()}
                    

                

            </Layout>
        
        )
    }
}

export default index;


/* 

<div style={{position: "static"}}>

                    <Popup 
                        pop={this.state.pop} 
                        hidePopup={this._hidePopup} 
                        date={Date()} 
                        type={this.state.popupType} 
                        adding={this._adding} 
                        select={this.state.select} 
                        choose={this._choose} 
                        song={this.state.song} 
                        cart={this.state.cart} 
                        totalPrice={this._totalPrice} 
                        removeItem={this._removeItem} 
                        width={80} 
                        purchase={this._purchase} 
                        success={this._success}/>

                    {showView(90)}
                    
                                 
                                        
                    <Licenses showLeaseLicense={this._showLeaseLicense} showExclusiveLicense={this._showExclusiveLicense} row="1" width="0 10vw" height="180vh" topmarg="5vh" />                           
                                    
                </div>

*/