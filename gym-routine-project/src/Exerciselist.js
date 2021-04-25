import React from 'react';
import Card from './Card';
import './Card.css';

function ExerciseList() {
  return (
      <div className='float-parent'>
          <div className='float-child'>
              <Card title='Chest Exercise'
                  imageUrl='https://davidblyth.co.uk/wp-content/uploads/2020/09/00251301-Barbell-Bench-Press_Chest_1080.gif'
                  body='Benchpress' 
                  demo='https://www.youtube.com/watch?v=SCVCLChPQFY'/>
          </div>
          <div className='float-child'>
            <Card title='Tricep Exercise'
                imageUrl='https://www.aleanlife.com/wp-content/uploads/2020/09/dumbbell-kickbacks.gif'
                body='Tricep Kickback' 
                demo='https://www.youtube.com/watch?v=6SS6K3lAwZ8'/>
          </div>
          <div className='float-child'>
            <Card title='Back Exercise'
                imageUrl='https://www.oldschoollabs.com/wp-content/uploads/2020/12/02921301-Dumbbell-Bent-over-Row_back_Back_720.gif'
                body='Dumbbell Row' 
                demo='https://www.youtube.com/watch?v=pYcpY20QaE8'/>
          </div>
          <div className='float-child'>
            <Card title='Bicep Exercise'
                imageUrl='https://makepersonality.com/wp-content/uploads/2019/11/6-5.gif'
                body='Seated Dumbbell Curls' 
                demo='https://www.youtube.com/watch?v=BsULGO70tcU'/>
          </div>
      </div>
  );
}

export default ExerciseList;