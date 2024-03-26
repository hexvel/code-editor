import { v } from 'convex/values'

import { mutation, query } from './_generated/server'

export const getById = query({
	args: {
		id: v.id('code'),
	},
	handler: async (ctx, args) => {
		return await ctx.db.get(args.id)
	},
})

export const create = mutation({
	args: {
		id: v.string(),
		content: v.string(),
	},
	handler: async (ctx, args) => {
		const document = await ctx.db.insert('code', {
			id: args.id,
			content: args.content,
		})

		return document
	},
})
