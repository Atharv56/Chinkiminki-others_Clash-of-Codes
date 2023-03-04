import React, {useEffect, useState} from 'react'
import {collection, onSnapshot, orderBy, query} from 'firebase/firestore'
import {db} from '../firebase'
import Delete from './delete'

const BlogContainer = () => {
  const [articles, setArticles] = useState([])
  useEffect(()=>{
    const articleRef = collection(db, "blogs")
    const q = query(articleRef, orderBy("createdAt", "desc"))
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc)=>({
        id: doc.id, 
        ...doc.data(),
      }))
      setArticles(articles)
      console.log(articles)
    })
  }, [])
  return (
    <div>
      {
        articles.length === 0? (
            <p>No articles found</p>
        ):(
          articles.map(({id, title, description, image_url, createdAt}) => (
          <div className='border mt-3 p-3 bg-light' key={id}>
            <div className='row' style={{display: 'flex'}}>

            <div className='col-3'>
                <img src = {image_url} alt = 'title' style={{height:180, width: 180}}/>
              </div>
              <div className='col-9 p-3'>
                <h2>{title}</h2>
                <p>{createdAt.toDate().toDateString()}</p>
                <h6>{description}</h6>
                <Delete  id={id} image_url = {image_url}/>
                </div>

            </div>
          </div>
        )
      )
      )
      
      }
    </div>
  )
}

export default BlogContainer;
// export default function blogCont() {
//   return (
//     <div>
//         <h1>Atharv</h1>
//     </div>
//   )
// }
