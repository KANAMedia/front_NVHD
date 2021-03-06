import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styles from './galerieView.module.scss'
import Galerie from '../galerie/galerie'

class GalerieView extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles.galerieWrapper}>
          {this.props.data.page.edges.map(galerie => (
            <Galerie data={galerie} key={galerie.node.id} />
          ))}
        </div>
      </React.Fragment>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query galerieViewComponentQuery {
        page: allSanityGalerie {
          edges {
            node {
              id
              title
              slug {
                current
              }
              galerie {
                bild {
                  asset {
                    fluid(maxWidth: 700) {
                      ...GatsbySanityImageFluid
                    }
                    id
                    path
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <GalerieView data={data} {...props} />}
  />
)
