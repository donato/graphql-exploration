let {
    graphql,
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLList,
    GraphQLString
} = require('graphql');

let {
    SegmentationData,
    UsageData,
    Video
} = require('./schemas/index.js');

let {
    getUsageData,
    getMediaData,
    getSegmentationData
} = require('./mocks/index.js');

console.log(SegmentationData)
let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            usage: {
                type: new GraphQLList(UsageData),
                args: {
                    id: {
                        description: 'id of publisher',
                        type: new GraphQLNonNull(GraphQLString)
                    }
                },
                resolve: (q) => getUsageData(q)
            },
            media: {
                type: Video,
                args: {
                    id: {
                        description: 'id of media',
                        type: new GraphQLNonNull(GraphQLString)
                    }
                },
                resolve: (a,b) => getMediaData(b)
            },
            custom: {
                type: new GraphQLList(SegmentationData),
                args: {
                    id: {
                        description: 'id of publisher',
                        type: new GraphQLNonNull(GraphQLString)
                    }
                },
                resolve:(q) => getSegmentationData(q)
            }
        }
    })
});

let query = `{
    custom(id: "donato-1") {
        date
        dimensions { type value }
        results
        video {
            title
            tags
        }
    }
}`

graphql(schema, query).then(result => {
    console.log(JSON.stringify(result, 1, ' '))
});
