import React from 'react';

type Props = {
  onClick: () => void;
} & React.ComponentPropsWithRef<'button'>;

const Button = (props: Props) => {
  const { onClick, children } = props;

  return (
    <button
      type='button'
      className='rounded-full bg-gradient-to-r from-sorella-purple to-sorella-pink px-10 py-3 text-white'
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
