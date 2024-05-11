import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 justify-between items-center py-4">
      <h2 className="font-extrabold text-4xl text-[#0be58a]  ">Dish Delight</h2>

      <div className="flex list-none gap-16 justify-center items-center text-[#150B2BB3] ">
        <li>
          <a href=""></a>Home
        </li>
        <li>
          <a href=""></a>Recipe
        </li>
        <li>
          <a href=""></a>About
        </li>
        <li>
          <a href=""></a>Search
        </li>
      </div>

      <div className="flex items-center gap-4 ">
        <div className="flex gap-4 items-center bg-gray-200 py-2 px-4 rounded-full text-[#150B2BB3]">
          <FaMagnifyingGlass className="text-[#150B2BB3]" />
          <input className="bg-gray-200 text-[#150B2BB3]" type="text" name="" placeholder=" Search" id="" />
        </div>
        <div className="bg-[#0BE58A] p-2 rounded-full">
        <FaRegUserCircle />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
