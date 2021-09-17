import React, { useEffect, useState } from "react";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import fetchColorService from '../services/fetchColorService';
import axiosWithAuth from "../helpers/axiosWithAuth";
import saveEditService from "../services/saveEditService";
// import { useHistory } from "react-router";
import deleteColorService from "../services/deleteColorService";


const BubblePage = (props) => {
  console.log('BubblesPage.js ln:12 props', props);
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);
  // const { push } = useHistory();

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
    saveEditService(editColor);
    fetchColorService(setColors);
    // push('bubbles');
    props.history.push('/bubbles');
  };

  const deleteColor = (colorToDelete) => {
    // console.log('BubblePage.js ln:27 colorToDelete', colorToDelete);
    // console.log('BubblePage.js ln:28 colorToDelete.id', colorToDelete.id);
    deleteColorService(colorToDelete.id)
    fetchColorService(setColors);
  };

  useEffect (() =>{
    axiosWithAuth();
    fetchColorService(setColors);
  },[])

  return (
    <div className="container">
      <ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor}/>
      <Bubbles colors={colors}/>
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete toggleEdit, saveEdit, deleteColor and functions
