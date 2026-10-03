// Central store of real content supplied by the school / alumni committee.
// Keeping this separate from components makes it easy for a non-developer
// editor to update facts and figures without touching any UI code.

export const schoolInfo = {
  name: 'Gaala E.P. Junior High School',
  shortName: 'Gaala E.P. JHS',
  motto: 'The Sky is the Limit',
  tagline: 'Building Knowledge, Inspiring Character, Transforming Communities Since 1995',
  founded: '17th October, 1995',
  founder: 'The Evangelical Presbyterian Church, Saboba District',
  location: 'Tilagbeni, near the New Market, South-East of Saboba Township, Saboba District, Northern Region',
  address: 'Gaala E.P. Junior High School, Tilagbeni, P.O. Box 9, Saboba, Northern Region, Ghana',
  phone: '+233 XX XXX XXXX',
  email: 'info@gaalaepjhs.edu.gh',
  mapQuery: 'Saboba, Northern Region, Ghana',
  mapEmbedSrc:
    'https://www.google.com/maps?q=Saboba,+Northern+Region,+Ghana&output=embed',
};

// Fill these in once the alumni committee has set up the account. Until then
// the Donate page shows a "details coming soon" message instead of a number.
export const donationInfo = {
  momoNumber: '', // e.g. '024 XXX XXXX'
  momoName: '', // account holder name as registered with the network
  momoNetwork: '', // e.g. 'MTN Mobile Money'
  bankDetails: '', // optional: bank name, account name, account number
  note: 'All contributions go toward alumni-led projects at Gaala E.P. JHS: infrastructure, learning materials, and anniversary activities.',
};

export const mission =
  'To promote and sustain a friendly environment for effective teaching and learning.';

export const vision =
  'To attain a higher level of discipline and academic performance through quality teaching, effective learning and efficient management.';

export const foundingStory = `Gaala E.P. Junior High School was established on 17th October, 1995 by the Evangelical Presbyterian Church, Saboba District. The school sits at Tilagbeni, near the New Market in the south-east of Saboba Township, on land donated by the elders of Tilagbeni, Kiteek and Boagbaln through the Chief of Saboba Traditional Council.

The school was founded to help children from the E.P. Church and the wider Saboba community who were finding it difficult to commute to Central JHS, and to curb the dropout of students caused by the lack of a junior high school in the area.`;

export const welcomeMessage = `For over three decades, Gaala E.P. Junior High School has stood as a beacon of learning, discipline, and community development in the Tilangbeni community of the Saboba District. Established on 17th October 1995 by the Evangelical Presbyterian Church, Saboba District, the school was founded on the principles of academic excellence, integrity, and service to society.

Since its inception, Gaala E.P. Junior High School has nurtured generations of students, many of whom have gone on to become responsible citizens, professionals, and leaders contributing meaningfully to the growth of their communities and to Ghana's national development. The school's success is a testament to the strong partnership between the church, parents, community leaders, teachers, and students who have worked together to build a lasting legacy.

As we celebrate nearly three decades of educational impact, this platform serves as a gateway to the story of our school. Here you will discover our history, achievements, academic programs, and community contributions, along with the challenges we face and the opportunities ahead as we work to provide quality education for every learner.

Whether you are a student, parent, alumnus, educator, partner, or visitor, we invite you to explore the journey of Gaala E.P. Junior High School and witness how education continues to transform lives across the Saboba area.`;

export const admissionSources = [
  {
    label: 'Gaala E.P. Primary School graduates',
    share: 70,
    detail: 'Pupils who complete Gaala E.P. Primary School move directly into JHS 1.',
  },
  {
    label: 'Eastern-road community pupils',
    share: 25,
    detail:
      'Children from the eastern part of the road linking E.P. Church junction to St. Joseph Technical junction, in the Saboba/Chereponi District.',
  },
  {
    label: 'Pupils from other public schools',
    share: 5,
    detail: 'Pupils from other public schools in other parts of the district.',
  },
];

