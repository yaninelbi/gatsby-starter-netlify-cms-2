import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'

export const ProductTemplate = ({
  title,
  image,
  brand,
}) => {
  return (
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{brand.title}</p>
            <p>{image.image}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

ProductTemplate.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  brand: PropTypes.string,
}

const Product = ({ data }) => {
  const { markdownRemark: product } = data

  return (
    <ProductTemplate
      title={product.frontmatter.title}
      image={product.frontmatter.image}
    />
  )
}

export default Product

export const pageQuery = graphql`
  query ProductByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        image
      }
    }
  }
`
