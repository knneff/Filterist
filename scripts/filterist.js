
var words = [];
var substitute = "", exp = "";
var filterToggle = false;
var load = true;
var accounts = [];
var user = 0;

// loader code -------------------------------------
const loader = document.getElementsByClassName('loader');
const show = document.getElementsByClassName('show');

if(loader && show) {

    // get storage load
    chrome.storage.local.get("load", function(result) {
        load = result.load ? result.load : false;

        // wait 3 seconds
        if(load) {

            loader[0].style.display = "block";
            show[0].style.display = "none";

            setTimeout(function() {
                loader[0].style.display = "none";
                show[0].style.display = "block";
                // save load to storage
                chrome.storage.local.set({load: false}, () => {});
            }, 3000);
        } else {
            loader[0].style.display = "none";
            show[0].style.display = "block";
        }
    });
}

// --------------------------------------------

chrome.storage.local.get("user", function(result) {
    user = result.user;
});

chrome.storage.local.get("accounts", function(result) {
    accounts = result.accounts ? result.accounts : [];
});

// get words from storage and set them locally using the words variable
chrome.storage.local.get("words", function(result) {
    words = result.words ? result.words : [];

    //join words and combine regex
    var wrds = [];
    words.map(function(word) {

        // add +( +)? for repeating characters then push
        wrds.push((word.type === "default" ? word.word : word.word.replace(/(.)\1+/g,'$1').trim()).split("").map(function(char) {
                return char + "+( +)?";
            }).join("")
        );
        
    });
    exp = new RegExp("(?:"+ wrds.join("|") +")", "gi");
});

