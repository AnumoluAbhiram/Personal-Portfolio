import React from 'react';
import { Code, Database, Globe, Wrench } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Skill } from '../types';

export const About: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const skills: Skill[] = [
    { name: 'Python', category: 'languages', proficiency: 90 },
    { name: 'JavaScript', category: 'languages', proficiency: 85 },
    { name: 'Java', category: 'languages', proficiency: 80 },
    { name: 'C++', category: 'languages', proficiency: 75 },
    { name: 'React', category: 'frontend', proficiency: 85 },
    { name: 'HTML/CSS', category: 'frontend', proficiency: 90 },
    { name: 'Bootstrap', category: 'frontend', proficiency: 80 },
    { name: 'Node.js', category: 'backend', proficiency: 80 },
    { name: 'Flask', category: 'backend', proficiency: 75 },
    { name: 'MySQL', category: 'backend', proficiency: 80 },
    { name: 'TensorFlow', category: 'tools', proficiency: 85 },
    { name: 'Git', category: 'tools', proficiency: 85 },
  ];

  const skillCategories = [
    { name: 'Languages', icon: Code, category: 'languages' as const },
    { name: 'Frontend', icon: Globe, category: 'frontend' as const },
    { name: 'Backend', icon: Database, category: 'backend' as const },
    { name: 'Tools', icon: Wrench, category: 'tools' as const },
  ];

  return (
    <section
      id="about"
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
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                Hello! I'm Abhiram Anumolu
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  I'm a dedicated Computer Science student at KL University with a strong passion 
                  for Artificial Intelligence, Machine Learning, and Web Development. I enjoy 
                  turning complex problems into innovative, efficient solutions.
                </p>
                <p>
                  My experience spans across various domains including AI/ML model development,
                  full-stack web development, and mobile app development. I'm particularly 
                  interested in applying machine learning to solve real-world problems.
                </p>
                <p>
                  I believe in continuous learning and staying current with emerging technologies.
                  My goal is to leverage technology to create impactful solutions that benefit society.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skillCategories.map((category) => {
                  const categorySkills = skills.filter(
                    (skill) => skill.category === category.category
                  );
                  const Icon = category.icon;

                  return (
                    <div
                      key={category.category}
                      className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6"
                    >
                      <div className="flex items-center mb-4">
                        <Icon className="w-5 h-5 text-blue-600 mr-2" />
                        <h4 className="font-semibold text-gray-800 dark:text-white">
                          {category.name}
                        </h4>
                      </div>
                      <div className="space-y-3">
                        {categorySkills.map((skill) => (
                          <div key={skill.name}>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm text-gray-600 dark:text-gray-300">
                                {skill.name}
                              </span>
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                {skill.proficiency}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                                style={{
                                  width: isVisible ? `${skill.proficiency}%` : '0%',
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};