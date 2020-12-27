//    This JavaScript Function is designed to foil Address Harvesting Robots
//    It will help prevent your address from being harvested on your web site.
//
//    Download this JavaScript file and utilize in an XHTML/HTML document by placing 
//    at end of <body> element the following <script> element.
//       <script src="http://www.islandman.org/antispam.js"></script>
//
//    Modify the antiSpam function in this file by configuring it to your email address.
//    The antiSpam function below has five parameters that must be strings of
//       topLevelDomain = Top level domain in reverse order (instead of ORG use GRO)
//       user = User name in reverse order (instead of THEMAN use NAMEHT
//       domain = Domain name in reverse (instead of ISLANDMAN use NAMDNALSI)
//       subject = Subject will automatically use this string
//       hyperlink = Text or Element used for hyperlink (if blank will use address)
//    Example: antispm("gro", "nameht", "namdnalsi", "Your Web Site", "");


antiSpam("moc", "821lmr", "liamg", "Your Web Site", "" );

//revString function reverses the order of characters in a string
function revSting(stringIn)
{
   var stringOut= ""; 
   for(var i=stringIn.length-1; i>=0; i--)
      stringOut += stringIn.charAt(i); 
   return stringOut;
}

// AntiSpam function encodes hyperlinked address to hide from spammers
function antiSpam(topLevelDomain, user, domain, subject, hyperlink)
{
   // <A> Element components
   var aTag = ['<a class="mailbtn" href=\"ma', '</a>', 'ilto:', '?subject=', '\">'];
   // Reverse character order for each component of address
   var at2 = "4;", at1 = "&#6"; // at symbol
   var userAddress, linkObject;
   userAddress = revSting(user);
   userAddress += at1 + at2;
   userAddress += revSting(domain);
   userAddress += ".";
   userAddress += revSting(topLevelDomain);
   if(hyperlink=="")
      linkObject = userAddress;
   else
      linkObject = hyperlink;
   // document.writeln(aTag[0]+aTag[2]+userAddress+aTag[3]+subject+aTag[4]+linkObject+aTag[1]);
   // Change a code and text for all elements on page with class="myeml"
   // document.querySelector(".myeml").innerHTML = aTag[0]+aTag[2]+userAddress+aTag[3]+subject+aTag[4]+linkObject+aTag[1];

   var Atags = aTag[0]+aTag[2]+userAddress+aTag[3]+subject+aTag[4]+linkObject+aTag[1];
   document.querySelector(".myeml").innerHTML = Atags;
}