import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import productos from "./json/productos.json";
import ItemList from "./ItemList";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";    

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);


    /*useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });
        promesa.then(data => {
            setItems(data);
        });
    }, []);*/

    /*  useEffect(() => {
        const db = getFirestore();
        const producto = doc(db, "items", "C5pqf6PKvjDXdCHX6scP");
        getDocs(producto).then(resultado => {
            if (resultado.exists()) {
                setItems({id:resultado.id, ...resultado.data()});
            }

        });
    }, []);  */

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        getDocs(itemsCollection).then(resultado => {
            setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
            setLoading(false);
        });
    }, []); 

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");

        productos.forEach(producto => {
            addDoc(itemsCollection, producto);
        });
    }, []);

    return (
        <div className="container my-5">
            <div className="row">
                {loading ? <loading /> : <ItemList items={items} />}
                <div className="col-md-4">
                    <img src={items.imagen} alt={items.nombre} className="img-fluid" />
                </div>

                <div className="col-md-4">
                    <h2>{items.nombre}</h2>
                    <p>{items.precio}</p>
                </div>
                <ItemCount stock={6} />
            </div>
        </div>
    )
}

export default ItemListContainer;