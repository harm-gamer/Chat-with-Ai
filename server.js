import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
const app = express();
import OpenAI from 'openai';
import os from 'os';

app.use(cors());
app.use(express.json());

const client =new OpenAI({
    baseUrl:"https://router.huggingface.co/v1",
    apiKey: `${process.env.HF_TOKEN}`
    ,}
)

dotenv.config();

app.post('/error',async (req,res) =>{

    const error= req.body.error;
    const question = req.body.question;
    
    try{   

 let completion = client.chat.completions.create({
    model:"moonshotai/Kimi-K2-Instruct",
    messages:[
        {
            "role": "user",
            "content": `Explain this ${error}`
        },
        {
            role : "user",
            content : `Answer the question: ${question} in detail.`
        }
    ],
})

     res.status(200).json({response : completion.choices[0].message});

    }catch(e){
         res.status(500).json({error : e.message});
    }
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})
