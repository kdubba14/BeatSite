import EachLicense from './EachLicense';


const and = (desc) => {
    if (desc) {
      return (
          <span  >and {desc}</span>
      )
    }
    else {
        return;
    }
}

const selectStyle = (select, key) => {
    if (select === key) {
        return (
            {
                borderTop: "0.1vh solid black", 
                borderBottom: "0.1vh solid black", 
                height: "10vh", 
                marginBottom: "2.5vh", 
                backgroundColor: "rgba(193,225,238,.8)", 
                cursor: "pointer"
            }
        );
    }
    else {
        return (
            {
                height: "10vh", 
                marginBottom: "2.5vh", 
                cursor: "pointer"
            }
        )
    }
}

const dotStyle = (select, key) => {

    if (select === key) {
        return (
            {
                height: "4vh", 
                width: "4vh", 
                backgroundColor: "#000", 
                borderRadius: "10em", 
                border: ".1vh solid black", 
                float: "left", 
                margin: "3vh 2.5vw 0 2.5vw"
            }
        )
    }
    else {
        return (
            {
                height: "4vh", 
                width: "4vh", 
                borderRadius: "10em", 
                border: ".1vh solid black", 
                float: "left", 
                margin: "3vh 2.5vw 0 2.5vw"
            }
        )
    }

}

const selectLicense = (key) => {
    if (key === "wav") {
        return EachLicense[0]
    }
    if (key === "track") {
        return EachLicense[1]
    }
    if (key === "exclusive") {
        return EachLicense[2]
    }
}

const AddToCart = (props) => (

    <React.Fragment>
  
        <div style={{textAlign: "center", height: "10vh", marginBottom: "2.5vh"}}>
            <h2 style={{padding: "0", height: "5vh", paddingTop: "2.5vh"}}>{props.song.title}</h2>
        </div>


        {EachLicense.map((license) => {

            return (
            <div key={license.key} onClick={() => {props.choose(license.selectKey)}} style={selectStyle(props.select, license.selectKey)} >
            
                <div style={dotStyle(props.select, license.selectKey)} />

                <div style={{width: `${props.width-40}vw`, height: "10vh", float: "left"}}>
                    <h4 style={{float: "left", textAlign: "left", display: "block", margin: "0", width: "100%", height: "3.5vh", marginTop: "2vh"}}>{license.name}</h4>

                    <h5 style={{float: "left", textAlign: "left", display: "block", margin: "0", width: "100%", height: "3vh", color: "#444"}}>-{license.desc} {and(license.plus)}-</h5>
                </div>

                <div style={{width: `${props.width/5}vw`, height: "5vh", marginTop: "2.5vh", float: "right", textAlign: "left"}}>
                    <h2>{license.price}</h2>
                </div>
            
            </div>
            )

        })} 

        
        <div 
            className="close" 
            onClick={() => {props.adding(props.song, selectLicense(props.select))}} 
            style={{textAlign: "center", 
                    backgroundColor: "rgba(255,180,135,0.5)", 
                    height: "10vh", 
                    width: `${props.width-10}`,   
                    cursor: "pointer"}} >
            
            <h2 style={{height: "5vh", paddingTop: "2.5vh"}} >Add To Cart</h2>
        
        </div>
        
        
  
    </React.Fragment>
  
  )
  
  export default AddToCart;



/*import {Input} from 'semantic-ui-react';

import {addToCart} from '../lib/moltin';

export default class AddToCart extends React.Component {
    state = {
        loading: false,
        quantity: 1
    }

    _handleChange = ({target: {value}}) => {
        this.setState({
            quantity: value
        })
    }

    _handleSubmit = async () => {
        const {productId} = this.props
        const {quantity} = this.state

        this.setState({
            loading: true
        })

        await addToCart(productId, quantity)

        this.setState({
            loading: false,
            quantity: 1
        })
    }

    render(){
        const {loading, quantity} = this.state

        return(
            <Input
                type='number' 
                placeholder='Quantity' 
                value={quantity} 
                onChange={e => this._handleChange(e)} 
                action={{
                    color: 'violet',
                    content: 'Add To Cart',
                    icon: 'plus cart',
                    onClick: this._handleSubmit,
                    loading,
                    disabled: loading
                }} 
            />
        )
    }
}*/