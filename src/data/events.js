export const events = [
  {
    id: 1,
    title: 'Summer Music Festival',
    date: '2023-07-15',
    time: '12:00 PM',
    location: 'Central Park, New York',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'Join us for the biggest music festival of the summer featuring top artists from around the world. Experience amazing performances, great food, and unforgettable memories.',
    category: 'Music',
    price: 12000,
    tickets: [
      { type: 'General Admission', price: 12000, available: 500 },
      { type: 'VIP', price: 25000, available: 100 },
      { type: 'Backstage Pass', price: 35000, available: 50 }
    ]
  },
  {
    id: 2,
    title: 'Tech Conference 2023',
    date: '2023-08-10',
    time: '9:00 AM',
    location: 'Convention Center, San Francisco',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'The premier tech conference bringing together industry leaders, innovators, and tech enthusiasts. Discover the latest trends, attend workshops, and network with professionals.',
    category: 'Technology',
    price: 18000,
    tickets: [
      { type: 'Standard', price: 18000, available: 300 },
      { type: 'Premium', price: 30000, available: 150 }
    ]
  },
  {
    id: 3,
    title: 'Food & Wine Festival',
    date: '2023-09-05',
    time: '11:00 AM',
    location: 'Waterfront Park, Chicago',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'Indulge in culinary delights from renowned chefs and taste exquisite wines from around the world. A gastronomic adventure awaits food enthusiasts and wine connoisseurs.',
    category: 'Food & Drink',
    price: 12500,
    tickets: [
      { type: 'General Entry', price: 12500, available: 400 },
      { type: 'Gourmet Experience', price: 20000, available: 100 }
    ]
  },
  {
    id: 4,
    title: 'International Film Festival',
    date: '2023-10-20',
    time: '6:00 PM',
    location: 'Grand Theater, Los Angeles',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'Celebrating the art of cinema with screenings of acclaimed films from across the globe. Meet directors, actors, and fellow film enthusiasts in this prestigious event.',
    category: 'Arts & Culture',
    price: 12000,
    tickets: [
      { type: 'Single Day Pass', price: 12000, available: 200 },
      { type: 'Festival Pass', price: 22000, available: 100 }
    ]
  },
  {
    id: 5,
    title: 'Marathon for Charity',
    date: '2023-11-12',
    time: '7:00 AM',
    location: 'Downtown, Boston',
    image: 'https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
    description: 'Run for a cause in this annual charity marathon. All proceeds go to supporting education for underprivileged children. Join us in making a difference one step at a time.',
    category: 'Sports',
    price: 12000,
    tickets: [
      { type: '5K Run', price: 12000, available: 1000 },
      { type: 'Half Marathon', price: 15000, available: 500 },
      { type: 'Full Marathon', price: 18000, available: 300 }
    ]
  },
  {
    id: 6,
    title: 'Business Leadership Summit',
    date: '2023-12-05',
    time: '10:00 AM',
    location: 'Grand Hotel, Seattle',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
    description: 'An exclusive summit for business leaders and entrepreneurs. Gain insights from industry pioneers, participate in strategic discussions, and expand your professional network.',
    category: 'Business',
    price: 25000,
    tickets: [
      { type: 'Professional', price: 25000, available: 250 },
      { type: 'Executive', price: 45000, available: 100 }
    ]
  },
  {
    id: 7,
    title: 'Yoga & Wellness Retreat',
    date: '2023-08-25',
    time: '8:00 AM',
    location: 'Serenity Resort, Malibu',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'Escape the hustle and bustle of daily life with our rejuvenating yoga and wellness retreat. Enjoy guided meditation, yoga sessions, healthy cuisine, and connect with like-minded individuals.',
    category: 'Sports',
    price: 35000,
    tickets: [
      { type: 'Weekend Pass', price: 35000, available: 75 },
      { type: 'Full Week Pass', price: 75000, available: 30 }
    ]
  },
  {
    id: 8,
    title: 'Comic Book Convention',
    date: '2023-09-15',
    time: '10:00 AM',
    location: 'Exhibition Center, San Diego',
    image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'The ultimate gathering for comic book enthusiasts! Meet your favorite artists, attend panel discussions, showcase your cosplay skills, and expand your collection with rare finds.',
    category: 'Arts & Culture',
    price: 12000,
    tickets: [
      { type: 'Day Pass', price: 12000, available: 2000 },
      { type: 'Weekend Pass', price: 18000, available: 1000 },
      { type: 'VIP Experience', price: 32000, available: 200 }
    ]
  },
  {
    id: 9,
    title: 'Artificial Intelligence Summit',
    date: '2023-10-05',
    time: '9:00 AM',
    location: 'Tech Hub, Austin',
    image: 'https://images.unsplash.com/photo-1677442135136-760c813a743d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
    description: 'Explore the cutting-edge advancements in artificial intelligence with leading researchers and industry pioneers. Discover how AI is transforming industries and shaping our future.',
    category: 'Technology',
    price: 25000,
    tickets: [
      { type: 'Standard Access', price: 25000, available: 350 },
      { type: 'Premium Access', price: 45000, available: 150 }
    ]
  },
  {
    id: 10,
    title: 'Craft Beer Festival',
    date: '2023-08-19',
    time: '2:00 PM',
    location: 'Riverside Park, Portland',
    image: 'https://images.unsplash.com/photo-1575367439058-6096bb9cf5e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'Sample a diverse selection of craft beers from local and international breweries. Enjoy live music, food pairings, and learn about brewing techniques from master brewers.',
    category: 'Food & Drink',
    price: 12000,
    tickets: [
      { type: 'Tasting Pass', price: 12000, available: 800 },
      { type: 'VIP Experience', price: 18000, available: 200 }
    ]
  },
  {
    id: 11,
    title: 'Classical Music Concert',
    date: '2023-11-25',
    time: '7:30 PM',
    location: 'Symphony Hall, Boston',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'Experience the magic of classical masterpieces performed by the renowned Boston Symphony Orchestra. An evening of musical excellence featuring works by Mozart, Beethoven, and Tchaikovsky.',
    category: 'Music',
    price: 12500,
    tickets: [
      { type: 'Balcony Seating', price: 12500, available: 300 },
      { type: 'Main Floor', price: 20000, available: 200 },
      { type: 'Premium Box', price: 32000, available: 50 }
    ]
  },
  {
    id: 12,
    title: 'Photography Workshop',
    date: '2023-09-30',
    time: '10:00 AM',
    location: 'Art Institute, Chicago',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    description: 'Elevate your photography skills with guidance from professional photographers. Learn advanced techniques, composition principles, and post-processing methods in this hands-on workshop.',
    category: 'Arts & Culture',
    price: 15000,
    tickets: [
      { type: 'Workshop Pass', price: 15000, available: 50 },
      { type: 'Workshop + Equipment', price: 28000, available: 25 }
    ]
  },
    {
    id: 13,
    title: 'Indian Classical Music Concert',
    date: '2023-10-15',
    time: '6:30 PM',
    location: 'Siri Fort Auditorium, Delhi',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'Experience the rich heritage of Indian classical music with performances by renowned maestros. An evening of ragas, rhythms, and musical excellence.',
    category: 'Music',
    price: 15000,
    tickets: [
      { type: 'Standard', price: 15000, available: 300 },
      { type: 'Premium', price: 25000, available: 150 },
      { type: 'VIP', price: 40000, available: 50 }
    ]
  },
  {
    id: 14,
    title: 'Blockchain & Cryptocurrency Summit',
    date: '2023-11-08',
    time: '9:30 AM',
    location: 'Hyderabad International Convention Centre',
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
    description: 'Join industry leaders and blockchain innovators to explore the future of cryptocurrency, NFTs, and decentralized finance. Network with experts and gain valuable insights.',
    category: 'Technology',
    price: 22000,
    tickets: [
      { type: 'General', price: 22000, available: 400 },
      { type: 'Business', price: 35000, available: 200 }
    ]
  },
  {
    id: 15,
    title: 'Himalayan Yoga Retreat',
    date: '2023-09-20',
    time: '7:00 AM',
    location: 'Rishikesh, Uttarakhand',
    image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'Immerse yourself in a transformative yoga experience in the serene Himalayan foothills. Practice asanas, meditation, and pranayama with expert instructors in the yoga capital of the world.',
    category: 'Health & Wellness',
    price: 45000,
    tickets: [
      { type: '3-Day Pass', price: 45000, available: 50 },
      { type: '7-Day Pass', price: 75000, available: 30 }
    ]
  },
  {
    id: 16,
    title: 'International Street Food Festival',
    date: '2023-10-28',
    time: '12:00 PM',
    location: 'Marine Drive, Mumbai',
    image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'Embark on a global culinary journey with street food specialties from over 30 countries. Enjoy live cooking demonstrations, food competitions, and cultural performances.',
    category: 'Food & Drink',
    price: 12000,
    tickets: [
      { type: 'Entry Pass', price: 12000, available: 1000 },
      { type: 'Gourmet Pass', price: 20000, available: 500 }
    ]
  },
  {
    id: 17,
    title: 'Digital Marketing Masterclass',
    date: '2023-11-15',
    time: '10:00 AM',
    location: 'Taj Lands End, Mumbai',
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80',
    description: 'Elevate your digital marketing skills with this comprehensive masterclass. Learn about SEO, social media strategies, content marketing, and analytics from industry experts.',
    category: 'Education',
    price: 18000,
    tickets: [
      { type: 'Professional', price: 18000, available: 200 },
      { type: 'Corporate Group (5)', price: 75000, available: 20 }
    ]
  },
  {
    id: 18,
    title: 'Indian Premier League Finals',
    date: '2023-05-28',
    time: '7:30 PM',
    location: 'Narendra Modi Stadium, Ahmedabad',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1305&q=80',
    description: 'Witness the grand finale of India\'s biggest cricket tournament. Experience the electric atmosphere as the top teams battle for the championship trophy.',
    category: 'Sports',
    price: 25000,
    tickets: [
      { type: 'General Stand', price: 25000, available: 10000 },
      { type: 'Premium Stand', price: 40000, available: 5000 },
      { type: 'Corporate Box', price: 100000, available: 50 }
    ]
  },
  {
    id: 19,
    title: 'Contemporary Art Exhibition',
    date: '2023-09-10',
    time: '11:00 AM',
    location: 'National Gallery of Modern Art, Bangalore',
    image: 'https://images.unsplash.com/photo-1531913764164-f85c52e6e654?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    description: 'Explore thought-provoking works by emerging and established contemporary artists. The exhibition features paintings, sculptures, installations, and digital art that challenge conventional perspectives.',
    category: 'Arts & Culture',
    price: 12000,
    tickets: [
      { type: 'General Admission', price: 12000, available: 500 },
      { type: 'Guided Tour', price: 18000, available: 100 }
    ]
  },
  {
    id: 20,
    title: 'Startup Investor Pitch Day',
    date: '2023-10-12',
    time: '9:00 AM',
    location: 'T-Hub, Hyderabad',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'A premier platform for startups to pitch their innovative ideas to potential investors. Network with venture capitalists, angel investors, and industry mentors to take your startup to the next level.',
    category: 'Business',
    price: 15000,
    tickets: [
      { type: 'Startup Pitch', price: 15000, available: 50 },
      { type: 'Investor Pass', price: 25000, available: 100 },
      { type: 'Networking Only', price: 12000, available: 200 }
    ]
  },
  {
    id: 21,
    title: 'Ayurveda & Holistic Health Conference',
    date: '2023-11-05',
    time: '8:30 AM',
    location: 'Kochi International Convention Center',
    image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    description: 'Discover the ancient wisdom of Ayurveda and its relevance in modern healthcare. Learn about natural remedies, holistic wellness practices, and personalized health approaches from renowned practitioners.',
    category: 'Health & Wellness',
    price: 16000,
    tickets: [
      { type: 'Conference Pass', price: 16000, available: 300 },
      { type: 'Workshop Bundle', price: 28000, available: 150 }
    ]
  },
  {
    id: 22,
    title: 'Bollywood Music Awards',
    date: '2023-12-15',
    time: '8:00 PM',
    location: 'Indira Gandhi Arena, Delhi',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'The most glamorous night in Indian music! Witness spectacular performances by top Bollywood stars, celebrate the year\'s best music, and enjoy an unforgettable evening of entertainment.',
    category: 'Music',
    price: 35000,
    tickets: [
      { type: 'Silver', price: 35000, available: 5000 },
      { type: 'Gold', price: 50000, available: 2000 },
      { type: 'Platinum', price: 75000, available: 1000 }
    ]
  },
  {
    id: 23,
    title: 'Artificial Intelligence & Robotics Expo',
    date: '2023-09-25',
    time: '10:00 AM',
    location: 'BIEC, Bangalore',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1306&q=80',
    description: 'Explore the cutting-edge advancements in AI and robotics. See live demonstrations, interact with intelligent machines, and learn about the technologies shaping our future.',
    category: 'Technology',
    price: 14000,
    tickets: [
      { type: 'Expo Pass', price: 14000, available: 2000 },
      { type: 'Conference + Expo', price: 25000, available: 500 }
    ]
  },
  {
    id: 24,
    title: 'Organic Farming Workshop',
    date: '2023-10-08',
    time: '9:00 AM',
    location: 'Green Valley Farms, Pune',
    image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'Learn sustainable farming techniques, composting methods, natural pest control, and crop rotation strategies. Hands-on sessions in a working organic farm with expert agriculturists.',
    category: 'Education',
    price: 12000,
    tickets: [
      { type: 'Workshop Only', price: 12000, available: 100 },
      { type: 'Workshop + Starter Kit', price: 18000, available: 50 }
    ]
  },
  {
    id: 25,
    title: 'Indian Literary Festival',
    date: '2023-11-18',
    time: '10:30 AM',
    location: 'Diggi Palace, Jaipur',
    image: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    description: 'Celebrate the rich literary heritage of India with book launches, author sessions, panel discussions, and poetry readings. Interact with acclaimed writers and discover new literary voices.',
    category: 'Arts & Culture',
    price: 12000,
    tickets: [
      { type: 'Day Pass', price: 12000, available: 1000 },
      { type: 'Festival Pass', price: 30000, available: 500 }
    ]
  },
  {
    id: 26,
    title: 'National Badminton Championship',
    date: '2023-08-20',
    time: '9:00 AM',
    location: 'Gachibowli Indoor Stadium, Hyderabad',
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'Watch India\'s top badminton players compete for the national title. Experience thrilling matches, exceptional skill, and sporting excellence in this prestigious tournament.',
    category: 'Sports',
    price: 15000,
    tickets: [
      { type: 'General Seating', price: 15000, available: 2000 },
      { type: 'Premium Seating', price: 25000, available: 1000 }
    ]
  },
  {
    id: 27,
    title: 'Gourmet Chocolate Festival',
    date: '2023-09-22',
    time: '11:00 AM',
    location: 'The Leela Palace, Bangalore',
    image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
    description: 'Indulge in the finest chocolates from artisanal chocolatiers across India and abroad. Enjoy tastings, chocolate-making workshops, pairing sessions, and decadent dessert demonstrations.',
    category: 'Food & Drink',
    price: 14000,
    tickets: [
      { type: 'Standard Entry', price: 14000, available: 500 },
      { type: 'VIP Experience', price: 22000, available: 200 }
    ]
  },
  {
    id: 28,
    title: 'Women Entrepreneurs Summit',
    date: '2023-10-20',
    time: '9:30 AM',
    location: 'ITC Grand Chola, Chennai',
    image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    description: 'A platform celebrating women in business. Connect with successful entrepreneurs, participate in mentorship sessions, and gain insights on overcoming challenges in the entrepreneurial journey.',
    category: 'Business',
    price: 18000,
    tickets: [
      { type: 'Conference Pass', price: 18000, available: 300 },
      { type: 'Networking Dinner', price: 28000, available: 150 }
    ]
  },
  {
    id: 29,
    title: 'Mindfulness & Meditation Retreat',
    date: '2023-11-10',
    time: '7:00 AM',
    location: 'Ananda in the Himalayas, Rishikesh',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'Escape the daily hustle and reconnect with your inner self in this serene retreat. Learn mindfulness techniques, guided meditation practices, and stress management tools from experienced practitioners.',
    category: 'Health & Wellness',
    price: 50000,
    tickets: [
      { type: 'Weekend Retreat', price: 50000, available: 40 },
      { type: '5-Day Immersion', price: 85000, available: 20 }
    ]
  },
  {
    id: 30,
    title: 'Indian Fashion Week',
    date: '2023-10-15',
    time: '3:00 PM',
    location: 'Pragati Maidan, Delhi',
    image: 'https://images.unsplash.com/photo-1605289355680-75fb42945dc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    description: 'Experience the glamour of India\'s premier fashion event. Witness stunning collections from top designers, celebrity showstoppers, and the latest trends in Indian and fusion fashion.',
    category: 'Arts & Culture',
    price: 30000,
    tickets: [
      { type: 'Regular Access', price: 30000, available: 1000 },
      { type: 'Front Row', price: 75000, available: 200 },
      { type: 'All Access Pass', price: 100000, available: 50 }
    ]
  },
  {
    id: 31,
    title: 'Data Science Bootcamp',
    date: '2023-09-18',
    time: '9:00 AM',
    location: 'IIT Bombay Campus',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'An intensive learning experience covering Python, statistics, machine learning, and data visualization. Build real-world projects and gain the skills needed for a career in data science.',
    category: 'Education',
    price: 25000,
    tickets: [
      { type: 'Basic Track', price: 25000, available: 100 },
      { type: 'Advanced Track', price: 40000, available: 50 }
    ]
  },
  {
    id: 32,
    title: 'Diwali Cultural Festival',
    date: '2023-11-12',
    time: '5:00 PM',
    location: 'Rajpath, Delhi',
    image: 'https://images.unsplash.com/photo-1605197161470-5d2a9af0ac7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    description: 'Celebrate the festival of lights with spectacular performances, traditional music, dance shows, artisan markets, and a grand fireworks display. A family-friendly event showcasing India\'s rich cultural heritage.',
    category: 'Arts & Culture',
    price: 12000,
    tickets: [
      { type: 'Family Pass (4)', price: 40000, available: 500 },
      { type: 'Individual Pass', price: 12000, available: 2000 },
      { type: 'VIP Experience', price: 25000, available: 200 }
    ]
  }
];

export const categories = [
  { id: 1, name: 'Music', icon: '🎵' },
  { id: 2, name: 'Technology', icon: '💻' },
  { id: 3, name: 'Food & Drink', icon: '🍷' },
  { id: 4, name: 'Arts & Culture', icon: '🎭' },
  { id: 5, name: 'Sports', icon: '🏆' },
  { id: 6, name: 'Business', icon: '💼' },
  { id: 7, name: 'Education', icon: '📚' },
  { id: 8, name: 'Health & Wellness', icon: '🧘' }
];