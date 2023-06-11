const { client, MongoClient } = require('./databaseConnection');


async function create(collectionName, data) {
    try {
        await client.connect();
        const database = client.db('test');
        const collection = database.collection(collectionName);
        const result = await collection.insertOne(data);
        return result;
    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
}

async function read(collectionName, query) {
    try {
        await client.connect();
        const database = client.db('test');
        const collection = database.collection(collectionName);
        const result = await collection.find(query).toArray();
        return result;
    }
    catch (error) {
        console.log(error);
    }
    finally {
        await client.close();
    }
}

async function update(collectionName, query, newData) {
    const document = await read(collectionName, query);
    try {
        await client.connect();
        const database = client.db('test');
        const collection = database.collection(collectionName);
        const result = await collection.updateOne(document, { $set: newData });
        return result;
    }
    catch (error) {
        console.log(error);
    }
    finally {
        await client.close();
    }
}

async function remove(collectionName, query) {
    const document = await read(collectionName, query);
    try {
        await client.connect();
        const database = client.db('test');
        const collection = database.collection(collectionName);
        const result = await collection.deleteOne(document);
        return result;
    }
    catch (error) {
        console.log(error);
    }
    finally {
        await client.close();
    }
}

module.exports = { create, read, update, remove };