import { MongoClient } from "mongodb";

// handle the user requst to the endpoint of 'api/contact'
async function handler(req, res) {
  if (req.method === "POST") {
    // collection information from the body
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    let client;
    // store in a database
    const newMessage = {
      email,
      name,
      message,
    };

    const connectionString = `mongodb+srv://${process.env.NEXT_PUBLIC_MONGODB_USERNAME}:${process.env.NEXT_PUBLIC_MONGODB_PASSWORD}@${process.env.NEXT_PUBLIC_MONGODB_CLUSTER}.lhbqrpk.mongodb.net/${process.env.NEXT_PUBLIC_MONGODB_DATABASE}?retryWrites=true&w=majority`;
    console.log(connectionString)
    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: "could not connect to database" + connectionString });
      return;
    }
    // we can switch another db when we do the following
    // const db = client.db('another db')
    const db = client.db();
    try {
      const result = await db.collection("messages").insertOne(newMessage); // create if not exist
      newMessage.id = result.insertedId; // we can access to the auto generated id
    } catch (error) {
      client.close();
      res.status(500).json({ message: "error when connect to DB collection" });
      return;
    }

    client.close();
    res
      .status(201)
      .json({ message: "successfully stored message", newMessage: newMessage });
    return;
  }
}

export default handler;
