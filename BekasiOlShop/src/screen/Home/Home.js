import React from 'react'
import { 
    Image,
    ScrollView,
    Text,
    View
} from 'react-native'
// Import HomdeStyle
import { home } from '../../style/Home/HomeStyle'
// 

// Import PropsAllButton
import { PropsTouchAbleOpacity } from '../../component/PropsAllButton'
// 

class Home extends React.Component {

    constructor(props){
        super(props)

        this.state = {

            nameIcon : ['shopping_cart', 'phone']
        }
    }
    
    render() {
        return (
            <ScrollView style={home.container}>
                <View style={home.accomodateHeader}>
                    <Image 
                        source={{uri : 'https://i.ibb.co/nwWmTTs/Logo-Home-Header.png'}}
                        style={home.logoImage}
                    />
                    <Text style={home.textLogo}>BekasiOlShop</Text>
                </View>

                <View style={home.accomodateMain}>

                    <Text style={home.nameContent}>Needs</Text>
                    <Text style={home.widthLine}>__________________</Text>

                    <View style={home.mainContent}>
                        {/* {this.funMainContent()} */}
                        <Image 
                            source={require('../../assets/Icon/shopping_cart.png')}
                            style={home.iconContent}
                        />

                        <Image 
                            source={require('../../assets/Icon/phone.png')}
                            style={home.iconContent}

                        />

                        <Image 
                            source={require('../../assets/Icon/food.png')}
                            style={home.iconContent}
                        />

                        <Image 
                            source={require('../../assets/Icon/shipping_truck.png')}
                            style={home.iconContent}
                        />

                        <Image 
                            source={require('../../assets/Icon/atm.png')}
                            style={home.iconContent}
                        />

                        <Image 
                            source={require('../../assets/Icon/games.png')}
                            style={home.iconContent}
                        />
                    </View>

                </View>

                <View style={home.accomodateBody}>
                        
                    <Text style={home.nameContent}>Product</Text>
                    <Text style={home.widthLine}>__________________</Text>

                    <View style={home.accomodateContent}>

                            <View style={home.bodyContent}>
                                <Image 
                                    source={require('../../assets/Image/MacbookPro11.png')}
                                    style={home.imageSize}
                                />
                                <Text style={home.textNameProduct}>Macbook M1 Grey</Text>
                                <Text style={home.textPrice}>$ 20000,-</Text>
                                <PropsTouchAbleOpacity 
                                    styleTouchAbleOpacity={home.buttonAddCart}
                                    styleTextTouchAbleOpacity={home.styleTextButtonAddToCart}
                                    textTouchAbleOpacity="Add"
                                />
                                <PropsTouchAbleOpacity 
                                    styleTouchAbleOpacity={home.buttonCash}
                                    styleTextTouchAbleOpacity={home.styleTextButtonCash}
                                    textTouchAbleOpacity="Buy"
                                />
                            </View>


                            <View style={home.bodyContent}>
                                <Image 
                                    source={require('../../assets/Image/HpIphone11.png')}
                                    style={home.imageSize}
                                />
                                <Text style={home.textNameProduct}>I Phone 11</Text>
                                <Text style={home.textPrice}>$ 1000,-</Text>
                                <PropsTouchAbleOpacity 
                                    styleTouchAbleOpacity={home.buttonAddCart}
                                    styleTextTouchAbleOpacity={home.styleTextButtonAddToCart}
                                    textTouchAbleOpacity="Add"
                                />
                                <PropsTouchAbleOpacity 
                                    styleTouchAbleOpacity={home.buttonCash}
                                    styleTextTouchAbleOpacity={home.styleTextButtonCash}
                                    textTouchAbleOpacity="Buy"
                                />
                            </View>


                            <View style={home.bodyContent}>
                                <Image 
                                    source={require('../../assets/Image/BajuReactNative.png')}
                                    style={home.imageSize}
                                />
                                <Text style={home.textNameProduct}>Kaos React Native Developer</Text>
                                <Text style={home.textPrice}>$ 100,-</Text>
                                <PropsTouchAbleOpacity 
                                    styleTouchAbleOpacity={home.buttonAddCart}
                                    styleTextTouchAbleOpacity={home.styleTextButtonAddToCart}
                                    textTouchAbleOpacity="Add"
                                />
                                <PropsTouchAbleOpacity 
                                    styleTouchAbleOpacity={home.buttonCash}
                                    styleTextTouchAbleOpacity={home.styleTextButtonCash}
                                    textTouchAbleOpacity="Buy"
                                />
                            </View>


                            <View style={home.bodyContent}>
                                <Image 
                                    source={require('../../assets/Image/MacbookPro11.png')}
                                    style={home.imageSize}
                                />
                                <Text style={home.textNameProduct}>Macbook M1 Grey</Text>
                                <Text style={home.textPrice}>$ 20000,-</Text>
                                <PropsTouchAbleOpacity 
                                    styleTouchAbleOpacity={home.buttonAddCart}
                                    styleTextTouchAbleOpacity={home.styleTextButtonAddToCart}
                                    textTouchAbleOpacity="Add"
                                />
                                <PropsTouchAbleOpacity 
                                    styleTouchAbleOpacity={home.buttonCash}
                                    styleTextTouchAbleOpacity={home.styleTextButtonCash}
                                    textTouchAbleOpacity="Buy"
                                />
                            </View>


                            <View style={home.bodyContent}>
                                <Image 
                                    source={require('../../assets/Image/HpIphone11.png')}
                                    style={home.imageSize}
                                />
                                <Text style={home.textNameProduct}>I Phone 11</Text>
                                <Text style={home.textPrice}>$ 1000,-</Text>
                                <PropsTouchAbleOpacity 
                                    styleTouchAbleOpacity={home.buttonAddCart}
                                    styleTextTouchAbleOpacity={home.styleTextButtonAddToCart}
                                    textTouchAbleOpacity="Add"
                                />
                                <PropsTouchAbleOpacity 
                                    styleTouchAbleOpacity={home.buttonCash}
                                    styleTextTouchAbleOpacity={home.styleTextButtonCash}
                                    textTouchAbleOpacity="Buy"
                                />
                            </View>


                            <View style={home.bodyContent}>
                                <Image 
                                    source={require('../../assets/Image/BajuReactNative.png')}
                                    style={home.imageSize}
                                />
                                <Text style={home.textNameProduct}>Kaos React Native Developer</Text>
                                <Text style={home.textPrice}>$ 100,-</Text>
                                <PropsTouchAbleOpacity 
                                    styleTouchAbleOpacity={home.buttonAddCart}
                                    styleTextTouchAbleOpacity={home.styleTextButtonAddToCart}
                                    textTouchAbleOpacity="Add"
                                />
                                <PropsTouchAbleOpacity 
                                    styleTouchAbleOpacity={home.buttonCash}
                                    styleTextTouchAbleOpacity={home.styleTextButtonCash}
                                    textTouchAbleOpacity="Buy"
                                />
                            </View>


                            <View style={home.bodyContent}>
                                <Image 
                                    source={require('../../assets/Image/MacbookPro11.png')}
                                    style={home.imageSize}
                                />
                                <Text style={home.textNameProduct}>Macbook M1 Grey</Text>
                                <Text style={home.textPrice}>$ 20000,-</Text>
                                <PropsTouchAbleOpacity 
                                    styleTouchAbleOpacity={home.buttonAddCart}
                                    styleTextTouchAbleOpacity={home.styleTextButtonAddToCart}
                                    textTouchAbleOpacity="Add"
                                />
                                <PropsTouchAbleOpacity 
                                    styleTouchAbleOpacity={home.buttonCash}
                                    styleTextTouchAbleOpacity={home.styleTextButtonCash}
                                    textTouchAbleOpacity="Buy"
                                />
                            </View>


                            <View style={home.bodyContent}>
                                <Image 
                                    source={require('../../assets/Image/HpIphone11.png')}
                                    style={home.imageSize}
                                />
                                <Text style={home.textNameProduct}>I Phone 11</Text>
                                <Text style={home.textPrice}>$ 1000,-</Text>
                                <PropsTouchAbleOpacity 
                                    styleTouchAbleOpacity={home.buttonAddCart}
                                    styleTextTouchAbleOpacity={home.styleTextButtonAddToCart}
                                    textTouchAbleOpacity="Add"
                                />
                                <PropsTouchAbleOpacity 
                                    styleTouchAbleOpacity={home.buttonCash}
                                    styleTextTouchAbleOpacity={home.styleTextButtonCash}
                                    textTouchAbleOpacity="Buy"
                                />
                            </View>


                            <View style={home.bodyContent}>
                                <Image 
                                    source={require('../../assets/Image/BajuReactNative.png')}
                                    style={home.imageSize}
                                />
                                <Text style={home.textNameProduct}>Kaos React Native Developer</Text>
                                <Text style={home.textPrice}>$ 100,-</Text>
                                <PropsTouchAbleOpacity 
                                    styleTouchAbleOpacity={home.buttonAddCart}
                                    styleTextTouchAbleOpacity={home.styleTextButtonAddToCart}
                                    textTouchAbleOpacity="Add"
                                />
                                <PropsTouchAbleOpacity 
                                    styleTouchAbleOpacity={home.buttonCash}
                                    styleTextTouchAbleOpacity={home.styleTextButtonCash}
                                    textTouchAbleOpacity="Buy"
                                />
                            </View>


                        </View>
                        
                    </View>
            </ScrollView>
        )
    }
}

export { Home }