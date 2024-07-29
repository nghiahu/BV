import { IoIosArrowBack, IoMdHeartEmpty } from 'react-icons/io'
import './addProduct.scss'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { addNewProduct, open } from '../../../../store/reducers/productReducer'
import { Category, Product } from '../../../../interface'
import { getAllCategory } from '../../../../store/reducers/categoryReducer'
import { FaBoxOpen } from 'react-icons/fa'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '../../../../config/config'
export default function AddProduct() {
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      });
    const data:any = useSelector((state:any) => state.categoryReducer.categorys)
    // const data:any = useSelector(state => state)
    const dispatch = useDispatch()
    const handelClick=()=>{
        dispatch(open(data))
    }
    useEffect(()=>{
        dispatch(getAllCategory())
        const date = new Date().toLocaleDateString('vi-VN');
        setNewProduct((preTime) => ({
            ...preTime,
            created_at: date,
            updated_at: date,
        }));
    },[])
    const [newProduct,setNewProduct] = useState<Product>({
        product_name:"",
        description:"",
        unit_price:0,
        stock_quantity:0,
        image:"",
        status:1,
        created_at:"",  
        updated_at:"",
        category:"",
        sold:0,
        quantity:0,
    })
    const [nameWaring,setNameWaring] = useState<boolean>(true)
    const [priceWaring,setPriceWaring] = useState<boolean>(true)
    const [cateWaring,setCateWaring] = useState<boolean>(true)
    const [imgWaring,setImgWaring] = useState<boolean>(true)
    const [desWaring,setDesWaring] = useState<boolean>(true)
    const handleChangName=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setNewProduct(preName=>({
            ...preName,
            product_name:e.target.value
        }))
        {newProduct.product_name.length>-1? setNameWaring(true) : setNameWaring(false)}

    }
    const handleChangPrice=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setNewProduct(prePrice=>({
            ...prePrice,
            unit_price:Number(e.target.value)
        }))
        {newProduct.unit_price!-1? setPriceWaring(true) : setPriceWaring(false)}
    }
    const handleChangCategory=(e:React.ChangeEvent<HTMLSelectElement>)=>{
        setNewProduct(preCategory=>({
            ...preCategory,
            category:e.target.value
        }))
        {newProduct.category.length>-1? setCateWaring(true) : setCateWaring(false)}
    }
    const handleChangStatus=(e:React.ChangeEvent<HTMLSelectElement>)=>{
        setNewProduct(preSta=>({
            ...preSta,
            status:Number(e.target.value)
        }))
    }
    const handleChangeDes=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setNewProduct(preDes=>({
            ...preDes,
            description:e.target.value
        }))
        {newProduct.description.length>-1? setDesWaring(true) : setDesWaring(false)}
    }
    const handleChangImg=async (e:React.ChangeEvent<HTMLInputElement>)=>{
        const file = e.target.files?.[0];
        if (file) {
            try {
                const storageRef = ref(storage, `nghiaImage/${file.name}`);
                const snapshot = await uploadBytes(storageRef, file);
                const url = await getDownloadURL(snapshot.ref);
                setNewProduct((preImg) => ({
                    ...preImg,
                    image: url,
                }));
            } catch (error) {
                console.error("Lỗi up ảnh: ", error);
            }
        }
        {newProduct.image.length>-1? setImgWaring(true) : setImgWaring(false)}
    }
    const handleClick=()=>{
        if(newProduct.product_name && newProduct.unit_price && newProduct.category && newProduct.image && newProduct.description){
            dispatch(addNewProduct(newProduct))
            dispatch(open(data))
        }else{
            {newProduct.product_name? setNameWaring(true) : setNameWaring(false)}
            {newProduct.unit_price? setPriceWaring(true) : setPriceWaring(false)}
            {newProduct.category? setCateWaring(true) : setCateWaring(false)}
            {newProduct.image? setImgWaring(true) : setImgWaring(false)}
            {newProduct.description? setDesWaring(true) : setDesWaring(false)}
        }
    }
  return (
    <div className='backGruondAddProduct'>
        <button className='backPage' onClick={handelClick}><IoIosArrowBack className='backPageIcon'/>Trở lại</button>
        <h4 className='TitleAddProduct'>Thêm sản phẩm</h4>
        <div style={{display:"flex"}}> 
        <div className='formInp'>
            <div className='divInp'>
                <label htmlFor="">Tên sản phẩm</label>
                <input type="text" className='InpAddPRoduct' onChange={handleChangName}/>
                <div className={nameWaring? 'errorPro' : 'errorProBlock'}>Tên sản phẩm không được để trống</div>
            </div>
            <div className='divInp'>
                <label htmlFor="">Đơn giá</label>
                <input type="number" className='InpAddPRoduct'onChange={handleChangPrice}/>
                <div className={priceWaring? 'errorPro' : 'errorProBlock'}>Giá sản phẩm không được để trống</div>
            </div>
            <div className='divInp'>
                <label htmlFor="">Danh mục</label>
                <select name="" id="" className='InpAddPRoduct' onChange={handleChangCategory}>
                    <option value="">--Danh mục--</option>
                    {data.map((item:Category)=>{
                        return <option value={item.category_id}>{item.category_name}</option>
                    })}
                </select>
                <div className={cateWaring? 'errorPro' : 'errorProBlock'}>Hãy chọn danh mục sản phẩm</div>
            </div>
            <div className='divInp'>
                <label htmlFor="">Trạng thái</label>
                <select name="" id="" className='InpAddPRoduct' onChange={handleChangStatus}>
                    <option value={1}>Có sẵn</option>
                    <option value={2}>Hết hàng</option>
                    <option value={3}>Đăng xem xét</option>
                    <option value={4}>Đặt hàng</option>
                </select>
            </div>
            <div className='divInp'>
                <div style={{display:"flex",alignItems:"end"}}>
                <div>
                <label htmlFor="">Hình ảnh</label>
                <input type="file" onChange={handleChangImg}/>
                </div>
                <div>
                    <img style={{width:"150%",height:"120px"}} src={newProduct.image? newProduct.image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTennRPUd54a25fFAYOTcRPNfolHw8HB2krB2EVv44gsvU_zPJr"} alt="" />
                </div>
                </div>
                <div className={imgWaring? 'errorPro' : 'errorProBlock'}>Vui lòng chọn hình ảnh sản phẩm</div>
            </div>
            <div className='divInp'>
                <label htmlFor="">Mô tả</label>
                <input type="text" className='InpAddPRoduct' onChange={handleChangeDes}/>
                <div className={desWaring? 'errorPro' : 'errorProBlock'}>Mô tả sản phẩm không được để trống</div>
            </div>
        </div>

            <div className='fromAddBtn'>
            <FaBoxOpen className='fromAddBtnIcon'/>
            <button onClick={handleClick} className='fromAddBtnBtn'>Thêm sản phẩm</button>
            </div>
        </div>
    </div>
  )
}
