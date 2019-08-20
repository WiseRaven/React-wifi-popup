export const styles = {
    flag: {
        'position': 'absolute',
        'right': 20,
        'transition': 'display',
        'z-index': '5',
    },
    first__flag: {
        'display': 'block',
        '& *': {
            'display': 'inline-block',
            'vertical-align': 'middle',
        }
    },
    first__flag_text: {
        'color': '#d44b14',
        'font-size': 16,
        'font-family': 'Littera Text',
        'margin-left': 8,
        'text-transform': 'uppercase'
    },
    '@media (max-width: 768px)': {
        first__flag_text: {
            'font-size': 28,
        },
    }
}