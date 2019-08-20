export const styles = {
    btn_block: {
        'margin-top': 45,
        'text-align': 'center',
    },
    btn: {
        'display': 'inline-block',
        'font-size': 16,
        'color': '#fff',
        'background': '#d44b14',
        'padding': '15px 60px',
        'border-radius': 5,
        'border': 'none',
        'text-decoration': 'none',
        'outline': 'none',
        'cursor': 'pointer',
    },
    btn__disable: {
        'pointer-events': 'none',
        'opacity': '0.5',
    },
    '@media (max-width: 768px)': {
        btn_block: {
            'margin-top': 20,
        },
        btn: {
            'font-size': 18,
            'padding': '10px 20px',
            'width': '90%',
        },
    },
    '@media (max-width: 500px)': {
        btn: {
            'font-size': 13,
        },
    }
}