import functions from "firebase-functions";
import admin from "firebase-admin";
import { DB } from "./firefuse";
import * as common from "common";
admin.initializeApp();

export const splitArray = functions.https.onRequest(async (req, res) => {
  const ans = common.splitArray([1, 2, 3, 4, 5], 2);
  res.json(ans);
});

export const logUser = functions.firestore
  .document("/accounts/{uid}")
  .onCreate((snap, context) => {
    functions.logger.log(snap.data());
  });
