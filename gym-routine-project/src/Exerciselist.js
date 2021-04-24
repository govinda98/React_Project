import React from 'react';
import Card from './Card';
import './Card.css';

function ExerciseList() {
  return (
    <div>
      <Card title='Chest Exercise' 
      imageUrl='https://workouttrends.com/wp-content/uploads/2013/10/Barbell-Bench-Press.gif' 
      body ='Benchpress' />
    </div>
  );
}

export default ExerciseList;