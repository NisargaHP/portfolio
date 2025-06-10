import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 sticky top-0">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">NISARGA HP</h1>
        <nav>
          <ul className="flex space-x-6">
            {['Home', 'Skills', 'Experience', 'Projects', 'Education'].map((item) => (
              <li key={item}>
                <Link href={`#${item.toLowerCase()}`} className="hover:text-blue-300">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}