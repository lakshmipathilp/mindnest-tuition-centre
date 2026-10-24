// Original SVG illustrations for MindNest. These are drawings — not photographs of the real centre.

function Kid({ x, y, skin, hair, shirt, hairStyle = 'short', scale = 1, delay = 0, hand = false }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} className="kid" style={{ animationDelay: `${delay}s` }}>
      {/* crossed legs */}
      <ellipse cx="0" cy="38" rx="34" ry="11" fill="#173B43" opacity="0.9" />
      <ellipse cx="-10" cy="36" rx="16" ry="8" fill="#2b5560" />
      <ellipse cx="10" cy="36" rx="16" ry="8" fill="#2b5560" />
      {/* body */}
      <path d="M-22 36 C-24 8 -16 -6 0 -6 C16 -6 24 8 22 36 Z" fill={shirt} />
      {/* arms */}
      <path d="M-20 4 C-28 16 -22 28 -10 30" stroke={shirt} strokeWidth="9" strokeLinecap="round" fill="none" />
      {hand ? (
        <path d="M20 2 C28 -10 26 -26 22 -34" stroke={shirt} strokeWidth="9" strokeLinecap="round" fill="none" className="raise-hand" />
      ) : (
        <path d="M20 4 C28 16 22 28 10 30" stroke={shirt} strokeWidth="9" strokeLinecap="round" fill="none" />
      )}
      {hand && <circle cx="22" cy="-36" r="6" fill={skin} className="raise-hand" />}
      {/* head */}
      <circle cx="0" cy="-22" r="15" fill={skin} />
      {hairStyle === 'short' && <path d="M-15 -24 C-14 -40 14 -40 15 -24 C8 -31 -8 -31 -15 -24 Z" fill={hair} />}
      {hairStyle === 'long' && (
        <>
          <path d="M-16 -22 C-18 -42 18 -42 16 -22 C16 -8 20 0 17 6 L12 -8 C10 -22 -10 -22 -12 -8 L-17 6 C-20 0 -16 -8 -16 -22 Z" fill={hair} />
        </>
      )}
      {hairStyle === 'bun' && (
        <>
          <circle cx="0" cy="-40" r="7" fill={hair} />
          <path d="M-15 -24 C-14 -38 14 -38 15 -24 C8 -30 -8 -30 -15 -24 Z" fill={hair} />
        </>
      )}
      <circle cx="-5" cy="-21" r="1.6" fill="#173B43" />
      <circle cx="5" cy="-21" r="1.6" fill="#173B43" />
      <path d="M-4 -14 Q0 -10 4 -14" stroke="#173B43" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </g>
  )
}

