import bodyParser from "body-parser";
import express from 'express';
import cors from 'cors';

import api from "./routes/api";
const app = express();
const PORT = 3001;
app.use(bodyParser.json());
app.use(cors());

app.use('/api', api);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
