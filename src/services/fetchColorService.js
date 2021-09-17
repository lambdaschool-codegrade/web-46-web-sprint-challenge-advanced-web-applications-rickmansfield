import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = (setColors) => {
    console.log('fetchColorService.js ln:4 setColors', setColors);
    axiosWithAuth()
    .get('colors')
    .then(res=>{
        // console.log('fetchColorService ln:7 res', res);
        // console.log('fetchColorService ln:7 res', res.data);
        setColors(res.data)

    })
    .catch(err =>{
        console.log('error');
    })
    
}

export default fetchColorService;