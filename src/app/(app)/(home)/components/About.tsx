import React from 'react';
import AboutMain from './AboutMain';
import AboutModel from '@/models/About';
import dbConnect from '@/lib/dbConnect';



async function About() {
  try {
    // Connect to the database
    await dbConnect();

    // Fetch data from the database
    const data = await AboutModel.find({});

    // Map and filter data
    const tempData = data.map((item) => ({ text: item.text, index: 1 }));
    const filteredData = tempData.filter((item) => item.index === 1);

    // Handle case where no data matches
    const [about1] = filteredData;

    if (!about1) {
      throw new Error('No about data found.');
    }

    // Render the main component
    return (
      <>
        <AboutMain about={about1.text} />
      </>
    );
  } catch (error) {
    // Handle errors
    console.error('Error fetching about data:', error);
    return (
      <>
        <p>Failed to load about data.</p>
      </>
    );
  }
}

export default About;
