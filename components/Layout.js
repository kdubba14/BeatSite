import Footer from './Footer';
import Header from './Header';
import Head from 'next/head';



const Layout = (props) => (
    <div style={{position: "absolute", top: "0", height: "100%", width: "100%"}}>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charSet="utf-8" />
            <link rel="stylesheet" href="../static/swag.css" />
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"/>
            <title>Swaghetti Beats</title>
        </Head>
        
        <Header className="header" homeView={props.homeView} beatsView={props.beatsView} cart={props.cart} showCart={props.showCart} cartPopup={props.cartPopup} />
        
            {props.children}
        
        <Footer />
    </div>
)

export default Layout;