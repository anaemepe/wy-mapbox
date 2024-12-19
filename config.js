var config = {
    style: 'mapbox://styles/anaeme/cm3opamla00sd01s96j7x7b73',
    accessToken: 'pk.eyJ1IjoiYW5hZW1lIiwiYSI6ImNtMXl5NDdvZzAxbTgybHF0Z3d2ZTluNnUifQ.cwAqJMeZSXDw6ZYCXUSQ-A',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false, // this is a little map showing a greater territory
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
  //  title: 'The Title Text of this Story',
  //  subtitle: 'A descriptive and interesting subtitle to draw in the reader',
  //  byline: 'By Ana Muñoz',
    footer: 'Source: <a href="https://opencorporates.com" target="_blank">OpenCorporates</a>. <br> Created by Ana Muñoz using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'A NEW ERA FOR U.S. LEGAL ENTITIES?',
            description: 'For many years, Delaware has led the number of annual incorporations per capita in the US.<br>Not anymore.',
            image: '',
            location: {
                center: [-87.34559, 37.98829],
                zoom: 3.88,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'Delaware',
                     opacity: 1,
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'Delaware',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'WYOMING, THE NEW INCORPORATIONS LEADER',
            description: 'Starting last year, Wyoming now leads all states in the number of legal entities per 1,000 inhabitants.<br>A legal entity is a company on paper. For a company to exist, it must engage in some form of business activity. whether by selling products or offering services. So while all companies are legal entities, not all legal entities can be considered companies.',
            image: 'WyomingGrowthW.svg',
            location: {
                center: [-109.636, 42.861],
                zoom: 5.7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'wystate',
                     opacity: 0.3,
                 }
            ],
            onChapterExit: [
                 {
                    // layer: 'wystate',
                    // opacity: 0
                 }
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: '4 CITIES, THOUSANDS OF ENTITIES',
            description: 'In Wyoming, most LLC, a very popular form of legal entity, are registered in four cities: Sheridan, Cheyenne, Buffalo and Casper.<br>Sheridan alone hosts 42% of all Wyoming LLC.',
            location: {
                center: [-107.060, 43.024],
                zoom: 6.48,
                pitch: 60,
                bearing: 43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'wyomingcities',
                    opacity: 1,
                    //duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'wyomingcities',
                    opacity: 0
                },
                {
                    layer: 'wystate',
                    opacity: 0
                }
            ]
        },
        {
            id: 'fourth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'REGISTERED AGENTS PLAY A KEY ROLE',
            image: '30NGould.png',
            description: 'When a legal entity does not have an office, the agent is responsible for receiving paperwork, and their address serves as the official address for the entities they represent.<br> In Wyoming, this has resulted in massive numbers of entities sharing a single address—that of their agents.<br> Take Registered Agents Inc., located at 30 N Gould St Ste N: their address is the official home of 245,697 entities.<br>Photo credit: Google Maps',
            location: {
                center: [-106.95438, 44.79741],
                zoom: 18,
                pitch: 69.50,                
                bearing: -116.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '30Gould',
                    opacity: 1
                }    
            ],
            onChapterExit: [
                {
                    layer: '30Gould',
                    opacity: 0
                }
            ]
        },    
        {
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
           // title: 'Chapter Four',
            image: '1309Coffeen.png',
            description: 'At 1309 Coffeen Avenue we find Cloud Peak Law LLC, the second largest agent in Wyoming after Registered Agents Inc.<br> There are 61,767 entities registered at this address.<br>Photo credit: Google Maps',
            location: {
                center: [-106.941, 44.784],
                zoom: 17.13,
                pitch: 40,
                bearing: -40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '1309coffeenbuilding',
                    opacity: 1,
                    duration: 2000
                }
            ],
            onChapterExit: []
        },
        {
            id: 'sixth-chapter',
            alignment: 'left',       //fully for centre
            hidden: false,
            title: 'IN 2023, TWO AGENTS REPRESENTED 55% OF NEW ENTITIES',
            image: 'agents_ranking.png',
            description: 'Wyoming´s growing popularity as a place for new businesses is not making the agent market more diverse; instead, it is giving more market share to the top agents.',
            location: {
                center: [-109.636, 42.861],
                zoom: 5.7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
