/* ===== Casa de Don Simón — content & translations ===== */
const LANGS = [
  { code:"en", label:"English" },
  { code:"es", label:"Español" },
  { code:"pl", label:"Polski" },
  { code:"de", label:"Deutsch" },
  { code:"nl", label:"Nederlands" },
  { code:"fr", label:"Français" }
];
const DEFAULT_LANG = "en";

const BOOKING_URL = "https://www.booking.com/Share-4T3SBi";
const BOLT_URL = "https://bolt.eu/en/cities/alicante/";
const WHATSAPP_NUMBER = "31612229946";

/* ---------- UI strings ---------- */
const UI = {
en:{
  nav:{home:"Home",apartment:"The apartment",attractions:"Attractions",local:"Local life",gallery:"Gallery",contact:"Client zone"},
  hero:{eyebrow:"Cabo Roig · Costa Blanca, Spain",title:"Casa de Don Simón",
    lead:"A sunny, family-friendly holiday apartment on Spain's southern Costa Blanca — your base for beach days, pool afternoons, and easy trips into three more regions of caves, waterfalls, mines and theme parks.",
    ctaBook:"Check availability",ctaExplore:"Plan your trip",
    stats:[{n:"3",l:"regions in day-trip reach"},{n:"25 min",l:"walk to the beach"},{n:"24",l:"family attractions listed"}]},
  highlights:{eyebrow:"Why families choose it",title:"Everything a family trip actually needs",
    items:[
      {t:"Pool & kids' pool",d:"A shared pool with its own dedicated children's pool and garden, right outside the door."},
      {t:"Steps from the sand",d:"Cabo Roig's own beach is an easy walk; La Zenia beach is minutes by car."},
      {t:"A real kitchen",d:"Induction hob, oven and a separate laundry room — cook, dry towels, live like locals."},
      {t:"Three regions nearby",d:"Alicante, Murcia, Andalusia and Valencia are all within an easy day-trip drive."}
    ]},
  regionsTeaser:{eyebrow:"Day trips",title:"Explore by region",sub:"Every cave, waterfall, mine and theme park on this site is grouped by region and rated by how long it takes to get there from the apartment.",cta:"See all attractions"},
  homeBase:"You're already here",
  driveFrom:"from the apartment",
  attractionsCount:"attractions",
  galleryTeaser:{eyebrow:"Inside Casa de Don Simón",title:"A look around the apartment",sub:"Bright, comfortable rooms with Mediterranean touches — see the full gallery.",cta:"View gallery"},
  ctaBand:{title:"Ready to book your stay?",sub:"Casa de Don Simón is listed and bookable on Booking.com — check live availability and prices for your dates.",cta:"View on Booking.com"},
  footer:{about:"A family-friendly holiday apartment in Cabo Roig, on Spain's southern Costa Blanca.",explore:"Explore",book:"Booking",bookLink:"Book on Booking.com",rights:"Casa de Don Simón · Cabo Roig, Orihuela Costa, Spain",madeNote:"Unofficial trip-planning guide for guests."},
  apartmentPage:{eyebrow:"The apartment",title:"Your home on the Costa Blanca",
    amenitiesTitle:"Amenities",locationTitle:"Getting around",locationSub:"Approximate distances from the apartment.",
    amenities:[
      {l:"Shared pool + kids' pool"},{l:"Garden & sun terrace"},{l:"Fully equipped kitchen"},
      {l:"Washing machine"},{l:"Air conditioning"},{l:"Free WiFi"},{l:"Free private parking"},
      {l:"Private balcony"},{l:"24-hour security"}
    ],
    distances:[
      {l:"Cabo Roig beach",v:"1.6 km · 5 min drive · 25 min walk"},{l:"La Zenia beach",v:"2.6 km · 6 min drive"},
      {l:"Villamartín golf course",v:"2.1 km · 5 min drive"},{l:"Zenia Boulevard shopping & dining",v:"4 km · 10 min drive"}
    ],
    parkingNote:"Most families drive to the beach rather than walk — every beach car park on the Orihuela Costa, including Cabo Roig and La Zenia, is free of charge.",
    mapTitle:"Route to the beach",mapCta:"Open in Google Maps",mapDistance:"1.6 km · 5 min drive",mapHere:"You are here",
    beachesTitle:"Nearby beaches",beachesSub:"Every beach within easy reach of the apartment — tap a pin or a card for directions.",
    beachesImportant:"Beach parking is free everywhere on this stretch of coast — except in Torrevieja, where beach car parks charge a fee.",
    airportsTitle:"Nearest airports",
    airports:[
      {l:"Alicante-Elche Airport (ALC)",v:"52 km · ~50 min drive"},
      {l:"Región de Murcia Airport (RMU)",v:"49 km · ~45 min drive"}
    ],
    airportNote:"No train serves this stretch of coast — the easiest way to and from either airport is a rental car, taxi (roughly €100–130) or a pre-booked private transfer (around €45–60).",
    boltTitle:"Estimate your ride",boltCta:"Get a fare estimate with Bolt",
    boltNote:"Open the Bolt app (or bolt.eu), set the airport as pickup and \"Casa de Don Simón, Cabo Roig\" as your destination, and you'll see an estimated price before you book — an easy way to compare against a taxi or a private transfer.",
    restaurantsTitle:"Where to eat nearby",
    restaurantsSub:"A handful of well-regarded restaurants within a short drive, from an Argentinian grill to beachfront seafood.",
    restaurantsCta:"More info",
    restaurants:[
      {name:"Che!! Argentinian Grill (Che Asador Argentino)",place:"La Zenia · Zenia Boulevard",desc:"A big Argentinian grill buffet — meat carved and grilled at your table, inside the Zenia Boulevard mall.",photo:"che",url:"http://www.cherestaurant.es/"},
      {name:"Angelique Grill Bar",place:"Lomas de Cabo Roig",desc:"A grill bar in the Lomas de Cabo Roig neighbourhood serving char-grilled steaks and Mediterranean sharing plates — grilled octopus and artichokes among them.",photo:"angelique",url:"https://maps.app.goo.gl/4KCyZo8FNtvuy1JVA"},
      {name:"La Bahía de Cabo Roig",place:"Cabo Roig · beachfront",desc:"Mediterranean seafood, tapas and paellas right on the Cabo Roig seafront — walking distance from the apartment.",photo:"labahia",url:"https://www.google.com/maps/search/?api=1&query=Restaurante+La+Bahia+de+Cabo+Roig+Orihuela+Costa"},
      {name:"Rincón de Adrián",place:"Pilar de la Horadada",desc:"A relaxed, family-run café-bar with a heated terrace and a kids' play area — good for an easy breakfast, coffee or casual meal away from the tourist strip.",photo:"adrian",url:"https://rincon-de-adrian.makro.rest/"},
      {name:"Chill Out International Restaurant",place:"Orihuela Costa",desc:"An international bar-restaurant near Cabo Roig with a relaxed, lounge-style dining room — the tables are set with a Mexican, Italian and steakhouse menu.",photo:"chillout",url:"https://maps.app.goo.gl/FVkd9x6WPPKeyWtQ9"},
      {name:"Olé Olé Spanish Food and Drinks",place:"Orihuela Costa",desc:"A traditional Spanish spot near Cabo Roig for classic pescaíto frito — battered squid, anchovies and fresh fish — alongside seafood platters and cold drinks.",photo:"oleole",url:"https://maps.app.goo.gl/vA8ramLGdn8ycCPY6"},
      {name:"Aberdinangus Argentinian Restaurant",place:"Calle Cielo 10, Cabo Roig",desc:"An Argentinian steakhouse in Cabo Roig grilling prime cuts of beef with roasted potatoes — reservations recommended by phone or WhatsApp.",photo:"aberdinangus",url:"https://aberdinangus.com/"},
      {name:"Food House Mil Palmeras",place:"Mil Palmeras",desc:"An Asian-fusion restaurant in Mil Palmeras pairing fresh sushi rolls and nigiri with grilled seafood platters — prawns, razor clams and fish straight off the grill.",photo:"foodhouse",url:"https://maps.app.goo.gl/JML6ZTaAQn5NcRkQA"}
    ],
    galleryCta:"See photos of the apartment",bookCta:"Check availability"},
  galleryPage:{eyebrow:"Gallery",title:"Casa de Don Simón, in pictures",sub:"A look at the apartment's bedrooms, living space, kitchen, terrace and community pool.",comingSoon:"New photos of the apartment are on their way — check back soon.",
    cats:{living:"Living room",dining:"Dining area",kitchen:"Kitchen",sofabed:"Sofa bed (extra double)",bedroom1:"Double bedroom",bedroom2:"Twin bedroom",terrace:"Terrace",pool:"Community pool",surroundings:"Around Cabo Roig"}},
  attractionsPage:{eyebrow:"Attractions",title:"Family days out, from caves to coastlines",
    sub:"Twenty-four attractions across four regions — caves, waterfalls, a real mine, theme parks, beaches and more — each grouped by region and rated by drive time from the apartment.",
    exploreRegion:"Explore region",allFilter:"All"},
  regionPage:{back:"All regions",driveLabel:"Approx. drive from the apartment",categories:{caves:"Caves",waterfalls:"Waterfalls",mines:"Mines",other:"More to explore"}},
  contactPage:{eyebrow:"Client zone",title:"Casa de Don Simón",
    sub:"This apartment is listed and bookable on Booking.com. Tap below to check live availability, prices and guest reviews for your travel dates.",
    addressLabel:"Location",address:"Cabo Roig, Orihuela Costa · Alicante province, Spain",
    bookButton:"Book on Booking.com",mapNote:"Opens Booking.com in a new tab.",
    syncTitle:"About live calendar sync",
    syncBody:"This page can't embed Booking.com's live calendar directly — for security, browser rules only let it load scripts from a short list of trusted sources, and Booking.com isn't one of them. The reliable way to see real-time availability and prices is the button above, which opens the actual listing on Booking.com.",
    whatsappTitle:"Chat on WhatsApp",whatsappBody:"Message your host directly on WhatsApp for a fast reply — before your stay or any time during it.",whatsappCta:"Open WhatsApp chat",whatsappMsg:"Hi! I have a question about Casa de Don Simón in Cabo Roig.",
    guestTitle:"For confirmed guests",
    guestItems:[
      {l:"Check-in / check-out",v:"Arranged directly with your host after booking — usually flexible on request."},
      {l:"WiFi",v:"Free WiFi throughout the apartment; the password is sent at check-in."},
      {l:"Questions before or during your stay",v:"Message your host on WhatsApp (or through Booking.com) — WhatsApp is the fastest way to reach us."}
    ]},
  localPage:{eyebrow:"Local life",title:"Markets, boat trips and life beyond the beach",
    sub:"The everyday side of the coast — weekly street markets, a dolphin-watching boat trip, the pink salt lake, and the summer tourist train that link the local beaches.",
    marketsTitle:"Weekly street markets",marketsSub:"Fresh fruit, local produce and handmade goods — a different town each day, all a short drive away.",marketsCta:"Map",
    markets:[
      {day:"Thursday",name:"Cabo Roig market",url:"https://maps.app.goo.gl/SGDpC3m9jSYFze3i8"},
      {day:"Friday",name:"Torrevieja market",url:"https://maps.app.goo.gl/YzJtxmTDV8rkkhxb7"},
      {day:"Saturday",name:"Playa Flamenca market",url:"https://maps.app.goo.gl/VzqmVBJBi7uFwKkk9"},
      {day:"Wednesday",name:"San Miguel de Salinas market",url:"https://maps.app.goo.gl/XNoXkqq1TEZa5U1EA"}
    ],
    boatTitle:"Dolphin-watching boat trip",
    boatDesc:"Boat trips out of Torrevieja marina regularly run into pods of wild dolphins in the bay, and a glass-bottom catamaran option continues on to Tabarca island.",
    boatNote:"About 20–25 minutes' drive from the apartment. Book ahead in summer.",
    boatCta:"See operator",boatUrl:"https://torreviejaboattours.com/",
    saltTitle:"The pink salt lake (Las Salinas de Torrevieja)",
    saltDesc:"Torrevieja's working salt lake turns a striking shade of pink in warm, dry weather — a genuine natural curiosity, not a swimming spot. San Miguel de Salinas, the inland town a little further on, takes its name from the same historic salt trade.",
    saltTip:"Best light at sunset, April–September, after a dry spell. Wear closed shoes — the salt crust is sharp — and don't swim; the lake is protected and patrolled.",
    saltCta:"Map",saltUrl:"https://www.google.com/maps/search/?api=1&query=Las+Salinas+de+Torrevieja+Laguna+Rosa",
    trainTitle:"Orihuela Costa tourist train",
    trainDesc:"An open-sided train links the beaches from Campoamor through Cabo Roig and La Zenia to Playa Flamenca, calling at around 17 stops on two routes, including Zenia Boulevard — a relaxed way to see the whole stretch of coast in under an hour.",
    trainNote:"It has run every summer for several years — free in some seasons, around €6 for unlimited rides in others — so check the current summer timetable and fare locally before you go.",
    trainCta:"Route & stops",trainUrl:"https://torrevieja.com/en/tourist-train-orihuela-costa-beaches/",
    kartTitle:"Go-karting on the coast road",
    kartDesc:"Two floodlit circuits just off the Torrevieja–Cartagena road, with karts sized for everyone — from around age 3 up to full-size 400cc karts for adults — plus a small fairground and an on-site restaurant.",
    kartNote:"Open daily, 11:00–22:00. No booking needed to turn up and race — call or WhatsApp ahead for groups, quad tours or birthday parties.",
    kartCta:"Visit website",kartUrl:"http://www.gokartsorihuelacosta.es/",
    wineTitle:"Wine tourism at Bodegas Faelo",
    wineDesc:"A family-run winery near Torrevieja pouring wines under the \"La Dama\" label, with cellar and vineyard tours that end in a tasting alongside local cheese and cured meats.",
    wineNote:"Visits are by appointment only — contact the winery ahead to arrange a tour and tasting.",
    wineCta:"Visit website",wineUrl:"http://www.vinosladama.com/",
    foodTitle:"A taste of the coast",
    foodDesc:"Paella and fresh seafood cooked outdoors are a fixture of local fiestas and market days — worth timing a visit around if you see one advertised."},
  common:{lang:"Language",readMore:"Details",backTop:"Back to top",close:"Close",photo:"Photo",directions:"Directions",website:"Website",musicOn:"Play background music",musicOff:"Pause background music",routeMap:"Route map",parkingFree:"Free parking",parkingPaid:"Paid parking"}
},
es:{
  nav:{home:"Inicio",apartment:"El apartamento",attractions:"Atracciones",local:"Vida local",gallery:"Galería",contact:"Zona de clientes"},
  hero:{eyebrow:"Cabo Roig · Costa Blanca, España",title:"Casa de Don Simón",
    lead:"Un soleado apartamento vacacional para familias en el sur de la Costa Blanca: tu base para días de playa, tardes de piscina y excursiones fáciles a otras tres regiones llenas de cuevas, cascadas, minas y parques temáticos.",
    ctaBook:"Consultar disponibilidad",ctaExplore:"Planea tu viaje",
    stats:[{n:"3",l:"regiones a un día de distancia"},{n:"25 min",l:"a pie hasta la playa"},{n:"24",l:"atracciones familiares"}]},
  highlights:{eyebrow:"Por qué lo eligen las familias",title:"Todo lo que un viaje en familia necesita",
    items:[
      {t:"Piscina y piscina infantil",d:"Piscina comunitaria con piscina infantil propia y jardín, justo a la puerta."},
      {t:"A pasos de la arena",d:"La playa de Cabo Roig está a un corto paseo; la playa de La Zenia, a minutos en coche."},
      {t:"Una cocina de verdad",d:"Vitrocerámica de inducción, horno y lavadero aparte: cocina, seca toallas, vive como en casa."},
      {t:"Tres regiones cerca",d:"Alicante, Murcia, Andalucía y Valencia quedan a un fácil trayecto de un día."}
    ]},
  regionsTeaser:{eyebrow:"Excursiones",title:"Explora por región",sub:"Cada cueva, cascada, mina y parque temático de esta web está agrupado por región e indicado con el tiempo que se tarda en llegar desde el apartamento.",cta:"Ver todas las atracciones"},
  homeBase:"Ya estás aquí",
  driveFrom:"desde el apartamento",
  attractionsCount:"atracciones",
  galleryTeaser:{eyebrow:"Dentro de Casa de Don Simón",title:"Un vistazo al apartamento",sub:"Habitaciones luminosas y cómodas con toques mediterráneos: mira la galería completa.",cta:"Ver galería"},
  ctaBand:{title:"¿Listo para reservar tu estancia?",sub:"Casa de Don Simón está publicado y disponible en Booking.com: consulta la disponibilidad y los precios reales para tus fechas.",cta:"Ver en Booking.com"},
  footer:{about:"Un apartamento vacacional para familias en Cabo Roig, en el sur de la Costa Blanca.",explore:"Explorar",book:"Reserva",bookLink:"Reservar en Booking.com",rights:"Casa de Don Simón · Cabo Roig, Orihuela Costa, España",madeNote:"Guía de viaje no oficial para huéspedes."},
  apartmentPage:{eyebrow:"El apartamento",title:"Tu casa en la Costa Blanca",
    amenitiesTitle:"Comodidades",locationTitle:"Cómo moverte",locationSub:"Distancias aproximadas desde el apartamento.",
    amenities:[
      {l:"Piscina comunitaria + piscina infantil"},{l:"Jardín y terraza solárium"},{l:"Cocina totalmente equipada"},
      {l:"Lavadora"},{l:"Aire acondicionado"},{l:"WiFi gratis"},{l:"Parking privado gratuito"},
      {l:"Balcón privado"},{l:"Seguridad 24 horas"}
    ],
    distances:[
      {l:"Playa de Cabo Roig",v:"1,6 km · 5 min en coche · 25 min a pie"},{l:"Playa de La Zenia",v:"2,6 km · 6 min en coche"},
      {l:"Campo de golf Villamartín",v:"2,1 km · 5 min en coche"},{l:"Zenia Boulevard (tiendas y restaurantes)",v:"4 km · 10 min en coche"}
    ],
    parkingNote:"La mayoría de las familias van en coche a la playa en vez de andando — todos los aparcamientos de playa de la Orihuela Costa, incluidos Cabo Roig y La Zenia, son gratuitos.",
    mapTitle:"Ruta a la playa",mapCta:"Abrir en Google Maps",mapDistance:"1,6 km · 5 min en coche",mapHere:"Estás aquí",
    beachesTitle:"Playas cercanas",beachesSub:"Todas las playas a un corto trayecto del apartamento — toca un pin o una tarjeta para ver cómo llegar.",
    beachesImportant:"El aparcamiento en la playa es gratuito en todo este tramo de costa, excepto en Torrevieja, donde los aparcamientos de playa son de pago.",
    airportsTitle:"Aeropuertos más cercanos",
    airports:[
      {l:"Aeropuerto de Alicante-Elche (ALC)",v:"52 km · unos 50 min en coche"},
      {l:"Aeropuerto Región de Murcia (RMU)",v:"49 km · unos 45 min en coche"}
    ],
    airportNote:"Esta zona de la costa no tiene tren: lo más práctico para ir o volver de cualquiera de los dos aeropuertos es un coche de alquiler, un taxi (unos 100–130 €) o un traslado privado reservado con antelación (unos 45–60 €).",
    boltTitle:"Calcula tu trayecto",boltCta:"Calcular tarifa con Bolt",
    boltNote:"Abre la app de Bolt (o bolt.eu), indica el aeropuerto como punto de recogida y «Casa de Don Simón, Cabo Roig» como destino, y verás una tarifa estimada antes de reservar — una forma fácil de comparar con un taxi o un traslado privado.",
    restaurantsTitle:"Dónde comer cerca",
    restaurantsSub:"Un puñado de restaurantes bien valorados a poca distancia en coche, desde una parrilla argentina hasta marisco frente al mar.",
    restaurantsCta:"Más información",
    restaurants:[
      {name:"Che!! Argentinian Grill (Che Asador Argentino)",place:"La Zenia · Zenia Boulevard",desc:"Un gran bufé de parrilla argentina — la carne se trincha y se asa en tu propia mesa, dentro del centro comercial Zenia Boulevard.",photo:"che",url:"http://www.cherestaurant.es/"},
      {name:"Angelique Grill Bar",place:"Lomas de Cabo Roig",desc:"Un grill bar en la urbanización Lomas de Cabo Roig con carnes a la brasa y platos mediterráneos para compartir, entre ellos pulpo y alcachofas a la parrilla.",photo:"angelique",url:"https://maps.app.goo.gl/4KCyZo8FNtvuy1JVA"},
      {name:"La Bahía de Cabo Roig",place:"Cabo Roig · primera línea de playa",desc:"Marisco mediterráneo, tapas y paellas justo en el paseo marítimo de Cabo Roig — a poca distancia a pie del apartamento.",photo:"labahia",url:"https://www.google.com/maps/search/?api=1&query=Restaurante+La+Bahia+de+Cabo+Roig+Orihuela+Costa"},
      {name:"Rincón de Adrián",place:"Pilar de la Horadada",desc:"Una cafetería-bar familiar y tranquila, con terraza climatizada y zona infantil — ideal para un desayuno, un café o una comida informal lejos del circuito turístico.",photo:"adrian",url:"https://rincon-de-adrian.makro.rest/"},
      {name:"Chill Out International Restaurant",place:"Orihuela Costa",desc:"Un bar-restaurante internacional cerca de Cabo Roig con un ambiente relajado tipo lounge — las mesas ofrecen una carta mexicana, italiana y de steakhouse.",photo:"chillout",url:"https://maps.app.goo.gl/FVkd9x6WPPKeyWtQ9"},
      {name:"Olé Olé Spanish Food and Drinks",place:"Orihuela Costa",desc:"Un local español tradicional cerca de Cabo Roig para un buen pescaíto frito — calamares, boquerones y pescado fresco rebozado — además de mariscadas y bebidas frías.",photo:"oleole",url:"https://maps.app.goo.gl/vA8ramLGdn8ycCPY6"},
      {name:"Aberdinangus Restaurante Argentino",place:"Calle Cielo 10, Cabo Roig",desc:"Un asador argentino en Cabo Roig con cortes de carne a la parrilla y patatas asadas — se recomienda reservar por teléfono o WhatsApp.",photo:"aberdinangus",url:"https://aberdinangus.com/"},
      {name:"Food House Mil Palmeras",place:"Mil Palmeras",desc:"Un restaurante de fusión asiática en Mil Palmeras que combina sushi y nigiri frescos con mariscadas a la parrilla — langostinos, navajas y pescado recién hecho.",photo:"foodhouse",url:"https://maps.app.goo.gl/JML6ZTaAQn5NcRkQA"}
    ],
    galleryCta:"Ver fotos del apartamento",bookCta:"Consultar disponibilidad"},
  galleryPage:{eyebrow:"Galería",title:"Casa de Don Simón, en imágenes",sub:"Un vistazo a los dormitorios, el salón, la cocina, la terraza y la piscina comunitaria del apartamento.",comingSoon:"Las nuevas fotos del apartamento están en camino — vuelve pronto.",
    cats:{living:"Salón",dining:"Comedor",kitchen:"Cocina",sofabed:"Sofá cama (cama doble extra)",bedroom1:"Dormitorio doble",bedroom2:"Dormitorio individual",terrace:"Terraza",pool:"Piscina comunitaria",surroundings:"Alrededores de Cabo Roig"}},
  attractionsPage:{eyebrow:"Atracciones",title:"Planes en familia, de cuevas a costas",
    sub:"Veinticuatro atracciones en cuatro regiones: cuevas, cascadas, una mina de verdad, parques temáticos, playas y más, agrupadas por región e indicadas con el tiempo en coche desde el apartamento.",
    exploreRegion:"Explorar región",allFilter:"Todas"},
  regionPage:{back:"Todas las regiones",driveLabel:"Trayecto aprox. desde el apartamento",categories:{caves:"Cuevas",waterfalls:"Cascadas",mines:"Minas",other:"Más para explorar"}},
  contactPage:{eyebrow:"Zona de clientes",title:"Casa de Don Simón",
    sub:"Este apartamento está publicado y disponible en Booking.com. Pulsa abajo para consultar disponibilidad, precios y opiniones reales para tus fechas.",
    addressLabel:"Ubicación",address:"Cabo Roig, Orihuela Costa · Provincia de Alicante, España",
    bookButton:"Reservar en Booking.com",mapNote:"Abre Booking.com en una pestaña nueva.",
    syncTitle:"Sobre la sincronización en vivo del calendario",
    syncBody:"Esta página no puede incrustar directamente el calendario en vivo de Booking.com: por seguridad, las normas del navegador solo permiten cargar scripts desde una lista corta de fuentes de confianza, y Booking.com no está entre ellas aquí. La forma fiable de ver la disponibilidad y los precios en tiempo real es el botón de arriba, que abre el anuncio real en Booking.com.",
    whatsappTitle:"Chatea por WhatsApp",whatsappBody:"Escribe directamente a tu anfitrión por WhatsApp para una respuesta rápida — antes de tu estancia o en cualquier momento durante ella.",whatsappCta:"Abrir chat de WhatsApp",whatsappMsg:"¡Hola! Tengo una pregunta sobre Casa de Don Simón en Cabo Roig.",
    guestTitle:"Para huéspedes con reserva confirmada",
    guestItems:[
      {l:"Entrada / salida",v:"Se acuerda directamente con el anfitrión tras la reserva — normalmente con flexibilidad si lo pides."},
      {l:"WiFi",v:"WiFi gratis en todo el apartamento; la contraseña se envía en el check-in."},
      {l:"Dudas antes o durante tu estancia",v:"Escribe a tu anfitrión por WhatsApp (o a través de Booking.com) — WhatsApp es la forma más rápida de contactar con nosotros."}
    ]},
  localPage:{eyebrow:"Vida local",title:"Mercadillos, excursión en barco y vida más allá de la playa",
    sub:"El lado cotidiano de la costa: mercadillos semanales, una excursión en barco para ver delfines, la laguna rosa y el trenecito turístico de verano que conecta las playas de la zona.",
    marketsTitle:"Mercadillos semanales",marketsSub:"Fruta fresca, productos locales y artesanía — un pueblo distinto cada día, todos a poca distancia en coche.",marketsCta:"Mapa",
    markets:[
      {day:"jueves",name:"Mercadillo de Cabo Roig",url:"https://maps.app.goo.gl/SGDpC3m9jSYFze3i8"},
      {day:"viernes",name:"Mercadillo de Torrevieja",url:"https://maps.app.goo.gl/YzJtxmTDV8rkkhxb7"},
      {day:"sábado",name:"Mercadillo de Playa Flamenca",url:"https://maps.app.goo.gl/VzqmVBJBi7uFwKkk9"},
      {day:"miércoles",name:"Mercadillo de San Miguel de Salinas",url:"https://maps.app.goo.gl/XNoXkqq1TEZa5U1EA"}
    ],
    boatTitle:"Excursión en barco para ver delfines",
    boatDesc:"Los barcos que salen del puerto de Torrevieja se cruzan a menudo con grupos de delfines salvajes en la bahía, y hay una opción de catamarán con fondo de cristal que continúa hasta la isla de Tabarca.",
    boatNote:"Unos 20-25 minutos en coche desde el apartamento. Reserva con antelación en verano.",
    boatCta:"Ver operador",boatUrl:"https://torreviejaboattours.com/",
    saltTitle:"La laguna rosa (Las Salinas de Torrevieja)",
    saltDesc:"La salina en activo de Torrevieja adquiere un llamativo tono rosa con tiempo cálido y seco — una curiosidad natural genuina, no un lugar para bañarse. San Miguel de Salinas, el pueblo del interior algo más allá, debe su nombre a ese mismo comercio histórico de la sal.",
    saltTip:"La mejor luz es al atardecer, de abril a septiembre, tras varios días sin lluvia. Lleva calzado cerrado — la costra de sal es cortante — y no te bañes: la zona está protegida y vigilada.",
    saltCta:"Mapa",saltUrl:"https://www.google.com/maps/search/?api=1&query=Las+Salinas+de+Torrevieja+Laguna+Rosa",
    trainTitle:"Trenecito turístico de Orihuela Costa",
    trainDesc:"Un tren de vagones abiertos conecta las playas desde Campoamor, pasando por Cabo Roig y La Zenia, hasta Playa Flamenca, con unas 17 paradas en dos rutas, incluida Zenia Boulevard — una forma tranquila de ver todo el litoral en menos de una hora.",
    trainNote:"Lleva varios veranos funcionando — gratis algunas temporadas, unos 6 € por viajes ilimitados otras — así que conviene consultar el horario y la tarifa vigentes in situ antes de ir.",
    trainCta:"Ruta y paradas",trainUrl:"https://torrevieja.com/en/tourist-train-orihuela-costa-beaches/",
    kartTitle:"Karting junto a la costa",
    kartDesc:"Dos circuitos iluminados justo al lado de la carretera Torrevieja-Cartagena, con karts para todas las edades — desde unos 3 años hasta karts de 400cc para adultos — además de una pequeña feria infantil y restaurante propio.",
    kartNote:"Abierto todos los días, de 11:00 a 22:00. No hace falta reservar para ir a correr; llama o escribe por WhatsApp para grupos, rutas en quad o cumpleaños.",
    kartCta:"Ver web",kartUrl:"http://www.gokartsorihuelacosta.es/",
    wineTitle:"Enoturismo en Bodegas Faelo",
    wineDesc:"Una bodega familiar cerca de Torrevieja que elabora vinos bajo la etiqueta «La Dama», con visitas a la bodega y al viñedo que terminan en una cata acompañada de queso y embutidos locales.",
    wineNote:"Las visitas son solo con cita previa — contacta con la bodega para concertar la visita y la cata.",
    wineCta:"Ver web",wineUrl:"http://www.vinosladama.com/",
    foodTitle:"Un sabor de la costa",
    foodDesc:"La paella y el marisco fresco cocinados al aire libre son habituales en las fiestas locales y los días de mercadillo — vale la pena organizar una visita en torno a ellos si ves alguno anunciado."},
  common:{lang:"Idioma",readMore:"Detalles",backTop:"Volver arriba",close:"Cerrar",photo:"Foto",directions:"Cómo llegar",website:"Sitio web",musicOn:"Reproducir música de fondo",musicOff:"Pausar música de fondo",routeMap:"Ver mapa de ruta",parkingFree:"Aparcamiento gratuito",parkingPaid:"Aparcamiento de pago"}
},
pl:{
  nav:{home:"Start",apartment:"Apartament",attractions:"Atrakcje",local:"Życie lokalne",gallery:"Galeria",contact:"Strefa klienta"},
  hero:{eyebrow:"Cabo Roig · Costa Blanca, Hiszpania",title:"Casa de Don Simón",
    lead:"Słoneczny, przyjazny rodzinom apartament wakacyjny na południu Costa Blanca — baza wypadowa na dni na plaży, popołudnia przy basenie i łatwe wycieczki do trzech kolejnych regionów pełnych jaskiń, wodospadów, kopalni i parków rozrywki.",
    ctaBook:"Sprawdź dostępność",ctaExplore:"Zaplanuj wycieczki",
    stats:[{n:"3",l:"regiony w zasięgu jednego dnia"},{n:"25 min",l:"pieszo do plaży"},{n:"24",l:"atrakcji dla rodzin"}]},
  highlights:{eyebrow:"Dlaczego wybierają go rodziny",title:"Wszystko, czego potrzebuje rodzinny wyjazd",
    items:[
      {t:"Basen i brodzik dla dzieci",d:"Wspólny basen z osobnym brodzikiem dla dzieci i ogrodem, tuż za drzwiami."},
      {t:"Kilka kroków od plaży",d:"Plaża w Cabo Roig w zasięgu spaceru; plaża La Zenia — kilka minut samochodem."},
      {t:"Prawdziwa kuchnia",d:"Płyta indukcyjna, piekarnik i osobna pralnia — gotujcie, suszcie ręczniki, żyjcie jak mieszkańcy."},
      {t:"Trzy regiony blisko",d:"Alicante, Murcja, Andaluzja i Walencja są w zasięgu jednodniowej wycieczki."}
    ]},
  regionsTeaser:{eyebrow:"Wycieczki jednodniowe",title:"Odkrywaj wg regionu",sub:"Każda jaskinia, wodospad, kopalnia i park rozrywki na tej stronie jest pogrupowana wg regionu i oznaczona czasem dojazdu z apartamentu.",cta:"Zobacz wszystkie atrakcje"},
  homeBase:"Już tu jesteście",
  driveFrom:"od apartamentu",
  attractionsCount:"atrakcji",
  galleryTeaser:{eyebrow:"Wnętrze Casa de Don Simón",title:"Zajrzyj do apartamentu",sub:"Jasne, wygodne wnętrza ze śródziemnomorskimi akcentami — zobacz pełną galerię.",cta:"Zobacz galerię"},
  ctaBand:{title:"Gotowi zarezerwować pobyt?",sub:"Casa de Don Simón jest dostępne do rezerwacji na Booking.com — sprawdź aktualną dostępność i ceny na wybrane daty.",cta:"Zobacz na Booking.com"},
  footer:{about:"Przyjazny rodzinom apartament wakacyjny w Cabo Roig, na południu Costa Blanca.",explore:"Nawigacja",book:"Rezerwacja",bookLink:"Rezerwuj na Booking.com",rights:"Casa de Don Simón · Cabo Roig, Orihuela Costa, Hiszpania",madeNote:"Nieoficjalny przewodnik dla gości."},
  apartmentPage:{eyebrow:"Apartament",title:"Wasz dom na Costa Blanca",
    amenitiesTitle:"Udogodnienia",locationTitle:"Odległości",locationSub:"Przybliżone odległości od apartamentu.",
    amenities:[
      {l:"Wspólny basen + brodzik dla dzieci"},{l:"Ogród i taras słoneczny"},{l:"W pełni wyposażona kuchnia"},
      {l:"Pralka"},{l:"Klimatyzacja"},{l:"Bezpłatne WiFi"},{l:"Bezpłatny prywatny parking"},
      {l:"Prywatny balkon"},{l:"Ochrona 24h"}
    ],
    distances:[
      {l:"Plaża Cabo Roig",v:"1,6 km · 5 min samochodem · 25 min pieszo"},{l:"Plaża La Zenia",v:"2,6 km · 6 min samochodem"},
      {l:"Pole golfowe Villamartín",v:"2,1 km · 5 min samochodem"},{l:"Centrum Zenia Boulevard (sklepy i restauracje)",v:"4 km · 10 min samochodem"}
    ],
    parkingNote:"Większość rodzin jeździ na plażę samochodem, a nie pieszo — wszystkie parkingi przy plażach na Orihuela Costa, w tym w Cabo Roig i La Zenia, są bezpłatne.",
    mapTitle:"Trasa na plażę",mapCta:"Otwórz w Google Maps",mapDistance:"1,6 km · 5 min samochodem",mapHere:"Tu jesteś",
    beachesTitle:"Pobliskie plaże",beachesSub:"Wszystkie plaże w zasięgu krótkiego dojazdu od apartamentu — kliknij pinezkę lub kartę, aby zobaczyć trasę dojazdu.",
    beachesImportant:"Parking przy plaży jest bezpłatny na całym tym odcinku wybrzeża — z wyjątkiem Torrevieja, gdzie parkingi przy plaży są płatne.",
    airportsTitle:"Najbliższe lotniska",
    airports:[
      {l:"Lotnisko Alicante-Elche (ALC)",v:"52 km · ok. 50 min jazdy"},
      {l:"Lotnisko Región de Murcia (RMU)",v:"49 km · ok. 45 min jazdy"}
    ],
    airportNote:"Ten odcinek wybrzeża nie ma połączenia kolejowego – najwygodniej dojechać z lub na lotnisko wynajętym samochodem, taksówką (ok. 100–130 €) albo zarezerwowanym wcześniej prywatnym transferem (ok. 45–60 €).",
    boltTitle:"Oblicz koszt przejazdu",boltCta:"Sprawdź cenę w aplikacji Bolt",
    boltNote:"Otwórz aplikację Bolt (lub bolt.eu), wpisz lotnisko jako miejsce odbioru i „Casa de Don Simón, Cabo Roig” jako cel podróży — zobaczysz szacowaną cenę jeszcze przed rezerwacją, co ułatwia porównanie z taksówką lub prywatnym transferem.",
    restaurantsTitle:"Gdzie zjeść w pobliżu",
    restaurantsSub:"Kilka cenionych restauracji w niedalekiej odległości — od argentyńskiego grilla po owoce morza tuż nad plażą.",
    restaurantsCta:"Więcej informacji",
    restaurants:[
      {name:"Che!! Argentinian Grill (Che Asador Argentino)",place:"La Zenia · Zenia Boulevard",desc:"Duży bufet z argentyńskim grillem — mięso krojone i grillowane przy stoliku, w centrum handlowym Zenia Boulevard.",photo:"che",url:"http://www.cherestaurant.es/"},
      {name:"Angelique Grill Bar",place:"Lomas de Cabo Roig",desc:"Grill bar w dzielnicy Lomas de Cabo Roig, serwujący steki z grilla i śródziemnomorskie dania do dzielenia się — w tym grillowaną ośmiornicę i karczochy.",photo:"angelique",url:"https://maps.app.goo.gl/4KCyZo8FNtvuy1JVA"},
      {name:"La Bahía de Cabo Roig",place:"Cabo Roig · pierwsza linia plaży",desc:"Śródziemnomorskie owoce morza, tapas i paelle tuż przy promenadzie w Cabo Roig — spacerkiem od apartamentu.",photo:"labahia",url:"https://www.google.com/maps/search/?api=1&query=Restaurante+La+Bahia+de+Cabo+Roig+Orihuela+Costa"},
      {name:"Rincón de Adrián",place:"Pilar de la Horadada",desc:"Kameralna, rodzinna kawiarnia-bar z ogrzewanym tarasem i kącikiem dla dzieci — dobre miejsce na spokojne śniadanie, kawę lub swobodny posiłek z dala od turystycznego zgiełku.",photo:"adrian",url:"https://rincon-de-adrian.makro.rest/"},
      {name:"Chill Out International Restaurant",place:"Orihuela Costa",desc:"Międzynarodowy bar-restauracja niedaleko Cabo Roig w klimacie loungowym — w karcie dania kuchni meksykańskiej, włoskiej i steakhouse.",photo:"chillout",url:"https://maps.app.goo.gl/FVkd9x6WPPKeyWtQ9"},
      {name:"Olé Olé Spanish Food and Drinks",place:"Orihuela Costa",desc:"Tradycyjny hiszpański lokal niedaleko Cabo Roig na klasyczne pescaíto frito — smażone kalmary, sardele i świeżą rybę w cieście — oraz talerze owoców morza i zimne napoje.",photo:"oleole",url:"https://maps.app.goo.gl/vA8ramLGdn8ycCPY6"},
      {name:"Aberdinangus Restauracja Argentyńska",place:"Calle Cielo 10, Cabo Roig",desc:"Argentyńska grillownia w Cabo Roig serwująca wołowinę z grilla z pieczonymi ziemniakami — rezerwacja zalecana telefonicznie lub przez WhatsApp.",photo:"aberdinangus",url:"https://aberdinangus.com/"},
      {name:"Food House Mil Palmeras",place:"Mil Palmeras",desc:"Restauracja fusion kuchni azjatyckiej w Mil Palmeras, łącząca świeże sushi i nigiri z grillowanymi owocami morza — krewetkami, przegrzebkami i rybą prosto z grilla.",photo:"foodhouse",url:"https://maps.app.goo.gl/JML6ZTaAQn5NcRkQA"}
    ],
    galleryCta:"Zobacz zdjęcia apartamentu",bookCta:"Sprawdź dostępność"},
  galleryPage:{eyebrow:"Galeria",title:"Casa de Don Simón na zdjęciach",sub:"Spojrzenie na sypialnie, salon, kuchnię, taras i basen wspólny apartamentu.",comingSoon:"Nowe zdjęcia apartamentu wkrótce się pojawią — zajrzyj tu ponownie.",
    cats:{living:"Salon",dining:"Jadalnia",kitchen:"Kuchnia",sofabed:"Sofa rozkładana (dodatkowe łóżko)",bedroom1:"Sypialnia z podwójnym łóżkiem",bedroom2:"Sypialnia z dwoma łóżkami",terrace:"Taras",pool:"Basen wspólny",surroundings:"Okolice Cabo Roig"}},
  attractionsPage:{eyebrow:"Atrakcje",title:"Rodzinne wypady — od jaskiń po wybrzeża",
    sub:"Dwadzieścia cztery atrakcje w czterech regionach — jaskinie, wodospady, prawdziwa kopalnia, parki rozrywki, plaże i więcej — pogrupowane wg regionu i oznaczone czasem dojazdu z apartamentu.",
    exploreRegion:"Zobacz region",allFilter:"Wszystkie"},
  regionPage:{back:"Wszystkie regiony",driveLabel:"Przybliżony czas dojazdu z apartamentu",categories:{caves:"Jaskinie",waterfalls:"Wodospady",mines:"Kopalnie",other:"Więcej do odkrycia"}},
  contactPage:{eyebrow:"Strefa klienta",title:"Casa de Don Simón",
    sub:"Ten apartament jest dostępny do rezerwacji na Booking.com. Kliknij poniżej, aby sprawdzić aktualną dostępność, ceny i opinie gości na wybrane daty.",
    addressLabel:"Lokalizacja",address:"Cabo Roig, Orihuela Costa · prowincja Alicante, Hiszpania",
    bookButton:"Rezerwuj na Booking.com",mapNote:"Otwiera Booking.com w nowej karcie.",
    syncTitle:"O synchronizacji kalendarza na żywo",
    syncBody:"Ta strona nie może bezpośrednio osadzić kalendarza dostępności Booking.com na żywo — ze względów bezpieczeństwa zasady przeglądarki pozwalają ładować skrypty tylko z krótkiej listy zaufanych źródeł, a Booking.com się na niej nie znajduje. Najpewniejszym sposobem sprawdzenia dostępności i cen w czasie rzeczywistym jest przycisk powyżej, który otwiera prawdziwą ofertę na Booking.com.",
    whatsappTitle:"Czat na WhatsApp",whatsappBody:"Napisz bezpośrednio do gospodarza na WhatsApp, aby szybko uzyskać odpowiedź — przed pobytem lub w jego trakcie.",whatsappCta:"Otwórz czat WhatsApp",whatsappMsg:"Cześć! Mam pytanie dotyczące Casa de Don Simón w Cabo Roig.",
    guestTitle:"Dla gości z potwierdzoną rezerwacją",
    guestItems:[
      {l:"Zameldowanie / wymeldowanie",v:"Ustalane bezpośrednio z gospodarzem po rezerwacji — zwykle elastycznie, na życzenie."},
      {l:"WiFi",v:"Bezpłatne WiFi w całym apartamencie; hasło przesyłane przy zameldowaniu."},
      {l:"Pytania przed lub w trakcie pobytu",v:"Napisz do gospodarza na WhatsApp (lub przez Booking.com) — WhatsApp to najszybszy sposób kontaktu z nami."}
    ]},
  localPage:{eyebrow:"Życie lokalne",title:"Targi, rejs z delfinami i życie poza plażą",
    sub:"Codzienna strona wybrzeża — cotygodniowe targi uliczne, rejs łodzią z obserwacją delfinów, różowe jezioro solne i letni pociąg turystyczny łączący okoliczne plaże.",
    marketsTitle:"Cotygodniowe targi uliczne",marketsSub:"Świeże owoce, lokalne produkty i rękodzieło — inne miasteczko każdego dnia, wszystkie w niedalekiej odległości.",marketsCta:"Mapa",
    markets:[
      {day:"czwartek",name:"Targ w Cabo Roig",url:"https://maps.app.goo.gl/SGDpC3m9jSYFze3i8"},
      {day:"piątek",name:"Targ w Torrevieja",url:"https://maps.app.goo.gl/YzJtxmTDV8rkkhxb7"},
      {day:"sobota",name:"Targ w Playa Flamenca",url:"https://maps.app.goo.gl/VzqmVBJBi7uFwKkk9"},
      {day:"środa",name:"Targ w San Miguel de Salinas",url:"https://maps.app.goo.gl/XNoXkqq1TEZa5U1EA"}
    ],
    boatTitle:"Rejs łodzią z obserwacją delfinów",
    boatDesc:"Łodzie wypływające z portu w Torrevieja regularnie napotykają grupy dzikich delfinów w zatoce, a opcja katamaranu ze szklanym dnem prowadzi dalej, aż na wyspę Tabarca.",
    boatNote:"Ok. 20–25 minut jazdy od apartamentu. Latem warto rezerwować z wyprzedzeniem.",
    boatCta:"Zobacz organizatora",boatUrl:"https://torreviejaboattours.com/",
    saltTitle:"Różowe jezioro solne (Las Salinas de Torrevieja)",
    saltDesc:"Czynna salina w Torrevieja przybiera intensywny różowy kolor w ciepłą, suchą pogodę — to prawdziwa naturalna ciekawostka, a nie miejsce do kąpieli. San Miguel de Salinas, miasteczko w głębi lądu kawałek dalej, zawdzięcza swoją nazwę temu samemu, historycznemu handlowi solą.",
    saltTip:"Najlepsze światło o zachodzie słońca, od kwietnia do września, po kilku suchych dniach. Załóż zamknięte buty — skorupa soli jest ostra — i nie wchodź do wody: teren jest chroniony i patrolowany.",
    saltCta:"Mapa",saltUrl:"https://www.google.com/maps/search/?api=1&query=Las+Salinas+de+Torrevieja+Laguna+Rosa",
    trainTitle:"Pociąg turystyczny Orihuela Costa",
    trainDesc:"Otwarty pociąg turystyczny łączy plaże od Campoamor, przez Cabo Roig i La Zenia, aż po Playa Flamenca, zatrzymując się na ok. 17 przystankach na dwóch trasach, w tym przy Zenia Boulevard — spokojny sposób, by zobaczyć całe wybrzeże w niecałą godzinę.",
    trainNote:"Kursuje każdego lata od kilku lat — czasem bezpłatnie, czasem za ok. 6 € za nielimitowaną liczbę przejazdów danego dnia — dlatego aktualny rozkład i cenę warto sprawdzić na miejscu przed wyjściem.",
    trainCta:"Trasa i przystanki",trainUrl:"https://torrevieja.com/en/tourist-train-orihuela-costa-beaches/",
    kartTitle:"Kartingi przy nadmorskiej drodze",
    kartDesc:"Dwa oświetlone tory tuż przy drodze Torrevieja–Cartagena, z gokartami dla każdego — od ok. 3. roku życia po pełnowymiarowe gokarty 400cc dla dorosłych — plus mały wesołe miasteczko i restauracja na miejscu.",
    kartNote:"Czynne codziennie, 11:00–22:00. Nie trzeba rezerwować, by po prostu przyjechać i pojeździć — na grupy, wycieczki quadami czy urodziny warto zadzwonić lub napisać na WhatsApp.",
    kartCta:"Zobacz stronę",kartUrl:"http://www.gokartsorihuelacosta.es/",
    wineTitle:"Enoturystyka w Bodegas Faelo",
    wineDesc:"Rodzinna winnica niedaleko Torrevieja, produkująca wina pod marką „La Dama”, oferująca zwiedzanie piwnicy i winnicy zakończone degustacją z lokalnym serem i wędlinami.",
    wineNote:"Wizyty tylko po wcześniejszym umówieniu — skontaktuj się z winnicą, aby ustalić termin zwiedzania i degustacji.",
    wineCta:"Zobacz stronę",wineUrl:"http://www.vinosladama.com/",
    foodTitle:"Smak wybrzeża",
    foodDesc:"Paella i świeże owoce morza gotowane na świeżym powietrzu to stały punkt lokalnych fiest i dni targowych — warto zaplanować wizytę wokół takiego wydarzenia, jeśli akurat się odbywa."},
  common:{lang:"Język",readMore:"Szczegóły",backTop:"Do góry",close:"Zamknij",photo:"Zdjęcie",directions:"Trasa dojazdu",website:"Strona",musicOn:"Włącz muzykę w tle",musicOff:"Wyłącz muzykę w tle",routeMap:"Mapa trasy",parkingFree:"Bezpłatny parking",parkingPaid:"Płatny parking"}
},
de:{
  nav:{home:"Start",apartment:"Die Wohnung",attractions:"Ausflugsziele",local:"Leben vor Ort",gallery:"Galerie",contact:"Kundenbereich"},
  hero:{eyebrow:"Cabo Roig · Costa Blanca, Spanien",title:"Casa de Don Simón",
    lead:"Eine sonnige, familienfreundliche Ferienwohnung an der südlichen Costa Blanca — eure Basis für Strandtage, Pool-Nachmittage und bequeme Ausflüge in drei weitere Regionen voller Höhlen, Wasserfälle, Bergwerke und Freizeitparks.",
    ctaBook:"Verfügbarkeit prüfen",ctaExplore:"Ausflüge planen",
    stats:[{n:"3",l:"Regionen in Tagesausflug-Reichweite"},{n:"25 Min.",l:"zu Fuß zum Strand"},{n:"24",l:"Ausflugsziele für Familien"}]},
  highlights:{eyebrow:"Warum Familien sich hier wohlfühlen",title:"Alles, was ein Familienurlaub braucht",
    items:[
      {t:"Pool & Kinderbecken",d:"Ein Gemeinschaftspool mit eigenem Kinderbecken und Garten, direkt vor der Tür."},
      {t:"Nur Schritte vom Sand",d:"Der Strand von Cabo Roig ist zu Fuß erreichbar, der Strand La Zenia in wenigen Autominuten."},
      {t:"Eine echte Küche",d:"Induktionskochfeld, Backofen und separater Waschraum — kochen, Handtücher trocknen, wie zu Hause leben."},
      {t:"Drei Regionen in der Nähe",d:"Alicante, Murcia, Andalusien und Valencia sind alle bequem als Tagesausflug erreichbar."}
    ]},
  regionsTeaser:{eyebrow:"Tagesausflüge",title:"Nach Region entdecken",sub:"Jede Höhle, jeder Wasserfall, jedes Bergwerk und jeder Freizeitpark auf dieser Seite ist nach Region gruppiert und mit der Fahrzeit ab der Wohnung versehen.",cta:"Alle Ausflugsziele ansehen"},
  homeBase:"Ihr seid schon da",
  driveFrom:"ab der Wohnung",
  attractionsCount:"Ausflugsziele",
  galleryTeaser:{eyebrow:"In der Casa de Don Simón",title:"Ein Blick in die Wohnung",sub:"Helle, komfortable Räume mit mediterranen Akzenten — die vollständige Galerie ansehen.",cta:"Galerie ansehen"},
  ctaBand:{title:"Bereit, euren Aufenthalt zu buchen?",sub:"Casa de Don Simón ist auf Booking.com gelistet und buchbar — prüft die aktuelle Verfügbarkeit und die Preise für eure Reisedaten.",cta:"Auf Booking.com ansehen"},
  footer:{about:"Eine familienfreundliche Ferienwohnung in Cabo Roig, an der südlichen Costa Blanca.",explore:"Entdecken",book:"Buchung",bookLink:"Auf Booking.com buchen",rights:"Casa de Don Simón · Cabo Roig, Orihuela Costa, Spanien",madeNote:"Inoffizieller Reiseführer für Gäste."},
  apartmentPage:{eyebrow:"Die Wohnung",title:"Euer Zuhause an der Costa Blanca",
    amenitiesTitle:"Ausstattung",locationTitle:"Entfernungen",locationSub:"Ungefähre Entfernungen ab der Wohnung.",
    amenities:[
      {l:"Gemeinschaftspool + Kinderbecken"},{l:"Garten & Sonnenterrasse"},{l:"Voll ausgestattete Küche"},
      {l:"Waschmaschine"},{l:"Klimaanlage"},{l:"Kostenloses WLAN"},{l:"Kostenloser Privatparkplatz"},
      {l:"Privater Balkon"},{l:"24-Stunden-Sicherheit"}
    ],
    distances:[
      {l:"Strand Cabo Roig",v:"1,6 km · 5 Min. mit dem Auto · 25 Min. zu Fuß"},{l:"Strand La Zenia",v:"2,6 km · 6 Min. mit dem Auto"},
      {l:"Golfplatz Villamartín",v:"2,1 km · 5 Min. mit dem Auto"},{l:"Zenia Boulevard (Shopping & Gastronomie)",v:"4 km · 10 Min. mit dem Auto"}
    ],
    parkingNote:"Die meisten Familien fahren mit dem Auto zum Strand statt zu Fuß zu gehen — alle Strandparkplätze an der Orihuela Costa, auch in Cabo Roig und La Zenia, sind kostenlos.",
    mapTitle:"Route zum Strand",mapCta:"In Google Maps öffnen",mapDistance:"1,6 km · 5 Min. mit dem Auto",mapHere:"Hier befindet ihr euch",
    beachesTitle:"Strände in der Nähe",beachesSub:"Alle Strände in bequemer Reichweite der Wohnung — tippen Sie auf eine Markierung oder Karte für die Route.",
    beachesImportant:"Das Parken am Strand ist entlang dieses Küstenabschnitts überall kostenlos — außer in Torrevieja, wo die Strandparkplätze kostenpflichtig sind.",
    airportsTitle:"Nächstgelegene Flughäfen",
    airports:[
      {l:"Flughafen Alicante-Elche (ALC)",v:"52 km · ca. 50 Min. Fahrt"},
      {l:"Flughafen Región de Murcia (RMU)",v:"49 km · ca. 45 Min. Fahrt"}
    ],
    airportNote:"An diesem Küstenabschnitt gibt es keinen Zug — am einfachsten kommt man mit einem Mietwagen, Taxi (ca. 100–130 €) oder einem vorab gebuchten privaten Transfer (ca. 45–60 €) zu bzw. von beiden Flughäfen.",
    boltTitle:"Fahrpreis berechnen",boltCta:"Preis mit Bolt schätzen",
    boltNote:"Öffnet die Bolt-App (oder bolt.eu), gebt den Flughafen als Abholort und „Casa de Don Simón, Cabo Roig\" als Ziel ein — ihr seht den geschätzten Preis schon vor der Buchung, praktisch zum Vergleich mit Taxi oder privatem Transfer.",
    restaurantsTitle:"Essen in der Nähe",
    restaurantsSub:"Ein paar gut bewertete Restaurants in kurzer Fahrentfernung — vom argentinischen Grill bis zu Meeresfrüchten direkt am Strand.",
    restaurantsCta:"Mehr Infos",
    restaurants:[
      {name:"Che!! Argentinian Grill (Che Asador Argentino)",place:"La Zenia · Zenia Boulevard",desc:"Ein großes argentinisches Grillbuffet — Fleisch wird direkt am Tisch tranchiert und gegrillt, im Einkaufszentrum Zenia Boulevard.",photo:"che",url:"http://www.cherestaurant.es/"},
      {name:"Angelique Grill Bar",place:"Lomas de Cabo Roig",desc:"Eine Grillbar im Viertel Lomas de Cabo Roig mit gegrillten Steaks und mediterranen Teilergerichten — darunter gegrillter Oktopus und Artischocken.",photo:"angelique",url:"https://maps.app.goo.gl/4KCyZo8FNtvuy1JVA"},
      {name:"La Bahía de Cabo Roig",place:"Cabo Roig · direkt am Strand",desc:"Mediterrane Meeresfrüchte, Tapas und Paellas direkt an der Strandpromenade von Cabo Roig — fußläufig von der Wohnung.",photo:"labahia",url:"https://www.google.com/maps/search/?api=1&query=Restaurante+La+Bahia+de+Cabo+Roig+Orihuela+Costa"},
      {name:"Rincón de Adrián",place:"Pilar de la Horadada",desc:"Eine entspannte, familiengeführte Cafetería-Bar mit beheizter Terrasse und Kinderspielecke — gut für ein einfaches Frühstück, einen Kaffee oder ein zwangloses Essen abseits des Touristentrubels.",photo:"adrian",url:"https://rincon-de-adrian.makro.rest/"},
      {name:"Chill Out International Restaurant",place:"Orihuela Costa",desc:"Eine internationale Bar-Restaurant nahe Cabo Roig mit entspanntem Lounge-Ambiente — auf der Karte stehen mexikanische, italienische und Steakhouse-Gerichte.",photo:"chillout",url:"https://maps.app.goo.gl/FVkd9x6WPPKeyWtQ9"},
      {name:"Olé Olé Spanish Food and Drinks",place:"Orihuela Costa",desc:"Ein traditionelles spanisches Lokal nahe Cabo Roig für klassisches pescaíto frito — frittierte Calamares, Sardellen und Fisch im Teigmantel — sowie Meeresfrüchteplatten und kalte Getränke.",photo:"oleole",url:"https://maps.app.goo.gl/vA8ramLGdn8ycCPY6"},
      {name:"Aberdinangus Argentinisches Restaurant",place:"Calle Cielo 10, Cabo Roig",desc:"Ein argentinisches Steakhouse in Cabo Roig mit gegrilltem Rindfleisch und Röstkartoffeln — Reservierung per Telefon oder WhatsApp empfohlen.",photo:"aberdinangus",url:"https://aberdinangus.com/"},
      {name:"Food House Mil Palmeras",place:"Mil Palmeras",desc:"Ein asiatisches Fusion-Restaurant in Mil Palmeras, das frisches Sushi und Nigiri mit gegrillten Meeresfrüchteplatten kombiniert — Garnelen, Schwertmuscheln und Fisch direkt vom Grill.",photo:"foodhouse",url:"https://maps.app.goo.gl/JML6ZTaAQn5NcRkQA"}
    ],
    galleryCta:"Fotos der Wohnung ansehen",bookCta:"Verfügbarkeit prüfen"},
  galleryPage:{eyebrow:"Galerie",title:"Casa de Don Simón in Bildern",sub:"Ein Blick auf die Schlafzimmer, den Wohnbereich, die Küche, die Terrasse und den Gemeinschaftspool der Wohnung.",comingSoon:"Neue Fotos der Wohnung sind unterwegs — schaut bald wieder vorbei.",
    cats:{living:"Wohnzimmer",dining:"Essbereich",kitchen:"Küche",sofabed:"Schlafsofa (zusätzliches Doppelbett)",bedroom1:"Doppelzimmer",bedroom2:"Zweibettzimmer",terrace:"Terrasse",pool:"Gemeinschaftspool",surroundings:"Umgebung von Cabo Roig"}},
  attractionsPage:{eyebrow:"Ausflugsziele",title:"Familientage — von Höhlen bis Küsten",
    sub:"Vierundzwanzig Ausflugsziele in vier Regionen — Höhlen, Wasserfälle, ein echtes Bergwerk, Freizeitparks, Strände und mehr — nach Region gruppiert und mit der Fahrzeit ab der Wohnung versehen.",
    exploreRegion:"Region entdecken",allFilter:"Alle"},
  regionPage:{back:"Alle Regionen",driveLabel:"Ca. Fahrzeit ab der Wohnung",categories:{caves:"Höhlen",waterfalls:"Wasserfälle",mines:"Bergwerke",other:"Mehr entdecken"}},
  contactPage:{eyebrow:"Kundenbereich",title:"Casa de Don Simón",
    sub:"Diese Wohnung ist auf Booking.com gelistet und buchbar. Tippt unten, um aktuelle Verfügbarkeit, Preise und Bewertungen für eure Reisedaten zu prüfen.",
    addressLabel:"Lage",address:"Cabo Roig, Orihuela Costa · Provinz Alicante, Spanien",
    bookButton:"Auf Booking.com buchen",mapNote:"Öffnet Booking.com in einem neuen Tab.",
    syncTitle:"Zur Live-Synchronisierung des Kalenders",
    syncBody:"Diese Seite kann den Live-Kalender von Booking.com nicht direkt einbetten — aus Sicherheitsgründen lässt der Browser nur Skripte von einer kurzen Liste vertrauenswürdiger Quellen zu, und Booking.com gehört hier nicht dazu. Der zuverlässige Weg, Verfügbarkeit und Preise in Echtzeit zu sehen, ist der Button oben, der das echte Inserat auf Booking.com öffnet.",
    whatsappTitle:"Per WhatsApp chatten",whatsappBody:"Schreiben Sie Ihrem Gastgeber direkt über WhatsApp für eine schnelle Antwort — vor oder jederzeit während Ihres Aufenthalts.",whatsappCta:"WhatsApp-Chat öffnen",whatsappMsg:"Hallo! Ich habe eine Frage zu Casa de Don Simón in Cabo Roig.",
    guestTitle:"Für bestätigte Gäste",
    guestItems:[
      {l:"Check-in / Check-out",v:"Wird nach der Buchung direkt mit eurem Gastgeber vereinbart — auf Anfrage meist flexibel."},
      {l:"WLAN",v:"Kostenloses WLAN in der gesamten Wohnung; das Passwort wird beim Check-in mitgeteilt."},
      {l:"Fragen vor oder während eures Aufenthalts",v:"Schreibt eurem Gastgeber über WhatsApp (oder über Booking.com) — WhatsApp ist der schnellste Weg, uns zu erreichen."}
    ]},
  localPage:{eyebrow:"Leben vor Ort",title:"Märkte, Bootsausflug und das Leben abseits des Strands",
    sub:"Die alltägliche Seite der Küste — wöchentliche Straßenmärkte, ein Delfin-Beobachtungsausflug mit dem Boot, der rosa Salzsee und das sommerliche Touristenbähnchen, das die Strände verbindet.",
    marketsTitle:"Wöchentliche Straßenmärkte",marketsSub:"Frisches Obst, lokale Produkte und Handwerk — jeden Tag ein anderer Ort, alle in kurzer Fahrentfernung.",marketsCta:"Karte",
    markets:[
      {day:"Donnerstag",name:"Markt in Cabo Roig",url:"https://maps.app.goo.gl/SGDpC3m9jSYFze3i8"},
      {day:"Freitag",name:"Markt in Torrevieja",url:"https://maps.app.goo.gl/YzJtxmTDV8rkkhxb7"},
      {day:"Samstag",name:"Markt in Playa Flamenca",url:"https://maps.app.goo.gl/VzqmVBJBi7uFwKkk9"},
      {day:"Mittwoch",name:"Markt in San Miguel de Salinas",url:"https://maps.app.goo.gl/XNoXkqq1TEZa5U1EA"}
    ],
    boatTitle:"Delfin-Beobachtungsausflug mit dem Boot",
    boatDesc:"Boote, die vom Hafen Torrevieja ablegen, treffen in der Bucht regelmäßig auf wilde Delfine, und ein Glasboden-Katamaran fährt sogar weiter bis zur Insel Tabarca.",
    boatNote:"Etwa 20–25 Minuten Fahrt von der Wohnung. Im Sommer vorab buchen.",
    boatCta:"Anbieter ansehen",boatUrl:"https://torreviejaboattours.com/",
    saltTitle:"Der rosa Salzsee (Las Salinas de Torrevieja)",
    saltDesc:"Der aktive Salzsee von Torrevieja färbt sich bei warmem, trockenem Wetter auffällig rosa — eine echte Naturkuriosität, aber kein Ort zum Baden. San Miguel de Salinas, der etwas weiter im Landesinneren gelegene Ort, verdankt seinen Namen demselben historischen Salzhandel.",
    saltTip:"Bestes Licht bei Sonnenuntergang, April bis September, nach einer trockenen Phase. Festes Schuhwerk tragen — die Salzkruste ist scharfkantig — und nicht baden: Das Gebiet steht unter Schutz und wird kontrolliert.",
    saltCta:"Karte",saltUrl:"https://www.google.com/maps/search/?api=1&query=Las+Salinas+de+Torrevieja+Laguna+Rosa",
    trainTitle:"Touristenbähnchen Orihuela Costa",
    trainDesc:"Ein offener Zug verbindet die Strände von Campoamor über Cabo Roig und La Zenia bis Playa Flamenca, mit rund 17 Haltestellen auf zwei Linien, unter anderem am Zenia Boulevard — eine entspannte Art, den ganzen Küstenabschnitt in unter einer Stunde zu sehen.",
    trainNote:"Es fährt seit mehreren Jahren jeden Sommer — mal kostenlos, mal für rund 6 € mit beliebig vielen Fahrten an diesem Tag — den aktuellen Sommerfahrplan und Preis daher bitte vor Ort prüfen.",
    trainCta:"Strecke & Haltestellen",trainUrl:"https://torrevieja.com/en/tourist-train-orihuela-costa-beaches/",
    kartTitle:"Gokarts an der Küstenstraße",
    kartDesc:"Zwei beleuchtete Strecken direkt an der Straße Torrevieja–Cartagena, mit Gokarts für jedes Alter — von etwa 3 Jahren bis zu vollwertigen 400-cm³-Karts für Erwachsene — dazu ein kleiner Rummel und ein hauseigenes Restaurant.",
    kartNote:"Täglich geöffnet, 11:00–22:00 Uhr. Ohne Voranmeldung einfach vorbeikommen und fahren — für Gruppen, Quad-Touren oder Geburtstage vorher anrufen oder per WhatsApp schreiben.",
    kartCta:"Website ansehen",kartUrl:"http://www.gokartsorihuelacosta.es/",
    wineTitle:"Weintourismus bei Bodegas Faelo",
    wineDesc:"Ein familiengeführtes Weingut bei Torrevieja, das Weine unter dem Label „La Dama” erzeugt, mit Keller- und Weinbergführungen, die in einer Verkostung mit lokalem Käse und Wurstwaren enden.",
    wineNote:"Besuche nur nach vorheriger Anmeldung — das Weingut vorab kontaktieren, um Führung und Verkostung zu vereinbaren.",
    wineCta:"Website ansehen",wineUrl:"http://www.vinosladama.com/",
    foodTitle:"Ein Geschmack der Küste",
    foodDesc:"Paella und frischer, im Freien zubereiteter Fisch gehören zu lokalen Festen und Markttagen dazu — ein Besuch lohnt sich, wenn gerade eines angekündigt ist."},
  common:{lang:"Sprache",readMore:"Details",backTop:"Nach oben",close:"Schließen",photo:"Foto",directions:"Route",website:"Webseite",musicOn:"Hintergrundmusik abspielen",musicOff:"Hintergrundmusik pausieren",routeMap:"Routenkarte",parkingFree:"Kostenloses Parken",parkingPaid:"Kostenpflichtiges Parken"}
},
nl:{
  nav:{home:"Home",apartment:"Het appartement",attractions:"Uitjes",local:"Lokaal leven",gallery:"Galerij",contact:"Klantenzone"},
  hero:{eyebrow:"Cabo Roig · Costa Blanca, Spanje",title:"Casa de Don Simón",
    lead:"Een zonnig, gezinsvriendelijk vakantieappartement aan de zuidelijke Costa Blanca — jullie uitvalsbasis voor strand­dagen, middagen bij het zwembad en makkelijke uitstapjes naar drie andere regio's vol grotten, watervallen, mijnen en pretparken.",
    ctaBook:"Beschikbaarheid bekijken",ctaExplore:"Plan je uitjes",
    stats:[{n:"3",l:"regio's binnen dagtrip-afstand"},{n:"25 min",l:"lopen naar het strand"},{n:"24",l:"gezinsuitjes op de kaart"}]},
  highlights:{eyebrow:"Waarom gezinnen hiervoor kiezen",title:"Alles wat een gezinsreis nodig heeft",
    items:[
      {t:"Zwembad & kinderbad",d:"Een gedeeld zwembad met eigen kinderbad en tuin, vlak voor de deur."},
      {t:"Zo op het strand",d:"Het strand van Cabo Roig ligt op loopafstand; het strand van La Zenia op enkele autominuten."},
      {t:"Een echte keuken",d:"Inductiekookplaat, oven en een aparte wasruimte — kook, droog handdoeken, leef als een local."},
      {t:"Drie regio's dichtbij",d:"Alicante, Murcia, Andalusië en Valencia liggen allemaal binnen een makkelijke dagtrip."}
    ]},
  regionsTeaser:{eyebrow:"Dagtrips",title:"Ontdek per regio",sub:"Elke grot, waterval, mijn en pretpark op deze site is gegroepeerd per regio en voorzien van de reistijd vanaf het appartement.",cta:"Bekijk alle uitjes"},
  homeBase:"Hier ben je al",
  driveFrom:"vanaf het appartement",
  attractionsCount:"uitjes",
  galleryTeaser:{eyebrow:"Binnen bij Casa de Don Simón",title:"Een kijkje in het appartement",sub:"Lichte, comfortabele ruimtes met mediterrane accenten — bekijk de volledige galerij.",cta:"Bekijk galerij"},
  ctaBand:{title:"Klaar om te boeken?",sub:"Casa de Don Simón staat op Booking.com en is direct te boeken — check de actuele beschikbaarheid en prijzen voor jullie data.",cta:"Bekijk op Booking.com"},
  footer:{about:"Een gezinsvriendelijk vakantieappartement in Cabo Roig, aan de zuidelijke Costa Blanca.",explore:"Ontdek",book:"Boeken",bookLink:"Boek op Booking.com",rights:"Casa de Don Simón · Cabo Roig, Orihuela Costa, Spanje",madeNote:"Niet-officiële reisgids voor gasten."},
  apartmentPage:{eyebrow:"Het appartement",title:"Jullie thuis aan de Costa Blanca",
    amenitiesTitle:"Voorzieningen",locationTitle:"Afstanden",locationSub:"Geschatte afstanden vanaf het appartement.",
    amenities:[
      {l:"Gedeeld zwembad + kinderbad"},{l:"Tuin & zonneterras"},{l:"Volledig uitgeruste keuken"},
      {l:"Wasmachine"},{l:"Airconditioning"},{l:"Gratis wifi"},{l:"Gratis eigen parkeerplaats"},
      {l:"Eigen balkon"},{l:"24-uursbeveiliging"}
    ],
    distances:[
      {l:"Strand Cabo Roig",v:"1,6 km · 5 min rijden · 25 min lopen"},{l:"Strand La Zenia",v:"2,6 km · 6 min rijden"},
      {l:"Golfbaan Villamartín",v:"2,1 km · 5 min rijden"},{l:"Zenia Boulevard (winkels & restaurants)",v:"4 km · 10 min rijden"}
    ],
    parkingNote:"De meeste gezinnen rijden naar het strand in plaats van te lopen — alle strandparkeerplaatsen aan de Orihuela Costa, ook bij Cabo Roig en La Zenia, zijn gratis.",
    mapTitle:"Route naar het strand",mapCta:"Openen in Google Maps",mapDistance:"1,6 km · 5 min rijden",mapHere:"Hier ben je",
    beachesTitle:"Stranden in de buurt",beachesSub:"Alle stranden op korte afstand van het appartement — tik op een pin of kaart voor de route.",
    beachesImportant:"Parkeren bij het strand is overal langs dit kuststuk gratis — behalve in Torrevieja, waar de strandparkeerplaatsen betaald zijn.",
    airportsTitle:"Dichtstbijzijnde luchthavens",
    airports:[
      {l:"Luchthaven Alicante-Elche (ALC)",v:"52 km · ca. 50 min rijden"},
      {l:"Luchthaven Región de Murcia (RMU)",v:"49 km · ca. 45 min rijden"}
    ],
    airportNote:"Dit deel van de kust heeft geen trein — het makkelijkst kom je van en naar beide luchthavens met een huurauto, taxi (ca. € 100–130) of een vooraf geboekte privétransfer (ca. € 45–60).",
    boltTitle:"Bereken je rit",boltCta:"Prijs schatten met Bolt",
    boltNote:"Open de Bolt-app (of bolt.eu), voer de luchthaven in als ophaalpunt en „Casa de Don Simón, Cabo Roig” als bestemming, en je ziet een geschatte prijs vóór het boeken — handig om te vergelijken met een taxi of privétransfer.",
    restaurantsTitle:"Waar te eten in de buurt",
    restaurantsSub:"Een handvol gewaardeerde restaurants op korte rijafstand, van een Argentijnse grill tot zeevruchten aan het strand.",
    restaurantsCta:"Meer info",
    restaurants:[
      {name:"Che!! Argentinian Grill (Che Asador Argentino)",place:"La Zenia · Zenia Boulevard",desc:"Een groot Argentijns grillbuffet — vlees wordt aan tafel gesneden en gegrild, in winkelcentrum Zenia Boulevard.",photo:"che",url:"http://www.cherestaurant.es/"},
      {name:"Angelique Grill Bar",place:"Lomas de Cabo Roig",desc:"Een grillbar in de wijk Lomas de Cabo Roig met geroosterde steaks en mediterrane deelgerechten — waaronder gegrilde octopus en artisjokken.",photo:"angelique",url:"https://maps.app.goo.gl/4KCyZo8FNtvuy1JVA"},
      {name:"La Bahía de Cabo Roig",place:"Cabo Roig · aan het strand",desc:"Mediterrane zeevruchten, tapas en paella's direct aan de boulevard van Cabo Roig — op loopafstand van het appartement.",photo:"labahia",url:"https://www.google.com/maps/search/?api=1&query=Restaurante+La+Bahia+de+Cabo+Roig+Orihuela+Costa"},
      {name:"Rincón de Adrián",place:"Pilar de la Horadada",desc:"Een relaxte, familiaire cafetería-bar met verwarmd terras en een speelhoek voor kinderen — fijn voor een rustig ontbijt, koffie of informele maaltijd, weg van de toeristendrukte.",photo:"adrian",url:"https://rincon-de-adrian.makro.rest/"},
      {name:"Chill Out International Restaurant",place:"Orihuela Costa",desc:"Een internationale bar-restaurant bij Cabo Roig met een ontspannen loungesfeer — op de kaart staan Mexicaanse, Italiaanse en steakhousegerechten.",photo:"chillout",url:"https://maps.app.goo.gl/FVkd9x6WPPKeyWtQ9"},
      {name:"Olé Olé Spanish Food and Drinks",place:"Orihuela Costa",desc:"Een traditionele Spaanse tent bij Cabo Roig voor klassieke pescaíto frito — gefrituurde inktvisringen, ansjovis en vis in beslag — plus schaal- en schelpdierenplateaus en koude drankjes.",photo:"oleole",url:"https://maps.app.goo.gl/vA8ramLGdn8ycCPY6"},
      {name:"Aberdinangus Argentijns Restaurant",place:"Calle Cielo 10, Cabo Roig",desc:"Een Argentijnse steakhouse in Cabo Roig met gegrild rundvlees en gebakken aardappelen — reserveren via telefoon of WhatsApp aanbevolen.",photo:"aberdinangus",url:"https://aberdinangus.com/"},
      {name:"Food House Mil Palmeras",place:"Mil Palmeras",desc:"Een Aziatisch fusionrestaurant in Mil Palmeras dat verse sushi en nigiri combineert met gegrilde schaal- en schelpdierenplateaus — garnalen, scheermessen en vis vers van de grill.",photo:"foodhouse",url:"https://maps.app.goo.gl/JML6ZTaAQn5NcRkQA"}
    ],
    galleryCta:"Bekijk foto's van het appartement",bookCta:"Beschikbaarheid bekijken"},
  galleryPage:{eyebrow:"Galerij",title:"Casa de Don Simón in beeld",sub:"Een kijkje in de slaapkamers, woonruimte, keuken, het terras en het gemeenschappelijke zwembad van het appartement.",comingSoon:"Nieuwe foto's van het appartement zijn onderweg — kom snel terug.",
    cats:{living:"Woonkamer",dining:"Eetruimte",kitchen:"Keuken",sofabed:"Slaapbank (extra tweepersoonsbed)",bedroom1:"Tweepersoonsslaapkamer",bedroom2:"Slaapkamer met twee bedden",terrace:"Terras",pool:"Gemeenschappelijk zwembad",surroundings:"Omgeving van Cabo Roig"}},
  attractionsPage:{eyebrow:"Uitjes",title:"Gezinsdagjes uit, van grotten tot kustlijnen",
    sub:"Vierentwintig uitjes in vier regio's — grotten, watervallen, een echte mijn, pretparken, stranden en meer — gegroepeerd per regio en voorzien van de reistijd vanaf het appartement.",
    exploreRegion:"Bekijk regio",allFilter:"Alle"},
  regionPage:{back:"Alle regio's",driveLabel:"Geschatte reistijd vanaf het appartement",categories:{caves:"Grotten",waterfalls:"Watervallen",mines:"Mijnen",other:"Meer te ontdekken"}},
  contactPage:{eyebrow:"Klantenzone",title:"Casa de Don Simón",
    sub:"Dit appartement staat op Booking.com en is daar direct te boeken. Tik hieronder om actuele beschikbaarheid, prijzen en gastbeoordelingen voor jullie data te bekijken.",
    addressLabel:"Locatie",address:"Cabo Roig, Orihuela Costa · Provincie Alicante, Spanje",
    bookButton:"Boek op Booking.com",mapNote:"Opent Booking.com in een nieuw tabblad.",
    syncTitle:"Over live-synchronisatie van de kalender",
    syncBody:"Deze pagina kan de live kalender van Booking.com niet rechtstreeks insluiten — om veiligheidsredenen mag de browser alleen scripts laden vanaf een korte lijst vertrouwde bronnen, en Booking.com staat hier niet op. De betrouwbare manier om actuele beschikbaarheid en prijzen te zien is de knop hierboven, die de echte advertentie op Booking.com opent.",
    whatsappTitle:"Chat via WhatsApp",whatsappBody:"Stuur je gastheer direct een bericht via WhatsApp voor een snel antwoord — vóór of tijdens je verblijf.",whatsappCta:"WhatsApp-chat openen",whatsappMsg:"Hoi! Ik heb een vraag over Casa de Don Simón in Cabo Roig.",
    guestTitle:"Voor gasten met een bevestigde boeking",
    guestItems:[
      {l:"In- / uitchecken",v:"Wordt na het boeken rechtstreeks met jullie gastheer geregeld — meestal flexibel op verzoek."},
      {l:"WiFi",v:"Gratis wifi in het hele appartement; het wachtwoord wordt bij het inchecken gegeven."},
      {l:"Vragen voor of tijdens jullie verblijf",v:"Stuur je gastheer een bericht via WhatsApp (of via Booking.com) — WhatsApp is de snelste manier om ons te bereiken."}
    ]},
  localPage:{eyebrow:"Lokaal leven",title:"Markten, boottocht en het leven voorbij het strand",
    sub:"De alledaagse kant van de kust — wekelijkse straatmarkten, een boottocht met dolfijnen spotten, het roze zoutmeer en het zomerse toeristentreintje dat de lokale stranden verbindt.",
    marketsTitle:"Wekelijkse straatmarkten",marketsSub:"Vers fruit, lokale producten en handwerk — elke dag een ander dorp, allemaal op korte rijafstand.",marketsCta:"Kaart",
    markets:[
      {day:"donderdag",name:"Markt Cabo Roig",url:"https://maps.app.goo.gl/SGDpC3m9jSYFze3i8"},
      {day:"vrijdag",name:"Markt Torrevieja",url:"https://maps.app.goo.gl/YzJtxmTDV8rkkhxb7"},
      {day:"zaterdag",name:"Markt Playa Flamenca",url:"https://maps.app.goo.gl/VzqmVBJBi7uFwKkk9"},
      {day:"woensdag",name:"Markt San Miguel de Salinas",url:"https://maps.app.goo.gl/XNoXkqq1TEZa5U1EA"}
    ],
    boatTitle:"Boottocht met dolfijnen spotten",
    boatDesc:"Boten die vanuit de jachthaven van Torrevieja vertrekken, treffen in de baai regelmatig groepen wilde dolfijnen, en een catamaran met glazen bodem vaart zelfs door tot het eiland Tabarca.",
    boatNote:"Ongeveer 20-25 minuten rijden vanaf het appartement. Boek in de zomer op tijd.",
    boatCta:"Bekijk aanbieder",boatUrl:"https://torreviejaboattours.com/",
    saltTitle:"Het roze zoutmeer (Las Salinas de Torrevieja)",
    saltDesc:"Het actieve zoutmeer van Torrevieja krijgt bij warm, droog weer een opvallende roze kleur — een echte natuurlijke bezienswaardigheid, geen zwemplek. San Miguel de Salinas, het dorp wat verder landinwaarts, dankt zijn naam aan diezelfde historische zouthandel.",
    saltTip:"Het mooiste licht is bij zonsondergang, van april tot september, na een droge periode. Draag gesloten schoenen — de zoutkorst is scherp — en zwem er niet: het gebied is beschermd en wordt gecontroleerd.",
    saltCta:"Kaart",saltUrl:"https://www.google.com/maps/search/?api=1&query=Las+Salinas+de+Torrevieja+Laguna+Rosa",
    trainTitle:"Toeristentreintje Orihuela Costa",
    trainDesc:"Een open treintje verbindt de stranden van Campoamor via Cabo Roig en La Zenia tot Playa Flamenca, met zo'n 17 haltes op twee routes, waaronder Zenia Boulevard — een ontspannen manier om de hele kuststrook in minder dan een uur te zien.",
    trainNote:"Het rijdt al meerdere jaren elke zomer — soms gratis, soms voor ongeveer € 6 voor onbeperkt rijden die dag — check daarom lokaal de actuele zomerdienstregeling en prijs voordat je gaat.",
    trainCta:"Route & haltes",trainUrl:"https://torrevieja.com/en/tourist-train-orihuela-costa-beaches/",
    kartTitle:"Karten aan de kustweg",
    kartDesc:"Twee verlichte circuits vlak aan de weg Torrevieja–Cartagena, met karts voor iedereen — van ongeveer 3 jaar tot volwaardige 400cc-karts voor volwassenen — plus een kleine kermis en een eigen restaurant.",
    kartNote:"Dagelijks open, 11:00-22:00 uur. Geen reservering nodig om zomaar te komen racen — bel of app vooraf voor groepen, quadtochten of verjaardagen.",
    kartCta:"Bekijk website",kartUrl:"http://www.gokartsorihuelacosta.es/",
    wineTitle:"Wijntoerisme bij Bodegas Faelo",
    wineDesc:"Een familiewijnhuis bij Torrevieja dat wijnen onder het label \"La Dama\" maakt, met rondleidingen door kelder en wijngaard die eindigen in een proeverij met lokale kaas en vleeswaren.",
    wineNote:"Bezoeken enkel op afspraak — neem vooraf contact op met het wijnhuis om een rondleiding en proeverij te regelen.",
    wineCta:"Bekijk website",wineUrl:"http://www.vinosladama.com/",
    foodTitle:"Een smaak van de kust",
    foodDesc:"Paella en verse zeevruchten die buiten worden bereid, horen bij lokale feesten en marktdagen — de moeite waard om je bezoek daarop te plannen als je er een ziet aangekondigd."},
  common:{lang:"Taal",readMore:"Details",backTop:"Naar boven",close:"Sluiten",photo:"Foto",directions:"Route",website:"Website",musicOn:"Achtergrondmuziek afspelen",musicOff:"Achtergrondmuziek pauzeren",routeMap:"Routekaart",parkingFree:"Gratis parkeren",parkingPaid:"Betaald parkeren"}
},
fr:{
  nav:{home:"Accueil",apartment:"L'appartement",attractions:"Activités",local:"Vie locale",gallery:"Galerie",contact:"Espace client"},
  hero:{eyebrow:"Cabo Roig · Costa Blanca, Espagne",title:"Casa de Don Simón",
    lead:"Un appartement de vacances lumineux et adapté aux familles, sur le sud de la Costa Blanca — votre camp de base pour les journées plage, les après-midis piscine et des excursions faciles vers trois autres régions pleines de grottes, cascades, mines et parcs à thème.",
    ctaBook:"Vérifier les disponibilités",ctaExplore:"Planifier vos sorties",
    stats:[{n:"3",l:"régions à portée d'une journée"},{n:"25 min",l:"à pied jusqu'à la plage"},{n:"24",l:"activités en famille répertoriées"}]},
  highlights:{eyebrow:"Pourquoi les familles le choisissent",title:"Tout ce qu'il faut pour un séjour en famille",
    items:[
      {t:"Piscine & pataugeoire",d:"Une piscine collective avec sa propre pataugeoire pour enfants et un jardin, juste devant la porte."},
      {t:"À deux pas du sable",d:"La plage de Cabo Roig se rejoint à pied ; celle de La Zenia, en quelques minutes en voiture."},
      {t:"Une vraie cuisine",d:"Plaque à induction, four et buanderie séparée — cuisinez, faites sécher le linge, vivez comme sur place."},
      {t:"Trois régions à proximité",d:"Alicante, Murcie, Andalousie et Valence sont toutes à portée d'une excursion d'une journée."}
    ]},
  regionsTeaser:{eyebrow:"Excursions",title:"Explorer par région",sub:"Chaque grotte, cascade, mine et parc à thème de ce site est classé par région et indiqué avec le temps de trajet depuis l'appartement.",cta:"Voir toutes les activités"},
  homeBase:"Vous y êtes déjà",
  driveFrom:"depuis l'appartement",
  attractionsCount:"activités",
  galleryTeaser:{eyebrow:"À l'intérieur de Casa de Don Simón",title:"Un aperçu de l'appartement",sub:"Des pièces lumineuses et confortables aux touches méditerranéennes — voir la galerie complète.",cta:"Voir la galerie"},
  ctaBand:{title:"Prêts à réserver votre séjour ?",sub:"Casa de Don Simón est répertorié et réservable sur Booking.com — vérifiez les disponibilités et les prix en temps réel pour vos dates.",cta:"Voir sur Booking.com"},
  footer:{about:"Un appartement de vacances adapté aux familles à Cabo Roig, sur le sud de la Costa Blanca.",explore:"Explorer",book:"Réservation",bookLink:"Réserver sur Booking.com",rights:"Casa de Don Simón · Cabo Roig, Orihuela Costa, Espagne",madeNote:"Guide de voyage non officiel pour les voyageurs."},
  apartmentPage:{eyebrow:"L'appartement",title:"Votre pied-à-terre sur la Costa Blanca",
    amenitiesTitle:"Équipements",locationTitle:"Se déplacer",locationSub:"Distances approximatives depuis l'appartement.",
    amenities:[
      {l:"Piscine collective + pataugeoire"},{l:"Jardin & terrasse solarium"},{l:"Cuisine entièrement équipée"},
      {l:"Lave-linge"},{l:"Climatisation"},{l:"Wifi gratuit"},{l:"Parking privé gratuit"},
      {l:"Balcon privé"},{l:"Sécurité 24h/24"}
    ],
    distances:[
      {l:"Plage de Cabo Roig",v:"1,6 km · 5 min en voiture · 25 min à pied"},{l:"Plage de La Zenia",v:"2,6 km · 6 min en voiture"},
      {l:"Golf de Villamartín",v:"2,1 km · 5 min en voiture"},{l:"Zenia Boulevard (boutiques & restaurants)",v:"4 km · 10 min en voiture"}
    ],
    parkingNote:"La plupart des familles vont à la plage en voiture plutôt qu'à pied — tous les parkings de plage de l'Orihuela Costa, y compris à Cabo Roig et à La Zenia, sont gratuits.",
    mapTitle:"Itinéraire vers la plage",mapCta:"Ouvrir dans Google Maps",mapDistance:"1,6 km · 5 min en voiture",mapHere:"Vous êtes ici",
    beachesTitle:"Plages à proximité",beachesSub:"Toutes les plages accessibles facilement depuis l'appartement — touchez un repère ou une carte pour l'itinéraire.",
    beachesImportant:"Le stationnement à la plage est gratuit sur tout ce littoral — sauf à Torrevieja, où les parkings de plage sont payants.",
    airportsTitle:"Aéroports les plus proches",
    airports:[
      {l:"Aéroport d'Alicante-Elche (ALC)",v:"52 km · env. 50 min en voiture"},
      {l:"Aéroport de la Région de Murcie (RMU)",v:"49 km · env. 45 min en voiture"}
    ],
    airportNote:"Ce littoral n'est desservi par aucun train — le plus simple pour rejoindre l'un ou l'autre aéroport est une voiture de location, un taxi (environ 100–130 €) ou un transfert privé réservé à l'avance (environ 45–60 €).",
    boltTitle:"Estimez votre trajet",boltCta:"Estimer le tarif avec Bolt",
    boltNote:"Ouvrez l'application Bolt (ou bolt.eu), indiquez l'aéroport comme point de départ et « Casa de Don Simón, Cabo Roig » comme destination : vous verrez un tarif estimé avant de réserver — pratique pour comparer avec un taxi ou un transfert privé.",
    restaurantsTitle:"Où manger à proximité",
    restaurantsSub:"Quelques restaurants bien notés à quelques minutes en voiture, d'une grillade argentine aux fruits de mer en bord de plage.",
    restaurantsCta:"Plus d'infos",
    restaurants:[
      {name:"Che!! Argentinian Grill (Che Asador Argentino)",place:"La Zenia · Zenia Boulevard",desc:"Un grand buffet de grillades argentines — la viande est découpée et grillée à table, dans le centre commercial Zenia Boulevard.",photo:"che",url:"http://www.cherestaurant.es/"},
      {name:"Angelique Grill Bar",place:"Lomas de Cabo Roig",desc:"Un grill bar dans le quartier de Lomas de Cabo Roig, avec viandes grillées au feu de bois et plats méditerranéens à partager — poulpe et artichauts grillés notamment.",photo:"angelique",url:"https://maps.app.goo.gl/4KCyZo8FNtvuy1JVA"},
      {name:"La Bahía de Cabo Roig",place:"Cabo Roig · en bord de mer",desc:"Fruits de mer méditerranéens, tapas et paellas sur le front de mer de Cabo Roig — à quelques minutes à pied de l'appartement.",photo:"labahia",url:"https://www.google.com/maps/search/?api=1&query=Restaurante+La+Bahia+de+Cabo+Roig+Orihuela+Costa"},
      {name:"Rincón de Adrián",place:"Pilar de la Horadada",desc:"Un café-bar familial et décontracté, avec terrasse chauffée et coin jeux pour enfants — idéal pour un petit-déjeuner tranquille, un café ou un repas simple loin du circuit touristique.",photo:"adrian",url:"https://rincon-de-adrian.makro.rest/"},
      {name:"Chill Out International Restaurant",place:"Orihuela Costa",desc:"Un bar-restaurant international près de Cabo Roig à l'ambiance lounge détendue — la carte propose des plats mexicains, italiens et de type steakhouse.",photo:"chillout",url:"https://maps.app.goo.gl/FVkd9x6WPPKeyWtQ9"},
      {name:"Olé Olé Spanish Food and Drinks",place:"Orihuela Costa",desc:"Une adresse espagnole traditionnelle près de Cabo Roig pour un authentique pescaíto frito — calamars, anchois et poisson frits — ainsi que des plateaux de fruits de mer et des boissons fraîches.",photo:"oleole",url:"https://maps.app.goo.gl/vA8ramLGdn8ycCPY6"},
      {name:"Aberdinangus Restaurant Argentin",place:"Calle Cielo 10, Cabo Roig",desc:"Une grillade argentine à Cabo Roig avec des pièces de bœuf grillées et des pommes de terre rôties — réservation recommandée par téléphone ou WhatsApp.",photo:"aberdinangus",url:"https://aberdinangus.com/"},
      {name:"Food House Mil Palmeras",place:"Mil Palmeras",desc:"Un restaurant de fusion asiatique à Mil Palmeras qui associe sushis et nigiris frais à des plateaux de fruits de mer grillés — gambas, couteaux et poisson tout juste grillés.",photo:"foodhouse",url:"https://maps.app.goo.gl/JML6ZTaAQn5NcRkQA"}
    ],
    galleryCta:"Voir les photos de l'appartement",bookCta:"Vérifier les disponibilités"},
  galleryPage:{eyebrow:"Galerie",title:"Casa de Don Simón, en images",sub:"Un aperçu des chambres, de l'espace de vie, de la cuisine, de la terrasse et de la piscine communautaire de l'appartement.",comingSoon:"De nouvelles photos de l'appartement arrivent bientôt — repassez voir.",
    cats:{living:"Séjour",dining:"Salle à manger",kitchen:"Cuisine",sofabed:"Canapé-lit (lit double supplémentaire)",bedroom1:"Chambre double",bedroom2:"Chambre à lits jumeaux",terrace:"Terrasse",pool:"Piscine communautaire",surroundings:"Aux alentours de Cabo Roig"}},
  attractionsPage:{eyebrow:"Activités",title:"Sorties en famille, des grottes au littoral",
    sub:"Vingt-quatre activités réparties dans quatre régions — grottes, cascades, une vraie mine, parcs à thème, plages et plus encore — classées par région et indiquées avec le temps de trajet depuis l'appartement.",
    exploreRegion:"Découvrir la région",allFilter:"Toutes"},
  regionPage:{back:"Toutes les régions",driveLabel:"Trajet approx. depuis l'appartement",categories:{caves:"Grottes",waterfalls:"Cascades",mines:"Mines",other:"Autres activités"}},
  contactPage:{eyebrow:"Espace client",title:"Casa de Don Simón",
    sub:"Cet appartement est répertorié et réservable sur Booking.com. Touchez ci-dessous pour vérifier les disponibilités, les prix et les avis des voyageurs pour vos dates.",
    addressLabel:"Emplacement",address:"Cabo Roig, Orihuela Costa · Province d'Alicante, Espagne",
    bookButton:"Réserver sur Booking.com",mapNote:"Ouvre Booking.com dans un nouvel onglet.",
    syncTitle:"À propos de la synchronisation du calendrier en direct",
    syncBody:"Cette page ne peut pas intégrer directement le calendrier en direct de Booking.com — pour des raisons de sécurité, le navigateur n'autorise le chargement de scripts que depuis une courte liste de sources fiables, et Booking.com n'en fait pas partie ici. Le moyen fiable de voir les disponibilités et les prix en temps réel est le bouton ci-dessus, qui ouvre l'annonce réelle sur Booking.com.",
    whatsappTitle:"Discuter sur WhatsApp",whatsappBody:"Écrivez directement à votre hôte sur WhatsApp pour une réponse rapide — avant ou pendant votre séjour.",whatsappCta:"Ouvrir le chat WhatsApp",whatsappMsg:"Bonjour ! J'ai une question à propos de Casa de Don Simón à Cabo Roig.",
    guestTitle:"Pour les voyageurs avec réservation confirmée",
    guestItems:[
      {l:"Arrivée / départ",v:"Convenus directement avec votre hôte après la réservation — généralement flexibles sur demande."},
      {l:"Wifi",v:"Wifi gratuit dans tout l'appartement ; le mot de passe est envoyé à l'arrivée."},
      {l:"Questions avant ou pendant votre séjour",v:"Écrivez à votre hôte sur WhatsApp (ou via Booking.com) — WhatsApp est le moyen le plus rapide de nous joindre."}
    ]},
  localPage:{eyebrow:"Vie locale",title:"Marchés, sortie en bateau et la vie au-delà de la plage",
    sub:"Le quotidien du littoral — marchés hebdomadaires, sortie en bateau pour observer les dauphins, le lac salé rose et le petit train touristique d'été qui relie les plages locales.",
    marketsTitle:"Marchés hebdomadaires",marketsSub:"Fruits frais, produits locaux et artisanat — une ville différente chaque jour, toutes à quelques minutes en voiture.",marketsCta:"Carte",
    markets:[
      {day:"jeudi",name:"Marché de Cabo Roig",url:"https://maps.app.goo.gl/SGDpC3m9jSYFze3i8"},
      {day:"vendredi",name:"Marché de Torrevieja",url:"https://maps.app.goo.gl/YzJtxmTDV8rkkhxb7"},
      {day:"samedi",name:"Marché de Playa Flamenca",url:"https://maps.app.goo.gl/VzqmVBJBi7uFwKkk9"},
      {day:"mercredi",name:"Marché de San Miguel de Salinas",url:"https://maps.app.goo.gl/XNoXkqq1TEZa5U1EA"}
    ],
    boatTitle:"Sortie en bateau pour observer les dauphins",
    boatDesc:"Les bateaux qui partent du port de Torrevieja croisent régulièrement des groupes de dauphins sauvages dans la baie, avec une option de catamaran à fond de verre qui continue jusqu'à l'île de Tabarca.",
    boatNote:"Environ 20 à 25 minutes en voiture depuis l'appartement. Réservez à l'avance en été.",
    boatCta:"Voir l'organisateur",boatUrl:"https://torreviejaboattours.com/",
    saltTitle:"Le lac salé rose (Las Salinas de Torrevieja)",
    saltDesc:"Le marais salant en activité de Torrevieja prend une teinte rose saisissante par temps chaud et sec — une véritable curiosité naturelle, pas un lieu de baignade. San Miguel de Salinas, la ville un peu plus à l'intérieur des terres, doit son nom à ce même commerce historique du sel.",
    saltTip:"Meilleure lumière au coucher du soleil, d'avril à septembre, après une période sèche. Portez des chaussures fermées — la croûte de sel est coupante — et ne vous baignez pas : la zone est protégée et surveillée.",
    saltCta:"Carte",saltUrl:"https://www.google.com/maps/search/?api=1&query=Las+Salinas+de+Torrevieja+Laguna+Rosa",
    trainTitle:"Petit train touristique d'Orihuela Costa",
    trainDesc:"Un petit train à claire-voie relie les plages de Campoamor à Playa Flamenca en passant par Cabo Roig et La Zenia, avec une dix-septaine d'arrêts sur deux lignes, dont Zenia Boulevard — une façon tranquille de voir tout le littoral en moins d'une heure.",
    trainNote:"Il circule chaque été depuis plusieurs années — gratuit certaines saisons, environ 6 € pour un nombre illimité de trajets d'autres années — vérifiez donc sur place l'horaire et le tarif en vigueur avant d'y aller.",
    trainCta:"Itinéraire et arrêts",trainUrl:"https://torrevieja.com/en/tourist-train-orihuela-costa-beaches/",
    kartTitle:"Karting sur la route du littoral",
    kartDesc:"Deux circuits éclairés juste à côté de la route Torrevieja-Carthagène, avec des karts pour tous les âges — d'environ 3 ans jusqu'à des karts 400cc pour adultes — plus une petite fête foraine et un restaurant sur place.",
    kartNote:"Ouvert tous les jours, de 11h à 22h. Pas besoin de réserver pour venir rouler ; appelez ou écrivez sur WhatsApp pour les groupes, sorties en quad ou anniversaires.",
    kartCta:"Voir le site",kartUrl:"http://www.gokartsorihuelacosta.es/",
    wineTitle:"Œnotourisme aux Bodegas Faelo",
    wineDesc:"Un domaine viticole familial près de Torrevieja produisant des vins sous le label « La Dama », avec des visites du chai et du vignoble se terminant par une dégustation accompagnée de fromage et de charcuterie locaux.",
    wineNote:"Les visites se font uniquement sur rendez-vous — contactez le domaine à l'avance pour organiser la visite et la dégustation.",
    wineCta:"Voir le site",wineUrl:"http://www.vinosladama.com/",
    foodTitle:"Un avant-goût du littoral",
    foodDesc:"La paella et les fruits de mer frais cuisinés en plein air font partie des fêtes locales et des jours de marché — cela vaut la peine de caler une visite si vous en voyez une annoncée."},
  common:{lang:"Langue",readMore:"Détails",backTop:"Haut de page",close:"Fermer",photo:"Photo",directions:"Itinéraire",website:"Site web",musicOn:"Lancer la musique d'ambiance",musicOff:"Mettre la musique en pause",routeMap:"Carte de l'itinéraire",parkingFree:"Parking gratuit",parkingPaid:"Parking payant"}
}
};

