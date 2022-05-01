import {MongoClient} from 'mongodb'

export async function connectToDataBase() {
    const client = await MongoClient.connect('mongodb+srv://kudim:Kudim1984@cluster0.vpgd6.mongodb.net/auth-demo?retryWrites=true&w=majority')

    return client
}
