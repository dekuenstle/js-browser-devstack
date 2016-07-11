import ReactDOM from 'react-dom';
import React from 'react';

import hello from './hello.js';

class MyApp extends React.Component {
    render(){
        return (
            <div>Hello World!</div>
        );
    }

    static get greet(){
        return hello();
    }

    static addToDOM(elem){
        ReactDOM.render(React.createElement(this), elem);
    }
}

export default MyApp;
