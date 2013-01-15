

var Size = 25;
var SizeX = 1;//19;
var SizeY = 1;//21;
var x0 = Math.sqrt(3)*Size/2;
var y0 = Size;
var idCanvas='canvas'

var CanvasX=650;
var CanvasY=650;
var SelectItemColor='#ff0000'; //RED






var Player=1;

var Arena=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
var ArenaObj=[];

var SelectItem=0;

var xt=0;
var yt=0;
var xc=0;
var yc=0;

var xt_1, yt_1;

var hh;
var hhAr=[];


var qbiiim;

function Init()
 {
            
            
            jc.start(idCanvas,true);
            //var text=jc.text("",50,50);
           
            
            jc.rect(0,0,CanvasX,CanvasY,'#cdb7b5',1)
              .click(function(point){
              //  this.color('#ff0000');
              //  text.string('x='+point.x+', y='+point.y);
              //  text.up('top');
                  
                  if (SelectItem==0){
                     var SelHex=FindXY(point);
                     xt=SelHex.x;
                     yt=SelHex.y;

                     if (Arena[xt][yt]!=undefined && Arena[xt][yt]!=''){
                        //alert(Arena[xt][yt]);
                  
                        //hhAr=HexagonFill(xc,yc, Size,'#ffffff');
                        xt_1=xt;
                        yt_1=yt;
                        //ChangeXY(xt,yt);
                        hh=Hexagon(ChangeXY(xt,yt), Size);
                        hh.opacity(0.9).color(SelectItemColor).lineStyle({lineWidth:6});
                        hhAr.push(hh);                     
                        SelectItem=1;
                     };

                  }else{
                     for (var i=0;i<hhAr.length;i++){hhAr[i].del();};
                     SelectItem=0;
                     var SelHex=FindXY(point);
                     xt=SelHex.x;
                     yt=SelHex.y;
                     
                     if (Arena[xt][yt]==undefined || Arena[xt][yt]==''){
                           var a=ChangeXY(xt_1,yt_1);
                           var xc_1=a.x;
                           var yc_1=a.y; 
                           Arena[xt][yt]=Arena[xt_1][yt_1];
                           Arena[xt_1][yt_1]=undefined;
                           No=parseInt(Arena[xt][yt].substring(3,5),10);
                           a=ChangeXY(xt,yt);
                           var dx=a.x-xc_1;
                           var dy=a.y-yc_1;
                           TransTo(ArenaObj[No],dx,dy);

                                 //var point=qbiiim.position();
                                 //qbiiim.translateTo(point.x+dx, point.y+dy);
                                 //jc.image(imgQB1).translateTo(xc-Size*0.6,yc-Size*0.7);
                           
                           //alert(Arena[xt][yt]);
                     }else{

                        xt_1=xt;
                        yt_1=yt;
                        //ChangeXY(xt,yt);
                        hh=Hexagon(ChangeXY(xt,yt), Size);
                        hh.opacity(0.9).color(SelectItemColor).lineStyle({lineWidth:6});
                        hhAr.push(hh);                     
                        SelectItem=1;



                     };
                     

                     //var arr=BoardCells(xt, yt);
                     //var xi;
                     //var yi;
                     //for (var i=0;i<arr.length;i++){
                     //  xi=arr[i][0];
                     //  yi=arr[i][1];
                     //  if ((xi>=0) && (yi>=0)){
                     //     ChangeXY(xi,yi);
                     //     hh=Hexagon(xc,yc, Size);
                     //     hh.opacity(0.2).color('#00ffff').lineStyle({lineWidth:5});
                     //     hhAr.push(hh);
                     //   };
                     //};



                  };

                })
              .mousedown(function(point){
                //md=1;
                //hh=Hexagon(point.x,point.y, Size);
                })
              .mouseup(function(point){
                //md=0;
                //hh.del();
                })
              .mousemove(function(point){
                //hh.del();
                //hh=Hexagon(point.x,point.y, Size);
                });



     for (var i = 0; i < SizeX; i++) {
         for (var j = 0; j < SizeY; j++) {
             //ChangeXY(i,j);
             hh=Hexagon(ChangeXY(i,j), Size).opacity(0.2);
         }
      }

 
            var colorBoard='#00ffff';
            var BoardWidth=2;
            var xx,yy;img=[];

      //1 player (White)
          
            
            //QB
            xx=0;yy=0;No=1;
            Arena[xx][yy]="wQB"+"0"+No;
            ArenaObj[No] =HexagonFill(ChangeXY(xx,yy), Size,'#ffffff');
            ArenaObj[No].push(Hexagon(ChangeXY(xx,yy), Size).color(colorBoard).lineStyle({lineWidth:BoardWidth}));
                 img[No] = new Image();
                 img[No].src="img/QB.gif";
                 img[No].onload=function(){
                    xx=0;yy=0;No=1;
                    var a=ChangeXY(xx,yy);
                    ArenaObj[No].push(jc.image(img[No],a.x-Size*0.6,a.y-Size*0.7,Size*1.2,Size*1.4).rotate(30,'center'));
                  }; 


            //BE1
            xx=1;yy=0;No=2;
            Arena[xx][yy]="wBE"+"0"+No;
            ArenaObj[No] =HexagonFill(ChangeXY(xx,yy), Size,'#ffffff');
            ArenaObj[No].push(Hexagon(ChangeXY(xx,yy), Size).color(colorBoard).lineStyle({lineWidth:BoardWidth}));
                 img[No] = new Image();
                 img[No].src="img/BE.gif";
                 img[No].onload=function(){
                    xx=1;yy=0;No=2;
                    var a=ChangeXY(xx,yy);
                    ArenaObj[No].push(jc.image(img[No],a.x-Size*0.5,a.y-Size*0.85,Size,Size*1.7).rotate(30,'center'));
                  }; 

            //BE2
            xx=0;yy=1;No=3;
            Arena[xx][yy]="wBE"+"0"+No;
            ArenaObj[No] =HexagonFill(ChangeXY(xx,yy), Size,'#ffffff');
            ArenaObj[No].push(Hexagon(ChangeXY(xx,yy), Size).color(colorBoard).lineStyle({lineWidth:BoardWidth}));
                 img[No] = new Image();
                 img[No].src="img/BE.gif";
                 img[No].onload=function(){
                    xx=0;yy=1;No=3;
                    var a=ChangeXY(xx,yy);
                    ArenaObj[No].push(jc.image(img[No],a.x-Size*0.5,a.y-Size*0.85,Size,Size*1.7).rotate(-30,'center'));
                  }; 

            //GR1
            xx=2;yy=0;No=4;
            Arena[xx][yy]="wGR"+"0"+No;
            ArenaObj[No] =HexagonFill(ChangeXY(xx,yy), Size,'#ffffff');
            ArenaObj[No].push(Hexagon(ChangeXY(xx,yy), Size).color(colorBoard).lineStyle({lineWidth:BoardWidth}));
                 img[No] = new Image();
                 img[No].src="img/GR.gif";
                 img[No].onload=function(){
                    xx=2;yy=0;No=4;
                    var a=ChangeXY(xx,yy);
                    ArenaObj[No].push(jc.image(img[No],a.x-Size*0.5,a.y-Size*0.85,Size,Size*1.7).rotate(-30,'center'));
                  }; 


            //GR2
            xx=3;yy=0;No=5;
            Arena[xx][yy]="wGR"+"0"+No;
            ArenaObj[No] =HexagonFill(ChangeXY(xx,yy), Size,'#ffffff');
            ArenaObj[No].push(Hexagon(ChangeXY(xx,yy), Size).color(colorBoard).lineStyle({lineWidth:BoardWidth}));
                 img[No] = new Image();
                 img[No].src="img/GR.gif";
                 img[No].onload=function(){
                    xx=3;yy=0;No=5;
                    var a=ChangeXY(xx,yy);
                    ArenaObj[No].push(jc.image(img[No],a.x-Size*0.5,a.y-Size*0.85,Size,Size*1.7).rotate(30,'center'));
                  }; 


            //GR3
            xx=1;yy=1;No=6;
            Arena[xx][yy]="wGR"+"0"+No;
            ArenaObj[No] =HexagonFill(ChangeXY(xx,yy), Size,'#ffffff');
            ArenaObj[No].push(Hexagon(ChangeXY(xx,yy), Size).color(colorBoard).lineStyle({lineWidth:BoardWidth}));
                 img[No] = new Image();
                 img[No].src="img/GR.gif";
                 img[No].onload=function(){
                    xx=1;yy=1;No=6;
                    var a=ChangeXY(xx,yy);
                    ArenaObj[No].push(jc.image(img[No],a.x-Size*0.5,a.y-Size*0.85,Size,Size*1.7).rotate(-30,'center'));
                  }; 


            //AN1
            xx=2;yy=1;No=7;
            Arena[xx][yy]="wAN"+"0"+No;
            ArenaObj[No] =HexagonFill(ChangeXY(xx,yy), Size,'#ffffff');
            ArenaObj[No].push(Hexagon(ChangeXY(xx,yy), Size).color(colorBoard).lineStyle({lineWidth:BoardWidth}));
                 img[No] = new Image();
                 img[No].src="img/AN.gif";
                 img[No].onload=function(){
                    xx=2;yy=1;No=7;
                    var a=ChangeXY(xx,yy);
                    ArenaObj[No].push(jc.image(img[No],a.x-Size*0.5,a.y-Size*0.85,Size,Size*1.7).rotate(-30,'center'));
                  }; 


           //AN2
            xx=3;yy=1;No=8;
            Arena[xx][yy]="wAN"+"0"+No;
            ArenaObj[No] =HexagonFill(ChangeXY(xx,yy), Size,'#ffffff');
            ArenaObj[No].push(Hexagon(ChangeXY(xx,yy), Size).color(colorBoard).lineStyle({lineWidth:BoardWidth}));
                 img[No] = new Image();
                 img[No].src="img/AN.gif";
                 img[No].onload=function(){
                    xx=3;yy=1;No=8;
                    var a=ChangeXY(xx,yy);
                    ArenaObj[No].push(jc.image(img[No],a.x-Size*0.5,a.y-Size*0.85,Size,Size*1.7).rotate(30,'center'));
                  }; 


           //AN3
            xx=4;yy=0;No=9;
            Arena[xx][yy]="wAN"+"0"+No;
            ArenaObj[No] =HexagonFill(ChangeXY(xx,yy), Size,'#ffffff');
            ArenaObj[No].push(Hexagon(ChangeXY(xx,yy), Size).color(colorBoard).lineStyle({lineWidth:BoardWidth}));
                 img[No] = new Image();
                 img[No].src="img/AN.gif";
                 img[No].onload=function(){
                    xx=4;yy=0;No=9;
                    var a=ChangeXY(xx,yy);
                    ArenaObj[No].push(jc.image(img[No],a.x-Size*0.5,a.y-Size*0.85,Size,Size*1.7).rotate(-30,'center'));
                  }; 


            //SP1
            xx=5;yy=0;No=10;
            Arena[xx][yy]="wSP"+No;
            ArenaObj[No] =HexagonFill(ChangeXY(xx,yy), Size,'#ffffff');
            ArenaObj[No].push(Hexagon(ChangeXY(xx,yy), Size).color(colorBoard).lineStyle({lineWidth:BoardWidth}));
                 img[No] = new Image();
                 img[No].src="img/SP.gif";
                 img[No].onload=function(){
                    xx=5;yy=0;No=10;
                    var a=ChangeXY(xx,yy);
                    ArenaObj[No].push(jc.image(img[No],a.x-Size*0.5,a.y-Size*0.85,Size,Size*1.7).rotate(30,'center'));
                  }; 


            //SP2
            xx=4;yy=1;No=11;
            Arena[xx][yy]="wSP"+No;
            ArenaObj[No] =HexagonFill(ChangeXY(xx,yy), Size,'#ffffff');
            ArenaObj[No].push(Hexagon(ChangeXY(xx,yy), Size).color(colorBoard).lineStyle({lineWidth:BoardWidth}));
                 img[No] = new Image();
                 img[No].src="img/SP.gif";
                 img[No].onload=function(){
                    xx=4;yy=1;No=11;
                    var a=ChangeXY(xx,yy);
                    ArenaObj[No].push(jc.image(img[No],a.x-Size*0.5,a.y-Size*0.85,Size,Size*1.7).rotate(-30,'center'));
                  }; 




            //2 player (Black)

            //QB
            xx=7;yy=0;No=21;
            Arena[xx][yy]="bQB"+No;
            ArenaObj[No] =HexagonFill(ChangeXY(xx,yy), Size,'#000000');
            ArenaObj[No].push(Hexagon(ChangeXY(xx,yy), Size).color(colorBoard).lineStyle({lineWidth:BoardWidth}));
                 img[No] = new Image();
                 img[No].src="img/QBb.gif";
                 img[No].onload=function(){
                    xx=7;yy=0;No=21;
                    var a=ChangeXY(xx,yy);
                    ArenaObj[No].push(jc.image(img[No],a.x-Size*0.6,a.y-Size*0.7,Size*1.2,Size*1.4).rotate(-30,'center'));
                  }; 

            //BE1
            xx=8;yy=0;No=22;
            Arena[xx][yy]="bBE"+No;
            ArenaObj[No] =HexagonFill(ChangeXY(xx,yy), Size,'#000000');
            ArenaObj[No].push(Hexagon(ChangeXY(xx,yy), Size).color(colorBoard).lineStyle({lineWidth:BoardWidth}));
                 img[No] = new Image();
                 img[No].src="img/BEb.gif";
                 img[No].onload=function(){
                    xx=8;yy=0;No=22;
                    var a=ChangeXY(xx,yy);
                    ArenaObj[No].push(jc.image(img[No],a.x-Size*0.5,a.y-Size*0.85,Size,Size*1.7).rotate(30,'center'));
                  }; 

            //BE2
            xx=7;yy=1;No=23;
            Arena[xx][yy]="bBE"+No;
            ArenaObj[No] =HexagonFill(ChangeXY(xx,yy), Size,'#000000');
            ArenaObj[No].push(Hexagon(ChangeXY(xx,yy), Size).color(colorBoard).lineStyle({lineWidth:BoardWidth}));
                 img[No] = new Image();
                 img[No].src="img/BEb.gif";
                 img[No].onload=function(){
                    xx=7;yy=1;No=23;
                    var a=ChangeXY(xx,yy);
                    ArenaObj[No].push(jc.image(img[No],a.x-Size*0.5,a.y-Size*0.85,Size,Size*1.7).rotate(-30,'center'));
                  }; 

            //GR1
            xx=9;yy=0;No=24;
            Arena[xx][yy]="bGR"+No;
            ArenaObj[No] =HexagonFill(ChangeXY(xx,yy), Size,'#000000');
            ArenaObj[No].push(Hexagon(ChangeXY(xx,yy), Size).color(colorBoard).lineStyle({lineWidth:BoardWidth}));
                 img[No] = new Image();
                 img[No].src="img/GRb.gif";
                 img[No].onload=function(){
                    xx=9;yy=0;No=24;
                    var a=ChangeXY(xx,yy);
                    ArenaObj[No].push(jc.image(img[No],a.x-Size*0.5,a.y-Size*0.85,Size,Size*1.7).rotate(-30,'center'));
                  }; 


            //GR2
            xx=10;yy=0;No=25;
            Arena[xx][yy]="bGR"+No;
            ArenaObj[No] =HexagonFill(ChangeXY(xx,yy), Size,'#000000');
            ArenaObj[No].push(Hexagon(ChangeXY(xx,yy), Size).color(colorBoard).lineStyle({lineWidth:BoardWidth}));
                 img[No] = new Image();
                 img[No].src="img/GRb.gif";
                 img[No].onload=function(){
                    xx=10;yy=0;No=25;
                    var a=ChangeXY(xx,yy);
                    ArenaObj[No].push(jc.image(img[No],a.x-Size*0.5,a.y-Size*0.85,Size,Size*1.7).rotate(30,'center'));
                  }; 


            //GR3
            xx=8;yy=1;No=26;
            Arena[xx][yy]="bGR"+No;
            ArenaObj[No] =HexagonFill(ChangeXY(xx,yy), Size,'#000000');
            ArenaObj[No].push(Hexagon(ChangeXY(xx,yy), Size).color(colorBoard).lineStyle({lineWidth:BoardWidth}));
                 img[No] = new Image();
                 img[No].src="img/GRb.gif";
                 img[No].onload=function(){
                    xx=8;yy=1;No=26;
                    var a=ChangeXY(xx,yy);
                    ArenaObj[No].push(jc.image(img[No],a.x-Size*0.5,a.y-Size*0.85,Size,Size*1.7).rotate(-30,'center'));
                  }; 


            //AN1
            xx=9;yy=1;No=27;
            Arena[xx][yy]="bAN"+No;
            ArenaObj[No] =HexagonFill(ChangeXY(xx,yy), Size,'#000000');
            ArenaObj[No].push(Hexagon(ChangeXY(xx,yy), Size).color(colorBoard).lineStyle({lineWidth:BoardWidth}));
                 img[No] = new Image();
                 img[No].src="img/ANb.gif";
                 img[No].onload=function(){
                    xx=9;yy=1;No=27;
                    var a=ChangeXY(xx,yy);
                    ArenaObj[No].push(jc.image(img[No],a.x-Size*0.5,a.y-Size*0.85,Size,Size*1.7).rotate(-30,'center'));
                  }; 


           //AN2
            xx=10;yy=1;No=28;
            Arena[xx][yy]="bAN"+No;
            ArenaObj[No] =HexagonFill(ChangeXY(xx,yy), Size,'#000000');
            ArenaObj[No].push(Hexagon(ChangeXY(xx,yy), Size).color(colorBoard).lineStyle({lineWidth:BoardWidth}));
                 img[No] = new Image();
                 img[No].src="img/ANb.gif";
                 img[No].onload=function(){
                    xx=10;yy=1;No=28;
                    var a=ChangeXY(xx,yy);
                    ArenaObj[No].push(jc.image(img[No],a.x-Size*0.5,a.y-Size*0.85,Size,Size*1.7).rotate(30,'center'));
                  }; 


           //AN3
            xx=11;yy=0;No=29;
            Arena[xx][yy]="bAN"+No;
            ArenaObj[No] =HexagonFill(ChangeXY(xx,yy), Size,'#000000');
            ArenaObj[No].push(Hexagon(ChangeXY(xx,yy), Size).color(colorBoard).lineStyle({lineWidth:BoardWidth}));
                 img[No] = new Image();
                 img[No].src="img/ANb.gif";
                 img[No].onload=function(){
                    xx=11;yy=0;No=29;
                    var a=ChangeXY(xx,yy);
                    ArenaObj[No].push(jc.image(img[No],a.x-Size*0.5,a.y-Size*0.85,Size,Size*1.7).rotate(-30,'center'));
                  }; 
 

            //SP1
            xx=12;yy=0;No=30;
            Arena[xx][yy]="wSP"+No;
            ArenaObj[No] =HexagonFill(ChangeXY(xx,yy), Size,'#000000');
            ArenaObj[No].push(Hexagon(ChangeXY(xx,yy), Size).color(colorBoard).lineStyle({lineWidth:BoardWidth}));
                 img[No] = new Image();
                 img[No].src="img/SPb.gif";
                 img[No].onload=function(){
                    xx=12;yy=0;No=30;
                    var a=ChangeXY(xx,yy);
                    ArenaObj[No].push(jc.image(img[No],a.x-Size*0.5,a.y-Size*0.85,Size,Size*1.7).rotate(30,'center'));
                  }; 


            //SP2
            xx=11;yy=1;No=31;
            Arena[xx][yy]="wSP"+No;
            ArenaObj[No] =HexagonFill(ChangeXY(xx,yy), Size,'#000000');
            ArenaObj[No].push(Hexagon(ChangeXY(xx,yy), Size).color(colorBoard).lineStyle({lineWidth:BoardWidth}));
                 img[No] = new Image();
                 img[No].src="img/SPb.gif";
                 img[No].onload=function(){
                    xx=11;yy=1;No=31;
                    var a=ChangeXY(xx,yy);
                    ArenaObj[No].push(jc.image(img[No],a.x-Size*0.5,a.y-Size*0.85,Size,Size*1.7).rotate(-30,'center'));
                  }; 




 }






