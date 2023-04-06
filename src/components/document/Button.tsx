import React from 'react';

import clsxm from '@/lib/clsxm';

type Props = {
  onClick: () => void;
  variant?: ButtonVariant;
  gradient?: boolean;
} & React.ComponentPropsWithRef<'button'>;

export enum ButtonVariant {
  Rounded,
  Square,
}

const Button = (props: Props) => {
  const { onClick, children, variant = ButtonVariant.Square, className, gradient } = props;

  return (
    <button
      type='button'
      className={clsxm([
        variant === ButtonVariant.Rounded && ['max-h-14 rounded-full px-10 py-3 font-bold text-white'],
        variant === ButtonVariant.Square && ['max-h-14 rounded-lg px-10 py-3 font-bold text-white'],
        [gradient && ['bg-gradient-to-r from-sorella-purple to-sorella-pink']],
        [className],
      ])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
