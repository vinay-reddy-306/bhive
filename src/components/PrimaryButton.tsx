import { Arrows, CurrencyRupee } from "../assets";

interface PrimaryButtonProps {}

export const PrimaryButton: React.FC<PrimaryButtonProps> = () => (
  <button className="border-primary rounded6 px2 py1 shadow-5 flex items-center gap2 relative">
    <div className="border-discount rounded px1 py05">20% discount</div>
    <div className="flex flex-column gap1">
      <span className="text-gray">Bulk Pass</span>
      <span className="text-price flex items-center">
        <img src={CurrencyRupee} alt="Rupee Symbol" className="w-4 h-4" />
        2500
        <span className="text-day">/10 Days</span>
      </span>
    </div>
    <img src={Arrows} alt="Navigation Arrows" className="w-5 h-5" />
  </button>
);

export default PrimaryButton;
