import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import AutoComplete from "./AutoComplete";
import data from './data.json'

export default {
    title: "Example/AutoComplete",
    component: AutoComplete,
} as ComponentMeta<typeof AutoComplete>

const Template: ComponentStory<typeof AutoComplete> = (args) => <AutoComplete {...args} />

export const DefaultPokes = Template.bind({});
DefaultPokes.args = {
    data: data
}

export const Movies = Template.bind({});
Movies.args = {
    data: ["Avatar", "Beauty and the Beast", "Captain Marvel", "Finding Nemo", "Gone Girl", "Harry Potter and the Philosophe", "James Bond: Goldfinger", "Life of Pi", "Monsters, Inc.", "Star Wars: The Last Jedi", "The Martian", "The Social Network", "Titanic", "Toy Story"]
}

export const States = Template.bind({});
States.args = {
    data: ["Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District Of Columbia",
    "Federated States Of Micronesia",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Marshall Islands",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Northern Mariana Islands",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Palau",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Islands",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"]
}
