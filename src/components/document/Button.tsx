import React from 'react';

import clsxm from '@/lib/clsxm';

type Props = {
  onClick: () => void;
  variant?: ButtonVariant;
} & React.ComponentPropsWithRef<'button'>;

export enum ButtonVariant {
  Rounded,
  Square,
}

const Button = (props: Props) => {
  const { onClick, children, variant = ButtonVariant.Square } = props;

  return (
    <button
      type='button'
      className={clsxm([
        variant === ButtonVariant.Rounded && [
          'max-h-14 rounded-full bg-gradient-to-r from-sorella-purple to-sorella-pink px-10 py-3 text-white',
        ],
        variant === ButtonVariant.Square && [
          'max-h-14 rounded-lg bg-gradient-to-r from-sorella-purple to-sorella-pink px-10 py-3 text-white',
        ],
      ])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
