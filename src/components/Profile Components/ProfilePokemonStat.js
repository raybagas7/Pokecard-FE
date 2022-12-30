import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const ProfilePokemonStat = () => {
  const data = {
    labels: ['Hp', 'Attack', 'Defense', 'Sp.Defense', 'Sp.Attack', 'Speed'],
    datasets: [
      {
        label: ' ',
        data: [70, 90, 90, 90, 135, 125],
        backgroundColor: [
          'rgba(72, 191, 83, 0.8)',
          'rgba(200, 8, 8, 0.8)',
          'rgba(47, 87, 209, 0.8)',
          'rgba(168, 169, 173, 0.8)',
          'rgba(255, 191, 0, 0.8)',
          'rgba(3, 187, 153, 0.8)',
        ],
        hoverBackgroundColor: [
          'rgba(72, 191, 83)',
          'rgba(200, 8, 8)',
          'rgba(47, 87, 209)',
          'rgba(168, 169, 173)',
          'rgba(255, 191, 0)',
          'rgba(3, 187, 153)',
        ],
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.5)',
      },
    ],
  };

  const options = {
    color: '#fff',
    // responsive: true,
    maintainAspectRaion: false,
    plugins: {
      legend: {
        labels: {
          font: {
            size: 10,
            family: 'Righteous',
          },
        },
      },
    },
    scales: {
      r: {
        ticks: {
          color: 'white',
          //   showLabelBackdrop: false,
          backdropColor: 'rgb(22, 27, 34, 0.5)',
        },
        grid: { color: 'rgba(255, 255, 255, 0.6)' },
      },
    },
  };

  return (
    <div className="flex h-full w-full flex-1 items-center justify-center rounded-tl-lg rounded-bl-lg">
      <PolarArea data={data} options={options} />
    </div>
  );
};

export default ProfilePokemonStat;
