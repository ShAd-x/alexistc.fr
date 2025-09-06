export default function Firework() {
  return (
    <span
      className="pointer-events-none absolute left-1/2 bottom-full z-20 flex h-0 w-0 -translate-x-1/2 mb-[-10px]"
      aria-hidden="true"
    >
      {/* 16 particules animées individuellement */}
      {Array.from({ length: 32 }, (_, i) => (
        <span key={i} className={`firework-dot firework-${i + 1}`} />
      ))}
      <style>
        {`
        .firework-dot {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          opacity: 0;
          pointer-events: none;
        }
        ${Array.from({ length: 16 }, (_, i) => {
          const colors = ["#818cf8", "#f472b6", "#fbbf24", "#34d399"];
          const color = colors[i % colors.length];
          const duration = 1.1 + (i % 4) * 0.1;
          return `.firework-${i + 1} { background: ${color}; animation: fw${
            i + 1
          } ${duration}s cubic-bezier(.7,0,.3,1) both; }`;
        }).join("\n")}
        @keyframes fw1   { 0%{opacity:0;transform:translate(0,0)scale(0.5);}20%{opacity:1;}80%{opacity:1;}100%{opacity:0;transform:translate(-30px,-60px)scale(1.1);} }
        @keyframes fw2   { 0%{opacity:0;transform:translate(0,0)scale(0.5);}20%{opacity:1;}80%{opacity:1;}100%{opacity:0;transform:translate(0px,-70px)scale(1.1);} }
        @keyframes fw3   { 0%{opacity:0;transform:translate(0,0)scale(0.5);}20%{opacity:1;}80%{opacity:1;}100%{opacity:0;transform:translate(30px,-60px)scale(1.1);} }
        @keyframes fw4   { 0%{opacity:0;transform:translate(0,0)scale(0.5);}20%{opacity:1;}80%{opacity:1;}100%{opacity:0;transform:translate(-20px,-40px)scale(1.1);} }
        @keyframes fw5   { 0%{opacity:0;transform:translate(0,0)scale(0.5);}20%{opacity:1;}80%{opacity:1;}100%{opacity:0;transform:translate(20px,-40px)scale(1.1);} }
        @keyframes fw6   { 0%{opacity:0;transform:translate(0,0)scale(0.5);}20%{opacity:1;}80%{opacity:1;}100%{opacity:0;transform:translate(-15px,-55px)scale(1.1);} }
        @keyframes fw7   { 0%{opacity:0;transform:translate(0,0)scale(0.5);}20%{opacity:1;}80%{opacity:1;}100%{opacity:0;transform:translate(15px,-55px)scale(1.1);} }
        @keyframes fw8   { 0%{opacity:0;transform:translate(0,0)scale(0.5);}20%{opacity:1;}80%{opacity:1;}100%{opacity:0;transform:translate(0px,-50px)scale(1.1);} }
        @keyframes fw9   { 0%{opacity:0;transform:translate(0,0)scale(0.5);}20%{opacity:1;}80%{opacity:1;}100%{opacity:0;transform:translate(-35px,-45px)scale(1.1);} }
        @keyframes fw10  { 0%{opacity:0;transform:translate(0,0)scale(0.5);}20%{opacity:1;}80%{opacity:1;}100%{opacity:0;transform:translate(35px,-45px)scale(1.1);} }
        @keyframes fw11  { 0%{opacity:0;transform:translate(0,0)scale(0.5);}20%{opacity:1;}80%{opacity:1;}100%{opacity:0;transform:translate(-25px,-30px)scale(1.1);} }
        @keyframes fw12  { 0%{opacity:0;transform:translate(0,0)scale(0.5);}20%{opacity:1;}80%{opacity:1;}100%{opacity:0;transform:translate(25px,-30px)scale(1.1);} }
        @keyframes fw13  { 0%{opacity:0;transform:translate(0,0)scale(0.5);}20%{opacity:1;}80%{opacity:1;}100%{opacity:0;transform:translate(-10px,-65px)scale(1.1);} }
        @keyframes fw14  { 0%{opacity:0;transform:translate(0,0)scale(0.5);}20%{opacity:1;}80%{opacity:1;}100%{opacity:0;transform:translate(10px,-65px)scale(1.1);} }
        @keyframes fw15  { 0%{opacity:0;transform:translate(0,0)scale(0.5);}20%{opacity:1;}80%{opacity:1;}100%{opacity:0;transform:translate(-5px,-55px)scale(1.1);} }
        @keyframes fw16  { 0%{opacity:0;transform:translate(0,0)scale(0.5);}20%{opacity:1;}80%{opacity:1;}100%{opacity:0;transform:translate(5px,-55px)scale(1.1);} }
        `}
      </style>
    </span>
  );
}
