import React, { ChangeEvent, useState, FC } from "react";
import genClassName from "../../util/genClassName";

export enum ItemType {
    Item = "list"
}

interface PokeData {
    name: string;
    url: string;
}

interface DataType {
    // items display in the dropdown menu
    items: any[];
    // the value to display in the input field
    value: string;
    onChange?: ((e: ChangeEvent<HTMLInputElement>) => void) | undefined;
    className?: string;
    itemType?: ItemType;
}

const AutoComplete: FC<DataType> = ({
    items,
    value = "",
    onChange,
    className = "",
    itemType = ItemType.Item
}) => {
    const [searchResult, setSearchResult] = useState({
        text: "",
        list: []
    })

    let classNameStr = genClassName(className, "ac", {
        [`ac-${itemType}`]: !!itemType
    }
    ).join(" ");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        let list = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${input}`, "i");
            console.log(regex)
            list = items.sort().filter((v: PokeData) => {
                console.log(v.name)
                regex.test(v.name)
            });
            console.log(list)
        }
        setSearchResult({ list:[] , text:value })

        onChange && onChange(e)
    }

    console.log(searchResult)

    return (
        <>
            <input type="text" value={value} onChange={handleChange} className="ac ac-search" />
            {[].map((search: PokeData) => {
                return (<div className={classNameStr}>{search.name}</div>)
            })}
        </>
    )

}

export default AutoComplete;