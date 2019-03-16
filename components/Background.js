

const Background = (props) => (

  <div style={{marginTop: `${100-Number(props.height)}vh`, position: "static", zIndex: "-1"}}>

      <div style={{
          position: "relative", 
          backgroundImage: "url(../static/tearfence.jpeg)", 
          opacity: "0.85",
          backgroundPosition: "center", 
          height: `${props.height}vh`, 
          zIndex: "-1"}} />

      <div style={{
          position: "absolute", 
          zIndex: "1", 
          color: "black", 
          textAlign: "center", 
          height: `${props.height}vh`, 
          width: "100%",  
          bottom: "0", 
          left: "0", 
          right: "0", 
          backgroundColor: "rgba(255,255,255,0.45)" }}/>

                            

  </div>

)

export default Background;