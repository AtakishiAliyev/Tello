import React from "react"
import ContentLoader from "react-content-loader"

const ProductSkeleton = (props) => (
    <ContentLoader
        speed={2}
        width={320}
        height={280}
        viewBox="0 0 300 300"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="25%" y="0" rx="5" ry="5" width="180" height="190" />
        <rect x="20" y="225" rx="5" ry="5" width="200" height="25" />
        <rect x="20" y="265" rx="5" ry="5" width="160" height="25" />
    </ContentLoader>
)

export default ProductSkeleton

