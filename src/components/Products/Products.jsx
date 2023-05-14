import React, { useEffect, useState } from "react";
import "../Products/products.less"
import ProductsItem from "../ProductsItem/ProductsItem";
import Search from "../Search/Search";
import { dataProduct } from "../../api/data"
function Products() {
  console.log(dataProduct)
  return (
    <div className="Product-list">
      {dataProduct.products.map((item) => {
        return (
          <div  key={item.id}>
            <img src={item.thumbnail}></img>
            <p>{item.name}</p>
            <p>{item.title}</p>
            <p>{item.price}</p>
          </div>
        )
      })}
    </div>
  )
}
export default Products;
//   const [products, setProducts] = useState();
//   const [productsSort, setProductsSort] = useState();

//   const onDeleteProduct = (id) => {
//     const newData = products.filter((p) => p.id !== id);
//     setProducts(newData);
//     setProductsSort(newData);
//   };

//   const onSearchProduct = (value) => {
//     if (value) setProductsSort(
//       products.filter((p) => {
//         return p.title.toLowerCase().includes(value.toLowerCase());
//       })
//     );
//     else  setProductsSort(products)
//   };

//   const onUpdateProduct = (item) => {
//     console.log("onUpdate:", item);
//   };

//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then((res) => {
//         return res.json();
//       })
//       .then(({ products }) => {
//         console.log("productL:", products);
//         if (products) {
//           setProducts(products);
//           setProductsSort(products);
//         }
//       });
//   }, []);

//   return (
//     <>
//       <div className="flex mb-4 w-full justify-between items-center">
//         <div className="search-product">
//           <h2>Tìm sản phẩm</h2>
//           <Search onSearching={onSearchProduct} placeholder={'Nhập tên sản phẩm'}/>
//         </div>
//         <span>số lượng: {products?.length || 0}</span>
//       </div>
//       <div className="products">
//         {productsSort
//           ? productsSort.map((product) => (
//               <ProductsItem
//                 item={product}
//                 key={product?.id}
//                 onDelete={onDeleteProduct}
//                 onUpdate={onUpdateProduct}
//               />
//             ))
//           : "Loading...."}
//       </div>
//     </>
//   );
// }

