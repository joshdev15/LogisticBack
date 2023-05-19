import dotenv from "dotenv";
import cors from "cors";
import api from "./src/api/api.mjs";

dotenv.config();

const port = process?.env?.PORT ? process.env.PORT : 9876;
const app = api.app;

app.use(cors());

app.listen(port, () => {
  console.log(`Running in http://localhost:${port}`);
});
