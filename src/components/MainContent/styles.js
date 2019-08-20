export const styles = {
    section: {
        'position': 'fixed',
        'left': '50%',
        'top': '50%',
        'min-width': '90%',
        'transform': 'translate(-50%, -50%)',
    },
    '@media (max-width: 768px)': {
        section: {
            'position': 'static',
            'width': '100%',
            'transform': 'translate(0, 0)',
        }
    }
}