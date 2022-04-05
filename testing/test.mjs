import * as tested from "../output/index.js"


async function run() {
    var pros = []
    pros.push(runAssetTest())
    pros.push(runTextTest())
    pros.push(runDataTest())
    pros.push(runPostTest())
    
    await Promise.all(pros)
    evaluate()
}


var assetTest = null
async function runAssetTest() {
    try {
        var assetURL = "https://drgary.at/img/logo.svg"
        var result = await tested.getAsset(assetURL)
        console.log(result)
        assetTest = "success"
    } catch(error) {
        assetTest = error.message
    }

}

var textTest = null 
async function runTextTest() {
    try {
        var url = "https://api.kraken.com/0/public/Assets"
        var result = await tested.getText(url)
        console.log(result)
        textTest = "success"
    } catch(error) {
        textTest = error.message
    }

}

var dataTest = null
async function runDataTest() {
    try {
        var url = "https://api.kraken.com/0/public/Assets"
        var result = await tested.getData(url)
        console.log(JSON.stringify(result, null, 4))
        dataTest = "success"
    } catch(error) {
        dataTest = error.message
    }

}


var postTest = null
async function runPostTest() {
    try {
        var url = "https://secrets.extensivlyon.coffee/addNodeId"
        var data = {}
        var result = await tested.postData(url, data)
        console.log(JSON.stringify(result, null, 4))
        postTest = "success"    
    } catch(error) {
        postTest = error.message
    }
}

function evaluate() {
    var allResults = {
        assetTest,
        textTest,
        dataTest,
        postTest
    }
    console.log(JSON.stringify(allResults, null, 4))
}

run()