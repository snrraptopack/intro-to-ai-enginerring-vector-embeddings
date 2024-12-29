import {createClient} from "@supabase/supabase-js";


if(process.env.SUPABASE_URL === undefined || process.env.SUPABASE_API_KEY === undefined){
    throw new Error("Please set the SUPABASE_URL and SUPABASE_KEY environment variables")
}

export const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_API_KEY)


//This is the query to create the embedding column in the table gemini uses 768 dimensions
// and open ai uses 1536 dimensions
// if in case you want to find the type of dimension a model created just log the length of the embedding array
//create table documents (
//   id bigserial primary key,
//   content text,
//   embedding vector(768)
// );