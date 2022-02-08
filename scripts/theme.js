const themeBtn = document.getElementById('themeButton');
const body = document.body;

const initialTheme = body.classList;
const theme = localStorage.getItem('theme');

if(theme){
    body.classList.replace(initialTheme, theme);
}

themeBtn.onclick = () => {
    if(body.classList == 'light'){
        body.classList.remove('light');
        body.classList.add('dark');
        localStorage.setItem('theme','dark');

    }else if(body.classList == 'dark'){
        body.classList.remove('dark');
        body.classList.add('light');
        localStorage.setItem('theme','light');
    }
};

