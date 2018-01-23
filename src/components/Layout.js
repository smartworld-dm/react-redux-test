import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Header from './Layout/Header';
import './Layout.css';

class Layout extends Component {
    render() {
        // static vars to illustrate what will need to be dynamic
        const clientSettings = {
            logoSrc: '/images/taco-cabana-logo.png',
            altTxt: 'Taco Cabana Print Order Management System'
        };

        return (
            <main role="main" class="main">
              <div class="left-content">
              </div>
              <div class="right-content">
                <div class="top-gap">
                </div>
                <div class="blueboard">
                  <div class="main-content">
                    <div class="header">
                    </div>
                    <div class="on-mc">
                      <div class="off-mc">
                      </div>
                      <div class="gradient-mc">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
        );
    }
}

injectTapEventPlugin();
export default Layout;
