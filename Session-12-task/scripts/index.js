var card_obj =[ {
    id: 0,
    title: "EGYPT TANGBIA",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo officiis eaque, pariatur tenetur voluptatem ut corporis facilis dolores esse voluptate debitis quia. Ipsam aliquam illo quidem quos consectetur sequi maxime?",
    comments: "22 Comments",
    src:"images/camel.jpg"
},
{
    id: 1,
    title: "OLLING PHISOTIP",
    paragraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati nisi, quos veritatis magnam dolorem laudantium beatae doloribus voluptates tempore nam, assumenda veniam sit distinctio a perferendis. Voluptatem unde totam fugiat?",
    comments: "13 Comments",
    src:"images/city.jpg"
},
{
    id: 2,
    title: "CORTIA DYNA",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste excepturi quidem maiores doloribus facere hic suscipit! Quasi, necessitatibus quia dicta odio nostrum porro nisi quaerat debitis fugiat commodi animi minima?",
    comments: "15 Comments",
    src:"images/pool.jpg"
},
{
    id: 3,
    title: "SYSNE OF DUBAI",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, aperiam nostrum velit magnam officiis architecto est repudiandae reprehenderit beatae ex voluptas? Sed, nihil accusantium voluptate incidunt ipsum nisi doloribus vitae.",
    comments: "23 Comments",
    src:"images/beach.jpg"
},
{
    id: 4,
    title: "EGYPT TANGBIA",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus, odit repellendus blanditiis debitis itaque id maxime voluptate ab dicta iure officia animi, quod nulla autem nostrum incidunt, culpa voluptates.",
    comments: "16 Comments",
    src:"images/beach-2.jpg"
},
{
    id: 5,
    title: "OLLING PHISOTIP",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, eligendi quia, in est itaque eos dicta natus pariatur excepturi illo, officia adipisci labore ut provident blanditiis dolore possimus id ducimus.",
    comments: "7 Comments",
    src:"images/nile.jpg"
},
{
    id: 6,
    title: "CORTIA DYNA",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam praesentium corporis alias accusantium modi commodi at, amet sed! Dolor, beatae quas id eius laborum voluptates in a harum aliquam iusto!",
    comments: "8 Comments",
    src:"images/rome.jpg"
},
{
    id: 7,
    title: "SYSNE OF DUBAI",
    paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic ex quo eum est quod. Sequi numquam commodi totam laudantium necessitatibus. Commodi alias nostrum ullam qui explicabo sunt quae? Ipsum, nobis!",
    comments: "11 Comments",
    src:"images/sea.jpg"
},
{
    id: 8,
    title: "EGYPT TANGBIA",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatibus quam aspernatur voluptate provident repudiandae ratione quibusdam necessitatibus at maiores, magnam blanditiis fugiat. Maiores repellat exercitationem nam fugiat quae aliquam?",
    comments: "22 Comments",
    src:"images/boat.jpg"
},
{
    id: 9,
    title: "OLLING PHISOTIP",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit assumenda cupiditate deserunt facilis necessitatibus odit praesentium culpa non! Non ratione nobis voluptatibus dolor inventore tempore harum asperiores architecto soluta. Recusandae.",
    comments: "13 Comments",
    src:"images/room.jpg"
},
{
    id: 10,
    title: "CORTIA DYNA",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolores rerum laboriosam fugit inventore nisi quod quis quisquam eos, quasi, aut autem consequuntur nobis nulla eligendi id eveniet laborum soluta!.",
    comments: "8 Comments",
    src:"images/egypt.jpg"
},

{
    id: 11,
    title: "SYSNE OF DUBAI",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos libero numquam impedit. Odio impedit non iste natus architecto vel et excepturi magni id corporis? Ipsam dolore tempora voluptatibus ratione cumque.",
    comments: "7 Comments",
    src:"images/mountain.jpg"
}]


$(document).ready(function () {
    
for(let i=0; i<card_obj.length; i++)
{
    // debugger;
    $("#cards-wrapper").append(insertTemplate(i));
}

$("body").on("click", ".card",function (e) {
    modalPopupTemp($(this).attr("data-idx"))
    $("#modal_popup").toggleClass("d-block");
});

$("body").on("click", "#modal-close-icon,#modal-close-btn", function(e){
    $("body").css("overflow", "scroll")

    $("#modal_popup").remove();
})



});


function insertTemplate(i){
    card_temp = `<div class="col-md-3 mb-3">
    <div data-idx=${i} class="card text-center" style="cursor:pointer;">
      <img src="${card_obj[i].src}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title theme-blue-color">${card_obj[i].title}</h5>
        <p class="card-text">${card_obj[i].paragraph.substring(0,85)}</p>
        <div class="d-flex justify-content-between">
          <span class="paragraph-gray"><i class="fa-regular fa-calendar" style="color: #8a8a8a;"></i> Aug5, 2013</span>
          <span class="paragraph-gray"><i class="fa-regular fa-comments" style="color: #98999a;"></i>${card_obj[i].comments}</span>
        </div>
      </div>
    </div>
  </div>`
  return card_temp
}


function modalPopupTemp(card_idx){
    var modal_popup_temp = `<div id="modal_popup" class="modal-popup">
    <div id="modal-popup-body" class="modal-popup-content">
    <div class="row justify-content-end pb-5">
    <div class="col-md-1 d-flex justify-content-end ">
      <span id="modal-close-icon" class="Close" data-dismiss="modal" style="font-size: 50px; cursor:pointer">&times;</span>
    </div>
  </div>
        <div class="row">
          <div class="col-md-5" style="padding:0px 30px;">
            <div class="d-flex">
              <img id="modal-img" class="w-100 img-fluid" src=${card_obj[card_idx].src} alt="card-img">

            </div>
          </div>

          <div class="col-md-7" style="padding: 0px 60px;">
            <h2 id="modal-title" class="theme-blue-color mb-3">${card_obj[card_idx].title}</h2>
            <p id="modal-paragraph">${card_obj[card_idx].paragraph}</p>
          </div>
          
        </div>
        <div class="row justify-content-center" style="padding-top:150px">
        <div class="col-md-1">
          <button id="modal-close-btn" class="btn btn-light">Close</button>

        </div> 

       </div>
    </div>
</div>`
$("body").append(modal_popup_temp)
$("body").css("overflow", "hidden")
  return modal_popup_temp;
}

