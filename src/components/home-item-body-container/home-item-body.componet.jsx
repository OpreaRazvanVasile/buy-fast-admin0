
import { RemoveXdivRename } from "../category-rename/category-rename.styles"
import ChangeImageCategory from "../category-change-image/category-change-image.componet"
import RenameComponet from "../category-rename/caregory-rename.componet"
import HomeItemBodyDefault from "../home-body-default/home-body-default.componet"
import RemoveCategoryElement from "../remove-category/remove-category.componet"
import { NewItemBody } from "../remove-category/remove-category.styled"
import { ItemBody } from "../home-item-container/home-item-container-style"
const HomeItemBodyContainer=(
    {
  category,
  isRemoveXclick,
  setIsRemoveXclick,
  isImageDlbCliked,
  setIsImageDblCkicked,
  isRenameBtnClick,
  setIsRenameBtnClick})=>{

    console.log(isImageDlbCliked)

  if(isRemoveXclick){

    return  ( 

   <NewItemBody>

 <RemoveCategoryElement></RemoveCategoryElement>
<RemoveXdivRename onClick={()=>isRemoveXclick?setIsRemoveXclick(false):setIsRemoveXclick(true)}>&#10006;</RemoveXdivRename>
</NewItemBody>
   
       )
  }

  else if(isImageDlbCliked){
    return(
    <ItemBody>

   <ChangeImageCategory 
   setIsRenameBtnClick={setIsRenameBtnClick}
    setIsImageDblCkicked={setIsImageDblCkicked}
     categoryName={category.title}/>

    </ItemBody>
    )
  }

 else if(isRenameBtnClick){
    return (
    <ItemBody>

  
 
  <RenameComponet 
  setIsImageDblCkicked={setIsImageDblCkicked} 
  setIsRenameBtnClick={setIsRenameBtnClick} 
 categoryName={category.title}>

    </RenameComponet>


     </ItemBody>
    )
  }
 
 return (

    <ItemBody>
<HomeItemBodyDefault
 category={category}
  isRemoveXclick={isRemoveXclick} 
  setIsRemoveXclick={setIsRemoveXclick}
   setIsRenameBtnClick={setIsRenameBtnClick}>

   </HomeItemBodyDefault>
</ItemBody>
  
 )

  
}
export default HomeItemBodyContainer