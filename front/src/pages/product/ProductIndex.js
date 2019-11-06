import React, { useEffect, useRef } from 'react';
import { useLayout } from '../../contexts/layoutContext';

const ProductIndex = () => {
  const { current: { setHeaderTitle }} = useRef(useLayout());

  useEffect(() => {
    setHeaderTitle('Product');
  }, [setHeaderTitle]);

  return <div>THIS IS PRODUCT INDEX</div>;
};

export default ProductIndex;
