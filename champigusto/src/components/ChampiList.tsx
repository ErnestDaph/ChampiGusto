import { champiList } from "../assets/mock/mock";
import Champi from "./Champi";

function ChampiList() {
  const mock = champiList;
  return (
    <>
      {mock.map((champi) => (
        <Champi key={champi.id} />
      ))}
    </>
  );
}

export default ChampiList;