export const growthTimeline = [
  {
    year: '1995',
    title: 'The school is founded',
    detail:
      'Gaala E.P. JSS opens its doors on 17th October with 9 pioneer teachers and 79 students, on land donated by the elders of Tilagbeni, Kiteek and Boagbaln.',
  },
  {
    year: '1996/97',
    title: 'From single stream to double stream',
    detail: 'Rising enrolment pushes the school from one class per form to two.',
  },
  {
    year: '2004/05',
    title: 'Enrolled onto the Capitation Grant Scheme',
    detail: 'The school joins the government Capitation Grant Scheme, easing the cost of basic education for families.',
  },
  {
    year: '2007',
    title: 'From Gaala E.P. JSS to Gaala E.P. JHS',
    detail: 'The school is renamed in line with the national shift from Junior Secondary School (JSS) to Junior High School (JHS).',
  },
  {
    year: '2024',
    title: 'A second 100% BECE pass rate',
    detail: '26 years after the first, the school again records a 100% pass rate: all 101 candidates pass.',
  },
  {
    year: '2025',
    title: '30 years of Gaala E.P. JHS',
    detail: 'The school marks three decades of service to Tilagbeni and the wider Saboba community, with 285 students on roll.',
  },
];

export const pioneerTeachers = [
  'Rev. David Bindati Nignang — Headmaster',
  'Naapii L. Johnson — Assistant Headmaster',
  'Gbande Peter Toyoon',
  'Robert Nii Kpodji',
  'Natug Philip Bilikuni',
  'Dramani Suifu',
  'Ampofo Harry',
  'Rev. Sir. Kl. Mahama',
  'Boakari Richard',
];

export const headmasters = [
  { name: 'Rev. David Bindati Nignang', period: '1995 – 2000' },
  { name: 'Mr. Naapii Johnson', period: '2000 – 2001' },
  { name: 'Mr. Bittlegma John Naadi', period: '16/10/2001 – 16/01/2004' },
  { name: 'Mr. Biwin George', period: '16/1/2004 – 24/12/2004' },
  { name: 'Mr. Kpog Banyi Madjor Peter', period: '24/12/2004 – 2007' },
  { name: 'Mad. Naapii Gladys', period: '2007 – 23/7/2010' },
  { name: 'Jawol Thomas', period: '23/7/2010 – 7/09/2012' },
  { name: 'Mr. Kisaak Daniel M.G', period: '7/9/2012 – Date' },
];

export const currentStaff = [
  { name: 'Kisaak Daniel M.G', role: 'Headteacher' },
  { name: 'Jayem Wundan-ya Cecilia', role: 'Assistant Headteacher' },
  { name: 'Agbedanu Gifty', role: 'Teacher' },
  { name: 'Adam Fuseini', role: 'Teacher' },
  { name: 'Ganiu Mohammed', role: 'Teacher' },
  { name: 'Gmagneer Abel Ngna-udanba', role: 'Teacher' },
  { name: 'Ndabi Raymond', role: 'Teacher' },
  { name: 'Nkoteen Elisha', role: 'Teacher' },
  { name: 'Tabor Francis', role: 'Teacher' },
];

export const staffNote =
  'The school currently has 9 teachers on staff: 5 professionals, 1 National Service personnel, and 3 volunteers who are old students of the school.';

export const infrastructure = [
  { label: 'School blocks', value: '2' },
  { label: 'Teachers\u2019 quarters', value: '1' },
  { label: 'Toilet facility', value: '1' },
  { label: 'Urinal', value: '1' },
];

export const enrolment2025 = {
  rows: [
    { form: 'Form 1', boys: 53, girls: 48, total: 101 },
    { form: 'Form 2', boys: 51, girls: 45, total: 96 },
    { form: 'Form 3', boys: 51, girls: 37, total: 88 },
  ],
  total: { boys: 155, girls: 130, total: 285 },
};

