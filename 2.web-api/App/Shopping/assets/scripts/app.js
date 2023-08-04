// 하나의 상품 객체에 대한 설계도
class Product {
  // 객체를 만들 때 초기값을 세팅하는 용도
  constructor(title, image, price, desc) {
    this.title = title;
    this.imageUrl = image;
    this.price = price;
    this.description = desc;
  }
}
// 객체 생성
const p1 = new Product(
  '냠냠이', 
  'https://blog.kakaocdn.net/dn/cSGF4R/btq5h0PUbMx/9RgR2KxK5oEeT9ku9O2xW1/img.png',
  2000,
  '냠냠박사님 맛있게 밥을 먹어주세요~'
);
console.log(p1);
const p2 = new Product(
  '쩝쩝이',
  'https://www.animaxtv.co.kr/sites/animaxtv.co.kr/files/ct_character_f_primary_image/nyamnyam.jpg',
  7000,
  '쩝쩝꿀꿀박사님 점심을 추천해주세요~'
);
console.log(p2);




//한개의 LI태그를 생성하는 컴포넌트 클래스 설계
class ProductItem{
  constructor(product,){//li태그 생성시 받아오도록
    this.product=product;

  }
  //담기버튼 이벤트 클릭 핸들러
  addToCartHandler(){
    console.log(`장바구니에 상품 추가`);
    console.log(this.product);
    //이 핸들러에서 누른 그 상품의정보를 알아랴 함
  }
    render(){
    const $prod = document.createElement("li");
    $prod.classList.add("product-item");
    $prod.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}">
        <div class="product-item__content">
          <h2>${this.product.title}</h2>
          <h3>${this.product.price}원</h3>
          <p>${this.product.description}</p>
          <button>담기</button>
        </div>
      </div>
    `;
    const $addCartBtn=$prod.querySelector('button');
    $addCartBtn.addEventListener('click',()=> this.addToCartHandler())
    return $prod;

  }
}

//한개의 UL을 생성하는 클래스
class ProductList{
  constructor(){
    //상품들을 모아놓은 배열
    this.products=[
      p1,
      p2,
      new Product(
        "햄버거",
        "https://images.chosun.com/resizer/5jStJ5InVS4u3iHvEzB8y_tGrr8=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/HV765ADF7VF4FLG5KISDNFMUJ4.PNG",
        16900,
        "꽈뜨로 맥씨멈 스테카 버거~",
      ),
      new Product(
        "애플워치",
        
          "https://img.danawa.com/prod_img/500000/535/481/img/15481535_1.jpg?_v=20211215103510",
         400000,
        "APPLE watch 2세대 2022",
      ),
      new Product(
        "애플망고",
        "https://m.thegiboon.com/web/product/big/202104/ea08c22e8939ab1977487abc826b8ab8.jpg",
        60000,
        "맛있는 맹고~ 당장 사먹어야지~",
      ),
    ];

  }//end constructor
  render() {
    // console.log('render!!', this);
    const $app = document.getElementById("app");
    const $prodList = document.createElement("ul");
    $prodList.classList.add("product-list");
    this.products.forEach((prod) => {
      //                {product:{title:'',imgeUrl,''},render()}
      const productItem=new ProductItem(prod);
     
      $prodList.appendChild(productItem.render());
    });
    $app.appendChild($prodList);
    
    
  }

}
//랜더링 명력
const productList=new ProductList();
productList.render();

// 상품 목록에 대한 객체
// const productList = {
  
// };

// 렌더링 명령
productList.render();