/* ---------- Apartment long-form description ---------- */
const APARTMENT_DESC = {
en:"Casa de Don Simón is a bright, family-friendly holiday apartment in Cabo Roig, on the quiet southern stretch of the Costa Blanca where Alicante meets the Region of Murcia. The open living-dining room, with its sofa bed, dark-wood dining table and Mediterranean-blue touches, opens onto a private balcony and shares access to a communal pool with a dedicated children's pool and garden. A fully equipped kitchen — induction hob, oven, fridge — and a separate laundry room mean you can cook, dry towels and settle in exactly like at home. Cabo Roig's own beach is an easy stroll away, La Zenia beach and the Zenia Boulevard shopping and dining strip are minutes by car, and the Villamartín golf course is right around the corner. Free WiFi, air conditioning, free private parking and 24-hour security round out the essentials — a relaxed base for waking up, walking to the beach or pool before breakfast, and still being back in time for a nap, with three regions of caves, waterfalls, mines and theme parks within easy day-trip reach.",
es:"Casa de Don Simón es un luminoso apartamento vacacional, ideal para familias, situado en Cabo Roig, en el tramo sur y tranquilo de la Costa Blanca, justo donde Alicante linda con la Región de Murcia. El salón-comedor, con sofá cama, mesa de comedor de madera oscura y toques en azul Mediterráneo, se abre a un balcón privado y comparte el acceso a una piscina comunitaria con piscina infantil y jardín. Una cocina totalmente equipada —vitrocerámica de inducción, horno, frigorífico— y un lavadero independiente permiten cocinar, secar toallas e instalarse como en casa. La playa de Cabo Roig está a un corto paseo, la playa de La Zenia y la zona comercial y de restauración de Zenia Boulevard quedan a pocos minutos en coche, y el campo de golf de Villamartín está a la vuelta de la esquina. WiFi gratis, aire acondicionado, parking privado gratuito y seguridad 24 horas completan lo esencial: una base tranquila para despertarse, ir a la playa o a la piscina antes de desayunar y aun así llegar a tiempo para la siesta, con tres regiones llenas de cuevas, cascadas, minas y parques temáticos a un fácil trayecto de un día.",
pl:"Casa de Don Simón to jasny, przyjazny rodzinom apartament wakacyjny w Cabo Roig, na spokojnym, południowym odcinku Costa Blanca, tam gdzie Alicante styka się z Regionem Murcji. Otwarty salon z jadalnią, z rozkładaną sofą, ciemnym drewnianym stołem i śródziemnomorskimi błękitnymi akcentami, wychodzi na prywatny balkon i ma dostęp do wspólnego basenu z osobnym brodzikiem dla dzieci oraz ogrodem. W pełni wyposażona kuchnia – płyta indukcyjna, piekarnik, lodówka – oraz osobna pralnia pozwalają gotować, suszyć ręczniki i czuć się jak w domu. Plaża w Cabo Roig jest w zasięgu krótkiego spaceru, plaża La Zenia i centrum handlowo-gastronomiczne Zenia Boulevard – kilka minut samochodem, a pole golfowe Villamartín tuż za rogiem. Bezpłatne WiFi, klimatyzacja, darmowy prywatny parking i całodobowa ochrona uzupełniają resztę – spokojna baza wypadowa, z której można obudzić się, dojść przed śniadaniem na plażę lub basen i zdążyć wrócić na drzemkę, mając w zasięgu jednodniowej wycieczki jaskinie, wodospady, kopalnie i parki rozrywki trzech regionów.",
de:"Casa de Don Simón ist eine helle, familienfreundliche Ferienwohnung in Cabo Roig, am ruhigen südlichen Abschnitt der Costa Blanca, dort wo Alicante auf die Region Murcia trifft. Das offene Wohn-Esszimmer mit Schlafsofa, dunklem Holztisch und mediterran-blauen Akzenten öffnet sich zu einem privaten Balkon und teilt sich den Zugang zu einem Gemeinschaftspool mit eigenem Kinderbecken und Garten. Eine voll ausgestattete Küche — Induktionskochfeld, Backofen, Kühlschrank — sowie ein separater Waschraum lassen euch kochen, Handtücher trocknen und euch wie zu Hause fühlen. Der Strand von Cabo Roig ist zu Fuß leicht erreichbar, der Strand La Zenia und die Einkaufs- und Gastromeile Zenia Boulevard liegen wenige Autominuten entfernt, und der Golfplatz Villamartín ist gleich um die Ecke. Kostenloses WLAN, Klimaanlage, kostenloser Privatparkplatz und 24-Stunden-Sicherheit runden das Wesentliche ab — eine entspannte Basis, von der aus man vor dem Frühstück zum Strand oder Pool spazieren und trotzdem rechtzeitig zum Mittagsschlaf zurück sein kann, mit Höhlen, Wasserfällen, Bergwerken und Freizeitparks aus drei Regionen in bequemer Tagesausflugsreichweite.",
nl:"Casa de Don Simón is een licht, gezinsvriendelijk vakantieappartement in Cabo Roig, aan het rustige zuidelijke deel van de Costa Blanca, precies waar Alicante grenst aan de regio Murcia. De open woon-eetkamer, met slaapbank, donkerhouten eettafel en mediterraanblauwe accenten, geeft toegang tot een eigen balkon en deelt de toegang tot een gemeenschappelijk zwembad met apart kinderbad en tuin. Een volledig uitgeruste keuken — inductiekookplaat, oven, koelkast — en een aparte wasruimte maken dat je kunt koken, handdoeken drogen en je meteen thuis voelen. Het strand van Cabo Roig is een korte wandeling verderop, het strand van La Zenia en het winkel- en horecacentrum Zenia Boulevard liggen enkele autominuten weg, en de golfbaan van Villamartín ligt om de hoek. Gratis wifi, airconditioning, gratis privéparkeren en 24-uursbeveiliging maken het plaatje compleet — een ontspannen uitvalsbasis om voor het ontbijt naar het strand of zwembad te lopen en toch op tijd terug te zijn voor een middagdutje, met grotten, watervallen, mijnen en pretparken van drie regio's binnen een makkelijke dagtrip.",
fr:"Casa de Don Simón est un appartement de vacances lumineux et adapté aux familles à Cabo Roig, sur la partie sud et paisible de la Costa Blanca, là où l'Alicante rejoint la Région de Murcie. Le séjour-salle à manger ouvert, avec son canapé-lit, sa table en bois foncé et ses touches de bleu méditerranéen, donne sur un balcon privé et partage l'accès à une piscine collective avec pataugeoire pour enfants et jardin. Une cuisine entièrement équipée — plaque à induction, four, réfrigérateur — et une buanderie séparée permettent de cuisiner, de faire sécher le linge et de s'installer comme à la maison. La plage de Cabo Roig se rejoint à pied en quelques minutes, la plage de La Zenia et la galerie commerçante et gastronomique de Zenia Boulevard sont à quelques minutes en voiture, et le golf de Villamartín est juste au coin de la rue. Wifi gratuit, climatisation, parking privé gratuit et sécurité 24h/24 complètent l'essentiel — une base détendue pour se réveiller, marcher jusqu'à la plage ou la piscine avant le petit-déjeuner, et être de retour à temps pour la sieste, avec trois régions de grottes, cascades, mines et parcs à thème à portée d'une simple excursion d'une journée."
};

