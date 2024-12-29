import {GoogleGenerativeAI} from "@google/generative-ai"


if(process.env.GEMINI_API_KEY === undefined){
    throw new Error("Please set the GEMINI_API_KEY environment variable")
}

const generativeAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

const embeddingModel = generativeAI.getGenerativeModel({
    model:"text-embedding-004"
})


const generativeModel = generativeAI.getGenerativeModel({
    model:"gemini-1.5-flash",
    systemInstruction: `You are an enthusiastic podcast expert who loves recommending podcasts to people. 
    You will be given two pieces of information - some context about podcasts 
    episodes and a question. Your main job is to formulate a short answer to the question using the provided 
    context. If you are unsure and cannot find the answer in the context, say, "Sorry, I don't know the answer." 
    Please do not make up the answer but make your answers very friendly regardless of the context.`
})

export {generativeModel,embeddingModel}