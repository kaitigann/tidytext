var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;	
			
			if (text.match(/fuck/gi) != null){
				replaceFWord(text, node);
		    }
			if (text.match(/shit/gi) != null){
				replaceSWord(text, node);
		    }
			
			if (text.match(/damn/gi) != null){
				replaceDWord(text, node);
		    }
			
			if (text.match(/ass/gi) != null){
				replaceAWord(text, node);
		    }
			if (text.match(/bitch/gi) != null){
				replaceBWord(text, node);
		    }
        }
    }
}

function replaceFWord(text, node) {
	var replacementWords = ["frack", "frick", "flip", "fudge", "flim-flam", "fraggle"];
	var replacedText = text.replace(/fuck/gi, replacementWords[Math.floor(Math.random() * 5)]);

     if (replacedText !== text) {
         node.replaceWith(document.createTextNode(replacedText));
      }
}

function replaceSWord(text, node) {
	var replacementWords = ["short", "snickerdoodle", "spit", "sugar", "poop", "shoot"];
	var replacedText = text.replace(/shit/gi, replacementWords[Math.floor(Math.random() * 5)]);

     if (replacedText !== text) {
         node.replaceWith(document.createTextNode(replacedText));
      }
}

function replaceDWord(text, node) {
	
	var replacementWords = ["dang", "darn", "daggum", "doggon", "jam", "ham", "spam"];

	var replacedText = text.replace(/damn/gi, replacementWords[Math.floor(Math.random() * 6)]);
     if (replacedText !== text) {
         node.replaceWith(document.createTextNode(replacedText));
      }
}

function replaceAWord(text, node) {
	
	var replacementWords = ["booty", "ask", "bum", "fanny"];

	var replacedText = text.replace(/ass/gi, replacementWords[Math.floor(Math.random() * 3)]);
     if (replacedText !== text) {
         node.replaceWith(document.createTextNode(replacedText));
      }
}

function replaceBWord(text, node) {
	
	var replacementWords = ["birch", "witch", "bitcoin", "beast"];

	var replacedText = text.replace(/bitch/gi, replacementWords[Math.floor(Math.random() * 3)]);
     if (replacedText !== text) {
         node.replaceWith(document.createTextNode(replacedText));
      }
}





























