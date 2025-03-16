import { DirectionIcon } from "../assets";
import { Workspace } from "../utils/workspaceType";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const images = import.meta.glob("../assets/*", { eager: true }) as Record<string, { default: string }>;

interface SpaceViewCardProps {
  cardDetails: Workspace;
}

export const SpaceViewCard: React.FC<SpaceViewCardProps> = ({ cardDetails }) => {
  const { name = "", images: imageList = [], id, day_pass_price } = cardDetails;
  const imageName = imageList[0]?.split("/").pop();
  const imagePath = imageName ? images[`../assets/${imageName}`]?.default : "";

  return (
    <div
      key={id}
      className="rounded8 shadow-2 md-col-4 p1 flex flex-column gap2 items-stretch"
    >
      <header className="flex justify-between">
        <p className="bold">{name}</p>
        <img src={DirectionIcon} alt="direction" />
      </header>
      <img
        className="rounded8 fit"
        style={
          id === "39ab7642-8de3-4e95-aa5d-34089bc67b90" ? { height: "80%" } : {}
        }
        src={imagePath}
        alt="office-img"
      />

      <div className="flex justify-between">
        <SecondaryButton dayPassPrice={day_pass_price} />
        <PrimaryButton />
      </div>
    </div>
  );
};

export default SpaceViewCard;
