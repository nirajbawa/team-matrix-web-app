import React from 'react';
import SponsorsModel from '@/models/Sponsors';
import SponsorsAboutModel from '@/models/SponsorsAbout';
import SponsorsMain from './SponsorsMain';
import dbConnect from '@/lib/dbConnect';

async function Sponsors() {

  await dbConnect();
  const data = await SponsorsModel.find({});

  const temp = data.map((item: any) => ({ image: item.image, name: item.name, section: item.section }));

  const c1data = temp.filter((item: any) => (item?.section === 1));
  const c2data = temp.filter((item: any) => (item?.section === 2));

  const sponsorsAboutData = await SponsorsAboutModel.find({});
  let filteredData = sponsorsAboutData.map((item: any) => ({ text: item.text, index: item.index }));

  const temp2 = filteredData.filter((item: any) => item.index === 1);
  const [about1] = temp2;

  const temp3 = filteredData.filter((item: any) => item.index === 2);
  const [about2] = temp3;


  return (
    <>
      <SponsorsMain about1={about1} about2={about2} c1data={c1data} c2data={c2data} />
    </>
  )
}

export default Sponsors;