//import StripeCheckout from 'react-stripe-checkout';
import {Button, Segment, Divider} from 'semantic-ui-react';
import { Message } from 'semantic-ui-react';

//const stripeKey = 'pk_live_maCG9f1VVsca4wKfOEIieLuq'

/*export default ({
    handleCheckout, 
    display_price: {with_tax: {amount, currency, formatted}}
}) => (
    
    
    <React.Fragment>
        <Divider />

        <Segment clearing size='large'>
            <strong>Sub Total:</strong> {formatted}
            <StripeCheckout 
                name="Divici Store" 
                amount={amount} 
                currency={currency} 
                stripeKey={stripeKey} 
                shippingAddress={false} 
                billingAddress={true} 
                zipCode={true} 
                token={handleCheckout} 
                reconfigureOnUpdate={false} 
                triggerEvent="onClick" 
            >
                <Button color='black' floated='right'>
                    Checkout
                </Button>
            </StripeCheckout>
        </Segment>
    </React.Fragment>*/

    /*<React.Fragment>
        <Divider />
        {console.log('summary')}
        <pre>{JSON.stringify(without_tax, '\t', 2)}</pre>
    </React.Fragment>*/
    
//)

//export default CartSummary;

const cartSummary = {
    padding: "0 5em 8em 5em", 
    border: ".1em solid rgba(193,225,238,1)", 
    textAlign: "center"
}

const itemsList = (items) => {
    if (items) {
        return (
            <ul>
                <li>Heres</li>
                <li>your</li>
                <li>list!</li>
            </ul>
        )
    }
    else { return }
}

export default () => (
    <div style={cartSummary}>
        <h2>Cart Summary</h2>
        {itemsList(true)}
        
    </div>
)