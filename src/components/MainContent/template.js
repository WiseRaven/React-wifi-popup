import React from 'react';
import { styles } from './styles.js';
import injectSheet from 'react-jss';

import MainTitle from '../MainTitle';
import TabContainer from '../TabContainer';

const MainContentTemplate = (props) => {
    const { classes } = props;
    return (
        <section className={classes.section}>
            <MainTitle { ...props } />
            <TabContainer { ...props } /> 
        </section>
    );
};

export default injectSheet(styles)(MainContentTemplate);
