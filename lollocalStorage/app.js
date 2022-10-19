const h1 = document.querySelector('h1')
const form = document.querySelector('.form')
const input = document.querySelector('.input')
const submit = document.querySelector('.submit')

const handleSubmit = (e) => {
    e.preventDefault()

    // CHANGE VALUE OF H1 
    h1.innerHTML = input.value

    // SAVE IN LOCAL STORAGE
    localStorage.setItem("input", input.value) 
}

const handleLoad = () => {
    localStorage.getItem('input') ? h1.innerHTML = localStorage.getItem('input') : h1.innerHTML = 'localStorage'
}

handleLoad()

form.addEventListener('submit', handleSubmit)