const Shimmer=()=>{
    return (
        <>

        {Array(10).fill(0).map((item,index)=>{
        return (
            <div key={index} className="p-5 m-5 border-black"  >
                <div className="w-64 h-64 bg-red-500"></div>
            </div>
        );

        })}
        </>
    );


 
    
  
};

export default Shimmer;         