import admin from "firebase-admin";
import { DB } from "./firefuse";

admin.initializeApp();

export * from "./functions";

DB.doc("accounts/uid");
