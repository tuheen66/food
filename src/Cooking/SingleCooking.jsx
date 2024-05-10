/* eslint-disable react/prop-types */
const SingleCooking = ({ singleCook, handlePreparing }) => {
  const {id,  name, preparing_time, calories } = singleCook;
  return (

    
    <div className="flex items-center mb-4 bg-[#28282808] py-2">
      <div className="w-full text-[#878787]  py-4">
        
          <div className="py-4 flex gap-6">
            <div className="w-[4%]text-center  px-2">1</div>
            <div className="w-[32%]text-center  px-2">{name} </div>
            <div className="w-[32%]text-center  px-2">
              <span>{preparing_time} </span> minutes
            </div>
            <div className="w-[32%] text-center px-2">
              <span>{calories} </span>Calories
            </div>
          </div>
        
      </div>
      <div>
        <button
          onClick={() => handlePreparing(id)}
          className="bg-[#0BE58A] py-1 border-2 px-4 rounded-full font-bold hover:bg-transparent hover:text-black [#0BE58A] hover:border-[#0BE58A]"
        >
          Preparing
        </button>
      </div>
    </div>
  );
};

export default SingleCooking;
