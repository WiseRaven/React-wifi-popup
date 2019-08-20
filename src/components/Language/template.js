import React from 'react';
import { styles } from './styles.js';
import injectSheet from 'react-jss';

import LanguageOpenContainer from '../../containers/LanguageOpenChange';

class LanguageTemplate extends React.Component {
    state = {
        opened: false, 
    }

    timerEvent = () => {
        this.timerEvent.prototype.timer = setTimeout(() => {
            this.setState({ opened: false })
        }, 700);
    }
    selectLanguage() {
        this.setState({ opened: false });
    }
    handleOpenEvent = () => { 
        clearTimeout(this.timerEvent.prototype.timer);
        this.setState({ opened: true })
    }
    handleCloseEvent = () => {
        this.timerEvent()
    }

    render() {
        const { classes, langImg, langText } = this.props;
        const { opened } = this.state;
        return (
            <div className={ classes.flag } onMouseEnter={ this.handleOpenEvent } onMouseLeave={ this.handleCloseEvent } >
                <div className={classes.first__flag}>
                    <img src={
                        langImg != null ? langImg : 'img/flag-russ.png'
                    } alt="" />
                    <span className={classes.first__flag_text}>{
                        langText != null ? langText : 'RU'
                    }</span>
                </div>
                <LanguageOpenContainer { ...this.props } opened = { opened } doClose={ this.selectLanguage.bind(this) } />  
            </div>
        )
    }
};

export default injectSheet(styles)(LanguageTemplate);
