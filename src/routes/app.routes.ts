import express, { Request, Response } from 'express';
import axios from 'axios';

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    let data: Array<{}> = [];
    //console.log(data.length);
    for (let i = 0; i < 20;i++) {
        let rq = await axios.get("https://api.chucknorris.io/jokes/random");
        data.push({
            id: rq.data.id,
            value: rq.data.value,
            url: rq.data.url
        });
    };
    data = [...new Set(data)];

    res.send(data);
});


export default router;