import { paddingClass } from '@/theme/spacing';
import { bgColor } from '@/theme/color';
import clsx from 'clsx';

type CardProps = {
  children: React.ReactNode;
  padding?: keyof typeof paddingClass;
  background?: keyof typeof bgColor;
  rounded?: boolean;
  shadow?: boolean;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>; // 💥 enables unknown props like onClick, id, etc.

export default function Card({
  children,
  padding = 'md',
  background = 'neutral',
  rounded = true,
  shadow = true,
  className = '',
  ...rest
}: CardProps) {
  return (
    <div
      className={clsx(
        paddingClass[padding],
        bgColor[background],
        rounded && 'rounded-lg',
        shadow && 'shadow-md',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
