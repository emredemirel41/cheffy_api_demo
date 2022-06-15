let DUMMY_CHEFS = [
    {
        id: 1,
        name: 'Wong Chinese Sushi',
        description: 'Most deliciosu and tradional chinese cuisine meals located there. Sushi, wok meals, noodles and more waiting you in Wong Chinese',
        work_hours_start: 14.2,
        work_hours_end: 21.5,
        menu_available : true,
        created_at : "20.01.2022",
        rating : 4.0,
        category_id: 1,
        locationable_id : 1,
        chef_img: '/assets/chef_img/hamburger1.png'
    },{
    	id: 2,
        name: 'Mark Buffalo Wings',
        description: 'Tradional american Buffalo Wings with homemade Buffalo sauce that maintained over 40 years Louisiana family recipe ',
        work_hours_start: 14.2,
        work_hours_end: 21.5,
        menu_available : true,
        created_at : "20.01.2022",
        rating : 4.3,
        category_id: 2,
        locationable_id : 2,
        chef_img: '/assets/chef_img/hamburger1.png'
    },{
    	id: 3,
        name: 'Texas Smoke House',
        description: 'Old-Fashioned recipe summer sausage, smoked in a concrete pit smokehouse for 12 hours using real hardwood logs and smoked over a natural fire to create an authentic, aged flavor that cant be achieved any other way.',
        work_hours_start: 14.2,
        work_hours_end: 21.5,
        menu_available : true,
        created_at : "20.01.2022",
        rating : 3.9,
        category_id: 3,
        locationable_id : 3,
        chef_img: '/assets/chef_img/hamburger1.png'
    },{
    	id: 4,
        name: 'Binotto Pizza',
        description: 'Binotto is a pizza parlor located at 316 Kinzie Street,in Chicago, Illinois. According to the owner, they use cornmeal in their crust.',
        work_hours_start: 14.2,
        work_hours_end: 21.5,
        menu_available : true,
        created_at : "20.01.2022",
        rating : 4.8,
        category_id: 4,
        locationable_id : 2,
        chef_img: '/assets/chef_img/hamburger1.png'
    },{
    	id: 5,
        name: 'Bobs Burger',
        description: 'The Hot Mess from Harlem Shake is changing the game of smash burgers. This patty has the crispiest edges ever that pair flawlessly with its toppings of pickled cherry pepper and bacon relish, American cheese',
        work_hours_start: 14.2,
        work_hours_end: 21.5,
        menu_available : true,
        created_at : "20.01.2022",
        rating : 4.1,
        category_id: 5,
        locationable_id : 1,
        chef_img: '/assets/chef_img/hamburger1.png'
    },{
    	id: 6,
        name: 'Dianka Patisserie',
        description: 'Lorem ipsum dolor set',
        work_hours_start: 14.2,
        work_hours_end: 21.5,
        menu_available : true,
        created_at : "20.01.2022",
        rating : 4.6,
        category_id: 6,
        locationable_id : 2,
        chef_img: '/assets/chef_img/hamburger1.png'
    },{
    	id: 7,
        name: 'Seagull Mussels',
        description: 'Seagull Mussels produce premium NZ Greenshell™ Mussels and deliver them fresh for you to create mouth-watering dishes',
        work_hours_start: 14.2,
        work_hours_end: 21.5,
        menu_available : true,
        created_at : "20.01.2022",
        rating : 3.5,
        category_id: 7,
        locationable_id : 3,
        chef_img: '/assets/chef_img/hamburger1.png'
    },{
    	id: 8,
        name: 'Katz Dellicatessen',
        description: 'Katzs Delicatessen serve kosher-style delicatessen and pastrami located at 205 East Houston Street, on the southwest corner of Houston ',
        work_hours_start: 14.2,
        work_hours_end: 21.5,
        menu_available : true,
        created_at : "20.01.2022",
        rating : 5.0,
        category_id: 5,
        locationable_id : 1,
        chef_img: '/assets/chef_img/hamburger1.png'
    },{
    	id: 9,
        name: 'Bagel Shop',
        description: 'Bagel & deli has been the home of delicious foods and awesome moods since 1975',
        work_hours_start: 14.2,
        work_hours_end: 21.5,
        menu_available : true,
        created_at : "20.01.2022",
        rating : 3.3,
        category_id: 8,
        locationable_id : 3,
        chef_img: '/assets/chef_img/hamburger1.png'
    },{
    	id: 10,
        name: 'Gordon Ramsay Hell Kitchen',
        description: 'Chef Gordon Ramsay creates an exquisite dining experience that allows diners to best',
        work_hours_start: 14.2,
        work_hours_end: 21.5,
        menu_available : true,
        created_at : "20.01.2022",
        rating : 5.0,
        category_id: 9,
        locationable_id : 2,
        chef_img: '/assets/chef_img/hamburger1.png'
    }

    
]

let DUMMY_CATEGORIES = [
    {
        id: 1,
        category_enum: 1,
        category_name: 'Asia Cuisine',
        category_img: '/assets/categories_img/hamburger1.png',
    },{
        id: 2,
        category_enum: 2,
        category_name: 'Chicken',
        category_img: '/assets/categories_img/hamburger1.png',
    },{
        id: 3,
        category_enum: 3,
        category_name: 'Grill&Smokehouse',
        category_img: '/assets/categories_img/hamburger1.png',
    },{
        id: 4,
        category_enum: 4,
        category_name: 'Pizza',
        category_img: '/assets/categories_img/hamburger1.png',
    },{
        id: 5,
        category_enum: 5,
        category_name: 'Burger&Sandwich',
        category_img: '/assets/categories_img/hamburger1.png',
    },{
        id: 6,
        category_enum: 6,
        category_name: 'Deserts',
        category_img: '/assets/categories_img/hamburger1.png',
    },{
        id: 7,
        category_enum: 7,
        category_name: 'Seafood',
        category_img: '/assets/categories_img/hamburger1.png',
    },{
        id: 8,
        category_enum: 8,
        category_name: 'Bakery',
        category_img: '/assets/categories_img/hamburger1.png',
    },{
        id: 9,
        category_enum: 9,
        category_name: 'Fine Dining',
        category_img: '/assets/categories_img/hamburger1.png',
    }
]

let DUMMY_BANNERS = [
    {
        id: 1,
        banner_img: '/assets/path.jpg',
        banner_redirect: '/path',
    },
]

let DUMMY_LOCATIONS = [
    {
        id: 1,
        longtitude: 40.71789644487898,
        latitude: -73.98051467461434,
        full_address : '100 Industrial Rd, Carlstadt, NJ 07072',
        city: 'Boston',
        neighbourhood : 'Carlstadt',
        street : '100 Industrial Rd',
        Country : 'USA',
    },{
        id: 2,
        longtitude: 40.71849253590087,
        latitude: -73.98979576525085,
        full_address : '94 Orchard St, New York, NY 10002',
        city: 'New York',
        neighbourhood : 'Mannathan',
        street : '94 Orchard St',
        Country : 'USA',
    },{
        id: 3,
        longtitude: 35.22636555097711,
        latitude: -97.8583658659014,
        full_address : '649W+PJ Tuttle, Oklahoma',
        city: 'Oklahoma',
        neighbourhood : 'Amber',
        street : '649W+PJ Tuttle',
        Country : 'USA',
    }
]

exports.DUMMY_CHEFS = DUMMY_CHEFS;
exports.DUMMY_CATEGORIES = DUMMY_CATEGORIES;
exports.DUMMY_BANNERS = DUMMY_BANNERS;
exports.DUMMY_LOCATIONS = DUMMY_LOCATIONS;