$( document ).ready(function() {

//Cover picture and nav-bar
let coverNav = `<div class="cover-img">
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<div class="container-fluid" id="nav-container">
  <a class="navbar-brand" href="#">Studio Victor Vera</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a id="team-navBar"class="nav-link active" aria-current="page" href="#">Equipo</a>
      </li>
      <li class="nav-item">
        <a id="services-navBar" class="nav-link active" href="#">Servicios</a>
      </li>
      <li class="nav-item">
        <a id="store-navBar" class="nav-link active" href="#">Tienda</a>
      </li>
      <li class="nav-item">
        <a id="reservation-navBar" class="nav-link active" href="#">Reserva Tu Hora</a>
      </li>
      <li>
      <a id="cart-navBar" class="nav-link active d-flex justify-content-center" href="#"><i class="fas fa-shopping-cart fa-lg"></i><span id="nav-product-number"></span></a>  
      </li>
    </ul>
  </div>
</div>
</nav>
<button id="more-info-btn" type="button" class="btn btn-dark">Quiero Reservar Mi Hora</button>
<a id="nav-fixed-whatsapp" href="https://wa.me/18573169455?text=Envíanos%20un%20mensaje%20y%20te%20responderemos%20a%20la%20brevedad"><i class="fab fa-whatsapp fa-2x" style="color: white"></i></a>
</img>
</div>`
$('#navigation').append(coverNav);

//NavBar Animations - It makes the user go to the target topic upon click of each tab
const navbarTopics = ['team', 'services', 'store', 'reservation', 'cart']


$("#team-navBar").on('click', function() {
  $("html, body").animate({
      scrollTop: $("#section-team").offset().top
  }, 100);
});

$("#services-navBar").on('click', function() {
  $("html, body").animate({
      scrollTop: $("#section-services").offset().top
  }, 100);
});

$("#store-navBar").on('click', function() {
  $("html, body").animate({
      scrollTop: $("#section-store").offset().top
  }, 100);
});

$("#reservation-navBar").on('click', function() {
  $("html, body").animate({
      scrollTop: $("#section-reservation").offset().top
  }, 100);
});

//The team - images grid

let salonImages = imagenes;
salonImages.map((image, index) => {
$('.photos').append(`<img class="photos-salon" src=${image.src}>`);
})

//Services explained
let cutServiceDescription = `<ul>
<li>Corte de Hombre - 10.000 - 15.000</li>
<li>Corte de Mujer - 20.000 - 40.000</li>
<li>Peinado de Mujer - 30.000 - 50.000</li>
<li>Extensiones - Precios varian segun caso</li>
<li>Peinado - Desde 50.000</li>
<li>Matrimonios - Precios varian según caso - </li>
</ul>`

let colorServiceDescription = `<ul>
<li>Color base - 30.000 - 60.000</li>
<li>Balagaje - 60.000 - 100.000</li>
<li>Brillo - 30.000 - 60.000</li>
</ul>`

let ourServices = `<div class="row">
<div class="col-sm-6">
  <div class="card">
    <div class="row">
      <div class="col">
        <img class="services-img" src="https://images.pexels.com/photos/3993442/pexels-photo-3993442.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" class="card-img-top" alt="women-haircut">
      </div>
      <div class="col">
        <div id="cut-service-description" class="card-body">
          <h5 class="card-title">Corte y Peinado</h5>
            <p class="card-text">Recomendaremos un estilo que se adapte a ti en función de tus necesidades, rostro y estilo de vida. Te escuchamos y en conjunto creamos el mejor estilo para ti.</p>
              <a href="#" id="cut-prices-btn"class="btn btn-primary">Servicios & Precios</a>
          </div>
        </div>
      </div>
    </div>
  </div>
      <div class="position-fixed top-50 start-50" style="z-index: 11">
        <div id="cutServiceToast" class="toast align-items-center text-white bg-dark border-0" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="fas fa-cut"></i>
            <strong class="me-auto">Corte y Peinado</strong>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            ${cutServiceDescription}
          </div>
        </div>
      </div>
    <div class="col-sm-6">
      <div class="card">
        <div class="row">
          <div class="col">
            <img class="services-img" src="https://images.pexels.com/photos/3993292/pexels-photo-3993292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" class="card-img-top" alt="women-haircolor">
          </div>
          <div class="col">
            <div class="card-body">
              <h5 class="card-title">Coloración</h5>
                <p class="card-text">Nos especializamos en diferentes técnicas para dar color al cabello de tus sueños. Estamos aquí para escucharte y ayudarte a lograr tus objetivos de color.</p>
                  <a href="#" id="color-prices-btn" class="btn btn-primary">Servicios & Precios</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="position-fixed top-50 start-50" style="z-index: 11">
        <div id="colorServiceToast" class="toast align-items-center text-white bg-dark border-0" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
              <i class="fas fa-palette"></i>
            <strong class="me-auto">Coloración</strong>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            ${colorServiceDescription}
          </div>
        </div>
      </div>` 

$('#services-explained').append(ourServices);
// $('#cut-service-description').append(serviceCutDetails);
let cutToast = $('#cutServiceToast');
let colorToast = $('#colorServiceToast');
$('#cut-prices-btn').click(function() {
  let cutToaster = new bootstrap.Toast(cutToast)
  cutToaster.show()
})  

$('#color-prices-btn').click(function() {
  let colorToaster = new bootstrap.Toast(colorToast)
  colorToaster.show()
  })  

//Reservation banner
$('#section-reservation').append(`<div class="reservation-btn-wrapper">
<div class="reservation-btn-title">Reserva tu Hora con Nosotros</div>
<div id="reservation-btn-wrapper">
  <button type="button" id="reservationBtn" class="btn btn-lg btn-dark">Agendar</button>
</div>
</div>
<div id="reservation-template-display"></div>`)
$('#reservation-template-display').append(`<div id="reservation-form" style="display: none">
<h2>Contáctanos Para Reservar tu Hora</h2>
  <form class="form-control"id="contact-form" action="https://formspree.io/f/mayaabzg" method="POST">
    <div class="row">
      <div class="form-group col-md-4">
        <label for="name">Nombre Completo</label>
        <input name="name" type="text" id="name" placeholder="Maria Herrera" class="form-control">
      </div>
        <div class="form-group col-md-4">
        <label for="name">Correo Electrónico</label>
        <input name="email" type="email" id="email" placeholder="maria@gmail.com" class="form-control">
      </div>
      <div class="form-group col-md-4">
        <label for="phone">Número Celular</label>
        <input name="phone" type="tel" id="phone" placeholder="+56-XX-XXX-XXXX" class="form-control">
      </div>
    </div>
    <label for="comments">Comentarios</label>
    <textarea id="comments" name="comments" rows="2" cols="33" class="form-control" placeholder="Cuéntanos que te quieres hacer. También dinos que dias y horarios puedes. Te contactaremos para coordinar los detalles"></textarea>
    <input name="_formsubmit_id" type="text" style="display:none" target="_blank">
    </br>
    <input value="Enviar" type="submit">
  </form>
</div>`)
$('#reservationBtn').click(function() {
$('#reservation-form').show() 
})

//Shop - searchBar
$('#search-bar').append(`<form>
<div class="row">
  <div class="form-group col-md-6">
    <input type="text" placeholder="Busca en nuestra tienda" class="form-control">
  </div>
  <div class="form-group col-md-6">
    <button id="shop-search-btn" type="submit" class="btn btn-dark">Buscar</button>
  </div>
</div>
</form>`)


let allProducts = productList;

//Function that helps formatting the price displayed
const formatter = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0
  })

