
import CurrentWeather from './components/CurrentWeather'
import SearchForm from './components/SearchForm'
import weatherService from './services/weatherService'
import './index.css'
import { useState } from 'react'


function App() {
  const [clima, setClima] = useState('')
  const [erro, setErro] = useState('')

  async function pesquisado(cityName){
    setErro('')

    if(!cityName){
      setClima('')
      setErro("Digite uma Cidade")
      return
    }
    const dados = await weatherService(cityName)
    
    if(!dados){
      setClima('')
      setErro("Cidade não encontrada")
      return
    }

    setClima(dados)
    
    
  }

  return (
    <main>
      <div className='bg-white rounded-2xl p-[20px] shadow-md shadow-black'>
       <SearchForm aoPesquisar={pesquisado}/>
       {erro && <p role="alert" className="text-center text-red-500 text-sm mt-3 font-medium bg-red-50 p-2 rounded-lg">{erro}</p>}
       {clima && <CurrentWeather clima={clima}/>}
      </div>
      
    </main>
  )
}

export default App