// filter words on page
const filter = () => {
    
    if(document.getElementById("popup")){
        return;
    }

    // get all elements except script and style
    var elems = document.body.getElementsByTagName("*");
    var len1 = elems.length;
    
    // loop through all elements
    for (var i = 0; i < len1; i++) {
    
        var elem = elems[i];
        var len2 = elem.childNodes.length;
    
        // loop through all children
        for (var j = 0; j < len2; j++) {
    
            // get child
            var node = elem.childNodes[j];
    
            // if child is text node
            if (node.nodeType === 3) {
    
                // get text
                var text = node.nodeValue.toLowerCase();
    
                // search for words in text and replace with asterisks
                var replacedText = text.replace(exp, function(match) {

                    var len3 = words.length;
                    
                    // loop through words object
                    for(var i = 0; i < len3; i++) {
                        
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
    
                // if text has changed
                if (replacedText !== text) {
                    // replace text
                    elem.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
}



// mutation settings
var config = { attributes: true, childList: true, characterData: true, subtree: true };

// mutation observer for other sites
var observer = new MutationObserver(function(mutations) {

    // check if there are any changes in the DOM
    if(mutations.length > 0) {
        chrome.storage.local.get("toggle", function(result) {
            filterToggle = result.toggle ? result.toggle : false;

            // if filter is on
            if(filterToggle) {
                filter();
            }
        });
    }
});

// observe changes in dynamic sites such as youtube, tiktok, twitter, instagram, facebook ( filter words )
observer.observe(document, config);

// check if toggle is toggled 
const toggle = document.getElementById('toggle-switch');
if(toggle){
    // get toggle from storage
    chrome.storage.local.get("toggle", function(result) {
        filterToggle = result.toggle ? result.toggle : false;
        toggle.checked = filterToggle;
        document.getElementsByClassName('filter-toggle-info')[0].innerText = filterToggle ? "Turn off Filter" : "Turn on Filter";
    });

    // check if clicked
    toggle.addEventListener('click', function() {
    
        // toggle filter
        filterToggle = !filterToggle;
        // change p element with class filter-toggle-info
        document.getElementsByClassName('filter-toggle-info')[0].innerText = filterToggle ? "Turn off Filter" : "Turn on Filter";

        // save toggle to storage
        chrome.storage.local.set({toggle: filterToggle}, () => {});
    });
}


const censormethod = document.getElementById('censor-method');
if(censormethod){
    censormethod.addEventListener('input', function() {
        document.getElementById('addWord').disabled = false;
        document.getElementById('addWord').style.backgroundColor = "#132e19";
    });
}


// add word to storage
const add = document.getElementById('addWord');
if(add){
    
    add.addEventListener('click', function() {

        let word = document.getElementById('word').value; // input
        let option = document.getElementById('censor-method').value; // input

        if(!word) {
            alert("Please enter a word.");
            return;
        }

        // loop through words object and check if word already exists
        for(let i = 0; i < words.length; i++) {
            if(words[i].word.toLowerCase() == word.toLowerCase()) {
                return;
            }
        }

        // add word to array
        let obj = { word: word.toLowerCase(), option: option, type: "custom"};
        words.push(obj);
        chrome.storage.local.set({words: words}, () => {}); // save to storage
        window.location.reload(); // reload page

    })
}

const subword = document.getElementById('subword');
if(subword){
    subword.addEventListener('input', function() {
        document.getElementById('substitute').disabled = false;
        document.getElementById('substitute').style.backgroundColor = "#132e19";
    });
}

// get substitute element
const subs = document.getElementById('substitute');
if(subs){

    // get substitute word
    chrome.storage.local.get("substitute", function(result) {
        substitute = result.substitute ? result.substitute : "nothing";
        document.getElementById('substitute-word').innerText = "substitute word : " + substitute;
    });

    // check if clicked
    subs.addEventListener('click', function() {

        // get input
        const sub = document.getElementById('subword').value;
        // check if input is empty
        if(!sub) {
            alert("Please enter a word.");
            return;
        }
       
        substitute = sub;  // save input locally
        document.getElementById('substitute-word').innerText = "substitute word : " + substitute;  // set substitute word in element
        chrome.storage.local.set({substitute: substitute}, () => {}); // save to storage
        window.location.reload(); // reload page
        
    });
}





// reset name elements
const reset_name = document.getElementById('reset-name');
const reset_uname = document.getElementById('reset-username');
const save = document.getElementById('save');
if(reset_name && reset_uname && save){
    
    chrome.storage.local.get("accounts", function(result) {
        accounts = result.accounts ? result.accounts : [];
        reset_name.value = accounts[user].name;
        reset_uname.value = accounts[user].username;
    });

    reset_name.addEventListener('input', function() {
        save.style.visibility = "visible";
    });
    reset_uname.addEventListener('input', function() {
        save.style.visibility = "visible";
    });

    // check if clicked
    save.addEventListener('click', function() {

        if(!reset_name.value || !reset_uname.value) {
            alert("You cannot leave name or username empty");
            return;
        }
        // loop through accounts object and check if username already exists
        if(accounts.length > 1) {
            for(let i = 0; i < accounts.length; i++) {
                if(i !== user && accounts[i].username === reset_uname) {
                    alert("Username already in use");
                    return;
                }
            }
        }

        // save password to storage
        accounts[user].name = reset_name.value;
        accounts[user].username = reset_uname.value;
        chrome.storage.local.set({accounts: accounts}, () => {});

        // notify user that password has changed
        alert("Changes saved");
        save.style.visibility = "hidden";
    });
}

// reset password elements
const old_pass = document.getElementById('old-password');
const reset_pass = document.getElementById('reset-password');
const reset_pass1 = document.getElementById('reset-password1');
const reset = document.getElementById('reset');

if(old_pass && reset_pass && reset_pass1 && reset){

    old_pass.addEventListener('input', function() {
        reset.style.visibility = "visible";
    });
    reset_pass.addEventListener('input', function() {
        reset.style.visibility = "visible";
    });
    reset_pass1.addEventListener('input', function() {
        reset.style.visibility = "visible";
    });
    
    // check if clicked
    reset.addEventListener('click', function() {

        if(!old_pass.value || !reset_pass.value || !reset_pass1.value) {
            alert("Please supply all information");
            return;
        }
        if(accounts[user].password !== old_pass.value){
            console.log(accounts[user].password)
            alert("Incorrect old password");
            return;
        }

        // if passwords match
        if(reset_pass.value == reset_pass1.value){

            // save password to storage
            accounts[user].password = reset_pass.value;
            chrome.storage.local.set({accounts: accounts}, () => {});

            // notify user that password has changed
            alert("Password changed");

            // set inputs to empty
            reset.style.visibility = "hidden";
            old_pass.value = "";
            reset_pass.value = "";
            reset_pass1.value = "";
        } else {

            // notify user that passwords do not match
            alert("Passwords do not match");
        }
    });
}

// Create new account
const newacc = document.getElementById('newacc');
if(newacc){
    newacc.addEventListener('click', function() {
        if(confirm("Creating a new account will log you out of your account.\nDo you want to continue?") === true){
            window.location.href = "setpassword.html";
        } 
    });
}

// Delete account
const delacc = document.getElementById('delacc');
if(delacc){
    delacc.addEventListener('click', function() {
        if(confirm("Deleting this account will log you out of your account.\nDo you want to continue?") === true){
            accounts.splice(user, 1);
            chrome.storage.local.set({accounts: accounts}, () => {});
            window.location.href = "login.html";
        } 
    });
}