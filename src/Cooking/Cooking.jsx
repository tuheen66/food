/* eslint-disable react/prop-types */
import CurrentlyCooking from "./CurrentlyCooking";
import SingleCooking from "./SingleCooking";

const Cooking = ({
  wantToCook,
  handlePreparing,
  currentlyCookings,
  preparingTime,
  calories,
}) => {
  return (
    <div className=" lg:w-[550px]  border-2 rounded-xl text-[#282828] pb-8 ">
      <div>
        <h2 className="text-center font-bold mb-2 py-4 text-2xl">
          Want to cook: <span>{wantToCook.length} </span>
        </h2>

        <hr />

        <div className="mt-4">
          <div className="justify-around mb-4 ">
            <div className="w-full mb-2">
              <div className="text-[#878787] flex ">
                <div className="w-[4%]  px-2"></div>
                <div className="w-[24%] px-2 lg:px-3">Name</div>
                <div className="w-[24%]  px-2 lg:px-10">Time </div>
                <div className="w-[24%]  px-2 lg:px-10">Calories </div>
                <div className="w-[24%]"></div>
              </div>
            </div>
            {wantToCook.map((singleCook) => (
              <SingleCooking
                key={singleCook.id}
                singleCook={singleCook}
                handlePreparing={handlePreparing}
              ></SingleCooking>
            ))}
          </div>
        </div>
      </div>

      {/* currently cooking */}
      <hr />
      <div>
        <h2 className="text-center font-bold mb-2 py-4 text-2xl ">
          Currently Cooking: <span>{currentlyCookings.length}</span>
        </h2>

        <hr />

        <div className="mt-4">
          <div className="mb-4 ">
            <div className="text-[#878787] flex w-full mb-2">
              <div className="w-[4%] px-2"></div>
              <div className="w-[32%] px-2">Name</div>
              <div className="w-[32%] px-2">Time</div>
              <div className="w-[32%] px-2">Calories</div>
            </div>
          </div>
        </div>
      </div>

      {currentlyCookings.map((nowCooking, idx) => (
        <CurrentlyCooking key={idx} nowCooking={nowCooking}></CurrentlyCooking>
      ))}

      <div className="flex justify-end gap-4 md:gap-32 lg:gap-16  px-2 md:px-28 lg:px-12 font-bold text-[#282828CC]">
        <p>
          Total Time = <br />
          <span>{preparingTime}</span> minutes
        </p>
        <p>
          Total Calories = <br />
          <span>{calories} </span> calories
        </p>
      </div>
    </div>
  );
};

export default Cooking;