// Full BECE performance record, 1998–2025, as supplied. 2002–2005 pass-rate
// data was not available to the alumni committee at time of writing.
export const becePerformance = [
  { year: 1998, candidates: 49, passed: 49, rate: 100 },
  { year: 1999, candidates: 86, passed: 81, rate: 94.2 },
  { year: 2000, candidates: 48, passed: 34, rate: 70.8 },
  { year: 2001, candidates: 38, passed: 30, rate: 78.9 },
  { year: 2006, candidates: 99, passed: 44, rate: 44.4 },
  { year: 2007, candidates: 79, passed: 67, rate: 84.8 },
  { year: 2008, candidates: 90, passed: 46, rate: 51.1 },
  { year: 2009, candidates: 139, passed: 22, rate: 15.8 },
  { year: 2010, candidates: 63, passed: 49, rate: 77.8 },
  { year: 2011, candidates: 113, passed: 53, rate: 46.9 },
  { year: 2012, candidates: 107, passed: 24, rate: 22.4 },
  { year: 2013, candidates: 87, passed: 30, rate: 34.5 },
  { year: 2014, candidates: 142, passed: 31, rate: 21.8 },
  { year: 2015, candidates: 113, passed: 12, rate: 10.6 },
  { year: 2016, candidates: 82, passed: 24, rate: 29.3 },
  { year: 2017, candidates: 82, passed: 16, rate: 19.8 },
  { year: 2018, candidates: 96, passed: 55, rate: 57.3 },
  { year: 2019, candidates: 100, passed: 18, rate: 18 },
  { year: 2020, candidates: 121, passed: 39, rate: 32.2 },
  { year: 2021, candidates: 117, passed: 47, rate: 40.1 },
  { year: 2022, candidates: 117, passed: 13, rate: 11.1 },
  { year: 2023, candidates: 119, passed: 55, rate: 47 },
  { year: 2024, candidates: 101, passed: 101, rate: 100 },
  { year: 2025, candidates: 112, passed: 102, rate: 91 },
];

export const becePerformanceNote =
  'Data for 2002, 2003, 2004 and 2005 pass rates were not available at the time of writing.';

export const coCurricular = [
  {
    title: 'Debate & Quiz',
    detail: 'The school excelled in inter-schools debate and quiz competitions from 1995 to 2000, winning trophies at both Circuit and District level.',
  },
  {
    title: 'Sports',
    detail: 'Gaala E.P. JHS won inter-schools sports trophies in 2019 and 2024.',
  },
];

export const academicPrograms = [
  {
    title: 'Core Subjects',
    detail: 'English Language, Mathematics, Integrated Science, and Social Studies form the academic core for all three forms, in line with the national JHS curriculum.',
  },
  {
    title: 'ICT & Digital Skills',
    detail: 'Computing lessons introduce students to basic digital literacy, preparing them for a curriculum and a country that are increasingly online.',
  },
  {
    title: 'Career Technology & Science',
    detail: 'Practical, hands-on subjects build problem-solving skills alongside the sciences, opening pathways into technical and vocational education.',
  },
  {
    title: 'Religious & Moral Education',
    detail: 'Rooted in the school\u2019s E.P. Church founding, this subject shapes the discipline and character the school is known for.',
  },
];

export const newsItems = [
  {
    date: 'Sept 28 to Oct 4, 2026',
    title: 'Gaala@30: Honouring the Past, Inspiring the Future',
    detail: 'A week of 30th anniversary celebrations for Gaala E.P. JHS, bringing together alumni, staff, parents and the Tilagbeni community.',
  },
  {
    date: '2026',
    title: 'Anniversary celebrations launched on campus',
    detail: 'Alumni, staff, students and guests gathered at Tilagbeni for the launch of the Gaala@30 celebrations, with remarks, performances and a keynote address.',
    image: 'launchKeynote',
  },
  {
    date: 'September 2026',
    title: 'Gaala E.P. JHS @30 on JoyNews',
    detail: 'The school\u2019s three decades of impact, its challenges and its vision for the future were discussed on JoyNews\u2019 The Pulse.',
    image: 'joynewsFeature',
    credit: 'Screenshot from JoyNews, The Pulse',
  },
  {
    date: 'August 2025',
    title: '2025 BECE results: 91% pass rate',
    detail: '102 of 112 candidates passed the 2025 Basic Education Certificate Examination, continuing the school\u2019s recent run of strong results.',
  },
  {
    date: '2024',
    title: 'A second 100% pass rate',
    detail: 'All 101 candidates entered for BECE passed, matching the school\u2019s first cohort of 1996 exactly 26 years later.',
  },
  {
    date: 'Ongoing',
    title: 'Capitation Grant usage',
    detail: 'The school continues to receive and account for Capitation Grant funding, first enrolled in the 2004/05 academic year, to reduce the cost of basic education for families.',
  },
];

