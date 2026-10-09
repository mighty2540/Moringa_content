// original price, discountper

//originalprice - originalprice*discountper

function finalPrice(originalPrice, discountPercentage){

    let discountPrice= originalPrice - (originalPrice*discountPercentage);

    return discountPrice;
}

module.exports = { finalPrice};