function Point(x, y){
    this.x = x || 0;
    this.y = y || 0;
};
Point.prototype.x = null;
Point.prototype.y = null;




function Hexagon(point, size){
        var x0 = point.x;
        var y0 = point.y;
        var x1 = Math.round(point.x - Math.sqrt(3)*size/2);
        var x2 = Math.round(point.x + Math.sqrt(3)*size/2);
        var y1 = Math.round(point.y - size);
        var y2 = Math.round(point.y - size/2);
        var y3 = Math.round(point.y + size/2);
        var y4 = Math.round(point.y + size);
        return jc.line([[x1, y2], [x0, y1], [x2, y2], [x2, y3], [x0, y4], [x1, y3], [x1, y2],[x0, y1]]); 
};

function HexagonFill(point, size, colorRGB){
  var Ar=[];
  for (var i=1;i<=size-2;i++){
    Ar.push(Hexagon(point, i).color(colorRGB).opacity(1).lineStyle({lineWidth:2}));
  };
  return Ar;
};

function FindXY(point){
     xt=Math.round(point.x/(Math.sqrt(3)*Size)-1);
     yt=Math.round(-1+point.y/(1.5*Size));
     if (xt<0){xt=0;};
     if (yt<0){yt=0;};
     var arr=BoardCells(xt, yt);
     arr.push([xt, yt]);
     //-------
     //  SelectAll(arr);
     //-------
     var d=Size*Size*Size*100;
     var xi,yi,dd, a;
     for (var i=0;i<arr.length;i++){
        xi=arr[i][0];
        yi=arr[i][1];
        if ((xi>=0) && (yi>=0)){
           a=ChangeXY(xi, yi);
           dd=dist(a.x,a.y, point.x,point.y);
           if (dd<d){d=dd;xt=xi;yt=yi};
        };
      };
     return new Point(xt, yt);
};


