import OpenAI from "openai";
import { OPEN_AI_KEY } from "../components/constants/constants";

const Openai = new OpenAI({
  apiKey: OPEN_AI_KEY,
  dangerouslyAllowBrowser: true,
});

export default Openai;
