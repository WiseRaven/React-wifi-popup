export const styles = {
    radio: {
        'font-size': 21,
        'font-family': 'Littera Text Book',
        'color': 'rgb(77, 77, 77)',
        'line-height': '1.167',
        'display': 'block',
        'align-items': 'center',
        'margin-bottom': 40,
        '& label': {
            'display': 'inline-block',
            'vertical-align': 'middle',
        },
        '& p': {
            'display': 'inline-block',
            'vertical-align': 'middle',
        },
        '& span': {
            'display': 'inline-block',
            'vertical-align': 'middle',
        },
        '& input': {
            'margin-left': 25,
            'opacity': '0',
            '&:checked + span': {
                'background': `url(${process.env.PUBLIC_URL}/img/r-checked.png) no-repeat`,
                'width': 17,
                'height': 17,
                'z-index': '3',
            }
        }
    },
    newradio: {
        'background': `url(${process.env.PUBLIC_URL}/img/r-check.png) no-repeat`,
        'cursor': 'pointer',
        'width': 17,
        'height': 17,
        'display': 'inline-block',
        'margin-right': 10,
    },
    '@media (max-width: 910px)': {
        radio: {
            'font-size': 17,
            'line-height': '1',
            '& label': {
                'display': 'block',
                'font-size': 18,
                'margin-left': -40,
                'margin-top': 10,
            },
            '& p': {
                'display': 'block',
            },
        },
    },
    '@media (max-width: 768px)': {
        radio: {
            'font-size': 18,
            'margin-bottom': 20,
        },
    }
}
