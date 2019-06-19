import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = () => (
    <ContentLoader
    height={160}
    width={600}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    >
    <rect x="19" y="93" rx="3" ry="3" width="151" height="9" />
    <circle cx="94" cy="44" r="30" />
    <rect x="19" y="112" rx="3" ry="3" width="151" height="9" />
    <circle cx="293" cy="45" r="30" />
    <rect x="215" y="92" rx="3" ry="3" width="151" height="9" />
    <rect x="217" y="110" rx="3" ry="3" width="151" height="9" />
    <circle cx="481" cy="45" r="30" />
    <rect x="409" y="92" rx="3" ry="3" width="151" height="9" />
    <rect x="408" y="110" rx="3" ry="3" width="151" height="9" />
  </ContentLoader>
  )

  export default MyLoader