export function ClassroomIllustration({ className = '' }) {
  return (
    <svg
      className={`illus ${className}`}
      viewBox="0 0 640 520"
      role="img"
      aria-label="Illustration of a friendly teacher and children sitting on floor mats in front of a large teaching screen"
    >
      {/* room */}
      <rect x="0" y="0" width="640" height="520" rx="36" fill="#DCE9D9" />
      <path d="M0 340 H640 V484 a36 36 0 0 1 -36 36 H36 a36 36 0 0 1 -36 -36 Z" fill="#F4DFD2" />
      <path d="M0 340 H640" stroke="#C17D5D" strokeOpacity="0.25" strokeWidth="2" />

      {/* window */}
      <g transform="translate(48 56)">
        <rect width="96" height="108" rx="12" fill="#FFFDF8" stroke="#173B43" strokeOpacity="0.25" strokeWidth="3" />
        <path d="M48 0 V108 M0 54 H96" stroke="#173B43" strokeOpacity="0.2" strokeWidth="3" />
        <circle cx="72" cy="30" r="12" fill="#F4E8BC" className="sun-glow" />
        <path d="M10 100 C24 80 40 90 52 76 C64 62 80 70 90 62 V100 Z" fill="#DCE9D9" />
      </g>

      {/* hanging wall chart */}
      <g transform="translate(500 64)">
        <path d="M20 0 V-16 M80 0 V-16" stroke="#173B43" strokeOpacity="0.4" strokeWidth="2" />
        <rect width="100" height="84" rx="10" fill="#FFFDF8" stroke="#173B43" strokeOpacity="0.25" strokeWidth="3" />
        <rect x="14" y="48" width="14" height="24" rx="3" fill="#C17D5D" />
        <rect x="36" y="34" width="14" height="38" rx="3" fill="#173B43" />
        <rect x="58" y="22" width="14" height="50" rx="3" fill="#F4E8BC" stroke="#173B43" strokeOpacity="0.3" />
        <path d="M14 18 H74" stroke="#173B43" strokeOpacity="0.3" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* TV */}
      <g transform="translate(176 52)">
        <rect width="288" height="190" rx="18" fill="#173B43" />
        <rect x="12" y="12" width="264" height="158" rx="10" fill="#FFFDF8" />
        {/* screen content: simple concept diagram */}
        <circle cx="64" cy="70" r="30" fill="#F4E8BC" />
        <circle cx="64" cy="70" r="12" fill="#C17D5D" />
        <path d="M96 70 H132" stroke="#173B43" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 7" className="dash-flow" />
        <path d="M128 62 L138 70 L128 78" stroke="#173B43" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="146" y="40" width="48" height="60" rx="8" fill="#E8E1F1" />
        <path d="M158 84 L170 56 L182 84 Z" fill="#173B43" />
        <rect x="204" y="40" width="56" height="60" rx="8" fill="#DCE9D9" />
        <rect x="214" y="78" width="9" height="14" rx="2" fill="#173B43" />
        <rect x="227" y="66" width="9" height="26" rx="2" fill="#C17D5D" />
        <rect x="240" y="54" width="9" height="38" rx="2" fill="#173B43" />
        <rect x="28" y="120" width="140" height="8" rx="4" fill="#173B43" opacity="0.18" />
        <rect x="28" y="136" width="96" height="8" rx="4" fill="#173B43" opacity="0.12" />
        <circle cx="236" cy="136" r="14" fill="#C17D5D" opacity="0.9" />
        <path d="M230 136 L234 140 L243 130" stroke="#FFFDF8" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="118" y="176" width="52" height="8" rx="4" fill="#173B43" opacity="0.5" />
      </g>
      <rect x="300" y="244" width="40" height="10" rx="5" fill="#173B43" opacity="0.5" />

      {/* floor mats */}
      <g>
        <rect x="52" y="372" width="170" height="86" rx="24" fill="#E8E1F1" stroke="#173B43" strokeOpacity="0.15" strokeWidth="3" />
        <rect x="236" y="384" width="170" height="86" rx="24" fill="#F4E8BC" stroke="#173B43" strokeOpacity="0.15" strokeWidth="3" />
        <rect x="418" y="372" width="170" height="86" rx="24" fill="#DCE9D9" stroke="#173B43" strokeOpacity="0.15" strokeWidth="3" />
        <path d="M70 392 H204 M70 410 H204" stroke="#173B43" strokeOpacity="0.1" strokeWidth="3" strokeLinecap="round" />
        <path d="M254 404 H388 M254 422 H388" stroke="#173B43" strokeOpacity="0.1" strokeWidth="3" strokeLinecap="round" />
        <path d="M436 392 H570 M436 410 H570" stroke="#173B43" strokeOpacity="0.1" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* students on mats */}
      <Kid x={96} y={372} skin="#E3B38B" hair="#2b2320" shirt="#C17D5D" hairStyle="short" delay={0.1} />
      <Kid x={176} y={384} skin="#C98F66" hair="#2b2320" shirt="#173B43" hairStyle="long" delay={0.7} />
      <Kid x={290} y={398} skin="#F0C7A0" hair="#5a3a28" shirt="#E8E1F1" hairStyle="bun" delay={0.4} hand />
      <Kid x={376} y={398} skin="#B87D56" hair="#1e1a18" shirt="#DCE9D9" hairStyle="short" delay={1.0} />
      <Kid x={474} y={384} skin="#E3B38B" hair="#1e1a18" shirt="#F4E8BC" hairStyle="long" delay={0.3} />
      <Kid x={548} y={374} skin="#D2A074" hair="#3a2a20" shirt="#C17D5D" hairStyle="short" scale={0.95} delay={0.8} />

      {/* teacher */}
      <g transform="translate(130 250)" className="teacher">
        <ellipse cx="0" cy="106" rx="34" ry="8" fill="#173B43" opacity="0.15" />
        <path d="M-20 100 V58 M20 100 V58" stroke="#173B43" strokeWidth="11" strokeLinecap="round" />
        <path d="M-30 62 C-32 24 -22 4 0 4 C22 4 32 24 30 62 Z" fill="#C17D5D" />
        <path d="M-26 28 C-34 44 -30 56 -20 60" stroke="#C17D5D" strokeWidth="11" strokeLinecap="round" fill="none" />
        {/* pointing arm + pointer */}
        <path d="M24 22 C42 14 56 6 70 -6" stroke="#C17D5D" strokeWidth="11" strokeLinecap="round" fill="none" className="point-arm" />
        <path d="M68 -4 L108 -34" stroke="#F4E8BC" strokeWidth="4" strokeLinecap="round" />
        <circle cx="68" cy="-4" r="6" fill="#E3B38B" />
        <circle cx="0" cy="-14" r="19" fill="#E3B38B" />
        <path d="M-20 -18 C-22 -42 22 -42 20 -18 C12 -28 -12 -28 -20 -18 Z" fill="#2b2320" />
        <circle cx="-7" cy="-13" r="1.8" fill="#173B43" />
        <circle cx="7" cy="-13" r="1.8" fill="#173B43" />
        <path d="M-6 -5 Q0 1 6 -5" stroke="#173B43" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>

      {/* floating educational symbols */}
      <g fontFamily="Outfit, sans-serif" fontWeight="700" fill="#173B43">
        <g className="float f1"><circle cx="560" cy="210" r="24" fill="#E8E1F1" /><text x="560" y="219" textAnchor="middle" fontSize="26">π</text></g>
        <g className="float f2"><circle cx="40" cy="250" r="22" fill="#F4E8BC" /><text x="40" y="259" textAnchor="middle" fontSize="24">+</text></g>
        <g className="float f3"><circle cx="596" cy="300" r="20" fill="#F4DFD2" /><text x="596" y="308" textAnchor="middle" fontSize="20">Aa</text></g>
        <g className="float f4">
          <circle cx="480" cy="40" r="20" fill="#FFFDF8" />
          <path d="M480 28 L483.5 36 L492 37 L486 43 L487.5 51 L480 47 L472.5 51 L474 43 L468 37 L476.5 36 Z" fill="#C17D5D" />
        </g>
      </g>
    </svg>
  )
}

