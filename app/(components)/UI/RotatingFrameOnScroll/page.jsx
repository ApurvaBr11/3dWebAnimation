'use client'
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './styleteight.css'

gsap.registerPlugin(ScrollTrigger);

export default function RotatingPage() {
  useEffect(() => {
    const descriptions = document.querySelectorAll('section .description');
    const circle = document.querySelector('.circle');
    const icons = document.querySelectorAll('.circle .icon');
    const triggers = document.querySelectorAll('.scroll-trigger');

    const update = (i) => {
      circle.style.transform = `rotate(${90 * i}deg)`;

      icons.forEach((el) => {
        el.classList.remove('active');
        el.style.transform = `rotate(${-90 * i}deg)`;
      });
      icons[i].classList.add('active');

      descriptions.forEach((el) => {
        el.classList.remove('active');
      });
      descriptions[i].classList.add('active');
    };

    triggers.forEach((trigger, i) => {
      ScrollTrigger.create({
        trigger: trigger,
        start: 'top center',
        end: 'bottom bottom',
        onEnterBack: () => update(i, 'back'),
        onEnter: () => update(i, 'forward'),
      });
    });
  }, []);

  return (
    <div>
      <span>S</span>croll <span>D</span>own <span>&darr;</span>
      <section>
        <div className="container">
          <div className="content">
            <div className="description active">A</div>
            <div className="description">B</div>
            <div className="description">C</div>
            <div className="description">D</div>
          </div>
          <div className="circle">
            <div className="icon active overflow-hidden">
              <img
                className="scale-150"
                src="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2018/05/Blog_how-to-be-a-web-developer.jpg"
                alt=""
              />
            </div>
            <div className="icon">2</div>
            <div className="icon">3</div>
            <div className="icon">4</div>
          </div>
        </div>
        <div className="scroll-trigger"></div>
        <div className="scroll-trigger"></div>
        <div className="scroll-trigger"></div>
        <div className="scroll-trigger"></div>
      </section>
      <span>S</span>croll <span>U</span>p <span>&uarr;</span>
    </div>
  );
}
