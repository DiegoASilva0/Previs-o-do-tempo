import { MapPin, Search } from "lucide-react";
import { useState } from "react";


function SearchForm(props){

    const [cityName, setCityName] = useState("")

    function pesquisar(event){
        event.preventDefault();

         props.aoPesquisar(cityName)
        
    }

    return (<>
        <form onSubmit={pesquisar}>
            
            <div className="flex border-2 rounded-2xl p-2">
                <div className="flex items-center">
                    <MapPin />
                </div>
                <input
                    type="text" name="pesquisar" id="cityName"
                    value={cityName}
                    placeholder="Digite o Estado"
                    onChange={(event) => setCityName(event.target.value)}
                    className="bg-white h-10 px-3 rounded-l-[8px] w-64 outline-none " 
                />

                
                <button className="flex h-10 px-3 items-center cursor-pointer">
                 <Search size={20} />
                </button>
            </div>
        </form>

    </>)
}

export default SearchForm;