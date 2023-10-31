import React from 'react'
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./Skills.css";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Skills(){
    const percentage1 = 97;
    const percentage2 = 95;
    const percentage3 = 85;
    const percentage4 = 80;
    const percentage5 = 70;
    return(
        <>
        <div className='skills-style' id="skills">
            <h1>Skills</h1>
            <h5>You can see my skills here</h5>
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={35}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className='item'>
                        <CircularProgressbar value={percentage1} text={`${percentage1}%`} styles={{path: {stroke:'#B68EA7'} , text: {fill: 'black',fontSize: '18px',}}}/>;
                        <h2>HTML</h2>
                    </div> 
                </SwiperSlide>
                <SwiperSlide>
                   <div className='item'>
                        <CircularProgressbar value={percentage2} text={`${percentage2}%`} styles={{path: {stroke:'#B68EA7'} , text: {fill: 'black',fontSize: '18px',}}}/>;
                        <h2>CSS</h2>
                    </div>   
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'>
                        <CircularProgressbar value={percentage3} text={`${percentage3}%`} styles={{path: {stroke:'#B68EA7'} , text: {fill: 'black',fontSize: '18px',}}}/>;
                        <h2>JavaScript</h2>
                    </div> 
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'>
                        <CircularProgressbar value={percentage4} text={`${percentage4}%`} styles={{path: {stroke:'#B68EA7'} , text: {fill: 'black',fontSize: '18px',}}}/>;
                        <h2>Bootstrap</h2>
                    </div> 
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'>
                        <CircularProgressbar value={percentage5} text={`${percentage5}%`} styles={{path: {stroke:'#B68EA7'} , text: {fill: 'black',fontSize: '18px',}}}/>;
                        <h2>React</h2>
                    </div> 
                </SwiperSlide>
            </Swiper>
        </div>
        </>
    );
}

export default Skills;
