import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MyLink, { Underline, Variant } from "./MyLink";

describe("test MyLink Component", ()=>{
    it("should render without issue", () => {
        const wrapper = render(<MyLink>Default Link</MyLink>);
        const LinkElement = wrapper.queryByText("Default Link");
        expect(LinkElement).toBeInTheDocument();
      });
})