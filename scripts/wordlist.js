

var words = []
var checkedboxes = [];
var default_words = [
    { word: "Abno", option: "Censored", type: "default" },
    { word: "Abnu", option: "Censored", type: "default" },
    { word: "Baliw", option: "Censored", type: "default" },
    { word: "Bobo", option: "Censored", type: "default" },
    { word: "Obob", option: "Censored", type: "default" },
    { word: "Vovo", option: "Censored", type: "default" },
    { word: "Ovov", option: "Censored", type: "default" },
    { word: "Bugok", option: "Censored", type: "default" },
    { word: "Buguk", option: "Censored", type: "default" },
    { word: "Buisit", option: "Censored", type: "default" },
    { word: "Buiset", option: "Censored", type: "default" },
    { word: "Buysit", option: "Censored", type: "default" },
    { word: "Buyset", option: "Censored", type: "default" },
    { word: "Bwisit", option: "Censored", type: "default" },
    { word: "Bwiset", option: "Censored", type: "default" },
    { word: "Buwisit", option: "Censored", type: "default" },
    { word: "Buwiset", option: "Censored", type: "default" },
    { word: "Gago", option: "Censored", type: "default" },
    { word: "Gagu", option: "Censored", type: "default" },
    { word: "Gaga", option: "Censored", type: "default" },
    { word: "Hampaslupa", option: "Censored", type: "default" },
    { word: "Hayop", option: "Censored", type: "default" },
    { word: "Hayof", option: "Censored", type: "default" },
    { word: "Hayup", option: "Censored", type: "default" },
    { word: "Kapalmukha", option: "Censored", type: "default" },
    { word: "Kapalngmukha", option: "Censored", type: "default" },
    { word: "Kapalangmukha", option: "Censored", type: "default" },
    { word: "Kapalmuka", option: "Censored", type: "default" },
    { word: "Kapalngmuka", option: "Censored", type: "default" },
    { word: "Kapalangmuka", option: "Censored", type: "default" },
    { word: "Landi", option: "Censored", type: "default" },
    { word: "Lande", option: "Censored", type: "default" },
    { word: "Leche", option: "Censored", type: "default" },
    { word: "Letse", option: "Censored", type: "default" },
    { word: "Lintik", option: "Censored", type: "default" },
    { word: "Nayupak", option: "Censored", type: "default" },
    { word: "Nutil", option: "Censored", type: "default" },
    { word: "Nyeta", option: "Censored", type: "default" },
    { word: "Pakyu", option: "Censored", type: "default" },
    { word: "Pakshet", option: "Censored", type: "default" },
    { word: "Pakshit", option: "Censored", type: "default" },
    { word: "Shet", option: "Censored", type: "default" },
    { word: "Pokpok", option: "Censored", type: "default" },
    { word: "Putangina", option: "Censored", type: "default" },
    { word: "Potangina", option: "Censored", type: "default" },
    { word: "Tangina", option: "Censored", type: "default" },
    { word: "Tangena", option: "Censored", type: "default" },
    { word: "Tanginis", option: "Censored", type: "default" },
    { word: "Tangna", option: "Censored", type: "default" },
    { word: "Taena", option: "Censored", type: "default" },
    { word: "Inamo", option: "Censored", type: "default" },
    { word: "Taragis", option: "Censored", type: "default" },
    { word: "Shuta", option: "Censored", type: "default" },
    { word: "Raulo", option: "Censored", type: "default" },
    { word: "Tanga", option: "Censored", type: "default" },
    { word: "Tarantado", option: "Censored", type: "default" },
    { word: "Tarantadu", option: "Censored", type: "default" },
    { word: "Tado", option: "Censored", type: "default" },
    { word: "Tomboy", option: "Censored", type: "default" },
    { word: "Ulol", option: "Censored", type: "default" },
    { word: "Ulul", option: "Censored", type: "default" },
    { word: "Langya", option: "Censored", type: "default" },
    { word: "Langhiya", option: "Censored", type: "default" },
    { word: "Langmarine", option: "Censored", type: "default" },
    { word: "Lakangmarine", option: "Censored", type: "default" },
    { word: "Nimal", option: "Censored", type: "default" },
    { word: "Bolang", option: "Censored", type: "default" },
    { word: "Kapallupa", option: "Censored", type: "default" },
    { word: "Kapalalupa", option: "Censored", type: "default" },
    { word: "Kapalmolupa", option: "Censored", type: "default" },
    { word: "Kapalkalupa", option: "Censored", type: "default" },
    { word: "Kapalnalupa", option: "Censored", type: "default" },
    { word: "Mulala", option: "Censored", type: "default" },
    { word: "Murit", option: "Censored", type: "default" },
    { word: "Muret", option: "Censored", type: "default" },
    { word: "Muting", option: "Censored", type: "default" },
    { word: "Muteng", option: "Censored", type: "default" },
    { word: "Taknay", option: "Censored", type: "default" },
    { word: "Dana", option: "Censored", type: "default" },
    { word: "Damo", option: "Censored", type: "default" },
    { word: "Dumo", option: "Censored", type: "default" },
    { word: "Duna", option: "Censored", type: "default" },
    { word: "Dayo", option: "Censored", type: "default" },
    { word: "Duyo", option: "Censored", type: "default" },
    { word: "Syapo", option: "Censored", type: "default" },
    { word: "Puta", option: "Censored", type: "default" },
    { word: "Pota", option: "Censored", type: "default" },
    { word: "Antac", option: "Censored", type: "default" },
    { word: "Bayag", option: "Censored", type: "default" },
    { word: "Yagba", option: "Censored", type: "default" },
    { word: "Buldit", option: "Censored", type: "default" },
    { word: "Buldet", option: "Censored", type: "default" },
    { word: "Burat", option: "Censored", type: "default" },
    { word: "Butu", option: "Censored", type: "default" },
    { word: "Chupa", option: "Censored", type: "default" },
    { word: "Supa", option: "Censored", type: "default" },
    { word: "Dede", option: "Censored", type: "default" },
    { word: "Dyoga", option: "Censored", type: "default" },
    { word: "Joga", option: "Censored", type: "default" },
    { word: "Jakol", option: "Censored", type: "default" },
    { word: "Kantot", option: "Censored", type: "default" },
    { word: "Kantut", option: "Censored", type: "default" },
    { word: "Iyot", option: "Censored", type: "default" },
    { word: "Eut", option: "Censored", type: "default" },
    { word: "Hayok", option: "Censored", type: "default" },
    { word: "Karat", option: "Censored", type: "default" },
    { word: "Kupal", option: "Censored", type: "default" },
    { word: "Libog", option: "Censored", type: "default" },
    { word: "Libug", option: "Censored", type: "default" },
    { word: "Pekpek", option: "Censored", type: "default" },
    { word: "Kepkep", option: "Censored", type: "default" },
    { word: "Pepe", option: "Censored", type: "default" },
    { word: "Kipay", option: "Censored", type: "default" },
    { word: "Pitaklan", option: "Censored", type: "default" },
    { word: "Puke", option: "Censored", type: "default" },
    { word: "Puki", option: "Censored", type: "default" },
    { word: "Kiki", option: "Censored", type: "default" },
    { word: "Puwit", option: "Censored", type: "default" },
    { word: "Puwet", option: "Censored", type: "default" },
    { word: "Pwet", option: "Censored", type: "default" },
    { word: "Salsal", option: "Censored", type: "default" },
    { word: "Suso", option: "Censored", type: "default" },
    { word: "Susu", option: "Censored", type: "default" },
    { word: "Tamod", option: "Censored", type: "default" },
    { word: "Tamud", option: "Censored", type: "default" },
    { word: "Modta", option: "Censored", type: "default" },
    { word: "Mudta", option: "Censored", type: "default" },
    { word: "Titi", option: "Censored", type: "default" },
    { word: "Tite", option: "Censored", type: "default" },
    { word: "Etits", option: "Censored", type: "default" },
    { word: "Utong", option: "Censored", type: "default" },
    { word: "Utung", option: "Censored", type: "default" }
];

