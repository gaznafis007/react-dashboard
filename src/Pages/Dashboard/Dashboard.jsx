import { useEffect, useState } from "react";
import DogsCard from "../../Components/DogsCard/DogsCard";
import Button from "../../Components/NavCard/Button/Button";
import {
  ChatBubbleBottomCenterIcon,
  CodeBracketIcon,
  CursorArrowRaysIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/outline";
import { data } from "../../assets/data/data";

const Dashboard = () => {
  const [dogsData, setDogsData] = useState([]);
  useEffect(() => {
    setDogsData(data)
  }, []);
  return (
    <section className="bg-blue-100 p-8 min-h-screen">
      <div className="grid grid-col-1 gap-3">
        {dogsData.map((dog, idx) => (
          <DogsCard
            key={idx}
            imgUrl={dog?.imageUrl}
            name={dog?.name}
            breed={dog?.breed}
            vaccineName={dog?.vaccineName}
            date={dog?.vaccinationDate}
            expireDate={dog?.expiryDate}
          ></DogsCard>
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center bg-white rounded-md md:mx-auto mt-6 p-4 w-full mx-6 md:w-1/3">
        <Button
          className={"bg-blue-400"}
          buttonTitle={
            <CursorArrowRaysIcon className="size-7 text-white"></CursorArrowRaysIcon>
          }
        ></Button>
        <HandRaisedIcon className="size-7 cursor-pointer text-black"></HandRaisedIcon>
        <ChatBubbleBottomCenterIcon className="size-7 cursor-pointer text-black"></ChatBubbleBottomCenterIcon>
        <Button className={"bg-blue-400"} buttonTitle={"ask to edit"}></Button>

        <CodeBracketIcon className="size-7 cursor-pointer text-black"></CodeBracketIcon>
      </div>
    </section>
  );
};

export default Dashboard;
