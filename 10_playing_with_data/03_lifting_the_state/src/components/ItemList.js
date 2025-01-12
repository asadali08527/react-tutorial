const ItemList = ({item}) => {
    console.log(item)
    return (
        <div>
            <div className="p-2 m-2 border-gray-20 border-b-2 text-left flex justify-between">
                <div className="w-9/12">
                    <div className="py-2">
                        <span>
                        {item.name} - ₹{item.price?item.price/100:item.defaultPrice/100}</span>
                    </div>
                    <p className="text-xs">{item.description}</p>  
                </div>
                <div className="w-3/12 p-4">
                <div className="absolute">
                        <button className="p-2 mx-16 bg-black shadow-lg text-white align-middle rounded-lg">Add +</button>
                    </div>
                    <img className="w-full" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+item.imageId}></img>
                </div>
            </div>
        </div>
    );
};

export default ItemList;