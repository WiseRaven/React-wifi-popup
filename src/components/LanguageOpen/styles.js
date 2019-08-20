export const styles = {
    languagepicker: {
        'display': 'none',
        'opacity': 0,
        'position': 'absolute',
        'right': 18,
        'background': '#fff',
        'border-radius': 5,
        'top': 38,
        'min-width': 170,
        'transition': 'opacity 1s ease-in',
    },
    languagepicker__visible: {
        'display': 'block',
        'opacity': '1',
    },
    rectangle: {
        'width': 0,
        'border': '10px solid',
        'border-bottom-color': '#fff',
        'border-left-color': 'transparent',
        'border-right-color': 'transparent',
        'border-top-color': 'transparent',
        'position': 'absolute',
        'top': -19,
        'right': 20,
    },
    languagepicker_ul: {
        'margin': 0,
        'padding': '15px 0 0 0',
        'border-radius': 5,
        '& li:hover': {
            'background': '#ebebeb',
        }
    },
    languagepicker_item: {
        'font-family': 'Littera Text',
        'color': '#4d4d4d',
        'font-size': 18,
        'text-decoration': 'none',
        'display': 'block',
        'padding': '13px 30px',
        'box-sizing': 'border-box',
        '& *': {
            'display': 'inline-block',
            'vertical-align': 'middle',
        }
    },
    languagepicker_item_img: {
        'margin-right': 10,
    },
}