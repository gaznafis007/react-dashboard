import { useEffect, useState } from "react";
import DogsCard from "../../Components/DogsCard/DogsCard";

const Dashboard = () => {
  const [dogsData, setDogsData] = useState([]);
  useEffect(() => {
    fetch("../../../public/data/data.json")
      .then((res) => res.json())
      .then((data) => {
        setDogsData(data);
      });
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
      <div className="flex flex-row gap-4 bg-white rounded-md mx-auto w-1/4 mt-6 p-2">
        <p>hello</p>
      </div>
    </section>
  );
};

export default Dashboard;
