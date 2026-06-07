import { serve } from "inngest/next";
import { inngest } from "../../../inngest/client";
import { genrateReview } from "@/inngest/functions/review";
import { processTask } from "@/inngest/functions/process-task";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [processTask,genrateReview],
});