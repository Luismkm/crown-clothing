import ProductCard from '../product-card/product-card.component'

import { CategoryPreviewContainer, NavTitle, Preview } from './category-preview.styles'

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <NavTitle to={title}>{title.toUpperCase()}</NavTitle>
      </h2>
      <Preview>
        {
          products
            .filter((_, idx) => idx < 4)
            .map((product) =>
            <ProductCard key={product.id} product={product} />)
        }
      </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview