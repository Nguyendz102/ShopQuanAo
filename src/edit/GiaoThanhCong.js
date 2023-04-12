import { Text, View } from "react-native";
import React from "react";
const GiaoThanhCong = () => {
    const navigation = useNavigation()
    const isFocused = useIsFocused()
    const [listDonHang,setListDonHang] = useState([])
    const [listCarts, setListCarts] = useState([])
    const [getAllProducts, setGetAllProducts] = useState([])
    const [getOrder,setGetOrder] = useState([])
    const info = useSelector((state)=> state.Reducers.arrUser)
    const [refreshing, setRefreshing] = useState(false);
    onRefresh = () => {
        getAllOrder()
        setRefreshing(true)
        
    }
}
const getAllOrder = async()=>{
    let arr = []
    await axios.get(`${GET_ALL_USER_ORDERS}?id=${info.id}`).then((res)=>{
        
        if(res.data.errCode === 0){
            setListDonHang(res.data.getDaGiaoThanhCong)
            setListCarts(res.data.getCarts)
            setGetAllProducts(res.data.getAllProducts)    
            setRefreshing(false)
        }
    }).catch((err)=>{console.log(err)})
}
console.log(listDonHang)
    
useEffect(()=>{
    getAllOrder()
},

[isFocused]);

showImage = (image)=>{
    if(image){
        let list = JSON.parse(image)
           let url = ""
       for(let i = 0; i< list.length; i++){
            if(list[0]){
                url = list[0]
            }
       }
       return url

    }
}

const formatDate= (date)=>{
    const newFr = Moment(date).locale("vi", fr).format("DD/MM/YYYY  HH:mm:ss");
    return newFr
}
const price =(price)=>{
    let x = price;
    x = x.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
    return  x;
}
getSize = (arr,id)=>{
    let size = ""
    arr.map((item)=>{
        if(item.ipSanPham === id){
            size = item.size
        }
    })
    return(
        size
    )
}
getSoLuong = (arr,id)=>{
    let soLuong = 0
    arr.map((item)=>{
        if(item.ipSanPham === id){
            soLuong = item.soLuong
        }
    })
   
    return(
        soLuong
    )
}
return (
    products.map((item,index)=>{
        return (
            <View key={index}>
                <View style={{flexDirection:"row",margin:5, borderBottomColor:"#ccc",borderBottomWidth:.7}}>
                    <Image
                       source={{uri:showImage(item.image)}} 
                       style={{width:50,height:50}}
                    />
                    <View style={{}}>
                        <Text style={{width:"80%",padding:6,alignItems:"center"}}>{item.tenSp}</Text>
                        <View style={{width:310, flexDirection:"row", justifyContent:"space-between"}}>
                        {item.sale <=0?
                             <Text style={{
                                fontSize: 15,
                                fontWeight: '600',
                                color: 'red'
                            }}>
                                
                                {price(item.giaSanPham) }
                            </Text>
                            :
                            <View style={{flexDirection:'row', marginLeft:4
                           
                           
                        }}>
                             <Text style={{
                                fontSize: 14,
                                fontWeight: '600',
                                color: '#696969',
                                textDecorationLine:'line-through'
                            }}>
                            
                            {price(item.giaSanPham ) }
                        </Text>
                           
                        <Text style={{
                            fontSize:18,
                            marginLeft:5,
                            marginRight:5
                        }}>-</Text>
                        <Text style={{
                                fontSize: 15,
                                fontWeight: '600',
                                color: '#B22222',
                               
                            }}>
                            
                            {price(item.giaSanPham-(item.giaSanPham *(item. sale/100)) ) }
                        </Text>
                        </View>
                    }
                    <Text>Size: {getSize(IdSP,item.id)}</Text>
                    <Text >x{getSoLuong(IdSP,item.id)}</Text>
                        </View>
                      
                    </View>
                </View>
                
            </View>
            
               
            
        )

   })
)

        
        

export default GiaoThanhCong;