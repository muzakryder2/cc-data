import laptopImage from "../images/laptop.jpg";

const Analytics = () => {
  return (
    <div className="bg-white w-full py-16 px-4">
      <div className="container mx-auto grid md:grid-cols-2">
        <img className="pb-4 md:pb-0" width={500} src={laptopImage} alt="/" />
        <div className="flex flex-col text-center justify-center items-center space-y-5 md:text-left md:items-start">
          <p className="text-primary uppercase font-bold">
            Data analytics Dashboard
          </p>
          <h1 className="text-2xl font-bold">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae
            atque unde ut, aspernatur soluta. Natus, tempora. Provident officia
            sed possimus neque, quisquam blanditiis voluptatem dolores magni?
            Quia, autem voluptates.
          </p>
          <button className="bg-black w-[200px] rounded-3xl text-primary font-medium py-3 hover:brightness-125">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
