import axios from "axios"
import sharp from "sharp"
import fs from "fs"
import { fileURLToPath } from "url"
import path,{dirname} from "path"
const thumbnails = [
    "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/groceries/Water/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/kitchen-accessories/Fork/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/kitchen-accessories/Chopping%20Board/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/kitchen-accessories/Fine%20Mesh%20Strainer/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/groceries/Eggs/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/kitchen-accessories/Electric%20Stove/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/kitchen-accessories/Carbon%20Steel%20Wok/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/groceries/Mulberry/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/groceries/Protein%20Powder/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/groceries/Red%20Onions/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/groceries/Rice/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/kitchen-accessories/Egg%20Slicer/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/kitchen-accessories/Grater%20Black/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/groceries/Apple/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/groceries/Kiwi/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/home-decoration/Family%20Tree%20Photo%20Frame/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/kitchen-accessories/Bamboo%20Spatula/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/kitchen-accessories/Ice%20Cube%20Tray/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/kitchen-accessories/Kitchen%20Sieve/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/kitchen-accessories/Knife/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/groceries/Cucumber/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/groceries/Lemon/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Aluminium%20Cup/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/groceries/Juice/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/groceries/Nescafe%20Coffee/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/groceries/Potatoes/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/groceries/Tissue%20Paper%20Box/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/kitchen-accessories/Hand%20Blender/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/groceries/Milk/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/groceries/Soft%20Drinks/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Whisk/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/kitchen-accessories/Glass/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/groceries/Strawberry/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/home-decoration/Table%20Lamp/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/kitchen-accessories/Citrus%20Squeezer%20Yellow/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/motorcycle/Sportbike%20Motorcycle/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/kitchen-accessories/Pan/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/kitchen-accessories/Lunch%20Box/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/kitchen-accessories/Silver%20Pot%20With%20Glass%20Cap/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20F19%20Pro%20Plus/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/kitchen-accessories/Spoon/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/skin-care/Olay%20Ultra%20Moisture%20Shea%20Butter%20Body%20Wash/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/kitchen-accessories/Red%20Tongs/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/kitchen-accessories/Spice%20Rack/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/mens-shirts/Men%20Check%20Shirt/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20HomePod%20Mini%20Cosmic%20Grey/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/motorcycle/Kawasaki%20Z800/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20K1/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/smartphones/Realme%20C35/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/kitchen-accessories/Tray/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/kitchen-accessories/Plate/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/kitchen-accessories/Mug%20Tree%20Stand/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20MagSafe%20Battery%20Pack/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/motorcycle/Generic%20Motorcycle/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/skin-care/Vaseline%20Men%20Body%20and%20Face%20Lotion/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20A57/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/skin-care/Attitude%20Super%20Leaves%20Hand%20Soap/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/mobile-accessories/Monopod/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/motorcycle/MotoGP%20CI.H1/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/mobile-accessories/Amazon%20Echo%20Plus/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/mobile-accessories/Beats%20Flex%20Wireless%20Earphones/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Stick%20Monopod/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/kitchen-accessories/Yellow%20Peeler/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpower%20Wireless%20Charger/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/mobile-accessories/TV%20Studio%20Camera%20Pedestal/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/motorcycle/Scooter%20Motorcycle/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20iPhone%20Charger/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Lamp%20with%20iPhone/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/kitchen-accessories/Microwave%20Oven/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/kitchen-accessories/Slotted%20Turner/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/kitchen-accessories/Wooden%20Rolling%20Pin/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Date%20Black%20Dial/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Datejust/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Watch%20Series%204%20Gold/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Wicket/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/smartphones/Realme%20X/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Crystal%20Earring/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20V9/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/womens-watches/IWC%20Ingenieur%20Automatic%20Steel/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/sports-accessories/Basketball/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/womens-shoes/Pampi%20Shoes/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S10/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20Leather%20With%20Skirt/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S7/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/sports-accessories/American%20Football/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/sports-accessories/Baseball%20Glove/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/sunglasses/Black%20Sun%20Glasses/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/sunglasses/Green%20and%20Black%20Glasses/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S8%20Plus%20Grey/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/womens-jewellery/Tropical%20Earring/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S8/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/sports-accessories/Football/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/vehicle/300%20Touring/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/vehicle/Dodge%20Hornet%20GT%20Plus/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/womens-dresses/Dress%20Pea/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/womens-shoes/Black%20&%20Brown%20Slipper/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/vehicle/Pacifica%20Touring/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20S1/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/smartphones/Realme%20XT/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/sunglasses/Sunglasses/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/womens-dresses/Black%20Women's%20Gown/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/sports-accessories/Basketball%20Rim/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/sports-accessories/Tennis%20Racket/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/sports-accessories/Volleyball/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/tops/Blue%20Frock/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20With%20Black%20Skirt/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/sports-accessories/Feather%20Shuttlecock/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/sports-accessories/Baseball%20Ball/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/sunglasses/Classic%20Sun%20Glasses/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/vehicle/Durango%20SXT%20RWD/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20X21/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Bat/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20White/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/womens-shoes/Calvin%20Klein%20Heel%20Shoes/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/womens-shoes/Red%20Shoes/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/tops/Girl%20Summer%20Dress/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/tops/Tartan%20Dress/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/womens-bags/Blue%20Women's%20Handbag/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/womens-bags/Heshe%20Women's%20Leather%20Bag/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/womens-bags/White%20Faux%20Leather%20Backpack/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Ball/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/sports-accessories/Iron%20Golf/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/sports-accessories/Metal%20Baseball%20Bat/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/sports-accessories/Tennis%20Ball/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/sunglasses/Party%20Glasses/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/tops/Short%20Frock/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/womens-bags/Prada%20Women%20Bag/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/womens-bags/Women%20Handbag%20Black/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/tops/Gray%20Dress/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/sports-accessories/Golf%20Ball/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/womens-dresses/Marni%20Red%20&%20Black%20Suit/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/womens-shoes/Golden%20Shoes%20Woman/thumbnail.png"
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
    const outputDir = path.join(__dirname, "public", "images");
  
    // Ensure the output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
  
    // Read URLs from the file
    
  
    for (const [index, url] of thumbnails.entries()) {
      try {

        const fileName = `image${index + 1}.webp`; // Save each image as a WebP file
        const outputPath = path.join(outputDir, fileName);
        await downloadAndConvertToWebP(url, outputPath);
      } catch (error) {
        console.error(`Failed to process ${url}:`, error.message);
      }
    }
  
    console.log("All images processed!");
  };
  
  

// console.log(__dirname);
  downloadImagesFromUrls();