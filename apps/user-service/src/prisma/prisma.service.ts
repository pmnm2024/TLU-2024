import { Injectable, OnModuleInit, INestApplication } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { MongoClient } from "mongodb"; 
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
    await this.createGeoIndex(); 
  }

  private async createGeoIndex() {
    // Kết nối với MongoDB
    const client = new MongoClient('mongodb://admin:admin@db:27017/user-db?authSource=admin');
    const db = client.db('user-db');
    const collection = db.collection('User');
    await collection.createIndex({ "location": "2dsphere" });
    console.log("2dsphere index created for User.location");
    
    await client.close(); // Đóng kết nối sau khi thực hiện 
  }
}
