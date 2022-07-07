const x = products.products;
let allProducts = [...x];
let filteredProducts = []

allProducts.forEach(product => {
    product.variant_groups[0].options.filter(option => {
        filteredType.color.forEach(color => {
            if (color === option.name) {
                filteredProducts = [...filteredProducts, product]
            }
        })
    })

    product.variant_groups[1].options.filter(option => {
        filteredType.size.forEach(size => {
            if (size === option.name) {
                filteredProducts = [...filteredProducts, product]
            }
        })
    })
})

console.log(Array.from(new Set(filteredProducts)))
console.log(products.products)


const filterData = {
    color: [
        {
            type: 'color',
            value: 'White',
            text: 'Ağ'
        },
        {
            type: 'color',
            value: 'Black',
            text: 'Qara'
        },
        {
            type: 'color',
            value: 'Red',
            text: 'Qirmizi'
        },
        {
            type: 'color',
            value: 'Blue',
            text: 'Mavi'
        },
    ]
}

const handleTypeChange = ({ target: { checked, value, dataset } }) => {
    if (checked) {
        dataset.filter === 'color'
            ? setFilteredType(({ color, size }) => ({ color: [...color, value], size: [...size] }))
            : setFilteredType(({ color, size }) => ({ size: [...size, value], color: [...color] }))
    } else {
        dataset.filter === 'color'
            ? setFilteredType(({ color, size }) => ({ color: color.filter(e => e !== value), size: [...size] }))
            : setFilteredType(({ color, size }) => ({ size: size.filter(e => e !== value), color: [...color] }))
    }
};