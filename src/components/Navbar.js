import React, {Component} from 'react';
import {ThemeContext} from '../context/ThemeContext'

class Navbar extends Component {

    static contextType = ThemeContext;

    render() { 
        const {isLightTheme, light, dark} = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <nav style={{background: theme.background, color: theme.syntax}}>
                <h1>Context App</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
          );
    }
}
 
export default Navbar;



//THIS METHOD FOR CONTEXT TREATS isLightTheme AS A PROP, SO ONLY READING (NO MODIFY FROM GOOGLE CONSOLE)
//THE OTHER ONE, static contextType, ALLOWS MODIFICATIONS OF THE isLightTheme

// class Navbar extends Component {

//     render() { 
//         return (
//             <ThemeContext.Consumer>{(context) => {
//                 const {isLightTheme, light, dark} = context;
//                 const theme = isLightTheme ? light : dark;
//                 return(
//                     <nav style={{background: theme.background, color: theme.syntax}}>
//                         <h1>Context App</h1>
//                         <ul>
//                             <li>Home</li>
//                             <li>About</li>
//                             <li>Contact</li>
//                         </ul>
//                     </nav>
//                 )
//             }}</ThemeContext.Consumer>
//           );
//     }
// }
 
// export default Navbar;