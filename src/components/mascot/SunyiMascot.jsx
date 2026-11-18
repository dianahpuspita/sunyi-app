import React from 'react';

/**
 * SunyiMascot - 2D Flat Illustrated Mascot of SUNYI
 * Based on the hand-shaped character with cute expressive face & yellow swoop
 * Supported expressions: 'winking' | 'happy' | 'confused' | 'love' | 'sleep' | 'cheer'
 */
export default function SunyiMascot({ expression = 'happy', size = 160, className = '' }) {
  return (
    <div
      className={`inline-block relative select-none ${className}`}
      style={{ width: size, height: size * 0.95 }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 200 190"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        {/* Floating Sparks / Stars for Cheer & Happy */}
        {(expression === 'happy' || expression === 'cheer') && (
          <g className="animate-pulse">
            {/* Top right spark */}
            <path d="M165 20L169 32L181 36L169 40L165 52L161 40L149 36L161 32Z" fill="#FFE58A" />
            {/* Lavender star left */}
            <path d="M25 45L28 53L36 56L28 59L25 67L22 59L14 56L22 53Z" fill="#B9A7F5" />
            {/* Coral small dot */}
            <circle cx="178" cy="70" r="5" fill="#FF8278" />
            <circle cx="30" cy="95" r="4" fill="#8EDCC1" />
          </g>
        )}

        {/* Floating Hearts for Love */}
        {expression === 'love' && (
          <g>
            <path
              d="M165 35 C165 28 175 25 178 32 C181 25 191 28 191 35 C191 44 178 52 178 52 C178 52 165 44 165 35 Z"
              fill="#FF8278"
            />
            <path
              d="M20 60 C20 54 28 52 30 57 C32 52 40 54 40 60 C40 67 30 73 30 73 C30 73 20 67 20 60 Z"
              fill="#FFC99F"
            />
          </g>
        )}

        {/* Floating '?' for Confused */}
        {expression === 'confused' && (
          <g>
            <text x="160" y="45" fill="#303F83" fontSize="32" fontWeight="bold" fontFamily="Fredoka, sans-serif">
              ?
            </text>
          </g>
        )}

        {/* Floating 'z z z' for Sleep */}
        {expression === 'sleep' && (
          <g className="opacity-80">
            <text x="155" y="40" fill="#4777D1" fontSize="16" fontWeight="bold" fontFamily="Fredoka, sans-serif">
              z
            </text>
            <text x="168" y="28" fill="#4777D1" fontSize="20" fontWeight="bold" fontFamily="Fredoka, sans-serif">
              z
            </text>
            <text x="182" y="18" fill="#303F83" fontSize="24" fontWeight="bold" fontFamily="Fredoka, sans-serif">
              z
            </text>
          </g>
        )}

        {/* Bottom Butter-Yellow Swoop / Base */}
        <path
          d="M25 135 C35 165 140 175 175 140 C185 130 178 122 165 125 C135 148 55 145 35 125 C25 115 18 122 25 135 Z"
          fill="#FFE58A"
        />

        {/* Main Body: 2D Hand Silhouette in Deep Blue */}
        <path
          d="M40 130 
             C30 115 32 90 42 75 
             C48 65 60 70 62 82 
             C65 55 78 40 92 48 
             C102 54 100 75 98 85 
             C106 50 120 38 132 45 
             C144 52 140 75 135 92 
             C145 78 158 75 168 85 
             C178 95 172 118 160 135 
             C145 155 55 155 40 130 Z"
          fill="#303F83"
        />

        {/* Left Thumb / Wave curve */}
        <path
          d="M40 125 C25 110 22 92 30 82 C38 72 48 78 50 90 C52 105 50 118 40 125 Z"
          fill="#303F83"
        />

        {/* Face Elements */}
        {/* White / Soft Cream Inner Face Glow */}
        <circle cx="102" cy="115" r="30" fill="#FFF8ED" opacity="0.95" />

        {/* Eyes & Mouth depending on Expression */}
        {expression === 'winking' ? (
          <>
            {/* Left Eye: Open & Happy */}
            <ellipse cx="90" cy="112" rx="4" ry="5.5" fill="#303F83" />
            <circle cx="88.5" cy="109.5" r="1.5" fill="#FFFFFF" />
            {/* Right Eye: Cute Wink Arc */}
            <path d="M112 114 Q117 109 122 114" stroke="#303F83" strokeWidth="3" strokeLinecap="round" fill="none" />
            {/* Smile */}
            <path d="M96 122 Q105 131 114 122" stroke="#303F83" strokeWidth="3" strokeLinecap="round" fill="none" />
            {/* Rosy Cheeks */}
            <ellipse cx="84" cy="120" rx="3.5" ry="2" fill="#FF8278" opacity="0.6" />
            <ellipse cx="122" cy="120" rx="3.5" ry="2" fill="#FF8278" opacity="0.6" />
          </>
        ) : expression === 'sleep' ? (
          <>
            {/* Sleeping Arcs */}
            <path d="M85 114 Q92 119 98 114" stroke="#303F83" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M110 114 Q117 119 123 114" stroke="#303F83" strokeWidth="3" strokeLinecap="round" fill="none" />
            {/* Small Peaceful Mouth */}
            <ellipse cx="104" cy="124" rx="2" ry="1.5" fill="#303F83" />
            {/* Cheeks */}
            <ellipse cx="82" cy="119" rx="3" ry="1.8" fill="#FF8278" opacity="0.5" />
            <ellipse cx="125" cy="119" rx="3" ry="1.8" fill="#FF8278" opacity="0.5" />
          </>
        ) : expression === 'confused' ? (
          <>
            {/* One Big Eye, One Small Eye */}
            <circle cx="89" cy="110" r="5" fill="#303F83" />
            <circle cx="87.5" cy="108" r="1.5" fill="#FFFFFF" />
            <circle cx="115" cy="114" r="3.5" fill="#303F83" />
            {/* Tilted Mouth */}
            <path d="M96 125 Q106 121 114 126" stroke="#303F83" strokeWidth="3" strokeLinecap="round" fill="none" />
          </>
        ) : (
          /* Default: Happy / Cheer / Love */
          <>
            {/* Joyful Arched Eyes */}
            <path d="M87 114 Q93 106 99 114" stroke="#303F83" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            <path d="M109 114 Q115 106 121 114" stroke="#303F83" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            {/* Open Happy Smile with Pink Tongue */}
            <path d="M96 120 Q104 133 113 120 Z" fill="#303F83" />
            <path d="M99 125 Q104 131 109 125 Z" fill="#FF8278" />
            {/* Rosy Cheeks */}
            <ellipse cx="83" cy="119" rx="4" ry="2.5" fill="#FF8278" opacity="0.7" />
            <ellipse cx="124" cy="119" rx="4" ry="2.5" fill="#FF8278" opacity="0.7" />
          </>
        )}
      </svg>
    </div>
  );
}

