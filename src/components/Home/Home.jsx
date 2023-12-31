
import {useEffect}  from "react";
import Products from "../Products/Products";
import Category from "./Category/Category";
import "./Home.scss";
import Banner from "./Banner/Banner";
import {fetchDataFromApi } from "../../utils/api";



const Home = () => {
          
            useEffect (() => {
                getCategories()
            }, [])

         const getCategories =  () => {
           fetchDataFromApi("/api/categories?populate=*").then(res => console.log(res));
         };

    return <div>
        <Banner />
        <div className="main-content">
            <div className="layout">
            <Category />
            <Products headingText="Popular Products" />        
            </div>
        </div>
        
         </div>;
};

export default Home;






