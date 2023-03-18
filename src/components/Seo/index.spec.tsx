import { render } from '@testing-library/react';

import Seo from '@/components/Seo';

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: jest.fn().mockReturnValue({ asPath: '' }),
}));

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>;
    },
  };
});

describe('Seo component', () => {
  const props = {
    templateTitle: 'Test Title',
    siteName: 'Sorella',
    description:
      'Sorella dynamically adjusts liquidity positions synchronously with the market’s evolution, maximizing market efficiency and yield.',
    url: 'https://SorellaLabs.com',
    type: 'website',
    robots: 'follow, index',
    image: 'https://SorellaLabs.com/image.png',
  };

  it('renders meta tags with correct values', () => {
    render(<Seo {...props} />, {
      container: document.head,
    });
    expect(document.title).toBe('Test Title');
    expect(document.querySelector('meta[name="robots"]').getAttribute('content')).toEqual('follow, index');
    expect(document.querySelector('meta[name="description"]').getAttribute('content')).toEqual(props.description);
    expect(document.querySelector('meta[property="og:url"]').getAttribute('content')).toEqual(
      'https://SorellaLabs.com'
    );
    expect(document.querySelector('link[rel="canonical"]').getAttribute('href')).toEqual('https://SorellaLabs.com');
    expect(document.querySelector('meta[property="og:type"]').getAttribute('content')).toEqual('website');
    expect(document.querySelector('meta[property="og:site_name"]').getAttribute('content')).toEqual('Sorella');
    expect(document.querySelector('meta[property="og:description"]').getAttribute('content')).toEqual(
      props.description
    );
    expect(document.querySelector('meta[property="og:title"]').getAttribute('content')).toEqual('Test Title');
    expect(document.querySelector('meta[name="image"][property="og:image"]').getAttribute('content')).toEqual(
      'https://og.<your-domain>/api/general?siteName=Sorella&description=Sorella%20dynamically%20adjusts%20liquidity%20positions%20synchronously%20with%20the%20market%E2%80%99s%20evolution%2C%20maximizing%20market%20efficiency%20and%20yield.&logo=https%3A%2F%2Fog.%3Cyour-domain%3E%2Fimages%2Flogo.jpg&templateTitle=Test%20Title'
    );
    expect(document.querySelector('meta[name="twitter:card"]').getAttribute('content')).toEqual('summary_large_image');
    expect(document.querySelector('meta[name="twitter:site"]').getAttribute('content')).toEqual('@sorellalabs');
    expect(document.querySelector('meta[name="twitter:title"]').getAttribute('content')).toEqual('Test Title');
    expect(document.querySelector('meta[name="twitter:description"]').getAttribute('content')).toEqual(
      props.description
    );
    expect(document.querySelector('meta[name="twitter:image"]').getAttribute('content')).toEqual(
      'https://og.<your-domain>/api/general?siteName=Sorella&description=Sorella%20dynamically%20adjusts%20liquidity%20positions%20synchronously%20with%20the%20market%E2%80%99s%20evolution%2C%20maximizing%20market%20efficiency%20and%20yield.&logo=https%3A%2F%2Fog.%3Cyour-domain%3E%2Fimages%2Flogo.jpg&templateTitle=Test%20Title'
    );
  });
});
