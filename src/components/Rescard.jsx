import { CDN_URL } from "../utlis/Constants";

const Rescard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  return (
    <div className="flex flex-col h-full">
      <img
        className="w-full h-48 object-cover rounded-md mb-3"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <h4 className="text-lg font-semibold text-white  mu-2 mb-1 break-words line-clamp-2">
        {name}
      </h4>
      <p className="text-sm text-gray-300 mb-1 break-words line-clamp-2">
        {cuisines.join(", ")}
      </p>
      <div className="flex justify-between text-sm text-gray-400 mt-auto">
        <span className="bg-green-700 text-white px-2 py-0.5 rounded">
          ⭐ {avgRating}
        </span>
        <span>{costForTwo}</span>
      </div>
    </div>
  );
};


export const withpromotedlabel = (Rescard)=>
{
    return (props)=>
    {
        return(<div><label>Promoted</label>< Rescard{...props}/></div>)
    }
}
export default Rescard;
