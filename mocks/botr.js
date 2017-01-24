// @flow


export type MediaData = {
    media_id: String,
    title: String,
    
    tags: Array<String>,
    duration: Number,
    quality_levels: Array<String>
}

export type ContentData = Array<MediaData>;

let database = [
    {
        media_id: 'id_1',
        title: 'Puppy is surprised by this one trick',
        tags: ['pets'],
        duration: 512.264,
        quality_levels: ['240p', '360p']
    },
    {
        media_id: 'id_2',
        title: 'Super bowl XXI',
        tags: ['sports'],
        duration: 420.933,
        quality_levels: ['240p', '360p']
    },
    {
        media_id: 'id_3',
        title: 'Topical political commentary',
        tags: ['monday', 'evening'],
        duration: 76661.103,
        quality_levels: ['240p', '720p']
    }
];


function getMediaData(obj):Promise<ContentData> {
    return new Promise(function(resolve, reject) {
        let record = database.filter( (r) => (r.media_id === obj.id) )
        resolve(record[0])
    })
}

module.exports = {
    getMediaData: getMediaData
};
