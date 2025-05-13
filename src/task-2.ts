interface Product{
    readonly id: number,
    title: string,
    description?: string
}

const product:Product = {
  id: 1,
  title: "Tablet",
  description: "Compact and fast",
};

//const product2:Product = {
  //id: 2,
  //title: "Desktop",
//};

console.log(`Product: ${JSON.stringify(product)}`);
//console.log(`Product: ${JSON.stringify(product2)}`);