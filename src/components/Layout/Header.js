import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Header.css';

import TopBar from './Header/TopBar';
import ProductCategoryNav from './Header/ProductCategoryNav';

class Header extends Component {
    render() {
        const { logoSrc, altTxt } = this.props.clientSettings;
        const { loggedIn } = this.props.currentUser;

        return (
            <section className="header">
            </section>
        )

    }
}

export default connect((store) => {
    return {
        currentUser: store.currentUser
    };
})(Header);
