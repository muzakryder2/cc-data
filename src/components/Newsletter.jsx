const Newsletter = () => {
  return (
    <div className="text-white w-full py-12 px-4">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-6 md:space-x-8 md:flex-row">
        <div className="space-y-2 text-center md:pr-6 md:text-left">
          <h1 className="text-2xl font-bold md:text-3xl">
            Want tips & tricks to optimize your flow?
          </h1>
          <p className="text-sm font-semibold">
            Sign up to our newsletter and stay up to date
          </p>
        </div>
        <div className="flex flex-col px-6 text-center md:text-left">
          <form className="flex flex-col items-center justify-center space-y-2 md:space-x-2 md:space-y-0 md:flex-row">
            <input
              id="subscribe"
              name="subscribe"
              className="rounded-lg p-2 text-black"
              type="email"
              placeholder="Enter your email"
            />
            <button
              type="subscribe"
              className="bg-primary text-black px-4 py-2 rounded-lg w-[125px] hover:brightness-110"
            >
              Notify me
            </button>
          </form>
          <div className="text-center text-sm font-semibold pt-8 md:pt-3 md:text-left">
            <p>We care about the protection of your data. Read our</p>
            <a className="text-primary underline" href="#">
              Privacy Policy.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
