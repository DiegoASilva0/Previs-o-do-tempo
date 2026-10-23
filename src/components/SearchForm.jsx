import { MapPin, Search } from "lucide-react";



function SearchForm(){
    return (<>
        <form action="">
            <div className="flex border-2 rounded-2xl p-2">
                <div className="flex items-center">
                    <MapPin />
                </div>
                <input
                    type="text" name="pesquisar" id="pesquisar"
                    placeholder="Digite o Estado"
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