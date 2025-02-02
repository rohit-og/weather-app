import "./WeatherCard.css";

interface Weather {
  weather: {
    description: string;
  };
  wind_spd: number;
  rh: number;
  precip: number;
  elev_angle: number;
  temp: number;
}

const WeatherCard = ({ weather }: { weather: Weather }) => {
  return (
    <div
      id="box"
      className={`w-full sm:w-96 ${
        weather.elev_angle > 0 ? "bg-[#47c5ff]" : "bg-[#000040]"
      }`}
    >
      <div
        id="moon"
        className={weather.elev_angle > 0 ? "bg-[#ffff3c]" : "bg-[#f5f5dc]"}
      >
        <div className={weather.elev_angle > 0 ? "hidden" : ""}>
          <div id="hole1" className="hole"></div>
          <div id="hole2" className="hole"></div>
          <div id="hole3" className="hole"></div>
          <div id="hole4" className="hole"></div>
          <div id="hole5" className="hole"></div>
          <div id="hole6" className="hole"></div>
          <div id="hole7" className="hole"></div>
        </div>
      </div>
      <div
        id="floor1"
        className={`floor light ${
          weather.elev_angle > 0 ? " bg-[#c7c7ce]" : " bg-[#404080]"
        }`}
      ></div>

      <div
        id="floor2"
        className={`floor light ${
          weather.elev_angle > 0 ? " bg-[#c7c7ce]" : " bg-[#404080]"
        }`}
      ></div>
      <div
        id="floor3"
        className={`floor light ${
          weather.elev_angle > 0 ? " bg-[#c7c7ce]" : " bg-[#404080]"
        }`}
      ></div>

      <div
        id="floor4"
        className={`floor dark ${
          weather.elev_angle > 0 ? " bg-[#6c6c8a]" : " bg-[#202060]"
        }`}
      ></div>
      <div
        id="floor5"
        className={`floor dark ${
          weather.elev_angle > 0 ? " bg-[#6c6c8a]" : " bg-[#202060]"
        }`}
      ></div>
      <div
        id="info"
        className={`px-4 w-full sm:w-96 ${
          weather.elev_angle > 0 ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        <div className="flex items-center gap-2 justify-between">
          <span id="temp">{weather.temp}°</span>

          <span id="desc">{weather.weather.description}</span>
        </div>

        <div id="stats">
          <span>🍃 Wind: {weather.wind_spd} Km/h</span>
          <span>💧 Humidity: {weather.rh}%</span>
        </div>
      </div>
      {weather.precip > 0 && (
        <div>
          <div id="drop1" className="drop"></div>
          <div id="drop2" className="drop"></div>

          <div id="drop3" className="drop"></div>

          <div id="drop4" className="drop"></div>
          <div id="drop5" className="drop away"></div>
          <div id="drop6" className="drop away"></div>
          <div id="drop7" className="drop away"></div>
          <div id="drop8" className="drop away"></div>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
