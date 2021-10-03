import * as React from "react";

interface Props {
    data: string[];
}

const AutoComplete: React.FC<Props> = ({ data }) => {
    const [search, setSearch] = React.useState<string>("");
    const [filterResults, setFilterResults] = React.useState<string[]>([]);
    const [showResults, setShowResults] = React.useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        setSearch(input)

        const result = data.filter((value) => 
            value.toLowerCase().indexOf(input.toLowerCase()) > -1
        );

        if(input.length > 0) {
            setFilterResults(result);
        } else {
            setFilterResults([]);
        }

        setShowResults(true);
    };

    const handleSelect = (result:string) => {
        setShowResults(false);
        setFilterResults([]);
        setSearch(result)
    }

    const Suggestions = () => {
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
            {showResults && search && <Suggestions />}
        </>
    )
}

export default AutoComplete