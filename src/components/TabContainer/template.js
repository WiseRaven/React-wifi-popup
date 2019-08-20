import React from 'react';
import { styles } from './styles.js';
import injectSheet from 'react-jss';

import LanguageContainer from '../../containers/LanguageChange';
import TabForm from '../TabForm';

const TabContainerTemplate = (props) => {
    const { classes } = props;
    return (
        <article className={ classes.grey }>
            <LanguageContainer { ...props } />
            <TabForm { ...props } />
        </article>
    );
};

export default injectSheet(styles)(TabContainerTemplate);
