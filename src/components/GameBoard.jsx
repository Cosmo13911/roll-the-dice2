"use client";

import React, { useState } from 'react';
import styles from '@/styles/Dice.module.css';
import Dice from './Dice.jsx';

export default function GameBoard() {
    const [diceResults, setDiceResults] = useState([]);
    const [totalPoints, setTotalPoints] = useState(0);

    // ฟังก์ชันทอยเต๋าตามจำนวน n (Logic จาก script.js)
    const rollDice = (n) => {
        if (n === '+1') {
            setTotalPoints(prev => prev + 1);
            return;
        }

        const newResults = [];
        let sum = 0;
        for (let i = 0; i < n; i++) {
            const num = Math.floor(Math.random() * 6) + 1;
            newResults.push(num);
            sum += num;
        }
        setDiceResults(newResults);
        setTotalPoints(sum);
    };

    // คำนวณทรัพยากร (Logic จาก function calculate ใน script.js)
    const calculateRes = (divider) => {
        const amount = Math.floor(totalPoints / divider);
        const next = divider - (totalPoints % divider);
        return { amount, next };
    };

    const resources = [
        { name: 'Food', img: '/images/food.png', div: 2 },
        { name: 'Wood', img: '/images/wood.png', div: 3 },
        { name: 'Clay', img: '/images/clay.png', div: 4 },
        { name: 'Stone', img: '/images/stone.png', div: 5 },
        { name: 'Gold', img: '/images/gold.png', div: 6 },
    ];

    return (
        <div className={styles.container}>
            {/* ฝั่งซ้าย: ปุ่มทอยเต๋า */}
            <div className={styles.leftContainer}>
                {[1, 2, 3, 4, 5, 6, 7].map(num => (
                    <Dice key={num} label={num} onClick={() => rollDice(num)} />
                ))}
                <Dice label="+1" isSpecial onClick={() => rollDice('+1')} />
            </div>

            {/* ฝั่งขวา: แสดงผลทรัพยากรและแต้ม */}
            <div className={styles.rightContainer}>
                <div className={styles.supplyContainer}>
                    {resources.map(res => {
                        const { amount, next } = calculateRes(res.div);
                        return (
                            <div key={res.name} className={styles.resourceItem}>
                                <img src={res.img} alt={res.name} />
                                <p className={styles.resourceValue}>
                                    {amount}<sup>+{next}</sup>
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className={styles.dicePointContainer}>
                    <div className={`${styles.dicePoint} styles.totalPoint`}>
                        {totalPoints}
                    </div>
                    {/* แสดงแต้มเต๋าแต่ละลูกเหมือนในไฟล์ index.html */}
                    {[...Array(7)].map((_, i) => (
                        <div key={i} className={styles.dicePoint}>
                            {diceResults[i] || ''}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}