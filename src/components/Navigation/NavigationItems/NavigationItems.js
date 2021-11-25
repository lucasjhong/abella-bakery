import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">HOME</NavigationItem>
        <NavigationItem link="/menu">MENU</NavigationItem>
        <NavigationItem link="/macarons">MACARONS</NavigationItem>
        <NavigationItem link="/about">ABOUT</NavigationItem>
    </ul>
);

export default NavigationItems;