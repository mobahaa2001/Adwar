import React, { useState } from 'react';
import { ActivityIndicator, Image, KeyboardAvoidingView, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header'
import { launchImageLibrary } from 'react-native-image-picker';
import Input from '../../../components/Input/Input';
import { categories } from '../../../Data/categories';
import Button from '../../../components/Button';

const CreateListing = ({ navigation }) => {

    const [images, setImages] = useState([])

    const [loading, setLoading] = useState(false)

    const [values, setValues] = useState({})


    const goBack = () => {
        navigation.goBack()
    }

    const uploadNewImage = async () => {
        setLoading(true)
        const result = await launchImageLibrary()
        console.log('result', result)
        if(result?.assets?.length) {
            setImages(list => ([...list, ...result?.assets]))
            setLoading(false)
        }
    }

    const onDeleteImage = (images) => {
        setImages((list) => {
            const filteredImages = list.filter(img => img?.fileName !== images?.fileName)
            return filteredImages 
        })
    }

    const onChange = (value, key) => {
        setValues((val) => ({ ...val, [key]: value }))
    }

    return (
        <SafeAreaView>
            <Header showBack={true} onBackPress={goBack} title="Creat a new listing"/>
                <ScrollView style={styles.container}>
                    <KeyboardAvoidingView behavior="height">
                        <Text style={styles.sectionTitle}>إضافة صورة</Text>
                        <View style={styles.imageRow}>
                            <TouchableOpacity disabled={ loading } style={styles.uploadContainer} onPress={uploadNewImage}>
                                <View style={styles.uploadCircle}>
                                    <Text style={styles.uploadPlus}>+</Text>
                                </View>
                            </TouchableOpacity>

                            {images?.map(images => (
                                <View style={styles.imageCont} key={images?.fileName}> 
                                    <Image style={styles.image} source={{uri: images?.uri}}/>
                                    <Pressable hitSlop={20} onPress={() => onDeleteImage(images)}>
                                        <Image style={styles.delete} source={require("../../../assets/close.png")}/>
                                    </Pressable>
                                </View>
                            ))}

                            {loading? (
                                <ActivityIndicator />
                            ) : null}

                        </View>
                            
                        <Input placeholder="اسم المنتج" label="المنتج" value={values.title} onChangeText={(v) => onChange(v, 'title')} />
                        <Input placeholder="أختار قسم المنتج" label="قسم" value={values.categoty} onChangeText={(v) => onChange(v, 'categoty')} type="picker" options={categories} />
                        <Input placeholder="أدخل سعر المنتج" label="سعر" value={values.price} onChangeText={(v) => onChange(v, 'price')} keyboardType="numeric" />
                        <Input style={styles.textarea} placeholder="إضافة معلومات أكثر عن المنتج" label="المواصفات" value={values.description} onChangeText={(v) => onChange(v, 'description')} multiline/>

                    </KeyboardAvoidingView>
                        <Button title="Submit" style={styles.button} />
                </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(CreateListing);