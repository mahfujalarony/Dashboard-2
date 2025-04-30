import React from 'react';

interface StatsCard {
  id: number;
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change: number;
  changeType: 'increase' | 'decrease' | 'neutral';
}

interface RecentActivity {
  id: number;
  user: string;
  action: string;
  time: string;
  avatar: string;
}

interface ProjectProgress {
  id: number;
  name: string;
  progress: number;
  status: 'on-track' | 'delayed' | 'completed';
  team: string[];
}

const SimplePage: React.FC = () => {
  const statsData: StatsCard[] = [
    {
      id: 1,
      title: 'Total Revenue',
      value: '$45,231',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      change: 12,
      changeType: 'increase',
    },
    {
      id: 2,
      title: 'New Users',
      value: '2,345',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      change: 8.1,
      changeType: 'increase',
    },
    {
      id: 3,
      title: 'Pending Tasks',
      value: '124',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      change: 3.2,
      changeType: 'decrease',
    },
    {
      id: 4,
      title: 'Server Load',
      value: '76.5%',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      change: 0,
      changeType: 'neutral',
    },
  ];

 
  const recentActivities: RecentActivity[] = [
    {
      id: 1,
      user: 'John Doe',
      action: 'Completed project "Dashboard Design"',
      time: '2 min ago',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      user: 'Sarah Smith',
      action: 'Submitted new ticket #1234',
      time: '10 min ago',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      id: 3,
      user: 'Mike Johnson',
      action: 'Updated project status to "In Review"',
      time: '1 hour ago',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      id: 4,
      user: 'Emily Davis',
      action: 'Added new team member to project',
      time: '3 hours ago',
      avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
  ];

  
  const projects: ProjectProgress[] = [
    {
      id: 1,
      name: 'Website Redesign',
      progress: 80,
      status: 'on-track',
      team: [
        'https://randomuser.me/api/portraits/men/5.jpg',
        'https://randomuser.me/api/portraits/women/6.jpg',
        'https://randomuser.me/api/portraits/men/7.jpg',
      ],
    },
    {
      id: 2,
      name: 'Mobile App Development',
      progress: 45,
      status: 'delayed',
      team: [
        'https://randomuser.me/api/portraits/women/8.jpg',
        'https://randomuser.me/api/portraits/men/9.jpg',
      ],
    },
    {
      id: 3,
      name: 'API Integration',
      progress: 100,
      status: 'completed',
      team: [
        'https://randomuser.me/api/portraits/men/10.jpg',
        'https://randomuser.me/api/portraits/women/11.jpg',
        'https://randomuser.me/api/portraits/men/12.jpg',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">


      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsData.map((stat) => (
          <div key={stat.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <p className="text-2xl font-semibold text-gray-800 mt-1">{stat.value}</p>
              </div>
              <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
                {stat.icon}
              </div>
            </div>
            <div className="mt-4">
              <div className={`inline-flex items-center text-sm font-medium ${stat.changeType === 'increase' ? 'text-green-600' : stat.changeType === 'decrease' ? 'text-red-600' : 'text-gray-500'}`}>
                {stat.changeType === 'increase' ? (
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                ) : stat.changeType === 'decrease' ? (
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                ) : null}
                {stat.change !== 0 ? `${stat.change}% from last month` : 'No change'}
              </div>
            </div>
          </div>
        ))}
      </div>

     
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Projects Progress</h2>
            <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
          </div>
          <div className="space-y-6">
            {projects.map((project) => (
              <div key={project.id} className="space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-gray-800">{project.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.status === 'on-track' ? 'bg-green-100 text-green-800' :
                    project.status === 'delayed' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status.replace('-', ' ')}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full ${
                      project.status === 'on-track' ? 'bg-green-500' :
                      project.status === 'delayed' ? 'bg-yellow-500' :
                      'bg-blue-500'
                    }`}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{project.progress}% complete</span>
                  <div className="flex -space-x-2">
                    {project.team.map((member, index) => (
                      <img
                        key={index}
                        className="w-8 h-8 rounded-full border-2 border-white"
                        src={member}
                        alt="Team member"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

  
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Recent Activity</h2>
            <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <img
                  className="w-10 h-10 rounded-full"
                  src={activity.avatar}
                  alt={activity.user}
                />
                <div>
                  <p className="text-sm font-medium text-gray-800">{activity.user}</p>
                  <p className="text-sm text-gray-600">{activity.action}</p>
                  <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

 
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Quick Stats</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 border border-gray-200 rounded-lg text-center">
            <p className="text-sm text-gray-500">Active Projects</p>
            <p className="text-2xl font-bold text-gray-800">12</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg text-center">
            <p className="text-sm text-gray-500">Team Members</p>
            <p className="text-2xl font-bold text-gray-800">24</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg text-center">
            <p className="text-sm text-gray-500">Open Tickets</p>
            <p className="text-2xl font-bold text-gray-800">18</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg text-center">
            <p className="text-sm text-gray-500">Upcoming Deadlines</p>
            <p className="text-2xl font-bold text-gray-800">5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimplePage;