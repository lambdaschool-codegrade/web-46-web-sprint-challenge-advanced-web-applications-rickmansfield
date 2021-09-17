import axiosWithAuth from "../helpers/axiosWithAuth";

const deleteColorService = (idOfColor) => {
    // console.log('deleteColorService ln:6 idOfColor', idOfColor);
    axiosWithAuth()
    .delete(`colors/${idOfColor}`)
}
export default deleteColorService;