import React, { Component } from 'react';
import {ThemeContext} from '../context/ThemeContext'

class Bookslist extends Component {

    static contextType = ThemeContext;
    render() { 
        //this works too, but declaring is better
        // const theme = this.context.isLightTheme ? this.context.light : this.context.dark;
        const {isLightTheme, light, dark} = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div className="book-list" style={{background: theme.ui, color: theme.syntax}}>
                <ul>
                    <li style={{background: theme.background}}>Volare</li>
                    <li style={{background: theme.background}}>Se Telefonando</li>
                    <li style={{background: theme.background}}>Acido Acida</li>
                </ul>
            </div>
          );
    }
}
 
export default Bookslist;