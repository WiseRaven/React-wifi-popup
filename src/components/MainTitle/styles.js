export const styles = {
    only__desctop: {
        'font-size': 36,
        'font-family': 'Littera Text',
        'font-weight': '400',
        'color': 'rgb(255, 255, 255)',
        'line-height': '2',
        'text-align': 'center',
    },
    '@media (max-width: 900px)': {
        only__desctop: {
            'display': 'none',
        },
    },
    '@media (max-width: 768px)': {
        mobile__bg: {
            'background': `url(${process.env.PUBLIC_URL}/img/bg.jpg)no-repeat 0/cover`,
            'width': '100%',
            'padding': '80px 0',
        },
    }
}
