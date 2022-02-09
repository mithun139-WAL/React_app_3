import { useState } from "react";
const Ecommerce = () => {
    let [products, setProducts] = useState([]);
    const addProducts = (event) =>{
        event.preventDefault();
        let productObject = {
            item:event.target.item.value,
            description:event.target.description.value,
            price:event.target.price.value,
            color:event.target.color.value,
            expirydate:event.target.expdate.value,
        };
        let newProducts = [...products,productObject];
        setProducts(newProducts);
    };
    let deleteProduct = (indexToDelete) => {
        let newProducts = products.filter(function (val, index) {
            if (indexToDelete === index) {
                return false;
            }
            return true;
        });
        setProducts(newProducts);
    }
    return (
        <div className="Todo">
            <form onSubmit={addProducts}>
                <input type="text" name="item" placeholder="Enter Item"/><br/>
                <textarea name="description" placeholder="Enter product Description..."></textarea><br/>
                <input type="number" name="price" placeholder="Enter Price"/><br/>
                <input type="color" name="color"/><br/>
                <input type="date" name="expdate"/>
                <br />
                <button>Add Product</button>
            </form>
            {
                products.map((val,index) => {
                    return <div className="border">
                        <h4><i>Product:</i>{val.item}</h4><br />
                        <i>Description:</i>{val.description}<br/>
                        <i>Price:</i>{val.price}<br/>
                        <i>Color:</i>{val.color}<br/>
                        <i>ExpiryDate:</i>{val.expirydate}<br/>
                        <button onClick={() => {
                            deleteProduct(index);
                        }}>Delete Product</button>
                    </div>
                })
            }
        </div>
    );
}

export default Ecommerce;