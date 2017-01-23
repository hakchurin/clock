import React from 'react';
import ReactDOM from 'react-dom';
import {router, Route, hashHistory, Link} from 'react-router';
import ClockHome from './home';



const Nav =React.createClass({
    render: function(){
        return (
          <nav className = 'nav' >
            <ul>
              <li>
                <Link to = "/home"> Go to  </Link>
                </li>
              </ul>
          </nav>
        )
    }
});

export default Nav;
