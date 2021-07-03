import React from 'react';

import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Sign in</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={(
          <>
            {'Platform for the Modern Realtors\n'}
            {/* <span className="text-primary-500 underline">settle</span> */}
          </>
        )}
        description="Transact property in an intelligient, seamless and professional way."
        button={(
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <a>
              <Button xl>Request a Demo</Button>
            </a>
          </Link>
        )}
      />
    </Section>
  </Background>
);

export { Hero };
