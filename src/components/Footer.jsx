import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillTwitterSquare,
  AiOutlineGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="container mx-auto py-12 px-4 text-white">
      <div className="flex flex-col mb-8 md:mb-0">
        <div>
          <h1 className="text-primary text-2xl font-bold mb-4">React.</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
            voluptas itaque perspiciatis eius neque esse, ipsa nesciunt
            molestiae facere quae, blanditiis eaque nam velit dolorem maxime
            praesentium dolor nostrum inventore!
          </p>
          <div className="flex flex-row space-x-4 my-4">
            <AiFillFacebook size={30} />
            <AiOutlineInstagram size={30} />
            <AiFillTwitterSquare size={30} />
            <AiOutlineGithub size={30} />
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-8 md:mt-8 md:flex-row md:space-y-0">
        <ul className="flex flex-col text-center mx-auto w-max md:text-left">
          <li className="text-gray-400 mb-1 border-b border-gray-400">
            Solutions
          </li>{" "}
          mb-1 border-none
          <li>Analytics</li>
          <li>Marketing</li>
          <li>Commerce</li>
          <li>Insights</li>
        </ul>
        <ul className="flex flex-col text-center mx-auto w-max md:text-left">
          <li className="text-gray-400 mb-1 border-b border-gray-400">
            Support
          </li>
          <li>Pricing</li>
          <li>Documentation</li>
          <li>Guides</li>
          <li>API Status</li>
        </ul>
        <ul className="flex flex-col text-center mx-auto w-max md:text-left">
          <li className="text-gray-400 mb-1 border-b border-gray-400">
            Company
          </li>
          <li>About</li>
          <li>Blog</li>
          <li>Jobs</li>
          <li>Press</li>
          <li>Partners</li>
        </ul>
        <ul className="flex flex-col text-center mx-auto w-max md:text-left">
          <li className="text-gray-400 mb-1 border-b border-gray-400">Legal</li>
          <li>Terms & Conditions</li>
          <li>Financial Records</li>
          <li>Investor Relations</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