//Function that maps the product list and then displays them in cards

allProducts.map((product, index) => {
  $('#all-products').append(`<div class="product-wrapper" id="card-border">
  <div class="img-border">
    <img id="product-image" src=${product.image} alt="product-image"/>
    </div>
    <div class="product-details-container">
      <div id="product-name">${product.productName}</div>
      <div id="product-quantity">${product.size}</div>
      <div id="product-brand">${product.brand}</div>
      <div id="product-price">${formatter.format(product.price)}</div>
      <div id="rating"> 
        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
      </div>
    <button class="add-to-cart" id="listBtn-${product.id}" value="${product.id}"> Agregar al Carro</button>
    </div>
</div>`)
})

$('.add-to-cart').on('click', (e) => {
  let selectedProductId = e.target.value
  let product = allProducts.find(p => p.id === parseInt(selectedProductId))
  setCartNumbers(product)
  totalCost(product)
}
)

const cartNumbersOnLoad = () => {
  let numberOfProducts = localStorage.getItem('cartNumbers')
  if(!numberOfProducts) {
    $('#nav-product-number').text(0)
  } else {
    $('#nav-product-number').text(numberOfProducts)
  }
}

const setCartNumbers = (product) => {
  let numberOfProducts = localStorage.getItem('cartNumbers')
  numberOfProducts = parseInt(numberOfProducts)
  if (numberOfProducts) {
    localStorage.setItem('cartNumbers', numberOfProducts + 1)
    $('#nav-product-number').text(numberOfProducts + 1)
  } else {
    localStorage.setItem('cartNumbers', 1)
    $('#nav-product-number').text(numberOfProducts)
  }
  setCartItems(product)
}

