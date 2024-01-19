
'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import ActionAreaCard from './viewProductsCard';
import style from './ViewProducts.module.css';
const ViewMyProducts = ({ sellerId }) => {


  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [electronics, setElectronics] = useState([]);
  const [kitchen, setKitchen] = useState([]);
  const [clothing, setClothing] = useState([]);
  const [sports, setSports] = useState([]);
  const [automotive, setAutomotive] = useState([]);
  const [beauty, setBeauty] = useState([]);
  const [books, setBooks] = useState([])
  const [health, setHealth] = useState([]);
  const [kidsandtoys, setKidsandtoys] = useState([]);
  const [homeandgarden, setHomeandgarden] = useState([]);



  const mockProducts = [
    {
      id: 1,
      name: "Product 1",
      description: "Description 1",
      price: 1.00,
      category:"Electronics",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description 2",
      price: 2.00,
      category:"Kitchen",

    },
    {
      id: 3,
      name: "Product 3",
      description: "Description 3",
      price: 3.00,
      category:"Clothing",
    },
    {
      id: 4,
      name: "Product 4",
      description: "Description 4",
      price: 4.00,
      category:"Health",

    },
    {
      id: 5,
      name: "Product 5",
      description: "Description 5",
      price: 5.00,
      category:"kids and toys",
    },
    {
      id: 6,
      name: "Product 6",
      description: "Description 6",
      price: 6.00,
      category:"home and garden",
    },
    {
      id: 7,
      name: "Product 7",
      description: "Description 7",
      price: 7.00,
      category:"Sports",
    },
    {
      id: 8,
      name: "Product 8",
      description: "Description 8",
      price: 8.00,
      category:"Automotive",
    },
    {
      id: 9,
      name: "Product 9",
      description: "Description 9",
      price: 9.00,
      category:"Beauty",
    },
    {
      id: 10,
      name: "Product 10",
      description: "Description 10",
      price: 10.00,
      category:"Books",
    },
    {
      id: 11,
      name: "Product 11",
      description: "Description 11",
      price: 11.00,
      category:"Electronics",
    },
    {
      id: 12,
      name: "Product 12",
      description: "Description 12",
      price: 12.00,
      category:"Kitchen",

    },
    {
      id: 13,
      name: "Product 13",
      description: "Description 13",
      price: 13.00,
      category:"Clothing",
    },
    {
      id: 14,
      name: "Product 14",
      description: "Description 14",
      price: 14.00,
      category:"Health",
    },
    {
      id: 15,
      name: "Product 15",
      description: "Description 15",
      price: 15.00,
      category:"kids and toys",
    },
    {
      id: 16,
      name: "Product 16",
      description: "Description 16",
      price: 16.00,
      category:"home and garden",
    },
    {
      id: 17,
      name: "Product 17",
      description: "Description 17",
      price: 17.00,
      category:"Sports",
    },
    {
      id: 18,
      name: "Product 18",
      description: "Description 18",
      price: 18.00,
      category:"Automotive",
    },
    {
      id: 19,
      name: "Product 19",
      description: "Description 19",
      price: 19.00,
      category:"Beauty",
    },
    {
      id: 20,
      name: "Product 20",
      description: "Description 20",
      price: 20.00,
      category:"Books",
    },
    {
      id: 21,
      name: "Product 21",
      description: "Description 21",
      price: 21.00,
      category:"Electronics",
    },
    {
      id: 22,
      name: "Product 22",
      description: "Description 22",
      price: 22.00,
      category:"Kitchen",
    },
    {
      id: 23,
      name: "Product 23",
      description: "Description 23",
      price: 23.00,
      category:"Clothing",
    },
    {
      id: 24,
      name: "Product 24",
      description: "Description 24",
      price: 24.00,
      category:"Health",
    },
    {
      id: 25,
      name: "Product 25",
      description: "Description 25",
      price: 25.00,
      category:"kids and toys",
    },
    {
      id: 26,
      name: "Product 26",
      description: "Description 26",
      price: 26.00,
      category:"home and garden",
    },
    {
      id: 27,
      name: "Product 27",
      description: "Description 27",
      price: 27.00,
      category:"Sports",
    },
    {
      id: 28,
      name: "Product 28",
      description: "Description 28",
      price: 28.00,
      category:"Automotive",
    },
    {
      id: 29,
      name: "Product 29",
      description: "Description 29",
      price: 29.00,
      category:"Beauty",
    },
    {
      id: 30,
      name: "Product 30",
      description: "Description 30",
      price: 30.00,
      category:"Books",
    },
    {
      id: 31,
      name: "Product 31",
      description: "Description 31",
      price: 31.00,
      category:"Electronics",
    },
    {
      id: 32,
      name: "Product 32",
      description: "Description 32",
      price: 32.00,
      category:"Kitchen",
    },
    {
      id: 33,
      name: "Product 33",
      description: "Description 33",
      price: 33.00,
      category:"Clothing",
    },
    {
      id: 34,
      name: "Product 34",
      description: "Description 34",
      price: 34.00,
      category:"Health",
    },
    {
      id: 35,
      name: "Product 35",
      description: "Description 35",
      price: 35.00,
      category:"kids and toys",
    },
    {
      id: 36,
      name: "Product 36",
      description: "Description 36",
      price: 36.00,
      category:"home and garden",
    },
    {
      id: 37,
      name: "Product 37",
      description: "Description 37",
      price: 37.00,
      category:"Sports",
    },
    {
      id: 38,
      name: "Product 38",
      description: "Description 38",
      price: 38.00,
      category:"Automotive",
    },
    {
      id: 39,
      name: "Product 39",
      description: "Description 39",
      price: 39.00,
      category:"Beauty",
    },
    {
      id: 40,
      name: "Product 40",
      description: "Description 40",
      price: 40.00,
      category:"Books",
    },
    {
      id: 41,
      name: "Product 41",
      description: "Description 41",
      price: 41.00,
      category:"Electronics",
    },
    {
      id: 42,
      name: "Product 42",
      description: "Description 42",
      price: 42.00,
      category:"Kitchen",
    },
    {
      id: 43,
      name: "Product 43",
      description: "Description 43",
      price: 43.00,
      category:"Clothing",
    },
    {
      id: 44,
      name: "Product 44",
      description: "Description 44",
      price: 44.00,
      category:"Health",
    },
    {
      id: 45,
      name: "Product 45",
      description: "Description 45",
      price: 45.00,
      category:"kids and toys",
    },
    {
      id: 46,
      name: "Product 46",
      description: "Description 46",
      price: 46.00,
      category:"home and garden",
    },
    {
      id: 47,
      name: "Product 47",
      description: "Description 47",
      price: 47.00,
      category:"Sports",
    },
    {
      id: 48,
      name: "Product 48",
      description: "Description 48",
      price: 48.00,
      category:"Automotive",
    },
    {
      id: 49,
      name: "Product 49",
      description: "Description 49",
      price: 49.00,
      category:"Beauty",
    },
    {
      id: 50,
      name: "Product 50",
      description: "Description 50",
      price: 50.00,
      category:"Books",
    },
    {
      id: 51,
      name: "Product 51",
      description: "Description 51",
      price: 51.00,
      category:"Electronics",
    },
    {
      id: 52,
      name: "Product 52",
      description: "Description 52",
      price: 52.00,
      category:"Kitchen",
    },
    {
      id: 53,
      name: "Product 53",
      description: "Description 53",
      price: 53.00,
      category:"Clothing",
    },
    {
      id: 54,
      name: "Product 54",
      description: "Description 54",
      price: 54.00,
      category:"Health",
    },
    {
      id: 55,
      name: "Product 55",
      description: "Description 55",
      price: 55.00,
      category:"kids and toys",
    },
    {
      id: 56,
      name: "Product 56",
      description: "Description 56",
      price: 56.00,
      category:"home and garden",
    },
    {
      id: 57,
      name: "Product 57",
      description: "Description 57",
      price: 57.00,
      category:"Sports",
    },
    {
      id: 58,
      name: "Product 58",
      description: "Description 58",
      price: 58.00,
      category:"Automotive",
    },
    {
      id: 59,
      name: "Product 59",
      description: "Description 59",
      price: 59.00,
      category:"Beauty",
    },
    {
      id: 60,
      name: "Product 60",
      description: "Description 60",
      price: 60.00,
      category:"Books",
    },
    {
      id: 61,
      name: "Product 61",
      description: "Description 61",
      price: 61.00,
      category:"Electronics",
    },
    {
      id: 62,
      name: "Product 62",
      description: "Description 62",
      price: 62.00,
      category:"Kitchen",
    },
    {
      id: 63,
      name: "Product 63",
      description: "Description 63",
      price: 63.00,
      category:"Clothing",
    },
    {
      id: 64,
      name: "Product 64",
      description: "Description 64",
      price: 64.00,
      category:"Health",
    },
    {
      id: 65,
      name: "Product 65",
      description: "Description 65",
      price: 65.00,
      category:"kids and toys",
    },
    {
      id: 66,
      name: "Product 66",
      description: "Description 66",
      price: 66.00,
      category:"home and garden",
    },
    {
      id: 67,
      name: "Product 67",
      description: "Description 67",
      price: 67.00,
      category:"Sports",
    },
    {
      id: 68,
      name: "Product 68",
      description: "Description 68",
      price: 68.00,
      category:"Automotive",
    },
    {
      id: 69,
      name: "Product 69",
      description: "Description 69",
      price: 69.00,
      category:"Beauty",
    },
    {
      id: 70,
      name: "Product 70",
      description: "Description 70",
      price: 70.00,
      category:"Books",
    },
    {
      id: 71,
      name: "Product 71",
      description: "Description 71",
      price: 71.00,
      category:"Electronics",
    },
    {
      id: 72,
      name: "Product 72",
      description: "Description 72",
      price: 72.00,
      category:"Kitchen",
    },
    {
      id: 73,
      name: "Product 73",
      description: "Description 73",
      price: 73.00,
      category:"Clothing",
    },
    {
      id: 74,
      name: "Product 74",
      description: "Description 74",
      price: 74.00,
      category:"Health",
    },
    {
      id: 75,
      name: "Product 75",
      description: "Description 75",
      price: 75.00,
      category:"kids and toys",
    },
    {
      id: 76,
      name: "Product 76",
      description: "Description 76",
      price: 76.00,
      category:"home and garden",
    },
    {
      id: 77,
      name: "Product 77",
      description: "Description 77",
      price: 77.00,
      category:"Sports",
    },
    {
      id: 78,
      name: "Product 78",
      description: "Description 78",
      price: 78.00,
      category:"Automotive",
    },
    {
      id: 79,
      name: "Product 79",
      description: "Description 79",
      price: 79.00,
      category:"Beauty",
    },
    {
      id: 80,
      name: "Product 80",
      description: "Description 80",
      price: 80.00,
      category:"Books",
    },
    {
      id: 81,
      name: "Product 81",
      description: "Description 81",
      price: 81.00,
      category:"Electronics",
    },
    {
      id: 82,
      name: "Product 82",
      description: "Description 82",
      price: 82.00,
      category:"Kitchen",
    },
    {
      id: 83,
      name: "Product 83",
      description: "Description 83",
      price: 83.00,
      category:"Clothing",
    },
    {
      id: 84,
      name: "Product 84",
      description: "Description 84",
      price: 84.00,
      category:"Health",
    },
    {
      id: 85,
      name: "Product 85",
      description: "Description 85",
      price: 85.00,
      category:"kids and toys",
    },
    {
      id: 86,
      name: "Product 86",
      description: "Description 86",
      price: 86.00,
      category:"home and garden",
    },

  ]


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`/api/products/${sellerId}`);
  //       setProducts(response.data);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [sellerId]);

  useEffect(() => {
    setProducts(mockProducts);
    setLoading(false);



  }, []);

  useEffect(() => {
  if(products){
    const Electronics = products.filter(product => product.category === "Electronics");
    const Kitchen = products.filter(product => product.category === "Kitchen");
    const Clothing = products.filter(product => product.category === "Clothing");
    const Health = products.filter(product => product.category === "Health");
    const Hidsandtoys = products.filter(product => product.category === "kids and toys");
    const Homeandgarden = products.filter(product => product.category === "home and garden");
    const Sports = products.filter(product => product.category === "Sports");
    const Automotive = products.filter(product => product.category === "Automotive");
    const Beauty = products.filter(product => product.category === "Beauty");
    const Books = products.filter(product => product.category === "Books");

    setElectronics(Electronics);
    setKitchen(Kitchen);
    setClothing(Clothing);
    setHealth(Health);
    setKidsandtoys(Hidsandtoys);
    setHomeandgarden(Homeandgarden);
    setSports(Sports);
    setAutomotive(Automotive);
    setBeauty(Beauty);
    setBooks(Books);
  }
  }, [products]);
  
    
  



