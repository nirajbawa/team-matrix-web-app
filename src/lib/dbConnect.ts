import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};
let cachedPromise: Promise<typeof mongoose> | null = null;

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    return;
  }

  if (cachedPromise) {
    await cachedPromise;
    return;
  }

  try {
    const opts = {
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 10000,
    };

    cachedPromise = mongoose.connect(process.env.MONGO_DB_URI || "", opts);
    const db = await cachedPromise;
    
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    cachedPromise = null;
    throw error;
  }
}

export default dbConnect;
