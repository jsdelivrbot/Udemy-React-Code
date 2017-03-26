import React , {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';


class WeatherList extends Component {

  renderWeather(cityData){
    //based on response from open weather api
    //es6 shortcut instead of pushng the value to array
    const temps = cityData.list.map(weather => weather.main.temp);
    console.log(temps);
    return(
      <tr key={cityData.city.name}>
        <td>{cityData.city.name}</td>
        <td>
          <Chart color="orange" data={temps} />
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
          <th>Temperature</th>
          <th>Pressure</th>
          <th>Humidity</th>
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
