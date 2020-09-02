if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('delete')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

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

    document.getElementsByClassName('purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Cảm ơn vì đã mua hàng')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.parentElement.remove()
    updateCartTotal()
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
    updateCartTotal()
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
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column"><span>${price}</span></span>
        <div class="cart-quantity cart-column">
            <span><div class="quantity-wrapper">
               <input class="cart-quantity-input" type="number" value="${value}">
			</div></span>
        </div>
        <div class="cart-total cart-column">
            <button class="delete" type="button"><img src="img/Close.png"></button>
			<span class="cart-item-total">${price}</span>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
		}
   
    cartRow.getElementsByClassName('delete')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
		var itemtotalElement = cartRow.getElementsByClassName('cart-item-total')[0]
		var str=priceElement.innerText;
		const search = '.';
		const replaceWith = '';
		var result = str.split(search).join(replaceWith);
		result = result.replace('đ','')
        var price = parseFloat(result)
        var quantity = quantityElement.value
		itemtotalElement.innerText = (price * quantity).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + "đ";
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
	var moneyDots = total.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    document.getElementsByClassName('cart-total-price')[0].innerText = moneyDots + "đ"
}