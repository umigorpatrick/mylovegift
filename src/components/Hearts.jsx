import { useEffect, useState } from 'react';

export default function Hearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        left: Math.random() * 100, // posição horizontal aleatória
        size: Math.random() * 20 + 10, // tamanho entre 10px e 30px
      };
      setHearts((hearts) => [...hearts, newHeart]);

      // Remove o coração depois de 7 segundos
      setTimeout(() => {
        setHearts((hearts) => hearts.filter((h) => h.id !== newHeart.id));
      }, 7000);
    }, 500); // cria um coração a cada meio segundo

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.left}vw`,
            fontSize: `${heart.size}px`,
          }}
        >
          ❤️
        </div>
      ))}
    </>
  );
}