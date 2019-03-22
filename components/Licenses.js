import { Container, Card, Divider, Button } from 'semantic-ui-react';

import EachLicense from './EachLicense';


const buttonStyle = {
  margin: "1.5em 0", 
  backgroundColor: "rgba(255,180,135,0.5) ",
  color: "black", 
  border: "none", 
  padding: "1.5vh 4vw", 
  borderRadius: ".3em"
}



const plus = (license) => {
  if (license) {
    return (
      <React.Fragment>
        <Card.Description style={{marginTop: "0vh"}}>&</Card.Description>
        <Card.Meta style={{marginBottom: "0vh"}}>{license}</Card.Meta>
      </React.Fragment>
    )
  }
}

const licenseType = (props, type) => {

    if (type === "exclusive") {
      return (
        <button onClick={props.showExclusiveLicense}  
                style={buttonStyle} >
            
            <strong>Read Full License</strong>
        
        </button>
      )
    }
    else {
      return (
        <button onClick={props.showLeaseLicense} 
                style={buttonStyle} >
            
            <strong>Read Full License</strong>
        
        </button>
      )
    }
    console.log(type);

}

const Licenses = (props) => (


  <div id={props.license} >
    
      <Container style={{padding: props.width}}>
          <Card.Group centered stackable itemsPerRow={props.row} style={{marginTop: props.topmarg}} >
              
            {EachLicense.map((license) => {

              return (
                <React.Fragment key={license.key}>
                <div>{license.divider}</div>
                <Card raised centered style={{height: "50vh", boxShadow: "0.5vw .5vw 1em -.5em #444"}} >
                    <Card.Content>
                        <Card.Header>{license.name}</Card.Header>
                        <Divider hidden />
                        <Card.Header style={{fontSize: "2.5em"}}>{license.price}</Card.Header>
                        <Divider hidden />
                        <Card.Description>
                            <strong>Per Beat</strong>
                        </Card.Description>
                        <br />
                        <Card.Meta >{license.desc}</Card.Meta>
                        {plus(license.plus)}
                    </Card.Content>
                    <Divider hidden />
                    <Card.Content style={{height: "25%"}} >
                        
                    {licenseType(props, license.type)}

                    </Card.Content>
                </Card>
                </React.Fragment>
              )

            })}  
              

              
              
          </Card.Group>
      </Container>
      
  </div>


)

export default Licenses;