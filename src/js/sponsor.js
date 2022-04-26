const bd = document.querySelector('body')
const qbox = bd.querySelector('#QRBox')
const mbox = bd.querySelector('#MainBox')
const dbox = bd.querySelector('#donateBox')

const qqr = 'https://wugenqiang.js.org/images/02/QQQR.png'
const aqr = 'https://wugenqiang.js.org/images/02/AliPayQR.png'
const wqr = 'https://wugenqiang.js.org/images/02/WeChanQR.png'

const showQR = (QR) => {
	if (QR) mbox.style.backgroundImage = `url(${ QR })`
	bd.classList.add('blur')
	qbox.classList.add('fadeIn')
	mbox.classList.add('showQR')
}

dbox.addEventListener('click', (e) => {
	let el = e.target
	if (el.id === 'QQPay') showQR(qqr)
	else if (el.id === 'AliPay') showQR(aqr)
	else if (el.id === 'WeChat') showQR(wqr)
})

mbox.addEventListener('click', () => {
	mbox.classList.remove('showQR')
	mbox.classList.add('hideQR')
	setTimeout(a => {
		qbox.classList.remove('fadeIn')
		mbox.classList.remove('hideQR')
		bd.classList.remove('blur')
	}, 600)
})
