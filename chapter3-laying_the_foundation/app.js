/**
 * Laying the Foundation..
 */

/**
 * Polyfill -> it is a code which is replaced to older code from newer to older so that older browser can also understand.
 *             It is done by babel... 
 * 
 */

import Header from "./components/header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import ReactDOM  from "react-dom/client";


const Home = () =>{
    return <>
       <Header/>
       <Body/>
       <Footer/>
    </>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home/>);