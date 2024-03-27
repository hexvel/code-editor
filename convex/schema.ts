import { defineSchema, defineTable } from "convex/server";

import { v } from "convex/values";

export default defineSchema({
  code: defineTable({
    content: v.optional(v.string()),
    langSupport: v.optional(v.string()),
  }),
});
