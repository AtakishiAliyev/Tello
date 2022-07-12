import React from "react"
import ContentLoader from "react-content-loader"

const SearchSkeleton = (props) => (
    <ContentLoader
        speed={2}
        height={100}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="5" ry="5" width="64" height="64" />
        <rect x="85" y="0" rx="5" ry="5" width="220" height="25" />
        <rect x="85" y="35" rx="5" ry="5" width="120" height="25" />
    </ContentLoader>
)

export default SearchSkeleton

