document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault()
  const formElements = document.querySelectorAll('form *')
  formElements.forEach((el) => (el.style.display = 'none'))

  document
    .querySelectorAll('#toast, #toast *')
    .forEach((el) => (el.style.display = 'block'))
})

document.querySelector('form button').addEventListener('click', () => {
  document
    .querySelectorAll('form input, form textarea, form label:has(input[type="radio"])')
    .forEach((el) => el.classList.add('invalid-input'))
})
