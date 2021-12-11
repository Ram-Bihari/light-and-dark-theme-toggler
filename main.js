let toggle = {
    light : {
        bg : 'white',
        fg : 'black',
    },

    dark : {
        bg : 'black',
        fg : 'white'
    }
}

let light = document.querySelector('#light');
let back = document.querySelector('#back');
let dark = document.querySelector('#dark');

light.addEventListener('click', () => {
    back.style.backgroundColor = `${toggle.light.bg}`;
    back.style.color = `${toggle.light.fg}`
});

dark.addEventListener('click', () => {
    back.style.backgroundColor = `${toggle.dark.bg}`;
    back.style.color = `${toggle.dark.fg}`
});