import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './routers/posts.js';

const app = express();
const PORT = process.env.port || 5000;
//limit client upload
app.use(bodyParser.json({ limit:'30mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());

//http://localhost:5000/posts
//router setting
app.use('/posts', posts);

http: app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})


