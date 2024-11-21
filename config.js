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
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'WYOMING, THE NEW INCORPORATIONS LEADER',
            description: 'Wyoming is the US state with the highest number of legal entities per 1,000 inhabitants.<br>A legal entity is a company on paper. For a company to exist, it must engage in some form of business activity. whether by selling products or offering services. So while all companies are legal entities, not all legal entities can be considered companies.',
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
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            //title: 'Chapter Two',
            description: 'Most LLC, a very popular form of legal entity, are registered in four cities: Sheridan, Cheyenne, Buffalo and Casper.<br>Sheridan alone hosts 42% of all Wyoming LLC.',
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
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'wyomingcities',
                    opacity: 0
                }
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Chapter Three',
            image: '30NGould.png',
            description: 'Registered Agents Inc. is located in 30 N Gould St Ste N. This address is also home to 245,697 legal entities.<br>Photo credit: Google Maps',
            location: {
                center: [-106.955, 44.798],
                zoom: 18,
                pitch: 40,
                bearing: 40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '30GouldBuilding',
                    opacity: 1,
                    duration: 2000
                }
            ],
            onChapterExit: []
        },
        {
            id: 'fourth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Chapter Four',
            image: '1309Coffeen.png',
            description: 'At 1309 Coffeen Avenue we find, Cloud Peak Law LLC, the second largest agent in Wyoming. There are 61,767 entities registered at this address.<br>Photo credit: Google Maps',
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
                    layer: '30GouldBuilding',
                    opacity: 1,
                    duration: 2000
                }
            ],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'left',       //fully for centre
            hidden: false,
            //title: 'Chapter Four',
            image: 'wy_waffle.svg',
            description: 'Incorporations in Wyoming have continued to increase in 2024, although at a slower pace.<br>Last year, there were 347.92 new LLC per 1,000 people, 12 times more than the national average.*<br>*Not counting Delaware and Puerto Rico.',
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
