import { useEffect, useState } from "react";
import SpaceViewCard from "./SpaceViewCard";
import { fetchData } from "../utils/fetchData";

export const SpaceView: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let isMounted = true;

    fetchData()
      .then((result) => {
        if (isMounted) setData(result);
      })
      .catch((error) => console.error("Error fetching data:", error));

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="md-px4 md-py3 bg-light-gray my3">
      <h2 className="mb3 bold left-align">Our Space Overview</h2>
      {data ? (
        <div className="flex flex-wrap gap2 items-center items-stretch">
          {data.map((card, index) => (
            <SpaceViewCard key={index} cardDetails={card} />
          ))}
        </div>
      ) : (
        "loading..."
      )}
    </section>
  );
};

export default SpaceView;
