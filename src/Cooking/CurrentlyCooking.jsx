/* eslint-disable react/prop-types */

const CurrentlyCooking = ({ nowCooking}) => {
  // console.log(nowCooking);

  const { name, preparing_time, calories } = nowCooking[0];
  return (
    <div className="items-center  bg-[#28282808] py-2">
      <div className="w-full mb-2">
        
          <div className="text-[#878787] flex">
            
            <div className="w-[4%] px-2">1</div>
            <div className="w-[32%] px-2">{name}</div>
            <div className="w-[32%] px-2">
              <span>{preparing_time} </span>Minutes
            </div>
            <div className="w-[32%] px-2">
              <span>{calories} </span>Calories
            </div>
          </div>
        
      </div>
      
    </div>
  );
};

export default CurrentlyCooking;
