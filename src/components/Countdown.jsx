import { useEffect, useState } from 'react';

export default function Countdown() {
  // Defina a sua data especial aqui
  const targetDate = new Date('2025-12-25T00:00:00');

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({});
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!timeLeft.days && !timeLeft.hours) {
    return (
      <div className="text-center py-16">
        <h2 className="text-4xl font-romantic text-secondary">
          🎉 Chegou o grande dia! 🎉
        </h2>
      </div>
    );
  }

  return (
    <section className="py-16 bg-background">
      <h2 className="text-4xl font-romantic text-center mb-10 text-secondary">
        ⏳ Faltam...
      </h2>
      <div className="flex justify-center gap-8">
        <div className="text-center">
          <p className="text-5xl font-bold text-secondary">{timeLeft.days}</p>
          <p className="text-lg">dias</p>
        </div>
        <div className="text-center">
          <p className="text-5xl font-bold text-secondary">{timeLeft.hours}</p>
          <p className="text-lg">horas</p>
        </div>
        <div className="text-center">
          <p className="text-5xl font-bold text-secondary">{timeLeft.minutes}</p>
          <p className="text-lg">minutos</p>
        </div>
        <div className="text-center">
          <p className="text-5xl font-bold text-secondary">{timeLeft.seconds}</p>
          <p className="text-lg">segundos</p>
        </div>
      </div>
    </section>
  );
}