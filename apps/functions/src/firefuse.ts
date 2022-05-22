import admin from "firebase-admin";
import * as fuse from "firefuse-admin";
import { Schema } from "model";

// @ts-expect-error TS2589
export const DB = admin.firestore() as fuse.FuseFirestore<Schema>;
