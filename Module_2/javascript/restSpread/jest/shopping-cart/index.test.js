// function that calculate total

function totalSaleOfBooks( price, quantity){
    return price * quantity;
}

test(`if price * quanity = totalSaleOfBooks`, () => {
      expect(totalSaleOfBooks(500,10)).toBe(5000);
});