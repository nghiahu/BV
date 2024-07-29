import React, { useEffect, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { MdCategory } from 'react-icons/md';
import { FaImage } from 'react-icons/fa';
import { GrNotes } from 'react-icons/gr';
import { useSelector, useDispatch } from 'react-redux';
import { addNewCategory, open } from '../../../../store/reducers/categoryReducer';
import './adCategoryad.scss';
import { Category } from '../../../../interface';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../../../config/config';

export default function AdCategoryAdd() {
    const [nameWarning,setNameWarning] = useState<boolean>(true)
    const [DesWarning,setDesWarning] = useState<boolean>(true)
    const [avataWarning,setAvataWarning] = useState<boolean>(true)
    const dataCate: any = useSelector((state) => state);
    const dispatch = useDispatch();

    const closeBlock = () => {
        dispatch(open(dataCate));
    };

    const [newCategory, setNewCategory] = useState<Category>({
        category_name: "",
        description: "",
        status: true,
        avatar: "",
        created_at: "",
        updated_at: "",
    });

    const handleChangName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewCategory((prev) => ({
            ...prev,
            category_name: e.target.value,
        }));
        {newCategory.category_name.length>-1? setNameWarning(true):setNameWarning(false)}
    };

    const handleChangeDescrip = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewCategory((prev) => ({
            ...prev,
            description: e.target.value,
        }));
        {newCategory.description.length > -1? setDesWarning(true):setAvataWarning(false)}
    };

    const handleChangImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            try {
                const storageRef = ref(storage, `nghiaImage/${file.name}`);
                const snapshot = await uploadBytes(storageRef, file);
                const url = await getDownloadURL(snapshot.ref);
                setNewCategory((prev) => ({
                    ...prev,
                    avatar: url,
                }));
            } catch (error) {
                console.error("Lỗi up ảnh: ", error);
            }
        }
        {newCategory.avatar.length>-1? setAvataWarning(true):setAvataWarning(false)}
    };

    const handleClickAddCategory = () => {
       if(newCategory.category_name && newCategory.description && newCategory.avatar){
        dispatch(addNewCategory(newCategory));
        dispatch(open(dataCate));
       }else{
        {newCategory.category_name? setNameWarning(true):setNameWarning(false)}
        {newCategory.avatar? setAvataWarning(true):setAvataWarning(false)}
        {newCategory.description? setDesWarning(true):setDesWarning(false)}
       }
    };

    useEffect(() => {
        const date = new Date().toLocaleDateString('vi-VN');
        setNewCategory((prev) => ({
            ...prev,
            created_at: date,
            updated_at: date,
        }));
    }, []);

    console.log(newCategory);

    return (
        <div>
            <div className='backgroundAddCategory'>
                <div className='arrange'>
                    <div className='backBlock' onClick={closeBlock}>
                        <IoIosArrowBack className='backBlockIcon' />
                        <div>Back</div>
                    </div>
                    <div className='inpBlock'>
                        <label><MdCategory className='iconCategory' /></label>
                        <input type="text" placeholder='Tên danh mục' className='inpCategory' onChange={handleChangName} />
                        <div className={nameWarning? "errorCategory" : "errorCategoryBlock"}>Tên danh mục không được để trống</div>
                    </div>
                    <div className='inpBlock'>
                        <label><FaImage className='iconCategory' /></label>
                        <input type="file" placeholder='Chọn ảnh' className='inpCategory' onChange={handleChangImg} />
                        <div className={avataWarning? "errorCategory" : "errorCategoryBlock"}>Vui lòng thêm ảnh</div>
                    </div>
                    <div className='inpBlockArea'>
                        <label><GrNotes className='iconTexAre' /></label>
                        <textarea className='inpTexAre' placeholder='Mô tả' onChange={handleChangeDescrip}></textarea>
                        <div className={DesWarning? "errorCategory" : "errorCategoryBlock"}>Mô tả không được để trống</div>
                    </div>
                    <button className='btnAddCategory' onClick={handleClickAddCategory} >Thêm danh mục</button>
                </div>
            </div>
        </div>
    );
}
