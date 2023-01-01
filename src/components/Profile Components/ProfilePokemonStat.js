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
        data: [120, 120, 120, 120, 120, 120],
        backgroundColor: [
          'rgba(74, 222, 128, 0.8)',
          'rgba(248, 113, 113, 0.8)',
          'rgba(96, 165, 250, 0.8)',
          'rgba(156, 163, 175, 0.8)',
          'rgba(251, 191, 36, 0.8)',
          'rgba(45, 212, 191, 0.8)',
        ],
        hoverBackgroundColor: [
          'rgba(74, 222, 128)',
          'rgba(248, 113, 113)',
          'rgba(96, 165, 250)',
          'rgba(156, 163, 175)',
          'rgba(251, 191, 36)',
          'rgba(45, 212, 191)',
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
