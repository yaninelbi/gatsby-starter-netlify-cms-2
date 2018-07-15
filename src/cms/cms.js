import CMS from 'netlify-cms'

import ProductPagePreview from './preview-templates/ProductPagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('products', ProductPagePreview)
