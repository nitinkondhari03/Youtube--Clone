let api_key='AIzaSyAEGdIVPxdBV6_knL4qCd28bwcbV5l3JIk'
let container=document.getElementById('container')
const mostpopular= async()=>{
   try{
      let res=await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=${api_key}`)
      let data=await res.json()
      console.log(data)
      let most=data.items
      popularvideoss(most)
   }
   catch(err){
      console.log("err:",err)
   }
  
}
mostpopular()

let popularvideoss=(most)=>{
   most.forEach(({snippet,id:{videoId}})=>{
      const thumbnail=snippet.thumbnails.high.url
     const tiless=snippet.title
     let data={
       snippet,
       videoId,
     }
      let div=document.createElement("div")
      div.onclick=()=>{
         storeclickedvideo(data)
      }
      let img=document.createElement("img")
      img.src=thumbnail
      let titles=document.createElement("h4")
      titles.innerText=tiless
      let channelid=document.createElement("h5")
      channelid.innerText=snippet.channelTitle


       div.append(img,titles,channelid)
      container.append(div)
   })
}


const searchvideos =async()=>{
try{ 
    let query=document.getElementById("query").value
   
    let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&type=video&key=${api_key}`)

    let data=await res.json()
    let actual_data=data.items;
   console.log('actual_data:',actual_data)
    appendvideo(actual_data)
}
catch(err){
   console.log("err:",err)
}
}


let  appendvideo=(data)=>{
    container.innerText=null;
     data.forEach(({snippet,id:{videoId}})=>{
       let thumbnail=snippet.thumbnails.high.url
       let tiless=snippet.title
       let data={
         snippet,
         videoId,
       }
        let div=document.createElement("div")
        div.onclick=()=>{
           storeclickedvideo(data)
        }
        let img=document.createElement("img")
        img.src=thumbnail
        let titles=document.createElement("h4")
        titles.innerText=tiless
        let channelid=document.createElement("h5")
        channelid.innerText=snippet.channelTitle


         div.append(img,titles,channelid)
        container.append(div)
     })

}

function storeclickedvideo(data){
   localStorage.setItem("click_item",JSON.stringify(data))
   window.location="video.html"
}
let count=0
function myFunction() {
   count++
   var x = document.getElementById("myDIV");
   if(count%2==1){
      x.style.display="block"
   }else{
      x.style.display="none"
   }

   
 }




   const short=async()=>{
      try{ 
          let query=document.getElementById("query").value
         
          let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&type=video&videoDuration=short&key=${api_key}`)
      
          let data=await res.json()
          let actual_data=data.items;
        
          appendvideo(actual_data)
      }
      catch(err){
         console.log("err:",err)
      }
      }

      const medium=async()=>{
         try{ 
             let query=document.getElementById("query").value
            
             let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&type=video&videoDuration=medium&key=${api_key}`)
         
             let data=await res.json()
             let actual_data=data.items;
           
             appendvideo(actual_data)
         }
         catch(err){
            console.log("err:",err)
         }
         }

      const long=async()=>{
         try{ 
             let query=document.getElementById("query").value
            
             let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&type=video&videoDuration=long&key=${api_key}`)
         
             let data=await res.json()
             let actual_data=data.items;
           
             appendvideo(actual_data)
         }
         catch(err){
            console.log("err:",err)
         }
         }
         const date=async()=>{
            try{ 
                let query=document.getElementById("query").value
               
                let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&type=video&order=date&key=${api_key}`)
            
                let data=await res.json()
                let actual_data=data.items;
              
                appendvideo(actual_data)
            }
            catch(err){
               console.log("err:",err)
            }
            }
   



         let videos=async()=>{
            try{ 
               let query=document.getElementById("query").value
              
               let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&type=video&key=${api_key}`)
           
               let data=await res.json()
               let actual_data=data.items;
             
               appendvideo(actual_data)
           }
           catch(err){
              console.log("err:",err)
           }
         }

         let movie=async()=>{
            try{ 
               let query=document.getElementById("query").value
              
               let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&type=video&videoType=movie&key=${api_key}`)
           
               let data=await res.json()
               let actual_data=data.items;
             console.log(actual_data)
               appendvideo(actual_data)
           }
           catch(err){
              console.log("err:",err)
           }
         }

         let playlist=async()=>{
            try{ 
               let query=document.getElementById("query").value
              
               let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&type=playlist&key=${api_key}`)
           
               let data=await res.json()
               let actual_data=data.items;
             
               appendvideo(actual_data)
           }
           catch(err){
              console.log("err:",err)
           }
         }

         let channel=async()=>{
            try{ 
               let query=document.getElementById("query").value
              
               let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&type=video&key=${api_key}`)
           
               let data=await res.json()
               let actual_data=data.items;
             
               appendvideo(actual_data)
           }
           catch(err){
              console.log("err:",err)
           }
         }

         let dates=async()=>{
            try{ 
               let query=document.getElementById("query").value
              
               let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&type=video&order=date&key=${api_key}`)
           
               let data=await res.json()
               let actual_data=data.items;
             
               appendvideo(actual_data)
           }
           catch(err){
              console.log("err:",err)
           }
         }


         let rating=async()=>{
            try{ 
               let query=document.getElementById("query").value
              
               let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&type=video&order=rating&key=${api_key}`)
           
               let data=await res.json()
               let actual_data=data.items;
             
               appendvideo(actual_data)
           }
           catch(err){
              console.log("err:",err)
           }
         }
         let relevance=async()=>{
            try{ 
               let query=document.getElementById("query").value
              
               let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&type=video&order=relevance&key=${api_key}`)
           
               let data=await res.json()
               let actual_data=data.items;
             
               appendvideo(actual_data)
           }
           catch(err){
              console.log("err:",err)
           }
         }
         let viewCount=async()=>{
            try{ 
               let query=document.getElementById("query").value
              
               let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&type=video&order=viewCount&key=${api_key}`)
           
               let data=await res.json()
               let actual_data=data.items;
             
               appendvideo(actual_data)
           }
           catch(err){
              console.log("err:",err)
           }
         }

         let videoCount=async()=>{
            try{ 
               let query=document.getElementById("query").value
              
               let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&type=video&order=videoCount&key=${api_key}`)
           
               let data=await res.json()
               let actual_data=data.items;
             
               appendvideo(actual_data)
           }
           catch(err){
              console.log("err:",err)
           }
         }

         let titles=async()=>{
            try{ 
               let query=document.getElementById("query").value
              
               let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&type=video&order=title&key=${api_key}`)
           
               let data=await res.json()
               let actual_data=data.items;
             
               appendvideo(actual_data)
           }
           catch(err){
              console.log("err:",err)
           }
         }


const replr=()=>{
   window.location.href="./singup.html"
}
// let dats=JSON.parse(localStorage.getItem("add"))

//   let contai=document.getElementById("guv")
  
//   contai.innerText=dats
