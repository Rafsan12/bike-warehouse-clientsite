import { useEffect, useState } from "react";

const useInventoryItemWithId = id => {
    const [item, setItem] = useState([]);


    useEffect(() => {
        const url = `https://lit-falls-24726.herokuapp.com/invenrotyitems/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [item])


    return [item, setItem];
}


export default useInventoryItemWithId;