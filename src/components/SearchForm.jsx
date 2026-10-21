import { Search } from "lucide-react";



function SearchForm(){
    return (<>
        <div className="flex justify-center items-center w-full min-h-screen">
    <input
        type="text"
        name="pesquisar"
        id="pesquisar"
        placeholder="Digite o Estado"
        className="bg-white h-10 px-3 rounded-l-[8px] w-64 outline-none " 
    />
  
    <span className="flex bg-gray-200 h-10 px-3 items-center justify-center rounded-r-[8px] cursor-pointer  hover:bg-gray-300 transition-colors">
        <Search size={20} />
    </span>
</div>
    </>)
}

export default SearchForm;