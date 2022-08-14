var $c = $("#card"),
  open = false;

$c = {
  root: $c,
  bg: $c.find(".card__background"),
  status: $c.find(".card__status"),
  brand: $c.find(".card__brand"),
  content: $c.find(".card__content"),
  timeline: $c.find(".event__timeline"),
};

var toggleCard = function () {
  open = !open;

  var rW = $c.root.innerWidth(),
    rH = $c.root.innerHeight(),
    cW = $c.content.innerWidth(),
    cH = $c.content.innerHeight();

  TweenMax.to($c.bg, 0.6, {
    width: open ? cW : rW,
    height: open ? cH : rH,
    ease: Elastic.easeOut.config(1, 0.5),
  });

  TweenMax.to($c.brand, 0.6, {
    y: open ? 0 - (cH - rH) / 2 : 0,
    force3D: true,
    ease: Elastic.easeOut.config(1, 0.5),
  });

  TweenMax.to($c.status, open ? 0.07 : 0.3, {
    autoAlpha: open ? 0 : 1,
    force3D: true,
    delay: open ? 0 : 0.25,
    ease: Expo.easeOut,
  });

  if (open) {
    TweenMax.fromTo(
      $c.content,
      0.6,
      {
        scale: 0.6,
      },
      {
        scale: 1,
        force3D: true,
        ease: Elastic.easeOut.config(1, 0.5),
      }
    );
  }

  TweenMax.fromTo(
    $c.content,
    open ? 0.4 : 0.1,
    {
      autoAlpha: 1,
    },
    {
      autoAlpha: open ? 1 : 0,
      ease: Cubic.easeOut,
    }
  );

  var $events = $c.timeline.find("li li");

  if (open) {
    TweenMax.staggerFromTo(
      $events,
      0.5,
      {
        y: -40,
      },
      {
        y: 0,
        delay: 0.15,
        force3D: true,
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.05
    );

    TweenMax.staggerFromTo(
      $events,
      0.45,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 0.15,
        ease: Cubic.easeOut,
      },
      0.05
    );

    var $dates = $c.timeline.find(".event__group-date");

    TweenMax.staggerFromTo(
      $dates,
      0.5,
      {
        y: -40,
      },
      {
        y: 0,
        delay: 0.15,
        force3D: true,
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.05
    );

    TweenMax.staggerFromTo(
      $dates,
      0.45,
      {
        opacity: 0,
      },
      {
        delay: 0.15,
        opacity: 1,
        ease: Cubic.easeOut,
      },
      0.05
    );
  }
};

$c.root.on("click", toggleCard);
