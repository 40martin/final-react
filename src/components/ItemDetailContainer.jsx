import productos from "./json/productos.json";
import { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    
    

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                let producto = productos.find(item => item.idx === 2);
                resolve(producto);
                setLoading(false);
            });
        });

        promesa.then(data => {
            setItem(data);
        });
    
    }, []);
        
    return (
        <>
            {loading ? <Loading /> : <ItemDetail producto={item} />}
        </>
    )
}

export default ItemDetailContainer;
