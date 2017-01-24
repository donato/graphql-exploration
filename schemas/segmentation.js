let {
    graphql,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLList,
    GraphQLString
} = require('graphql');

let getMediaData = require('../mocks/botr.js').getMediaData;
let {Video} = require('./video.js');

let CustomObjectDimension = new GraphQLObjectType({
    name: 'SegmentedDimension',
    description: 'blah',
    fields: () => ({
        type: {
            type: GraphQLString,
            description: "mediaid, country, domain, etc..."
        },
        value: {
            type: GraphQLString,
            description: 'the specific instance of the type'
        }
    })
});

let SegmentationData = new GraphQLObjectType({
    name: 'Segs',
    description: 'blah',
    fields: () => ({
        analytics_id: {
            type: GraphQLString,
            description: 'the analytics id for this account'
        },
        date: {
            type: GraphQLString,
            description: 'Date this data is from'
        },
        dimensions: {
            type: new GraphQLList(CustomObjectDimension),
            description: 'Num Plays'
        },
        metrics: {
            type: new GraphQLList(GraphQLString),
            description: 'Num Plays'
        },
        results: {
            type: new GraphQLList(GraphQLInt),
            description: 'Num Plays'
        },
        video: {
            type: Video,
            description: 'videos media ids',
            resolve: (r) => {
                let media_id = r.dimensions.reduce(function(memo, dimension) {
                    if (dimension.type === 'media_id') {
                        memo = dimension.value;
                    }
                    return memo;
                }).value;
                return getMediaData({ id: media_id})
            }
        }

    })
});

module.exports = {
    SegmentationData
}