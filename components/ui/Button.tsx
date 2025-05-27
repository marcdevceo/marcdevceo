import clsx from 'clsx';
import { fontWeight, fontFamily, fontSize } from '@/theme/typography';
import { paddingClass } from '@/theme/spacing';
import { textColor, bgColor } from '@/theme/color';

export type ButtonProps = {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'ghost';
  loading?: boolean;
  disabled?: boolean;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  size = 'md',
  variant = 'primary',
  loading = false,
  disabled = false,
  className = '',
  ...rest
}: ButtonProps) {
  const baseStyles = clsx(
    'inline-flex items-center justify-center rounded-md transition duration-150 ease-in-out',
    paddingClass[size],
    fontSize[size],
    fontFamily.sans,
    fontWeight.medium,
    className
  );

  const variantClasses = {
    primary: `${bgColor.primary} ${textColor.neutral} hover:bg-primary/90`,
    secondary: `${bgColor.secondary} ${textColor.neutral} hover:bg-secondary/90`,
    ghost: `bg-transparent ${textColor.primary} hover:bg-gray-100`,
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variantClasses[variant],
        disabled && 'opacity-50 cursor-not-allowed'
      )}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
}
