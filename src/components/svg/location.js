import React from 'react'

export default class Location extends React.Component {
  render() {
    return (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill={this.props.fill}
        className={this.props.className}
        viewBox="0 0 20 20"
      >
        <title>location</title>
        <path d="M19.367 18.102l-1.367-4.102h-1.5l0.833 4h-14.666l0.833-4h-1.5l-1.368 4.102c-0.347 1.044 0.268 1.898 1.368 1.898h16c1.1 0 1.715-0.854 1.367-1.898zM15 5c0-2.761-2.238-5-5-5s-5 2.239-5 5c0 4.775 5 10 5 10s5-5.225 5-10zM7.3 5.060c0-1.491 1.208-2.699 2.7-2.699s2.7 1.208 2.7 2.699c0 1.492-1.209 2.7-2.7 2.7s-2.7-1.209-2.7-2.7z" />
      </svg>
    )
  }
}
