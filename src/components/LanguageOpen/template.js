import React from 'react';
import { styles } from './styles.js';
import injectSheet from 'react-jss';

const LanguageOpenTemplate = (props) => {
    const { classes, i18n } = props;
    
    return (
        <div 
            className={ !props.opened ? classes.languagepicker : [classes.languagepicker, classes.languagepicker__visible].join(' ') }
        >
            <div className={classes.rectangle}></div>
            <ul className={classes.languagepicker_ul}>
                <li onClick={() => { i18n.changeLanguage('ru'); props.doClose(); }}><a onClick={(e) => props.languageSelect([e.currentTarget.dataset.lang, e.currentTarget.firstElementChild.src])} href="#/" data-lang="RU" className={classes.languagepicker_item}><img className={classes.languagepicker_item_img} src="img/flag-russ.png" alt="" />Русский</a></li>
                <li onClick={() => { i18n.changeLanguage('en'); props.doClose(); }}><a onClick={(e) => props.languageSelect([e.currentTarget.dataset.lang, e.currentTarget.firstElementChild.src])} href="#/" data-lang="EN" className={classes.languagepicker_item}><img className={classes.languagepicker_item_img} src="img/flag-2.png" alt="" />English</a></li>
                <li onClick={() => { i18n.changeLanguage('de'); props.doClose(); }}><a onClick={(e) => props.languageSelect([e.currentTarget.dataset.lang, e.currentTarget.firstElementChild.src])} href="#/" data-lang="DE" className={classes.languagepicker_item}><img className={classes.languagepicker_item_img} src="img/flag-3.png" alt="" />Deutsch</a></li>
                <li onClick={() => { i18n.changeLanguage('cn'); props.doClose(); }}><a onClick={(e) => props.languageSelect([e.currentTarget.dataset.lang, e.currentTarget.firstElementChild.src])} href="#/" data-lang="CN" className={classes.languagepicker_item}><img className={classes.languagepicker_item_img} src="img/flag-4.png" alt="" />中文</a></li>
            </ul>  
        </div>
    );
};

export default injectSheet(styles)(LanguageOpenTemplate);
