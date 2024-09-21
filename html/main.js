console.log('Hola mundo desde mi web con HTML 🌐 y JavaScript 💻')
// alert('Hola Bienvenido a mi web con HTML 🌐 y JavaScript 💻')
const reactArticleLink = document.getElementById('react-article')

let count = 0
reactArticleLink.addEventListener('click', () => {
  count++
  console.log('Clickeaste en el link de React')
  console.log('Has clickeado ' + count + ' veces')
})