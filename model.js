// javascript module syntax for fetch
// async function query(data) {
// 	const response = await fetch(
// 		"https://router.huggingface.co/v1/chat/completions",
// 		{
// 			headers: {
// 				Authorization: `Bearer ${process.env.HF_TOKEN}`,
// 				"Content-Type": "application/json",
// 			},
// 			method: "POST",
// 			body: JSON.stringify(data),
// 		}
// 	);
// 	const result = await response.json();
// 	return result;
// }

// query({ 
//     messages: [
//         {
//             role: "user",
//             content: "What is the capital of France?",
//         },
//     ],
//     model: "openai/gpt-oss-120b:together",
// }).then((response) => {
//     console.log(JSON.stringify(response));
// });

// js for huggingfacejs 

// import { InferenceClient } from "@huggingface/inference";

// const client = new InferenceClient(process.env.HF_TOKEN);

// const chatCompletion = await client.chatCompletion({
//     provider: "together",
//     model: "openai/gpt-oss-120b",
//     messages: [
//         {
//             role: "user",
//             content: "What is the capital of France?",
//         },
//     ],
// });

// console.log(chatCompletion.choices[0].message);


// js for openaijs

// import { InferenceClient } from "@huggingface/inference";

// const client = new InferenceClient(process.env.HF_TOKEN);

// const chatCompletion = await client.chatCompletion({
//     provider: "together",
//     model: "openai/gpt-oss-120b",
//     messages: [
//         {
//             role: "user",
//             content: "What is the capital of France?",
//         },
//     ],
// });

// console.log(chatCompletion.choices[0].message);
// import { OpenAI } from "openai";
// import dotenv from "dotenv";
// dotenv.config();
// const client = new OpenAI({
//     baseURL: "https://router.huggingface.co/v1",
//     apiKey: process.env.HF_TOKEN,
// });

//  const chatCompletion = await client.chat.completions.create({
// 	model: "openai/gpt-oss-120b:together",
//     messages: [
//         {
//             role: "user",
//             content: "TypeError: Cannot read property 'x' of undefined",
//         },
//     ],
// });

// console.log(chatCompletion.choices[0].message);
