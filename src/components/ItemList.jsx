import { CDN_URL } from "../utlis/Constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="text-white border-b border-b-blue-100 rounded-2xl p-5 my-5 hover:bg-gray-700 transition duration-300"
        >
          <div className="font-bold text-xl mb-2">{item.card.info.name}</div>
          <div className="text-green-300 mb-3">
            ₹💸{(item.card.info.defaultPrice || item.card.info.price) / 100} /- Only
          </div>

          <div className="flex justify-between gap-x-4 items-start">
            <p className="w-8/12 text-gray-300">{item.card.info.description}</p>

            {item.card.info.imageId && (
              <div className="w-4/12">
                <button className= " p-2 bg-emerald-800 rounded-md font-semibold text-md hover:bg-cyan-800 hover:text-cyan-100 transition duration-200 absolute">Add+</button>
                <img
                  className="w-full h-32 object-cover rounded-lg shadow-md "
                  src={CDN_URL + item.card.info.imageId}
                  alt={item.card.info.name}
                  
                />
                
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
