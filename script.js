const select = document.querySelectorAll('.select');
const selectOptions = document.querySelectorAll('.select__options');
const inputs = document.querySelectorAll('.item__input');
const sum = document.querySelector('.item__result');
const processingFactor = document.querySelector('.form');
const shapeFactor = document.querySelector('.processing');
const counterWrapper = document.querySelector('.item__counter');
const counter = document.querySelector('.item__input_counter');
const calculatorReset = document.querySelector('.calculator__reset');
const inputWidth = document.querySelector('#width');
const inputLength = document.querySelector('#length');

const hintButton = document.querySelectorAll('.item_big');

const popUp = document.querySelector('.popup')

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('hint__icon')) {
        if (e.target.parentNode.parentNode.parentNode === hintButton[0]) {
            hintButton[1].children[1].classList.remove('open')
        } else if (e.target.parentNode.parentNode.parentNode === hintButton[1]) {
            hintButton[0].children[1].classList.remove('open')
        }
        e.target.parentNode.parentNode.parentNode.children[1].classList.toggle('open')
    } else {
        hintButton.forEach((item) => {
            item.children[1].classList.remove('open')
        })
    }
})

calculatorReset.addEventListener('click', () => {
    inputLength.value = '';
    inputWidth.value = '';
    processingFactor.innerText = 'Прямоугольник';
    shapeFactor.innerText = 'Без обработки';
    counter.value = 0;
    sum.innerText = 0;
    inputLength.classList.remove('no-value');
    inputWidth.classList.remove('no-value');
    selectOptions.forEach((item) => {
        if (item.classList.contains('open')) {
            item.classList.remove('open');
        }
    })
})

counterWrapper.addEventListener('input', checkValue)

counterWrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains('item__button_plus')) {
        checkValue()
        counter.value++
        calc()
    } else if (e.target.classList.contains('item__button_minus') && counter.value > 0) {
        counter.value--
        calc()
    }
})

inputs.forEach((elem) => {
    elem.addEventListener('input', () => {
        elem.classList.remove('no-value');
        if (inputs[0].value !== '' && inputs[1].value !== '') {
            popUp.style.opacity = '0'
        }
    })
})


inputs.forEach((elem) => {
    elem.addEventListener('input', (calc))
})

selectOptions.forEach((item) => {
    item.addEventListener('click', (replaceText))
})

select.forEach((item) => {
    item.addEventListener('click', (getOptions))
})


function calc () {

    if (processingFactor.innerText === 'Прямоугольник' && shapeFactor.innerText === 'Без обработки') {
        sum.innerText = ((((inputWidth.value / 1000) * (inputLength.value / 1000) * counter.value) * 1500)).toFixed(2);
    } else if (processingFactor.innerText === 'Круг (овал)' && shapeFactor.innerText === 'Без обработки') {
        sum.innerText = (((inputWidth.value / 1000) * (inputLength.value / 1000) * 1.5 * counter.value) * 1500).toFixed(2);
    } else if (processingFactor.innerText === 'Прямоугольник' && shapeFactor.innerText === 'С шлифовкой') {
        sum.innerText = (((inputWidth.value / 1000) * (inputLength.value / 1000) * 1.5 * counter.value) * 1500).toFixed(2);
    } else if (processingFactor.innerText === 'Прямоугольник' && shapeFactor.innerText === 'С полировкой') {
        sum.innerText = (((inputWidth.value / 1000) * (inputLength.value / 1000) * 1.8 * counter.value) * 1500).toFixed(2);
    } else if (processingFactor.innerText === 'Круг (овал)' && shapeFactor.innerText === 'С шлифовкой') {
        sum.innerText = (((inputWidth.value / 1000) * (inputLength.value / 1000) * 1.5 * 1.5 * counter.value) * 1500).toFixed(2);
    } else if (processingFactor.innerText === 'Круг (овал)' && shapeFactor.innerText === 'С полировкой') {
        sum.innerText = (((inputWidth.value / 1000) * (inputLength.value / 1000) * 1.5 * 1.8 * counter.value) * 1500).toFixed(2);
    }
}

function replaceText(e) {
    if (e.target.classList.contains('option')) {
        checkValue()
        this.parentNode.children[0].children[1].innerText = e.target.innerText
        this.classList.toggle('open')
        calc()
    }

}

function getOptions (e) {

    if (e.target.tagName === 'BUTTON' || e.target.classList.contains('button__image')) {
        this.children[1].classList.toggle('open')
    }
}

function checkValue () {
    if (inputLength.value === '') {
        inputLength.classList.add('no-value');
    }

    if (inputWidth.value === '') {
        inputWidth.classList.add('no-value');
    }

    if (inputLength.value === '' || inputWidth.value === '') {
        popUp.style.opacity = '1'
    }
}