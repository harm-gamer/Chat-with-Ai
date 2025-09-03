import { OpenAI } from "openai";
import dotenv from "dotenv";
dotenv.config();
import express from "express";


const app = express();
app.use(express.json());
const client = new OpenAI({
	baseURL: "https://router.huggingface.co/v1",
	apiKey: process.env.HF_TOKEN,
});

app.post("/chat",async (req , res) =>{
    const {message} = req.body;
    try{
        const chatCompletion = await client.chat.completions.create({
	model: "openai/gpt-oss-120b:together",
    messages: [
        {
            role: "user",
            content: `${message}`,
        },
    ],
});
        res.status(200).json({response : chatCompletion.choices[0].message.content});
    }catch(e){
        res.status(500).json({error : e.message});
    }
})
const port = process.env.PORT;
app.listen(port,() =>{
    console.log("Server is running on port 3000");
})