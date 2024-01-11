import React from "react";
import ReactDOM from "react-dom/client";
import header from "./index";

/**
 * Features of parcel.
 * 
 * Parcel creates a server for us.. 
 * 
 * 1. HMR -> (Hot module replacement)
 * 2. File watcher algorithm (c++)
 * 3. Bundling
 * 4. Minify
 * 5. Cleaning our code
 * 6. Dev abd production build
 * 7. super fast build algorithm
 * 8. Super fast build algorithm
 * 9. Image optimization
 * 10. Caching while dev
 * 11. Does Compression
 * 12. Compatible to older version of browser.
 * 13. HTTPS functionality on dev build. (npx parcel index.html --https)
 * 14. It manages port numbers..
 * 15. It uses consistent Hashing algorithm..
 * 16. Parcel is a zero config bundler..
 * 17. Tree shaking :- removing unwanted code. the function which are not used in the code
 *                     are removed automatically by parcel.. which helps in optimisation and makes app faster.
 * create react app uses webpack bundler along with babel ... 
 * 
 * Any thing that can be generated on the server must be put in gitignore 
 * Transitive Dependencies :- React have some dependencies but these dependencies can also have more dependencies
 *                            and those dependencies may have other dependecies and so on these dependencies is known as 
 *                            Transitive dependencies..
 */
const heading1 = React.createElement(
    "h3",
    {
        id:"adi101",
        style:{
            color: "#f00"
        }
    },
    "Hello Aditya"
);

const heading2 = React.createElement(
    "h1",
    {
        id:"adi102",
        style:{
            color:"yellowgreen"
        }
    },
    "Parcel is a Bundler"
);

const component = React.createElement(
    "h1",
    {},
    [heading1,heading2]
);

const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(component);