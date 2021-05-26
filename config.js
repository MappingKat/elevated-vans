var config = {
    style: 'mapbox://styles/katrina/ckoxzqp0j21sx17ozjoz43uq5',
    accessToken: 'pk.eyJ1Ijoia2F0cmluYSIsImEiOiJoYkswcE1rIn0.h-ovShDXatAjFOVZZ7s9RA',
    showMarkers: true,
    markerColor: '#4D194D',
    theme: 'dark',
    use3dTerrain: true,
    header: '',
    footer: '',
    chapters: [
        {
            id: 'intro',
            alignment: 'full',
            hidden: false,
            title: '',
            image: './images/01-intro.png',
            description: '',
            location: {
              center: { lon: -114.46088, lat: 36.99249 },
                zoom: 4,
                pitch: 59.50,
                bearing: 26.86
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'problems',
            alignment: 'full',
            hidden: false,
            title: '',
            image: './images/02-problems.png',
            description: '',
            location: {
              center: { lon: -114.46088, lat: 36.99249 },
                zoom: 4,
                pitch: 59.50,
                bearing: 26.86
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
          },{
              id: 'solutions',
              alignment: 'full',
              hidden: false,
              title: '',
              image: './images/03-solutions.png',
              description: '',
              location: {
                center: { lon: -114.46088, lat: 36.99249 },
                  zoom: 4,
                  pitch: 59.50,
                  bearing: 26.86
              },
              mapAnimation: 'flyTo',
              rotateAnimation: false,
              callback: '',
              onChapterEnter: [],
              onChapterExit: []
          },{
            id: 'intro',
            alignment: 'left',
            hidden: false,
            title: 'Market Research',
            image: './images/04-marketing.png',
            description: '',
            location: {
              center: { lon: -114.46088, lat: 36.99249 },
              zoom: 6.65,
              pitch: 59.50,
              bearing: 26.86
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
          },{
            id: 'intro',
            alignment: 'left',
            hidden: false,
            title: 'Industry Research',
            // image: './images/05-industry.png',
            description: '',
            location: {
              center: { lon: -114.46088, lat: 36.99249 },
              zoom: 6.65,
              pitch: 59.50,
              bearing: 26.86
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
          },{
            id: 'camper-van',
            alignment: 'center',
            hidden: false,
            title: 'Welcome to the first day of your journey with Elevated Vans!',
            image: '',
            description: '<iframe width="560" height="315" src="https://www.youtube.com/embed/IRY9p9qHKgA"></iframe>',
            location: {
                center: { lon: -114.46088, lat: 36.99249 },
                zoom: 5,
                pitch: 59.50,
                bearing: 26.86
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
            title: 'Las Vegas Pick up',
            description: '',
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
          },{
                id: 'zion',
                alignment: 'right',
                hidden: false,
                title: 'Zion Exploration',
                image: './images/09-zion-ntl-park.jpeg',
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
                  image: './images/10-bryce-canyon.jpeg',
                  description: 'On Day 2 of your trip, you’ll head over to Bryce Canyon. Elevated sites are in some of the most majestic locations in the world. It only takes 1-3 hours to drive between each of the destinations on your itinerary so you can take your time and relish in each location.',
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
                    id: 'park-location',
                    alignment: 'left',
                    hidden: false,
                    title: 'Bryce Canyon',
                    image: './images/14-campfire.jpeg',
                    description: 'On Day 2 of your trip, you’ll head over to Bryce Canyon. Elevated sites are in some of the most majestic locations in the world. It only takes 1-3 hours to drive between each of the destinations on your itinerary so you can take your time and relish in each location.',
                    location: {
                        center: [-112.2871, 37.4930],
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
                    id: 'horseshoe-canyon',
                    alignment: 'right',
                    hidden: false,
                    title: 'Zion Exploration',
                    image: './images/11-horseshoe.jpeg',
                    description: 'On Day 3, you will drive the Horseshoe Canyon [PICTURE]. Remember, everything you need to know about your itinerary including suggested podcasts, charging sites, great restaurants, and directions are in your EVJ app.',
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
                  },{
                      id: 'kanab',
                      alignment: 'right',
                      hidden: false,
                      title: 'Kanab',
                      image: './images/12-kanab.png',
                      description: 'On Day 4, you’ll make your way to the Grand Canyon. There, like at each overnight location, you’ll find our solar powered charging stations for your van. [OPERATIONS DIAGRAM] At every EVJ site, you’ll be greeted by our on site staff who will assist with specific activities in Zion like hikes, lectures, or yoga classes. They will also give you details on the community dinner so that you can meet fellow travelers. Definitely lean on the on site staff for any questions, but remember if you are between sites, help from EVJ headquarters is always available through the chat feature in the app. We are here at EVJ headquarters in Las Vegas to assist with any challenges that arises including the unlikely event that you have vehicle trouble. Our full time Fleet Manager is available 24/7 to help. On day 5…',
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
                      image: './images/13-grand-canyon.png',
                      description: 'Hike or road bike around Grand Canyon for the afternoon',
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
                      }
    ]
};
