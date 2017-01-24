// @flow
 
export type UsageQuery = {
    start_date: String,
    end_date: String,
    analytics_id: String
}

export type UsageBlob = {
    date: String,
    analytics_id:String,
    
    plays:Number,
    ad_impressions:Number,
}

export type UsageData = Array<UsageBlob>;

function getUsageData(obj : UsageQuery):Promise<UsageData> {
    return new Promise(function(resolve, reject) {
        resolve([
            {
                date: '2016-07-01',
                analytics_id: 'donato-1',
                plays: 100,
                ad_impressions: 10
            },
            {
                date: '2016-07-02',
                analytics_id: 'donato-1',
                plays: 200,
                ad_impressions: 20
            },
            {
                date: '2016-07-03',
                analytics_id: 'donato-1',
                plays: 300,
                ad_impressions: 20
            }
        ])
    })
}

module.exports = {
    getUsageData 
}
