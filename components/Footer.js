
import {Image, Form, Container, Icon, Responsive, Message} from 'semantic-ui-react';
import axios from 'axios';



class Footer extends React.Component { 
    
    constructor(props){
        super(props);
        this.state={
            name: "", 
            email: "", 
            subject: "", 
            message: "", 
            messageSent: false
        }
    }

    
    
    _handleTyping = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    };

    _handleSubmit = (e) => {
        e.preventDefault()

        const {name, email, subject, message} = this.state;

        axios.post('/api/mailer', {
            name, 
            email, 
            subject, 
            message
        })
        

        this.setState({
            messageSent: true
        })
        
    };


    render() {
    

        const messageSuccess = (sent) => {
            if (sent){
                return(
                    <Message success floating style={{padding: "17.5vh 0"}}>
                        <Message.Header>
                            <span style={{fontSize: "2em"}}>
                                Message Sent!
                            </span>
                        </Message.Header>
                    </Message>
                )
            }
            else{
                return(
                    <Form >
                            
                            <Form.Group widths="equal" >
                                
                                <Form.Input name="name" onChange={this._handleTyping} fluid placeholder='Name' />
                                
                                <Form.Input name="email" onChange={this._handleTyping} fluid placeholder='Email' />
                            
                            </Form.Group>
                            
                            <Form.Input name="subject" onChange={this._handleTyping} fluid placeholder="Subject" />
                            
                            <Form.TextArea name="message" onChange={this._handleTyping} placeholder="Message" />
                            
                            <Form.Button color="black" type="submit" onClick={this._handleSubmit} >
                                Send Message
                            </Form.Button>
                        
                        </Form>
                )
            }
        }


    return (
    <React.Fragment>
        
        <Responsive as="footer" minWidth={767}

             style={{
                height: "85vh", 
                width: "100%", 
                textAlign: "center",  
                padding: "0", 
                margin: "0", 
                border: "0", 
                position: "static", 
                top: "185vh"}}>

                <div style={{width: "100%", height: "100%"}}>

                <Image src="../static/black-grass-footer.png" 
                        style={{height: "85vh", width: "100%"}} />

                <Container fluid style={{
                                    position: "relative", 
                                    bottom: "85vh", 
                                    left: "0vw", 
                                    width: "88vw"}}>
                    
                    <h1>Contact</h1>
                    
                    {messageSuccess(this.state.messageSent)}
                
                </Container>

                <h3 style={{
                            position: "relative", 
                            textAlign: "center", 
                            width: "100vw", 
                            left: "0vw", 
                            bottom: "70vh", 
                            color: "rgba(255,180,135,0.8)"}}>
                    
                    swagmadeit@gmail.com  
                    
                    <span style={{padding: "0 1em"}}> | </span>  
                    
                    <a href="https://www.instagram.com" style={{color: "rgba(255,180,135,.8)"}}>
                        
                        <Icon name="instagram" size="large" />
                    
                    </a>
                
                </h3>
                
                <p style={{
                            position: "relative", 
                            textAlign: "center", 
                            width: "100vw", 
                            paddingTop: "1vh", 
                            left: "0vw", 
                            bottom: "70vh", 
                            fontWeight: "-1em", 
                            color: "rgba(193,225,238,.9)"}}>

                    Website fully coded by Kyle Williams | @u_ador
                
                </p>

                </div>

        </Responsive>

        <Responsive as="div" maxWidth={766}

             style={{
                height: "100vh", 
                width: "100vh", 
                textAlign: "center",   
                padding: "0", 
                margin: "0", 
                border: "0", 
                position: "static"}}>

                
                <div style={{height: "100vh", width: "100vw", backgroundImage: "url('../static/black-grass-footer.png')", backgroundSize: "cover"}}>

                    <Container fluid textAlign="center" style={{
                                                                                                    position: "relative", 
                                                                                                    top: "0vh", 
                                                                                                    width: "80vw", 
                                                                                                    height: "100vh",  
                                                                                                    padding: "0 8vw"}}>
                        
                        <h1>Contact</h1>
                        
                    {messageSuccess(this.state.messageSent)}

                        <h3 style={{
                                position: "relative", 
                                textAlign: "center",  
                                left: "0vw", 
                                top: "12.5vh", 
                                color: "white"}}>
                            
                            swagmadeit@gmail.com  
                        
                        <span style={{
                                    padding: "0 1em"}}> | </span>  
                        
                        <a href="https://www.instagram.com/swaghetti/" 
                                style={{color: "white"}}>

                            <Icon name="instagram"          size="large"/> 

                        </a>
                    </h3>
                    
                    <p style={{
                                position: "relative", 
                                textAlign: "center",  
                                right: "0vw", 
                                top: "15vh", 
                                fontWeight: "-1em", 
                                paddingTop: "1vh",  
                                color: "gray"}}>
                                
                            Website fully coded by Kyle Williams | @u_ador
                    </p>
                    
                    </Container>

                    

                    

                </div>
                


        </Responsive>

    </React.Fragment>
)
}
}

export default Footer;