chrome.storage.local.get("words", function(result) {
    words = result.words ? result.words : [];
});

if(checkedboxes.length == 0) {
    document.getElementById('delete').style.display = "none";
    document.getElementById('censor-method').style.display = "none";
    document.getElementById('save').style.display = "none";
}

function deleteWord(word) {

    for(let i = 0; i < words.length; i++) {
        if(words[i].word === word) {
            words.splice(i, 1);
        }
    }

    // delete container from DOM
    // save new data to storage
    chrome.storage.local.set({words: words}, () => {});
    document.getElementById(word).remove();
}

function editWord(word,edit) {

    for(let i = 0; i < words.length; i++) {
        if(words[i].word === word) {
            words[i].word = edit;
            document.getElementById(word + "edit").innerText =  words[i].word + " - " +  words[i].option;
        }
    }
    // delete container from DOM
    // save new data to storage
    chrome.storage.local.set({words: words}, () => {});
    
    
}

function searchWords(search_words){
    
    // check if words exist
    if(search_words.length > 0) {
        // create container for each word and and create p element for each word then add option for word deletion
        for(let i = 0; i < search_words.length; i++) {

            let word = search_words[i].word;
            let option = search_words[i].option;
            let wordContainer = document.createElement('div');
            wordContainer.style.display = "flex";
            wordContainer.style.justifyContent = "space-between";
            wordContainer.style.alignItems = "center";
            wordContainer.style.margin = "10px 0"; 
            wordContainer.style.padding = "1px";
            wordContainer.style.border = "2px solid #96906a";
            wordContainer.id = word;

            wordContainer.setAttribute('id', word);
            let wordElement = document.createElement('p');
            wordElement.innerText = word + " - " + option;
            wordElement.id = word + "edit";

            // let deleteButton = document.createElement('button');

            let checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.id = word;
            checkbox.style.marginRight = "10px";
            checkbox.addEventListener('change', function() {
                if(this.checked) {
                    document.getElementById('select-all').innerText = "Unselect All";
                    checkedboxes.push(word);
                } else {
                    if(checkedboxes.length < 2){
                        document.getElementById('select-all').innerText = "Select All";
                    }
                    checkedboxes.splice(checkedboxes.indexOf(word), 1);
                }
                
                if(checkedboxes.length > 0) {
                    document.getElementById('delete').style.display = "inline";
                    document.getElementById('censor-method').style.display = "inline";
                    document.getElementById('save').style.display = "inline";

                } else {
                    document.getElementById('delete').style.display = "none";
                    document.getElementById('censor-method').style.display = "none";
                    document.getElementById('save').style.display = "none";
                }
            });

            // deleteButton.style.backgroundColor = "none";
            // deleteButton.setAttribute("id", 'delete');
            
            // edit image 
            let edit = document.createElement('img');
            //images/trash.png
            edit.src = "./../images/edit.png";
            edit.style.width = "18px";
            edit.style.height = "18px";
            edit.style.marginRight = "10px";
            edit.style.cursor = "pointer";
            //deleteButton.appendChild(img);

            edit.onclick = function() {
                var edited = prompt("Edit word", word);
                if(edited){
                    editWord(word,edited);
                }
            }

            // trash image 
            let img = document.createElement('img');
            //images/trash.png
            img.src = "./../images/trash.png";
            img.style.width = "20px";
            img.style.height = "20px";
            img.style.marginRight = "10px";
            img.style.cursor = "pointer";
            //deleteButton.appendChild(img);

            img.onclick = function() {
                deleteWord(word);
            }

            // create div for checkbox and word element
            let checkboxDiv = document.createElement('div');
            checkboxDiv.style.display = "flex";
            checkboxDiv.style.alignItems = "center";
            checkboxDiv.style.width = "100%";
            checkboxDiv.style.margin = "0 10px";

            checkboxDiv.appendChild(checkbox);
            checkboxDiv.appendChild(wordElement);

            wordContainer.appendChild(checkboxDiv);
            wordContainer.appendChild(edit);
            wordContainer.appendChild(img);
            
            if(words[i].type == "default"){
                document.getElementById('defaultwords').appendChild(wordContainer);
                
                if(document.getElementById('nodefault')){
                    // create p element to display if there are no default words
                    document.getElementById('nodefault').innerText = "";
                } else {
                    document.getElementById('nodefault').innerText = "no default words";
                }

            } else {
                document.getElementById('customwords').appendChild(wordContainer);

                if(document.getElementById('nocustom')){
                    // create p element to display if there are no custom words
                    document.getElementById('nocustom').innerText = "";
                } else {
                    document.getElementById('nocustom').innerText = "no custom words";
                }

            }
        }
    }
}

