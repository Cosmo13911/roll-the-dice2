"use client";

import { useState } from 'react';
import Form from '@/components/Form.jsx';
import GameBoard from '@/components/GameBoard.jsx';
import ScoreBoard from '@/components/Score.jsx';

import '@/styles/globals.css'

export default function Home() {
    const [gameStarted, setGameStarted] = useState(false);
    const [players, setPlayers] = useState([]);

    const handleStartGame = (playerData) => {
        setPlayers(playerData);
        setGameStarted(true);
    };

    return (
        <main>
            {!gameStarted ? (
                <Form onStartGame={handleStartGame} />
            ) : (
                <div className="game-layout">
                    <GameBoard />
                    <ScoreBoard players={players} />
                </div>
            )}
        </main>
    );
}