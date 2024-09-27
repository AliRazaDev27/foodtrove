import axios from "axios"
import sharp from "sharp"
import fs from "fs"
import { fileURLToPath } from "url"
import path,{dirname} from "path"
const productImages = [
  {
      "id": "66d69785eca2aa29478c5556",
      "images": [
          "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png",
          "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/2.png",
          "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5553",
      "images": [
          "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/1.png",
          "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/2.png",
          "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5550",
      "images": [
          "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5575",
      "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Water/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5585",
      "images": [
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Fork/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5561",
      "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5580",
      "images": [
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Chopping%20Board/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5584",
      "images": [
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Fine%20Mesh%20Strainer/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5562",
      "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Eggs/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5555",
      "images": [
          "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/1.png",
          "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/2.png",
          "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5583",
      "images": [
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Electric%20Stove/1.png",
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Electric%20Stove/2.png",
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Electric%20Stove/3.png",
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Electric%20Stove/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c557e",
      "images": [
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/1.png",
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/2.png",
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/3.png",
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c557f",
      "images": [
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Carbon%20Steel%20Wok/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c554d",
      "images": [
          "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c555a",
      "images": [
          "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/1.png",
          "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/2.png",
          "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5559",
      "images": [
          "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/1.png",
          "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/2.png",
          "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c554e",
      "images": [
          "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5558",
      "images": [
          "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/1.png",
          "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/2.png",
          "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c555d",
      "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c555e",
      "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/1.png",
          "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/2.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5563",
      "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5578",
      "images": [
          "https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/1.png",
          "https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/2.png",
          "https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5551",
      "images": [
          "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png",
          "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/2.png",
          "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c554f",
      "images": [
          "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c556c",
      "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Mulberry/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c556f",
      "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Protein%20Powder/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5579",
      "images": [
          "https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/1.png",
          "https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/2.png",
          "https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/3.png",
          "https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5557",
      "images": [
          "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png",
          "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/2.png",
          "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5570",
      "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Red%20Onions/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5564",
      "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5571",
      "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Rice/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5582",
      "images": [
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Egg%20Slicer/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5587",
      "images": [
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Grater%20Black/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c555b",
      "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Apple/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5554",
      "images": [
          "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/1.png",
          "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/2.png",
          "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5566",
      "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5569",
      "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Kiwi/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5552",
      "images": [
          "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png",
          "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/2.png",
          "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5577",
      "images": [
          "https://cdn.dummyjson.com/products/images/home-decoration/Family%20Tree%20Photo%20Frame/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c557b",
      "images": [
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Bamboo%20Spatula/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5589",
      "images": [
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Ice%20Cube%20Tray/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c558a",
      "images": [
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Kitchen%20Sieve/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c558b",
      "images": [
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Knife/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c555c",
      "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5560",
      "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Cucumber/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c556a",
      "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Lemon/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c557c",
      "images": [
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Aluminium%20Cup/1.png",
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Aluminium%20Cup/2.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5568",
      "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Juice/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c556d",
      "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Nescafe%20Coffee/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c556e",
      "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Potatoes/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5574",
      "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Tissue%20Paper%20Box/1.png",
          "https://cdn.dummyjson.com/products/images/groceries/Tissue%20Paper%20Box/2.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5588",
      "images": [
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Hand%20Blender/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c554c",
      "images": [
          "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5565",
      "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c556b",
      "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Milk/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5572",
      "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Soft%20Drinks/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c557d",
      "images": [
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Whisk/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5586",
      "images": [
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Glass/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5573",
      "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Strawberry/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5576",
      "images": [
          "https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/1.png",
          "https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/2.png",
          "https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c557a",
      "images": [
          "https://cdn.dummyjson.com/products/images/home-decoration/Table%20Lamp/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c555f",
      "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5581",
      "images": [
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Citrus%20Squeezer%20Yellow/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5567",
      "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/1.png",
          "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/2.png",
          "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/3.png",
          "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c559a",
      "images": [
          "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/1.png",
          "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/2.png",
          "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55a1",
      "images": [
          "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/1.png",
          "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/2.png",
          "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/3.png",
          "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55c0",
      "images": [
          "https://cdn.dummyjson.com/products/images/motorcycle/Sportbike%20Motorcycle/1.png",
          "https://cdn.dummyjson.com/products/images/motorcycle/Sportbike%20Motorcycle/2.png",
          "https://cdn.dummyjson.com/products/images/motorcycle/Sportbike%20Motorcycle/3.png",
          "https://cdn.dummyjson.com/products/images/motorcycle/Sportbike%20Motorcycle/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c558f",
      "images": [
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Pan/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5599",
      "images": [
          "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/1.png",
          "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/2.png",
          "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c559f",
      "images": [
          "https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/1.png",
          "https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/2.png",
          "https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/3.png",
          "https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c558c",
      "images": [
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Lunch%20Box/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55a0",
      "images": [
          "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/1.png",
          "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/2.png",
          "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/3.png",
          "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5592",
      "images": [
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Silver%20Pot%20With%20Glass%20Cap/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c559b",
      "images": [
          "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/1.png",
          "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/2.png",
          "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55c9",
      "images": [
          "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20F19%20Pro%20Plus/1.png",
          "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20F19%20Pro%20Plus/2.png",
          "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20F19%20Pro%20Plus/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c559d",
      "images": [
          "https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/1.png",
          "https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/2.png",
          "https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55a3",
      "images": [
          "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/1.png",
          "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/2.png",
          "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/3.png",
          "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5595",
      "images": [
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Spoon/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55a9",
      "images": [
          "https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/1.png",
          "https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/2.png",
          "https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c559c",
      "images": [
          "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/1.png",
          "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/2.png",
          "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55a8",
      "images": [
          "https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/1.png",
          "https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/2.png",
          "https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55c2",
      "images": [
          "https://cdn.dummyjson.com/products/images/skin-care/Olay%20Ultra%20Moisture%20Shea%20Butter%20Body%20Wash/1.png",
          "https://cdn.dummyjson.com/products/images/skin-care/Olay%20Ultra%20Moisture%20Shea%20Butter%20Body%20Wash/2.png",
          "https://cdn.dummyjson.com/products/images/skin-care/Olay%20Ultra%20Moisture%20Shea%20Butter%20Body%20Wash/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55c4",
      "images": [
          "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/1.png",
          "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/2.png",
          "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5591",
      "images": [
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Red%20Tongs/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5594",
      "images": [
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Spice%20Rack/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55a2",
      "images": [
          "https://cdn.dummyjson.com/products/images/mens-shirts/Men%20Check%20Shirt/1.png",
          "https://cdn.dummyjson.com/products/images/mens-shirts/Men%20Check%20Shirt/2.png",
          "https://cdn.dummyjson.com/products/images/mens-shirts/Men%20Check%20Shirt/3.png",
          "https://cdn.dummyjson.com/products/images/mens-shirts/Men%20Check%20Shirt/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55a5",
      "images": [
          "https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/1.png",
          "https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/2.png",
          "https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/3.png",
          "https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55a6",
      "images": [
          "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/1.png",
          "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/2.png",
          "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/3.png",
          "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55b2",
      "images": [
          "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20HomePod%20Mini%20Cosmic%20Grey/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55bd",
      "images": [
          "https://cdn.dummyjson.com/products/images/motorcycle/Kawasaki%20Z800/1.png",
          "https://cdn.dummyjson.com/products/images/motorcycle/Kawasaki%20Z800/2.png",
          "https://cdn.dummyjson.com/products/images/motorcycle/Kawasaki%20Z800/3.png",
          "https://cdn.dummyjson.com/products/images/motorcycle/Kawasaki%20Z800/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55c7",
      "images": [
          "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/1.png",
          "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/2.png",
          "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55ca",
      "images": [
          "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20K1/1.png",
          "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20K1/2.png",
          "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20K1/3.png",
          "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20K1/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55cb",
      "images": [
          "https://cdn.dummyjson.com/products/images/smartphones/Realme%20C35/1.png",
          "https://cdn.dummyjson.com/products/images/smartphones/Realme%20C35/2.png",
          "https://cdn.dummyjson.com/products/images/smartphones/Realme%20C35/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5596",
      "images": [
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Tray/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5590",
      "images": [
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Plate/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55a7",
      "images": [
          "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/1.png",
          "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/2.png",
          "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/3.png",
          "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55ad",
      "images": [
          "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/1.png",
          "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/2.png",
          "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c558e",
      "images": [
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Mug%20Tree%20Stand/1.png",
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Mug%20Tree%20Stand/2.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55b4",
      "images": [
          "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20MagSafe%20Battery%20Pack/1.png",
          "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20MagSafe%20Battery%20Pack/2.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55bc",
      "images": [
          "https://cdn.dummyjson.com/products/images/motorcycle/Generic%20Motorcycle/1.png",
          "https://cdn.dummyjson.com/products/images/motorcycle/Generic%20Motorcycle/2.png",
          "https://cdn.dummyjson.com/products/images/motorcycle/Generic%20Motorcycle/3.png",
          "https://cdn.dummyjson.com/products/images/motorcycle/Generic%20Motorcycle/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55c3",
      "images": [
          "https://cdn.dummyjson.com/products/images/skin-care/Vaseline%20Men%20Body%20and%20Face%20Lotion/1.png",
          "https://cdn.dummyjson.com/products/images/skin-care/Vaseline%20Men%20Body%20and%20Face%20Lotion/2.png",
          "https://cdn.dummyjson.com/products/images/skin-care/Vaseline%20Men%20Body%20and%20Face%20Lotion/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55c8",
      "images": [
          "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20A57/1.png",
          "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20A57/2.png",
          "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20A57/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55b0",
      "images": [
          "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55c1",
      "images": [
          "https://cdn.dummyjson.com/products/images/skin-care/Attitude%20Super%20Leaves%20Hand%20Soap/1.png",
          "https://cdn.dummyjson.com/products/images/skin-care/Attitude%20Super%20Leaves%20Hand%20Soap/2.png",
          "https://cdn.dummyjson.com/products/images/skin-care/Attitude%20Super%20Leaves%20Hand%20Soap/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55ab",
      "images": [
          "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/1.png",
          "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/2.png",
          "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55b8",
      "images": [
          "https://cdn.dummyjson.com/products/images/mobile-accessories/Monopod/1.png",
          "https://cdn.dummyjson.com/products/images/mobile-accessories/Monopod/2.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55be",
      "images": [
          "https://cdn.dummyjson.com/products/images/motorcycle/MotoGP%20CI.H1/1.png",
          "https://cdn.dummyjson.com/products/images/motorcycle/MotoGP%20CI.H1/2.png",
          "https://cdn.dummyjson.com/products/images/motorcycle/MotoGP%20CI.H1/3.png",
          "https://cdn.dummyjson.com/products/images/motorcycle/MotoGP%20CI.H1/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55ae",
      "images": [
          "https://cdn.dummyjson.com/products/images/mobile-accessories/Amazon%20Echo%20Plus/1.png",
          "https://cdn.dummyjson.com/products/images/mobile-accessories/Amazon%20Echo%20Plus/2.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55b6",
      "images": [
          "https://cdn.dummyjson.com/products/images/mobile-accessories/Beats%20Flex%20Wireless%20Earphones/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55ba",
      "images": [
          "https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Stick%20Monopod/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5598",
      "images": [
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Yellow%20Peeler/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55b1",
      "images": [
          "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpower%20Wireless%20Charger/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55bb",
      "images": [
          "https://cdn.dummyjson.com/products/images/mobile-accessories/TV%20Studio%20Camera%20Pedestal/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55bf",
      "images": [
          "https://cdn.dummyjson.com/products/images/motorcycle/Scooter%20Motorcycle/1.png",
          "https://cdn.dummyjson.com/products/images/motorcycle/Scooter%20Motorcycle/2.png",
          "https://cdn.dummyjson.com/products/images/motorcycle/Scooter%20Motorcycle/3.png",
          "https://cdn.dummyjson.com/products/images/motorcycle/Scooter%20Motorcycle/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c559e",
      "images": [
          "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/1.png",
          "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/2.png",
          "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/3.png",
          "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55b3",
      "images": [
          "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20iPhone%20Charger/1.png",
          "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20iPhone%20Charger/2.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55b9",
      "images": [
          "https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Lamp%20with%20iPhone/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55c5",
      "images": [
          "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/1.png",
          "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/2.png",
          "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c558d",
      "images": [
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Microwave%20Oven/1.png",
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Microwave%20Oven/2.png",
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Microwave%20Oven/3.png",
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Microwave%20Oven/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5593",
      "images": [
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Slotted%20Turner/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5597",
      "images": [
          "https://cdn.dummyjson.com/products/images/kitchen-accessories/Wooden%20Rolling%20Pin/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55a4",
      "images": [
          "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/1.png",
          "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/2.png",
          "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/3.png",
          "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55aa",
      "images": [
          "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Date%20Black%20Dial/1.png",
          "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Date%20Black%20Dial/2.png",
          "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Date%20Black%20Dial/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55ac",
      "images": [
          "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Datejust/1.png",
          "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Datejust/2.png",
          "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Datejust/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55af",
      "images": [
          "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/1.png",
          "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/2.png",
          "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55b5",
      "images": [
          "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Watch%20Series%204%20Gold/1.png",
          "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Watch%20Series%204%20Gold/2.png",
          "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Watch%20Series%204%20Gold/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55b7",
      "images": [
          "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/1.png",
          "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/2.png",
          "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/3.png",
          "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55c6",
      "images": [
          "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/1.png",
          "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/2.png",
          "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55dc",
      "images": [
          "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Wicket/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55cc",
      "images": [
          "https://cdn.dummyjson.com/products/images/smartphones/Realme%20X/1.png",
          "https://cdn.dummyjson.com/products/images/smartphones/Realme%20X/2.png",
          "https://cdn.dummyjson.com/products/images/smartphones/Realme%20X/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55f3",
      "images": [
          "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/1.png",
          "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/2.png",
          "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/3.png",
          "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/4.png",
          "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/5.png",
          "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/6.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5601",
      "images": [
          "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Crystal%20Earring/1.png",
          "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Crystal%20Earring/2.png",
          "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Crystal%20Earring/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55d2",
      "images": [
          "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20V9/1.png",
          "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20V9/2.png",
          "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20V9/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5609",
      "images": [
          "https://cdn.dummyjson.com/products/images/womens-watches/IWC%20Ingenieur%20Automatic%20Steel/1.png",
          "https://cdn.dummyjson.com/products/images/womens-watches/IWC%20Ingenieur%20Automatic%20Steel/2.png",
          "https://cdn.dummyjson.com/products/images/womens-watches/IWC%20Ingenieur%20Automatic%20Steel/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55d7",
      "images": [
          "https://cdn.dummyjson.com/products/images/sports-accessories/Basketball/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5607",
      "images": [
          "https://cdn.dummyjson.com/products/images/womens-shoes/Pampi%20Shoes/1.png",
          "https://cdn.dummyjson.com/products/images/womens-shoes/Pampi%20Shoes/2.png",
          "https://cdn.dummyjson.com/products/images/womens-shoes/Pampi%20Shoes/3.png",
          "https://cdn.dummyjson.com/products/images/womens-shoes/Pampi%20Shoes/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55d0",
      "images": [
          "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S10/1.png",
          "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S10/2.png",
          "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S10/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55fd",
      "images": [
          "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20Leather%20With%20Skirt/1.png",
          "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20Leather%20With%20Skirt/2.png",
          "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20Leather%20With%20Skirt/3.png",
          "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20Leather%20With%20Skirt/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55ce",
      "images": [
          "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S7/1.png",
          "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S7/2.png",
          "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S7/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55d4",
      "images": [
          "https://cdn.dummyjson.com/products/images/sports-accessories/American%20Football/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55d6",
      "images": [
          "https://cdn.dummyjson.com/products/images/sports-accessories/Baseball%20Glove/1.png",
          "https://cdn.dummyjson.com/products/images/sports-accessories/Baseball%20Glove/2.png",
          "https://cdn.dummyjson.com/products/images/sports-accessories/Baseball%20Glove/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55e5",
      "images": [
          "https://cdn.dummyjson.com/products/images/sunglasses/Black%20Sun%20Glasses/1.png",
          "https://cdn.dummyjson.com/products/images/sunglasses/Black%20Sun%20Glasses/2.png",
          "https://cdn.dummyjson.com/products/images/sunglasses/Black%20Sun%20Glasses/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55e7",
      "images": [
          "https://cdn.dummyjson.com/products/images/sunglasses/Green%20and%20Black%20Glasses/1.png",
          "https://cdn.dummyjson.com/products/images/sunglasses/Green%20and%20Black%20Glasses/2.png",
          "https://cdn.dummyjson.com/products/images/sunglasses/Green%20and%20Black%20Glasses/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55eb",
      "images": [
          "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S8%20Plus%20Grey/1.png",
          "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S8%20Plus%20Grey/2.png",
          "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S8%20Plus%20Grey/3.png",
          "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S8%20Plus%20Grey/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5603",
      "images": [
          "https://cdn.dummyjson.com/products/images/womens-jewellery/Tropical%20Earring/1.png",
          "https://cdn.dummyjson.com/products/images/womens-jewellery/Tropical%20Earring/2.png",
          "https://cdn.dummyjson.com/products/images/womens-jewellery/Tropical%20Earring/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55cf",
      "images": [
          "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S8/1.png",
          "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S8/2.png",
          "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S8/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55de",
      "images": [
          "https://cdn.dummyjson.com/products/images/sports-accessories/Football/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55f2",
      "images": [
          "https://cdn.dummyjson.com/products/images/vehicle/300%20Touring/1.png",
          "https://cdn.dummyjson.com/products/images/vehicle/300%20Touring/2.png",
          "https://cdn.dummyjson.com/products/images/vehicle/300%20Touring/3.png",
          "https://cdn.dummyjson.com/products/images/vehicle/300%20Touring/4.png",
          "https://cdn.dummyjson.com/products/images/vehicle/300%20Touring/5.png",
          "https://cdn.dummyjson.com/products/images/vehicle/300%20Touring/6.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55f4",
      "images": [
          "https://cdn.dummyjson.com/products/images/vehicle/Dodge%20Hornet%20GT%20Plus/1.png",
          "https://cdn.dummyjson.com/products/images/vehicle/Dodge%20Hornet%20GT%20Plus/2.png",
          "https://cdn.dummyjson.com/products/images/vehicle/Dodge%20Hornet%20GT%20Plus/3.png",
          "https://cdn.dummyjson.com/products/images/vehicle/Dodge%20Hornet%20GT%20Plus/4.png",
          "https://cdn.dummyjson.com/products/images/vehicle/Dodge%20Hornet%20GT%20Plus/5.png",
          "https://cdn.dummyjson.com/products/images/vehicle/Dodge%20Hornet%20GT%20Plus/6.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55ff",
      "images": [
          "https://cdn.dummyjson.com/products/images/womens-dresses/Dress%20Pea/1.png",
          "https://cdn.dummyjson.com/products/images/womens-dresses/Dress%20Pea/2.png",
          "https://cdn.dummyjson.com/products/images/womens-dresses/Dress%20Pea/3.png",
          "https://cdn.dummyjson.com/products/images/womens-dresses/Dress%20Pea/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5604",
      "images": [
          "https://cdn.dummyjson.com/products/images/womens-shoes/Black%20&%20Brown%20Slipper/1.png",
          "https://cdn.dummyjson.com/products/images/womens-shoes/Black%20&%20Brown%20Slipper/2.png",
          "https://cdn.dummyjson.com/products/images/womens-shoes/Black%20&%20Brown%20Slipper/3.png",
          "https://cdn.dummyjson.com/products/images/womens-shoes/Black%20&%20Brown%20Slipper/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55f6",
      "images": [
          "https://cdn.dummyjson.com/products/images/vehicle/Pacifica%20Touring/1.png",
          "https://cdn.dummyjson.com/products/images/vehicle/Pacifica%20Touring/2.png",
          "https://cdn.dummyjson.com/products/images/vehicle/Pacifica%20Touring/3.png",
          "https://cdn.dummyjson.com/products/images/vehicle/Pacifica%20Touring/4.png",
          "https://cdn.dummyjson.com/products/images/vehicle/Pacifica%20Touring/5.png",
          "https://cdn.dummyjson.com/products/images/vehicle/Pacifica%20Touring/6.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55d1",
      "images": [
          "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20S1/1.png",
          "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20S1/2.png",
          "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20S1/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55cd",
      "images": [
          "https://cdn.dummyjson.com/products/images/smartphones/Realme%20XT/1.png",
          "https://cdn.dummyjson.com/products/images/smartphones/Realme%20XT/2.png",
          "https://cdn.dummyjson.com/products/images/smartphones/Realme%20XT/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55e9",
      "images": [
          "https://cdn.dummyjson.com/products/images/sunglasses/Sunglasses/1.png",
          "https://cdn.dummyjson.com/products/images/sunglasses/Sunglasses/2.png",
          "https://cdn.dummyjson.com/products/images/sunglasses/Sunglasses/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55fc",
      "images": [
          "https://cdn.dummyjson.com/products/images/womens-dresses/Black%20Women's%20Gown/1.png",
          "https://cdn.dummyjson.com/products/images/womens-dresses/Black%20Women's%20Gown/2.png",
          "https://cdn.dummyjson.com/products/images/womens-dresses/Black%20Women's%20Gown/3.png",
          "https://cdn.dummyjson.com/products/images/womens-dresses/Black%20Women's%20Gown/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55d8",
      "images": [
          "https://cdn.dummyjson.com/products/images/sports-accessories/Basketball%20Rim/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55e3",
      "images": [
          "https://cdn.dummyjson.com/products/images/sports-accessories/Tennis%20Racket/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55e4",
      "images": [
          "https://cdn.dummyjson.com/products/images/sports-accessories/Volleyball/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55ea",
      "images": [
          "https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/1.png",
          "https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/2.png",
          "https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/3.png",
          "https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55ed",
      "images": [
          "https://cdn.dummyjson.com/products/images/tops/Blue%20Frock/1.png",
          "https://cdn.dummyjson.com/products/images/tops/Blue%20Frock/2.png",
          "https://cdn.dummyjson.com/products/images/tops/Blue%20Frock/3.png",
          "https://cdn.dummyjson.com/products/images/tops/Blue%20Frock/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55fe",
      "images": [
          "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20With%20Black%20Skirt/1.png",
          "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20With%20Black%20Skirt/2.png",
          "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20With%20Black%20Skirt/3.png",
          "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20With%20Black%20Skirt/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55dd",
      "images": [
          "https://cdn.dummyjson.com/products/images/sports-accessories/Feather%20Shuttlecock/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55d5",
      "images": [
          "https://cdn.dummyjson.com/products/images/sports-accessories/Baseball%20Ball/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55e6",
      "images": [
          "https://cdn.dummyjson.com/products/images/sunglasses/Classic%20Sun%20Glasses/1.png",
          "https://cdn.dummyjson.com/products/images/sunglasses/Classic%20Sun%20Glasses/2.png",
          "https://cdn.dummyjson.com/products/images/sunglasses/Classic%20Sun%20Glasses/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55f5",
      "images": [
          "https://cdn.dummyjson.com/products/images/vehicle/Durango%20SXT%20RWD/1.png",
          "https://cdn.dummyjson.com/products/images/vehicle/Durango%20SXT%20RWD/2.png",
          "https://cdn.dummyjson.com/products/images/vehicle/Durango%20SXT%20RWD/3.png",
          "https://cdn.dummyjson.com/products/images/vehicle/Durango%20SXT%20RWD/4.png",
          "https://cdn.dummyjson.com/products/images/vehicle/Durango%20SXT%20RWD/5.png",
          "https://cdn.dummyjson.com/products/images/vehicle/Durango%20SXT%20RWD/6.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55d3",
      "images": [
          "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20X21/1.png",
          "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20X21/2.png",
          "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20X21/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55da",
      "images": [
          "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Bat/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55ec",
      "images": [
          "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20White/1.png",
          "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20White/2.png",
          "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20White/3.png",
          "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20White/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5605",
      "images": [
          "https://cdn.dummyjson.com/products/images/womens-shoes/Calvin%20Klein%20Heel%20Shoes/1.png",
          "https://cdn.dummyjson.com/products/images/womens-shoes/Calvin%20Klein%20Heel%20Shoes/2.png",
          "https://cdn.dummyjson.com/products/images/womens-shoes/Calvin%20Klein%20Heel%20Shoes/3.png",
          "https://cdn.dummyjson.com/products/images/womens-shoes/Calvin%20Klein%20Heel%20Shoes/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5608",
      "images": [
          "https://cdn.dummyjson.com/products/images/womens-shoes/Red%20Shoes/1.png",
          "https://cdn.dummyjson.com/products/images/womens-shoes/Red%20Shoes/2.png",
          "https://cdn.dummyjson.com/products/images/womens-shoes/Red%20Shoes/3.png",
          "https://cdn.dummyjson.com/products/images/womens-shoes/Red%20Shoes/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55db",
      "images": [
          "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/1.png",
          "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/2.png",
          "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/3.png",
          "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55ee",
      "images": [
          "https://cdn.dummyjson.com/products/images/tops/Girl%20Summer%20Dress/1.png",
          "https://cdn.dummyjson.com/products/images/tops/Girl%20Summer%20Dress/2.png",
          "https://cdn.dummyjson.com/products/images/tops/Girl%20Summer%20Dress/3.png",
          "https://cdn.dummyjson.com/products/images/tops/Girl%20Summer%20Dress/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55f1",
      "images": [
          "https://cdn.dummyjson.com/products/images/tops/Tartan%20Dress/1.png",
          "https://cdn.dummyjson.com/products/images/tops/Tartan%20Dress/2.png",
          "https://cdn.dummyjson.com/products/images/tops/Tartan%20Dress/3.png",
          "https://cdn.dummyjson.com/products/images/tops/Tartan%20Dress/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55f7",
      "images": [
          "https://cdn.dummyjson.com/products/images/womens-bags/Blue%20Women's%20Handbag/1.png",
          "https://cdn.dummyjson.com/products/images/womens-bags/Blue%20Women's%20Handbag/2.png",
          "https://cdn.dummyjson.com/products/images/womens-bags/Blue%20Women's%20Handbag/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55f8",
      "images": [
          "https://cdn.dummyjson.com/products/images/womens-bags/Heshe%20Women's%20Leather%20Bag/1.png",
          "https://cdn.dummyjson.com/products/images/womens-bags/Heshe%20Women's%20Leather%20Bag/2.png",
          "https://cdn.dummyjson.com/products/images/womens-bags/Heshe%20Women's%20Leather%20Bag/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55fa",
      "images": [
          "https://cdn.dummyjson.com/products/images/womens-bags/White%20Faux%20Leather%20Backpack/1.png",
          "https://cdn.dummyjson.com/products/images/womens-bags/White%20Faux%20Leather%20Backpack/2.png",
          "https://cdn.dummyjson.com/products/images/womens-bags/White%20Faux%20Leather%20Backpack/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55d9",
      "images": [
          "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Ball/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55e0",
      "images": [
          "https://cdn.dummyjson.com/products/images/sports-accessories/Iron%20Golf/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55e1",
      "images": [
          "https://cdn.dummyjson.com/products/images/sports-accessories/Metal%20Baseball%20Bat/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55e2",
      "images": [
          "https://cdn.dummyjson.com/products/images/sports-accessories/Tennis%20Ball/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55e8",
      "images": [
          "https://cdn.dummyjson.com/products/images/sunglasses/Party%20Glasses/1.png",
          "https://cdn.dummyjson.com/products/images/sunglasses/Party%20Glasses/2.png",
          "https://cdn.dummyjson.com/products/images/sunglasses/Party%20Glasses/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55f0",
      "images": [
          "https://cdn.dummyjson.com/products/images/tops/Short%20Frock/1.png",
          "https://cdn.dummyjson.com/products/images/tops/Short%20Frock/2.png",
          "https://cdn.dummyjson.com/products/images/tops/Short%20Frock/3.png",
          "https://cdn.dummyjson.com/products/images/tops/Short%20Frock/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55f9",
      "images": [
          "https://cdn.dummyjson.com/products/images/womens-bags/Prada%20Women%20Bag/1.png",
          "https://cdn.dummyjson.com/products/images/womens-bags/Prada%20Women%20Bag/2.png",
          "https://cdn.dummyjson.com/products/images/womens-bags/Prada%20Women%20Bag/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55fb",
      "images": [
          "https://cdn.dummyjson.com/products/images/womens-bags/Women%20Handbag%20Black/1.png",
          "https://cdn.dummyjson.com/products/images/womens-bags/Women%20Handbag%20Black/2.png",
          "https://cdn.dummyjson.com/products/images/womens-bags/Women%20Handbag%20Black/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55ef",
      "images": [
          "https://cdn.dummyjson.com/products/images/tops/Gray%20Dress/1.png",
          "https://cdn.dummyjson.com/products/images/tops/Gray%20Dress/2.png",
          "https://cdn.dummyjson.com/products/images/tops/Gray%20Dress/3.png",
          "https://cdn.dummyjson.com/products/images/tops/Gray%20Dress/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5602",
      "images": [
          "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/1.png",
          "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/2.png",
          "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/3.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c55df",
      "images": [
          "https://cdn.dummyjson.com/products/images/sports-accessories/Golf%20Ball/1.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5600",
      "images": [
          "https://cdn.dummyjson.com/products/images/womens-dresses/Marni%20Red%20&%20Black%20Suit/1.png",
          "https://cdn.dummyjson.com/products/images/womens-dresses/Marni%20Red%20&%20Black%20Suit/2.png",
          "https://cdn.dummyjson.com/products/images/womens-dresses/Marni%20Red%20&%20Black%20Suit/3.png",
          "https://cdn.dummyjson.com/products/images/womens-dresses/Marni%20Red%20&%20Black%20Suit/4.png"
      ]
  },
  {
      "id": "66d69785eca2aa29478c5606",
      "images": [
          "https://cdn.dummyjson.com/products/images/womens-shoes/Golden%20Shoes%20Woman/1.png",
          "https://cdn.dummyjson.com/products/images/womens-shoes/Golden%20Shoes%20Woman/2.png",
          "https://cdn.dummyjson.com/products/images/womens-shoes/Golden%20Shoes%20Woman/3.png",
          "https://cdn.dummyjson.com/products/images/womens-shoes/Golden%20Shoes%20Woman/4.png"
      ]
  }
]
const downloadAndConvertToWebP = async (url, outputPath) => {
    try {
      // Step 1: Download the image using axios
      const response = await axios({
        url,
        method: "GET",
        responseType: "arraybuffer", // Get the image data as a buffer
      });
  
      // Step 2: Convert the image to WebP using sharp
      const webpBuffer = await sharp(response.data).webp().toBuffer();
  
      // Step 3: Save the WebP image to the public/images directory
      fs.writeFileSync(outputPath, webpBuffer);
      console.log(`Image saved as WebP at ${outputPath}`);
    } catch (error) {
      console.error(`Error downloading or converting image from ${url}:`, error.message);
    }
  };
  
  const downloadImagesFromUrls = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const outputDir = path.join(__dirname, "public", "productimages");
  
    // Ensure the output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
  
    // Read URLs from the file
    
  
    for (let image of productImages) {
      try {
        const id = image.id;
        // console.log(id)
        for(let i = 0; i < image.images.length; i++){ 
            // console.log(image.images[i])
            const fileName = `${id}${i + 1}.webp`; // Save each image as a WebP file
            const outputPath = path.join(outputDir, fileName);
            await downloadAndConvertToWebP(image.images[i], outputPath);
            
          }
        // const fileName = `image${index + 1}.webp`; // Save each image as a WebP file
        // const outputPath = path.join(outputDir, fileName);
        // await downloadAndConvertToWebP(url, outputPath);
      } catch (error) {
        console.error(`Failed to process ${url}:`, error.message);
      }
    }
  
    console.log("All images processed!");
  };
  
  

// console.log(__dirname);
  downloadImagesFromUrls();