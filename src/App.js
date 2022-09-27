import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import Weather from './components/Weather';
import WeatherForecastChart from './components/WeatherForecastChart';

function App() {
  return (
  <main>
  <SearchBar/>
  <Weather/>
  <WeatherForecastChart/>
  </main>
  );
}

export default App;
