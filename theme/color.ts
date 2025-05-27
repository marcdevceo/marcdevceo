export const textColor = {
  primary: 'text-orange-400',    // Bold CTA
  secondary: 'text-teal-400',    // Cool balance
  accent: 'text-indigo-400',     // For tags/headings
  neutral: 'text-gray-300',      // Body text
  success: 'text-emerald-500',
  danger: 'text-rose-500',
};

export const bgColor = {
  none: 'bg-transparent',        // No background
  primary: 'bg-orange-600',      // Buttons, highlights
  secondary: 'bg-teal-700',      // Alternate blocks or cards
  accent: 'bg-indigo-700',       // Optional: blog tags, pills
  neutral: 'bg-[#0D0D0D]',       // Page background
  surface: 'bg-[#1A1A1A]',       // Cards or sections
  success: 'bg-emerald-100',
  warning: 'bg-yellow-100',
  danger: 'bg-rose-100',
};

export const borderColor = {
  primary: 'border-orange-600',
  secondary: 'border-teal-700',
  accent: 'border-indigo-700',
  neutral: 'border-[#2E2E2E]',
  danger: 'border-rose-500',
};

export const variantClasses = {
    primary: `${bgColor.primary} ${textColor.neutral} hover:bg-primary/70`,
    secondary: `${bgColor.secondary} ${textColor.neutral} hover:${bgColor.secondary}/70`,
    accent: `${bgColor.accent} ${textColor.neutral} hover:${bgColor.accent}/70`,
    neutral: `${bgColor.neutral} ${textColor.primary} hover:bg-neutral/70`,
    success: `${bgColor.success} ${textColor.neutral} hover:bg-success/70`,
    warning: `${bgColor.warning} ${textColor.neutral} hover:bg-warning/70`,
    danger: `${bgColor.danger} ${textColor.neutral} hover:bg-danger/70`,
    ghost: `bg-transparent ${textColor.primary} hover:bg-gray-100`,
  };
