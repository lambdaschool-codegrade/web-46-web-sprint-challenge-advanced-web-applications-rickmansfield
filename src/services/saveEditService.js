import axiosWithAuth from "../helpers/axiosWithAuth";

const saveEditService = (saveEditedColor) =>{
    console.log('savedEditService.js ln:4 saveEditedColor', saveEditedColor);
    const { id } = saveEditedColor;
    axiosWithAuth()
    .put(`colors/${id}`, saveEditedColor)
}
export default saveEditService