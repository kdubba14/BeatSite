import { Container, Card, Divider } from 'semantic-ui-react';

import EachLicense from './EachLicense';



const plus = (license) => {
  if (license) {
    return (
      <React.Fragment>
        <Card.Description style={{marginTop: "0vh"}}>
          &
        </Card.Description>
        <Card.Meta style={{marginBottom: "0vh"}}>
          {license}
        </Card.Meta>
      </React.Fragment>
    )
  }
}

const licenseType = (props, type) => {

    if (type === "exclusive") {
      return (
        <button name="exclusive" onClick={props.exclusivePopup}  className="licenses-card-button">  
            <strong>Read Full License</strong>
        </button>
      )
    }
    else {
      return (
        <button name="lease" onClick={props.leasePopup} 
          className="licenses-card-button"> 
            <strong>Read Full License</strong>
        </button>
      )
    }

}

const Licenses = (props) => (

  <div className="licenses" >
    
      <div className="licenses-container">
          <Card.Group centered stackable itemsPerRow="3" className="licenses-card-group" >
              
            {EachLicense.map((license) => {
              return (
                <div key={license.key} className="licenses-card-box">
                  <Card raised centered className="licenses-card" >
                      <Card.Content>
                          
                          <Card.Header>
                            {license.name}
                          </Card.Header>
                          
                          <Divider hidden />
                          
                          <Card.Header className="licenses-card-price">
                            {license.price}
                          </Card.Header>
                          
                          <Divider hidden />
                          
                          <Card.Description>
                              <strong>
                                Per Beat
                              </strong>
                          </Card.Description>
                          
                          <br />
                          
                          <Card.Meta>
                            {license.desc}
                          </Card.Meta>
                          {plus(license.plus)}
                      
                      </Card.Content>
                      <Divider hidden />
                      
                      <Card.Content style={{height: "25%", display: "flex"}} >
                        {licenseType(props, license.type)}
                      </Card.Content>
                  </Card>
                </div>
              )
            })}   
          </Card.Group>
      </div>
      
  </div>


)

export default Licenses;