export const alumniInfo = {
  leadership:
    'The Gaala E.P. JHS Alumni Association is coordinated by a Patron and a Planning Committee of old students, many now working as teachers, civil servants, and professionals across Ghana, who organise reunions and give back to their former school.',
  activities: [
    'Coordinating the school\u2019s 30th anniversary celebrations',
    'Mentoring current students through career talks and study support',
    'Contributing volunteer teaching hours, as three of the current teaching staff are old students',
    'Raising support for infrastructure and learning materials',
  ],
};

// Leadership profiles for the Alumni section. Each entry needs a name, role
// and (optionally) a short bio and photo key from images.js. Add more
// entries here as names, roles, bios and photos are confirmed.
export const alumniLeadership = [
  {
    name: 'Johnson Libe Naapi',
    role: 'Patron, Alumni Association',
    bio: '',
    photo: 'patronJohnsonLibeNaapi',
  },
  {
    name: 'Nicholas Uniyagnan Jawol',
    role: 'Chairman',
    bio: '',
    photo: 'chairmanNicholasUniyagnanJawol',
  },
  {
    name: 'Salifu Ali, Esq.',
    role: 'Vice Chairman',
    bio: '',
    photo: 'viceChairmanSalifuAli',
  },
  {
    name: 'William Nlanjerbor Jalulah',
    role: 'Secretary',
    bio: '',
    photo: 'secretaryWilliamNlanjerborJalulah',
  },
  // No photo supplied yet for these two. Send one and it will be added to
  // src/assets/images/people and registered in images.js.
  { name: 'Francisca Lamani', role: 'Finance Secretary / Treasurer', bio: '', photo: null },
  { name: 'Lasim Tigme', role: 'Organizer', bio: '', photo: null },
];

export const ptaInfo = {
  leadership: 'The Parent-Teacher Association (PTA) and School Management Committee (SMC) work alongside the headteacher to oversee school welfare, discipline, and development projects.',
  membership: 'Membership is open to every parent and guardian of a currently enrolled student, together with teaching staff and community representatives.',
  meetings: 'The PTA and SMC meet each term to review academic performance, discuss infrastructure needs, and agree on community contributions to the school.',
};

export const testimonials = [
  {
    quote: 'Gaala E.P. JHS gave me the discipline I still carry today. The teachers pushed us to believe the sky really is the limit.',
    name: 'A Gaala E.P. JHS alumnus',
  },
  {
    quote: 'My three children have passed through this school. I have watched it grow from one block to a place the whole community is proud of.',
    name: 'A parent, Tilagbeni',
  },
  {
    quote: 'The 2024 and 2025 results show what focused teaching can do, even with the challenges we face. I am proud to teach here.',
    name: 'A member of staff',
  },
];

export const galleryCategories = [
  { title: 'Classroom activities', description: 'Everyday lessons across the three forms, from core subjects to ICT.' },
  { title: 'Sports & competitions', description: 'Inter-schools sports, debate and quiz events, including the 2019 and 2024 sports trophies.' },
  { title: 'Exhibitions', description: 'Student project work and exhibitions from across the academic year.' },
  { title: 'Ceremonies', description: 'Graduation, speech and prize-giving days, and community celebrations, including the 30th anniversary.' },
];
