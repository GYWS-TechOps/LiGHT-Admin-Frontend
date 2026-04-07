export const eventsData = [
  {
    id: 1,
    image: "/images/Home/event1.webp",
    title: 'LiGHT Akola Event',
    metrics: [
      { 
        label: 'Total Number of Children Benefited', 
        value: '500+' 
      },
      { 
        label: 'Total Funds Raised in the Event', 
        value: '8,125' 
      }
    ],
    description: 'The event was conducted to raise money to provide a Volleyball court, and books for the library of a school named Dr. S R Patil School.',
    variant: 'solid'
  },
  
  {
    id: 2,
    image: "/images/Home/event3.webp",
    title: 'RISE Workshop',
    metrics: [
      { 
        label: 'No of Schools Attended Workshop', 
        value: '15+' 
      },
      { 
        label: 'No of Teachers Who Participated in Workshop', 
        value: '51+' 
      }
    ],
    description: 'The workshop aimed to transform the existing teacher-centric model into a student-centric model of education.',
    variant: 'solid'
  },
  {
    id: 4,
    image: "/images/Home/event1.webp",
    title: 'Career Counseling Program',
    metrics: [
      { 
        label: 'Number of Mentees Attended', 
        value: '250+' 
      },
      { 
        label: 'Number of Sessions between Mentors and Mentees', 
        value: '280+' 
      }
    ],
    description: 'A comprehensive career counseling program designed to guide students in making informed career decisions.',
    variant: 'solid'
  }
];

// For the home page, show only featured events (first 2)
export const featuredEventsData = eventsData.slice(0, 2);