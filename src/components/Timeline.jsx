export default function Timeline() {
  const events = [
    {
      date: '10/02/2022',
      title: 'Nos conhecemos 💫',
      description: 'O dia em que nossas vidas se cruzaram de forma mágica.',
    },
    {
      date: '14/02/2022',
      title: 'Primeiro encontro ❤️',
      description: 'O primeiro de muitos momentos especiais juntos.',
    },
    {
      date: '25/12/2022',
      title: 'Nosso primeiro Natal 🎄',
      description: 'Celebrando juntos a magia do Natal.',
    },
    {
      date: '14/02/2023',
      title: '1 ano de namoro 🥰',
      description: 'Um ano cheio de amor, carinho e aventuras.',
    },
  ];

  return (
    <section className="py-16 bg-background">
      <h2 className="text-4xl font-romantic text-center mb-10 text-secondary">
        Nossa História 💌
      </h2>
      <div className="max-w-3xl mx-auto border-l-4 border-secondary">
        {events.map((event, index) => (
          <div key={index} className="mb-8 ml-6">
            <div className="flex items-center">
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-white">
                {index + 1}
              </span>
              <h3 className="text-xl font-semibold text-secondary">{event.title}</h3>
            </div>
            <time className="block mb-2 text-sm text-gray-500">{event.date}</time>
            <p className="text-gray-700">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}