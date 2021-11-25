import React from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import titleImage from '../../../image/title.png';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <img src={titleImage} alt='' height="50" style={{margin: 'auto', display: 'block'}}/>
        <NavigationItems />
    </header>
)

export default toolbar;