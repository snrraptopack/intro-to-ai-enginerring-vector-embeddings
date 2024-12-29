import {readFile} from 'fs';
import path from "path"
import {fileURLToPath} from 'url';
import { TextLoader } from "langchain/document_loaders/fs/text";

import {RecursiveCharacterTextSplitter } from "langchain/text_splitter"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export async function textChunck(filename) {
    const textLoader = new TextLoader(path.join(__dirname, filename));
    const docs = await textLoader.load()

    const textSplitter = new RecursiveCharacterTextSplitter({
            chunkSize: 150,
            chunkOverlap: 10,
        });

        const text = await textSplitter.splitText(docs[0].pageContent)
        console.log(text[0])
        console.log(text[1])
        console.log(text[2])
}

// export  async function textChunck(fileName){
//     readFile(path.join(__dirname,fileName), 'utf8', async (err, data) => {
//         if (err) {
//             console.error(err)
//             return
//         }
//         const textSplitter = new RecursiveCharacterTextSplitter({
//             chunkSize: 150,
//             chunkOverlap: 15,
//         });
//
//         const text = await textSplitter.splitText(data)
//         console.log(text.length)
//     })
// }