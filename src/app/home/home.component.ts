import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as AOS from 'aos';
declare var ScrollMagic : any;
declare var TimelineMax : any;
declare var TweenMax : any;
declare var Bounce :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  activeCar='elec';


  carouselOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    margin: 25,
    autoPlay:true,
    stagePadding:25,
    autoPlaySpeed:true,
    navText:["<img src='/assets/images/icons/prev.png'>","<img src='/assets/images/icons/next.png'>"],

    nav: true,

    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: true
      },
      1000: {
        items: 4,
        nav: true,
        loop: false
      },
      1500: {
        items: 5,
        nav: true,
        loop: false
      }
    }
  }

  carouselCategories = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    autoPlay:true,
    autoPlaySpeed:true,
    navText:["<img src='/assets/images/icons/left.png'>","<img src='/assets/images/icons/right.png'>"],
    nav:true,

    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,

      },
      1000: {
        items: 3,

        loop: false
      },
      1500: {
        items: 3,

        loop: false
      }
    }
  }
  carouselbanner = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    margin: 25,
    autoPlay:true,
    stagePadding:0,
    autoPlaySpeed:true,
    items:1,
    navText:["<img src='/assets/images/icons/b-left.png'>","<img src='/assets/images/icons/b-right.png'>"],

    nav: true,

    responsiveClass: true,
    responsive: {
      0: {

        nav: false
      },
      600: {

        nav: true
      },
      1000: {

        nav: true,
        loop: false
      },
      1500: {

        nav: true,
        loop: false
      }
    }
  }

  constructor() { }

  ngOnInit() {

    AOS.init({
      duration: 11000,
    })

    AOS.refresh();

    //scrollmagic animations

    //animation for landing-section elements

     var controller = new ScrollMagic.Controller();

     var landingTimeline = new TimelineMax();
     landingTimeline
     .to('.owl-box',10,{ y : 100})
     .to('.landing-text',10,{ y : -100 })

     new ScrollMagic.Scene({
      triggerElement:'.landing',
      triggerHook:'onLeave'
    })
    .duration('100%')
    .setTween(landingTimeline)
    // // .addIndicators()
    .addTo(controller);

    var bannertl = new TimelineMax();

    bannertl
    .set('.head-text,.head-text-2,.img-1,.img-2,.img-3',{
      autoAlpha:0
    })
    .to('.head-text,.head-text-2',0.2,{
      autoAlpha:1
    },"-=1")
    .to('.img-1',0.2,{
      autoAlpha:1
    },"-=0.80")
    .to('.img-2',0.2,{
      autoAlpha:1
    },"-=0.85")
    .to('.img-3',0.2,{
      autoAlpha:1
    },"-=0.90")
    .to('.head-text',1,{
      x:200,
    },"-=1")
    .to('.head-text-2',1,{
      x:50
    },"-=1")
    .to('.img-1',1,{
      y:380
    },"-=1")
    .to('.img-2',1,{
      y:-100,x:-50
    },"-=1")
    .to('.img-3',1,{
      y:300
    },"-=1")
    .to('.sale-text',1,{
      x:-320
    },"-=1")

    new ScrollMagic.Scene({
      triggerElement:'.bestbrands-section',
      // triggerHook:'onLeave',
      duration:"200%"
    })
    .setTween(bannertl)
    // // .addIndicators()
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement:'.first-section',
      triggerHook:0.05,
      duration:"300%"
    })
    .setPin('.first-section')
    // // .addIndicators()
    .addTo(controller);

    //oneplus animation

    var oneplustl = new TimelineMax();
    oneplustl
    .set(".oneplus-img-wrapper",{scale:3.2,transformOrigin:"center top"})
    .to(".oneplus-img-wrapper",3,{scale:2,y:"-50%"})
    // .to(".oneplus-img-wrapper",3,{scale:0.68,y:"0%"})

    new ScrollMagic.Scene({
      triggerElement:"#trigger1",
      triggerHook:0,
      duration:"100%"
    })

    .setTween(oneplustl)
    // .addIndicators()
    .addTo(controller);

    var oneplustl2 = new TimelineMax();
    oneplustl2
    .set(".op-text1,.op-text2",{autoAlpha:0})
    .to(".oneplus-img-wrapper",3,{scale:0.68,y:"-0%"})
    .to(".oneplus1-img",3,{x:"54%"})
    .to(".oneplus2-img",3,{x:"-54%"},"-=3")
    .to(".op-text1,.op-text2",1,{autoAlpha:1},"-=3")
    .to(".op-text1",3,{x:"-30%"},"-=3")
    .to(".op-text2",3,{x:"30%"},"-=3")

    new ScrollMagic.Scene({
      triggerElement:"#trigger2",
      triggerHook:0,
      duration:"120%"
    })

    .setTween(oneplustl2)
    .setPin("#trigger2")
    // .addIndicators()
    .addTo(controller);



    // $('.block2-btn-addcart').each(function(){
    //   let nameProduct = $(this).parent().parent().parent().find('.block2-name').html();
    //   $(this).on('click', function(){
    //     swal(nameProduct, "is added to cart !", "success");
    //   });
    // });

    // $('.block2-btn-addwishlist').each(function(){
    //   let nameProduct = $(this).parent().parent().parent().find('.block2-name').html();
    //   $(this).on('click', function(){
    //     swal(nameProduct, "is added to wishlist !", "success");
    //   });
    // });
  }

}
