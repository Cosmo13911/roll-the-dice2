// src/components/GameBoard/Dice.jsx
import React from 'react';
import styles from '@/styles/Dice.module.css';

export default function Dice({ label, onClick, isSpecial }) {
    const btnStyle = {
        border: '2px solid white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '3vw',
        cursor: 'pointer',
        background: isSpecial ? '#323cf8' : 'transparent',
        aspectRatio: '1/1'
    };

    return (
        <div style={btnStyle} onClick={onClick} className="dice-btn">
            {label}
        </div>
    );
}