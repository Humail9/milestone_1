const button = document.getElementById('buton') as HTMLButtonElement
const skills = document.getElementById('Skills') as HTMLElement

button.addEventListener('click', ()=>{
  if (skills.style.display === 'none'){
    skills.style.display = 'block'
  } else {
    skills.style.display = 'none'
  }
});