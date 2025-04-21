import { useState } from 'react';
import './index.css';

function App() {
  const [careerXP, setCareerXP] = useState(320);

  const suggestedTracks = [
    { title: 'Data Analyst Beginner Track', match: '87% Match', time: '2 Weeks' },
    { title: 'Marketing Intern Readiness', match: '72% Match', time: '3 Weeks' },
  ];

  const todoList = [
    'Update your LinkedIn profile',
    'Apply for a micro-internship',
    'Complete your resume checklist',
  ];

  return (
    <div className='p-6 space-y-6 font-sans'>
      <h1 className='text-2xl font-bold'>Welcome back, Razak! 🎯</h1>

      <div className='bg-white shadow-md rounded-xl p-4 space-y-2'>
        <h2 className='text-xl font-semibold'>Career Readiness Level</h2>
        <p>Level 3: Career Explorer</p>
        <div className='w-full bg-gray-200 rounded-full h-2.5'>
          <div className='bg-blue-500 h-2.5 rounded-full' style={{ width: `${(careerXP / 500) * 100}%` }} />
        </div>
        <p>{careerXP} XP / 500 XP</p>
      </div>

      <div className='bg-white shadow-md rounded-xl p-4 space-y-4'>
        <h2 className='text-xl font-semibold'>Suggested Career Tracks</h2>
        {suggestedTracks.map((track, index) => (
          <div key={index} className='border p-3 rounded-xl shadow-sm'>
            <h3 className='font-medium text-lg'>{track.title}</h3>
            <p>{track.match} • {track.time}</p>
            <button className='mt-2 px-4 py-1 bg-blue-500 text-white rounded-md'>Start Track</button>
          </div>
        ))}
      </div>

      <div className='bg-white shadow-md rounded-xl p-4 space-y-3'>
        <h2 className='text-xl font-semibold'>This Week's To-Do</h2>
        <ul className='list-disc list-inside space-y-1'>
          {todoList.map((task, idx) => (
            <li key={idx}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