/* ---------- Regions ---------- */
const REGIONS = [
  { id:"alicante", isHome:true,
    i18n:{
      en:{name:"Costa Blanca — Alicante",tagline:"Right on your doorstep",intro:"The apartment sits in Cabo Roig on the southern Costa Blanca, so most of this region's caves, castles and theme parks are a short, easy drive — perfect for half-day trips that still leave time for the pool."},
      es:{name:"Costa Blanca — Alicante",tagline:"Justo a tu puerta",intro:"El apartamento está en Cabo Roig, en el sur de la Costa Blanca, así que la mayoría de cuevas, castillos y parques temáticos de esta provincia quedan a un trayecto corto y fácil: perfecto para excursiones de medio día que dejan tiempo para la piscina."},
      pl:{name:"Costa Blanca — Alicante",tagline:"Tuż za progiem",intro:"Apartament znajduje się w Cabo Roig, na południu Costa Blanca, więc większość jaskiń, zamków i parków rozrywki tego regionu leży bardzo blisko – idealnie na wycieczki na pół dnia, po których zostaje jeszcze czas na basen."},
      de:{name:"Costa Blanca — Alicante",tagline:"Direkt vor der Tür",intro:"Die Wohnung liegt in Cabo Roig an der südlichen Costa Blanca, daher sind die meisten Höhlen, Burgen und Freizeitparks dieser Provinz nur eine kurze, bequeme Fahrt entfernt — perfekt für Halbtagesausflüge, nach denen noch Zeit für den Pool bleibt."},
      nl:{name:"Costa Blanca — Alicante",tagline:"Vlak voor de deur",intro:"Het appartement ligt in Cabo Roig aan de zuidelijke Costa Blanca, dus de meeste grotten, kastelen en pretparken van deze provincie liggen op korte, makkelijke rijafstand — perfect voor halvedagtripjes met nog genoeg tijd voor het zwembad."},
      fr:{name:"Costa Blanca — Alicante",tagline:"À deux pas",intro:"L'appartement se trouve à Cabo Roig, sur le sud de la Costa Blanca, si bien que la plupart des grottes, châteaux et parcs à thème de cette province sont à un trajet court et facile — parfaits pour des sorties d'une demi-journée qui laissent le temps de profiter de la piscine."}
    }},
  { id:"murcia", isHome:false,
    i18n:{
      en:{name:"Region of Murcia",tagline:"Your other next-door neighbour",intro:"The Murcia border is minutes away. Inland you'll find Spain's most complete mining park and a countryside dotted with waterfalls and caves; on the coast, the calm, warm Mar Menor lagoon is one of Europe's best swimming spots for young children."},
      es:{name:"Región de Murcia",tagline:"Tu otro vecino de al lado",intro:"La frontera con Murcia está a minutos. Tierra adentro encontrarás el parque minero más completo de España y un campo salpicado de cascadas y cuevas; en la costa, la tranquila y cálida laguna del Mar Menor es uno de los mejores lugares de Europa para que los más pequeños naden."},
      pl:{name:"Region Murcji",tagline:"Twój drugi sąsiad",intro:"Granica z Murcją jest o kilka minut drogi. W głębi lądu znajdziecie najpełniejszy park górniczy w Hiszpanii oraz okolice pełne wodospadów i jaskiń; na wybrzeżu spokojna, ciepła laguna Mar Menor to jedno z najlepszych w Europie miejsc do pływania dla małych dzieci."},
      de:{name:"Region Murcia",tagline:"Der andere Nachbar nebenan",intro:"Die Grenze zu Murcia ist nur Minuten entfernt. Im Landesinneren findet ihr Spaniens vollständigsten Bergwerkspark und eine Landschaft voller Wasserfälle und Höhlen; an der Küste ist die ruhige, warme Lagune Mar Menor einer der besten Badeorte Europas für kleine Kinder."},
      nl:{name:"Regio Murcia",tagline:"Je andere buurman",intro:"De grens met Murcia is enkele minuten rijden. In het binnenland vind je Spanje's meest complete mijnenpark en een landschap vol watervallen en grotten; aan de kust is de rustige, warme lagune Mar Menor een van de beste zwemplekken van Europa voor jonge kinderen."},
      fr:{name:"Région de Murcie",tagline:"Votre autre voisin",intro:"La frontière avec Murcie n'est qu'à quelques minutes. À l'intérieur des terres, vous trouverez le parc minier le plus complet d'Espagne et une campagne parsemée de cascades et de grottes ; sur la côte, la lagune calme et chaude du Mar Menor est l'un des meilleurs spots de baignade d'Europe pour les jeunes enfants."}
    }},
  { id:"andalusia", isHome:false,
    i18n:{
      en:{name:"Andalusia (Almería)",tagline:"A bigger day out, well worth it",intro:"Cross into Almería province and the landscape turns to desert and volcanic coastline — spaghetti-western film sets, gypsum caves and some of Spain's clearest water. Further west, the Alhambra makes an unforgettable, if longer, day trip."},
      es:{name:"Andalucía (Almería)",tagline:"Una excursión más larga, que merece la pena",intro:"Al cruzar a la provincia de Almería el paisaje se vuelve desértico y volcánico: decorados de spaghetti western, cuevas de yeso y algunas de las aguas más cristalinas de España. Más al oeste, la Alhambra ofrece una excursión inolvidable, aunque más larga."},
      pl:{name:"Andaluzja (Almería)",tagline:"Dłuższa wycieczka, ale warta zachodu",intro:"Po przekroczeniu granicy prowincji Almería krajobraz zmienia się w pustynny i wulkaniczny – plany filmowe spaghetti westernów, jaskinie gipsowe i jedne z najczystszych wód w Hiszpanii. Dalej na zachód Alhambra to niezapomniana, choć dłuższa wycieczka."},
      de:{name:"Andalusien (Almería)",tagline:"Ein längerer Ausflug, der sich lohnt",intro:"Jenseits der Grenze zur Provinz Almería wird die Landschaft wüstenhaft und vulkanisch — Italowestern-Filmkulissen, Gipshöhlen und einige der klarsten Gewässer Spaniens. Weiter westlich bietet die Alhambra einen unvergesslichen, wenn auch längeren Tagesausflug."},
      nl:{name:"Andalusië (Almería)",tagline:"Een langer uitje, maar het waard",intro:"Steek de grens met de provincie Almería over en het landschap verandert in woestijn en vulkanische kust — spaghettiwestern-filmsets, gipsgrotten en enkele van de helderste wateren van Spanje. Verder westelijk is de Alhambra een onvergetelijke, zij het langere, dagtrip."},
      fr:{name:"Andalousie (Almería)",tagline:"Une sortie plus longue, qui en vaut la peine",intro:"En passant dans la province d'Almería, le paysage devient désertique et volcanique — décors de westerns spaghetti, grottes de gypse et certaines des eaux les plus limpides d'Espagne. Plus à l'ouest, l'Alhambra offre une excursion inoubliable, quoique plus longue."}
    }},
  { id:"valencia", isHome:false,
    i18n:{
      en:{name:"Valencia",tagline:"A full day north, easily done",intro:"Valencia city and its surrounding huerta are within about two hours — close enough for a single long day trip. Expect a world-class aquarium, an underground boat ride and a lagoon ringed by rice fields."},
      es:{name:"Valencia",tagline:"Un día completo hacia el norte, sin complicaciones",intro:"La ciudad de Valencia y su huerta quedan a unas dos horas: lo bastante cerca para una única excursión de día completo. Te esperan un acuario de primer nivel, un paseo en barca subterráneo y una laguna rodeada de arrozales."},
      pl:{name:"Walencja",tagline:"Cały dzień na północ, bez problemu",intro:"Miasto Walencja i otaczająca je „huerta” leżą około dwóch godzin drogi – wystarczająco blisko na jedną, całodniową wycieczkę. Czeka tam akwarium światowej klasy, podziemny rejs łodzią i laguna otoczona polami ryżowymi."},
      de:{name:"Valencia",tagline:"Ein voller Tag Richtung Norden, gut machbar",intro:"Die Stadt Valencia und ihre umliegende Huerta liegen rund zwei Stunden entfernt — nah genug für einen einzigen ganzen Ausflugstag. Es erwarten euch ein Weltklasse-Aquarium, eine Bootsfahrt unter Tage und eine von Reisfeldern umgebene Lagune."},
      nl:{name:"Valencia",tagline:"Een volle dag naar het noorden, prima te doen",intro:"De stad Valencia en de omliggende huerta liggen op zo'n twee uur rijden — dichtbij genoeg voor één lange dagtrip. Reken op een wereldklasse aquarium, een ondergrondse boottocht en een lagune omgeven door rijstvelden."},
      fr:{name:"Valence",tagline:"Une journée complète vers le nord, sans souci",intro:"La ville de Valence et sa huerta environnante se trouvent à environ deux heures — assez proche pour une seule longue sortie à la journée. Au programme : un aquarium de classe mondiale, une balade en barque souterraine et une lagune bordée de rizières."}
    }}
];

