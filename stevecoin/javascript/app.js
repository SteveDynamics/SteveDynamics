const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solarize');

const body = document.body;


const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

if(theme) {
    body.classList.add(theme);
    isSolar && body.classList.add('solarize');

}

darkButton.onclick = () => {
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
}

 
lightButton.onclick = () => {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
}


solarButton.onclick = () => {
    if (body.classList.contains('solarize')) {
    
        body.classList.remove('solarize');
        solarButton.style.cssText = `
          --bg-solar: var(--yellow);
        `
    
        solarButton.innerText = 'Solarize';
    
        localStorage.removeItem('isSolar');
    
      } else {
    
        solarButton.style.cssText = `
          --bg-solar: white;
        `
    
        body.classList.add('solarize');
        solarButton.innerText = 'Normalize';
    
        localStorage.setItem('isSolar', true);
      }
}