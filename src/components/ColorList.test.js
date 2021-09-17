import React from 'react';
// import MutationObserver from 'mutationobserver-shim';
import { render, screen} from "@testing-library/react";
import ColorList from './ColorList';

const testColors = [
    {code: {hex: "##ffebcd"},
    color: "blanchedalmond",
    id: 9},
    {code: {hex: "#6093ca"},
    color: "blue",
    id: 10},
    {code: {hex: "#8a2be2"},
    color: "blueviolet",
    id: 11}
];
test("Renders an empty list of colors without errors", () => {
    render(<ColorList colors={[]} />)
});

test("Renders a list of colors without errors", () => {
    render(<ColorList colors={testColors} />)
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
    const { rerender } = render(<ColorList colors={testColors} editing={true} />)
    const editColorLegend = screen.getByText(/edit color/i);
    const labelForColorName = screen.getByText(/color name/i);
    const labelForColorHex = screen.getByText(/hex code/i);

    expect(editColorLegend).toBeInTheDocument()
    expect(labelForColorName).toBeInTheDocument();
    expect(labelForColorHex ).toBeInTheDocument();

    rerender(<ColorList colors={testColors} editing={false} />);
    
    expect(editColorLegend).not.toBeInTheDocument();
    expect(labelForColorName).not.toBeInTheDocument();
    expect(labelForColorHex).not.toBeInTheDocument();
});
