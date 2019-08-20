import React from 'react';
import { styles } from './styles.js';
import injectSheet from 'react-jss';

const MainTitleTemplate = (props) => {
    const { classes } = props;
    return (
        <article className={classes.mobile__bg}>
            <h1>
                { props.t('welcome.title') }
                <span className={classes.only__desctop}>
                    { props.t('welcome.title-span') }
                </span>
            </h1>
        </article>
        
    );
};

export default injectSheet(styles)(MainTitleTemplate);
