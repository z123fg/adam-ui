import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MyLink, { Underline, Variant } from "./MyLink";
import { link } from "fs";

describe("test MyLink Component", ()=>{
    it("should render without issue", () => {
        const wrapper = render(<MyLink>Default Link</MyLink>);
        const linkElement = wrapper.queryByText("Default Link");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveClass(
            "link",
            "link-default",
            "link-always"
        )
    });

    it("should render correct Link based on the prop", ()=>{
        const mockOnClickHandler = jest.fn();
        const linkProps = {
            underLine: Underline.Hover,
            variant: Variant.Button,
        };
        const wrapper = render(
            <MyLink
                {...linkProps}
                onClick={mockOnClickHandler}
            >
                Link Type
            </MyLink>
        );
        const linkElement = wrapper.queryByText("Link Type");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement?.tagName).toBe("A");
        expect(linkElement).toHaveClass(
            "link",
            "link-hover",
            "link-button"
        )
        expect(mockOnClickHandler).toBeCalledTimes(0);
        linkElement && fireEvent.click(linkElement);
        expect(mockOnClickHandler).toBeCalledTimes(1);

    });

    it("link should be disabled", ()=>{
        const linkProps = {
            underLine: Underline.None,
            variant: Variant.H1,
        };
        const mockOnClickHandler = jest.fn();
        const wrapper = render(
            <MyLink
                {...linkProps}
                disabled
                onClick={mockOnClickHandler}
            >
                Link disabled
            </MyLink>
        );
        const linkElement = wrapper.queryByText("Link disabled");
        expect(mockOnClickHandler).toBeCalledTimes(0);
        linkElement && fireEvent.click(linkElement);
        expect(mockOnClickHandler).toBeCalledTimes(0);
        expect(linkElement).toHaveClass("link", "disabled", "link-none","link-h1");
    });

    it("link should have attribute target", ()=>{
        const linkProps = {
            underLine: Underline.None,
            variant: Variant.subtitle,
        };
        const mockOnClickHandler = jest.fn();
        const wrapper = render(
            <MyLink
                {...linkProps}
                onClick={mockOnClickHandler}
                target="_blank"
                href="https://www.google.com"
            >
                link that redirects to google with target=_blank
            </MyLink>
        );
        const linkElement = wrapper.queryByText("link that redirects to google with target=_blank");
        expect(mockOnClickHandler).toBeCalledTimes(0);
        linkElement && fireEvent.click(linkElement);
        expect(mockOnClickHandler).toBeCalledTimes(1);
        expect(linkElement).toHaveClass("link","link-subtitle","link-none");
        expect(linkElement).toHaveAttribute("target","_blank");
    });
})