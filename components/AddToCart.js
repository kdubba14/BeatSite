import EachLicense from './EachLicense';


const and = (desc) => {
    if (desc) {
      return (
          <span >and {desc}</span>
      )
    }
    else {
        return;
    }
}

const selectStyle = (select, key) => {
    if (select === key) {
        return (
            "atc-option-select"
        );
    }else{
        return ""
    }
}

const dotStyle = (select, key) => {
    if (select === key) {
        return (
            "atc-option-dot-select"
        )
    }else{
        return ""
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
  
        <div id="atc-title-box">
            <h2 id="atc-title">
                {props.song.title}
            </h2>
        </div>


        {EachLicense.map((license) => {

            return (
            <div 
                className={`atc-option ${selectStyle(props.select, license.selectKey)}`} 
                key={license.key} 
                onClick={() => {props.choose(license.selectKey)}}>
            
                <div className={`atc-option-dot ${dotStyle(props.select, license.selectKey)}`} />

                <div className="atc-option-license-box">
                    <div className="atc-option-license-name">  
                        <h4>    
                        {license.name}
                        </h4>
                    </div>
                    <div className="atc-option-offerings">
                        <h5>
                            -{license.desc} {and(license.plus)}-
                        </h5>
                    </div>
                </div>

                <div className="atc-option-price">
                    <h2>{license.price}</h2>
                </div>
            
            </div>
            )

        })} 

        
        <div 
            className="close" 
            onClick={() => {props.adding(props.song, selectLicense(props.select), () => props.closePopup(props.cPopup))}} 
            style={{textAlign: "center", 
                    backgroundColor: "rgba(255,180,135,0.5)", 
                    height: "10vh", 
                    width: `${props.width-10}`,   
                    cursor: "pointer"}} >
            
            <h2 className="close" style={{height: "5vh", paddingTop: "2.5vh"}} >Add To Cart</h2>
        
        </div>
        
        
  
    </React.Fragment>
  
  )
  
  export default AddToCart;
