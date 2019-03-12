import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styles from './galerieView.module.scss'

/********
  TODO:
  - Take the first image of a "galerie" as thump
  - link to a galerie with all the images
*/

class GalerieView extends React.Component {
  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        {this.props.data.page.edges.map(galerie => (
          <div className={styles.galerie} key={galerie.node.id}>
            <Link to={`/galerie/${galerie.node.slug.current}/`}>
              <h3>{galerie.node.title}</h3>
              <img
                src={`https://cdn.sanity.io/${
                  galerie.node.galerie.bild[0].asset.path
                }`}
              />
            </Link>
          </div>
        ))}
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