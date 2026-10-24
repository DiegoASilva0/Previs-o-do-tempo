import {
  ThermometerSun,
  ThermometerSnowflake,
  Wind,
  Droplet,
} from "lucide-react";

function CurrentWeather(props) {
  console.log(props.clima);

  return (
    <>
      <div className="mt-10">
        <h1 className="text-center mb-5 font-medium text-4xl">
          {props.clima.city}, {props.clima.country}
        </h1>

        <div className="flex items-center justify-around gap-[20px] bg-linear-to-bl from-[#5a7cdc] to-[#606dee] text-white rounded-[20px] p-[20px]">
          <img
            className="drop-shadow-md drop-shadow-black"
            src={`https://openweathermap.org/img/wn/${props.clima.tempIcon}@2x.png`}
            alt={props.clima.description || "clima"}
          />

          <div>
            <p className="font-bold text-[50px] leading-[55px]">
              {props.clima.temp} <sup>C°</sup>
            </p>
            <p className="font-[500] capitalize">{props.clima.description}</p>
          </div>
        </div>

        <div className="other_infos">
          <div className="info">
            <ThermometerSun className="text-[#7f1d1d]" />

            <div>
              <h2>Temp. Max</h2>

              <p>
                {props.clima.tempMax} <sup>C°</sup>
              </p>
            </div>
          </div>

          <div className="info">
            <ThermometerSnowflake className="text-[#0284c7]" />

            <div>
              <h2>Temp. Min</h2>

              <p>
                {props.clima.tempMin} <sup>C°</sup>
              </p>
            </div>
          </div>

          <div className="info">
            <Droplet className="text-[#0ea5e9]" />

            <div>
              <h2>Humidade</h2>

              <p>{props.clima.humidity}%</p>
            </div>
          </div>

          <div className="info">
            <Wind className="text-[#7c3aed]" />

            <div>
              <h2>Vento</h2>

              <p>{props.clima.windSpeed} Km/h</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentWeather;
