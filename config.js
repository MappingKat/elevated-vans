var config = {
    style: 'mapbox://styles/katrina/ckoxzqp0j21sx17ozjoz43uq5',
    accessToken: 'pk.eyJ1Ijoia2F0cmluYSIsImEiOiJoYkswcE1rIn0.h-ovShDXatAjFOVZZ7s9RA',
    showMarkers: false,
    theme: 'dark',
    use3dTerrain: true,
    title: 'The Grand Circle',
    subtitle: 'Reconnecting with your mind, body, and nature',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'intro',
            alignment: 'left',
            hidden: false,
            title: 'Elevated Van Journeys',
            image: './images/elevated-logo.png',
            description: 'Elevated vans first trip will take place in the extensive, colorful section of southern Utah.',
            location: {
              center: { lon: -114.46088, lat: 36.99249 },
                zoom: 6.65,
                pitch: 59.50,
                bearing: 26.86
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                //    layer: 'katrina.cqrohss7',
                //     opacity: .45,
                // },{
                  // layer: 'nps.park-tiles',
                  // opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'arrival',
            alignment: 'right',
            hidden: false,
            title: 'Las Vegas Pick up',
            // image: './path/to/image/source.png',
            description: 'Clients will arrive in Vegas where they will pick up their vans.',
            location: {
              center: { lon: -115.1398, lat: 36.1699 },
              zoom: 9.03,
              pitch: 57.50,
              bearing: -44.18
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
          },
          {
              id: 'valley-fire',
              alignment: 'left',
              hidden: false,
              title: 'Valley of Fire',
              image: './path/to/image/source.png',
              description: 'Timing is flexible and clients can hike or drive though the Valley of Fire if they would like to.',
              location: {
                center: { lon: -114.5352, lat: 36.5073 },
                zoom: 9.03,
                pitch: 57.50,
                bearing: -44.18
              },
              mapAnimation: 'flyTo',
              rotateAnimation: false,
              callback: '',
              onChapterEnter: [],
              onChapterExit: []
            },{
                id: 'zion',
                alignment: 'right',
                hidden: false,
                title: 'Zion Exploration',
                image: './path/to/image/source.png',
                description: 'Hike or road bike around Zion for the afternoon',
                location: {
                    center: [-113.0263, 37.2982],
                    zoom: 9.03,
                    pitch: 57.50,
                    bearing: -44.18
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
              },{
                  id: 'bryce',
                  alignment: 'left',
                  hidden: false,
                  title: 'Bryce Canyon',
                  // image: './path/to/image/source.png',
                  description: 'Spend the day .',
                  location: {
                      center: [-112.1871, 37.5930],
                      zoom: 9.03,
                      pitch: 57.50,
                      bearing: -44.18
                  },
                  mapAnimation: 'flyTo',
                  rotateAnimation: false,
                  callback: '',
                  onChapterEnter: [],
                  onChapterExit: []
                },{
                    id: 'antelope-canyon',
                    alignment: 'right',
                    hidden: false,
                    title: 'Zion Exploration',
                    image: './path/to/image/source.png',
                    description: 'Hike or road bike around Zion for the afternoon',
                    location: {
                        center: [-111.5104, 36.8791],
                        zoom: 9.03,
                        pitch: 57.50,
                        bearing: -44.18
                    },
                    mapAnimation: 'flyTo',
                    rotateAnimation: false,
                    callback: '',
                    onChapterEnter: [],
                    onChapterExit: []
                  },{
                      id: 'grand-canyon',
                      alignment: 'left',
                      hidden: false,
                      title: 'Grand Canyon Exploration',
                      image: './path/to/image/source.png',
                      description: 'Hike or road bike around Zion for the afternoon',
                      location: {
                          center: [-112.1401, 36.0544],
                          zoom: 9.03,
                          pitch: 57.50,
                          bearing: -44.18
                      },
                      mapAnimation: 'flyTo',
                      rotateAnimation: false,
                      callback: '',
                      onChapterEnter: [],
                      onChapterExit: []
                    },{
                        id: 'arrival',
                        alignment: 'right',
                        hidden: false,
                        title: 'Las Vegas Return',
                        // image: './path/to/image/source.png',
                        description: 'Clients will arrive in Vegas where they will pick up their vans.',
                        location: {
                          center: { lon: -115.1398, lat: 36.1699 },
                          zoom: 9.03,
                          pitch: 57.50,
                          bearing: -44.18
                        },
                        mapAnimation: 'flyTo',
                        rotateAnimation: false,
                        callback: '',
                        onChapterEnter: [],
                        onChapterExit: []
                      },
    ]
};
