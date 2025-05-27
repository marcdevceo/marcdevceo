import clsx from 'clsx';
import { fontWeight, fontFamily, fontSize } from '@/theme/typography';
import { paddingClass } from '@/theme/spacing';
import { variantClasses } from '@/theme/color';
import { ButtonProps } from '@/types/components';

export default function Button({
  children,
  size = "buttonText",
  padding = "md",
  variant = "primary",
  loading = false,
  disabled = false,
  className = "",
  ...rest
}: ButtonProps) {
  const baseStyles = clsx(
    'inline-flex items-center justify-center rounded-lg transition duration-150 ease-in-out',
    paddingClass[padding],
    fontSize[size],
    fontFamily.sans,
    fontWeight.medium,
    className
  );

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
