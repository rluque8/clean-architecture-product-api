import mongoose from "mongoose";

export async function connectDb(url: string) {
  mongoose.connection.on('connecting', function () {
    console.info('MongoDB: Connecting');
  });

  mongoose.connection.on('error', function () {
    console.error('MongoDB: Error');
    void mongoose.disconnect();
  });

  mongoose.connection.on('open', function () {
    console.info('MongoDB: Connected');
  });

  mongoose.connection.on('reconnected', function () {
    console.info('MongoDB: Connection Restablished');
  });

  mongoose.connection.on('disconnected', function () {
    console.info('MongoDB: Disconnected');
  });

  await mongoose.connect(url);
}