function dist(x1, y1, x2, y2){
  return (x1-x2)*(x1-x2)+(y1-y2)*(y1-y2);
};

function ChangeXY(i, j){
  yc=y0+ Size*j*1.5;
  if (j % 2 == 0) {
                 xc=x0+i*Math.sqrt(3)*Size;
             } else {
                 xc=x0+0.5*Math.sqrt(3)*Size+i*Math.sqrt(3)*Size;
             }
  return new Point(xc, yc);          
};

function BoardCells(x, y){
  if (y % 2 == 0){
    return [[x-1, y],[x-1, y-1],[x, y-1],[x+1, y],[x, y+1],[x-1, y+1]];
  }else{
    return [[x-1, y],[x, y-1],[x+1, y-1],[x+1, y],[x+1, y+1],[x, y+1]];
  };
};


function TransTo(Objs, dx, dy){
  for (var i=0;i<Objs.length;i++){
     var point=Objs[i].position();
     Objs[i].translateTo(point.x+dx, point.y+dy);
  };
};







function SelectAll(arr){
 var xi,yi;
 for (var i=0;i<arr.length;i++){
        xi=arr[i][0];
        yi=arr[i][1];
        if ((xi>=0) && (yi>=0)){
           a=ChangeXY(xi, yi);
           HexagonFill(a[0], a[1], Size, '#0f0f0f');
        };
      };

};



