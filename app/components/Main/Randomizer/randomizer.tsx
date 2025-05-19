'use client'
import { useRef, useState } from 'react';
import styles from './randomizer.module.scss'
import Image from 'next/image';
import { positions } from './utils';
import { Htag } from '../../Htag/htag';
import { Ptag } from '../../Ptag/ptag';
import { Glare } from '../../Сircle/glare';
import { Button } from '../../Button/button';
import { motion, useInView } from 'framer-motion';



export const Randomizer = ()=>{
    // Угловое положение бутылки (в градусах)
  const [angle, setAngle] = useState(0);
  // Флаг состояния вращения, чтобы игнорировать повторные клики
  const [isSpinning, setIsSpinning] = useState(false);
  // Индекс выбранной позиции (для подсветки и модального окна)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  // Флаг отображения модального окна
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Используем ref для хранения запланированного выбранного индекса во время вращения
  const plannedIndex = useRef<number | null>(null);



  // Обработчик клика по бутылке – запускает вращение
  const handleSpin = () => {
    if (isSpinning) return;           // игнорируем, если уже крутится
    if (isModalOpen) return;          // игнорируем, если модальное окно ещё открыто

    setIsSpinning(true);
    setSelectedIndex(null);           // сбрасываем предыдущий выбор (убираем подсветку)
    setIsModalOpen(false);

    // Случайно выбираем одну из 4 поз
    const targetIdx = Math.floor(Math.random() * positions.length);
    plannedIndex.current = targetIdx as number;

    // Вычисляем конечный угол вращения бутылки, чтобы она указывала на выбранный квадрат
    const currentRotation = angle % 360;
    let diff = positions[targetIdx].angle - currentRotation;
    if (diff < 0) diff += 360;
    if (diff === 0) diff = 360;  // если бутылка уже указывает на цель, всё равно крутим на 360°

    // Добавляем несколько полных оборотов (например, от 2 до 4 дополнительных оборотов)
    const extraSpins = 2 + Math.floor(Math.random() * 3);  // 2, 3 или 4 дополнительных оборота
    const newAngle = angle + diff + extraSpins * 360;

    setAngle(newAngle);
    // Когда анимация вращения завершится (onTransitionEnd), откроем модал и подсветим квадрат
  };

  // Закрытие модального окна
  const handleCloseModal = () => {
    setIsModalOpen(false);
    // (Не сбрасываем selectedIndex, чтобы подсветка оставалась до следующего вращения)
  };

  // Обработчик по завершению анимации вращения бутылки
  const handleTransitionEnd = () => {
    if (isSpinning) {
      setIsSpinning(false);
      setSelectedIndex(plannedIndex.current);
      setIsModalOpen(true);
    }
  };

  const containerRef = useRef(null);
  
  const isInView = useInView(containerRef, {
    once: true, 
    margin: "-50px", 
  });

  return (
    <motion.div className={styles.wrapper} id='randomizer' initial={{ x: 0, opacity: 0 }} ref={containerRef}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 2.4, delay: 0.2 }}>
      
        <Htag size="large" className={styles.title}>КРУТИ И ДЕЙСТВУЙ</Htag>
        <Ptag font='regular' size='medium' className={styles.ptag}>«Куда укажет бутылочка? Открой свою позу на сегодня.Начни игру с прикосновений»</Ptag>
      
   
    <div className={styles.container}>
        {/* Четыре квадрата-позиции по сторонам света */}
      
      {positions.map((pos, index) => (
        <div 
          key={pos.id} 
          className={`${styles.square} ${styles[pos.id]} ${selectedIndex === index ? styles.selected : ''}`}
        >
        <Image quality={50} src={pos.image} alt="icon" className={styles.icon} width={200} height={150} unoptimized/>
        </div>
      ))}

      {/* Изображение бутылки в центре. При клике запускается вращение. */}
      
      <Image quality={50} src="/lubric_berry.png"        /* путь к изображению бутылки (замените на фактический) */
        alt="Бутылка"
        className={`${styles.bottleImage} ${isSpinning ? styles.spinning : ''}`}
        style={{ transform: `rotate(${angle}deg)` }}
        onClick={handleSpin}
        onTransitionEnd={handleTransitionEnd} width={200} height={500} unoptimized/>

      {/* Модальное окно с информацией о выбранной позе */}
      {isModalOpen && selectedIndex !== null && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2>{positions[selectedIndex].name}</h2>
             <p>{positions[selectedIndex].description}</p>
            <Button font='medium' color='neon' targ={false} link='/poses' className={styles.btn}>Подробнее</Button>
            <button onClick={handleCloseModal}>Закрыть</button>
          </div>
        </div>
      )}
    </div>



    <Glare color='' top='10%' left='20%' />
    <Glare color='#C307A6' top='80%' left='80%' />
    <Glare color='white' top='60%' left='30%' />
    <Glare color='' top='80%' left='10%' />
    <Glare color='#C307A6' top='20%' left='80%' />
    </motion.div>
  );
};
