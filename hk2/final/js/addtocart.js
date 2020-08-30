const addtocart = document.querySelector('#addtocart');
const addtocartContent = document.querySelector('addtocart');
const closeaddtocart = document.querySelector('.arrow');

addtocart.addEventListener('click', () => {
		Overlay.classList.add('overlay1');
		addtocartContent.style.opacity= 1;
		addtocartContent.style.zIndex = 24;
})
closeaddtocart.addEventListener('click', () => {
	Overlay.classList.remove('overlay1');
		addtocartContent.classList.remove('show');
		addtocartContent.style.opacity= 0;
		addtocartContent.style.zIndex = 0;
})