import { useState } from 'react';
import { UnstyledButton, Tooltip, Title, rem, useMantineColorScheme } from '@mantine/core';
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconMoonStars,
} from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './DoubleNavebar.module.css';

const mainLinksMockdata = [
  { icon: IconHome2, label: 'Home', links: ['Home', 'Todays Update', 'Messages', "Todo's"] },
  { icon: IconGauge, label: 'Dashboard', links: ['Overview', 'Analytics'] },
  { icon: IconDeviceDesktopAnalytics, label: 'Analytics', links: ['Reports', 'Charts'] },
  { icon: IconCalendarStats, label: 'Releases', links: ['Version History', 'Changelog'] },
  { icon: IconFingerprint, label: 'Security', links: ['Access Control', 'Audit Logs'] },
  { icon: IconSettings, label: 'Settings', links: ['General', 'Preferences'] },
  { icon: IconUser, label: 'Account', links: ['Profile', 'Billing'] },
  { icon: IconMoonStars, label: 'Theme', links: ['Light', 'Dark'] },
];

export function DoubleNavbar() {
  const [active, setActive] = useState('Home');
  const [activeLink, setActiveLink] = useState('Home');
  const { toggleColorScheme } = useMantineColorScheme();

  const mainLinks = mainLinksMockdata.map((link) => (
    <Tooltip
      label={link.label}
      position="right"
      withArrow
      transitionProps={{ duration: 0 }}
      key={link.label}
    >
      <UnstyledButton
        onClick={() => {
          if (link.label === 'Theme') {
            toggleColorScheme();
          } else {
            setActive(link.label);
            setActiveLink(link.links[0]); // Set the first link in the links array as the activeLink
          }
        }}
        className={classes.mainLink}
        data-active={link.label === active || undefined}
      >
        <link.icon style={{ width: rem(22), height: rem(22) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  ));

  const links = mainLinksMockdata
    .find((link) => link.label === active)
    ?.links.map((link) => (
      <a
        className={classes.link}
        data-active={activeLink === link || undefined}
        href="#"
        onClick={(event) => {
          event.preventDefault();
          setActiveLink(link);
        }}
        key={link}
      >
        {link}
      </a>
    ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.wrapper}>
        <div className={classes.aside}>
          <div className={classes.logo}>
            <MantineLogo type="mark" size={30} />
          </div>
          {mainLinks}
        </div>
        <div className={classes.main}>
          <Title order={4} className={classes.title}>
            {active}
          </Title>
          {links}
        </div>
      </div>
    </nav>
  );
}
