import { ElementType } from "react";

interface Props {
  Icon: ElementType;
}

const IconComponent = ({ Icon }: Props) => {
  return <Icon />;
};

export default IconComponent;
