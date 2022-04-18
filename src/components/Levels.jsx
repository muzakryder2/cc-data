import Card from "./Card";
import single from "../images/single.png";
import double from "../images/double.png";
import triple from "../images/triple.png";

const Levels = () => {
  return (
    <div className="bg-white px-4 py-24 w-full">
      <div className="max-w-[1240px] mx-auto flex flex-col items-start justify-center space-y-20 mt-8 sm:flex-row sm:space-y-0 md:space-x-4">
        <Card
          image={single}
          plan={"single user"}
          price={149}
          storage={"500 GB"}
          users={1}
          send={2}
        />
        <Card
          image={double}
          plan={"partnership"}
          price={199}
          storage={"1 TB"}
          users={3}
          send={10}
        />
        <Card
          image={triple}
          plan={"group account"}
          price={299}
          storage={"5 TB"}
          users={10}
          send={20}
        />
      </div>
    </div>
  );
};

export default Levels;
