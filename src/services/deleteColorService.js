import axiosWithAuth from "../helpers/axiosWithAuth";

import React from 'react'

const deleteColorService = (idOfColor) => {
    console.log('deleteColorService ln:6 idOfColor', idOfColor);
    axiosWithAuth()
    .delete(`colors/${idOfColor}`)
}
export default deleteColorService;