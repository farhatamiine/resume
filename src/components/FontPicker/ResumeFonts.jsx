import FontPicker from 'font-picker-react';
import React from 'react';

export default function ResumeFonts({ pickerId }) {
  const [activeFontFamily, setActiveFontFamily] = React.useState('Arial');

  return (
    <div>
      <FontPicker
        className="bg-gray-500"
        sort="popularity"
        pickerId={pickerId}
        apiKey="AIzaSyCzCH9HFOw_CY0-IsOd2NjZbC9dvczriUc"
        activeFontFamily={activeFontFamily}
        onChange={nextFont => setActiveFontFamily(nextFont.family)}
      />
    </div>
  );
}
