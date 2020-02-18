import React from 'react';
import styled, { css } from 'styled-components';
import cardLyft from './card-lyft.png';
import sharedCardsSvg from './shared-cards.svg';
import sharedCards from './shared-cards.png';
import forFriends from './for-friends.svg';
import forParents from './for-parents.svg';
import forBusiness from './for-business.svg';
import cards from './cards.svg';
import dollar from './dollar.svg';
import lockGreen from './lock-green.svg';
import myCards from './my-cards.png';
import privacyCard from './privacy-card.svg';

const Header = styled.header`
  padding: 10px 20px;
  display: flex;
  background: linear-gradient(to bottom, #00000080, #0000);
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 2;

  > div {
    margin-left: auto;
  }
`;

const Logo = styled.svg`
  width: 96px;
  path {
    fill: #fff;
  }
`;

const LoginLink = styled.a`
  color: inherit;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  transition: 250ms all ease-out;
  opacity: 0.5;
  margin-right: 20px;

  :hover {
    opacity: 1;
  }
`;

const Button = styled.button`
  background-color: #39f;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  border: 0;

  ${props =>
    props.small
      ? css`
          padding: 10px 20px;
        `
      : css`
          padding: 15px 30px;
          line-height: 30px;
        `}

  ${props =>
    props.shareCards &&
    css`
      background-color: #7e73ff;
    `}


    ${props =>
      props.spendSecurely &&
      css`
        background-color: #1fd760;
      `}
`;

const Hero = styled.div`
  display: flex;
  justify-content: center;
  height: 660px;
  align-items: center;

  p {
    font-size: 20px;
  }
`;

const HeroLeft = styled.div`
  max-width: 550px;
  margin-right: 80px;

  p {
    margin-bottom: 35px;
  }
`;

const SharedCards = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  align-items: center;

  img {
    margin-right: 15px;
  }
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: 20px;

  strong {
    margin-left: 15px;
    color: #ff559f;
  }
`;

const CardDetails = styled.div`
  background: #fff;
  color: #150402;
  border-radius: 10px;
  padding: 20px 20px 0 20px;
  margin-right: -140px;
  margin-top: 70px;
  z-index: 1;
  box-shadow: 0 20px 80px 0 rgba(20, 31, 51, 0.25);

  > :first-child {
    font-size: 18px;
    font-weight: 800;
    text-align: center;
    margin-bottom: 20px;
  }

  img {
    margin-bottom: -40px;
  }
`;

const CardDetailsBoxGroup = styled.div`
  display: flex;
  margin-top: 10px;

  > div:first-child {
    flex: 2;
  }

  > div:last-child {
    margin-left: 10px;
    flex: 1;
  }
`;

const CardDetailsBox = styled.div`
  border: 1px solid #ff559f1f;
  padding: 0 15px;
  border-radius: 10px;
  line-height: 45px;
