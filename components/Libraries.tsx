import BaseImage from 'next/image';
import styled, { css } from 'styled-components';

import { Heading as BaseHeading } from '@components';

export type LibrariesArray = {
  libraries: {
    name: string;
    description: string;
    logo: string;
    links: {
      name: string;
      url: string;
    }[];
  }[];
};

// TODO: Move these values to theme from where a hook handles global spacing values based on media queries
const GAP = {
  initial: 1.5,
  md: 2.5,
} as const;

const CardsList = styled.ul(
  ({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: ${GAP.initial}rem;
    margin: 1.5rem 0;

    ${theme.media.md`
      gap: ${GAP.md}rem;
  `}
  `,
);

const Card = styled.li(
  ({ theme }) => css`
    background-color: ${theme.colors.background};
    display: flex;
    flex-direction: column;
    border-radius: 1.5rem;
    overflow: hidden;
    box-shadow: ${theme.shadows.lg};
    padding: 2rem;

    ${theme.media.md`
      flex-basis: calc(50% - ${GAP.md / 2}rem);
    `}

    ${theme.media.xxl`
      flex-basis: calc(33.33333% - ${GAP.md}rem);
    `}
  `,
);

const Image = styled(BaseImage)`
  background-color: grey;
`;

const CardDescription = styled.div`
  flex: 1;

  p {
    color: ${({ theme }) => theme.colors.copyAlt};
    line-height: 1.2;
  }
`;

const Links = styled.ul(
  ({ theme }) => css`
    display: flex;
    gap: 1rem;
    font-family: ${theme.fonts.secondary};
    font-size: 0.75rem;
    text-transform: lowercase;
    justify-content: flex-end;
    margin: 1.5rem 0;
  `,
);

const Link = styled.li``;

const LinkAnchor = styled.a(
  ({ theme }) => css`
    padding: 0.5rem;
    border-radius: 0.5rem;

    background-color: ${theme.colors.backgroundAlt};
    color: ${theme.colors.copyAlt};

    &:hover {
      color: ${theme.colors.primaryAlt};
      background-color: ${theme.colors.primary};
    }
  `,
);

const Heading = styled(BaseHeading).attrs({ as: 'h3' })`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const Libraries: React.FC<LibrariesArray> = ({ libraries }) => (
  <CardsList>
    {libraries.map(({ name, description, logo, links }) => (
      <Card key={name}>
        <div>
          <Image src={logo} objectFit="cover" height={64} width={64} quality={100} alt={name} />
        </div>

        <CardDescription>
          <Heading bold>{name}</Heading>
          <p>{description}</p>
        </CardDescription>

        <Links>
          {links.map(({ name, url }) => (
            <Link key={name}>
              <LinkAnchor href={url} target="_blank" rel="noopener noreferrer">
                {name}
              </LinkAnchor>
            </Link>
          ))}
        </Links>
      </Card>
    ))}
  </CardsList>
);

export default Libraries;
