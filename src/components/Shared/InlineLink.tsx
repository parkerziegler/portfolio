import * as React from 'react';
import cs from 'classnames';
import Link from 'next/link';

interface Props {
  href: string;
  type?: 'dark' | 'light';
}

const InlineLink: React.FC<React.PropsWithChildren<Props>> = ({
  href,
  type = 'dark',
  children
}) => {
  const className = cs('bg-underline', {
    'bg-underline--dark': type === 'dark',
    'bg-underline--light': type === 'light'
  });

  // Ensure internal site links are handled by Next.
  if (href.startsWith('/')) {
    return (
      <Link href={href} className={className}>
        <strong>{children}</strong>
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <strong className="font-semibold">{children}</strong>
    </a>
  );
};

export default InlineLink;
