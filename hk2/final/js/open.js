// JavaScript Document
const menu = document.querySelector('.menu_btn');
const menuBtn = document.querySelector('#Menu');
const Overlay = document.querySelector('.none');
const MenuContent = document.querySelector('.menu_content');
let menuOpen =false;
menu.addEventListener('click', () => {
	if(!menuOpen){
		menuBtn.classList.add('open');
		Overlay.classList.add('overlay');
		MenuContent.classList.add('show');
		MenuContent.style.zIndex = 21;
		menuOpen = true;
	}
	else{
		menuBtn.classList.remove('open');
		Overlay.classList.remove('overlay');
		MenuContent.classList.remove('show');
		MenuContent.style.zIndex = 0;
		menuOpen = false;
	}
})
const searchid = document.querySelector('#search');
const search = document.querySelector('search');
const logo = document.querySelector('logo'); 
const closesearch = document.querySelector('.close_search');
searchid.addEventListener('click', () => {
	search.classList.add('show');
	search.style.zIndex = 23;
	logo.style.zIndex = 24;
})
closesearch.addEventListener('click', () => {
	search.classList.remove('show');
	search.style.zIndex = 0;
	logo.style.zIndex = 17;
})

const signin = document.querySelector('#sign_in');
const login = document.querySelector('login');
const closesignin = document.querySelector('.close_signin');
signin.addEventListener('click', () => {
	login.classList.add('show');
	login.style.zIndex = 23;
})
closesignin.addEventListener('click', () => {
	login.classList.remove('show');
	login.style.zIndex = 0;
})



const accountpic = document.querySelector('.accountpic');
const account = document.querySelector('account');
let openAccount =false;
accountpic.addEventListener('click', () => {
	if(!openAccount){
		account.classList.add('show');
		account.style.zIndex = 23;
		openAccount = true;
	}
	else{
		account.classList.remove('show');
		account.style.zIndex = 0;
		openAccount = false;
	}
})

const tranfertoAccount = document.querySelector('.Default');
const tranfertoAccountdn = document.querySelector('.dn');
const tranfertoLogin = document.querySelector('#Dangxuat');
const cart =document.querySelector('cart');
tranfertoAccount.addEventListener('click', () => {
	login.classList.remove('show');
	login.style.zIndex = 0;
	signin.style.zIndex = -1;
	accountpic.classList.add('show');
	accountpic.style.zIndex = 23;
	cart.classList.add('show');
	cart.style.zIndex = 23;
})
tranfertoAccountdn.addEventListener('click', () => {
	login.classList.remove('show');
	login.style.zIndex = 0;
	signin.style.zIndex = -1;
	accountpic.classList.add('show');
	accountpic.style.zIndex = 23;
	cart.classList.add('show');
	cart.style.zIndex = 23;
})
tranfertoLogin.addEventListener('click', () => {
	accountpic.classList.remove('show');
	accountpic.style.zIndex = 0;
	signin.style.zIndex = 20;
	account.classList.remove('show');
	account.style.zIndex = 0;
	cart.classList.remove('show');
	cart.style.zIndex = 0;
})