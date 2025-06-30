import React from 'react';

const SelectSederPage: React.FC = () => {
  const sederOptions = [
    'זרעים',
    'מועד', 
    'נשים',
    'נזיקין',
    'קדשים',
    'טהרות'
  ];

  return (
    <main className="min-h-screen bg-stone-200 p-8 flex flex-col items-center justify-center">
      <div className="w-1/2 space-y-6">
        {sederOptions.map((seder, index) => (
          <button
            key={index}
            className="w-full py-8 px-8 bg-stone-300 border-2 border-stone-600 text-stone-800 text-3xl font-semibold hover:bg-stone-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-stone-500 block"
            onClick={() => {
              // TODO: Handle seder selection
              console.log(`Selected: ${seder}`);
            }}
          >
            {seder}
          </button>
        ))}
      </div>
    </main>
  );
};

export default SelectSederPage;