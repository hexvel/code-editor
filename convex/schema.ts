import { defineSchema, defineTable } from "convex/server";

import { v } from "convex/values";

export default defineSchema({
  code: defineTable({
    id: v.string(),
    content: v.optional(v.string()),
  }),
});
