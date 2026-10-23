import { ThermometerSun, ThermometerSnowflake, Wind, Droplet } from "lucide-react"

function CurrentWeather(){
    return (<>
        <div className="mt-10">
            <h1 className="text-center mb-5 font-medium text-4xl">Rolante, BR</h1>
            
            <div className="flex items-center justify-around gap-20 bg-linear-to-bl from-[#5a7cdc] to-[#606dee] text-white rounded-[20px] p-[20px]">

                <img 
                    className="drop-shadow-md drop-shadow-black" 
                    src="http://openweathermap.org/img/wn/04d@2x.png" 
                    alt="clima" 
                />

                <div >
                    <p className="font-bold text-[50px] leading-[55px]">
                        32 <sup>C°</sup>
                    </p>
                    <p className="font-[500] capitalize">
                        Ensolarado
                    </p>
                </div>
            </div>

             <div className="other_infos">
                <div className="info">
                    <ThermometerSun  className="text-[#7f1d1d]"/>

                    <div>
                        <h2>Temp. Max</h2>

                        <p>
                             32 <sup>C°</sup>
                        </p>
                    </div>
                </div>

                <div className="info">
                    <ThermometerSnowflake className="text-[#0284c7]"/>

                    <div>
                        <h2>Temp. Min</h2>

                        <p>
                             32 <sup>C°</sup>
                        </p>
                    </div>
                </div>

                <div className="info">
                    <Droplet className="text-[#0ea5e9]"/>

                    <div>
                        <h2>Humidade</h2>

                        <p>
                            50%
                        </p>
                    </div>
                </div>

                <div className="info">
                    <Wind className="text-[#7c3aed]"/>

                    <div>
                        <h2>Vento</h2>

                        <p>
                            50 Km
                        </p>
                    </div>
                </div>
             </div>
        </div>
    </>)
}

export default CurrentWeather