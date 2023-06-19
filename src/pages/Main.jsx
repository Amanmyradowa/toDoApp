import React from 'react';
import List from '../components/List';
import { ListDatas } from '../datas/listDatas';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className='main'>
      <div className="container">
        <div className="lists">
          {
            ListDatas.map((list, i) => (
              <Link to={'/task'} key={i}>
                <List data={list} />
              </Link>
            ))
          }
          <div className="add_task_btn">
            <Link to={'/addList'}>
              <Button variant="contained">
                <svg width="10" height="10" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 0C4.27614 0 4.5 0.223858 4.5 0.5V3.5H7.5C7.77614 3.5 8 3.72386 8 4C8 4.27614 7.77614 4.5 7.5 4.5H4.5V7.5C4.5 7.77614 4.27614 8 4 8C3.72386 8 3.5 7.77614 3.5 7.5V4.5H0.5C0.223858 4.5 0 4.27614 0 4C0 3.72386 0.223858 3.5 0.5 3.5H3.5V0.5C3.5 0.223858 3.72386 0 4 0Z" fill="black"/>
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main