import { DirectionIcon } from "../assets";
import { Workspace } from "../utils/workspaceType";
import SecondaryButton from "./SecondaryButton";

interface SpaceViewCardProps {
  cardDetails: Workspace;
}

export const SpaceViewCard: React.FC<SpaceViewCardProps> = ({
  cardDetails,
}) => {
  const { name = "", images = [], id, day_pass_price } = cardDetails;
  const imagePath = require(`../assets/${images[0].split("/").pop()}`);

  return (
    <div key={id} className="rounded8 shadow-2 md-col-4 p1">
      <header className="flex justify-between">
        <p className="bold">{name}</p>
        <img src={DirectionIcon} alt="direction" />
      </header>
      <div className="p1">
        <img className="rounded8 fit" src={imagePath} alt="office-img" />
      </div>
      <div className="flex">
        <SecondaryButton dayPassPrice={day_pass_price}/>
      </div>
    </div>
  );
};

export default SpaceViewCard;
