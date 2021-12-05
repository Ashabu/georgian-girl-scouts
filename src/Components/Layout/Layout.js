import React from 'react';
import './layout.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = (props) => {
    return (
        <>
        <Header/>
        <div className = 'page-body'>
            {props.chilrden}
        </div>
        <Footer/>
        </>
    );
};

export default Layout;