const setCartItems = (product) => {
  let inCartItems = localStorage.getItem('productsInCart')
  inCartItems = JSON.parse(inCartItems)
  console.log('items local storage', inCartItems)
  if(inCartItems !== null) {
    if(inCartItems[product.tag] == undefined) {
      inCartItems = {
        ...inCartItems,
        [product.tag]: product
      }
    }
    inCartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1
    inCartItems = {
      [product.tag]: product
    }
  }
  localStorage.setItem('productsInCart', JSON.stringify(inCartItems))
}

const totalCost = (product) => {
let cartCost = localStorage.getItem('totalCost')
if(cartCost != null) {
  cartCost = JSON.parse(cartCost)
  localStorage.setItem('totalCost', cartCost + product.price)
} else {
  localStorage.setItem('totalCost', product.price)
}
}

// const removeProduct = () => {
//   let CartItems = localStorage.removeItem('productsInCart')
//   console.log('items local storage before removing', CartItems)
  
// }

// const clearAllProducts = () => {
  
// }

const displayCart = () => {
let cartItems = localStorage.getItem('productsInCart')
let totalCost = localStorage.getItem('totalCost')
let cartNumbers = localStorage.getItem('cartNumbers')
cartItems = JSON.parse(cartItems, totalCost, cartNumbers)

console.log(cartItems, totalCost, cartNumbers)
Object.values(cartItems).map((product, index) => {
$('#cart-displayed').append(`<div index=${index}>
<div class="container" id="cart-list">
  <div class="row align-items-center">
    <div class="col">
      <img id="cart-product-image" src=${product.image}> </img>
    </div>
    <div class="col">
      ${product.productName}
    </div>
    <div class="col">
      <button type="button" class="btn btn-outline-secondary" value="${product.id}" id="removeItem"><i class="fas fa-minus"></i></button>
      <span id="cart-product-quantity">
      ${product.inCart}
      </span>
      <button type="button" class="btn btn-outline-secondary" value="${product.id}" id="addItem"><i class="fas fa-plus"></i></button>
    </div>
    <div class="col">
    ${formatter.format(product.price)}
    </div>
    <div class="col">
    <i class="fas fa-trash-alt"></i>
    </div>
  </div>
</div>
</div>`)

})
$('#cart-displayed').append(`<div>
<div class="container" id="cart-list">
  <div class="row align-items-center">
    <div class="col">
    </div>
    <div class="col">
      TOTALES
    </div>
    <div class="col">
      ${cartNumbers}
    </div>
    <div class="col">
    ${formatter.format(totalCost)}
    </div>
    <div class="col">
    <button type="button" class="btn btn-secondary" id="clear-all">Vaciar el carrito</button>
    </div>
  </div>
</div>
</div>`)

if(cartNumbers == null) {
  $('#cart-displayed').prepend(`<h2>Tu carrito está vacío</h2>`)
} else {
  $('#cart-displayed').prepend(`<h2>Tienes <span>${cartNumbers}</span> producto(s) en tu carrito de compras</h2>`)
}
}

