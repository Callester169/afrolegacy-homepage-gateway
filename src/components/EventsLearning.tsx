
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const upcomingEvents = [
  {
    date: 'Dec 26-Jan 1',
    title: 'Kwanzaa Celebration Series',
    type: 'Cultural Event',
    location: 'Global Virtual',
    color: 'bg-afro-red'
  },
  {
    date: 'Jan 15',
    title: 'MLK Day Heritage Walk',
    type: 'Historical Tour',
    location: 'Multiple Cities',
    color: 'bg-afro-green'
  },
  {
    date: 'Feb 1-28',
    title: 'Black History Month Events',
    type: 'Educational Series',
    location: 'Worldwide',
    color: 'bg-afro-gold'
  },
  {
    date: 'Mar 10',
    title: 'AfroTech Entrepreneurship Summit',
    type: 'Business Conference',
    location: 'Lagos & Virtual',
    color: 'bg-afro-brown'
  }
];

const courses = [
  {
    title: 'Ancient African Civilizations',
    duration: '4 weeks',
    level: 'Beginner',
    students: '2.5k+'
  },
  {
    title: 'Black Business Building Basics',
    duration: '6 weeks',
    level: 'Intermediate',
    students: '1.8k+'
  },
  {
    title: 'Diaspora Cultural Connections',
    duration: '3 weeks',
    level: 'All Levels',
    students: '3.2k+'
  }
];

const EventsLearning = () => {
  return (
    <section className="py-20 px-6 bg-afro-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-afro-gold mb-4">
            Events & Learning
          </h2>
          <p className="text-xl text-afro-cream max-w-3xl mx-auto">
            Join our community events and enhance your knowledge with 
            comprehensive courses on Black history, culture, and entrepreneurship.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Upcoming Events */}
          <div>
            <h3 className="text-3xl font-bold text-afro-gold mb-8">Upcoming Events</h3>
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="bg-afro-cream border-afro-gold hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`${event.color} text-white px-3 py-2 rounded-lg text-center min-w-[80px]`}>
                        <div className="text-sm font-semibold">{event.date}</div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-afro-black mb-2">{event.title}</h4>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <span className="bg-afro-gold text-afro-black px-2 py-1 rounded text-sm">
                            {event.type}
                          </span>
                          <span className="bg-afro-brown text-white px-2 py-1 rounded text-sm">
                            📍 {event.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button 
                className="bg-afro-green hover:bg-afro-green-dark text-white font-semibold px-6 py-3"
              >
                📅 View All Events
              </Button>
            </div>
          </div>
          
          {/* Learning Courses */}
          <div>
            <h3 className="text-3xl font-bold text-afro-gold mb-8">Free Learning Courses</h3>
            <div className="space-y-6">
              {courses.map((course, index) => (
                <Card key={index} className="bg-afro-cream border-afro-gold hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-afro-black mb-3">{course.title}</h4>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-afro-brown">
                      <span>📚 {course.duration}</span>
                      <span>📊 {course.level}</span>
                      <span>👥 {course.students} enrolled</span>
                    </div>
                    <Button 
                      size="sm"
                      className="bg-afro-gold hover:bg-afro-gold-dark text-afro-black font-semibold"
                    >
                      Start Learning Free
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button 
                className="bg-afro-brown hover:bg-afro-brown-dark text-white font-semibold px-6 py-3"
              >
                📖 Browse All Courses
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsLearning;
