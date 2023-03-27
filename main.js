 const allStories = [
    {
        thumbUrl: "img1.png",
        imageUrl: "img1.png",               
        title: "Title No. 1",
    },
    {
        thumbUrl: "img2.png",
        imageUrl: "img2.png",
        title: "Title No. 2",
    },
    {
        thumbUrl: "img3.png",
        imageUrl: "img3.png",
        title: "Title No. 3",
    },
    {
        thumbUrl: "img4.png",
        imageUrl: "img4.png",
        title: "Title No. 4",
    },
    {
        thumbUrl: "img5.jpg",
        imageUrl: "img5.jpg",
        title: "Title No. 5",
    },
    {
        thumbUrl: "img6.png",
        imageUrl: "img6.png",
        title: "Title No. 6",
    },
    {
        thumbUrl: "img7.jpg",
        imageUrl: "img7.jpg",
        title: "Title No. 7",
    },
    {
        thumbUrl: "img8.webp",
        imageUrl: "img8.webp",
        title: "Title No. 8",
    },
 ];

 const storiesContainer = document.querySelector(".stories-container");
 const storyFull = document.querySelector(".story-full");
 const storyFullImage = document.querySelector(".story-full img");
 const storyFullTitle = document.querySelector(".story-full .title");
 const closeBtn = document.querySelector(".story-full .close-btn");
 const leftArrow = document.querySelector(".story-full .left-arrow");
 const rightArrow = document.querySelector(".story-full .right-arrow");

 let currentIndex = 0; 

 allStories.forEach((s, i) => {
    const content = document.createElement("div");
    content.classList.add("content");

    const img = document.createElement("img");
    img.setAttribute("src", s.thumbUrl);

    storiesContainer.appendChild(content);
    content.appendChild(img);

    content.addEventListener("click", () => {
     currentIndex = i;
     storyFull.classList.add("active");     
     storyFullImage.setAttribute("src", s.imageUrl);  

    if (!s.title) {
        storyFullTitle.style.display = "none";
     } else {
        storyFullTitle.style.display = "block";
        storyFullTitle.innerHTML = s.title;
     }
    }) ;
 });

 closeBtn.addEventListener("click", () =>{
    storyFull.classList.remove("active")
 });

 leftArrow.addEventListener("click", () => {
    if(currentIndex > 0){
            currentIndex -= 1;

            storyFullImage.setAttribute("src", allStories[currentIndex].imageUrl);  

        if (!allStories[currentIndex].title) {
            storyFullTitle.style.display = "none";
        } else {
            storyFullTitle.style.display = "block";
            storyFullTitle.innerHTML = allStories[currentIndex].title;
        }
    }
 });

 rightArrow.addEventListener("click", () => {
    if(currentIndex < allStories.length - 1){
            currentIndex += 1;

            storyFullImage.setAttribute("src", allStories[currentIndex].imageUrl);  

        if (!allStories[currentIndex].title) {
            storyFullTitle.style.display = "none";
        } else {
            storyFullTitle.style.display = "block";
            storyFullTitle.innerHTML = allStories[currentIndex].title;
        }
    }
 });

