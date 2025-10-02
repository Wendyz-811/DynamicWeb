import React from 'react'
import Accordion from '../components/Accordion'

const PROGRAMMING_FAQ = [
  {
    id: '123',
    label: 'What is React and why should I learn it?',
    content:
      'React is a powerful JavaScript library for building user interfaces, especially web applications.',
  },
  {
    id: '456',
    label: 'How do React components work?',
    content:
      'React components are like custom HTML elements that you can reuse throughout your application. They can accept inputs (called props) and return JSX to describe what should appear on the screen. ',
  },
  {
    id: '789',
    label: 'Can I get a job after learning React?',
    content:
      'Maybe. You should study hard.',
  },

]

const AccordionPage = () => {
  return (
    <div className="min-h-screen bg-whit-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            React Learning FAQ
          </h1>
          <p className="text-lg text-gray-800">
            Click on any question to see the detailed answer.
          </p>
        </div>
        
        <div className="bg-white-100 rounded-xl shadow-lg p-6">
          <Accordion items={PROGRAMMING_FAQ} />
        </div>
      </div>
    </div>
  )
}

export default AccordionPage