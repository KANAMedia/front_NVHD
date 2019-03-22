import { Link, StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './header.module.scss'
import Navigation from '../navigation/navigation'

class Header extends React.Component {
  state = {
    showMenu: false,
  }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu,
    })
  }

  render() {
    return (
      <header className={styles.header}>
        <div className={styles.logoBox}>
          <h1 style={{ margin: 0 }}>
            <Link to="/">
              <img
                key={`${this.props.data.logo.edges[0].node.id}-image`}
                className={styles.logo}
                src={`https://cdn.sanity.io/${
                  this.props.data.logo.edges[0].node.logo.asset.path
                }`}
                alt={this.props.siteTitle}
              />
            </Link>
          </h1>
        </div>

        <button
          className={styles.burgerNavIconBox}
          onClick={this.toggleMenu}
          type="button"
          aria-label="Menu"
          aria-controls="navigation"
        >
          <span
            className={
              this.state.showMenu
                ? styles.burgerNavIconOpen
                : styles.burgerNavIconClosed
            }
          />
        </button>
        <Navigation
          showMenu={this.state.showMenu}
          style={'header'}
          currentPath={this.props.currentPath}
        />
      </header>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query headerComponentQuery {
        logo: allSanityEinstellungen {
          edges {
            node {
              id
              title
              logo {
                asset {
                  path
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Header data={data} {...props} />}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}