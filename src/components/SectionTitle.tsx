import type { ReactNode } from 'react';

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({ badge, title, subtitle, centered = false }: SectionTitleProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
          {badge}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl font-bold text-green-800 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-gray-500 text-base md:text-lg max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function BracketTitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className="flex justify-center">
      <h2 className={`text-white text-3xl md:text-4xl font-bold px-4 ${className}`}>
        <span className="relative">
          <span className="absolute -left-3 top-0 bottom-0 border-l-2 border-b-2 border-[#c8d87a] w-3" />
          {children}
          <span className="absolute -right-3 top-0 bottom-0 border-r-2 border-b-2 border-[#c8d87a] w-3" />
        </span>
      </h2>
    </div>
  );
}
