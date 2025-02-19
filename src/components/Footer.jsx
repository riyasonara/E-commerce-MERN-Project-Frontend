import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Section - 1 */}
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            beatae dolores rerum accusamus quod totam quas culpa sit, qui quia
            nam, sequi unde natus corporis impedit! Rerum voluptates quam
            delectus voluptatem placeat qui laborum sapiente eum sint. Minima
            voluptate ex ut possimus quod, eum saepe recusandae? Ut aliquam amet
            id?
          </p>
        </div>
        {/* Section - 2 */}
        <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        {/* Section - 3 */}
        <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>+1-212-456-7890</li>
                <li>contact@foreverh.com</li>
            </ul>
        </div>
      </div>

      {/* Copyright text */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center text-gray-600">
          &copy; Copyright@ {new Date().getFullYear()} ForeverH. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
