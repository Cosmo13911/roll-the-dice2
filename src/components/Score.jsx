"use client";

import React, { useState } from 'react';
import styles from '@/styles/Score.module.css';

export default function ScoreBoard({ players }) {
    // สร้าง state สำหรับเก็บคะแนนแยกตาม id ผู้เล่น
    const [scores, setScores] = useState({});

    const handleAddScore = (id, value) => {
        if (!value || isNaN(value)) return;
        setScores(prev => ({
            ...prev,
            [id]: (prev[id] || 0) + Number(value)
        }));
    };

    return (
        <div className={styles.scoreContainer}>
            {players.map((player, index) => (
                <div key={index} className={styles.playerScoreBox}>
                    <p className={`${styles.playerName} ${styles[player.color]}`}>
                        {player.name}
                    </p>
                    <p className={styles.currentScore}>{scores[index] || 0}</p>
                    <input
                        type="number"
                        className={styles.scoreInput}
                        placeholder="score"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleAddScore(index, e.target.value);
                                e.target.value = ''; // ล้างช่องหลังกรอกเสร็จ
                            }
                        }}
                    />
                </div>
            ))}
        </div>
    );
}