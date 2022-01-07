import mongoose from 'mongoose';

const Connection = async (username, password) =>{
    
    
const URL=`mongodb+srv://${username}:${password}@ecommerseweb.kmri9.mongodb.net/ECOMMERSEWEB?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;

    