console.log("Products", products);
 console.log("Electronics", electronics);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={style.container}>
      
        <h1>Products by Seller {sellerId}</h1>
        
          {/* {products.map((product) => (
            <li key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </li>
          ))} */}
        <h1>Electronics</h1>
        <div className={style.productList}>  
          {electronics && electronics.map((product) =>(
            <div key={product.id}>
                <ActionAreaCard item={{id:product.id,name:product.name, description:product.description,price:product.price}}/>
            </div>)
            )}
        </div>
        
        <h1>Kitchen</h1>
        <div className={style.productList}>
          {kitchen && kitchen.map((product) => (
              <div key={product.id}>
                <ActionAreaCard item={{id:product.id,name:product.name, description:product.description,price:product.price}}/>
              </div>
          ))}
        </div>
        
        <h1>Clothing</h1>
        <div className={style.productList}>
          {clothing && clothing.map((product) => (
              <div key={product.id}>
                <ActionAreaCard item={{id:product.id,name:product.name, description:product.description,price:product.price}}/>
              </div>
          ))}
        </div>

        <h1>Health</h1>
        <div className={style.productList}>
          {health && health.map((product) => (
              <div key={product.id}>
                <ActionAreaCard item={{id:product.id,name:product.name, description:product.description,price:product.price}}/>
              </div>
          ))}
        </div>
        
        <h1>Kids and Toys</h1>
        <div className={style.productList}>
          {kidsandtoys.map((product) => (
            <div key={product.id}>
              <ActionAreaCard item={{id:product.id,name:product.name, description:product.description,price:product.price}}/>
            </div>
          ))}
        </div>
        
        <h1>Home and Garden</h1>
        <div className={style.productList}>
          {homeandgarden.map((product) => (
            <div key={product.id}>
              <ActionAreaCard item={{id:product.id,name:product.name, description:product.description,price:product.price}}/>
            </div>
          ))}
        </div>
        
        <h1>Sports</h1>
        <div className={style.productList}>
          {sports.map((product) => (
            <div key={product.id}>
              <ActionAreaCard item={{id:product.id,name:product.name, description:product.description,price:product.price}}/>
            </div>
          ))}
        </div>
        

        <h1>Automotive</h1>
        <div className={style.productList}>
          {automotive.map((product) => (
            <div key={product.id}>
              <ActionAreaCard item={{id:product.id,name:product.name, description:product.description,price:product.price}}/>
            </div>
          ))}
        </div>

        <h1>Beauty</h1>
        <div className={style.productList}>
          {beauty.map((product) => (
            <div key={product.id}>
              <ActionAreaCard item={{id:product.id,name:product.name, description:product.description,price:product.price}}/>
            </div>
          ))}
        </div>
        
        <h1>Books</h1>
        <div className={style.productList}>
          {books.map((product) => (
            <div key={product.id}>
              <ActionAreaCard item={{id:product.id,name:product.name, description:product.description,price:product.price}}/>
            </div>
          ))}
        </div>
      
    </div>
  );
};

ViewMyProducts.getInitialProps = ({ query }) => {
  return { sellerId: query.sellerId };
};

export default ViewMyProducts;