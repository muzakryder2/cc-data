const Card = ({ image, plan, price, storage, users, send }) => {
  return (
    <div className="shadow-xl rounded-md px-8 w-full flex-col items-center justify-center text-center md:flex-1 hover:bg-gray-200 hover:scale-105">
      <img
        className="-mt-8 mx-auto w-[100px] h-[100px] object-contain"
        src={image}
        alt="single"
      />
      <h1 className="text-2xl font-bold capitalize my-8 sm:text-lg lg:text-2xl">
        {plan}
      </h1>
      <h2 className="text-4xl font-bold mb-8">${price}</h2>
      <div className="border-gray-300 border-b border-t w-full h-12 flex flex-col justify-center">
        <p className="font-semibold">{storage} Storage</p>
      </div>
      <div className="border-gray-300 border-b w-full h-12 flex flex-col justify-center">
        <p className="font-semibold">
          {users === 1 ? users + " User" : users + " Users"} Allowed
        </p>
      </div>
      <div className="border-gray-300 border-b w-full h-12 flex flex-col justify-center">
        <p className="font-semibold">Send up to {send}GB</p>
      </div>
      <button className="mt-6 mb-10 px-4 py-2 bg-primary rounded-lg hover:brightness-110">
        Start Trial
      </button>
    </div>
  );
};

export default Card;
