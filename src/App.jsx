
import CurrentWeather from './components/CurrentWeather'
import SearchForm from './components/SearchForm'
import './index.css'


function App() {

  return (
    <main>
      <div className='bg-white rounded-2xl p-[20px] shadow-md shadow-black'>
       <SearchForm />
       <CurrentWeather />
      </div>
      
    </main>
  )
}

export default App