$("#clear-all").on('click', function() {
localStorage.removeItem('productsInCart')
localStorage.removeItem('totalCost')
localStorage.removeItem('cartNumbers')
window.location.reload();
})

$("#removeItem").on('click', function() {
  console.log('btn remove cart item was clicked')
  })

$("#addItem").on('click', function() {
    console.log('btn add cart item was clicked')
    })

cartNumbersOnLoad() 
displayCart()

// $('#cart-navBar').on('click', displayCart() {
// $()
// })

// displayCart.on('change', addToCart)

//Function that creates a element with shipping details
// const shippingForm = $('#shipping-form')
// const buyerName = $('#buyer-name')
// const buyerAddress = $('#address')
// const buyerPayment = $('#payment')
// const buyerCard = $('#card-number')
// const submitOrder = $('#btn-delivery-details') //this triggers the flow
// const shipDetails = $('#shipping-details-confirmed') //where info will be displayed

// shippingForm.on('submit', addDataLocalStorage);
// let arr = new Array();

// function addDataLocalStorage(e) {
//     e.preventDefault()
//     deleteData()
//     getData()
//     arr.push({
//       buyerName: buyerName.val(), //this could be done with a constructor as well
//       buyerAddress: buyerAddress.val(),
//       buyerPayment: buyerPayment.val(),
//       buyerCard: buyerCard.val()
//     })
//    localStorage.setItem("localData", JSON.stringify(arr))
   
//     }

//     function getData(){
//       let str = localStorage.getItem("localData");
//       if (str!= null)
//           arr = JSON.parse(str);
//   }
  
//     function deleteData(){
//       localStorage.clear();
//   }

// //THIS DISPLAY THE DELIVERY DETAILS ON THE SCREEN

// const displayData = () => {
//   let deliveryDetails = new Array();
//   deliveryDetails = JSON.parse(localStorage.getItem("localData"));

// console.log(deliveryDetails)
//   deliveryDetails.map(details => {
//     $('#shipping-confirmation').append(`<div class="shipping-summary"> 
//     <h2>Revisa los detalles de tu envio</h2>
//     <ul> 
//     <li><strong>Nombre:</strong><span>${details.buyerName}</span></li>
//     <li><strong>Direccion:</strong><span>${details.buyerAddress}</span></li>
//     <li><strong>Medio de Pago:</strong><span>${details.buyerPayment}</span></li>
//     <li><strong>Numero de Tarjeta:</strong><span>${details.buyerCard}</span></li>
//     </ul>
//     </div>`)
//   })}

//   const verifyOrderBtn = $('#check-order-btn')
//   verifyOrderBtn.on('click', displayData)

//This display the footer
$('#section-footer').append(`<footer> 
<p class="footer-message">Contáctanos a través de nuestras redes sociales</p>
<ul>
    <li><a href="https://www.instagram.com/studio_victor_vera/"><i class="fab fa-instagram fa-2x" style="color: #212529"></i></a></li>
    <li><a href="https://www.facebook.com/victor.j.lopez.359"><i class="fab fa-facebook fa-2x" style="color: #212529"></i></a></li>
    <li><a href="https://wa.me/18573169455?text=Mandanos%20un%20mensaje%20y%20te%20responderemos%20a%20la%20brevedad"><i class="fab fa-whatsapp fa-2x" style="color: #212529"></i></a></li>
</ul>
</footer>`)

})