export function ActivityIllustration({ className = '' }) {
  return (
    <svg className={`illus ${className}`} viewBox="0 0 520 420" role="img" aria-label="Illustration of art supplies, a puzzle piece, building blocks and a speech bubble">
      <rect width="520" height="420" rx="36" fill="#F4E8BC" />
      {/* paint palette */}
      <g transform="translate(40 60)" className="float f1">
        <path d="M80 0 C150 0 190 40 190 90 C190 130 150 140 130 130 C108 120 110 150 80 160 C30 175 0 130 0 80 C0 34 34 0 80 0 Z" fill="#FFFDF8" stroke="#173B43" strokeOpacity="0.25" strokeWidth="3" />
        <circle cx="52" cy="54" r="15" fill="#C17D5D" />
        <circle cx="94" cy="38" r="15" fill="#173B43" />
        <circle cx="136" cy="62" r="15" fill="#E8E1F1" stroke="#173B43" strokeOpacity="0.3" />
        <circle cx="44" cy="102" r="15" fill="#DCE9D9" stroke="#173B43" strokeOpacity="0.3" />
        <circle cx="96" cy="108" r="12" fill="#FFFDF8" stroke="#173B43" strokeOpacity="0.3" strokeWidth="2" />
      </g>
      {/* brush */}
      <g className="float f2" transform="translate(250 40) rotate(28)">
        <rect width="14" height="120" rx="7" fill="#173B43" />
        <rect x="-1" y="116" width="16" height="30" rx="5" fill="#C17D5D" />
        <path d="M0 146 C0 164 14 164 14 146 Z" fill="#173B43" />
      </g>
      {/* blocks */}
      <g transform="translate(300 220)" className="float f3">
        <rect width="64" height="64" rx="12" fill="#F4DFD2" stroke="#173B43" strokeOpacity="0.25" strokeWidth="3" />
        <text x="32" y="46" textAnchor="middle" fontFamily="Outfit, sans-serif" fontWeight="700" fontSize="38" fill="#173B43">A</text>
        <g transform="translate(70 14)">
          <rect width="64" height="64" rx="12" fill="#DCE9D9" stroke="#173B43" strokeOpacity="0.25" strokeWidth="3" />
          <text x="32" y="46" textAnchor="middle" fontFamily="Outfit, sans-serif" fontWeight="700" fontSize="38" fill="#173B43">1</text>
        </g>
        <g transform="translate(30 -66)">
          <rect width="64" height="64" rx="12" fill="#E8E1F1" stroke="#173B43" strokeOpacity="0.25" strokeWidth="3" />
          <text x="32" y="46" textAnchor="middle" fontFamily="Outfit, sans-serif" fontWeight="700" fontSize="38" fill="#173B43">?</text>
        </g>
      </g>
      {/* puzzle piece */}
      <g transform="translate(60 250)" className="float f4">
        <path d="M0 20 H34 a14 14 0 1 1 28 0 H96 V56 a14 14 0 1 1 0 28 V120 H0 Z" fill="#C17D5D" />
        <path d="M10 30 H34" stroke="#FFFDF8" strokeOpacity="0.5" strokeWidth="4" strokeLinecap="round" />
      </g>
      {/* speech bubble */}
      <g transform="translate(300 70)" className="float f2">
        <path d="M0 24 a24 24 0 0 1 24 -24 H156 a24 24 0 0 1 24 24 V70 a24 24 0 0 1 -24 24 H70 L36 124 V94 H24 a24 24 0 0 1 -24 -24 Z" fill="#173B43" />
        <circle cx="52" cy="47" r="7" fill="#F4E8BC" />
        <circle cx="90" cy="47" r="7" fill="#F4E8BC" />
        <circle cx="128" cy="47" r="7" fill="#F4E8BC" />
      </g>
      <g transform="translate(440 330)" className="float f3">
        <path d="M0 -22 L6 -6 L24 -4 L10 8 L14 26 L0 16 L-14 26 L-10 8 L-24 -4 L-6 -6 Z" fill="#C17D5D" />
      </g>
    </svg>
  )
}

export function Logo({ light = false }) {
  return (
    <svg width="38" height="38" viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="18" fill={light ? '#FFFDF8' : '#173B43'} fillOpacity={light ? 0.12 : 1} />
      <path d="M14 44V22l18 14 18-14v22" fill="none" stroke="#F4E8BC" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="32" cy="17" r="4.5" fill="#C17D5D" />
    </svg>
  )
}

// A neutral placeholder drawing used in the gallery until real photos are added.
export function PhotoPlaceholder({ tone = 'sage' }) {
  const fills = { sage: '#DCE9D9', peach: '#F4DFD2', lavender: '#E8E1F1', yellow: '#F4E8BC' }
  return (
    <svg viewBox="0 0 120 90" className="ph-svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="120" height="90" fill={fills[tone] || fills.sage} />
      <circle cx="88" cy="26" r="9" fill="#FFFDF8" opacity="0.8" />
      <path d="M0 78 L34 44 L56 64 L76 46 L120 82 V90 H0 Z" fill="#173B43" opacity="0.14" />
    </svg>
  )
}
