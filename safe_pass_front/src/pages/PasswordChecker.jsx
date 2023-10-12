// (c) URJC - Safe Pass 2023, rights reserved.

import React, { useState } from 'react';

const PasswordChecker = () => {
    const [password, setPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const checkPasswordStrength = () => {
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasDigit = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);
        const length = password.length;

        if (hasUppercase && hasLowercase && hasDigit && hasSpecialChar && length >= 14) {
            setPasswordStrength('Fuerte');
        } else if (hasUppercase && hasLowercase && (hasDigit || hasSpecialChar) && (length >= 10 && length < 14)) {
            setPasswordStrength('Media');
        } else {
            setPasswordStrength('Débil');
        }
    };

    const getBarColor = () => {
        switch (passwordStrength) {
            case 'Fuerte':
                return 'bg-green-300';
            case 'Media':
                return 'bg-orange-300';
            case 'Débil':
            default:
                return 'bg-red-300';
        }
    };

    const getBarLenght = () => {
        switch (passwordStrength) {
            case 'Fuerte':
                return 'w-full';
            case 'Media':
                return 'w-1/2';
            case 'Débil':
            default:
                return 'w-1/4';
        }
    }

    return (
        <div className="my-4 p-4 border border-gray-300 rounded">
            <h2 className="text-lg font-semibold">Comprobador de Contraseñas</h2>
            <input
                type={showPassword ? 'text' : 'password'}
                className="w-full p-2 my-2 border border-gray-300 rounded"
                placeholder="Introduce tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                onClick={checkPasswordStrength}
            >
                Comprobar
            </button>
            <button
                className="bg-gray-300 text-black p-2 ml-2 rounded hover:bg-gray-400"
                onClick={() => setShowPassword(!showPassword)}
            >
                {showPassword ? 'Ocultar' : 'Mostrar'} Contraseña
            </button>
            {passwordStrength && (
                <div className={`mt-4 p-2 rounded ${getBarColor()} ${getBarLenght()}`}>
                    <p>{passwordStrength}</p>
                </div>
            )}
        </div>
    );
};

export default PasswordChecker;
