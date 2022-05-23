import * as common from "common";
import * as functions from "firebase-functions";

export const sayHelloMonorepo = functions.https.onRequest(async (req, res) => {
  const ans = common.sayHelloMonorepo();
  res.send(ans);
});
