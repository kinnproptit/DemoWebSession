/* eslint-disable id-length */
/* eslint-disable space-before-function-paren */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react'
// import styled from 'styled-components'
import { NavLink, withRouter } from 'react-router-dom'

import { Site, RouterContextProvider, Grid, List } from 'tabler-react'

const navBarItems = [
  {
    value: 'Home',
    to: '/',
    icon: 'home',
    LinkComponent: withRouter(NavLink),
    useExact: true
  },
  {
    value: 'Bóc băng',
    to: '/feature',
    icon: 'box',
    LinkComponent: withRouter(NavLink)
  },
  {
    value: 'Streaming',
    to: '/streaming',
    icon: 'image',
    LinkComponent: withRouter(NavLink)
  }
  // {
  //   value: 'Interface',
  //   icon: 'box',
  //   subItems: [
  //     {
  //       value: 'Cards Design',
  //       to: '/cards',
  //       LinkComponent: withRouter(NavLink)
  //     },
  //     { value: 'Charts', to: '/charts', LinkComponent: withRouter(NavLink) },
  //     {
  //       value: 'Pricing Cards',
  //       to: '/pricing-cards',
  //       LinkComponent: withRouter(NavLink)
  //     }
  //   ]
  // },
]

export const DefaultNavbar = ({ children }) => {
  return (
    <Site.Wrapper
      headerProps={{
        href: '/',
        alt: 'Logo',
        imageURL: 'logo.svg'
        // navItems: (
        //   <Nav.Item type='div' className='d-none d-md-flex'>
        //     <Button
        //       href='https://github.com/tabler/tabler-react'
        //       target='_blank'
        //       outline
        //       size='sm'
        //       RootComponent='a'
        //       color='primary'
        //     >
        //       Source code
        //     </Button>
        //   </Nav.Item>
        // )
      }}
      footerProps={{
        copyright: (
          <React.Fragment>
            Copyright © 2020
            <a href='.'> Bocbang</a>.
          </React.Fragment>
        ),
        nav: (
          <React.Fragment>
            <Grid.Col auto>
              <List className='list-inline list-inline-dots mb-0'>
                <List.Item className='list-inline-item'>
                  <a href='./docs/index.html'>Documentation</a>
                </List.Item>
                <List.Item className='list-inline-item'>
                  <a href='./faq.html'>FAQ</a>
                </List.Item>
              </List>
            </Grid.Col>
          </React.Fragment>
        )
      }}
      navProps={{ itemsObjects: navBarItems }}
      routerContextComponentType={withRouter(RouterContextProvider)}
    >
      {children}
    </Site.Wrapper>
  )
}

// const StyledCopyIcon = styled(CopyIcon).attrs({
//   fill: '#666',
//   width: 20,
//   height: 20
// })`
//   right: 16px;
//   top: 16px;
//   &:hover {
//     color: #ec644b;
//   }
// `
