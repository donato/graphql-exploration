let {
    graphql,
    GraphQLObjectType,
    GraphQLFloat,
    GraphQLList,
    GraphQLString
} = require('graphql');


let Video = new GraphQLObjectType({
    name: 'MediaContent',
    description: 'blah',
    fields: () => ({
        media_id: {
            type: GraphQLString
        },
        title: {
            type: GraphQLString
        },
        tags: {
            type: new GraphQLList(GraphQLString)
        },
        duration: {
            type: GraphQLFloat
        },
        quality_levels: {
            type: new GraphQLList(GraphQLString)
        }

    })
});

module.exports = {
    Video
}
