import React from 'react';
import { Building, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Experience } from '../types';

export const ExperienceSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const experiences: Experience[] = [
    {
      id: 1,
      title: 'Computer Science Student',
      company: 'KL University',
      location: 'Vijayawada, India',
      startDate: '2022-09',
      endDate: 'Present',
      description: [
        'Pursuing Bachelor of Technology in Computer Science and Engineering',
        'Specialized in Artificial Intelligence and Machine Learning',
        'Maintained strong academic performance with focus on practical applications',
        'Actively participated in coding competitions and technical workshops'
      ],
      type: 'education'
    },
    {
      id: 2,
      title: 'AI/ML Intern',
      company: 'Tech Innovation Lab',
      location: 'Remote',
      startDate: '2024-06',
      endDate: '2024-08',
      description: [
        'Developed machine learning models for data analysis and prediction',
        'Implemented natural language processing solutions for chatbot systems',
        'Collaborated with senior developers on AI-powered applications',
        'Gained hands-on experience with TensorFlow and deep learning frameworks'
      ],
      type: 'work'
    },
    {
      id: 3,
      title: 'Web Development Intern',
      company: 'Digital Solutions Inc.',
      location: 'Hyderabad, India',
      startDate: '2023-12',
      endDate: '2024-02',
      description: [
        'Built responsive web applications using React and modern JavaScript',
        'Developed RESTful APIs and integrated with frontend applications',
        'Collaborated with design team to implement user-friendly interfaces',
        'Learned industry best practices for web development and deployment'
      ],
      type: 'work'
    },
    {
      id: 4,
      title: 'Higher Secondary Education',
      company: 'Narayana Junior College',
      location: 'Vijayawada, India',
      startDate: '2020-06',
      endDate: '2022-05',
      description: [
        'Completed Intermediate education with focus on Mathematics, Physics, and Chemistry',
        'Achieved excellent academic performance with strong foundation in sciences',
        'Participated in various science exhibitions and technical competitions',
        'Developed early interest in computer science and programming'
      ],
      type: 'education'
    }
  ];

  const formatDate = (dateString: string) => {
    if (dateString === 'Present') return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-16">
            Experience & Education
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>

              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative mb-12 ${
                    index % 2 === 0 ? 'md:text-right' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

                  {/* Content Card */}
                  <div
                    className={`ml-16 md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:pr-8'
                    } ${
                      isVisible
                        ? 'opacity-100 translate-x-0'
                        : `opacity-0 ${
                            index % 2 === 0 ? 'translate-x-8' : '-translate-x-8'
                          }`
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                      {/* Header */}
                      <div className="flex items-center mb-3">
                        {exp.type === 'work' ? (
                          <Building className="w-5 h-5 text-blue-600 mr-2" />
                        ) : (
                          <GraduationCap className="w-5 h-5 text-purple-600 mr-2" />
                        )}
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            exp.type === 'work'
                              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                              : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                          }`}
                        >
                          {exp.type === 'work' ? 'Work' : 'Education'}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                        {exp.title}
                      </h3>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 text-gray-600 dark:text-gray-300">
                        <div className="flex items-center mb-2 sm:mb-0">
                          <Building className="w-4 h-4 mr-1" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <div className="flex items-center mb-4 text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="text-sm">
                          {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                        </span>
                      </div>

                      <ul className="space-y-2">
                        {exp.description.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-gray-600 dark:text-gray-300 text-sm flex items-start"
                          >
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};