chrome.storage.local.get("words", function(result) {
    words = result.words ? result.words : [];
    searchWords(words);
});

// check click on delete button
document.getElementById('delete').onclick = function() {

    if(confirm("Are you sure you want to delete all the selected words?") === false){
        return;
    } 

    for(let i = 0; i < checkedboxes.length; i++) {
        deleteWord(checkedboxes[i]);
        window.location.reload();
    }
}

// check click on save button
document.getElementById('save').onclick = function() {
    for(let i = 0; i < checkedboxes.length; i++) {
        for(let j = 0; j < words.length; j++) {
            if(words[j].word === checkedboxes[i]) {
                words[j].option = document.getElementById('censor-method').value;
            }
        }
    }
    chrome.storage.local.set({words: words}, () => {});
    window.location.reload();
}

// check click on selectall button
document.getElementById('select-all').onclick = function() {

    if(words.length == 0) {
        alert("There are no words to select");
        return;
    }
    
    let checkboxes = document.querySelectorAll('input[type=checkbox]');
    
    // check all checkboxes
    if(checkedboxes.length > 0) {
        document.getElementById('select-all').innerText = "Select All";
        for(let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
        }
        document.getElementById('delete').style.display = "none";
        document.getElementById('censor-method').style.display = "none";
        document.getElementById('save').style.display = "none";
        
    // uncheck
    } else {
        document.getElementById('select-all').innerText = "Unselect All";
        for(let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = true;
        }
        document.getElementById('delete').style.display = "inline";
        document.getElementById('censor-method').style.display = "inline";
        document.getElementById('save').style.display = "inline";
    }
    
    // add or remove words to checkedboxes array
    for(let i = 0; i < words.length; i++) {
       // check if checkbox is checked before adding to array
       if(checkboxes[i].checked) {
           checkedboxes.push(words[i].word);
       } else {
           checkedboxes.pop(words[i].word);
       }
    }
}

