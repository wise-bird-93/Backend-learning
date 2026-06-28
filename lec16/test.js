const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const { MongoClient } = require("mongodb");

const uri =
"mongodb+srv://chatappuser:yuvi1290@cluster0.jsv13mb.mongodb.net/airbnb?retryWrites=true&w=majority&appName=Cluster0";

async function test() {
    try {
        const client = await MongoClient.connect(uri);
        console.log("Connected Successfully");
        await client.close();
    } catch (err) {
        console.error(err);
    }
}

test();