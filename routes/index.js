import express from 'express';
import {getResult,chat} from "../handlers/indexHandler.js";
import {textChunck} from "../aiLogic/textChunck.js";


export const indexRoute = express.Router();

const chatHistory = []

//NOTE: query base on the data in the fakeData.js
//ie: {queried:"do you have any relaxing music"}
//The text.txt is isnt embeded yet

function indexRouteHandler(req, res) {
    res.send(`please use post method and query your input`);
}


async function indexPostRouteHandler(req, res) {
    const {query} = req.body

    if(!query){
        return res.status(401).send("Please provide a query")
    }
    const results = await getResult(query)
    const chatResult = await chat(results, query, chatHistory)

    if (chatResult) {
        res.status(200).json({
            status: "success",
            responses: chatResult
        })
    } else {
        res.status(400).json({
            status: "failed",
            responses: "No response"
        })
    }
}


indexRoute.route('/')
    .get(indexRouteHandler)
    .post(indexPostRouteHandler);
