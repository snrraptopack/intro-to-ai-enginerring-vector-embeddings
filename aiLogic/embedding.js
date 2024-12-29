import {embeddingModel} from "../config/aiConfig.js";
import {supabase} from "../config/supabaseConfig.js";


export async function createEmbedding(text) {
    const result = await embeddingModel.embedContent(text)
    return result.embedding.values
}

export async function createEmbeddingsWithText(texts) {

    const isArray = typeof texts === 'object' && texts instanceof Array
    if(isArray){
        return  await Promise.all(texts.map(async (text) => {
            return {content:text, embedding: await createEmbedding(text)}
        }))
    }
    return {content:texts, embeddings: await createEmbedding(texts)}
}

export async function insertEmbeddingIntoDB(embedding) {
    const { error} = await supabase
        .from('embeddingdocument')
        .insert(embedding)

    if(error){
        console.log(error)
        return false
    }
    console.log("Data inserted")
    return true
}


//a dummy function
// async function addEmbedding(){
//
// const embeddings = await createEmbeddingsWithText( fakeData)
//  const isInserted = await insertEmbeddingIntoDB(embeddings)
// }



