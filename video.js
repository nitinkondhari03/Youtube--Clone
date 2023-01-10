let video_details=document.getElementById("video_details")

let data=JSON.parse(localStorage.getItem("click_item"))
console.log(data)
const playvideo=()=>{
    let {snippet,videoId}=JSON.parse(localStorage.getItem("click_item"))
  
    console.log(snippet,videoId)
   
    video_details.innerHTML=null
    let iframe=document.createElement("iframe")
    iframe.src=`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`
    iframe.width="100%"
    iframe.height="100%"
    iframe.setAttribute('allowFullscreen',true) 
    let tiless=snippet.title
    let titles=document.createElement("h2")
    titles.innerText=tiless
    let channelid=document.createElement("h2")
    channelid.innerText=snippet.channelTitle
    let description=document.createElement("h2")
    description.innerText=snippet.description

    video_details.append(iframe,titles,channelid,description)

}

let api_key='AIzaSyAEGdIVPxdBV6_knL4qCd28bwcbV5l3JIk'
let recommendation=document.getElementById("recommendation")
const mostpopular= async()=>{
    try{
       let res=await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&key=${api_key}`)
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
        recommendation.append(div)
    })
 }