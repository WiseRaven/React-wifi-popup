export const styles = {
    inputs: {
        'margin-top': 40,
        'display': 'block',
        '& input': {
            'font-size': 18,
            'font-family': 'Littera Text',
            'background': '#fff',
            'width': '29%',
            'border': '1px solid #b7b7b7',
            'border-radius': 5,
            'padding': 8,
            'outline': 'none',
            'display': 'inline-block',
            'vertical-align': 'middle',
            'margin-right': "6.5%"
        }
    },
    
    '@media (max-width: 768px)': {
        inputs: {
            'margin-top': 20,
            'display': 'block',
            'background': '#fff',
            'padding': '10px 20px',
            'box-shadow': '0px 0px 13px 0px rgba(236,236,236,1)',
            'border-radius': 5,
            '& input': {
                'margin': '10px 0',
                'width': '100%',
            }
        },
        flat: {
            'margin-bottom': '20px !important',
        }
    },
}