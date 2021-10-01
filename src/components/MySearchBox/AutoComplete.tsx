import React, { ChangeEvent, useState, FC } from "react";
import genClassName from "../../util/genClassName";

export enum ItemType {
    Item = "list"
}

interface DataType {
    // items display in the dropdown menu
    items: any[] | undefined;
    // the value to display in the input field
    value: any | null;
    onChange: ((e: ChangeEvent<HTMLInputElement>) => void) | undefined;
    className?: string;
    itemType?: ItemType;
}

const AutoComplete: FC<DataType> = ({ 
    items = [], 
    value, 
    onChange, 
    className="",
    itemType = ItemType.Item
}) => {
    const [searchResult, setSearchResult] = useState<any[]>([])

    let classNameStr = genClassName(className, "ac", {
            [`ac-${itemType}`]: !!itemType
        }
    ).join(" "); 

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        //setSearchInput(input);

        let selection:any[] = [];

        if (input.length > 0) {
            selection = items.filter((result:any) => {
                return result.includes(input)
            })
            setSearchResult(selection)
        } else {
            setSearchResult([])
        }
        onChange&&onChange(e)
    }

    return (
        <>
            <input value={value} onChange={handleChange} className="ac ac-search"/>
            {searchResult.map((search:any) => {
                return (<div className={classNameStr}>{search}</div>)
            })}
        </>
    )

}

export default AutoComplete;