/* ---------- Apartment gallery ---------- */
/* key -> APT_IMAGES entry, cat -> galleryPage.cats key */
const GALLERY = [
  { key:"living2", cat:"living" },
  { key:"living3", cat:"living" },
  { key:"dining1", cat:"dining" },
  { key:"dining2", cat:"dining" },
  { key:"dining3", cat:"dining" },
  { key:"dining4", cat:"dining" },
  { key:"kitchen3", cat:"kitchen" },
  { key:"sofabed", cat:"sofabed" },
  { key:"bedroom1", cat:"bedroom1" },
  { key:"bedroom2", cat:"bedroom2" },
  { key:"gterrace", cat:"terrace" },
  { key:"mainpool", cat:"pool" },
  { key:"smallpool", cat:"pool" },
  { key:"caboroigarea", cat:"surroundings" }
];

/* ---------- Attractions ---------- */
/* category: caves | waterfalls | mines | other */
const ATTRACTIONS = [
  { id:"canelobre", region:"alicante", category:"caves", drive:"~40 min", town:"Busot", photo:"canelobre", url:"https://turismobusot.com/entradas-para-las-cuevas-del-canelobre/",
    i18n:{
      en:{name:"Canelobre Caves",desc:"Spain's largest illuminated cave chamber, hidden inside Cabeço d'Or mountain near Busot. Cool underground galleries, dramatic stalactites and a chamber famous for its concert acoustics make it an easy, air-conditioned outing on a hot day."},
      es:{name:"Cuevas de Canelobre",desc:"La mayor sala de una cueva iluminada de España, escondida en el monte Cabeço d'Or, cerca de Busot. Galerías subterráneas frescas, estalactitas imponentes y una sala famosa por su acústica: una excursión fácil y fresquita en un día de calor."},
      pl:{name:"Jaskinia Canelobre",desc:"Największa oświetlona komora jaskiniowa w Hiszpanii, ukryta w górze Cabeço d'Or koło Busot. Chłodne podziemne korytarze, efektowne stalaktyty i sala słynąca z akustyki koncertowej – idealna wycieczka w upalny dzień."},
      de:{name:"Höhle von Canelobre",desc:"Spaniens größte beleuchtete Höhlenkammer, versteckt im Berg Cabeço d'Or bei Busot. Kühle unterirdische Gänge, eindrucksvolle Stalaktiten und ein für seine Akustik berühmter Saal – ein angenehmer, klimatisierter Ausflug an heißen Tagen."},
      nl:{name:"Grotten van Canelobre",desc:"De grootste verlichte grotkamer van Spanje, verscholen in de berg Cabeço d'Or bij Busot. Koele ondergrondse gangen, indrukwekkende stalactieten en een zaal die beroemd is om zijn akoestiek — een makkelijk, verkoelend uitje op een hete dag."},
      fr:{name:"Grottes de Canelobre",desc:"La plus grande salle de grotte éclairée d'Espagne, cachée dans le mont Cabeço d'Or près de Busot. Galeries souterraines fraîches, stalactites spectaculaires et une salle réputée pour son acoustique — une sortie facile et climatisée par temps chaud."}
    }},
  { id:"covarull", region:"alicante", category:"caves", drive:"~1h20", town:"Vall d'Ebo", photo:"covarull", url:"https://www.pegoilesvalls.es/va/guia_practica/35-cueva-del-rull",
    i18n:{
      en:{name:"Cova del Rull",desc:"A 220-metre underground walk through chambers filled with stalactites and stalagmites near the village of Vall d'Ebo, on a fixed 30-minute guided route (287 steps, so not buggy-friendly). Cheap, cash-only tickets, and no need to book ahead except for large groups."},
      es:{name:"Cova del Rull",desc:"Un recorrido subterráneo de 220 metros entre salas repletas de estalactitas y estalagmitas cerca del pueblo de la Vall d'Ebo, con una ruta guiada fija de 30 minutos (287 escalones, no apta para carritos). Entradas baratas y solo en efectivo, sin necesidad de reservar salvo para grupos grandes."},
      pl:{name:"Cova del Rull",desc:"220-metrowa podziemna trasa przez sale pełne stalaktytów i stalagmitów niedaleko wioski Vall d'Ebo, po stałej, 30-minutowej trasie z przewodnikiem (287 schodów, więc nieodpowiednia dla wózków). Tanie bilety płatne wyłącznie gotówką, bez konieczności rezerwacji poza dużymi grupami."},
      de:{name:"Cova del Rull",desc:"Ein 220 Meter langer unterirdischer Rundgang durch Kammern voller Stalaktiten und Stalagmiten nahe dem Dorf Vall d'Ebo, auf einer festen, 30-minütigen Führung (287 Stufen, daher nicht kinderwagentauglich). Günstige, nur bar zu zahlende Tickets, eine Reservierung ist nur für größere Gruppen nötig."},
      nl:{name:"Cova del Rull",desc:"Een ondergrondse wandeling van 220 meter door kamers vol stalactieten en stalagmieten bij het dorpje Vall d'Ebo, op een vaste, 30 minuten durende rondleiding (287 treden, dus niet geschikt voor buggy's). Goedkope tickets, alleen contant; reserveren is enkel nodig voor grote groepen."},
      fr:{name:"Cova del Rull",desc:"Une promenade souterraine de 220 mètres à travers des salles pleines de stalactites et de stalagmites près du village de la Vall d'Ebo, sur un parcours guidé fixe de 30 minutes (287 marches, donc pas adapté aux poussettes). Billets bon marché, en espèces uniquement, réservation nécessaire seulement pour les grands groupes."}
    }},
  { id:"ratespenades", region:"alicante", category:"caves", drive:"~1h05", town:"Moraira", photo:"ratespenades", url:"https://kayakingjavea.com/excursion-en-kayak-en-moraira/",
    i18n:{
      en:{name:"Cova de les Rates Penades (by kayak)",desc:"A sea cave near Moraira reachable only by kayak or paddleboard, on a roughly 3-hour guided tour that also visits the light-filled Cova dels Arcs — snorkelling gear and life jackets included, beginner-friendly, with wetsuits provided in cooler months."},
      es:{name:"Cova de les Rates Penades (en kayak)",desc:"Una cueva marina cerca de Moraira a la que solo se llega en kayak o paddle surf, en una excursión guiada de unas 3 horas que también visita la luminosa Cova dels Arcs — con material de esnórquel y chalecos incluidos, apta para principiantes, con neopreno en los meses más fríos."},
      pl:{name:"Cova de les Rates Penades (kajakiem)",desc:"Jaskinia morska koło Moraira, do której można dotrzeć tylko kajakiem lub na desce SUP, podczas około 3-godzinnej wycieczki z przewodnikiem, obejmującej też rozświetloną Cova dels Arcs – ze sprzętem do snorkelingu i kamizelkami w cenie, odpowiednia dla początkujących, z pianką w chłodniejszych miesiącach."},
      de:{name:"Cova de les Rates Penades (mit dem Kajak)",desc:"Eine Meereshöhle bei Moraira, die nur mit dem Kajak oder SUP-Board erreichbar ist, auf einer rund 3-stündigen geführten Tour, die auch die lichtdurchflutete Cova dels Arcs einschließt — mit Schnorchelausrüstung und Schwimmwesten inklusive, anfängertauglich, mit Neoprenanzug in kühleren Monaten."},
      nl:{name:"Cova de les Rates Penades (met de kajak)",desc:"Een zeegrot bij Moraira die alleen per kajak of suppen bereikbaar is, tijdens een begeleide tocht van ongeveer 3 uur die ook de lichtrijke Cova dels Arcs aandoet — met snorkelspullen en zwemvesten inbegrepen, geschikt voor beginners, met wetsuit in de koelere maanden."},
      fr:{name:"Cova de les Rates Penades (en kayak)",desc:"Une grotte marine près de Moraira accessible uniquement en kayak ou en paddle, lors d'une excursion guidée d'environ 3 heures qui inclut aussi la lumineuse Cova dels Arcs — matériel de snorkeling et gilets de sauvetage fournis, adaptée aux débutants, combinaison fournie les mois les plus frais."}
    }},
  { id:"algar", region:"alicante", category:"waterfalls", drive:"~1h20", town:"Callosa d'en Sarrià", photo:"algar", url:"https://lasfuentesdelalgar.com/en/",
    i18n:{
      en:{name:"Fuentes del Algar",desc:"A staircase of turquoise pools and waterfalls fed by mountain springs, with shaded walkways and safe natural pools where kids can swim. Bring swimwear — it's one of the best free splash stops on the whole Costa Blanca."},
      es:{name:"Fuentes del Algar",desc:"Una escalinata de pozas turquesa y cascadas alimentadas por manantiales de montaña, con senderos sombreados y pozas naturales seguras para que los niños se bañen. Trae bañador: es una de las mejores paradas para refrescarse de toda la Costa Blanca."},
      pl:{name:"Fuentes del Algar",desc:"Kaskada turkusowych sadzawek i wodospadów zasilanych górskimi źródłami, z zacienionymi ścieżkami i bezpiecznymi naturalnymi basenami do kąpieli dla dzieci. Zabierz strój kąpielowy – to jedno z najlepszych miejsc do ochłody na całym Costa Blanca."},
      de:{name:"Fuentes del Algar",desc:"Eine Treppe aus türkisfarbenen Becken und Wasserfällen, gespeist von Bergquellen, mit schattigen Wegen und sicheren Naturbecken zum Baden für Kinder. Badesachen einpacken – einer der besten kostenlosen Abkühlungsorte an der ganzen Costa Blanca."},
      nl:{name:"Fuentes del Algar",desc:"Een trap van turquoise poelen en watervallen gevoed door bergbronnen, met schaduwrijke paden en veilige natuurlijke zwemplekken voor kinderen. Neem zwemkleding mee — een van de leukste gratis verkoelingsplekken van de hele Costa Blanca."},
      fr:{name:"Fuentes del Algar",desc:"Un escalier de vasques turquoise et de cascades alimentées par des sources de montagne, avec des sentiers ombragés et des bassins naturels sûrs où les enfants peuvent se baigner. Prévoyez un maillot — l'une des meilleures haltes rafraîchissantes de toute la Costa Blanca."}
    }},
  { id:"santabarbara", region:"alicante", category:"other", drive:"~55 min", town:"Alicante", icon:"castle", photo:"santabarbara", url:"https://castillodesantabarbara.com/en/",
    i18n:{
      en:{name:"Santa Bárbara Castle",desc:"A 9th-century hilltop fortress towering over Alicante's old town and harbour. Ride the lift up through the rock, let the kids run the ramparts, then walk down through Barrio Santa Cruz for ice cream among whitewashed, flower-pot lanes."},
      es:{name:"Castillo de Santa Bárbara",desc:"Una fortaleza del siglo IX sobre la ciudad y el puerto de Alicante. Sube en el ascensor excavado en la roca, deja que los niños corran por las murallas y baja andando por el Barrio Santa Cruz a tomar un helado entre callejuelas encaladas y macetas."},
      pl:{name:"Zamek Santa Bárbara",desc:"Twierdza z IX wieku górująca nad starówką i portem Alicante. Wjedźcie windą wykutą w skale, pozwólcie dzieciom pobiegać po murach, a potem zejdźcie przez dzielnicę Santa Cruz na lody wśród bielonych uliczek pełnych donic z kwiatami."},
      de:{name:"Burg Santa Bárbara",desc:"Eine Festung aus dem 9. Jahrhundert hoch über Alicantes Altstadt und Hafen. Mit dem Aufzug durch den Fels nach oben, die Kinder auf den Wällen toben lassen, dann durch das Viertel Santa Cruz hinab zum Eis zwischen weißen Gassen voller Blumentöpfe."},
      nl:{name:"Kasteel Santa Bárbara",desc:"Een 9e-eeuws bergfort dat uittorent boven Alicantes oude stad en haven. Ga met de lift door de rots naar boven, laat de kinderen over de wallen rennen en loop dan door de wijk Santa Cruz naar beneden voor een ijsje tussen witgekalkte straatjes vol bloempotten."},
      fr:{name:"Château de Santa Bárbara",desc:"Une forteresse du IXe siècle dominant la vieille ville et le port d'Alicante. Montez par l'ascenseur creusé dans la roche, laissez les enfants courir sur les remparts, puis redescendez par le quartier Santa Cruz pour une glace parmi les ruelles blanchies à la chaux."}
    }},
  { id:"benidormparks", region:"alicante", category:"other", drive:"~1h10", town:"Benidorm", icon:"ferris", url:"https://www.terramiticapark.com/en/", photo:"benidormparks",
    i18n:{
      en:{name:"Benidorm theme & water parks",desc:"Terra Mítica's rollercoasters, Aqualandia's slides and Mundomar's dolphins and sea lions sit side by side just outside Benidorm — an easy full-day trip that covers thrills, splashing about and animals in one go."},
      es:{name:"Parques de Benidorm",desc:"Las montañas rusas de Terra Mítica, los toboganes de Aqualandia y los delfines y leones marinos de Mundomar están uno junto a otro, a las afueras de Benidorm: un día completo con emociones, chapoteo y animales, todo en uno."},
      pl:{name:"Parki rozrywki w Benidorm",desc:"Kolejki górskie Terra Mítica, zjeżdżalnie Aqualandia oraz delfiny i lwy morskie w Mundomar leżą tuż obok siebie, za Benidorm – jeden pełny dzień z atrakcjami, wodą i zwierzętami w jednym miejscu."},
      de:{name:"Freizeitparks in Benidorm",desc:"Die Achterbahnen von Terra Mítica, die Rutschen von Aqualandia sowie Delfine und Seelöwen im Mundomar liegen direkt nebeneinander am Rand von Benidorm — ein ganzer Tag voller Nervenkitzel, Wasserspaß und Tieren an einem Ort."},
      nl:{name:"Pretparken van Benidorm",desc:"De achtbanen van Terra Mítica, de glijbanen van Aqualandia en de dolfijnen en zeeleeuwen van Mundomar liggen vlak bij elkaar net buiten Benidorm — een complete dagtrip vol spanning, waterpret en dieren ineen."},
      fr:{name:"Parcs de Benidorm",desc:"Les montagnes russes de Terra Mítica, les toboggans d'Aqualandia et les dauphins et otaries de Mundomar sont côte à côte juste à la sortie de Benidorm — une journée complète mêlant sensations fortes, éclaboussures et animaux."}
    }},
  { id:"torrevieja", region:"alicante", category:"other", drive:"~20 min", town:"Torrevieja", icon:"flamingo", url:"https://www.visitasalinasdetorrevieja.com/en/", photo:"torrevieja",
    i18n:{
      en:{name:"Torrevieja's Pink Lake",desc:"Las Salinas' salt lake turns candy-pink in summer and its shores are home to flocks of flamingos — a five-minute photo stop on the way to dinner, and a genuine, easy nature lesson for little ones."},
      es:{name:"Laguna Rosa de Torrevieja",desc:"El lago salado de Las Salinas se tiñe de rosa chicle en verano y sus orillas acogen bandadas de flamencos: una parada fotográfica de cinco minutos de camino a cenar, y una auténtica lección de naturaleza fácil para los más pequeños."},
      pl:{name:"Różowe jezioro w Torrevieja",desc:"Słone jezioro Las Salinas latem przybiera kolor cukierkowego różu, a na jego brzegach gnieżdżą się stada flamingów – pięciominutowy przystanek na zdjęcia w drodze na kolację i prawdziwa lekcja przyrody dla najmłodszych."},
      de:{name:"Rosa See von Torrevieja",desc:"Der Salzsee Las Salinas färbt sich im Sommer zuckerrosa, an seinen Ufern rasten ganze Flamingoschwärme — ein fünfminütiger Fotostopp auf dem Weg zum Abendessen und eine echte, leicht verständliche Naturlektion für die Kleinen."},
      nl:{name:"Roze meer van Torrevieja",desc:"Het zoutmeer Las Salinas kleurt 's zomers snoeproze en aan de oevers strijken hele groepen flamingo's neer — een fotostop van vijf minuten onderweg naar het avondeten, en een echte, laagdrempelige natuurles voor de kleintjes."},
      fr:{name:"Lac rose de Torrevieja",desc:"Le lac salé de Las Salinas se teinte de rose bonbon en été et ses rives accueillent des colonies de flamants roses — un arrêt photo de cinq minutes en allant dîner, et une vraie leçon de nature simple pour les petits."}
    }},

  { id:"launion", region:"murcia", category:"mines", drive:"~40 min", town:"La Unión", url:"https://www.ayto-launion.org/turismo/parque-minero-de-la-union/", photo:"launion",
    i18n:{
      en:{name:"La Unión Mining Park",desc:"Put on a helmet and ride the mine train deep into a real 19th-century silver and lead mine. Guided underground tours bring the region's mining boom to life with galleries, tools and stories even young children find thrilling rather than scary."},
      es:{name:"Parque Minero de La Unión",desc:"Ponte el casco y sube al tren minero que se adentra en una auténtica mina de plata y plomo del siglo XIX. Las visitas guiadas bajo tierra recrean el auge minero de la región con galerías, herramientas y relatos que emocionan hasta a los más pequeños."},
      pl:{name:"Park Górniczy La Unión",desc:"Załóż kask i wsiądź do górniczej kolejki, która wjeżdża w głąb prawdziwej XIX-wiecznej kopalni srebra i ołowiu. Wycieczki z przewodnikiem pod ziemią ożywiają górniczą historię regionu – korytarze, narzędzia i opowieści, które fascynują nawet najmłodszych."},
      de:{name:"Bergwerkspark La Unión",desc:"Helm auf und mit der Grubenbahn tief in ein echtes Silber- und Bleibergwerk aus dem 19. Jahrhundert. Geführte Untertage-Touren lassen den Bergbauboom der Region lebendig werden — mit Stollen, Werkzeugen und Geschichten, die auch kleine Kinder faszinieren statt ängstigen."},
      nl:{name:"Mijnenpark La Unión",desc:"Zet een helm op en stap in het mijntreintje dat diep een echte 19e-eeuwse zilver- en loodmijn induikt. Begeleide ondergrondse tochten brengen de mijnbouwgeschiedenis van de regio tot leven met gangen, gereedschap en verhalen die zelfs jonge kinderen boeiend vinden."},
      fr:{name:"Parc minier de La Unión",desc:"Enfilez un casque et montez à bord du petit train qui s'enfonce dans une véritable mine d'argent et de plomb du XIXe siècle. Les visites guidées souterraines font revivre l'essor minier de la région avec galeries, outils et récits qui fascinent même les plus jeunes."}
    }},
  { id:"usero", region:"murcia", category:"waterfalls", drive:"~1h20", town:"Bullas", photo:"saltousero", url:"https://bullas.es/turismo/salto-del-usero/",
    i18n:{
      en:{name:"Salto del Usero",desc:"A wide, gentle waterfall on the Río Mula that fills a natural swimming pool ringed by poplar trees — one of inland Murcia's prettiest and most family-friendly bathing spots, with picnic tables and shallow edges for paddling toddlers."},
      es:{name:"Salto del Usero",desc:"Una cascada ancha y suave en el Río Mula que llena una piscina natural rodeada de chopos: uno de los rincones de baño más bonitos y familiares del interior de Murcia, con mesas de picnic y orillas poco profundas para chapotear."},
      pl:{name:"Salto del Usero",desc:"Szeroki, łagodny wodospad na rzece Mula tworzący naturalny basen otoczony topolami – jedno z najładniejszych i najbardziej rodzinnych miejsc do kąpieli w głębi Murcji, ze stolikami piknikowymi i płytkim brzegiem dla maluchów."},
      de:{name:"Salto del Usero",desc:"Ein breiter, sanfter Wasserfall am Río Mula, der ein natürliches Schwimmbecken umgeben von Pappeln speist — einer der schönsten und familienfreundlichsten Badeplätze im Landesinneren von Murcia, mit Picknicktischen und flachen Rändern zum Plantschen."},
      nl:{name:"Salto del Usero",desc:"Een brede, kabbelende waterval in de Río Mula die een natuurlijk zwembad vult, omzoomd door populieren — een van de mooiste en gezinsvriendelijkste zwemplekken in het binnenland van Murcia, met picknicktafels en ondiepe randen om te pootjebaden."},
      fr:{name:"Salto del Usero",desc:"Une cascade large et douce sur le Río Mula qui remplit un bassin naturel bordé de peupliers — l'un des coins de baignade les plus charmants et familiaux de l'intérieur de Murcie, avec tables de pique-nique et bords peu profonds pour barboter."}
    }},
  { id:"calasparra", region:"murcia", category:"caves", drive:"~1h10", town:"Calasparra", url:"https://cuevadelpuerto.es/", photo:"cuevapuerto",
    i18n:{
      en:{name:"Cueva del Puerto",desc:"One of the Region of Murcia's few show caves open to the public, with an underground river, bat colonies and chambers of dripstone formations. A cooler, quieter alternative to Canelobre for families who want a second cave on the trip."},
      es:{name:"Cueva del Puerto",desc:"Una de las pocas cuevas turísticas de la Región de Murcia abiertas al público, con río subterráneo, colonias de murciélagos y salas de formaciones calcáreas. Una alternativa más fresca y tranquila a Canelobre para quien quiera una segunda cueva."},
      pl:{name:"Cueva del Puerto",desc:"Jedna z niewielu udostępnionych do zwiedzania jaskiń w Regionie Murcji, z podziemną rzeką, koloniami nietoperzy i salami naciekowych formacji. Chłodniejsza i spokojniejsza alternatywa dla Canelobre dla rodzin chcących zobaczyć drugą jaskinię."},
      de:{name:"Cueva del Puerto",desc:"Eine der wenigen für Besucher zugänglichen Schauhöhlen der Region Murcia, mit unterirdischem Fluss, Fledermauskolonien und Sälen voller Tropfsteinformationen. Eine kühlere, ruhigere Alternative zu Canelobre für eine zweite Höhle auf der Reise."},
      nl:{name:"Cueva del Puerto",desc:"Een van de weinige voor publiek toegankelijke schouwgrotten in de regio Murcia, met een ondergrondse rivier, vleermuiskolonies en zalen vol druipsteenformaties. Een koeler, rustiger alternatief voor Canelobre voor een tweede grot in het programma."},
      fr:{name:"Cueva del Puerto",desc:"L'une des rares grottes aménagées de la Région de Murcie ouvertes au public, avec une rivière souterraine, des colonies de chauves-souris et des salles de concrétions calcaires. Une alternative plus fraîche et calme à Canelobre pour une deuxième grotte."}
    }},
  { id:"cuevadelagua", region:"murcia", category:"caves", drive:"~55 min", town:"Isla Plana, Cartagena", url:"https://cuevadelagua.es/", photo:"cuevaagua",
    i18n:{
      en:{name:"Cueva del Agua",desc:"A turquoise flooded cave entrance on the Isla Plana coast, hiding one of Spain's longest submerged cave systems — over 6 km of passages prized by technical cave divers. Non-divers can swim to the mouth of the cave and admire the clear water from the surface; the full system is for certified divers only, arranged locally."},
      es:{name:"Cueva del Agua",desc:"Una entrada de cueva inundada de aguas turquesas en la costa de Isla Plana, que esconde uno de los sistemas de cuevas sumergidas más largos de España: más de 6 km de galerías muy valoradas por buceadores técnicos. Quienes no bucean pueden nadar hasta la boca de la cueva y admirar el agua cristalina desde la superficie; el sistema completo es solo para buceadores certificados, a concertar localmente."},
      pl:{name:"Cueva del Agua",desc:"Zatopione, turkusowe wejście do jaskini na wybrzeżu Isla Plana, kryjące jeden z najdłuższych zalanych systemów jaskiniowych w Hiszpanii – ponad 6 km korytarzy cenionych przez nurków technicznych. Osoby nienurkujące mogą dopłynąć do wejścia i podziwiać krystaliczną wodę z powierzchni; pełne zwiedzanie systemu jest wyłącznie dla certyfikowanych nurków, do ustalenia lokalnie."},
      de:{name:"Cueva del Agua",desc:"Ein türkisfarbener, gefluteter Höhleneingang an der Küste von Isla Plana, der eines der längsten unter Wasser liegenden Höhlensysteme Spaniens verbirgt — über 6 km Gänge, geschätzt von technischen Höhlentauchern. Nichttaucher können zum Höhleneingang schwimmen und das klare Wasser von der Oberfläche bewundern; das gesamte System ist nur zertifizierten Tauchern vorbehalten, vor Ort zu vereinbaren."},
      nl:{name:"Cueva del Agua",desc:"Een turquoise, ondergelopen grotingang aan de kust van Isla Plana, die een van de langste onderwatergrotsystemen van Spanje verbergt — meer dan 6 km gangen, gewaardeerd door technische grotduikers. Niet-duikers kunnen naar de ingang zwemmen en het heldere water vanaf het oppervlak bewonderen; het volledige systeem is uitsluitend voor gecertificeerde duikers, lokaal te regelen."},
      fr:{name:"Cueva del Agua",desc:"Une entrée de grotte inondée aux eaux turquoise sur la côte d'Isla Plana, cachant l'un des plus longs réseaux de grottes immergées d'Espagne — plus de 6 km de galeries prisées des plongeurs spéléo techniques. Les non-plongeurs peuvent nager jusqu'à l'entrée et admirer l'eau limpide depuis la surface ; le réseau complet est réservé aux plongeurs certifiés, à organiser sur place."}
    }},
  { id:"serreta", region:"murcia", category:"caves", drive:"~1h20", town:"Cieza", url:"https://www.turismoregiondemurcia.es/es/arte_rupestre_detalle/cueva-sima-de-la-serreta-4487/", photo:"cuevaserreta",
    i18n:{
      en:{name:"Cueva-Sima de la Serreta",desc:"A UNESCO World Heritage rock-art cave in the dramatic Los Almádenes canyon near Cieza, reached down a 16-metre shaft and home to around 50 prehistoric schematic paintings. Visits go through the Cieza tourist office — call or email ahead to book a guided slot."},
      es:{name:"Cueva-Sima de la Serreta",desc:"Una cueva con arte rupestre Patrimonio Mundial de la UNESCO en el espectacular cañón de Los Almádenes, cerca de Cieza, a la que se accede por un pozo de 16 metros y que alberga unas 50 pinturas esquemáticas prehistóricas. Las visitas se gestionan a través de la oficina de turismo de Cieza — llama o escribe con antelación para reservar una visita guiada."},
      pl:{name:"Cueva-Sima de la Serreta",desc:"Jaskinia ze sztuką naskalną wpisaną na listę UNESCO w widowiskowym kanionie Los Almádenes koło Cieza, do której schodzi się 16-metrowym szybem; znajduje się w niej około 50 prehistorycznych malowideł schematycznych. Zwiedzanie organizowane jest przez biuro turystyczne w Cieza – zadzwoń lub napisz wcześniej, aby zarezerwować termin z przewodnikiem."},
      de:{name:"Cueva-Sima de la Serreta",desc:"Eine UNESCO-Welterbe-Höhle mit Felskunst in der spektakulären Schlucht Los Almádenes bei Cieza, erreichbar über einen 16 Meter tiefen Schacht, mit rund 50 prähistorischen schematischen Malereien. Besuche werden über das Tourismusbüro von Cieza organisiert — vorab anrufen oder schreiben, um einen geführten Termin zu buchen."},
      nl:{name:"Cueva-Sima de la Serreta",desc:"Een grot met rotskunst en UNESCO-Werelderfgoedstatus in de indrukwekkende kloof Los Almádenes bij Cieza, bereikbaar via een schacht van 16 meter, met zo'n 50 prehistorische schematische schilderingen. Bezoeken worden geregeld via het VVV-kantoor van Cieza — bel of mail vooraf om een rondleiding te boeken."},
      fr:{name:"Cueva-Sima de la Serreta",desc:"Une grotte ornée classée au patrimoine mondial de l'UNESCO dans le spectaculaire canyon de Los Almádenes près de Cieza, accessible par un puits de 16 mètres, abritant environ 50 peintures schématiques préhistoriques. Les visites s'organisent via l'office de tourisme de Cieza — appelez ou écrivez à l'avance pour réserver une visite guidée."}
    }},
  { id:"gigante", region:"murcia", category:"caves", drive:"~50 min", town:"El Portús, Cartagena", url:"https://www.rocroi.com/en/guided-kayak-route-and-tourist-tour-in-the-giant-cave-murcia.html", photo:"cuevagigante",
    i18n:{
      en:{name:"Cueva del Gigante (by kayak)",desc:"A sea cave reachable only by kayak, on a guided full-day paddle from El Portús past the cliffs of Cabo Tiñoso — swimming into the cave to see its rock formations and a striking underground pool, finishing with lunch and a look around Cartagena. Beginner-friendly; children from age 6 who can swim."},
      es:{name:"Cueva del Gigante (en kayak)",desc:"Una cueva marina a la que solo se llega en kayak, en una excursión guiada de día completo desde El Portús bordeando los acantilados de Cabo Tiñoso — nadando dentro de la cueva para ver sus formaciones rocosas y una sorprendente laguna subterránea, con comida y una vuelta por Cartagena al final. Apta para principiantes; niños desde 6 años que sepan nadar."},
      pl:{name:"Cueva del Gigante (kajakiem)",desc:"Jaskinia morska, do której można dotrzeć tylko kajakiem, podczas całodniowej wycieczki z przewodnikiem z El Portús wzdłuż klifów Cabo Tiñoso – wpłynięcie do jaskini pozwala zobaczyć formacje skalne i zaskakujące podziemne jeziorko, na koniec obiad i zwiedzanie Cartageny. Odpowiednia dla początkujących; dzieci od 6 lat, które umieją pływać."},
      de:{name:"Cueva del Gigante (mit dem Kajak)",desc:"Eine Meereshöhle, die nur mit dem Kajak erreichbar ist, auf einer geführten Ganztagestour von El Portús entlang der Klippen von Cabo Tiñoso — man schwimmt in die Höhle hinein, um Felsformationen und ein beeindruckendes unterirdisches Becken zu sehen, zum Abschluss mit Mittagessen und einem Rundgang durch Cartagena. Anfängertauglich; Kinder ab 6 Jahren, die schwimmen können."},
      nl:{name:"Cueva del Gigante (met de kajak)",desc:"Een zeegrot die alleen per kajak te bereiken is, tijdens een begeleide dagtocht vanuit El Portús langs de kliffen van Cabo Tiñoso — je zwemt de grot in om de rotsformaties en een verrassend ondergronds bekken te zien, afgesloten met lunch en een rondje Cartagena. Geschikt voor beginners; kinderen vanaf 6 jaar die kunnen zwemmen."},
      fr:{name:"Cueva del Gigante (en kayak)",desc:"Une grotte marine accessible uniquement en kayak, lors d'une excursion guidée d'une journée complète depuis El Portús le long des falaises du Cabo Tiñoso — on nage à l'intérieur pour découvrir ses formations rocheuses et un bassin souterrain saisissant, avant un déjeuner et un tour de Cartagène. Adapté aux débutants ; enfants à partir de 6 ans sachant nager."}
    }},
  { id:"marmenor", region:"murcia", category:"other", drive:"~30 min", town:"La Manga", icon:"boat", url:"https://www.turismoregiondemurcia.es/es/ruta_mar_menor_y_la_manga/", photo:"marmenor",
    i18n:{
      en:{name:"Mar Menor & La Manga",desc:"Europe's largest saltwater lagoon is shallow, warm and almost wave-free — ideal for young swimmers, stand-up paddleboarding and kayaking. La Manga's narrow sand spit gives you the Mediterranean on one side and calm Mar Menor on the other."},
      es:{name:"Mar Menor y La Manga",desc:"La laguna salada más grande de Europa es poco profunda, cálida y casi sin olas: ideal para que los más pequeños naden, hagan paddle surf o kayak. La estrecha franja de arena de La Manga tiene el Mediterráneo a un lado y el Mar Menor al otro."},
      pl:{name:"Mar Menor i La Manga",desc:"Największa słona laguna w Europie jest płytka, ciepła i niemal bez fal – idealna dla małych pływaków, paddle boardingu i kajaków. Wąski piaszczysty pas La Manga ma po jednej stronie Morze Śródziemne, a po drugiej spokojne Mar Menor."},
      de:{name:"Mar Menor & La Manga",desc:"Europas größte Salzwasserlagune ist flach, warm und fast wellenfrei — ideal für kleine Schwimmer, Stand-up-Paddling und Kajak. Die schmale Sandlandzunge La Manga hat auf der einen Seite das Mittelmeer, auf der anderen das ruhige Mar Menor."},
      nl:{name:"Mar Menor & La Manga",desc:"Europa's grootste zoutwaterlagune is ondiep, warm en bijna golfvrij — ideaal voor jonge zwemmers, suppen en kajakken. De smalle zandlandtong La Manga heeft aan de ene kant de Middellandse Zee, aan de andere de kalme Mar Menor."},
      fr:{name:"Mar Menor & La Manga",desc:"La plus grande lagune d'eau salée d'Europe est peu profonde, chaude et presque sans vagues — idéale pour les jeunes nageurs, le paddle et le kayak. L'étroite bande de sable de La Manga offre la Méditerranée d'un côté et le calme Mar Menor de l'autre."}
    }},
  { id:"cartagena", region:"murcia", category:"other", drive:"~35 min", town:"Cartagena", icon:"ship", url:"https://teatroromano.cartagena.es/", photo:"cartagena",
    i18n:{
      en:{name:"Roman Cartagena",desc:"A port city layered with more than 2,000 years of history: a restored Roman theatre, a Punic-war walk-through under the streets, and a modern naval museum with a real submarine — surprisingly gripping for kids who like ships and ruins."},
      es:{name:"Cartagena romana",desc:"Una ciudad portuaria con más de 2.000 años de historia superpuesta: un teatro romano restaurado, un recorrido subterráneo por la Cartagena púnica y un moderno museo naval con un submarino real: sorprendentemente atractivo para niños amantes de barcos y ruinas."},
      pl:{name:"Rzymska Kartagena",desc:"Miasto portowe z ponad 2000-letnią historią: odrestaurowany rzymski teatr, podziemna trasa poświęcona wojnom punickim oraz nowoczesne muzeum marynarki z prawdziwą łodzią podwodną – zaskakująco wciągające dla dzieci lubiących statki i ruiny."},
      de:{name:"Römisches Cartagena",desc:"Eine Hafenstadt mit über 2.000 Jahren geschichteter Geschichte: ein restauriertes römisches Theater, ein unterirdischer Rundgang zu den Punischen Kriegen und ein modernes Marinemuseum mit echtem U-Boot — überraschend spannend für Schiffs- und Ruinenfans."},
      nl:{name:"Romeins Cartagena",desc:"Een havenstad met ruim 2000 jaar gelaagde geschiedenis: een gerestaureerd Romeins theater, een ondergrondse wandeling langs de Punische Oorlogen en een modern marinemuseum met een echte onderzeeër — verrassend boeiend voor liefhebbers van schepen en ruïnes."},
      fr:{name:"Carthagène romaine",desc:"Une ville portuaire riche de plus de 2000 ans d'histoire superposée : un théâtre romain restauré, un parcours souterrain sur les guerres puniques et un musée naval moderne avec un vrai sous-marin — étonnamment captivant pour les amateurs de bateaux et de ruines."}
    }},

  { id:"sorbas", region:"andalusia", category:"caves", drive:"~1h45", town:"Sorbas", photo:"sorbas", url:"https://www.cuevasdesorbas.com/",
    i18n:{
      en:{name:"Sorbas Gypsum Caves",desc:"One of the largest gypsum karst systems in Europe, carved by water into a maze of crystal-lined tunnels beneath the Almería badlands. Family-friendly routes need no climbing gear — just curiosity and a torch."},
      es:{name:"Cuevas de Sorbas",desc:"Uno de los mayores sistemas kársticos en yeso de Europa, esculpido por el agua en un laberinto de túneles tapizados de cristales bajo los áridos parajes de Almería. Las rutas familiares no requieren material de escalada, solo curiosidad y una linterna."},
      pl:{name:"Jaskinie gipsowe w Sorbas",desc:"Jeden z największych systemów krasowych w gipsie w Europie, wyrzeźbiony przez wodę w labirynt tuneli pokrytych kryształami pod pustynnym krajobrazem Almerii. Rodzinne trasy nie wymagają sprzętu wspinaczkowego – tylko ciekawości i latarki."},
      de:{name:"Gipshöhlen von Sorbas",desc:"Eines der größten Gipskarstsysteme Europas, vom Wasser in ein Labyrinth aus kristallbesetzten Tunneln unter der kargen Landschaft Almerías geschnitzt. Familientouren erfordern keine Kletterausrüstung — nur Neugier und eine Taschenlampe."},
      nl:{name:"Gipsgrotten van Sorbas",desc:"Een van de grootste gipskarstsystemen van Europa, door water uitgesleten tot een doolhof van met kristallen beklede tunnels onder het dorre landschap van Almería. Gezinsroutes vergen geen klimuitrusting — alleen nieuwsgierigheid en een zaklamp."},
      fr:{name:"Grottes de gypse de Sorbas",desc:"L'un des plus grands systèmes karstiques de gypse d'Europe, sculpté par l'eau en un labyrinthe de tunnels tapissés de cristaux sous les terres arides d'Almería. Les circuits familiaux ne demandent aucun matériel d'escalade — juste de la curiosité et une lampe."}
    }},
  { id:"pulpigeode", region:"andalusia", category:"mines", drive:"~1h15", town:"Pulpí", photo:"pulpi", url:"https://www.geodapulpi.es/",
    i18n:{
      en:{name:"Pulpí Geode (Mina Rica)",desc:"A hidden crystal chamber inside a former silver mine — one of the largest gypsum geodes on Earth, lined with translucent selenite crystals over 2 metres long. Small guided groups descend a 350 m tunnel with helmets provided; book online well ahead, as spots per tour are limited and children must be at least 8."},
      es:{name:"Geoda de Pulpí (Mina Rica)",desc:"Una cámara de cristal oculta en una antigua mina de plata: una de las mayores geodas de yeso del mundo, tapizada de cristales de selenita translúcidos de más de 2 metros. Grupos reducidos y guiados descienden por un túnel de 350 m con casco incluido; reserva online con antelación, ya que las plazas por turno son limitadas y los niños deben tener al menos 8 años."},
      pl:{name:"Geoda z Pulpí (Mina Rica)",desc:"Ukryta krystaliczna komora w dawnej kopalni srebra – jedna z największych gipsowych geod na świecie, wyłożona przezroczystymi kryształami selenitu o długości ponad 2 metrów. Niewielkie grupy z przewodnikiem schodzą 350-metrowym tunelem w udostępnionych kaskach; rezerwację trzeba zrobić online z wyprzedzeniem, bo liczba miejsc na turę jest ograniczona, a dzieci muszą mieć co najmniej 8 lat."},
      de:{name:"Geode von Pulpí (Mina Rica)",desc:"Eine verborgene Kristallkammer in einem ehemaligen Silberbergwerk — eine der größten Gipsgeoden der Welt, ausgekleidet mit über 2 Meter langen, durchscheinenden Selenitkristallen. Kleine geführte Gruppen steigen mit gestellten Helmen durch einen 350 m langen Tunnel hinab; unbedingt vorab online buchen, da die Plätze pro Tour begrenzt sind und Kinder mindestens 8 Jahre alt sein müssen."},
      nl:{name:"Geode van Pulpí (Mina Rica)",desc:"Een verborgen kristalkamer in een voormalige zilvermijn — een van de grootste gipsgeodes ter wereld, bekleed met doorschijnende selenietkristallen van meer dan 2 meter lang. Kleine begeleide groepen dalen af door een tunnel van 350 m, met helmen ter beschikking; boek ruim van tevoren online, want het aantal plekken per rondleiding is beperkt en kinderen moeten minstens 8 jaar zijn."},
      fr:{name:"Géode de Pulpí (Mina Rica)",desc:"Une chambre de cristal cachée dans une ancienne mine d'argent — l'une des plus grandes géodes de gypse au monde, tapissée de cristaux de sélénite translucides de plus de 2 mètres. De petits groupes guidés descendent un tunnel de 350 m, casques fournis ; réservez en ligne bien à l'avance, les places par visite étant limitées et les enfants devant avoir au moins 8 ans."}
    }},
  { id:"minihollywood", region:"andalusia", category:"other", drive:"~2h", town:"Tabernas", icon:"cactus", photo:"minihollywood", url:"https://minihollywoodoasys.com/en/ticket-type/",
    i18n:{
      en:{name:"Oasys MiniHollywood",desc:"A working Wild West film set turned theme park in the Tabernas desert, where hundreds of spaghetti westerns were shot. Watch a staged gunfight and saloon show, then cool off in the on-site water park and small zoo."},
      es:{name:"Oasys MiniHollywood",desc:"Un decorado de spaghetti western convertido en parque temático en el desierto de Tabernas, donde se rodaron cientos de películas del Oeste. Ve un tiroteo escenificado y un espectáculo de saloon, y refréscate en el parque acuático y el pequeño zoo del recinto."},
      pl:{name:"Oasys MiniHollywood",desc:"Prawdziwy plan filmowy westernów zamieniony w park tematyczny na pustyni Tabernas, gdzie nakręcono setki spaghetti westernów. Zobaczcie inscenizowaną strzelaninę i pokaz w saloonie, a potem ochłodźcie się w przypałacowym parku wodnym i mini zoo."},
      de:{name:"Oasys MiniHollywood",desc:"Eine echte Westernfilmkulisse, heute Freizeitpark in der Wüste von Tabernas, wo hunderte Italowestern gedreht wurden. Ein inszeniertes Duell und eine Saloon-Show ansehen und sich anschließend im hauseigenen Wasserpark und kleinen Zoo abkühlen."},
      nl:{name:"Oasys MiniHollywood",desc:"Een echt westernfilmdecor dat nu een pretpark is in de woestijn van Tabernas, waar honderden spaghettiwesterns zijn opgenomen. Bekijk een geënsceneerd schietduel en saloonshow, en koel daarna af in het waterpark en de kleine dierentuin."},
      fr:{name:"Oasys MiniHollywood",desc:"Un authentique décor de western devenu parc à thème dans le désert de Tabernas, où des centaines de westerns spaghetti ont été tournés. Assistez à une fusillade mise en scène, puis rafraîchissez-vous au parc aquatique et au petit zoo sur place."}
    }},
  { id:"cabodegata", region:"andalusia", category:"other", drive:"~2h", town:"Cabo de Gata", icon:"mountain", photo:"cabodegata", url:"https://www.juntadeandalucia.es/medioambiente/portal/areas-tematicas/espacios-protegidos/legislacion-autonomica-nacional/parques-naturales/parque-natural-cabo-de-gata-nijar",
    i18n:{
      en:{name:"Cabo de Gata Natural Park",desc:"Spain's driest corner and a protected volcanic coastline of coves, cliffs and some of the clearest water in the Mediterranean. Playa de los Genoveses and Playa del Mónsul are gentle, uncrowded bays that reward the extra driving time."},
      es:{name:"Parque Natural de Cabo de Gata",desc:"El rincón más árido de España y una costa volcánica protegida de calas, acantilados y algunas de las aguas más claras del Mediterráneo. Playa de los Genoveses y Playa del Mónsul son calas tranquilas y poco masificadas que compensan el trayecto."},
      pl:{name:"Park Naturalny Cabo de Gata",desc:"Najsuchsze miejsce w Hiszpanii i chronione wulkaniczne wybrzeże z zatoczkami, klifami i jedną z najczystszych wód w Morzu Śródziemnym. Playa de los Genoveses i Playa del Mónsul to spokojne, mało zatłoczone plaże warte dłuższej podróży."},
      de:{name:"Naturpark Cabo de Gata",desc:"Spaniens trockenste Ecke und eine geschützte vulkanische Küste mit Buchten, Klippen und einigen der klarsten Gewässer des Mittelmeers. Playa de los Genoveses und Playa del Mónsul sind ruhige, wenig überlaufene Buchten, die die längere Fahrt belohnen."},
      nl:{name:"Natuurpark Cabo de Gata",desc:"Het droogste hoekje van Spanje en een beschermde vulkanische kust met baaien, kliffen en enkele van de helderste wateren van de Middellandse Zee. Playa de los Genoveses en Playa del Mónsul zijn rustige, weinig drukke baaien die de extra rijtijd waard zijn."},
      fr:{name:"Parc naturel de Cabo de Gata",desc:"Le coin le plus aride d'Espagne et un littoral volcanique protégé fait de criques, de falaises et de certaines des eaux les plus limpides de Méditerranée. Playa de los Genoveses et Playa del Mónsul sont des criques paisibles qui valent le détour."}
    }},
  { id:"alhambra", region:"andalusia", category:"other", drive:"~2h45", town:"Granada", icon:"castle", photo:"alhambra", url:"https://tickets.alhambra-patronato.es/",
    i18n:{
      en:{name:"The Alhambra, Granada",desc:"A bit further — around 2h45 — but the Alhambra's Nasrid palaces, reflecting pools and gardens are one of the great sights of Europe. Best tackled as a full day out with an early start and pre-booked tickets."},
      es:{name:"La Alhambra, Granada",desc:"Un poco más lejos, unas 2h45, pero los palacios nazaríes, estanques y jardines de la Alhambra son una de las grandes maravillas de Europa. Mejor como excursión de día completo, saliendo temprano y con entradas reservadas."},
      pl:{name:"Alhambra, Granada",desc:"Nieco dalej – ok. 2h45 – ale nasrydzkie pałace, odbijające architekturę stawy i ogrody Alhambry to jeden z największych zabytków Europy. Najlepiej zaplanować na cały dzień, wyjeżdżając wcześnie i mając zarezerwowane bilety."},
      de:{name:"Die Alhambra, Granada",desc:"Etwas weiter entfernt — rund 2h45 —, aber die Nasridenpaläste, Wasserbecken und Gärten der Alhambra zählen zu den großen Sehenswürdigkeiten Europas. Am besten als ganztägiger Ausflug mit frühem Start und vorgebuchten Tickets."},
      nl:{name:"De Alhambra, Granada",desc:"Iets verder — zo'n 2u45 — maar de Nasridische paleizen, waterbekkens en tuinen van de Alhambra behoren tot de grote bezienswaardigheden van Europa. Het best als volledige dagtrip, vroeg vertrekken en tickets vooraf boeken."},
      fr:{name:"L'Alhambra, Grenade",desc:"Un peu plus loin — environ 2h45 — mais les palais nasrides, bassins et jardins de l'Alhambra comptent parmi les grands monuments d'Europe. À prévoir sur une journée entière, en partant tôt et avec des billets réservés."}
    }},

  { id:"sanjose", region:"valencia", category:"caves", drive:"~2h30", town:"Vall d'Uixó", photo:"sanjose", url:"https://covesdesantjosep.es/",
    i18n:{
      en:{name:"Caves of San José",desc:"Europe's longest navigable underground river: a quiet rowing boat glides you through illuminated galleries and past a hidden waterfall inside the cave. A calm, slightly magical outing that even toddlers sit still for."},
      es:{name:"Cuevas de San José",desc:"El río navegable subterráneo más largo de Europa: una tranquila barca de remos te lleva por galerías iluminadas y junto a una cascada oculta dentro de la cueva. Una excursión serena y algo mágica en la que hasta los más pequeños se quedan quietos."},
      pl:{name:"Jaskinie San José",desc:"Najdłuższa spławna podziemna rzeka w Europie: cicha łódź wiosłowa przewozi was przez oświetlone korytarze obok ukrytego wodospadu wewnątrz jaskini. Spokojna, nieco magiczna wycieczka, podczas której nawet maluchy siedzą grzecznie."},
      de:{name:"Höhlen von San José",desc:"Europas längster schiffbarer unterirdischer Fluss: Ein ruhiges Ruderboot gleitet durch beleuchtete Gänge vorbei an einem versteckten Wasserfall tief in der Höhle. Ein friedlicher, fast magischer Ausflug, bei dem sogar Kleinkinder still sitzen bleiben."},
      nl:{name:"Grotten van San José",desc:"De langste bevaarbare ondergrondse rivier van Europa: een rustige roeiboot glijdt door verlichte gangen langs een verborgen waterval diep in de grot. Een kalm, ietwat magisch uitje waarbij zelfs peuters stilzitten."},
      fr:{name:"Grottes de San José",desc:"La plus longue rivière souterraine navigable d'Europe : une barque à rames glisse en silence à travers des galeries illuminées, passant près d'une cascade cachée au cœur de la grotte. Une sortie paisible et un peu magique où même les tout-petits restent sages."}
    }},
  { id:"cienciasarte", region:"valencia", category:"other", drive:"~2h", town:"Valencia", icon:"dome", photo:"cienciasarte", url:"https://tickets.cac.es/internetCAC/?language=en",
    i18n:{
      en:{name:"City of Arts & Sciences",desc:"Valencia's futuristic complex of curved white shells houses the Oceanogràfic — Europe's largest aquarium, with dolphins, belugas and a walk-through underwater tunnel — plus a hands-on science museum and planetarium."},
      es:{name:"Ciudad de las Artes y las Ciencias",desc:"El futurista complejo de cáscaras blancas de Valencia alberga el Oceanogràfic, el mayor acuario de Europa, con delfines, belugas y un túnel submarino, además de un museo de ciencia interactivo y un planetario."},
      pl:{name:"Miasto Sztuki i Nauki",desc:"Futurystyczny kompleks białych „skorup” w Walencji mieści Oceanogràfic – największe akwarium w Europie, z delfinami, białuchami i podwodnym tunelem – a także interaktywne muzeum nauki i planetarium."},
      de:{name:"Stadt der Künste und Wissenschaften",desc:"Valencias futuristischer Komplex aus geschwungenen weißen Schalen beherbergt das Oceanogràfic — Europas größtes Aquarium mit Delfinen, Belugas und einem begehbaren Unterwassertunnel — sowie ein interaktives Wissenschaftsmuseum und Planetarium."},
      nl:{name:"Stad van Kunsten en Wetenschappen",desc:"Valencia's futuristische complex van gebogen witte schelpen huisvest het Oceanogràfic — Europa's grootste aquarium met dolfijnen, beluga's en een onderwatertunnel — plus een interactief wetenschapsmuseum en planetarium."},
      fr:{name:"Cité des Arts et des Sciences",desc:"Le complexe futuriste de coques blanches de Valence abrite l'Oceanogràfic — le plus grand aquarium d'Europe, avec dauphins, bélugas et un tunnel sous-marin — ainsi qu'un musée des sciences interactif et un planétarium."}
    }},
  { id:"bioparc", region:"valencia", category:"other", drive:"~2h05", town:"Valencia", icon:"paw", photo:"bioparc", url:"https://bioparcvalencia.es/en/entradas/",
    i18n:{
      en:{name:"Bioparc Valencia",desc:"A zoo built as immersive African landscapes rather than cages — lions, gorillas and hippos roam across open savannah and forest enclosures with no visible bars, making it feel more like a safari than a day at the zoo."},
      es:{name:"Bioparc Valencia",desc:"Un zoo diseñado como paisajes africanos inmersivos en lugar de jaulas: leones, gorilas e hipopótamos se mueven por sabanas y bosques abiertos sin barrotes visibles, dando la sensación de un safari más que de una visita al zoo."},
      pl:{name:"Bioparc Valencia",desc:"Zoo zaprojektowane jako immersyjne afrykańskie krajobrazy zamiast klatek – lwy, goryle i hipopotamy poruszają się po otwartej sawannie i lesie bez widocznych krat, co bardziej przypomina safari niż typową wizytę w zoo."},
      de:{name:"Bioparc Valencia",desc:"Ein Zoo, gestaltet als immersive afrikanische Landschaften statt Käfige — Löwen, Gorillas und Nilpferde streifen durch offene Savannen- und Waldgehege ohne sichtbare Gitter, was eher wie eine Safari als ein Zoobesuch wirkt."},
      nl:{name:"Bioparc Valencia",desc:"Een dierentuin ontworpen als meeslepende Afrikaanse landschappen in plaats van kooien — leeuwen, gorilla's en nijlpaarden bewegen zich vrij over open savanne- en boslandschappen zonder zichtbare tralies, wat meer aanvoelt als een safari."},
      fr:{name:"Bioparc Valence",desc:"Un zoo conçu comme des paysages africains immersifs plutôt que des cages — lions, gorilles et hippopotames évoluent dans des enclos de savane et de forêt à ciel ouvert sans barreaux visibles, pour une expérience plus proche du safari que du zoo."}
    }},
  { id:"albufera", region:"valencia", category:"other", drive:"~2h", town:"Valencia", icon:"boat", url:"https://parquesnaturales.gva.es/es/web/pn-l-albufera",
    i18n:{
      en:{name:"Albufera Natural Park",desc:"A vast freshwater lagoon south of Valencia, ringed by rice paddies that give the region its paella. Glide across the water in a traditional flat-bottomed boat and catch the sunset — a slow, scenic finish to a long day trip."},
      es:{name:"Parque Natural de la Albufera",desc:"Una gran laguna de agua dulce al sur de Valencia, rodeada de arrozales que dan a la región su famosa paella. Navega en una barca tradicional de fondo plano y disfruta del atardecer: un cierre pausado y muy bonito para una excursión larga."},
      pl:{name:"Park Naturalny Albufera",desc:"Rozległa słodkowodna laguna na południe od Walencji, otoczona polami ryżowymi, dzięki którym region słynie z paelli. Popłyńcie tradycyjną płaskodenną łodzią i złapcie zachód słońca – spokojne, malownicze zakończenie długiego dnia wycieczki."},
      de:{name:"Naturpark Albufera",desc:"Eine weite Süßwasserlagune südlich von Valencia, umgeben von Reisfeldern, die der Region ihre berühmte Paella bescheren. Gleiten Sie in einem traditionellen Flachbodenboot über das Wasser und erleben Sie den Sonnenuntergang — ein ruhiger Abschluss."},
      nl:{name:"Natuurpark Albufera",desc:"Een uitgestrekte zoetwaterlagune ten zuiden van Valencia, omringd door rijstvelden die de regio zijn beroemde paella geven. Vaar in een traditionele platbodemboot over het water en vang de zonsondergang — een schilderachtige afsluiting."},
      fr:{name:"Parc naturel de l'Albufera",desc:"Une vaste lagune d'eau douce au sud de Valence, entourée de rizières qui donnent à la région sa célèbre paella. Glissez sur l'eau à bord d'une barque traditionnelle à fond plat et admirez le coucher de soleil — une fin de journée pittoresque."}
    }}
];

