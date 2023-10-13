export const resolvers = {
    Query: {
        links: async (_parent: any, _args: any, ctx: { prisma: { link: { findMany: () => any; }; }; }) => await ctx.prisma.link.findMany(),
    },
}