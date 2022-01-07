import axios from 'axios'
const url='http://localhost:3000/'

export const authrnticatessignup= async (user) =>{
    try{
        return await axios.post(`${url}/signup`,user)
    }catch(error){
        console.log('error calling signup')
    }
}