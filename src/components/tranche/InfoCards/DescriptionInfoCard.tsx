import React from 'react';

interface Props {
  description: string;
}
const DescriptionInfoCard = (props: Props) => {
  const { description } = props;

  return (
    <div className='flex h-[220px] w-full flex-col items-center justify-start rounded-xl bg-card-background py-2 text-white'>
      <div className='text-2xl'>Description</div>
      <div className='font-thin'>{description}</div>
    </div>
  );
};

export default DescriptionInfoCard;
