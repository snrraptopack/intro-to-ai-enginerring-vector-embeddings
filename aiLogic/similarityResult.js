import {supabase} from "../config/supabaseConfig.js";


//match_document is a function that takes in three parameters
// query_embedding
//  match_threshold (from 0 to 1)
//  match_count (number of result to be returned if match found)

export async function similarityResult(queryEmbedding){
    const {data , error } = await supabase.rpc("match_documents",{
        query_embedding:queryEmbedding,
        match_threshold: 0.5,
        match_count : 1
    })

    if(error){
        console.log("An error occurred while trying to get similarity result")
        console.log(error)
        return false
    }

    return data
}