`;

const CardDetailsButton = styled.button`
  background-color: #39f;
  border-radius: 10px;
  box-shadow: inset 0 2px 0 hsla(0, 0%, 100%, 0.05),
    inset 0 -0.2em 0 hsla(0, 0%, 100%, 0.05),
    inset 0 -0.25em 0 hsla(0, 0%, 0%, 0.3),
    0 0.25em 0.25em hsla(0, 0%, 0%, 0.05);
  color: #fff;
  cursor: pointer;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.5;
  margin: 20px 0 25px;
  padding: 0.5em 1.5em 0.75em;
  text-transform: uppercase;
  border: 0;
  display: block;
  width: 100%;

  :active {
    box-shadow: inset 0 2px 0 hsla(0, 0%, 100%, 0.05),
      inset 0 0 0 3em hsla(0, 0%, 100%, 0.2),
      inset 0 0.25em 0.5em hsla(0, 0%, 0%, 0.05),
      0 -1px 1px hsla(0, 0%, 0%, 0.05), 0 1px 1px hsla(0, 0%, 100%, 0.3);
    margin-top: 0.25em;
    outline: none;
    padding-bottom: 0.5em;
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-gap: 5%;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 80px;

  img {
    height: 40px;
  }

  h3 {
    margin-top: 30px;
    font-size: 20px;
  }

  p {
    opacity: 0.5;
    font-size: 15px;
    line-height: 22px;
  }
`;

const Section = styled.div`
  border-radius: 20px;
  padding: 100px 80px;
  display: flex;
  align-items: center;
  margin-bottom: 120px;

  > div {
    width: 50%;
  }

  h2 {
    margin-top: 36px;
    margin-bottom: 17px;
    font-size: 35px;
    line-height: 1;
  }

  p {
    opacity: 0.5;
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 50px;
  }

  img {
    margin-left: auto;
  }

  ${props =>
    props.shareCards &&
    css`
      background: linear-gradient(to bottom, #ffffff0b, #ffffff06);
    `}

  ${props =>
    props.limitSpending &&
    css`
      background: linear-gradient(to bottom, #ffffff0b, #ffffff06);
    `}

  ${props =>
    props.spendSecurely &&
    css`
      background: linear-gradient(to bottom, #ffffff0b, #ffffff06);
    `}
`;

const Pill = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding: 0 20px;
  height: 40px;

  ${props =>
    props.shareCards &&
    css`
      background-color: #7e73ff40;
      color: #7e73ff;
    `}

  ${props =>
    props.limitSpending &&
    css`
      background-color: #3399ff40;
      color: #39f;
    `}

  ${props =>
    props.spendSecurely &&
    css`
      background: #1fd76040;
      color: #1fd760;
    `}

  img {
    margin-right: 10px;
  }
`;

const Outro = styled.div`
  margin-top: 230px;
  text-align: center;
  overflow: hidden;

  h2 {
    font-size: 40px;
    font-weight: 200;
  }

  img {
    margin-top: 70px;
    margin-bottom: -72px;
  }
`;

export default function App() {
  return (
    <>
      <Header>
        <Logo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80">
          <path
            d="M320 0v80H0V0h320zm-80.81 19.2c-2.75 0-5.384.43-7.904 1.289a21.718 21.718 0 0 0-6.844 3.808c-2.043 1.68-3.685 3.924-4.926 6.73-1.24 2.807-1.861 5.966-1.861 9.48 0 3.36.62 6.376 1.861 9.049 1.241 2.672 2.902 4.81 4.983 6.414a23.286 23.286 0 0 0 6.902 3.666c2.52.84 5.154 1.26 7.904 1.26 4.2 0 8.075-.86 11.626-2.577v-8.42c-2.443 2.215-5.88 3.322-10.31 3.322-1.794 0-3.522-.258-5.182-.773a15.242 15.242 0 0 1-4.525-2.262c-1.356-.993-2.434-2.32-3.236-3.981-.802-1.66-1.203-3.56-1.203-5.699 0-4.505 1.384-7.913 4.152-10.223 2.769-2.31 6.1-3.465 9.995-3.465 3.97 0 7.312 1.05 10.023 3.15v-8.19c-3.437-1.719-7.255-2.578-11.455-2.578zm-196.07.802H28v40.092h8.591V46.921h6.53c11.53 0 17.296-4.487 17.296-13.46s-5.765-13.46-17.296-13.46zm43.54 0H70.163v40.092h8.591V46.062h6.3l10.826 14.032h9.908l-11.97-15.12c5.842-1.871 8.763-5.842 8.763-11.914 0-2.443-.449-4.543-1.346-6.3-.898-1.756-2.138-3.112-3.723-4.066a17.538 17.538 0 0 0-5.04-2.062c-1.776-.42-3.714-.63-5.814-.63zm36.55 0h-8.59v40.092h8.59V20.002zm18.742 0h-9.279l15.579 40.092h8.82l15.636-40.092h-9.278l-10.768 30.012-10.71-30.012zm55.763 0h-9.278l-16.381 40.092h8.878l2.978-7.503h18.328l2.92 7.503h8.878l-16.323-40.092zm69.005 0h-9.68l15.694 25.888v14.204h8.534V45.89l15.636-25.888h-9.68l-10.252 17.984-10.252-17.984zm-73.644 7.961c.19 1.031.477 2.081.859 3.15l5.613 14.376h-12.944l5.555-14.376c.382-.916.688-1.966.917-3.15zm-149.555-.4c5.422 0 8.133 1.966 8.133 5.898 0 3.933-2.71 5.9-8.133 5.9h-6.93V27.562zm43.54 0c1.985 0 3.608.457 4.868 1.374 1.26.916 1.89 2.348 1.89 4.295 0 1.91-.64 3.332-1.919 4.267-1.28.936-2.892 1.404-4.84 1.404h-8.305v-11.34z"
            fill="#000"
            fill-rule="evenodd"
          ></path>
        </Logo>
        <div>
          <LoginLink href="#login">Log in</LoginLink>
          <Button small>Signup FREE</Button>
        </div>
      </Header>

      <Hero>
        <HeroLeft>
          <SharedCards>
            <img src={sharedCardsSvg} />
            Shared cards
          </SharedCards>
          <Title>
            Instantly share cards with
            <strong>anyone</strong>
          </Title>
          <p>
            Get started with Privacy Personal for <strong>free</strong>
          </p>
          <Button>Get Privacy For Free</Button>
        </HeroLeft>
        <CardDetails>
          <div>My Card</div>
          <CardDetailsBox>4237 8843 6712 7700 </CardDetailsBox>
          <CardDetailsBoxGroup>
            <CardDetailsBox>01/02</CardDetailsBox>
            <CardDetailsBox>784</CardDetailsBox>
          </CardDetailsBoxGroup>
          <CardDetailsButton>Share card</CardDetailsButton>
          <img src={cardLyft} />
        </CardDetails>
        <img src={sharedCards} />
      </Hero>

      <Container>
        <div style={{ padding: '115px 0 145px 0' }}>
          <h2>The easiest way to share a card with limits</h2>

          <FeatureGrid>
            <div>
              <img src={forFriends} />
              <h3>For Friends</h3>
              <p>
                Send a friend a few bucks for shared expenses or surprise
                someone with a card as a gift.
              </p>
            </div>
            <div>
              <img src={forParents} />
              <h3>For Parents</h3>
              <p>
                Set monthly caps on how much the kids can spend and block
                unexpected overcharges.
              </p>
            </div>
            <div>
              <img src={forBusiness} />
              <h3>For Business</h3>
              <p>
                Instantly send cards with individual spending limits to
                employees for company expenses.
              </p>
            </div>
          </FeatureGrid>
        </div>

        <Section shareCards>
          <div>
            <Pill shareCards>
              <img src={cards} />
              Share cards
            </Pill>
            <h2>All it takes is a few clicks.</h2>
            <p>
              No copy & paste, no screenshots, and the recipient won't need a
              Privacy account to access the shared card. Just click the little
              share button when viewing a card. We'll handle the rest!
            </p>
            <Button shareCards>Get Privacy For Free</Button>
          </div>
          <img src={myCards} />
        </Section>

        <Section limitSpending>
          <div>
            <Pill limitSpending>
              <img src={dollar} />
              Limit spending
            </Pill>
            <h2>
              Set limits when you
              <br />
              need them.
            </h2>
            <p>
              Block overcharges and hidden fees by setting maximum spending
              limits on a per charge, per month or per year basis.
            </p>
            <Button limitSpending>Get Privacy For Free</Button>
          </div>
          <img src={myCards} />
        </Section>

        <Section spendSecurely>
          <div>
            <Pill spendSecurely>
              <img src={lockGreen} />
              Spend securely
            </Pill>
            <h2>
              Don’t worry.
              <br />
              Privacy is our Priority.
            </h2>
            <p>
              We hide your real card numbers to keep your personal data safe and
              your payments safer.
            </p>
            <Button spendSecurely>Get Privacy For Free</Button>
          </div>
          <img src={myCards} />
        </Section>

        <Outro>
          <h2>Create a free Privacy account to start sharing cards</h2>

          <Button>Get Privacy For Free</Button>
          <br />
          <img src={privacyCard} />
        </Outro>
      </Container>
    </>
  );
}
