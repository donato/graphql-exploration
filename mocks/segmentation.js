// @flow
 
export type Metrics = Array<String>;
export type Dimensions = Array<String>;
export type Filters = Array<String>;

export type CustomQuery = {
    analytics_id: String,
    start_date: String,
    end_date: String,
    page: Number,
    per_page: Number,

    metrics: Metrics,
    dimensions: Dimensions,
    filters: Filters
}

export type Results = Array<Number>;

/*
export type ResultsRow = {
    group_values: Array<{key:Number, display:String}>
}
*/
export type Row = {
    date: String,
    analytics_id:String,
    
    dimensions: Dimensions,
    results: Results
}

export type SegmentationData= Array<Row>;

function getSegmentationData(obj : CustomQuery):Promise<SegmentationData> {
    return new Promise(function(resolve, reject) {
        resolve([
            {
                date: '2016-07-01',
                analytics_id: 'donato-1',
                dimensions: [
                    {
                        type: 'media_id',
                        value: 'id_1'
                    },
                    {
                        type: 'country_code:',
                        value: 'CA'
                    }
                ],
                metrics: ['embed', 'play', 'complete'],
                results: [100,90,50]
            },
            {
                date: '2016-07-01',
                analytics_id: 'donato-1',
                dimensions: [
                    {
                        type: 'media_id',
                        value: 'id_2'
                    },
                    {
                        type: 'country_code:',
                        value: 'CA'
                    }
                ],
                metrics: ['embed', 'play', 'complete'],
                results: [100,90,50]
            },
            {
                date: '2016-07-01',
                analytics_id: 'donato-1',
                dimensions: [
                    {
                        type: 'media_id',
                        value: 'id_3'
                    },
                    {
                        type: 'country_code:',
                        value: 'CA'
                    }
                ],
                metrics: ['embed', 'play', 'complete'],
                results: [100,90,50]
            }
        ])
    })
}

module.exports = {
    getSegmentationData 
}
