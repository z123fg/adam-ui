import * as React from "react";

interface Props {
    data: string[];
    onSelect?: Function
}

const AutoComplete: React.FC<Props> = ({ data, onSelect }) => {
    const [search, setSearch] = React.useState<string>("");
    const [filterResults, setFilterResults] = React.useState<string[]>([]);
    const [showResults, setShowResults] = React.useState<boolean>(false);

    const filterSupport = (input:string) => {
        const result = data.filter((value) => 
        value.toLowerCase().indexOf(input.toLowerCase()) > -1);

        if(input.length > 0) {
            setFilterResults(result);
        } else {
            setFilterResults([]);
        }

    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        setSearch(input)
        filterSupport(input)
        setShowResults(true);
    };

    const handleSelect = (itemSelected:string) => {
        setShowResults(false);
        setFilterResults([]);
        setSearch(itemSelected)
        if(onSelect !== undefined){
            onSelect(itemSelected)
        }
    }

    const renderSuggestions = () => {
        return filterResults.length?(
            <>
                <ul className="ac-list">
                    {filterResults.map((result:string, index:number) => {
                        return <li key={index} onClick={()=>handleSelect(result)}>{result}</li>
                    })}
                </ul>
            </>
        ) : (
            <>
                <p className="ac-no-result">Sorry, no results found.</p>  
            </>   
        )
    }

    return (
        <>
            <input type="text" value={search} onChange={handleChange} className="ac-input"/>
            {showResults && search && renderSuggestions()}
        </>
    )
}

export default AutoComplete