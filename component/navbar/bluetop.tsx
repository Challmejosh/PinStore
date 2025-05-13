const Blue = () => {
    return ( 
        <div className="bg-[#634C9F] text-center text-sm p-2 sm:p-3 text-white w-full flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5 ">
            <p className="">
                FREE delivery & 40% Discount for next 3 orders! Place your 1st order in
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-5 text-white font-bold">
                <p className="">
                    Until the end of the sale
                </p>
                <div className="flex items-center justify-center gap-2">
                    <p className="flex items-center justify-center ">
                        <b>47</b> days
                    </p>
                    <p className="flex items-center justify-center ">
                        <b>06</b> hours
                    </p>
                    <p className="flex items-center justify-center ">
                        <b>59</b> minutes
                    </p>
                    <p className="flex items-center justify-center ">
                        <b>59</b> sec
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Blue;