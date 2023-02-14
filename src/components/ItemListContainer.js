import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import EbookCard from "./EbookCard"

const ItemListContainer = () => {

    const [items, setItems] = useState([])

    useEffect(() => {

        getItems()

    }, [])



    const getItems = async () => {

        const db = getFirestore()
        const collectionRef = collection(db, 'ebook')
        const snapshot = await getDocs(collectionRef)
        setItems(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
        
    }

    return (
    <div className="cardsApple">
        {items.map(i => <EbookCard key={i.id} {...i} />)}
    </div>
    )
}

export default ItemListContainer
