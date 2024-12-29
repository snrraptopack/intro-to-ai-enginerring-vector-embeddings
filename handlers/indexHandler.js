import {similarityResult} from "../aiLogic/similarityResult.js";
import {createEmbedding} from "../aiLogic/embedding.js";
import {generativeModel} from "../config/aiConfig.js";

export async function getResult(query){
    const result = await similarityResult(await createEmbedding(query))
    const retrievedData = result.map((data) => data.content)
    return JSON.stringify(retrievedData)
}

export async function chat(retrievedData,query,chatHistory){
    const ch = generativeModel.startChat({
        history:chatHistory
    })
    const result = await ch.sendMessage(`context:${retrievedData} question:${query}`)
    return result.response.text()
}
