import DaiIcon from '@/components/icons/DaiIcon';
import UsdcIcon from '@/components/icons/UsdcIcon';
import UsdtIcon from '@/components/icons/UsdtIcon';

export enum Token {
  'USDT',
  'USDC',
  'DAI',
}

export const getTokenLogo = (token: Token) => {
  switch (token) {
    case Token.USDC:
      return <UsdcIcon />;
    case Token.DAI:
      return <DaiIcon />;
    case Token.USDT:
      return <UsdtIcon />;
    default:
      return <UsdcIcon />;
  }
};
