interface Mountain {
  name: string;
  height: number;
}

const mountains: Mountain[] = [
  {
    name: "Kilimanjaro",
    height: 19341,
  },
  {
    name: "Everest",
    height: 29029,
  },
  {
    name: "Denali",
    height: 20310,
  },
];

const findNameOfTallestMountain = (mountains:Mountain[]):string => {
  let tallestMountain:Mountain=mountains[0]
  for (var i= 0; i < mountains.length; i++){
    if(tallestMountain.height <mountains[i].height)
    tallestMountain=mountains[i]
  }
return tallestMountain.name
};
let tallestMountain: string = findNameOfTallestMountain(mountains)

console.log(tallestMountain)


interface Product {
  name: string;
  price: number;
}

const products: Product[] = [
  {
    name: "Milk",
    price: 2,
  },
  {
    name: "Bread",
    price: 4,
  },
  {
    name: "Eggs",
    price: 3,
  },
  {
    name: "Water",
    price: 2.5,
  },
];

const calcAverageProductPrice = (products:Product[]):number => {
  }



};


interface InventoryItem {
  product: Product;
  price: number;
}