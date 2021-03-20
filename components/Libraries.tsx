import BaseImage from 'next/image';
import styled, { css } from 'styled-components';

import { Heading as BaseHeading } from '@components';

export type LibrariesArray = {
  libraries: {
    name: string;
    description: string;
    url: string;
    logo: string;
    links: {
      name: string;
      url: string;
    }[];
  }[];
};

const CardsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  margin: 1.5rem 0;
`;

const Card = styled.li(
  ({ theme }) => css`
    background-color: ${theme.colors.white};
    display: flex;
    border-radius: 1.5rem 0 0 1.5rem;
    overflow: hidden;

    ${theme.media.lg`
      flex-basis: calc(50% - 1.25rem);
    `}
  `,
);

const Image = styled(BaseImage)`
  background-color: grey;
`;

const CardDescription = styled.div`
  flex: 1;
  padding: 1rem;

  p {
    color: ${({ theme }) => theme.colors.copyAlt};
  }
`;

const Heading = styled(BaseHeading).attrs({ as: 'h3' })`
  font-size: 1.75rem;
`;

const Libraries: React.FC<LibrariesArray> = ({ libraries }) => (
  <CardsList>
    {libraries.map(({ name, description, logo }) => (
      <Card key={name}>
        <Image src={logo} objectFit="cover" height={160} width={160} />

        <CardDescription>
          <Heading bold>{name}</Heading>
          <p>{description}</p>
        </CardDescription>
      </Card>
    ))}
  </CardsList>
);

export default Libraries;
