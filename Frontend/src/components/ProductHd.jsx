import React from 'react';
import { TbArrowRight } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

const ProductHd = (props) => {
    const { product } = props;
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    const getCategoryPath = (category) => {
        let pluralCategory;
        switch (category.toLowerCase()) {
            case 'kid':
                pluralCategory = 'kids';
                break;
            case 'man':
                pluralCategory = 'men';
                break;
            case 'woman':
                pluralCategory = 'women';
                break;
            default:
                pluralCategory = `${category}s`;
                break;
        }
        return `/${pluralCategory}`;
    };

    return (
        <div className='flex items-center flex-wrap gap-x-2 medium-16 py-4 capitalize cursor-pointer '>
            <span className='hover:text-orange-600' onClick={() => handleNavigation('/')}>Home</span>
            <TbArrowRight />
            <span className='hover:text-orange-600' onClick={() => handleNavigation(getCategoryPath(product.category))}>
                {product.category}
            </span>
            <TbArrowRight />
            <span className='hover:text-orange-600'>{product.name}</span>
        </div>
    );
};

export default ProductHd;
