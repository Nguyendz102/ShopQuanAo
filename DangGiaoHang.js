import { Text, View } from "react-native";
import React from "react";
const DangGiaoHang = () => {
    const getAllOrder = async()=>{
        let arr = []
        await axios.get(`${GET_ALL_USER_ORDERS}?id=${info.id}`).then((res)=>{
            
            if(res.data.errCode === 0){
                setListDonHang(res.data.getDaDangGiao)
                setListCarts(res.data.getCarts)
                setGetAllProducts(res.data.getAllProducts)    
                setRefreshing(false)
            }
        }).catch((err)=>{console.log(err)})
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
tongSoSanPham =(id)=>{
    let list = JSON.parse(id)
  let count = 0
    list.map((item)=>{
        listCarts.map((item2,inbiex)=>{
            if(item === item2.id){
                count = count+1
            }
        }) 
    })
    return count
}

    return (
        <View>
            <Text>DangGiaoHang</Text>
        </View>
    )
}
export default DangGiaoHang;