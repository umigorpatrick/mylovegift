export default function Footer() {
  return (
    <footer className="w-full p-4 bg-pink-300">
      <p className="text-center text-white">
        Feito com 💖 por Igor — {new Date().getFullYear()}
      </p>
    </footer>
  );
}