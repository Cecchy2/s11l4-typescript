export interface INews{

    
        id:           number;
        title:        string;
        url:          string;
        image_url:    string;
        news_site:    string;
        summary:      string;
        published_at: Date;
        updated_at:   Date;
        featured?:     boolean;
        /* launches:     Launch[]; */
        events?:       Event[];
    }
    
/* {
    "count": 21346,
    "next": "https://api.spaceflightnewsapi.net/v4/articles/?limit=10&offset=10",
    "previous": null,
    "results": [
        {
            "id": 24602,
            "title": "Hera in the doghouse",
            "url": "https://www.esa.int/ESA_Multimedia/Images/2024/07/Hera_in_the_doghouse",
            "image_url": "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2024/07/hera_in_the_doghouse/26223594-1-eng-GB/Hera_in_the_doghouse_card_full.jpg",
            "news_site": "ESA",
            "summary": "Hera in the doghouse",
            "published_at": "2024-07-11T09:40:00Z",
            "updated_at": "2024-07-11T07:47:35.601844Z",
            "featured": false,
            "launches": [],
            "events": []
        }, */