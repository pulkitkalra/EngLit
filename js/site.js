function changeIcon() {
    var item = document.getElementById("chevChange").className;
    if (item === "glyphicon glyphicon-chevron-down") {
        document.getElementById("chevChange").className = "glyphicon glyphicon-chevron-up"
    } else {
        document.getElementById("chevChange").className = "glyphicon glyphicon-chevron-down"
    }
}

function changeCollapse() {
    $("#messageBadge").remove();
    var item = document.getElementById("glyphChat").className;
    if (item === "glyphicon glyphicon-plus") {
        document.getElementById("glyphChat").className = "glyphicon glyphicon-minus"
    } else {
        document.getElementById("glyphChat").className = "glyphicon glyphicon-plus"
    }
}

function dispSarahQ1(question) {
    $(".selectQuestion").remove(); //using JQuery to remove span.
    //alert(document.getElementById("selectQuestion"));
    var questionText = "<h4><strong>Response: Sarah</strong></h4><h4>"+ question + "</h4>" +
        "<br><p> Juliet longs for night to fall so that Romeo will come to her “untalked of and unseen” (3.2.7). Suddenly the Nurse" +
        "rushes in with news of the fight between Romeo and Tybalt. But the Nurse is so distraught, she stumbles over the words," +
        "making it sound as if Romeo is dead. Juliet assumes Romeo has killed himself, and she resigns to die herself. The Nurse" +
        "then begins to moan about Tybalt’s death, and Juliet briefly fears that both Romeo and Tybalt are dead. </p>";
    document.getElementById("responseSelected").innerHTML = questionText;
    initialiseFeedback();
}

function dispJimQ1(question) {

    $(".selectQuestion").remove(); //using JQuery to remove span.
    var questionText = "<h4><strong>Response: Jim</strong></h4><h4>"+ question + "</h4>" +
        "<br><p> Juliet is distraught having not heard from Romeo in the past two days. Her father is unimpressed. The Nurse" +
        " attemps to approach Romeo to try to find him, but no avail, a futile attempt. The Nurse is so distraught, so incredibly, " +
        "foolish that she somehow communicates to Juliet that Romeo is dead. I'm not sur this is even possible. Does Shakespeare think the reader is a fool?" +
        " This is perhaps the most dissapointing scene of the drama. I feel more melancholic about the writing of the scene and the plot than the scene itself. "+
        "I mean what are you smoking Shakespeare? Why did Juliet not confirm with other people in the world to see if her Romeo is till alive. SAD! </p>";
    document.getElementById("responseSelected").innerHTML = questionText;
    initialiseFeedback();
}

function dispJennyQ1(question) {
    $(".selectQuestion").remove(); //using JQuery to remove span.
    var questionText = "<h4><strong>Response: Jenny</strong></h4><h4>"+ question + "</h4>" +
        "<br><p> The Nurse echoes Juliet and curses Romeo’s name, but Juliet denounces her for criticizing her husband, and adds"+
        " that she regrets faulting him herself. Juliet claims that Romeo’s banishment is worse than ten thousand slain Tybalts."+
        " She laments that she will die without a wedding night, a maiden-widow. The Nurse assures her, however, that she knows"+
        " where Romeo is hiding, and will see to it that Romeo comes to her for their wedding night. Juliet gives the Nurse a ring"+
        " to give to Romeo as a token of her love. What I am unable to comprehend is why Juliet trusts the Nurse with the Ring."+
        " The nurse proved herself to be disloyal to Juliet in the past. There is no real explanation given about why Juliet acts in this way."+
        "<br> Just an aside: There isn't really a mood of melancholy in this scene. I would argue more of regret in Juliet and deceit with the Nurse.</p>"
    document.getElementById("responseSelected").innerHTML = questionText;
    initialiseFeedback();
}

function initialiseFeedback(){
     $(".default-text").remove(); //using JQuery to remove default text.

     var div = document.createElement('div');

     div.className = 'form-group';

     div.innerHTML = '<label for="comment">Enter your feedback below:</label>'+
     '<textarea id="feedback-resp" class="form-control" rows="3" placeholder="Enter your feedback here"></textarea>'+
     '<br><input id="feedbackSubmit" type="button" class="btn btn-warning btn-md pull-right" value="Submit" onclick="submitFeedback()">';

     document.getElementById('home-myf').appendChild(div);

     document.getElementById("menu1").innerHTML = "<p> This is good. You make several good points. Well Done! Good Answer :)</p>";
     document.getElementById("menu2").innerHTML = "<p> Hmm, you make lots of relevant points. Though I think there is a lack of real intition into this situation. I would recommend reading through the given extract again. Also please make sure you reference any work that is not yours.";
     document.getElementById("menu3").innerHTML = "<p> Very Good Attempt. 2/10. But that's OK, since that is all you are capable of. I think my answer was obviously much better. The response lacks insight and is uninteresting just like you :(</p>";
}

function submitFeedback(){
    var resp = $('#feedback-resp').val();
    document.getElementById("home-myf").innerHTML ="<p>"+resp+"</p>";
}

function showText(){
    swal("[Begin, Juliet] <br>JULIET Gallop apace, you fiery-footed steeds, Toward Phoebus' lodging. <br>Such a wagoner As Phaeton would whip you to the west And bring in cloudy night immediately.<br>Spread thy close curtain, love-performing night, That runaways" +
                                                        "eyes may wink, and Romeo Leap to these arms, untalked of and unseen."+
                                                        "<br>Lovers can see to do their amorous rites By their own beauties,"+
                                                        "or, if love be blind, It best agrees with night." +
                                                        "<br>Come, civil night, Thou sober-suited matron, all in black, And" +
                                                        "learn me how to lose a winning match Played for a pair of stainless maidenhoods." +
                                                        "<br>Hood my unmanned blood bating in my cheeks, With thy black mantle,"+
                                                        "till strange love, grow bold, Think true love acted simple modesty."+
                                                        "<br>Come, night."+
                                                        "<br>Come, Romeo."+
                                                        "<br>Come, thou day in night, For thou wilt lie upon the wings of"+
                                                        "night Whiter than new snow upon a raven’s back."+
                                                        "<br>Come, gentle night, come, loving, black-browed night, Give me"+
                                                        "my Romeo."+
                                                        "<br>And when I shall die, Take him and cut him out in little stars,"+
                                                        "And he will make the face of heaven so fine That all the world will"+
                                                        "be in love with night And pay no worship to the garish sun."+
                                                        "<br>Oh, I have bought the mansion of a love, But not possessed it,"+
                                                        "and though I am sold, Not yet enjoyed."+
                                                        "<br>So tedious is this day As is the night before some festival To"+
                                                        "an impatient child that hath new robes And may not wear them."+
                                                        "<br>[Exeunt]",'success');
}



