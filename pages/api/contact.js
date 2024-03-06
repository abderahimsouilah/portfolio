import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, phone, email, subject, message } = req.body;
    if (
      !email ||
      !email.includes('@') ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'invalide input' });
    }
    const newMessage = { name, phone, email, subject, message };
    let client;
    var mongo = process.env.MONGO_URI;
    try {
      client = await MongoClient.connect(mongo);
    } catch (err) {
      console.error('Error connecting to MongoDB:', err);
      res.status(500).json({ message: err });
      return;
    }
    const db = client.db();
    try {
      const result = await db.collection('contact').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (err) {
      client.close();
      res.status(500).json({ message: 'erro in inserting the message' });
      return;
    }
    client.close();
    console.log(newMessage);
    res.status(201).json({ message: 'done' });
  }
}
export default handler;
