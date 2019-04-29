import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styles from './layout.module.scss'
import Header from './header/header'
import Footer from './footer/footer'
import CookieBanner from 'react-cookie-banner'

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header
          siteTitle={this.props.data.site.siteMetadata.title}
          currentHref={this.props.currentHref}
        />
        <div className={styles.base}>{this.props.children}</div>
        <Footer />
        <CookieBanner
          styles={{
            banner: {
              position: 'fixed',
              bottom: 0,
              background: '#025753',
            },
            button: {
              border: '1px solid white',
              borderRadius: 4,
              height: 32,
              lineHeight: '32px',
              background: 'transparent',
              color: 'white',
              fontSize: '14px',
              fontWeight: 600,
              opacity: 1,
              right: 20,
              marginTop: -16,
            },
            message: {
              fontSize: '1.2rem',
            },
            link: {
              fontWeight: 'bold',
              fontSize: '1.2rem',
            },
          }}
          message={' 🍪 Wir benutzen Cookies! 🍪 '}
          buttonMessage={'Alles klar !'}
          dismissOnScrollThreshold={200}
          link={<a href="https://heuliecher.de/datenschutz">Datenschutz</a>}
        />
      </React.Fragment>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
