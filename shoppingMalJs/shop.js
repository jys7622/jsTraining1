//json파일 가져오기
let products = []
let cart = []
let sum = 0;
$.getJSON('store.json', function(data){
  products = data.products
  products.forEach((item) => {
    let ele = document.createElement("div")
      ele.innerHTML = `
        <div class="proList" draggable="true" data-id="${item.id}">
          <img src="pr${item.id+1}.JPG">
            <div>${item.title}</div>
            <div>${item.brand}</div>
            <div>${item.price}</div>
          <button class="buyBtn" data-id="${item.id}">담기</button>
        </div>
      `
    document.querySelector('.proList-container').append(ele)
  });
  $('.buyBtn').click(function(e){
    // 누른 제품의 id 번호 
    var currentPd = e.target.dataset.id
    // 누른 제품의 id번호와 같은 id가 cart에 있는지 비교
    let cartPd = cart.findIndex((item)=> item.id == currentPd)
    // findIndex는 일치하는 값이 없으면 -1을 반환
    // 일치하는 값이 있으면 해당 값의 인덱스 번호를 반환
    // -1이면 장바구니에 새로운 요소로 추가
    if(cartPd == -1){
      // 내가 선택한 제품의 id와 전체 상품목록 중에 있는 제품의 id가 같은 것을
      // 비교하여 담는다.
      // item은 배열에 담겨있는 요소 각각을 의미.
      // products배열의 요소 각각은 객체 형태이다.
      let selectedItem = products.find((item)=>
        item.id == currentPd
      )
      selectedItem.cnt ++;
      //cart에 없는 요소면 카운트 1 증가시키고 cart배열에 추가
      cart.push(selectedItem)
    } else {
      // 카트에 있는 제품 id와 내가 누른 제품의 id가 같은 요소의 인덱스 번호
      cart[cartPd].cnt++;
    }
    $('.cart-container').html('');
    cart.forEach((item) => {
      let ele = document.createElement("div")
        ele.innerHTML = `
          <div class="cartList" data-id="${item.id}">
            <img src="pr${item.id+1}.JPG">
              <div>${item.title}</div>
              <div>${item.brand}</div>
              <div>${item.price}</div>
              <div>${item.cnt}</div>
          </div>
        `
      document.querySelector('.cart-container').append(ele)
      priceSum()
    });
  })
  $('.proList-container').on('dragstart',function(e){
    e.originalEvent.dataTransfer.setData('id',e.target.dataset.id)
    console.log('드래그시작');
  })
  $('.cart-container').on('dragover', function(e){
    e.preventDefault();
  });
  $('.cart-container').on('drop',function(e){
    let dragCurrentPd = e.originalEvent.dataTransfer.getData('id');
    let cartPd = cart.findIndex((item)=> item.id == dragCurrentPd)
    if(cartPd == -1){
      let selectedItem = products.find((item)=>
        item.id == dragCurrentPd
      )
      selectedItem.cnt ++;
      cart.push(selectedItem)
    } else {
      cart[cartPd].cnt++;
    }
    $('.cart-container').html('');
    cart.forEach((item) => {
      let ele = document.createElement("div")
        ele.innerHTML = `
          <div class="cartList" data-id="${item.id}">
            <img src="pr${item.id+1}.JPG">
              <div>${item.title}</div>
              <div>${item.brand}</div>
              <div>${item.price}</div>
              <div>${item.cnt}</div>
          </div>
        `
      document.querySelector('.cart-container').append(ele)
      
    });
    priceSum()
  })
})
// 검색
// input값 가져온다.
$('.searchWord').on('change',function(){
  let inputVal = $('.searchWord').val();
  // products배열에서 input의 값이 포함된 리스트만 보여준다
  let proSearch = products.filter((item) => item.title.includes(inputVal) || item.brand.includes(inputVal))
  $('.proList-container').html('')
  proSearch.forEach((item) => {
    // $('.proList-container').append(`
    //   <div class="proList" data-id="${item.id}">
    //     <img src="pr${item.id+1}.JPG">
    //     <div>${item.title}</div>
    //     <div>${item.brand}</div>
    //     <div>${item.price}</div>
    //   </div>
    // `)
    // 검색어 부분만 스타일변경해서 제목, 브랜드명에 적용
    let ele = document.createElement("div")
      ele.innerHTML = `
        <div class="proList" draggable="true" data-id="${item.id}">
          <img src="pr${item.id+1}.JPG">
            <div><h4>${item.title}</h4></div>
            <div><h4>${item.brand}</h4></div>
            <div>${item.price}</div>
          <button class="buyBtn" data-id="${item.id}">담기</button>
        </div>
      `
    document.querySelector('.proList-container').append(ele)
    $('.proList h4').each(function(index, item){
      let itemTitle = item.innerHTML;
      itemTitle = itemTitle.replace(inputVal,`<span style='background:yellow'>${inputVal}</span>`);
      item.innerHTML = itemTitle;
    })
  })
})
//가격 계산
function priceSum(){
  sum = 0;
  cart.forEach((item) => {
    sum = sum + (item.price) * item.cnt
  })
  $('.price').html('')
  $('.price').append(`
    <span>${sum}</span>
    <button class='finalBuyBtn'>구매하기</button>
  `)
  $('.finalBuyBtn').click(function(){
    $('.modal-container').addClass('modalShow')
  })
}
//구매버튼 누르면 모달창
  