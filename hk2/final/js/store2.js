if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
function ready() {
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('quick-view-image')[0].src
	var value = shopItem.getElementsByClassName('cart-quantity-input')[0].value
    addItemToCart(title, price, imageSrc, value)
}

function addItemToCart(title, price, imageSrc, value) {
    var cartRow = document.createElement('div')
	var cartItems = document.getElementsByClassName('cart-items')[0]
    cartRow.classList.add('cart-row')
	var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
	var cartOldvalue = cartItems.getElementsByClassName('cart-quantity-input')
	var temp=0
	for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
			temp=1
			var value1 = parseInt(value)
            value1 += parseInt(cartOldvalue[i].value)
			cartItems.getElementsByClassName('cart-quantity-input')[i].value = value1
        }
    }
	if(temp==0)
		{
		var cartRowContents = `
                        <img class="cart-item-image" src="${imageSrc}">
                        <span class="cart-item-title">${title}</span>
						<span class="cart-price"><span>${price}</span></span>
						<div class="quantity-wrapper">
                        	<input class="cart-quantity-input" type="number" value="${value}">
						</div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
			addtocart.style.opacity= 1;
			addtocart.style.zIndex = 20;
		}
	Overlay.classList.add('overlay1');
		addtocartContent.style.opacity= 1;
		addtocartContent.style.zIndex = 24;
    updateCartTotal();
}
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0, valuetotal=0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
		var str=priceElement.innerText;
		const search = '.';
		const replaceWith = '';
		var result = str.split(search).join(replaceWith);
		result = result.replace('đ','')
        var price = parseFloat(result)
        var quantity = quantityElement.value
		valuetotal = valuetotal + quantity
        total = total + (price * quantity)
    }
	valuetotal = Math.round(valuetotal * 100) / 100
	document.getElementsByClassName('abcde')[0].innerText = valuetotal
    total = Math.round(total * 100) / 100
	var moneyDots = total.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    document.getElementsByClassName('cart-total-price')[0].innerText = moneyDots + "đ"
}