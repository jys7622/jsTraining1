var products = [
  { id : 0, price : 70000, title : 'Blossom Dress' },
  { id : 1, price : 50000, title : 'Springfield Shirt' },
  { id : 2, price : 60000, title : 'Black Monastery' }
];

$('.card-body1 h5').html(products[0].title)
$('.card-body1 p').html(products[0].price)
$('.card-body2 h5').html(products[1].title)
$('.card-body2 p').html('가격 :' +products[1].price)
$('.card-body3 h5').html(products[2].title)
$('.card-body3 p').html(products[2].price)