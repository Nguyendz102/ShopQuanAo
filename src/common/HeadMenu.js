import { Image, Text, TouchableOpacity, View } from "react-native";

const HeadMenu = () => {
    const Sreach = () => {

    }
    return(
        <View style={{
            width:'100%',
            height: 70,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection : 'row',
            borderBottomWidth: 0.2,
            borderBottomColor: 'BeBeBe',
            backgroundColor: '#fff'
        }}>
            <Text style={{
                marginTop:10,
                fontWeight: '600',
                fontSize: 20,
                color: '#000',
                marginLeft: 20,
            }}>Fashion Men</Text>
            <TouchableOpacity onPress={Sreach()}>
            <Image source={require('../Screen/image/loupe.png')} style={{width:24,height:24,marginRight:20,marginTop:10}}
            ></Image>
            </TouchableOpacity>
            
        </View>

    )
}
export default HeadMenu;