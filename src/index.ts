import express from 'express';
import router from './routes/app.routes';


const app = express();


app.set("PORT", 3000);

app.use(express.json());

app.use("/", router);


app.listen(app.get("PORT"), () => {
    console.log(`Server is running on http://localhost:${app.get("PORT")}`);
})