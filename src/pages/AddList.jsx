import React from 'react';
import Button from '@mui/material/Button';

const AddList = () => {

  const addTask = () => {
    console.log('ADD TASK')
  }

  return (
    <div className="add_list_page">
      <div className='container'>
        <div className="add_list">
          <div className="add_list_input">
            <input type="text" />
            <span>
              <svg width="10" height="10" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L2.5 1.79289L3.64645 0.646447C3.84171 0.451184 4.15829 0.451184 4.35355 0.646447C4.54882 0.841709 4.54882 1.15829 4.35355 1.35355L3.20711 2.5L4.35355 3.64645C4.54882 3.84171 4.54882 4.15829 4.35355 4.35355C4.15829 4.54882 3.84171 4.54882 3.64645 4.35355L2.5 3.20711L1.35355 4.35355C1.15829 4.54882 0.841709 4.54882 0.646447 4.35355C0.451184 4.15829 0.451184 3.84171 0.646447 3.64645L1.79289 2.5L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="black"/>
              </svg>
            </span>
          </div>
          <Button onClick={addTask} variant="contained">Add task</Button>
        </div>
      </div>
    </div>
  )
}

export default AddList