import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import propRoutes from './routes/properties/props.js';




const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/', propRoutes);
// app.use(express.json());



const PORT = process.env.PORT || 5002;

mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    try {
        app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
    } catch (error) {
        (error) => console.log(error.message);
    }
});



// connect();
// async function connect() {
//         const client = new MongoClient(URL);

//     try {
//         await client.connect();
//         const db = client.db('properties');
//         console.log(`Connected to database ${db.databaseName}`);

//         // Get the collections
//         // const collections = await db.collections();
//         // collections.forEach(c => console.log(c.collectionName));

//         const properties = db.collection("properties");
//         // const searchCursor = await properties.find({"market":"Houston"});

//         // const result = await searchCursor.toArray();
//         // console.table(result);
//         //console.log(await searchCursor.hasNext());
//         // while (await searchCursor.hasNext()) {
//         //     console.log(await searchCursor.next());
//         // }



//         // Insert into Collection
//         const insertCursor = await properties.insertOne(prop, () => {
//             if (err) throw err;
//             console.log('1 Prop Added');
//             response.json(res);
//         });

//         console.log(insertCursor.insertedCount);


//     } catch (error) {
//         console.log(error)
//     } finally {
//         client.close();
//     }
// }

