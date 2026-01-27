import Link from 'next/link';

export default function Breadcrumb({ items }) {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {index > 0 && <span className="text-gray-400">›</span>}
          {item.href ? (
            <Link href={item.href} className="hover:text-blue-500">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-800">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
