import { FC } from "react";
import { removeExtraCharacters } from "../../utils";

interface NameProps {
  name: string;
  surname: string;
  max: number;
}

const Named: FC<NameProps> = ({ name, surname, max, ...props }) => {
  return <div {...props}>{removeExtraCharacters(name, surname, max)}</div>;
};

export default Named;
