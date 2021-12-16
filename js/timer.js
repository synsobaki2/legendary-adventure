let me = 'die';

let time_now = new Date();

const birthday = [14, 2, 2004],
      next_yo = math_next_yo(birthday),
      birthday_time = new Date(next_yo + birthday[2], (birthday[1] - 1), birthday[0]);

function math_next_yo(birthday) {
    const yo = time_now.getFullYear() - birthday[2];
    
    if (birthday[1] <= (time_now.getMonth() + 1)) {
        if (birthday[1] == (time_now.getMonth() + 1)) {
            if (birthday[0] <= time_now.getDate()) {
                return yo + 1
            }
        } else {
            return yo + 1
        }
    }
    
    return yo
}

$(function(){
    var time_to_birthday = setInterval(function(){
        time_now = new Date();
        
        if ((time_now.getMonth() + 1 == birthday[1]) && (time_now.getDate() == birthday[0])) {
            return $("#timer").html("yo, today is my birthday!");
        }
        
        seconds = Math.floor(((birthday_time - (time_now))/1000));
        minutes = Math.floor(seconds/60);
        hours = Math.floor(minutes/60);
        days = Math.floor(hours/24);
        
        hours = hours-(days*24);
        minutes = minutes-(days*24*60)-(hours*60);
        seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);
        
        if (days < 10) {days = "0" + days;}
        if (hours < 10) {hours = "0" + hours;}
        if (minutes < 10) {minutes = "0" + minutes;}
        if (seconds < 10) {seconds = "0" + seconds;}
        
        $("#timer").html(
            "<span>" + next_yo + "</span>" + " in " +
            
            days + "<a>d</a> " +
            hours + "<a>h</a> " +
            minutes + "<a>m</a> " +
            seconds + "<a>s</a>"
        );
    },1000);
});