// #132e19
const censormethod = document.getElementById('censor-method');
if(censormethod){
    censormethod.addEventListener('input', function() {
        document.getElementById('save').disabled = false;
        document.getElementById('save').style.backgroundColor = "#132e19";
    });
}


// check on restore button click
document.getElementById('restore').onclick = function() {
    
    if(confirm("Restore default words to their default value?\nYour custom words will not be affected.") === false){
        return;
    } 

    // restore default words
    // dont remove current custom words
    chrome.storage.local.get("words", function(result) {
        words = result.words ? result.words : [];
        // filter out custom words
        let customWords = words.filter(word => word.type === "custom");
        chrome.storage.local.set({ words: default_words.concat(customWords) });
    });
    window.location.reload();
}

// search button click and search for word
document.getElementById('search').onclick = function() {
    let search = document.getElementById('search-input').value;

    if(document.getElementById('search').innerText === "Cancel"){
        document.getElementById('search').innerText = "Search";
        document.getElementById('search-input').disabled = false;
        document.getElementById('search-input').value = "";
        window.location.reload();    
    }

    // check if search is empty
    if(search.length == 0 || search == "") {
        searchWords(words);
        alert("Please enter a word to search");
        return;
    }

    // search for words and display them
    let searchwords = words.filter(word => word.word.toLowerCase().includes(search.toLowerCase()));

    // check if search words is empty
    if(searchwords.length == 0) {
        alert("No words found");
        return;
    }

    let defaultwords = document.getElementById('defaultwords');
    let customwords = document.getElementById('customwords');

    // remove all words from DOM except p element
    while(defaultwords.firstChild) {
        defaultwords.removeChild(defaultwords.firstChild);
    }

    while(customwords.firstChild) {
        customwords.removeChild(customwords.firstChild);
    }

    // display search words
    document.getElementById('search').innerText = "Cancel";
    document.getElementById('search-input').disabled = true;
    searchWords(searchwords);

}
