
import CurrentWeather from './components/CurrentWeather'
import SearchForm from './components/SearchForm'
import './index.css'


function App() {
  function pesquisado(cityName){
    {console.log(cityName)}
  }

  return (
    <main>
      <div className='bg-white rounded-2xl p-[20px] shadow-md shadow-black'>
       <SearchForm aoPesquisar={pesquisado}/>
       <CurrentWeather />
      </div>
      
    </main>
  )
}

export default App
