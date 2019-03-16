import Link from 'next/link';
import {Item, Loader, Icon, Button, Message, Divider} from 'semantic-ui-react';


export default ({items, removeFromCart, loading, completed}) => {
    if (loading) return <Loader active inline='centered' />

    if (completed) {
        return (
            <React.Fragment>
                <Message success>
                    <Message.Header>Order Completed!</Message.Header>
                    <p>Thank you for the support!</p>
                </Message>

                <Divider hidden section/>

                <Message>
                    <Icon name="arrow alternate circle down" size="large"/>
                    <Message.Header>Dont Forget The Album!</Message.Header>
                    <a href="https://drive.google.com/drive/folders/1s7Vtf9sFVEvtdDrwkHBXE_utzuA336_C?usp=sharing">Click here to download Too Wan</a>
                </Message>
                
            </React.Fragment>
        )
    }
    
    if (items.length === 0) {
        return (
            <Message warning>
                <Message.Header>Your Cart Is Empty</Message.Header>
                <p>Add items to the cart before you checkout.</p>
            </Message>
        )
    }

    const mapCartItemsToItems = items => items.map(({id, product_id, name, quantity, meta}) => {
        const price = meta.display_price.with_tax.unit.formatted || null

        return{
            childKey: id,
            header: (
                <Link href={`/product?id=${product_id}`} passHref>
                    <Item.Header as='a'>{name}</Item.Header>
                </Link>
            ),
            meta: `${quantity}x ${price}`,
            extra: (
                <Button 
                    basic 
                    icon='remove' 
                    floated='right' 
                    onClick={() => removeFromCart(id)}
                />
            )
        }
    })

    return <Item.Group divided items={mapCartItemsToItems(items)} />
}