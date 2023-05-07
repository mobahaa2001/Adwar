import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import { categories } from '../../../Data/categories';
import { products } from '../../../Data/productes';
import CategoryBox from '../../../components/CategoryBox';
import ProductHomeItem from '../../../components/ProductHomeItem';
import ProductDetails from '../ProductDetails';

const Home = ({ navigation }) => {
    const [selectedCategory, setSelectedCategory] = useState()
    const [filterProducts, setFilterProducts] = useState(products)
    const [keyword, setKeyword] = useState()

    useEffect(() => {
        if (selectedCategory && !keyword) {
            const updateProducts = products.filter((product) => product?.category === selectedCategory)
            setFilterProducts(updateProducts)
        } else if (selectedCategory && keyword) {
            const updateProducts = products.filter((product) => product?.category === selectedCategory && product?.title?.toLowerCase().includes(keyword?.toLowerCase()))
            setFilterProducts(updateProducts)
        } else if (!selectedCategory && keyword) {
            const updateProducts = products.filter((product) => product?.title?.toLowerCase().includes(keyword?.toLowerCase()))
            setFilterProducts(updateProducts)
        } else if (!keyword && !selectedCategory) {
            setFilterProducts(products)
        }
    }, [selectedCategory, keyword])

    const renderCategoryItem = ({item, index}) => {
        return (
            <CategoryBox 
                onPress={() => setSelectedCategory(item?.id)}
                isSelected = {item.id === selectedCategory}
                isFirst={index === 0} 
                title={item?.title} 
                image={item?.image}/>
        )
    }

    const renderProductItem = ({item}) => {
        const onProductPress = (product) => {
            navigation.navigate('ProductDetails', { product })
        }

        return (
            <ProductHomeItem onPress={() => onProductPress(item)} {...item} />
        )
    }

    return (
        <SafeAreaView>
            <Header onSearch={setKeyword} keyword={keyword} showSearch title="Find All You Need" />
            <View>
            <FlatList 
                showsHorizontalScrollIndicator={false} 
                style={styles.list} 
                horizontal data={categories} 
                renderItem={renderCategoryItem} 
                keyExtractor={(item, index) => String(index)}
            />
            </View>
            <FlatList 
                style={styles.productsList} 
                numColumns={2} 
                data={filterProducts} 
                renderItem={renderProductItem} 
                keyExtractor={(item) => String(item.id)}
                ListFooterComponent={<View style={{height: 200}}/>}
            />
        </SafeAreaView>
    )
}

export default React.memo(Home);