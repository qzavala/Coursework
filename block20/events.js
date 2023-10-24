const form = document.querySelector('form');
const input = document.querySelector('input');
const words = [];
form.addEventListener('submit', (e) => {
    console.log(e)
    e.preventDefault();
    console.log(input.value)
    console.log(words);
    console.log('you have submitted the form!')
})

function render(){
    const sentenceEl = document.querySelector('#')
    const sentence = words.join(' ') + ',' ;
    sentenceEl.textContent = sentence;
}