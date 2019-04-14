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
            {
                borderTop: "0.1vh solid black", 
                borderBottom: "0.1vh solid black", 
                height: "10vh", 
                marginBottom: "2.5vh", 
                backgroundColor: "rgba(193,225,238,.8)", 
                cursor: "pointer", 
                display: "grid", 
                gridTemplateColumns: "15% 55% 30%", 
                /*gridTemplateRows: "1fr 1fr", */
                gridTemplateAreas: '"dot license price" "dot offerings price"'
            }
        );
    }
    else {
        return (
            {
                height: "10vh", 
                marginBottom: "2.5vh", 
                cursor: "pointer", 
                display: "grid", 
                gridTemplateColumns: "15% 55% 30%", 
                /*gridTemplateRows: "1fr 1fr", */
                gridTemplateAreas: '"dot license price" "dot offerings price"'
            }
        )
    }
}

const dotStyle = (select, key) => {

    if (select === key) {
        return (
            {
                gridArea: "dot", 
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
                gridArea: "dot", 
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
            <div className="option" key={license.key} onClick={() => {props.choose(license.selectKey)}} style={selectStyle(props.select, license.selectKey)} >
            
                <div style={dotStyle(props.select, license.selectKey)} />

                <div style={{width: "100%", height: "10vh", float: "left"}}>
                    <h4 style={{gridArea: "license", textAlign: "left",  margin: "0", width: "100%", height: "3.5vh", marginTop: "2vh"}}>{license.name}</h4>

                    <h5 style={{gridArea: "offerings",  textAlign: "left", margin: "0", width: "100%", height: "3vh", color: "#444"}}>-{license.desc} {and(license.plus)}-</h5>
                </div>

                <div style={{gridArea: "price", width: `${props.width/5}vw`, height: "5vh", marginTop: "2.5vh", float: "right", textAlign: "left"}}>
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
