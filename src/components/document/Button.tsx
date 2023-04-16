import React from 'react';

import clsxm from '@/lib/clsxm';

type Props = {
  onClick: () => void;
  variant?: ButtonVariant;
  gradient?: ButtonGradientVariant;
} & React.ComponentPropsWithRef<'button'>;

export enum ButtonVariant {
  Rounded,
  Square,
}

export enum ButtonGradientVariant {
  Gradient1,
  Gradient2,
}
const Button = (props: Props) => {
  const { onClick, children, variant = ButtonVariant.Square, className, gradient } = props;

  return (
    <button
      type='button'
      className={clsxm([
        variant === ButtonVariant.Rounded && ['max-h-14 rounded-full px-10 py-3 font-bold text-white'],
        variant === ButtonVariant.Square && ['max-h-14 rounded-lg px-10 py-3 font-bold text-white'],
        [gradient == ButtonGradientVariant.Gradient1 && ['bg-gradient-to-r from-sorella-purple to-sorella-pink']],
        [gradient == ButtonGradientVariant.Gradient2 && ['bg-gradient-to-r from-[#662b7c] to-[#cd307c]']],
        [className],
      ])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
