import React, { useEffect } from 'react'
import { MdAdd } from 'react-icons/md'
import './adCategory.scss'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getAllCategory, open } from '../../../store/reducers/categoryReducer'
import { Category } from '../../../interface';
import AdCategoryAdd from './adCategoryAdd/AdCategoryAdd'
export default function AdCategory(){
  const data:any = useSelector(state => state)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllCategory())
  },[])
  const addCartegory=()=>{
    dispatch(open(data))
  }
  return (
    <>
    {data.categoryReducer.status?
<div className='adCategory'>
      <div className='adCategoryTop'>
      <div className='addNewCategoryad' onClick={addCartegory}>
        <MdAdd />
        <>Thêm Danh mục</>
      </div>
        </div>
<div className='fromCategory'>
      {data.categoryReducer.categorys.map((category:Category)=>{
        return <div key={category.category_id} className='ItemCatrgory'>
          <img src={category.avatar} alt="" className='categoryImg'/>
          <div className='categoryName'>{category.category_name}</div>
        </div>

      })}
    </div>
    </div> : <AdCategoryAdd/>}
    </>
  )
}
