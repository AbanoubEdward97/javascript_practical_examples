// local reviews data
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
/*
functiona;ity:
1- img , name , job_title , description are changed when the buttons are clicked 
2- left and right sliders change pictures in order 
3- surprise me button changes pictures randomly
*/
let 
    my_image = document.getElementById("person-img"),
    Name = document.getElementById("author"),
    job_title = document.getElementById("job"),
    description =  document.getElementById("info"),
    left_slider = document.getElementById("prev"),
    right_slider = document.getElementById("next"),
    surprise_me = document.getElementById("random-btn");
/*
when the previous button is clicked , retrieve  from reviews the index of the element that matches the text content of the name element
then assign the text content of the next element in reviews array to the corresponding elements
*/
function person_index(){
    for (let item of reviews){
        if (item.name == document.getElementById("author").textContent){
            return reviews.indexOf(item)
        }
    }
}

left_slider.addEventListener("click",()=>{
    let index = person_index() - 1
    if (index == -1){
        index = reviews.length - 1
    }
    set_items(index)
})
right_slider.addEventListener("click",()=>{
    let index = person_index() + 1
    if (index == reviews.length){
        index = 0
    }
    set_items(index)
})
surprise_me.addEventListener("click",()=>{
    let random_number = Math.floor(Math.random() * reviews.length);
    set_items(random_number) 
 })

function set_items(index){
    my_image.setAttribute("src",reviews[index].img);
    Name.textContent = reviews[index].name;
    job_title.textContent = reviews[index].job;
    description.textContent = reviews[index].text
}