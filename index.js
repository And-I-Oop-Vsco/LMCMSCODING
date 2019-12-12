

		
			function checkQuiz() {
			
			let additon = document.getElementsByName("addition");
			let additon1 = document.getElementsByName("addition1");
			let additon2 = document.getElementsByName("addition2");
			let additon3 = document.getElementsByName("addition3");
			let additon4 = document.getElementsByName("addition4");
			let subtraction = document.getElementsByName("subtraction")
			let subtraction2 = document.getElementsByName("subtraction2")
			let subtraction3 = document.getElementsByName("subtraction3")

			let percentCorrect = 0;
			let numberCorrect = 0;

			for (let i = 0; i < additon.length; i++) {
				if (additon[i].checked && additon[i].value == "4") {
					percentCorrect = percentCorrect + 20;
					numberCorrect = numberCorrect + 1;
					break;
				
				}

			}
			for (let i = 0; i < additon1.length; i++) {
				if (additon1[i].checked && additon1[i].value == "5") {
					percentCorrect = percentCorrect + 20;
					numberCorrect = numberCorrect + 1;
					break;
				
				}

			}
			for (let i = 0; i < additon2.length; i++) {
				if (additon2[i].checked && additon2[i].value == "8") {
					percentCorrect = percentCorrect + 20;
					numberCorrect = numberCorrect + 1;
					break;
				
				}

			}for (let i = 0; i < additon3.length; i++) {
				if (additon3[i].checked && additon3[i].value == "12") {
					percentCorrect = percentCorrect + 20;
					numberCorrect = numberCorrect + 1;
					break;
				
				}

			}
			for (let i = 0; i < additon4.length; i++) {
				if (additon4[i].checked && additon4[i].value == "21") {
					percentCorrect = percentCorrect + 20;
					numberCorrect = numberCorrect + 1;
					break;
				
				}

			}
			for (let i = 0; i < subtraction.length; i++) {
				if (subtraction[i].checked && subtraction[i].value == "15") {
					percentCorrect = percentCorrect + 20;
					numberCorrect = numberCorrect + 1;
					break;

				}
			}
			for (let i = 0; i < subtraction2.length; i++) {
				if (subtraction2[i].checked && subtraction2[i].value == "90") {
					percentCorrect = percentCorrect + 20;
					numberCorrect = numberCorrect + 1;
					break;

				}
			}
			for (let i = 0; i < subtraction3.length; i++) {
				if (subtraction3[i].checked && subtraction3[i].value == "69") {
					percentCorrect = percentCorrect + 20;
					numberCorrect = numberCorrect + 1;
					break;

				}
			
			}
			alert(percentCorrect + " " + numberCorrect);
		}