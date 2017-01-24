let {
    graphql,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString
} = require('graphql');

let UsageData = new GraphQLObjectType({
    name: 'UsageData',
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
        plays: {
            type: GraphQLInt,
            description: 'Num Plays'
        },
        ad_impressions: {
            type: GraphQLInt,
            description: 'Num Plays'
        }

    })
});

module.exports = {
    UsageData 
};