/* ---------- Nearby beaches ---------- */
/* paid:true beaches are the Torrevieja exception to the region's free beach parking */
const BEACHES = [
  { id:"caboroigbeach", drive:"5 min", paid:false,
    i18n:{
      en:{name:"Cabo Roig Beach",desc:"A small, calm cove right by the apartment."},
      es:{name:"Playa de Cabo Roig",desc:"Una cala pequeña y tranquila junto al apartamento."},
      pl:{name:"Plaża Cabo Roig",desc:"Mała, spokojna zatoczka tuż przy apartamencie."},
      de:{name:"Strand Cabo Roig",desc:"Eine kleine, ruhige Bucht direkt bei der Wohnung."},
      nl:{name:"Strand Cabo Roig",desc:"Een kleine, rustige baai vlak bij het appartement."},
      fr:{name:"Plage de Cabo Roig",desc:"Une petite crique calme juste à côté de l'appartement."}
    }},
  { id:"lazeniabeach", drive:"6 min", paid:false,
    i18n:{
      en:{name:"La Zenia Beach",desc:"A long, popular sandy beach near Zenia Boulevard."},
      es:{name:"Playa de La Zenia",desc:"Una larga y concurrida playa de arena cerca de Zenia Boulevard."},
      pl:{name:"Plaża La Zenia",desc:"Długa, popularna piaszczysta plaża przy Zenia Boulevard."},
      de:{name:"Strand La Zenia",desc:"Ein langer, beliebter Sandstrand nahe dem Zenia Boulevard."},
      nl:{name:"Strand La Zenia",desc:"Een lang, populair zandstrand bij Zenia Boulevard."},
      fr:{name:"Plage de La Zenia",desc:"Une longue plage de sable prisée, près de Zenia Boulevard."}
    }},
  { id:"flamencabeach", drive:"8 min", paid:false,
    i18n:{
      en:{name:"Playa Flamenca",desc:"A quieter sandy stretch between La Zenia and Campoamor."},
      es:{name:"Playa Flamenca",desc:"Un tramo de arena más tranquilo entre La Zenia y Campoamor."},
      pl:{name:"Playa Flamenca",desc:"Spokojniejszy piaszczysty odcinek między La Zenia a Campoamor."},
      de:{name:"Playa Flamenca",desc:"Ein ruhigerer Sandabschnitt zwischen La Zenia und Campoamor."},
      nl:{name:"Playa Flamenca",desc:"Een rustiger zandstrand tussen La Zenia en Campoamor."},
      fr:{name:"Playa Flamenca",desc:"Une portion de sable plus calme entre La Zenia et Campoamor."}
    }},
  { id:"campoamorbeach", drive:"10 min", paid:false,
    i18n:{
      en:{name:"Aguamarina Beach, Campoamor",desc:"Golden sand by Campoamor's marina and palm-lined promenade."},
      es:{name:"Playa Aguamarina, Campoamor",desc:"Arena dorada junto al puerto y el paseo de palmeras de Campoamor."},
      pl:{name:"Plaża Aguamarina, Campoamor",desc:"Złocisty piasek przy marinie i promenadzie z palmami w Campoamor."},
      de:{name:"Strand Aguamarina, Campoamor",desc:"Goldener Sand am Yachthafen und der Palmenpromenade von Campoamor."},
      nl:{name:"Strand Aguamarina, Campoamor",desc:"Goudkleurig zand bij de jachthaven en palmenboulevard van Campoamor."},
      fr:{name:"Plage Aguamarina, Campoamor",desc:"Sable doré près du port et de la promenade de palmiers de Campoamor."}
    }},
  { id:"puntaprimabeach", drive:"12 min", paid:false,
    i18n:{
      en:{name:"Punta Prima Beach",desc:"A sheltered bay with a small island just offshore."},
      es:{name:"Playa de Punta Prima",desc:"Una bahía resguardada con una pequeña isla frente a la orilla."},
      pl:{name:"Plaża Punta Prima",desc:"Osłonięta zatoka z małą wysepką tuż przy brzegu."},
      de:{name:"Strand Punta Prima",desc:"Eine geschützte Bucht mit einer kleinen Insel vor der Küste."},
      nl:{name:"Strand Punta Prima",desc:"Een beschutte baai met een eilandje net voor de kust."},
      fr:{name:"Plage de Punta Prima",desc:"Une baie abritée avec un îlot juste au large."}
    }},
  { id:"calacapitan", drive:"7 min", paid:false,
    i18n:{
      en:{name:"Cala Capitán",desc:"A small rocky cove, good for snorkelling in calm water."},
      es:{name:"Cala Capitán",desc:"Una pequeña cala rocosa, ideal para bucear en aguas tranquilas."},
      pl:{name:"Cala Capitán",desc:"Mała skalista zatoczka, dobra do nurkowania, spokojna woda."},
      de:{name:"Cala Capitán",desc:"Eine kleine Felsbucht, gut zum Schnorcheln, ruhiges Wasser."},
      nl:{name:"Cala Capitán",desc:"Een kleine rotsachtige baai, goed voor snorkelen, rustig water."},
      fr:{name:"Cala Capitán",desc:"Une petite crique rocheuse, idéale pour le snorkeling, eau calme."}
    }},
  { id:"playadelcura", drive:"15 min", paid:true,
    i18n:{
      en:{name:"Playa del Cura, Torrevieja",desc:"Central Torrevieja's town beach, right on the promenade."},
      es:{name:"Playa del Cura, Torrevieja",desc:"La playa céntrica de Torrevieja, junto al paseo marítimo."},
      pl:{name:"Playa del Cura, Torrevieja",desc:"Centralna plaża Torrevieja, tuż przy promenadzie."},
      de:{name:"Playa del Cura, Torrevieja",desc:"Torreviejas zentraler Stadtstrand, direkt an der Promenade."},
      nl:{name:"Playa del Cura, Torrevieja",desc:"Het centrale stadsstrand van Torrevieja, aan de boulevard."},
      fr:{name:"Playa del Cura, Torrevieja",desc:"La plage centrale de Torrevieja, en bord de promenade."}
    }},
  { id:"lamatabeach", drive:"20 min", paid:true,
    i18n:{
      en:{name:"La Mata Beach, Torrevieja",desc:"A long Blue Flag beach beside a protected dune reserve."},
      es:{name:"Playa de La Mata, Torrevieja",desc:"Una larga playa con Bandera Azul junto a una reserva de dunas protegida."},
      pl:{name:"Plaża La Mata, Torrevieja",desc:"Długa plaża z Błękitną Flagą obok chronionego rezerwatu wydm."},
      de:{name:"Strand La Mata, Torrevieja",desc:"Ein langer Blaue-Flagge-Strand neben einem geschützten Dünenreservat."},
      nl:{name:"Strand La Mata, Torrevieja",desc:"Een lang Blauwe Vlag-strand naast een beschermd duinreservaat."},
      fr:{name:"Plage de La Mata, Torrevieja",desc:"Une longue plage Pavillon bleu près d'une réserve dunaire protégée."}
    }}
];
