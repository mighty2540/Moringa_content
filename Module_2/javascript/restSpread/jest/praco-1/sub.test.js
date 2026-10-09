function subtract(x,y){
    return x-y;
}

test(`subtract x - y equal 5`, () =>{
    expect(subtract(10,5)).toBe(5);
});