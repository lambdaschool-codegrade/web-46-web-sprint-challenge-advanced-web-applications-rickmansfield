import React from 'react';
import { render, screen, } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

test("Renders without errors with blank color passed into component", () => {
    render(<Color color={{code: {hex:""}, color: "", id:0}}/>);
});
  
test("Renders the color passed into component", () => {
    render(<Color color={{code: {hex:"99ddbc"}, color: "limegreen", id:1}}/>);
    const testColor = screen.getByText(/limegreen/i);
    expect(testColor).toBeInTheDocument();
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
    const mockToggleFunc = jest.fn();
    const mockDeleteFunc = jest.fn();
    render(<Color color={{code: {hex:""}, color: "", id:1}}
    deleteColor={mockDeleteFunc}
    toggleEdit={mockToggleFunc}
    />);
    let theXToDelete = screen.getByText(/x/i);//it says "icon" on line 39 but it's a text letter "x". 
    userEvent.click(theXToDelete);
    expect(mockToggleFunc).toHaveBeenCalled();
    expect(mockDeleteFunc).toHaveBeenCalled();
    expect(mockDeleteFunc.mock.calls).toHaveLength(1);
    expect(mockToggleFunc.mock.calls).toHaveLength(1);
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
    const mocksetEditColorFunc = jest.fn();
    const mockToggleEditFunc = jest.fn();
    render(<Color color={{code: {hex:""}, color: "", id:1}}
    setEditColor={mocksetEditColorFunc}
    toggleEdit={mockToggleEditFunc}
    />);
    let theColorDiv = screen.getByTestId(/color/i);
    userEvent.click(theColorDiv);
    expect(mockToggleEditFunc).toHaveBeenCalled();
    expect(mocksetEditColorFunc).toHaveBeenCalled();
    
});