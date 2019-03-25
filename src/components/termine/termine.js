import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import styles from './termine.module.scss'
import Termin from '../termin/termin'

class Termine extends React.Component {
  state = {
    termine: [],
  }
  prepareData = data => {}

  componentWillMount() {
    this.props.data.termine.edges.filter(termin => {
      const currentDate = new Date()
      const terminDate = new Date(`${termin.node.date}`)
      if (terminDate > currentDate) {
        this.setState({
          termine: [...termin],
        })
      }
    })
  }

  render() {
    console.log(this.state)
    return (
      <React.Fragment>
        {this.state.termine ? (
          <div className={styles.termine}>
            {this.state.termine.map(termin => (
              <Termin
                key={termin.node.id}
                terminKey={termin.node.id}
                date={termin.node.date}
                title={termin.node.title}
              />
            ))}
          </div>
        ) : (
          <p>Jemand hat vergessen hier die nächsten Termine ein zu tragen 🏃</p>
        )}
      </React.Fragment>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query termineComponentQuery {
        termine: allSanityTermin {
          edges {
            node {
              id
              date
              title
            }
          }
        }
      }
    `}
    render={data => <Termine data={data} {...props} />}
  />
)
