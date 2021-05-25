var config = {
    style: 'mapbox://styles/katrina/ckoxzqp0j21sx17ozjoz43uq5',
    accessToken: 'pk.eyJ1Ijoia2F0cmluYSIsImEiOiJoYkswcE1rIn0.h-ovShDXatAjFOVZZ7s9RA',
    showMarkers: true,
    markerColor: '#4D194D',
    theme: 'dark',
    use3dTerrain: true,
    // title: 'Elevated Van Journeys',
    // subtitle: 'Reconnecting with your mind, body, and nature',
    footer: 'Thank you!',
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
            rotateAnimation: false
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
            rotateAnimation: false
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
              rotateAnimation: false
          },{

            id: 'camper-van',
            alignment: 'center',
            hidden: false,
            title: 'The Grand Circle',
            image: './images/camper.png',
            description: '<iframe width="640" height="350" src="https://youtu.be/IRY9p9qHKgA?t=29"></iframe>',
            location: {
              center: { lon: -114.46088, lat: 36.99249 },
                zoom: 5,
                pitch: 59.50,
                bearing: 26.86
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
        },
        {
            id: 'intro',
            alignment: 'left',
            hidden: false,
            title: 'Elevated Van Journeys',
            image: './images/elevated-logo.png',
            description: 'Welcome to the first day of your journey with Elevated Vans!',
            location: {
              center: { lon: -114.46088, lat: 36.99249 },
                zoom: 6.65,
                pitch: 59.50,
                bearing: 26.86
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false
        },
        {
            id: 'arrival',
            alignment: 'right',
            hidden: false,
            title: 'Las Vegas Pick up',
            // image: './path/to/image/source.png',
            description: 'Clients will arrive in Vegas where they will pick up their vans.<section id="xRay"><div class="x-ray__RootElement-sc-6kw6up-0 gRqkbK"><div class="x-ray__XRayContainer-sc-6kw6up-1 jtXCWX"><div><div class="x-ray-image__RootElement-ndnnpw-0 bhshHV" style="background-image: url(&quot;/static/08274e67d237c3224ca65f5d67c22655/1f6fe/dv_x-ray-ext-d.jpg&quot;);"><img draggable="false" src="/static/fddace39e7e1ad9e07f2c9b8e7e9dcaf/1f6fe/dv_x-ray-int-d.jpg" class="x-ray-image__XRayElement-ndnnpw-4 elwjHj" style="-webkit-mask-position: 74.9724% 66.2431%; -webkit-mask-size: 432px;"></div></div></div><div class="x-ray__XRayCaptionContainer-sc-6kw6up-2 ergVDR visible"><div class="caption"><div class="title">Business Ready</div><div class="subtitle">Lower total cost-of-ownership, easy maintenance</div></div><div class="caption"><div class="title">CARGO VOLUME</div><div class="subtitle">More cargo, small footprint, easy maneuverability</div></div><div class="caption"><div class="title">PRODUCTIVITY TOOL</div><div class="subtitle">Power plant, plug in your tools and get to work</div></div></div></div></section>',
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
              id: 'intro',
              alignment: 'center',
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
                image: './images/elevated-logo.png',
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
                  image: './images/bryce-canyon.jpeg',
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
                    id: 'horseshoe-canyon',
                    alignment: 'right',
                    hidden: false,
                    title: 'Zion Exploration',
                    image: './images/horseshoe.jpeg',
                    description: 'Explore horseshoe for the afternoon',
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
                      image: './images/grand-canyon.png',
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
                      },
    ]
};
