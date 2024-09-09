import { useEffect, useState } from 'react';
import axios from 'axios';

const Main = () => {
  const [csvData, setCsvData] = useState<Array<string>>([]);
  const [rewardCount, setRewardCount] = useState<number>(0);
  const [rewardSelect, setRewardSelect] = useState<string>('');
  useEffect(() => {
    fetchCSVData();
  }, []);

  // get and parse the CSV
  const fetchCSVData = () => {
    const csvUrl =
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vReufc-Lma_vkcUi6Jovug6UVeWWuT1yLHVOfwSfIrMbVG1rJmgHAKvEvsVtado8ybIN3VvgmG2SbVW/pub?output=csv';

    axios
      .get(csvUrl)
      .then((response) => {
        const rows = response.data.split(/\r?\n/);
        rows.shift();
        setCsvData(rows);
        setRewardCount(rows.length);
        //console.log(csvData);
      })
      .catch((error) => {
        console.error('Error fetching CSV data:', error);
      });
  };

  const randomNumberInRange = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleRewardSelect = () => {
    let num = randomNumberInRange(0, rewardCount - 1);
    alert(num);
    setRewardSelect(csvData[num]);
    csvData.splice(num, 1);
    setRewardCount(csvData.length);
    console.log(csvData);
  };

  return (
    <div>
      <h2>Reward Criteria</h2>
      <ul className=' p-3 font-bold text-center text-2xl'>
        {csvData.length ? (
          csvData.map((csv, i) => <li key={i}>{csv}</li>)
        ) : (
          <li>Loading Conditions</li>
        )}
        <div className='mt-5'>
          <h2>The reward goes to: {rewardSelect}</h2>
          <button
            className='rounded-lg bg-primary hover:bg-primary-hover hover:text-white mb-5 px-3 py-2'
            onClick={handleRewardSelect}
          >
            Select Reward
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Main;
