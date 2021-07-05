$(document).ready(function(){
  var svgs = $("svg");
  for(var i = 0 ; i < svgs.length; i++){
    $(svgs[i]).attr("width",$(svgs[i]).width());
    $(svgs[i]).attr("height",$(svgs[i]).height());

  }

  $('.dropdown-toggle').dropdown();

});


function download_png (who) {
  var parent = $(who).parent();
  var newe = $(who).get(0).cloneNode(true);
  // this is the main thing that does the work
  var el = d3.select(who).node();
  d3.select(who).node().setAttribute('width', $(who).width() + 500);
  d3.select(who).node().setAttribute('height', $(who).height() + 500);

  console.log(el);
  var test = svg_crowbar(d3.select(who).node(), {
    filename: $(who).attr('id'),
    width: $(who).width()+500,
    height: $(who).height()+500,
    crowbar_el: d3.select("#crowbar-workspace").node(),
  })

  $(who).remove();
  parent.append(newe);

    $.notify({
    title: 'Application Installing',
    message: 'Developing nations social innovation shift globalization, invest safeguards life-expectancy positive social change. Gender care, new approaches empowerment diversity.'
  },{
    type: 'pastel-info',
    delay: 180000,
    allow_dismiss: true,
    placement: {
      from: "bottom",
      align: "right"
    },
    template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
      '<h4 class="font-weight-bold mt-1">Thank you!</h4>' +
      '<button type="button" class="close" data-notify="dismiss" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
      '<div>' +
      '<p class="mb-2">Crediting isn’t required, but is appreciated and allows <b>IRA Design</b> to gain exposure. Add this text on your website, or help us with a share on Facebook/Twitter.</p>' +
      '<div class="copy-code w-75">'+
      '<textarea id="copycode" class="w-100">'   +
      ' <a href="https://iradesign.io">Illustrations by IRA Design</a> '+
      '</textarea>'+
      '<pre>'+
      '<code>'+
      ' &lt;a href="https://iradesign.io"&gt; '+
      '<br>'+
      '   Illustrations by IRA Design '+
      '<br>'+
      ' &lt;/a&gt; '+
      '</code>'+
      '</pre>' +
      '<button class="btn" id="buttonCopy" onclick="copy()">Copy code</button>'+
      '</div>'+
      '<br>'+
      '<div class="share">' +
      '<a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Firadesign.io%2F&amp;text=IRA%20Design%20by%20Creative%20Tim%3A%20Open-source%20illustrations%20that%20fits%20perfectly%20for%20any%20project%20you%20desire.%20%0A%23illustrations%20%23ux%20%23opensource%20%23design%20%23art%0A%0ACheck%20it%20out%20here%3A%20" class="btn btn-lg btn-twitter" target="_blank">'+
      '<i class="fab fa-twitter"></i>'+
      '</a>'+
      '<a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.iradesign.io" class="btn btn-facebook" target="_blank">' +
      '<i class="fab fa-facebook-f px-1"></i>'+
      '</a>' +
      '</div>'+
      '</div>' +
    '</div>'
  });
}
function saveSvg(svgEl, name) {
  applyStylesheets(svgEl)
  svgEl.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  var svgData = svgEl.outerHTML;
  var preface = '<?xml version="1.0" standalone="no"?>\r\n';
  var svgBlob = new Blob([preface, svgData], {type:"image/svg+xml;charset=utf-8"});
  var svgUrl = URL.createObjectURL(svgBlob);
  var downloadLink = document.createElement("a");
  downloadLink.href = svgUrl;
  downloadLink.download = name;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

function download_svg(who){
  var parent = $(who).parent();
  var newe = $(who).get(0).cloneNode(true);
  saveSvg($(who).get(0),$(who).attr('id'));
  $(who).remove();
  parent.append(newe);
  $.notify({
  title: 'Application Installing',
  message: 'Developing nations social innovation shift globalization, invest safeguards life-expectancy positive social change. Gender care, new approaches empowerment diversity.'
},{
  type: 'pastel-info',
  delay: 180000,
  allow_dismiss: true,
  placement: {
    from: "bottom",
    align: "right"
  },
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
    '<h4 class="font-weight-bold mt-1">Thank you!</h4>' +
    '<button type="button" class="close" data-notify="dismiss" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
    '<div>' +
    '<p class="mb-2">Crediting isn’t required, but is appreciated and allows <b>IRA Design</b> to gain exposure. Help us with a share on social media.</p>' +
    '<div class="copy-code w-75">'+
    '<textarea id="copycode" class="w-100">'   +
    ' <a href="https://iradesign.io">Illustrations by IRA Design</a> '+
    '</textarea>'+
    '<pre>'+
    '<code>'+
    ' &lt;a href="https://iradesign.io"&gt; '+
    '<br>'+
    '   Illustrations by IRA Design '+
    '<br>'+
    ' &lt;/a&gt; '+
    '</code>'+
    '</pre>' +
    '<button class="btn" id="buttonCopy" onclick="copy()">Copy code</button>'+
    '</div>'+
    '<br>'+
    '<div class="share">' +
    '<a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Firadesign.io%2F&amp;text=IRA%20Design%20by%20Creative%20Tim%3A%20Open-source%20illustrations%20that%20fits%20perfectly%20for%20any%20project%20you%20desire.%20%0A%23illustrations%20%23ux%20%23opensource%20%23design%20%23art%0A%0ACheck%20it%20out%20here%3A%20" class="btn btn-lg btn-twitter" target="_blank">'+
    '<i class="fab fa-twitter"></i>'+
    '</a>'+
    '<a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.iradesign.io" class="btn btn-facebook" target="_blank">' +
    '<i class="fab fa-facebook-f px-1"></i>'+
    '</a>' +
    '</div>'+
    '</div>' +
  '</div>'
});
}

function applyStylesheets(svgEl) {

  // use an empty svg to compute the browser applied stylesheets
  var emptySvg = window.document.createElementNS("http://www.w3.org/2000/svg", 'svg');
  window.document.body.appendChild(emptySvg);
  var emptySvgDeclarationComputed = getComputedStyle(emptySvg);
  emptySvg.parentNode.removeChild(emptySvg);

  // traverse the element tree and explicitly set all stylesheet values
  // on an element. this is ripped from svg-crowbar
  var allElements = traverse(svgEl);
  var i = allElements.length;
  while (i--){
    explicitlySetStyle(allElements[i], emptySvgDeclarationComputed);
  }
}


function explicitlySetStyle (element, emptySvgDeclarationComputed) {
  var cSSStyleDeclarationComputed = getComputedStyle(element);
  var i, len, key, value;
  var computedStyleStr = "";
  for (i=0, len=cSSStyleDeclarationComputed.length; i<len; i++) {
    key=cSSStyleDeclarationComputed[i];
    value=cSSStyleDeclarationComputed.getPropertyValue(key);
    if (value!==emptySvgDeclarationComputed.getPropertyValue(key)) {
      computedStyleStr+=key+":"+value+";";
    }
  }
  element.setAttribute('style', computedStyleStr);
}


// traverse an svg and append all of the elements to the tree array. This
// ignores some elements that can appear in <svg> elements but whose
// children's styles should not be tweaked
function traverse(obj){
  var tree = [];
  var ignoreElements = {
    'script': undefined,
    'defs': undefined,
  };
  tree.push(obj);
  visit(obj);
  function visit(node) {
    if (node && node.hasChildNodes() && !(node.nodeName.toLowerCase() in ignoreElements)) {
      var child = node.firstChild;
      while (child) {
        if (child.nodeType === 1) {
          tree.push(child);
          visit(child);
        }
        child = child.nextSibling;
      }
    }
  }
  return tree;
}

if($("#show-options").length > 0){
  var t = $("#show-options").offset().top;
}
var c = $("#close-menu").offset().top;



$(document).scroll(function () {
    if ($(window).height() + $(this).scrollTop() > t + 500) {
         $(".fixed-plugin").css("right", "0");
         $(".fixed-plugin .badge-colors-objects").css("opacity", "0.3");
         $(".text-object").css("opacity", "0.3");
         $(".text-clothes").css("opacity", "1");
         $(".badge-colors-trousers").css("opacity", "1");
         $(".badge-colors-hair").css("opacity", "1");
         $(".badge-colors-tshirt").css("opacity", "1");

    }

    else if ($(window).height() + $(this).scrollTop() > t - 500) {
         $(".fixed-plugin").addClass("pull-right");
         $(".fixed-plugin .badge-colors-objects").css("opacity", "1");
        $(".text-object").css("opacity", "1");
        $('.fixed-plugin').attr('style', function(i, style)
        {
            return style && style.replace(/right[^;]+;?/g, '');
        });

    }

    if ($(window).height() + $(this).scrollTop() > c + 500) {

         $(".fixed-plugin").addClass("pull-right");
         $(".fixed-plugin .badge-colors-objects").css("opacity", "1");
         $(".text-object").css("opacity", "1");
       $('.fixed-plugin').attr('style', function(i, style)
       {
           return style && style.replace(/right[^;]+;?/g, '');
       });

    }

    else if ($(window).height() + $(this).scrollTop() > c - 1300) {
          $(".fixed-plugin").css("right", "0");
          $(".text-clothes").css("opacity", "0.3");
          $(".badge-colors-trousers").css("opacity", "0.3");
          $(".badge-colors-hair").css("opacity", "0.3");
          $(".badge-colors-tshirt").css("opacity", "0.3");
          $(".fixed-plugin .badge-colors-objects").css("opacity", "1");
          $(".text-object").css("opacity", "1");

    }
});

$(window).scroll(function() {
var scroll = $(window).scrollTop();

    if (scroll >= 300) {
        $(".navbar").addClass("shadow-sm");
    } else {
        $(".navbar").removeClass("shadow-sm");
    }
});


 function copy() {
   var copyText = document.getElementById("copycode");
      copyText.select();
      document.execCommand("Copy");
 }


 function Function() {
 var input, filter, ul, li, a, i, txtValue;
 var count = 0;
 input = document.getElementById("searchInput");
 filter = input.value.toUpperCase();
 ul = document.getElementById("elements");
 li = ul.getElementsByClassName("hover-on");
 li2 = ul.getElementsByClassName("jcorgFilterTextChild");
 for (i = 0; i < li.length; i++) {
       a = li2[i];
       txtValue = a.textContent || a.innerText;

       if (txtValue.toUpperCase().indexOf(filter) > -1) {
           li[i].style.display = "";
       } else {
           li[i].style.display = "none";
           count ++;
       }

       if(count == li.length){
         document.getElementById("no-result").classList.remove("d-none");
         document.getElementById("no-result").classList.add("d-block");
       } else {
         document.getElementById("no-result").classList.add("d-none");
         document.getElementById("no-result").classList.remove("d-block");
       }
   }
 }

 $(function() {
   if(document.querySelector("#searchInput")){
   var $input = $('.form-group').find("#searchInput");
     $input.jcOnPageFilter({
       animateHideNShow: true,
       focusOnLoad: false,
       highlightColor: "#8ea3ff",
       textColorForHighlights: "#000000",
       caseSensitive: false,
       hideNegatives: true,
       childBlockClass: "jcorgFilterTextChild"
     });
   }
 });

// Verify switch state for colored/outline illustration

$('#switch-illustration').on('switch-change', function (e, data) {
  var illOutline = document.querySelector(".illustration-outline");
  var illColored = document.querySelector(".illustration-colored");

    var $el = $(data.el)
      , value = data.value;
    if(value == true){
      illOutline.classList.remove('opacity-0');
      illColored.classList.add('opacity-0');
    } else {
      illOutline.classList.add('opacity-0');
      illColored.classList.remove('opacity-0');
    }
});
