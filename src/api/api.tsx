import axios from "axios";
export const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test',
});

export const api = {
    getRespons(status: boolean){
      return   instance.post('',{success: status})
    }
}

// export const tryCatch = async ( onCheckClick: ()=>any) => {
//     try {
//         const response = await onCheckClick();
//         console.log('answer: ', response.data);
//         return response;
//     } catch (error) {
//         console.log('error: ', {...error});
//         return 'error';
//     }
// };