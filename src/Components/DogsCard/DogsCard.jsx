import { EyeIcon } from "@heroicons/react/24/outline";
import Button from "../NavCard/Button/Button";

// eslint-disable-next-line react/prop-types
const DogsCard = ({imgUrl, name, breed, vaccineName, date, expireDate}) => {
    return (
        <div className="bg-white rounded-md w-full p-3 flex flex-col md:flex-row gap-4 items-center">
        <img
          className="w-32 h-32 object-cover rounded-md"
          src={imgUrl}
          alt="gog-image"
        />
        <div className="w-full flex flex-col">
          <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <h1 className="font-bold text-2xl capitalize">{name}</h1>
                    <h2 className="text-gray-700 font-semibold capitalize">
                        {breed}
                    </h2>
                </div>
                <div className="flex flex-row gap-4">
                    <Button className={"bg-green-600"} buttonTitle={"approval"}></Button>
                    <Button className={"bg-red-600"} buttonTitle={"decline"}></Button>
                </div>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
                <div className="flex flex-col font-semibold">
                    <h2 className="text-md text-gray-800 capitalize">vaccination name:</h2>
                    <h1 className="text-lg text-black capitalize">{vaccineName}</h1>
                </div>
                <div className="flex flex-col font-semibold">
                    <h2 className="text-md text-gray-800 capitalize">vaccination date:</h2>
                    <h1 className="text-lg text-black capitalize">{date}</h1>
                </div>
                <div className="flex flex-col font-semibold">
                    <h2 className="text-md text-gray-800 capitalize">Expire vaccination date:</h2>
                    <h1 className="text-lg text-black capitalize">{expireDate}</h1>
                </div>
                <p className="bg-blue-200 border-2 text-blue-600 font-bold border-blue-600 p-2 rounded-md flex flex-row gap-1 capitalize items-center justify-center">
                    view certificate <EyeIcon className="size-6"></EyeIcon>
                </p>
          </div>
        </div>
      </div>
    );
};

export default DogsCard;