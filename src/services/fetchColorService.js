import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = (setColor) => {
    console.log('fetchColorService.js ln:4 setColor', setColor);
    axiosWithAuth.get('http://localhost:5000/api/colors')
    .then(res=>{
        console.log('');

    })
    .catch(err =>{
        console.log('error');
    })
    
}

export default fetchColorService;