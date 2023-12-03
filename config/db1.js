const mongoose=require('mongoose')

const connectToDb=async()=>{
    mongoose.connect()

    .then((conn)=>{
        console.log(`connected to db:${conn.connection.host}`);

    })
    .catch((err)=>{
       console.log(err.message);
       console.log("there is an error");
       process.exit(1)
    })

}

module.exports=connectToDb

