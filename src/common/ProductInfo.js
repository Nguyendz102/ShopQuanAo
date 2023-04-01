import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const ProductInfo = () => {
    return(
        <View>
            <ScrollView>
           <Image source={require('../Screen/image/amiri.jpg')}
                    style={{
                        width: '94%',
                        height: 200,
                        borderRadius: 10,
                        alignSelf: 'center',
                        marginTop: 10,
                    }}/>
        
        <View style={{
            paddingHorizontal:16,
            marginTop:6

        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <Image source={require('../Screen/image/shopping.png')} style={{width:24,height:24}}></Image>
                <Text style={{
                    fontSize:16,
                    fontWeight:'400',
                    marginLeft:20
                }}>Shopping Fashion Men</Text>

            </View>
            <View style={{
                flexDirection: 'row',
                marginVertical: 4,
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Text style={{
                    fontSize:24,
                    fontWeight: '600',
                    letterSpacing:0.5,
                    marginVertical:4,
                    maxWidth:'84%'
                }}>Quần Amiri LikeAuth</Text>
                <Image source={require('../Screen/image/link.png')} style={{width:30,height:30, marginLeft:50,borderRadius:100,backgroundColor:'#4da6ff'}}></Image>
            </View>
            
                <Text style={{fontSize:12,fontWeight:'400',letterSpacing:1,opacity:0.5,lineHeight:20,maxWidth:'85%',maxHeight:44,marginBottom:18}}>
                Quần Bò Nam Amiri Đen Vá Gối Quần Jean màu đen gối vá họa tiết bản cao cấp
+Quần Jean Nam Khoá gối chất liệu cotton thô,chuẩn dáng sang trọng thể thao lịch lãm
+Quần jean nam rách gối kiểu dáng đường phố,được dệt bằng bò cotton thô mặc không xù không nhăn 
+Quần jean nam phù hợp với mọi loại ngoại cảnh ví dụ.đi chơi hay đi đám cưới hay du lịch
+Quần bò nam khoá gối còn rất dễ phối đồ.giày dép hay áo phông sơ mi
+Quần jean nam đen phù hợp với mọi lứa tuổi
TRẢ HÀNG HOÀN TIỀN NẾU KHÁCH KHÔNG HÀI LÒNG
ll:THÔNG SỐ KĨ THUẬT
***CÁCH CHỌN SIZE THAM KHẢO ĐỂ CÓ THỂ CHỌN ĐƯỢC QUẦN JEAN NAM PHÙ HỢP NHẤT:

                </Text>
            <View style={{
                padding:10,
                borderRadius:20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginVertical:14,
                borderBottomWidth:1,
                backgroundColor:'#e6e6e6'
            }}>
                <View style={{
                    flexDirection: 'row',
                    width: '80%',
                    alignItems: 'center'
                }}>
                    <View style={{alignItems:'center',justifyContent:'center',padding:12,borderRadius:100,marginRight:10,backgroundColor:'#D3D3D3'}}>
                    <Image source={require('../Screen/image/diachi.png')} style={{width:24,height:24}}></Image>
                    </View>
                    <Text>Hông Hà - Đan Phượng - Hà Nội</Text>
                    
                </View>
                <Image source={require('../Screen/image/next.png')} style={{width:12,height:12}}></Image>
            </View>
            <View style={{
                padding:10,
                borderRadius:20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginVertical:14,
                borderBottomWidth:1,
                backgroundColor:'#e6e6e6'
            }}>
                <View style={{
                    flexDirection: 'row',
                    width: '80%',
                    alignItems: 'center'
                }}>
                    <View style={{alignItems:'center',justifyContent:'center',padding:12,borderRadius:100,marginRight:10,backgroundColor:'#D3D3D3'}}>
                    <Image source={require('../Screen/image/phone.png')} style={{width:24,height:24}}></Image>
                    </View>
                    <Text>0377125775</Text>
                    
                </View>
                <Image source={require('../Screen/image/next.png')} style={{width:12,height:12}}></Image>
            </View>
            
                <View style={{
                    paddingHorizontal:16
                }}>
                    <Text style={{
                        fontSize:18,
                        fontWeight:'500',
                        marginBottom:4
                    }}>
                        1.000.000VND
                    </Text>
                    <Text>
                        Giảm Giá 20%
                    </Text>
                </View>
        </View>
        </ScrollView>
        <View style={{
            position: 'absolute',
            bottom: 10,
            height: '8%',
            width: '100%',
            justifyContent:'center',
            alignItems: 'center',

        }}>
            <TouchableOpacity style={{
                width:'86%',
                marginTop:200,
                height:'90%',
                backgroundColor:'#4da6ff',
                borderRadius:20,
                justifyContent:'center',
                alignItems:'center',

            }} onPress={()=> {}}>
                <Text style={{
                    fontSize: 12,
                    fontWeight:'500',
                    letterSpacing:1,
                    textTransform:'uppercase',
                    color:'#fff'
                }}>Mua Hàng</Text>
            </TouchableOpacity>

        </View>
        </View>
    )
}
export default ProductInfo;