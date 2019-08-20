export const styles = {
    security: {
        'margin-top': 35,
    },
    checkbox_label: {
        'font-size': 14,
        'font-family': 'Littera Text',
        'color': '#4d4d4d',
        'line-height': '1.4',
        'margin-left': 0,
    },
    checkbox_link: {
        'font-size': 14,
        'font-family': 'Littera Text',
        'color': '#d44b14',
        'vertical-align': 'super',
    },
    checkbox: {
        'opacity': '0',
        'z-index': '5',
        'display': 'none',
        '&:checked + span': {
            'background': `url(${process.env.PUBLIC_URL}/img/checked.svg) no-repeat`,
            'width': 20,
            'height': 20,
            'z-index': '3'
        }
    },
    new__checkbox: {
        'background': `url(${process.env.PUBLIC_URL}/img/check.svg) no-repeat`,
        'cursor': 'pointer',
        'width': 20,
        'height': 20,
        'display': 'inline-block',
    },
    mobile__text: {
        'font-size': 24,
        'display': 'none',
    },
    security__text: {
        'vertical-align': 'super',
        'margin-left': 5,
    },
    '@media (max-width: 768px)': {
        checkbox_label: {
            'font-size': 18,
            'margin': 0,
        },
        mobile__text: {
            'display': 'inline-block',
            'font-family': 'Littera Text',
            'color': 'rgb(77, 77, 77)',
            'margin-left': 10,
        },
        security__text: {
            'vertical-align': 'baseline',
            'margin-left': 0,
        },
        checkbox_link: {
            'font-size': 18,
            'vertical-align': 'baseline',
        },
        new__checkbox: {
            'vertical-align': 'sub',
        },
    },
    '@media (max-width: 500px)': {
        new__checkbox: {
            'vertical-align': 'middle',
        },
        mobile__text: {
            'font-size': 22,
            'width': 'calc(100% - 30px)',
            'vertical-align': 'middle',
        },
        security__text: {
            'margin-top': 10,
            'display': 'inline-block',
        },
    }
}
