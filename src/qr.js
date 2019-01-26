import qr from './qr.svg'

const aside = document.getElementsByClassName('aside')[0]
aside.innerHTML = qr.replace('<svg', '<svg class="qr"')
