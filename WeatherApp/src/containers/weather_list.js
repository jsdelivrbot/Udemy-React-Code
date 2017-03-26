import React , {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/googe_map';


class WeatherList extends Component {

  renderWeather(cityData){
    //based on response from open weather api
    //es6 shortcut instead of pushng the value to array
    const temps = cityData.list.map(weather => (weather.main.temp-273) );
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const hummidities = cityData.list.map(weather => weather.main.humidity);
    // const lon = cityData.city.coord.lon;
    // const lat = cityData.city.coord.lat;
    const { lon , lat } = cityData.city.coord;//shortcut to above..es6


    return(
      <tr key={cityData.city.name}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td>
          <Chart color="orange" data={temps} units="C"/>
        </td>
        <td>
          <Chart color="green" data={pressures} units="hPa"/>
        </td>
        <td>
          <Chart color="black" data={hummidities} units="%"/>
        </td>
      </tr>
    )
  }

render() {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature (C)</th>
          <th>Pressure(hPa)</th>
          <th>Humidity(%)</th>
        </tr>
      </thead>
      <tbody>
        { this.props.weather.map(this.renderWeather) }
      </tbody>
    </table>
  );
}

}

function mapStateToProps(state){
  //state.weather as we set key as weather in action creator
  return { weather : state.weather};
}
//Above thing can be done as below
// function mapStateToProps({weather}){ //short cut for gettting value from a object
//   //state.weather as we set key as weather in action creator
//   return { weather}; //has key value same.. or easy return
// }

export default connect(mapStateToProps)(WeatherList);
