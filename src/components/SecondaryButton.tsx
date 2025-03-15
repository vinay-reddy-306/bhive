import { Arrows, CurrencyRupee } from "../assets";

interface SecondaryButtonProps {
    dayPassPrice: number
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({dayPassPrice}) => (
  <button className="border-secondary rounded6 px2 py1 shadow-5 flex items-center gap2">
    <div className="flex flex-column gap1">
      <span className="text-gray">Day Pass</span>
      <span className="text-price flex items-center">
        <img src={CurrencyRupee} alt="Rupee Symbol" className="w-4 h-4" />
        {dayPassPrice}
        <span className="text-day">/Day</span>
      </span>
    </div>
    <img src={Arrows} alt="Navigation Arrows" className="w-5 h-5" />
  </button>
);

export default SecondaryButton;
