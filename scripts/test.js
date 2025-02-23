
const test = document.getElementById('test');
var words = [];
var substitute = "";

// get substitute word
chrome.storage.local.get("substitute", function(result) {
    substitute = result.substitute ? result.substitute : "nothing";
});

chrome.storage.local.get("words", function(result) {
    words = result.words ? result.words : [];
});

document.getElementById('test-word').addEventListener('input', function() {
    document.getElementById('test').disabled = false;
    document.getElementById('test').style.backgroundColor = "#132e19";
});


if(test){
    test.onclick = function() {
        test.addEventListener('click', () => {
    
            // get input
            const input = document.getElementById('test-word').value;
        
            // check if empty
            if (input === '') {
                alert('Please enter a word');
                return;
            }

            //join words and combine regex
            var wrds = [];
            words.map(function(word) {

                // add +( +)? for repeating characters then push
                wrds.push((word.type === "default" ? word.word : word.word.replace(/(.)\1+/g,'$1').trim()).split("").map(function(char) {
                        return char + "+( +)?";
                    }).join("")
                );
                
            });
            var exp = new RegExp("(?:"+ wrds.join("|") +")", "gi");
            
            // search for words in text
            var replacedText = input.replace(exp, function(match) {
                            
                // loop through words object
                for(var i = 0; i < words.length; i++) {

                    // if word is found
                    if((words[i].type === "default" ? words[i].word : words[i].word.replace(/(.)\1+/g,'$1').trim()).replace(/ /g, '').toLowerCase() == 
                    match.replace(/(.)\1+/g,'$1').trim().replace(/ /g, '').toLowerCase()) {  

                        switch(words[i].option){
                            case "Censored":
                                return "*".repeat(match.length) + " "; // replace with asterisks // for example if word bobo ****
                            case "Substitute":
                                return substitute + " "; // replace with substitute
                            case "Remove":
                                return " ";
                        }
                    }
                }
            });
            // display filtered word
            if (document.getElementById('test-output')) {
                document.getElementById('test-output').innerHTML = replacedText;
                document.getElementById('test-output').style.color = "#c7b589";
            }
        });
    }
}
