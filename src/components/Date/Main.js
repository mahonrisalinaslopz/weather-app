import { useState } from "react";
import Search from "../Search/Search";
import TodayWeather from "../Today_Weather";

const Main = (props) => {
  const [Search_active, setSearch] = useState(false);
  const search_switch = () => {
    if (!Search_active) {
      setSearch(true);
    }
    if (Search_active) {
      setSearch(false);
    }
  };

  return (
    <div className="panel">
      {Search_active ? (
        <Search searchclick={() => search_switch()} Position={props.Position} />
      ) : (
        <TodayWeather
          today_date={props.today_date}
          today_temp={props.today_temp}         
          today_icon={props.today_icon}         
          location={props.location}
          weather_type={props.weather_type}
          unit={props.unit}
          Pos={props.Pos}
          searchclick={() => search_switch()}         
        />
      )}
    </div>
  );
};
export default Main;
