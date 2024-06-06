import React from 'react';

// Styling with Tailwind CSS https://tailwindcss.com
const Card = ({
  title,
  thumbnail = {},
  extract_html,
  textColor = '',
  bgColor = 'white',
}) => {
  const color = textColor ? `text-${textColor}` : 'gray-800';
  return (
    <div className="font-sans max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {thumbnail.source && (
        <div
          className="bg-cover h-64"
          style={{ backgroundImage: `url('${thumbnail.source}')` }}
        />
      )}
      <div data-id="body" className={`px-6 py-4 bg-${bgColor}`}>
        <h2 data-id="title" className={`font-bold text-2xl mb-2 mt-0 ${color}`}>
          {title}
        </h2>
        <div
          className="text-gray-700 text-base"
          dangerouslySetInnerHTML={{ __html: extract_html }}
        />
      </div>
    </div>
  );
};

export default Card;
