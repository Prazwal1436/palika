import React from 'react'
import { PieChart, Pie,  Cell, ResponsiveContainer,Legend,Tooltip } from 'recharts';

export default function PieCharts() {
  const data = [
    { name: 'Female', value: 100 },
    { name: 'Male', value: 300 },
    { name: 'Gay', value: 300 },
    
  ];
  const piedata = data
  const COLORS = ['#36A2EB', '#FF4069','#FFCE56','#4BC0C0','#9966FF','#FF9F40'];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
    <PieChart width={400} height={400}>
    <Legend/>
      <Tooltip/>
      <Pie
        data={piedata}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        innerRadius={0}
        outerRadius={120}
        fill="#8884d8"
        dataKey="value"
      >
        {piedata.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      
    </PieChart>
  </ResponsiveContainer>
  )
}
