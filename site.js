fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(json => console.log(json))


async function GetProducts() {
  try {
    let response = await fetch('https://fakestoreapi.com/products/');
    let data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}
async function GetProduct(id) {
  try {
    let response = await fetch('https://fakestoreapi.com/products/' + id);
    let data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}
/**fetch single product */
async function singleproduct(myid) {
  try {
   
    let myProduct = await GetProduct(myid);

    if (!myProduct) {
      console.error('Product data not found');
      return;
    }
    let productElement = document.createElement("div");
    productElement.setAttribute("class", "single_product");
    productElement.innerHTML = `<div class="product">

    <div class="product_preview">
        <div class="product_left">
            <div class="category">
                ${myProduct.category}
            </div>
            <img src="${myProduct.image}" alt="">
        </div>
        <div class="product_right">
            <h2>${myProduct.title}</h2>
            <div class="rating">${myProduct.rating}</div>
        </div>
        <div class="single_prices">
            <span class="offprice">$ ${myProduct.price}</span>
            <span class="price"> $ ${myProduct.price}</span>
        </div>
        <p class="single_description">${myProduct.description}</p>
        <form>
            <label for="qty">Quantity</label>
            <input type="number" name="quantity" id="qty">
            <button>Add To Cart <img src="img/arrow.svg" alt=""></button>
        </form>
    </div>

    <div class="product_details">
        <div>
            <button>Product description</button>
            <button>Additional Info</button>
        </div>
        <div class="description">
            <p>${myProduct.description}</p>
        </div>

    </div>

</div>
    
    `;



    document.getElementById("shopItems").appendChild(productElement);
  } catch (error) {
    console.error('An error occurred:', error);
  }

}




/**fetch products list */

async function productList() {
  try {
    //let myid = myid;
    let myProducts = await GetProducts();

    if (!myProducts) {
      console.error('Product data not found');
      return;
    }
    
    myProducts.forEach(product=>{
      //console.log(product);
      let productElement = document.createElement("div");
      productElement.setAttribute("class", "shop_item");
      productElement.innerHTML = `
      <div class="top">
          <span class="elementCategory">${product.category}</span>
          <botton class="buyElementBtn"><img
          src="https://res.cloudinary.com/dtrvdcebd/image/upload/v1708266043/Clothy/q1pbhfwzuy1u8xqq6cbd.png"
                  alt="add to cart"></botton>
      </div>
      <div class="product_image_container"><img src="${product.image}" alt=""></div>
      <h6><a href="singleproduct.html?id=${product.id}">${product.title}<a></h6>
      <div class="element_footer">
          <div class="prices">
              <span class="offprice">$ ${product.price}</span>
              <span class="price"> $ ${product.price}</span>
          </div>
          <img src="starts" alt="" class="stars">
      </div>
      
      `;
      
          document.getElementById("shopItems").appendChild(productElement);
    })


  } catch (error) {
    console.error('An error occurred:', error);
  }

}



/*async function main1() {
  try {
    let myid = 2;
    let myProduct = await GetProducts(myid);

    if (!myProduct) {
      console.error('Product data not found');
      return;
    }
    let myPic = document.createElement("img");
    myPic.setAttribute("src", myProduct.image);
    myPic.classList.add("img");

    let mySection = document.createElement("section");
    mySection.classList.add("section");

    let myTitle = document.createElement("h2");
    myTitle.innerHTML = myProduct.title;

    let myDetail = document.createElement("p");
    myDetail.innerHTML = myProduct.description;

    mySection.appendChild(myTitle);
    mySection.appendChild(myDetail);
    mySection.appendChild(myPic);

    document.body.appendChild(mySection);
  } catch (error) {
    console.error('An error occurred:', error);
  }

}*/


//main();
